<template>
 <header id="home">
  <!-- Navbar Start -->
  <nav-bar></nav-bar>
  <!-- Navbar End -->

  <!-- Hero Area Start -->
  <div id="hero-area" class="hero-area-bg container-full-bg">
   <div class="col-12" :class="{'fade-blur' : bgChanged}"
        v-lazy-background="{
        blur : true,
        lowResSrc : 'https://kobina.sirv.com/Images/kobina-koomson-w/background/hero16x9-3-br.jpg?q=3',
        highResSrc : 'https://kobina.sirv.com/Images/kobina-koomson-w/background/hero16x9-3-br.jpg?',
        }">
   </div>
   <div class="overlay"></div>

   <div class="container flex-row flex ctr-h bot-85">
    <div class="row justify-content-center main-actions">
     <div class=" col-lg-9 col-sm-12">
      <div class="contents page-header-inner text-center home-text">
       <vue-typed-js
        :strings="introStrings" @onComplete="nameTypeComplete()"
        :show-cursor="false" :type-speed="30" :back-speed="15">
        <h3 class="my-name"><span class="typing" ref="nameEl"></span></h3>
       </vue-typed-js>
        <vue-typed-js  v-if="nameTyped"
         :strings="skillsText" @onComplete="skillsTypeComplete()"
         :show-cursor="false" :type-speed="30" :back-speed="15">
          <p id="skillHighlight" class="skill-highlight mb-lg-3"><span class="typing"></span></p>
        </vue-typed-js>
        <!--<vue-typed-js  v-if="nameTyped" :strings="skillsText" @onComplete="skillsTypeComplete()"
                       :show-cursor="false" :type-speed="30" :back-speed="15">
          <p id="skillHighlight" class="skill-highlight mb-lg-3"><span class="typing"></span></p>
        </vue-typed-js>-->
       <!--<div v-if="skillsTyped" class="bg-clr14 abs btm85 left-ctr rc3 w250 min-h-50 ha zi35 pd15 tri-b-ctr ctr-h more-tooltip">
         <p class="bld3 fts18">Click on the button below to see a few of my works...</p>
       </div>-->
      </div>
     </div>
    </div>
   </div>
  </div>
  <div v-if="skillsTyped" v-scroll-to="'#about-section'" class="about-d-chevron pd4 abs"></div>
  <!-- Hero Area End -->
  <!--<div v-if="skillsTyped" class=" ctr-h more-tooltip">
    &lt;!&ndash;      <button class="abs right5 top0 bg-clr-tr bdr0 h20 min-h20 w20 min-w20 pd3 ac fts20">×</button>&ndash;&gt;
    <p class="bld3 fts18">Don't worry about GDPR. I neither store visitor data nor transmit visitor data in any form to any
      destination.
      <button class="rounded-pill">OK</button>
    </p>
  </div>-->
  <div class="molecule-bg abs left0 btm0 w400 h200 zi0 bg-nr bl-cap"></div>
 </header>
</template>
<script>
import Vue          from 'vue'
import NavBar       from './Nav'
import VueTypedJs   from 'vue-typed-js'

Vue.use(VueTypedJs);

/**
 * @param arrayLike {ArrayLike}
 */
function toArray (arrayLike)
{
  let arrayBuffer = [];
  for (let i = 0, len = arrayLike.length; i < len; i++)
  {
    arrayBuffer.push(arrayLike[i]);
  }
  return arrayBuffer;
}

export default {
  name       : 'header-wrap',
  components : { NavBar },
  data ()
  {
    return {
      officialName       : 'Kobina G. Koomson',
      nameTyped          : false,
      skillsTyped        : false,
      bgImage            : 'https://kobina.sirv.com/Images/kobina-koomson-w/background/hero16x9-3-br.jpg?q=3',
      bgChanged          : false,
      lastScrollTop      : 0,
      jumpIndex          : 0,
      shadowOfficialName : [],
    }
  },
  props      : [],
  computed   : {
    introStrings : function ()
    {
      return [
        '<span class=\'font-weight-light\'>Hi,</span>',
        '<span class=\'font-weight-light\'>Welcome to my <br>' +
        ' <span class=\'clr14\'>homepage</span></span>',
        '<span class=\'font-weight-light\'>Relax, while <span class=\' clr14\'>I</span> tell you a lil about myself</span>',
        '<span class=\'font-weight-light\'>You can call me</span> <br> <span class=\'clr14\'>The Arch</span>',
        '<span class=\'font-weight-light\'>more officially, </span>',
        `<span class='official-name'> ${this.getOfficialName}</span>`]
    },
    skillsText         : function ()
    {
      return [
        "<span>I'm a SOFTWARE ENGINEER,</span>",
        "A UI/UX DESIGNER,",
        "AND A GRAPHIC DESIGNER",
        "Put together...",
        "SOFTWARE ENGINEER | UI/UX &amp; GRAPHIC DESIGNER"
      ]
    },
    getOfficialName ()
    {
      console.log(`ton ${this.officialName}`);
      return toArray(this.officialName)
        .map(char =>
        {
          return '<span>' + char + '</span>'
        }).join('')
    },
    nameLength ()
    {
      return this.officialName.length
    },
    nextMultiplier ()
    {
      return Math.floor(200 / this.officialName.length)
    }
  },
  methods    : {
    scrollHandlerForName : function ()
    {
      let delta = window.scrollY;
      // let st = this.$refs.nameEl.scrollTop;
      var scrollTop = (document.documentElement || document.body.parentNode || document.body).scrollTop;
      this.jumpIndex = Math.floor(scrollTop / this.nextMultiplier);
      if (delta > 20)
      {
        if (delta > this.lastScrollTop)
        {
          // console.log('going down', this.jumpIndex, scrollTop, this.nextMultiplier);
          for (let i = 0; i < this.jumpIndex; ++i)
          {
            // Bd.addClass(officialNameLetters[i], "invisible");

            let char = this.officialName.shift();
            // console.log(this.officialName);
            this.shadowOfficialName.push(char);
          }
          if (this.jumpIndex === this.nameLength)
          {
            // Bd.addClass(officialName, "hidden");
          }
        }
        else
        {
          // console.log('going up');
          for (let i = this.jumpIndex; i < this.nameLength; ++i)
          {
            // Bd.removeClass(officialNameLetters[i], "invisible");
            this.officialName.unshift(this.shadowOfficialName.pop())
          }
          // Bd.removeClass(officialName, "hidden");
        }
        this.lastScrollTop = delta
      }
    },
    nameTypeComplete     : function (self)
    {
      this.nameTyped = true;
      this.officialName = this.officialName.split();

      var officialName        = this.$refs.nameEl,
        officialNameLetters = toArray(officialName.children[0].children),
        len                 = officialNameLetters.length;
      let st, index;
      const nextMultiplier = Math.floor(200 / len);

      window.addEventListener("scroll", function ()
      {
        st = (document.documentElement || document.body.parentNode || document.body).scrollTop;

        index = Math.floor(st / nextMultiplier);
        if (st < 200)
        {
          if (st > this.lastScrollTop)
          {
            for (let i = 0; i < index; ++i)
            {
              officialNameLetters[i].style.visibility = 'hidden'
            }
            if (index === len)
            {
              officialName.style.display = 'none'
            }
          }
          else
          {
            // console.log('going up', index, st, nextMultiplier);
            for (let i = index; i < len; ++i)
            {
              officialNameLetters[i].style.visibility = 'visible'
            }
            officialName.style.display = ''
          }
          this.lastScrollTop = st;
        }
      });
    },
    skillsTypeComplete   : function ()
    {
      // console.log('here too')
      this.skillsTyped = true
    }
  },
  mounted ()
  {
  }
}
</script>
<style scoped lang="scss">
 @import "../assets/styles/scss/colors";
 @import "../assets/styles/scss/media-queries";

 /* ==========================================================================
3. Hero SECTIONS
========================================================================== */

 .hero-area-bg {
  background-repeat: no-repeat;
  /*filter: blur(4px);*/
  /*background-attachment: fixed;*/
  background-size: cover;
  background-position: center center;

  img {
   width: 100vw;
   /*display: none;*/
   filter: blur(8px);
   position: absolute;
  }

  .col-12 {
   padding: 0;
   background-repeat: no-repeat;
   /*filter: blur(8px);*/
   /*background-attachment: fixed;*/
   transition: all .8s ease-out;
   background-size: cover;
   background-position: center center;

   &.loaded{
    filter: blur(0) grayscale(0.65);
   }
  }
 }

 .overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  /*background: rgba(0, 0, 0, 0);*/
  opacity: .8;
  /*z-index: 1;*/
  background: linear-gradient(45deg, #181b27 58%, #443329 66%, rgba(255, 153, 50, 0.65) 100%);
  /*display: none;*/
 }

 #hero-area {
  overflow: hidden;
  position: relative;
  min-height: 690px;

  .contents {

   .btn {
    margin: 0 10px 0;
    font-size: 16px;
    padding: 12px 40px;
    text-transform: uppercase;
   }
  }

 }

 .main-actions {
  /*margin-top: 40%;*/
  margin-left: auto;
  margin-right: auto;
  width: 100%;
 }

 .container-full-bg {
  display: flex;

 }

 .home-text {
  h3 {
   font-size: 57px;
   margin: 0 auto;
   color: #fff !important;

   span.offcial-name span {
    display: unset;
   }
  }
 }

 span.offcial-name span {
  display: unset;
 }

 .skill-highlight {
  width: auto;
  margin: 0 auto;
  text-transform: uppercase;
  padding: 5px 20px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  font-weight: 700;
  letter-spacing: 3px;
  color: #000;
  background-color: $accent-color;
  margin-bottom: 10px;
 }

 .about-d-chevron {
  height: 45px;
  width: 45px;
  bottom: 22.5px;
  left: calc(50% - 22.5px);
  background: url(../assets/img/scroll.gif) 50% 50% no-repeat rgba(215, 181, 94, 0);
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  display: block;
  cursor: pointer;
  -webkit-transition: all 300ms ease-in-out 0s;
  -moz-transition: all 300ms ease-in-out 0s;
  -ms-transition: all 300ms ease-in-out 0s;
  -o-transition: all 300ms ease-in-out 0s;
  transition: all 300ms ease-in-out 0s;
  position: absolute;

  &:hover {
   background-color: #ffcf02;
   transform: scale(1.01, 1.01);
  }
 }

 @keyframes fadeBlur {
  0% {
  }
  100% {
   filter: grayscale(0.65);
  }
 }

 .fade-blur {
  /*animation-name: fadeBlur;*/
  /*animation-duration: .8s;*/
 }

 .more-tooltip {
  background-color: $accent-color;
  width: 250px;
  height: auto;
  border-radius: 3px;
  /*bottom: 85px;*/
  color: #000;
  padding: 10px;
  position: relative;

  &::before, &::after {
   content: "";
   position: absolute;
   width: 0;
   height: 0;
   border-style: solid;
   border-width: 10px;
   border-color: transparent;
  }

  &::before {
   bottom: -20px;
   left: calc(50% - 10px);
   border-top-color: #ffcf02;
  }

  p {
   font-size: 16px;
   font-weight: 400;
  }
 }

 @media (max-width: 992px) {
  .main-actions {
   margin-top: calc(65%);
  }

  .skill-highlight {
   -webkit-border-radius: 0;
   -moz-border-radius: 0;
   border-radius: 0;
  }
 }
</style>
<style lang="scss">
 @import "../assets/styles/scss/media-queries";
 @import "../assets/styles/scss/includes/mixins";

 .fade-blur {
  animation-name: fadeBlur;
  animation-duration: .7s;
  filter: grayscale(0.65);
 }

 @include max-screen-size(760px) {
  .skill-highlight {
   -webkit-border-radius: 0;
   -moz-border-radius: 0;
   border-radius: 0;
  }
 }

 @include max-screen-size(576px) {
  .official-name {
   font-weight: bold;
   font-size: 40px;
  }
 }

</style>
