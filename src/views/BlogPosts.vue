<template>
  <div>
    <nav-bar />
    <b-container class="mb-8">
      <b-row class=" main-content">
        <b-col class="position-relative">
          <h4 class="mb-4">Stories</h4>
<!--          <b-card
            v-for="post in posts"
            :key="post.slug"
            class="mb-3"
            :header="post.title"

          >
            <p class="mb-1 text-muted">{{ formatDate(post.date) }}</p>
            <p>{{ post.summary }}</p>
            <router-link :to="`/blog/${post.slug}`" class="btn btn-primary">Read More</router-link>
          </b-card>-->

          <router-link v-for="post in posts"
                       :key="post.slug" :to="`/blog/${post.slug}`" class="my-1">
            <div class="d-flex align-items-center gap-3 ">
              <div class=" text-muted">{{ formatDate(post.date) }}</div> <div class="text-3xl d-inline-block divider"/> <p>  {{ post.title }}</p>

            </div>
          </router-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import posts from "../blogs/posts.json";
import NavBar from "@/layout-components/nav.vue";

export default {
  name: "BlogPosts",
  components: { NavBar },
  props: [],
  data () {
    return {
      posts: posts
    };
  },
  computed: {
  },
  methods: {
    formatDate (dateString) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
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
.divider {
  width: 2px;
  height: 25px;
  background-color: #ccc;
  display: inline-block
}
</style>
