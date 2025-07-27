<template>
  <div id='app-'>
    <seo
      :title="frontmatter.title"
      :description="frontmatter.description"
      :image="frontmatter.cover"
      :url="`https://kobinakoomson.com/blogs/${slug}`"
      :type="'article'"
      :publishedTime="frontmatter.date"
      :author="frontmatter.author"
      :twitterCard="'summary_large_image'"
      :twitterHandle="'@kobina_koomson'"
      :siteName="'Kobina Koomson'"
    />
    <nav-bar />
    <b-container class="mb-8">
      <b-row class=" main-content">
        <b-col class="position-relative">
          <div class="sticky-top post-title d-flex align-items-center z-index-1 text-white mb-4">
            <div class="  bg-secondary p-4 text-center w-100">
              <h3 class="text-center">{{ frontmatter.title }}</h3>
            </div>
          </div>
          <b-row class="mb-4">
            <b-col>
              <img height="400" :src="frontmatter.cover" :alt="formatter.coverAlt"
                   class="img-fluid cover-image rounded-18 shadow-lg" />
            </b-col>
          </b-row>

          <b-row class="mt-6">
            <b-col md="3" class="">
              <b-card class="d-flex flex-column gap-4 post-meta sticky-top">
                <div class="post-author">
                  <h5 class=" font-weight-600">{{ frontmatter.author }}</h5>
                </div>
                <div class="post-date mt-2 mb-3 text-muted">
                  {{ frontmatter.date }}
                </div>
                <div class="post-tags">
                  <strong>Tags:</strong>
                  <span v-for="(tag, index) in frontmatter.tags" :key="index" class="tag-sm m-1 d-inline-block">{{
                      tag
                    }}</span>
                </div>
              </b-card>
            </b-col>
            <b-col>

              <div class="blog-post-content" v-html="html" />
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <b-row class="mt-5"  v-if="relatedPosts.length > 0">
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
      relatedPosts: []
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
          highlight: function(str, lang) {
            if (lang && hljs.getLanguage(lang)) {
              try {
                return `<pre class="hljs"><code>${hljs.highlight(str, { language: lang }).value}</code></pre>`;
              } catch (__) {
              }
            }
            return `<pre class="hljs"><code>${md.utils.escapeHtml(str)}</code></pre>`;
          }
        });

        console.log({ data });

        // Render Markdown to HTML
        this.html = md.render(content);
        this.frontmatter = data;
        // let create a computed property for related posts
        // this will filter the posts based on the presence of one or more shared tags
        this.relatedPosts = posts.filter(post => {
          console.log("post.slug", post.slug, "this.slug", this.slug, post.slug + '.md' !== this.slug);
          return post.tags.some(tag => this.frontmatter.tags.includes(tag)) && post.slug + '.md' !== this.slug;
        }).slice(0, 2); // Limit to 3 related posts
      } catch (err) {
        console.error(`Error loading markdown file: ${this.slug}`, err);
      }
    }

  },
  mounted () {
    console.log(this.formatter);
  },
  beforeCreate () {
  },
  created () {
    this.loadMarkdown();
  },
  destroyed () {
  }
};
</script>
<style lang="scss" scoped>
$title-margin-top: 76px;
$title-height: 120px;
.sticky-top {
  top: $title-margin-top !important;
}

.post-title {
  height: $title-height;
}

.post-meta {
  top: $title-margin-top + $title-height !important;
}

.cover-image {
  height: 500px;
  width: 100%;
  object-fit: cover;
  object-position: top center;
}
</style>
<style lang="scss">
.blog-post-content {
  pre {
    padding: 1rem;
    border-radius: 12px;
    overflow-x: auto;
    //background: #0a0a33;
    background: #333;
    margin-top: 1rem;
  }

  code {
    padding: 1rem;
    border-radius: 12px;
    color: #fff;
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
}
</style>
