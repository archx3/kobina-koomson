const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

function truncateString (str, maxLength, wordBoundary = false, ellipsis = true) {
  const ELLIPSIS = ellipsis ? "..." : "";
  if (!wordBoundary) {
    if (str.length <= maxLength) {
      return str;
    }
    return `${str.slice(0, maxLength)}${ELLIPSIS}`;
  }
  const words = str.split(" ");
  let truncated = "";
  for (const word of words) {
    if ((truncated + word).length > maxLength) {
      return truncated.trim() + ELLIPSIS;
    }
    truncated += `${word} `;
  }
  return truncated.trim() + ELLIPSIS;
}

function main () {
  const DOMAIN = "http://kobin.me";
  const blogDir = path.join(__dirname, "../src/blogs");
  const routeFile = path.join(__dirname, "../src/routes/blog-routes.js");
  const sitemapFile = path.join(__dirname, "../public/sitemap.xml");

  const files = fs.readdirSync(blogDir).filter(f => f.endsWith(".md"));

  const routes = [];
  const postList = [];
  const sitemapEntries = [`<url>
<loc>${DOMAIN}</loc>
<changefreq>daily</changefreq>
<priority>1.0</priority>
<lastmod>${new Date().toISOString()}</lastmod>
</url>`, `<url><loc>${DOMAIN}/</loc>
<changefreq>daily</changefreq>
<priority>1.0</priority>
<lastmod>${new Date().toISOString()}</lastmod>
</url>`, `<url><loc>${DOMAIN}/about</loc>
<changefreq>monthly</changefreq>
<priority>0.8</priority>
<lastmod>${new Date().toISOString()}</lastmod>
</url>`, `<url><loc>${DOMAIN}/logofolio</loc>
<changefreq>monthly</changefreq>
<priority>0.8</priority>
<lastmod>${new Date().toISOString()}</lastmod>
</url>`];
  try {
    files.forEach(file => {
      const filePath = path.join(blogDir, file);
      const content = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(content);

      const slug = data.slug || file.replace(/\.md$/, "");
      const routePath = `/blog/${slug}`;

      routes.push({
        path: routePath,
        component: `() => import(/* webpackChunkName: "${slug}" */ '../views/BlogPost.vue')`,
        props: { slug: file }
      });

      postList.push({
        slug,
        title: data.title || slug,
        date: data.date || "",
        description: data.description || "",
        summary: data.summary || truncateString(data.description || "", 150, true, true),
        tags: data.tags || [],
        cover: data.cover || "",
        coverAlt: data.coverAlt || "",
        thumbnail: data.thumbnail || "",
        published: data.published || true
      });

      sitemapEntries.push(`<url>
<loc>${DOMAIN}/blog/${slug}</loc>
<changefreq>weekly</changefreq>
<priority>0.6</priority>
<lastmod>${data.date ? new Date(data.date).toISOString() : new Date().toISOString()}</lastmod>
</url>`);
    });

    const routeCode = `
export default [
  ${routes.map(r => `{  
    path: '${r.path}',
    component: ${r.component},
    props: ${JSON.stringify(r.props)}
  }`).join(",\n  ")}
]
`;

    fs.writeFileSync(routeFile, routeCode.trim() + "\n");

    console.log("✅ Blog routes generated.");

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.join("\n")}
</urlset>
`;

    console.log("✅ Sitemap generated.");
    fs.writeFileSync(sitemapFile, sitemap);

    console.log("✅ Blog routes and sitemap generated.");

    const postListFile = path.join(__dirname, "../src/blogs/posts.json");
    fs.writeFileSync(postListFile, JSON.stringify(postList, null, 2));
  } catch (err) {
    console.error("❌ Error generating blog routes:", err);
  }
}

main();
