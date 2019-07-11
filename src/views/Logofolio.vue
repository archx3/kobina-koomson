<template>
   <div id="app" ref="globalHost" class="blk fp global-host ys position-relative csspointerevents">
      <header id="home" class="vh-100 position-relative">
         <!-- Navbar Start -->
         <nav-bar external-page></nav-bar>
         <!-- Navbar End -->

         <section class="overlay bg-cover" v-background="`/img/portfolio/${info.bannerImage}`">
            <div class="overlay hero-section bg-cover vh-100">
               <div class="container h-100">
                  <div class="row h-100">
                     <div class="col-md-12 text-left">
                        <div class="text">
                           <router-link to="#" class="link"><i class="lni-link"></i>
                           </router-link>
                           <h2 class="heading h2" slot="main-heading">
                              <span class="font-weight-bold stroke">{{info.name}}</span>
                           </h2>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </header>
      <!--Related Items Section-->
      <div class="empty-space h45-md h25-xs"></div>
      <section>
         <div class="container">
            <article class="bigger text-center heading-top-bar ctr">
               <h2 class="heading">
                  <span class="font-weight-light">Related </span>
               </h2>
            </article>
            <div class="row">
               <div v-for="(item, i) in getRelatedItems" :key="i" class="col-xs-4">
                  <router-link class="portfolio-detail-related-entry" :to="`/${item.id}`">
                     <div class="background full-size" v-background="`/img/portfolio/${item.bannerImage}`"></div>
                     <div class="text hidden-xs">
                        <div class="wide-container">
                           <h3 class="h3-big white">{{item.name}}</h3>
                        </div>
                     </div>
                  </router-link>
               </div>
            </div>
         </div>
      </section>
      <footer-section></footer-section>
   </div>
</template>

<script>
import Vue             from 'vue'
import { mapGetters }  from 'vuex'
import NavBar          from '../components/Nav'
import VueTypedJs      from 'vue-typed-js'
import HighlightBanner from "./HighlightBanner";

Vue.use(VueTypedJs);
export default {
  name       : "PortfolioItem",
  components : { HighlightBanner, NavBar },
  props      : [],
  data ()
  {
    return {
      bgImage : '/img/portfolio/background-46.jpg',
      info    : null,
    }
  },
  computed   : {
    id () { return this.$route.params.id },
    ...mapGetters('portfolio', { portfolioItem : `portfolioItem`, portfolioLen : 'portfolioLength' }),
    getRelatedItems ()
    {
      let items = [], tracker = [];
      while (items.length < 3)
      {
        let newItem = Math.floor(Math.random() * this.portfolioLen);
        console.log('i.io.ni', newItem, items, items.indexOf(newItem) < 0);
        if (newItem !== this.id && (tracker.indexOf(newItem) < 0))
        {
          let tempItem = this.portfolioItem(newItem);
          tracker.push(newItem);
          tempItem['id'] = newItem;
          items.push(tempItem);
        }
      }
      return items;
    }
  },
  methods    : {},
  mounted ()
  {
    this.info = this.portfolioItem(this.id);
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
   @import "../assets/styles/scss/includes/mixins";
   @import "../assets/styles/scss/includes/variables";

   .overlay {
      background-color: transparentize($dark-b-gray, .3);
      background-position: center;

      .container {
         //background-color: transparentize($dark-b-gray, .3);
         /*width: 100%;*/
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
         pointer-events: all;
         padding: 20px;
      }

      h2 {
         span {
            position: relative;
            display: inline-block;
            font-size: 100px;
            //color: $primary-color;
            line-height: 1;
            color: $primary-color;
            @include tablet {
               font-size: 70px;
            }
            @include mobile {
               font-size: 35px;
            }
         }
      }
   }

   .col-xs-4 {
      width: 33.33333333%;
   }

   .container .col-sm-6.col-sm-offset-3 .biggerr.black {
      font-weight: bold;
   }

   .portfolio-detail-related-entry {
      /*padding-bottom: 67%;*/
   }

   .portfolio-detail-related-entry .text {
      width: auto;
      bottom: auto;
      top: 50%;
      left: 50%;
      text-align: center;
      transform: translate(-50%, -50%);
   }

   .portfolio-detail-related-entry:hover .text {
      margin: 0;
      padding: 0;
   }

   .portfolio-detail-related-entry .text .wide-container-fluid {
      padding: 0 0;
   }

   .portfolio-detail-related-entry .tag {
      margin: 0;
      padding: 0;
   }

   .portfolio-detail-related-entry:hover .tag {
      margin: 0;
      padding: 0;
   }

   .portfolio-detail-related-entry .h3-big {
      position: relative;
      display: inline-block;
      transform: scale(1);
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
   }

   .portfolio-detail-related-entry .h3-big:hover {
      transform: scale(0.9);
      -webkit-transform: scale(0.9);
      -ms-transform: scale(0.9);
   }

   .portfolio-detail-related-entry:hover .background {
      transform: scale(1.2);
      -webkit-transform: scale(1.2);
   }

   portfolio-detail-entry {
      position: relative;
   }

   .portfolio-detail-entry img {
      display: block;
      width: 100%;
      height: auto;
   }

   .portfolio-detail-related-entry {
      position: relative;
      /*padding-bottom: 78%;*/
      display: block;
      overflow: hidden;
      background: #1b1b1b;
   }

   .portfolio-detail-related-entry .background {
      background-size: cover;
      background-position: center top;
   }

   .portfolio-detail-related-entry:hover .background {
      transform: scale(1.1);
      -webkit-transform: scale(1.1);
   }

   .portfolio-detail-related-entry .background:before {
      position: absolute;
      content: "";
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(34, 34, 34, .4);
   }

   .portfolio-detail-related-entry:hover .background:before {
      background: rgba(34, 34, 34, .6);
   }

   .portfolio-detail-related-entry .text {
      position: absolute;
      /*left: 0;*/
      /*bottom: 35px;*/
      width: 100%;
   }

   .portfolio-detail-related-entry:hover .text {
      bottom: 45px;
   }

   .portfolio-detail-related-entry .align-left {
      text-align: left;
      padding-right: 15px;
      display: block;
   }

   .portfolio-detail-related-entry .align-right {
      text-align: right;
      padding-left: 15px;
      display: block;
   }

   .portfolio-detail-related-entry .tag {
      font-size: 13px;
      line-height: 14px;
      color: rgba(255, 255, 255, .7);
      display: block;
      margin-bottom: 15px;
   }

   .portfolio-detail-related-entry:hover .tag {
      margin-bottom: 25px;
   }

   .square-hamburger-icon {
      width: 20px;
      height: 20px;
      position: relative;
   }

   .square-hamburger-icon span {
      width: 6px;
      height: 6px;
      background: #fff;
      border-radius: 1px;
      -webkit-border-radius: 1px;
      float: left;
      margin: 0 1px 1px 0;
   }

   .square-hamburger-icon span:nth-child(3n) {
      margin-right: 0;
   }

   .square-hamburger-icon:hover span:nth-child(1) {
      transform: translateX(-2px) translateY(-2px);
      -webkit-transform: translateX(-2px) translateY(-2px);
   }

   .square-hamburger-icon:hover span:nth-child(2) {
      transform: translateY(-2px);
      -webkit-transform: translateY(-2px);
   }

   .square-hamburger-icon:hover span:nth-child(3) {
      transform: translateX(2px) translateY(-2px);
      -webkit-transform: translateX(2px) translateY(-2px);
   }

   .square-hamburger-icon:hover span:nth-child(4) {
      transform: translateX(-2px);
      -webkit-transform: translateX(-2px);
   }

   .square-hamburger-icon:hover span:nth-child(6) {
      transform: translateX(2px);
      -webkit-transform: translateX(2px);
   }

   .square-hamburger-icon:hover span:nth-child(7) {
      transform: translateX(-2px) translateY(2px);
      -webkit-transform: translateX(-2px) translateY(2px);
   }

   .square-hamburger-icon:hover span:nth-child(8) {
      transform: translateY(2px);
      -webkit-transform: translateY(2px);
   }

   .square-hamburger-icon:hover span:nth-child(9) {
      transform: translateX(2px) translateY(2px);
      -webkit-transform: translateX(2px) translateY(2px);
   }

   //.portfolio-detail-related-entry .square-hamburger-icon{position: absolute; left: 50%; top: 50%; margin: -10px 0 0 -10px;}

   .full-size {
      width: 100%;
      height: 300px;
      -webkit-background-size: cover;
      background-size: cover;
      background-position: center top;

   }
</style>
