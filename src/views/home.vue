<template>
  <div id="app" ref="globalHost" class="blk fp global-host ys position-relative">
    <nav-bar />
    <hero-section />
    <mini-footer class="fixed-bottom" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NavBar from "@/layout-components/nav.vue";
import HeroSection from "@/layout-components/hero-section.vue";

export default {
  name: "home",
  components: { HeroSection, NavBar },
  props: [],
  data () {
    return {
      title: "Kobina George Koomson, Welcome",
      scrollPosition: 0,
      shadowSectionsTranslation: 1,
      lastScrollTop: 0,
      winHeight: 0,
    };
  },
  computed: {
    year () {
      return this.$route.params.year || new Date().getFullYear();
    },
    pastEvent: function () {
      return this.$route.params.year ? parseInt(this.$route.params.year, 10) < parseInt(new Date().getFullYear(), 10) : false;
    },
    ...mapGetters(["community", "events"])
  },
  methods: {},
  mounted () {
    this.winHeight = window.innerHeight;
  }
};
</script>
