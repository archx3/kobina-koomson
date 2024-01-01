<template>
  <!--The starting div-->
  <div id="app" ref="globalHost" class="blk fp global-host ys rltv">

    <!-- Header Area wrapper SECTION Starts -->
    <header-wrap :year="year" />
    <!-- Header Area wrapper End -->

    <about-me id="about-section"/>
    <!-- Gallery SECTION Start -->
    <skills-gallery ></skills-gallery>

    <portfolio-gallery id="gallery-section"/>
<!--    <skills-levels/>-->
    <my-clients id="customers"/>
<!--    <services/>-->
    <contact-me id="contact"/>

    <footer-section></footer-section>

    <!-- Go to Top Link -->
    <a href="#" v-scroll-to="" class="back-to-top">
      <i class="lni-chevron-up"></i>
    </a>

    <!--    <under-construction/>-->

    <!--FIXME Preloader is hidden-->
    <div id="preloader" style="display: none;">
      <div class="sk-circle">
        <div class="sk-circle1 sk-child"></div>
        <div class="sk-circle2 sk-child"></div>
        <div class="sk-circle3 sk-child"></div>
        <div class="sk-circle4 sk-child"></div>
        <div class="sk-circle5 sk-child"></div>
        <div class="sk-circle6 sk-child"></div>
        <div class="sk-circle7 sk-child"></div>
        <div class="sk-circle8 sk-child"></div>
        <div class="sk-circle9 sk-child"></div>
        <div class="sk-circle10 sk-child"></div>
        <div class="sk-circle11 sk-child"></div>
        <div class="sk-circle12 sk-child"></div>
      </div>
    </div>
    <div class="circle-cursor circle-cursor--inner" style="transform: matrix(1, 0, 0, 1, 0, 35); opacity: 1;"></div>
  </div>
</template>

<script>
import { mapGetters }   from 'vuex'
// @ is an alias to /src
import HeaderWrap       from '../layout-components/HeaderWrap.vue'
import PortfolioGallery from '../components/PortfolioGallery'
import ContactMe        from '../components/ContactMe'
import MyClients        from '../components/MyClients'
import AboutMe          from '../sections/home/AboutMe.vue'
// import SkillsGallery   from './Services'
import SkillsGallery    from "../components/SkillsGallery";
// import Vue         from 'vue'

export default {
  name      : 'home',
  components: { AboutMe, MyClients, ContactMe, PortfolioGallery, HeaderWrap, SkillsGallery },
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

    // let oneThirdWinHeight = Math.floor(this.winHeight / 3),
    //   twoThirdsWinHeight = this.winHeight - Math.floor(this.winHeight / 3),
    //   halfWinHeight = Math.floor(this.winHeight / 2),
    //   sections = [
    //     twoThirdsWinHeight,
    //     (this.winHeight * 2) - twoThirdsWinHeight,
    //     (this.winHeight * 5) - twoThirdsWinHeight,
    //     (this.winHeight * 6) - oneThirdWinHeight,
    //     (this.winHeight * 7) + twoThirdsWinHeight,
    // ];
    // console.log('tth', twoThirdsWinHeight, sections);
    // let cancelScroll;

    /* window.addEventListener('scroll', () => {
      console.log(window.scrollY, window.scrollY > sections[0] && window.scrollY < sections[1]);

      if (window.scrollY > sections[0] && window.scrollY < sections[1])
      {
        // cancelScroll = VueScrollTo.scrollTo('#about-section', 500, VueScrollOptions)
        // window.scrollY = this.winHeight;
        if (window.scrollY !== this.winHeight) {
          cancelScroll = this.$scrollTo('#about-section')
          cancelScroll()
        }
      }
      else if (window.scrollY > sections[1] && window.scrollY < sections[2])
      {
        // cancelScroll = VueScrollTo.scrollTo('#skills-section', 500, VueScrollOptions)
      }
      else if (window.scrollY > sections[2] && window.scrollY < sections[3])
      {
        // cancelScroll = VueScrollTo.scrollTo('#gallery-section', 500, VueScrollOptions)
      }

      // cancelScroll = this.$scrollTo(element, duration, options)
      // to cancel scrolling you can call the returned function
      // cancelScroll()
    }); */
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/styles/scss/colors";
  $single-column-width : 100/12;
  .skills-section {
    overflow: hidden;

    .container {
      margin: 0;
    }

    .row {
      /*padding: 0;*/
    }
  }

  .I3u14I7M {
    position: relative;
    flex-basis: 8%;
    display: block;
    top: 6px;
    z-index: 0;
    justify-content: flex-start;
    margin-top: -6.5px;
  }

  ._2tn0DybF {
    position: relative;
    top: 25%;

    &::before {
      content: "";
      position: absolute;
      top: 6px;
      left: 6px;
      display: block;
      width: 13px;
      height: 13px;
      border: 2px solid $accent-color;
      background-color: $dark-b-gray;
      border-radius: 50px;
      z-index: 1;
    }

    &::after {
      content: "";
      position: absolute;
      top: 12.5px;
      /*left: calc(-25vw + 6px);*/
      display: block;
      /*width: 25vw;*/
      height: 2px;
      background-color: $accent-color;
      left: -344px;
      width: 350px;
    }

    .z_W9K9qB {
      transform: translateY(-25%);
      transition: all .15s linear;

      ._24Kb_y7t {
        border: 0;
        background-color: transparent;
        color: inherit;
        margin: 0;
        display: block;
        padding: 6px;
        outline: 0;
        cursor: pointer;
        position: relative;
        z-index: 0;
        box-sizing: border-box;

        &::after {
          content: "";
          display: block;
          width: 13px;
          height: 13px;
          background-color: transparentize($accent-color, .3);
          opacity: .5;
          border-radius: 50%;
          border: 2px solid transparentize($accent-color, .3);
        }
      }
    }
  }

  .container {
    padding: 0 !important;
    margin: 0;
  }
  .fixed-top{
    z-index: 998;
  }
  @media (max-width: 576px) {
    .skills-section{
      position: relative !important;
      .portfolio-intro-pic{
        display: none;
      }
      .portfolio-intro-text{
        margin-left: $single-column-width*1%;
      }
      .portfolio-section-indicator{
        /*display: none;*/
      }
    }
  }
</style>
<style lang="scss">
  @import "../assets/styles/scss/colors";

  section {
  }

  .VueCarousel-slide {
    cursor: url('../assets/img/drag.png') 16 9, ew-resize !important;

    p, h1, h2, h3, h4, h5, h6 {
      user-select: none;
    }
  }

  .vh-50 {
    height: 50vh;
  }

  .rounded-pill{
    width: auto;
    margin: 0 auto;
    padding: 5px 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    font-weight: 400;
    background-color: $dark-b-gray;
    border: 1px solid $accent-color;
    color: $accent-color;
    margin-bottom: 10px;
    transition: all .3s ease;
    &:hover{
      border: 1px solid transparent;
      /*border: none;*/
      background-color: $accent-color;
      color: $dark-b-gray;
    }
  }
  .clr14{
    color: $accent-color;
  }
  .bg-clr14{
    background-color: $accent-color;
  }
</style>
