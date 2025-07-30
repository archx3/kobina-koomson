<template>
  <div>
    <nav-bar />
    <div class="main-content fixed-height-content-lg">
      <b-container class="mb-8">
        <b-row class="  ">
          <b-col class="position-relative">
            <h4 class="mb-4">Stories</h4>
            <router-link v-for="post in postsForCurrentPage"
                         :key="post.slug" :to="`/blog/${post.slug}`" class="my-1">
              <div class="d-flex align-items-center gap-3 p-2 my-3">
                <div class=" text-muted">{{formatDate(post.date)}}</div>
                <div class="divider" />
                <p>{{ post.title }}</p>

              </div>
            </router-link>

          </b-col>
        </b-row>
        <b-row  v-if="pages.length > 1" class="mt-5 justify-content-start">
          <b-col sm="auto" class="col-auto d-flex align-items-center">
            <p class="text-muted">Page <strong>{{ currentPage }}</strong> of {{ totalPages }}</p>
          </b-col>
          <b-col class=" border-left">
            <b-row>
              <b-col sm="auto">
                <b-button class="mr-3" :class="{'disabled': !canGoToPreviousPage,}" variant="outline-primary"
                          @click="goToPreviousPage">Previous
                </b-button>
                <b-button :class="{'disabled': !canGoToNextPage,}"
                          variant="outline-primary" @click="goToNextPage">Next
                </b-button>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <mini-footer class="fixed-bottom-xl" />
  </div>
</template>

<script>
import allPosts from "../blogs/posts.json";
import NavBar from "@/layout-components/nav.vue";
import dayjs from "dayjs";

const posts = allPosts;
const PAGE_SIZE = 10;

const pages = allPosts; /*/!* Array<Array<Page>> *!/ = [];

for (let i = 0; i < posts.length; i += PAGE_SIZE) {
  pages.push(posts.slice(i, i + PAGE_SIZE));
}*/

export default {
  name: "BlogPosts",
  components: { NavBar },
  props: [],
  data () {
    return {
      posts: posts,
      pages: pages,
      totalPages: pages.length
    };
  },
  computed: {
    // let create a computed to paginate the posts
    // we'll use a computed property to get the current page (1 Indexed) of posts from a query parameter in the URL else default to the first page
    currentPage: function() {
      return parseInt(this.$route.query.page || 1, 10);
    },
    postsForCurrentPage: function() {
      return this.pages[this.currentPage - 1] || [];
    },
    canGoToNextPage: function() {
      return this.currentPage < this.totalPages;
    },
    canGoToPreviousPage: function() {
      return this.currentPage > 1;
    }
  },
  methods: {
    formatDate (dateString) {
      // const options = { year: "numeric", month: "long", day: "numeric" };
      // return new Date(dateString).toLocaleDateString(undefined, options);
      return dayjs(dateString).format("DD MMM, YYYY");
    },
    goToNextPage () {
      if (this.canGoToNextPage) {
        this.$router.push({ query: { page: this.currentPage + 1 } });
      }
    },
    goToPreviousPage () {
      if (this.canGoToPreviousPage) {
        this.$router.push({ query: { page: this.currentPage - 1 } });
      }
    }
  },
  mounted () {
  },
  created () {
  },
  destroyed () {
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/scss/includes/mixins";

.divider {
  width: 2px;
  height: calc(100% + 10px);
  min-height: 50px;
  max-height: 100%;
  background-color: var(--outline);

  @include _mobile {
    min-height: 25px;
  }
}
</style>
