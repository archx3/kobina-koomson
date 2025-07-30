const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const ELLIPSIS = "...";
const DOMAIN = "http://kobin.me";
const BLOG_DIR = path.join(__dirname, "../src/blogs");
const ROUTE_FILE = path.join(__dirname, "../src/routes/blog-routes.js");
const SITEMAP_FILE = path.join(__dirname, "../public/sitemap.xml");
const POST_LIST_FILE = path.join(__dirname, "../src/blogs/posts.json");

function truncateString (str, maxLength, wordBoundary = false, ellipsis = true) {
  const suffix = ellipsis ? ELLIPSIS : "";
  if (!wordBoundary) {
    if (str.length <= maxLength) {
      return str;
    }
    return `${str.slice(0, maxLength)}${suffix}`;
  }

  const words = str.split(" ");
  let result = "";
  for (const word of words) {
    if ((result + word).length > maxLength) {
      return result.trim() + suffix;
    }
    result += `${word} `;
  }
  return result.trim() + suffix;
}

function createSitemapEntry ({ loc, changeFreq, priority, lastMod }) {
  return `  <url>
    <loc>${loc}</loc>
    <changefreq>${changeFreq}</changefreq>
    <priority>${priority}</priority>
    <lastmod>${lastMod}</lastmod>
  </url>`;
}

function writeRoutesToFile (routes) {
  const routeCode = `
export default [
  ${routes.map(r => `{  
    path: '${r.path}',
    component: ${r.component},
    props: ${JSON.stringify(r.props, null, 2)}
  }`).join(",\n  ")}
]
`;

  fs.writeFileSync(ROUTE_FILE, routeCode.trim() + "\n");
  console.log("✅ Blog routes generated.");
}

function writeSitemapToFile (sitemapEntries) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.join("\n")}
</urlset>
`;

  console.log("✅ Sitemap generated.");
  fs.writeFileSync(SITEMAP_FILE, sitemap);

  console.log("✅ Blog routes and sitemap generated.");
}

function writePostListToFile (postList) {
  // let's sort all the posts by date
  postList.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  const PAGE_SIZE = 10;

  const pages /* Array<Array<Page>> */ = [];

  for (let i = 0; i < postList.length; i += PAGE_SIZE) {
    pages.push(postList.slice(i, i + PAGE_SIZE));
  }

  fs.writeFileSync(POST_LIST_FILE, JSON.stringify(pages, null, 2));
}

function main () {
  const sitemapEntries = [
    createSitemapEntry({ loc: DOMAIN, changeFreq: "daily", priority: "1.0", lastMod: new Date().toISOString() }),
    createSitemapEntry({
      loc: `${DOMAIN}/about`,
      changeFreq: "monthly",
      priority: "0.8",
      lastMod: new Date().toISOString()
    }),
    createSitemapEntry({
      loc: `${DOMAIN}/logofolio`,
      changeFreq: "monthly",
      priority: "0.8",
      lastMod: new Date().toISOString()
    })
  ];

  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith(".md"));
  const routes = [];
  const postList = [];

  try {
    files.forEach(file => {
      const filePath = path.join(BLOG_DIR, file);
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

      sitemapEntries.push(createSitemapEntry({
        loc: `${DOMAIN}${routePath}`,
        changeFreq: "weekly",
        priority: "0.6",
        lastMod: data.date ? new Date(data.date).toISOString() : new Date().toISOString()
      }));
    });
    writeRoutesToFile(routes);

    writeSitemapToFile(sitemapEntries);

    writePostListToFile(postList);
  } catch (err) {
    console.error("❌ Error generating blog routes:", err);
  }
}

main();
