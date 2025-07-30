<template>
  <div id='app-'>
    <seo
      :title="frontmatter.title"
      :description="frontmatter.description"
      :image="`https://kobina.me${frontmatter.cover}`"
      :url="`https://kobina.me/blogs/${slug}`"
      :type="'website'"
      :publishedTime="frontmatter.date"
      :author="frontmatter.author"
      :twitterCard="'summary_large_image'"
      :twitterHandle="'@kobina_koomson'"
      :siteName="'Kobina Koomson'"
    />
    <nav-bar v-slot:nav-footer>
      <div class="post-title d-flex align-items-center z-index-1 text-white">
        <div class=" px-4 pb-4 pt-2 text-center w-100">
          <h3 class="text-center mb-0">{{ frontmatter.title }}</h3>
        </div>
      </div>
    </nav-bar>
    <b-container class="mb-8">
      <b-row class=" main-content" :style="{ marginTop: `${navHeight}px` }">
        <b-col class="position-relative">
          <b-row class="mb-4">
            <b-col>
              <img height="400" :src="frontmatter.cover" :alt="formatter.coverAlt"
                   class="img-fluid cover-image rounded-18 shadow-lg" />
            </b-col>
          </b-row>

          <b-row class="mt-6" md="">
            <b-col class="mb-5 mt-lg-0">
              <div class="blog-post-content" v-html="html" />
            </b-col>
            <b-col lg="3">
              <b-card class="d-flex bg-dark flex-column gap-4 post-meta sticky-top">
                <b-row>
                  <b-col class="col-12 col-md-3 col-lg-12">
                    <div class="post-author">
                      <h6 class=" font-weight-600">{{ frontmatter.author }}</h6>
                    </div>
                    <div class="post-date mt-2 mb-3 text-muted">
                      {{ frontmatter.date }}
                    </div>
                  </b-col>
                  <b-col class="post-tags">
                    <p class="leading-none d-in"><strong>Tags</strong></p>
                    <span v-for="(tag, index) in frontmatter.tags" :key="index" class="tag mr-1 my-1 d-inline-block">{{
                        tag
                      }}</span>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <b-row class="mt-5" v-if="relatedPosts.length > 0">
        <b-col>
          <h4 class="mb-4">Related Posts</h4>
          <div class="d-flex flex-column gap-3">
            <router-link v-for="post in relatedPosts" :key="post.slug" :to="`/blog/${post.slug}`"
                         class="text-decoration-none">
              <div class="d-flex align-items-center gap-3">
                <div class="text-muted">{{ formatDate(post.date) }}</div>
                <div class="text-3xl d-inline-block divider" />
                <p>{{ post.title }}</p>
              </div>
            </router-link>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <mini-footer />

  </div>
</template>
<script>
import matter from "gray-matter";
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import "highlight.js/styles/devibeans.css";
import NavBar from "@/layout-components/nav.vue";
import { formatter } from "@vue/cli-service/lib/util/resolveLoaderError";
import Seo from "@/components/Seo.vue";
import posts from "../blogs/posts.json";
// TODO: add two other blg posts suggestions at the bottom of the post
//  add a "Back to Blogs" button
//  add a "Share" buttons
// set the title of the page to the post title
// set the meta description to the post summary
// set the og:image to the post image if available
//  add a "Read more" button at the end of the post
//  add a "Comments" section at the end of the post

export default {
  name: "BlogPost",
  components: { NavBar, Seo },
  props: [
    "post",
    "content",
    "slug"
  ],
  data () {
    return {
      frontmatter: {},
      html: "",
      relatedPosts: [],
      navHeight: 0
    };
  },
  computed: {},
  methods: {
    formatDate (dateString) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
    formatter,
    async loadMarkdown () {
      try {
        // Dynamically import the Markdown file based on the slug
        const rawMarkdown = await import(`@/blogs/${this.slug}`);

        // Parse the Markdown content and extract front matter
        const { data, content } = matter(rawMarkdown.default || rawMarkdown);

        // Initialize Markdown-it with syntax highlighting
        const md = new MarkdownIt({
          html: true,
          linkify: true,
          typographer: true,
          breaks: true,
          highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
              try {
                return `<pre class="hljs"><code>${hljs.highlight(str, { language: lang }).value}</code></pre>`;
              } catch (e) {
                console.error(`Error highlighting code: ${e}`);
              }
            }
            return `<pre class="hljs"><code>${md.utils.escapeHtml(str)}</code></pre>`;
          }
        });

        // Render Markdown to HTML
        this.html = md.render(content);
        this.frontmatter = data;

        // let create a computed property for related posts
        // this will filter the posts based on the presence of one or more shared tags
        this.relatedPosts = posts.filter(post => {
          return post.tags.some(tag => post.slug + ".md" !== this.slug && this.frontmatter.tags.includes(tag));
        }).slice(0, 2); // Limit to 3 related posts
      } catch (err) {
        console.error(`Error loading markdown file: ${this.slug}`, err);
      }
    },
    setNavHeight (offset = 0) {
      const navBar = this.$el.querySelector(".navbar");
      if (navBar) {
        this.navHeight = navBar.offsetHeight + offset;
      }
    }
  },
  mounted () {
    this.setNavHeight(30);
    window.addEventListener("resize", this.setNavHeight);
  },
  beforeCreate () {
  },
  beforeDestroy () {
    window.removeEventListener("resize", this.setNavHeight);
  },
  created () {
    this.loadMarkdown();
  },
  destroyed () {
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/scss/includes/mixins";

$title-margin-top: 76px;
$title-height: 100px;
.sticky-top {
  @include _desktop {
    top: $title-margin-top !important;
  }
}

.post-title {
  //height: $title-height;
}

.main-content {
  margin-top: $title-margin-top + $title-height;
}

.post-meta {
  top: $title-margin-top + $title-height !important;
}

.cover-image {
  height: 200px;
  width: 100%;
  object-fit: cover;
  object-position: top center;

  @include _tablet {
    height: 400px;
  }

  @include _mobile {
    height: 500px;
  }
}
</style>
<style lang="scss">
.blog-post-content {
  pre {
    padding: 1rem;
    border-radius: 12px;
    overflow-x: auto;
    background: #333;
    margin-top: 1rem;

    code {
      border-radius: 12px;
      color: #fff;
      font-family: 'ubuntu mono', 'Courier New', Courier, monospace;
    }
  }

  code {
    color: #ffc200;
    font-size: 1.3rem;
  }

  blockquote {
    padding: .5rem 1rem;
    background: var(--card-bg);
    font-style: italic;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: 5px;
  }

  .hljs-meta .hljs-string, .hljs-string, .hljs-subst, .hljs-symbol, .hljs-bullet, .hljs-addition {
    color: #6aff00;
  }

  ul {
    li {
      margin-left: 16px;
      padding-left: 5px;
      list-style: disc;
      line-height: 1.6;
      margin-top: .3rem;
    }
  }

  p {
    margin-bottom: 1rem;
    margin-top: 1rem;
    margin-block-start: 1rem;
    margin-block-end: 1rem;
    line-height: 1.6;
    font-size: 1.205rem;
  }

  // let's style tables; theads should be bold and the rest should be normal
  // rows should be underlined (border bottom), whereas the first row should have a thicker underline
  // cells should be left-aligned
  table {
    th, td {
      border-collapse: collapse;
    }

    th {
      padding: 20px 10px;
    }

    td {
      padding: 10px 10px;
    }

    thead {
      th {

        border-bottom: 3px solid var(--outline);
      }
    }

    tr {
      td {
        text-align: left;
        border-bottom: 1px solid var(--outline);
      }
    }
  }
}
</style>
