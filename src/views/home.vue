<template>
  <!--The starting div-->
  <div id="app" ref="globalHost" class="blk fp global-host ys rltv">

    <!-- Header Area wrapper SECTION Starts -->
    <header-wrap :year="year" />
    <!-- Header Area wrapper End -->

    <about-me id="about-section"/>
    <!-- Gallery SECTION Start -->
    <section id="skills-section" class="vh-100 skills-section" :class="{'fixed-top' : stickGallery}">
      <div class="container">
        <div class="row portfolio-section min-vh-100 vw-100 justify-content-between">
          <div class="col-lg-6 col-md-4 col-sm-2 col-xs-12 portfolio-intro-pic fade-blur min-vh-100">
            <div class="row no-padding" v-show="indicatorTranslation === 0">
              <img src="../assets/img/background/programming.jpg" class="vh-100" alt="">
            </div>
            <div class="row no-padding" v-show="indicatorTranslation === 33">
              <img src="../assets/img/background/ui-kit.jpeg" class="vh-100" alt="">
            </div>
            <div class="row no-padding" v-show="indicatorTranslation === 66">
              <img src="../assets/img/background/gdesign.jpg" class="vh-100" alt="">
            </div>
          </div>
          <div class="I3u14I7M col-lg-2 col-sm-1 portfolio-section-indicator hide-md" >
            <div class="_2tn0DybF">
              <div class="z_W9K9qB" :style="`transform:translateY(${indicatorTranslation * (-1)}%)`">
                <button class="_24Kb_y7t undefined" aria-label="slide 1" @click="translation=19"></button>
                <button class="_24Kb_y7t" aria-label="slide 2" @click="translation=50"></button>
                <button class="_24Kb_y7t" aria-label="slide 3" @click="translation=84"></button>
                <!--  <button class="_24Kb_y7t" aria-label="slide 4"></button>-->
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-8 col-sm-9 min-vh-100 portfolio-description" style="color: #000">
            <div class="portfolio-intro-text offset-md-2 offset-sm-2" :style="`transform:translateY(${translation * (-1)}%)`">
              <div class="text">
                <div>
                  <h3>Full Stack Developer</h3>
                  <p>I build Apps from Start to finish using industry Standard practices</p>
                  <button class="rounded-pill">View me on Github</button>
                </div>
              </div>
              <div class="text">
                <div>
                  <h3>UI/UX Designer</h3>
                  <p>I try to create the best user experience by designing and building beautiful and endearing interactivity</p>
                  <button class="rounded-pill">See Samples</button>
                </div>
              </div>
              <div class="text">
                <div>
                  <h3>Graphic Designer</h3>
                  <p>I craft modern and sexy art you can't get enough of. Sweet eye candy.</p>
                  <button class="rounded-pill">See Samples</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--    <div class="hero-area-bg container-full-bg" v-show="stickGallery"></div>-->
    <!-- Gallery Section End -->
    <!--<div>
      <gallery-preview :image-sets="galleryData.graphics" v-once/>
    </div>-->

    <portfolio-gallery id="gallery-section"/>

    <!-- Contact Us SECTION -->
    <!--    <contact-us/>-->
    <!-- Contact Us Section End -->
<!--    <skills-levels/>-->
    <my-clients id="customers"/>
<!--    <services/>-->
    <contact-me id="contact"/>

    <!-- Counter SECTION Start-->
    <!--<section class="counter-section section-padding">
      <div class="container">
        <div class="row">
          &lt;!&ndash; Counter Item &ndash;&gt;
          <div class="col-lg-3 col-md-6 col-xs-12 work-counter-widget">
            <div class="counter">
              <div class="icon">
                <i class="lni-mic"></i>
              </div>
              <div class="counter-content">
                <div class="counterUp">{{events.years[year].speakers.length}}</div>
                <p>Speakers</p>
              </div>
            </div>
          </div>
          &lt;!&ndash; Counter Item &ndash;&gt;
          <div class="col-lg-3 col-md-6 col-xs-12 work-counter-widget">
            <div class="counter">
              <div class="icon">
                <i class="lni-bulb"></i>
              </div>
              <div class="counter-content">
                <div class="counterUp">{{events.years[year].seats}}</div>
                <p>Seats</p>
              </div>
            </div>
          </div>
          &lt;!&ndash; Counter Item &ndash;&gt;
          <div class="col-lg-3 col-md-6 col-xs-12 work-counter-widget">
            <div class="counter">
              <div class="icon">
                <i class="lni-briefcase"></i>
              </div>
              <div class="counter-content">
                <div class="counterUp">{{events.years[year].sponsors.length}}</div>
                <p>Sponsors</p>
              </div>
            </div>
          </div>
          &lt;!&ndash; Counter Item &ndash;&gt;
          <div class="col-lg-3 col-md-6 col-xs-12 work-counter-widget">
            <div class="counter">
              <div class="icon">
                <i class="lni-coffee-cup"></i>
              </div>
              <div class="counter-content">
                <div class="counterUp">
                  {{events.years[year].presentations.length
                  + events.years[year].lighteningTalks.length
                  + events.years[year].panelDiscussions.length }}
                </div>
                <p>Sessions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>-->
    <!-- Counter Area End-->
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
  </div>
</template>

<script>
import { mapGetters }   from 'vuex'
// @ is an alias to /src
import HeaderWrap       from './HeaderWrap'
import PortfolioGallery from './PortfolioGallery'
import ContactMe        from './ContactMe'
import MyClients        from './MyClients'
import AboutMe          from './AboutMe'
// import Services         from './Services'
// import Vue         from 'vue'
import VueScrollTo from 'vue-scrollto'

// Vue.use(VueScrollTo)

// You can also pass in the default options
let VueScrollOptions = {
  container : 'body',
  duration  : 500,
  easing    : 'ease',
  offset    : 0,
  force     : true,
  cancelable: false,
  onStart   : false,
  onDone    : function () {
    console.log('scroll-done')
  },
  onCancel  : false,
  x         : false,
  y         : true
};

export default {
  name      : 'home',
  components: { AboutMe, MyClients, ContactMe, PortfolioGallery, HeaderWrap },
  props     : [],
  data () {
    return {
      title                    : 'Kobina George Koomson, Welcome',
      stickGallery             : false,
      scrollPosition           : 0,
      translation              : 19,
      shadowSectionsTranslation: 1,
      lastScrollTop            : 0,
      winHeight                : 0,
      skillsEntryPoint : 0,
      skillsExitPoint : 0,
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
    indicatorTranslation: function () {
      return (this.translation >= 50 && this.translation < 76) ? 33 : this.translation >= 76 ? 66 : 0
    },
    year () {
      return this.$route.params.year || new Date().getFullYear()
    },
    pastEvent           : function () {
      return this.$route.params.year ? parseInt(this.$route.params.year, 10) < parseInt(new Date().getFullYear(), 10) : false
    },
    ...mapGetters(['community', 'events'])
  },
  methods   : {
    handleScrollForGallery: function (e) {
      this.scrollPosition = window.scrollY
      this.stickGallery = this.scrollPosition >= (this.skillsEntryPoint) &&
                          this.scrollPosition <= this.skillsExitPoint

      if (this.scrollPosition < this.skillsEntryPoint) {
        this.translation = 19
      }
      if (this.scrollPosition > this.skillsExitPoint) {
        this.translation = 85
      }
    },
    handleScroll2         : function (e) {
      let delta = window.scrollY, scrollBy = 0.75

      if (this.stickGallery) {
        /* if (this.translation >= 119) {this.stickGallery = false;}else */
        if (delta > this.lastScrollTop) // scrolling down
        {
          if (this.translation < 119) {
            this.translation += scrollBy
          }
        }
        else // scrolling up
        {
          if (this.translation >= 119) {
            this.stickGallery = false
          }
          this.translation -= scrollBy
        }
      }
      this.lastScrollTop = delta
    }
  },
  mounted () {
    this.winHeight = window.innerHeight
    // memoise this so we don't calc them all the time
    this.skillsEntryPoint = (this.winHeight * 2);
    this.skillsExitPoint = Math.floor((this.winHeight * 3) - this.winHeight / 3);

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

    window.addEventListener('scroll', this.handleScrollForGallery);
    window.addEventListener('scroll', this.handleScroll2);
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
  @import "../assets/css/colors";
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

  .portfolio-section {
    background-color: $dark-b-gray;

    .portfolio-intro-pic {
      /*min-width: 60vw;*/
      overflow: hidden;
      z-index: 3;

      .row {
        padding: 0 20px;
      }
    }

    .portfolio-description {
      &::before, &::after {
        content: '';
        width: 100%;
        height: 150px;
        /*background-color: #fff;*/
        background-image: linear-gradient($dark-b-gray 60%, rgba(255, 255, 255, 0));
        /*border: 1px solid #000;*/
        position: absolute;
        z-index: 10;
      }

      &::after {
        top: unset;
        bottom: 0;
        background-image: linear-gradient(0deg, $dark-b-gray 60%, rgba(255, 255, 255, 0));
      }
    }

    .portfolio-intro-text {
      /*height: calc(100vh - 60px);*/
      position: absolute;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      width: 100%;
      /*transition: all .15s ease-in-out;*/
      color: #fff;

      .text {
        max-height: 600px;
        display: flex;
        align-items: center;
        margin: auto;
        height: 100vh;
      }

      h3 {
        font-size: 48px;
        line-height: 48px;
        /*font-weight: 700;*/
        font-weight: 800;
        max-width: 390px;
        margin-top: -10px;
      }

      p {
        /*margin: 0 auto;*/
        margin-bottom: 40px;
        min-height: 40px;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 0;
        font-weight: 400;
        max-width: 350px;
        opacity: .4;
      }
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
        display: none;
      }
    }
  }
</style>
<style lang="scss">
  @import "../assets/css/colors";

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
