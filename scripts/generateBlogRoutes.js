const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const ELLIPSIS = "...";
const DOMAIN = "https://kobina.me";
const BASE_URL = DOMAIN;
const BLOG_DIR = path.join(__dirname, "../src/blogs");
const ROUTE_FILE = path.join(__dirname, "../src/routes/blog-routes.js");
const SITEMAP_FILE = path.join(__dirname, "../public/sitemap.xml");
const POST_LIST_FILE = path.join(__dirname, "../src/blogs/posts.json");
const PUBLIC_DIR = path.join(__dirname, "../public");

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

/**
 * creates the html for the seo entry for the blog post
 * @param data {title: string, slug: string, description: string, cover: string, coverAlt: string, published: boolean}
 * @returns {{data: {slug: string, title: string, description: string, cover: string, coverAlt: string, published: boolean}, content: string}}
 */
function createPostHtmlForSeoEntry (data) {
  const { title, slug, description, cover, coverAlt, published } = data;
  return {
    data,
    content: `
  <title>${title}</title>
  <meta name="title" content="${title}"/>
  <meta name="description" content="${description}"/>
  <meta name="image" content="${cover}"/>
  <meta name="image:alt" content="${coverAlt}"/>
  <meta name="robots" content="${published ? "index, follow" : "noindex, nofollow"}"/>
  <meta property="og:title" content="${title}"/>
  <meta property="og:description" content="${description}"/>
  <meta property="og:image" content="${cover}"/>
  <meta property="og:image:alt" content="${coverAlt}"/>
  <meta property="og:type" content="article"/>
  <meta property="og:url" content="${DOMAIN}/blog/${title}"/>
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:title" content="${title}"/>
  <meta name="twitter:description" content="${description}"/>
  <meta name="twitter:image" content="https://kobina.me${cover}"/>
  <meta name="twitter:image:alt" content="${coverAlt}"/>
  <meta name="twitter:creator" content="@georgeranch"/>
  <meta name="twitter:site" content="@georgeranch"/>
  <meta name="twitter:domain" content="${DOMAIN}"/>
  <meta name="twitter:url" content="${DOMAIN}/blog/${slug}"/>
`
  };
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

/**
 * write the html for the seo entry for the blog post to the file
 * @param postsHtmlForSeo {Array<{data: {title: string, slug: string, description: string, cover: string, coverAlt: string, published: boolean}, content: string}>}
 */
function writePostHtmlForSeoToFile (postsHtmlForSeo) {
  postsHtmlForSeo.forEach(post => {
    const { data, content } = post;

    const filePath = path.join(PUBLIC_DIR, `blog/${data.slug}.html`);
    const blogDir = path.join(PUBLIC_DIR, "blog");
    if (!fs.existsSync(blogDir)) {
      fs.mkdirSync(blogDir);
    }

    const html = `
    <!DOCTYPE html>
<html lang="en" class="dark" data-theme="dark">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">

    <link rel="icon" href="${BASE_URL}/favicon/favicon.jpg">
    <link rel="icon" sizes="192x192" href="${BASE_URL}/favicon/favicon.jpg">
    <link rel="icon" type="image/jpg" href="${BASE_URL}/favicon/favicon.jpg">
    <!--[if IE]>
    <link rel="shortcut icon" href="${BASE_URL}/favicon/favicon.jpg"/><![endif]-->
   
    <link rel="canonical" href="${BASE_URL}" />
  ${content}
  </head>
  <body>
    <noscript>
      <strong>Sorry, this site doesn't work properly without JavaScript enabled. Please enable it and enjoy.</strong>
    </noscript>
    <div id="app"></div>
  </body>
</html>

`;

    fs.writeFileSync(filePath, html);
  });
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
  const postsHtmlForSeo = [];

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

      postsHtmlForSeo.push(createPostHtmlForSeoEntry({
        title: data.title || slug,
        description: data.description || "",
        cover: data.cover || "",
        coverAlt: data.coverAlt || "",
        thumbnail: data.thumbnail || "",
        published: data.published || true,
        slug
      }));

      sitemapEntries.push(createSitemapEntry({
        loc: `${DOMAIN}${routePath}`,
        changeFreq: "weekly",
        priority: "0.6",
        lastMod: data.date ? new Date(data.date).toISOString() : new Date().toISOString()
      }));
    });
    writeRoutesToFile(routes);

    writePostHtmlForSeoToFile(postsHtmlForSeo);

    writeSitemapToFile(sitemapEntries);

    writePostListToFile(postList);
  } catch (err) {
    console.error("❌ Error generating blog routes:", err);
  }
}

main();
