<template>
 <div id="app" ref="globalHost" class="blk fp global-host ys position-relative csspointerevents">
  <ext-page-layout>
   <page-title slot="page-title">
    <h2 class="heading" slot="main-heading">
     <span class="font-weight-light">My </span>
     <span class="font-weight-bold">works..</span>
    </h2>
    <div class="sorting-menu  text-center" slot="mini-heading">
     <ul class="responsive-filtration-toggle big">
      <li>
       <a class="nav-a cur-ptr" :class="{active : activeCategory === '*'}" @click="setCategory('*')">All</a>
      </li>
      <li v-for="(category, index) in categories" :key="index"
          @click="setCategory(category)">
       <a class="nav-a cur-ptr" :class="{active : activeCategory === category}">{{category}}</a>
      </li>
     </ul>
    </div>
   </page-title>

   <!--   Main Content-->
   <div slot="main-content" class="container">
    <div v-for="(item, i) in getPortfolioList" :key="i" :id="`port${i+1}`">
     <div class="row">
      <div class="col-md-12">
       <div class="card rounded-0 hover-shadow">
        <div class="card-img position-relative" ref="parent-card">
         <div class="image-container" :class="{routing}" :ref="`port${i+1}`"
              @mouseenter="mouseEnterHandler" @mouseleave="mouseOutHandler"
              @mousemove="mouseMoveHandler" @click="clickHandler($event, {ref: `port${i+1}`, itemId : i})">
          <lazy-image
           image-class="card-img-top rounded-0 border-0"
           height="554"
           :alt="item.bannerImage"
           :low-res-src="`https://kobina.sirv.com/Images/kobina-koomson-w/portfolio/${item.bannerImage}?q=3`"
           :src="`https://kobina.sirv.com/Images/kobina-koomson-w/portfolio/${item.bannerImage}`"/>
          <div class="card-img-overlay justify-content-center"></div>
         </div>
         <!--        card Over-->
         <div class="card-img-overlay justify-content-center">
          <div class="text">
           <a href="#" class="link" @click.prevent="clickHandler($event, {ref: `port${i+1}`, itemId : i})"><i class="lni-link"></i>
           </a>
           <h2 class="heading h2" slot="main-heading">
            <span class="font-weight-bold loading-text stroke" :data-text="item.name">{{item.name}}</span>
           </h2>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
     <div class="empty-space h70-md h35-xs"></div>
    </div>
    <div class="empty-space h130-md h35-xs"></div>
   </div>
   <!-- Side Menu--><!--FIXME issue with name of first item ot showing on hover-->
   <div slot="other-panel" class="sidebar replaceable" data-id="sidenav-replaceable">
    <div class="sidenav visible">
     <div class="sidenav-tp"></div>
     <div class="sidenav-inner">
      <div class="item viewed" :style="{height: '1px'}">
      </div>
      <scrollactive class="my-nav"
                    active-class="active"
                    :offset="60"
                    :duration="800"
                    bezier-easing-value=".5,0,.35,1" :style="{height : '100%'}">
       <a v-for="(item, i) in getPortfolioList" :href="`#port${i+1}`" :key="i" class="scrollactive-item">
        <div class="item viewed" :class="{active : i === 0}" :style="{height: `${sideBarItemHeight}%`}">
         <div class="name">{{item.name}}</div>
        </div>
       </a>
      </scrollactive>
     </div>
    </div>
   </div>
  </ext-page-layout>
  <div class="cursor" :class="{hidden : cursor.hidden}" id="cursor"
       :style="{ top : `${cursor.y}px`, left : `${cursor.x}px`}">
   <div class="cross">
    <div class="b b1"></div>
    <div class="b b2"></div>
   </div>
   <svg class="circle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid"
        width="52" height="52" viewBox="0 0 52 52">
    <path d="M1,26a25,25 0 1,0 50,0a25,25 0 1,0 -50,0"></path>
   </svg>
  </div>
 </div>
</template>

<script>
import Vue                    from 'vue';
import { mapGetters }         from 'vuex';
import ScrollActive           from 'vue-scrollactive/src';
import { TimelineLite, Back } from 'gsap'

Vue.use(ScrollActive);

export default {
  name       : "Portfolio",
  components : {},
  props      : [],
  data ()
  {
    return {
      activeCategory : '*',
      cursor         : {
        hidden : true,
        x      : 0,
        y      : 0
      },
      routing        : false
    }
  },
  computed   : {
    ...mapGetters('portfolio', { portfolioData : 'portfolioData', categories : 'categories' }),
    getPortfolioList : function () {
      if (this.activeCategory === '*')
      {
        return this.portfolioData
      }
      else
      {
        return this.portfolioData.filter((item) => {
          if (Array.isArray(item.category)) {
            return item.category.indexOf(this.activeCategory) > -1
          }
          else
          {
            return item.category.toLocaleLowerCase() === this.activeCategory.toLocaleLowerCase()
          }
        })
      }
    },
    sideBarItemHeight ()
    {
      return 100 / this.portfolioData.length
    },
  },
  methods    : {
    setCategory : function (category) {
      this.activeCategory = category;
    },
    clickHandler (e, payload)
    {
      let box       = this.$refs[payload.ref][0],
        parentBox = this.$refs['parent-card'],
        _this     = this;
      this.routing = true;
      console.log(payload, box);
      const timeline = new TimelineLite();

      timeline.to(box, 1, {
        scale : 1,
        ease  : Back.easeInOut, // Specify an ease
      }).to(parentBox, 0.5, {
        y     : 0,
        scale : 1.3,
        ease  : Back.easeInOut, // Specify an ease
        onComplete ()
        {
          _this.$router.push({ path : `/portfolio/${payload.itemId}` })
        }
      });
      // console.log(this.$refs);
    },
    mouseMoveHandler (e)
    {
      e = e || window.event;

      this.cursor.x = e.clientX;
      this.cursor.y = e.clientY;
      // }
    },
    mouseEnterHandler ()
    {
      this.cursor.hidden = false;
    },
    mouseOutHandler ()
    {
      this.cursor.hidden = true;
    }
  },
  mounted ()
  {
    console.log(this.sideBarItemHeight);
  },
  created ()
  {
  },
  destroyed ()
  {
  }
}
</script>

<style lang="scss" scoped>
 @import "../assets/styles/scss/includes/_variables";

 .sorting-menu {
  font-size: 12px;
  line-height: 30px;
  text-transform: uppercase;
  color: $white;
 }

 .sorting-menu a {
  display: inline-block;
  padding: 0 15px;
  margin: 0 12px;
  position: relative;
  border: 1px solid $primary-color;
  border-radius: 15px;
  font-size: .65rem;
  &:hover, &:active {
   color: $primary-color;
  }

  &:after {
   content: "";
   position: absolute;
   left: 0;
   bottom: 0;
   height: 1px;
   background: currentColor;
  }

  &.active{
   color: $dark-b-gray;
   background-color: $primary-color;
   &:after {
    /*width: 100%;*/
    bottom: 50%;
   }
  }
 }

 .sorting-menu .responsive-filtration-title, .sorting-menu.style-3 .responsive-filtration-title {
  color: #222;
  line-height: 40px;
  font-size: 16px;
  position: relative;
  border-bottom: 1px #222 solid;
  cursor: pointer;
 }

 .sorting-menu .responsive-filtration-title .fa, .sorting-menu.style-3 .responsive-filtration-title .fa {
  width: 40px;
  height: 40px;
  line-height: 40px;
  vertical-align: bottom;
  text-align: center;
  position: relative;
  top: -2px;
 }

 .sorting-menu .responsive-filtration-title.active .fa, .sorting-menu.style-3 .responsive-filtration-title.active .fa {
  transform: rotate(-180deg);
  -webkit-transform: rotate(-180deg);
 }

 .sorting-menu .responsive-filtration-toggle li {
  display: inline-block;
 }

 @media (max-width: 1199px) {
  .portfolio-1 .sorting-item, .portfolio-1 .grid-sizer {
   width: 50%;
  }
 }

 /* Tablets (>=768px)*/
 @media (max-width: 991px) {
  .portfolio-1 {
   margin: 0 15px;
  }
  .portfolio-1 .sorting-item {
   padding: 15px;
  }
 }

 /*Phones (<768px)*/
 @media (max-width: 767px) {
  .portfolio-1 .sorting-item, .portfolio-1 .grid-sizer {
   width: 100%;
  }
  .portfolio-1 .sorting-item {
   padding: 0;
   margin-bottom: 15px !important;
  }
  .sorting-menu {
   max-width: 300px;
   margin: 0 auto;
  }
  .sorting-menu .responsive-filtration-toggle {
   display: none;
  }
  .sorting-menu .responsive-filtration-title.active + .responsive-filtration-toggle {
   display: block;
  }
  .sorting-menu .responsive-filtration-toggle li {
   display: block;
   margin-top: 5px;
  }
 }

 .sidebar {
  right: 3%;
  /*margin-right: 106px;*/
  top: 0;
  position: fixed;
  height: 100%;
  width: 0px;
  z-index: 40;
 }

 .sidenav {
  display: none;
  position: absolute;
  width: 0;
  /*  overflow: hidden;*/
  height: 100%;
  right: 0;
  top: 0;
  opacity: 0;
  -webkit-transition: opacity 0.3s, width 0s linear 0.3s;
  transition: opacity 0.3s, width 0s linear 0.3s;
  pointer-events: none;
 }

 .sidenav.visible {
  opacity: 1;
  -webkit-transition: opacity 0.3s ease 0.4s, width 0s linear 0s;
  transition: opacity 0.3s ease 0.4s, width 0s linear 0s;
  width: 72px;
  pointer-events: auto;
 }

 @media screen and (min-width: 1000px) {
  .sidenav {
   display: block;
  }
 }

 .sidenav {
  .sidenav-inner {
   position: absolute;
   top: 29%;
   bottom: 200px;
   width: 72px;
  }

  .sidenav-tp {
   position: absolute;
   width: 1px;
   top: 100px;
   bottom: 71%;
   left: 0;
   right: 0;
   margin: auto;
   background: $primary-color;
  }

  .sidenav-bt {
   position: absolute;
   bottom: 0;
   left: 0;
   width: 100%;
   height: 170px;
  }

  .item {
   position: relative;
   height: 20%;
   cursor: pointer;

   .name {
    position: absolute;
    width: 200%;
    top: 50%;
    margin-top: -8px;
    left: -50%;
    font-family: 'Stem Web', sans-serif;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    text-align: center;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    cursor: pointer;
    /*  -ms-transform: scale(0.9);
        transform: scale(0.9);*/
   }

   &:not(.active):hover .name {
    transition: all 0.3s ease 0.2s;
    opacity: 1;
    -ms-transform: scale(1);
    transform: scale(1);
   }

   &.active {
    cursor: default;
   }

   &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 15px;
    height: 1px;
    margin: auto;
    background: #30373c;
    opacity: 0.3;
    -webkit-transition: all 0.3s cubic-bezier(.21, .51, .51, 1);
    transition: all 0.3s cubic-bezier(.21, .51, .51, 1);
   }

   &:not(.active):hover:after {
    opacity: 0 !important;
   }
  }
 }

 .sidenav {
  .item {

   &.viewed {
    &:after {
     background: $primary-color;
     opacity: 1;
    }

    .name {
     color: $primary-color;
    }
   }
  }

  .scrollactive-item {
   &.active {
    .item {
     &:after {
      width: 72px;
      background: $primary-color;
      opacity: 1;
     }
    }
   }
  }
 }

 .touch-undetected .sidenav .item:not(.active):hover:after {
  width: 72px;
 }

 .full-size {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  transform-origin: center;
  width: 80%;
  height: 80%;
  /*transform: scale(.8);*/
 }

 .homepage-portfolio-preview {
  padding-bottom: 51%;
  /*display: block;*/
  position: relative;
  overflow: hidden;

  .image {
   background-size: cover;
   background-position: center top;
   /*filter: grayscale(100%);*/
   transition: all .15s ease-out;

   filter: grayscale(0);
   backface-visibility: hidden;

   &:hover {
    //transform: scale(1.2) translateX(-50%) translateY(-50%);-->
    transition: transform 10s ease-out;
    backface-visibility: hidden;
   }
  }

  .text {
   position: absolute;
   left: 15px;
   right: 15px;
   text-align: center;
   top: 50%;
   transform: translateY(-50%);
   z-index: 1;
   font-size: 100px;

   .link {
    font-size: 30px;
    color: $primary-color;
   }

   h2 span {
    position: relative;
    display: inline-block;
    font-size: 100px;
    color: $primary-color;
    line-height: 1;
    filter: drop-shadow(0px 0px 0px $primary-color);
    /*text-shadow:
     -1px -1px 0 $primary-color,
     1px -1px 0 $primary-color,
     -1px 1px 0 $primary-color,
     1px 1px 0 $primary-color;*/
   }
  }
 }

 .mouseover {
  overflow: hidden;
  background-size: cover;
  background-position: center top;
 }
</style>
<style lang="scss">
 @import "../assets/styles/scss/includes/variables";

 .card {
  user-select: none;
 }

 .card-img {
  overflow: hidden;

  .image-container {
   transform: scale(.8);
   overflow: hidden;

   &:hover:not(.routing) {
    img {
     transition: all 3s ease;
     transform: scale(1.5);
    }

    & + .card-img-overlay {
     h2 span.stroke {
      color: $primary-color;
     }
    }
   }
  }

  img {
   transition: all 1s ease;
  }

  &:hover {
   .card-img-overlay {
    /*display: flex;*/
   }
  }

  .card-img-overlay {
   pointer-events: none;
  }

  .image-container .card-img-overlay {
   background-color: rgba(0, 0, 0, 0.45);
   pointer-events: all;
   cursor: none;
  }

  .text {
   position: absolute;
   left: 15px;
   right: 15px;
   text-align: center;
   top: 50%;
   transform: translateY(-50%);
   z-index: 1;
   font-size: 100px;

   .link {
    font-size: 30px;
    color: $primary-color;
    pointer-events: all;
    padding: 20px;
   }

   h2 {
    pointer-events: all;
    span {
     position: relative;
     display: inline-block;
     font-size: 100px;
     //color: $primary-color;
     line-height: 1;
     color: $primary-color;

     &.stroke {
      -webkit-text-stroke: 1px $primary-color;
      /*-webkit-text-fill-color: transparent;*/
      text-fill-color: transparent;
      color: transparent;
     }
    }
   }
  }
 }
</style>
<style lang="scss" scoped>
 @import "../assets/styles/scss/includes/variables";

 .cursor {
  position: fixed;
  left: 0;
  top: 0;
  width: 49px;
  height: 49px;
  opacity: 1;
  display: none;
  pointer-events: none;

  -webkit-transition: opacity 0.6s;
  transition: opacity 0.6s;
  z-index: 10000;

  .cross {
   position: absolute;
   left: 0;
   right: 0;
   top: 0;
   bottom: 0;
   margin: auto;
   width: 27px;
   height: 27px;
   -webkit-transition: all 0.4s;
   transition: all 0.4s;
  }

  .circle {
   width: 49px;
   height: 49px;
   -ms-transform: rotate(0);
   transform: rotate(0);
   -webkit-transition: all 0.4s;
   transition: all 0.4s;

   path {
    fill: none;
    stroke-width: 2px;
    stroke: $primary-color;
    opacity: 0.6;
    stroke-dashoffset: 0;
    stroke-dasharray: 157;
    transition: all 0.6s;
   }
  }

  &.hidden {
   opacity: 0;

   .cross {
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
   }

   .circle {
    -ms-transform: rotate(135deg);
    transform: rotate(135deg);

    path {
     stroke-dashoffset: 157;
     stroke-dasharray: 157;
    }
   }
  }

  .b {
   position: absolute;
   margin: auto;
   background: $primary-color;
  }

  .b1 {
   width: 4px;
   height: 100%;
   left: 0px;
   right: 0px;
  }

  .b2 {
   height: 4px;
   width: 100%;
   top: 0px;
   bottom: 0px;
  }
 }

 .csspointerevents .cursor {
  display: block;
  transform: translate(-50%, -50%);
 }

 .gallery-pic {
  cursor: none;
 }
</style>
