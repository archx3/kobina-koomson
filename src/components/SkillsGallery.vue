<template>
 <section id="skills-section" class="vh-100 skills-section" :class="{'stick-to-top' : stickGallery}">
  <div class="container">
   <div class="row portfolio-section min-vh-100 vw-100 justify-content-between">
    <div class=" col-md-6 col-xs-0 portfolio-intro-pic min-vh-100">
     <div class="row no-padding" v-show="indicatorTranslation === 0">
      <lazy-image
       image-class="vh-100"
       alt="Programmer Coding"
       :low-res-src="`https://kobina.sirv.com/Images/kobina-koomson-w/background/prog-n.png?q=16`"
       :src="`https://kobina.sirv.com/Images/kobina-koomson-w/background/prog-n.png`"/>
     </div>
     <div class="row no-padding" v-show="indicatorTranslation === 33">
      <lazy-image
       image-class="vh-100"
       alt="Mock up of a music player on an Iphone"
       :low-res-src="`https://kobina.sirv.com/Images/kobina-koomson-w/background/ui-des-n.png?q=16`"
       :src="`https://kobina.sirv.com/Images/kobina-koomson-w/background/ui-des-n.png`"/>
     </div>
     <div class="row no-padding" v-show="indicatorTranslation === 66">
      <lazy-image
       image-class="vh-100"
       alt="Graphic Design Artwork"
       :low-res-src="`https://kobina.sirv.com/Images/kobina-koomson-w/background/g-des-n.png?q=16`"
       :src="`https://kobina.sirv.com/Images/kobina-koomson-w/background/g-des-n.png`"/>
     </div>
    </div>
    <div class=" col-md-1 I3u14I7M portfolio-section-indicator">
     <div class="_2tn0DybF">
      <div class="z_W9K9qB" :style="`transform:translateY(${indicatorTranslation * (-1)}%)`">
       <button class="_24Kb_y7t undefined" aria-label="slide 1" @click="translation=15"></button>
       <button class="_24Kb_y7t" aria-label="slide 2" @click="translation=45"></button>
       <button class="_24Kb_y7t" aria-label="slide 3" @click="translation=80"></button>
       <!--  <button class="_24Kb_y7t" aria-label="slide 4"></button>-->
      </div>
     </div>
    </div>
    <div class=" col-md-5 min-vh-100 portfolio-description" style="color: #000">
     <article class="bigger text-left offset-md-1 offset-sm-1" style="z-index: 10">
      <div class="empty-space h60-md h25-xs"></div>
      <h3 class="heading text-left">
       <span class="font-weight-light">These are </span>
       <span class="font-weight-bold">My Expertise.</span>
      </h3>
      <div class="empty-space h15-md h10-xs"></div>
     </article>
     <div class="portfolio-intro-text offset-md-1 offset-sm-1" :style="`transform:translateY(${translation * (-1)}%)`">
      <div class="text">
       <div>
        <h3>Software Engineering</h3>
        <p>I build Apps from Start to finish using industry Standard practices</p>
        <a href="/portfolio" class="rounded-pill">See Samples</a>
        <a href="https://github.com/archX3" class="rounded-pill">View me on Github</a>
       </div>
      </div>
      <div class="text">
       <div>
        <h3>UI/UX Design</h3>
        <p>I try to create the best user experience by designing and building beautiful and endearing interactivity</p>
        <a href="/portfolio" class="rounded-pill">See Samples</a>
       </div>
      </div>
      <div class="text">
       <div>
        <h3>Graphic Design</h3>
        <p>I craft modern and sexy art you can't get enough of. Sweet eye candy.</p>
        <a href="/portfolio" class="rounded-pill">See Samples</a>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 </section>
</template>
<script>
export default {
  name     : 'skills-gallery',
  props    : {},
  data ()
  {
    return {
      stickGallery              : false,
      scrollPosition            : 0,
      translation               : 15,
      shadowSectionsTranslation : 1,
      lastScrollTop             : 0,
      winHeight                 : 0,
      winWidth                  : 0,
      skillsEntryPoint          : 0,
      skillsExitPoint           : 0,
      isTabletOrPC              : false
    }
  },
  computed : {
    indicatorTranslation : function ()
    {
      return (this.translation >= 45 && this.translation < 70) ? 33 : this.translation >= 70 ? 66 : 0
    }
  },
  methods  : {
    handleScrollForGallery : function (e)
    {
      this.scrollPosition = window.scrollY;
      this.stickGallery = this.scrollPosition >= (this.skillsEntryPoint) &&
                          this.scrollPosition <= this.skillsExitPoint;

      if (this.scrollPosition < this.skillsEntryPoint)
      {
        this.translation = 15
      }
      if (this.scrollPosition > this.skillsExitPoint)
      {
        this.translation = 85
      }
    },
    handleScroll2          : function (e)
    {
      let delta = window.scrollY, scrollBy = 0.75;

      if (this.stickGallery && this.isTabletOrPC)
      {
        if (delta > this.lastScrollTop) // scrolling down
        {
          if (this.translation < 119)
          {
            this.translation += scrollBy
          }
        }
        else // scrolling up
        {
          if (this.translation >= 119)
          {
            this.stickGallery = false
          }
          this.translation -= scrollBy
        }
      }
      this.lastScrollTop = delta
    }
  },
  mounted ()
  {
    this.winHeight = window.innerHeight;
    this.winWidth = window.innerWidth;
    // memoise this so we don't calc them all the time
    this.skillsEntryPoint = (this.winHeight * 2);
    this.skillsExitPoint = Math.floor((this.winHeight * 3) - this.winHeight / 3);

    if (this.winWidth > 576)
    {
      this.isTabletOrPC = true;
    }

    window.addEventListener('scroll', this.handleScrollForGallery);
    window.addEventListener('scroll', this.handleScroll2);

    window.addEventListener("resize", () =>
    {
      this.winWidth = window.innerWidth;
    })
  }
}
</script>
<style lang="scss">
 @import "../assets/styles/scss/includes/mixins";
 @import "../assets/styles/scss/includes/variables";

 $single-column-width: 100/12;
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
   background-color: $secondary-color;
   overflow: hidden;
   z-index: 3;

   div {
    flex-direction: row;
    justify-content: center;
   }

   .row {
    padding: 0 20px;
   }

   @include mobile {
    display: none;
   }
  }

  .portfolio-section-indicator {
   @include mobile {
    display: none;
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

   &::before {
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

    @include mobile {
     height: 200px;
    }
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
  top: 50%;
  transform: translateY(-50%);

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

 .fixed-top {
  z-index: 998;
 }

 @media (max-width: 576px) {
  .skills-section {
   position: relative !important;

   .portfolio-intro-pic {
    display: none;
   }

   .portfolio-intro-text {
    margin-left: $single-column-width*1%;
   }

   .portfolio-section-indicator {
    /*display: none;*/
   }
  }
 }
</style>
<style lang="scss" scoped>
 @import "../assets/styles/scss/includes/mixins";
 @import "../assets/styles/scss/includes/variables";

 $zindex-fixed: 998;
 .stick-to-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: $zindex-fixed;

  @include mobile {
   position: relative;
   z-index: 1;
  }
 }
</style>
