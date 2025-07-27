<template>
  <div id="app" ref="globalHost" class="blk fp global-host ys position-relative">
    <nav-bar/>
    <contact-me/>
    <mini-footer/>
  </div>
</template>

<script>
import { mapGetters }   from 'vuex'
import HeaderWrap       from '../layout-components/HeaderWrap.vue'
import PortfolioGallery from '../components/PortfolioGallery'
import ContactMe        from '../components/contact-me.vue'
import MyClients        from '../components/MyClients'
import AboutMe          from '../sections/home/about-me.vue'
import SkillsGallery    from "../components/skills-gallery.vue";
import NavBar from "@/layout-components/nav.vue";
import HeroSection from "@/sections/home/hero-section.vue";

export default {
  name      : 'home',
  components: { NavBar, ContactMe },
  props     : [],
  data () {
    return {
      title                    : 'Kobina George Koomson, Welcome',
      scrollPosition           : 0,
      shadowSectionsTranslation: 1,
      lastScrollTop            : 0,
      winHeight                : 0,
      galleryData              : {
        graphics: [
          [
            {
              link: '/img/test/1.jpg',
              name: 'image1'
            },
            {
              link: '/img/test/2.jpg',
              name: 'image2'
            },
            {
              link: '/img/test/3.jpg',
              name: 'image3'
            }
          ],
          [
            {
              link: '/img/test/4.jpg',
              name: 'image1'
            },
            {
              link: '/img/test/5.jpg',
              name: 'image2'
            },
            {
              link: '/img/test/6.jpg',
              name: 'image3'
            }
          ],
          [
            {
              link: '/img/test/7.jpg',
              name: 'image1'
            },
            {
              link: '/img/test/8.jpg',
              name: 'image2'
            },
            {
              link: '/img/test/9.jpg',
              name: 'image3'
            }
          ],
          [
            {
              link: '/img/test/10.jpg',
              name: 'image1'
            },
            {
              link: '/img/test/11.jpg',
              name: 'image2'
            },
            {
              link: '/img/test/12.jpg',
              name: 'image3'
            }
          ],
          [
            {
              link: '/img/test/13.jpg',
              name: 'image1'
            },
            {
              link: '/img/test/14.jpg',
              name: 'image2'
            },
            {
              link: '/img/test/15.jpg',
              name: 'image3'
            }
          ]
        ]
      },
    }
  },
  computed  : {
    year () {
      return this.$route.params.year || new Date().getFullYear()
    },
    pastEvent           : function () {
      return this.$route.params.year ? parseInt(this.$route.params.year, 10) < parseInt(new Date().getFullYear(), 10) : false
    },
    ...mapGetters(['community', 'events'])
  },
  methods   : {
  },
  mounted () {
    this.winHeight = window.innerHeight;
  }
}
</script>
