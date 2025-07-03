<template>
 <div id="app" ref="globalHost" class="blk fp global-host ys position-relative csspointerevents">
  <header id="home" class="vh-100 position-relative">
   <!-- Navbar Start -->
   <nav-bar external-page></nav-bar>
   <!-- Navbar End -->

   <section class="overlay bg-cover"
            v-lazy-background="{
            highResSrc : `https://kobina.sirv.com/Images/kobina-koomson-w/portfolio/${info.bannerImage}`,
            lowResSrc : `https://kobina.sirv.com/Images/kobina-koomson-w/portfolio/${info.bannerImage}?q=6&blur=25`}">
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
  <highlight-banner  v-if="info">
   <h2 slot="head" class="heading text-center" v-scroll-reveal.reset="{delay : 200}">
    <span class="font-weight-bold">Before</span>
    <span class="font-weight-light"> We </span>
    <span class="font-weight-bold">Start</span>
   </h2>
   <p slot="body" class="text-white text-left pl-md-4 pr-md-4 font-secondary font-weight-normal">
    {{info.description}}
   </p>
  </highlight-banner>
  <section class="about-section bg-dark left-right pb-5">
   <div class="container-fluid">
    <div class="row fpv85 flex-cols-4-2 pdt5 pdlr20p justify-content-between">
     <div class="empty-space h30-md h0-sm fl heading-top-bar ctr"></div>

     <div class="col-md-12 col-sm-12">
      <article class="bigger line-article text-left">
       <h2 class="heading text-center" v-scroll-reveal="{delay : 200}">
        <template v-if="info.perspective">
         <span v-for="(part, i) in info.perspective" :key="i"
               :class="{'font-weight-light' : !part.bold, 'font-weight-bold' : part.bold }">{{part.text}} </span>
        </template>
        <template v-else>
         <span class="font-weight-light">SOMETHING Beyond </span>
         <span class="font-weight-bold">Modern</span>
        </template>
       </h2>
      </article>
     </div>
    </div>
    <div class="row fpv85 flex-cols-4-2 pdt5 pdlr20p justify-content-between">
     <div class="col-lg-6 col-md-6 col-sm-12">
      <div class="cell-view page-height">
       <!-- my-customers-->
       <div class="my-customers">
        <div class="row">
         <div class="col-md-8 offset-md-2 col-sm-10 offset-sm-1">
          <article class="bigger text-left">
           <h6 class="heading text-left" v-scroll-reveal="{delay : 200}">
            <span class="font-weight-bold">TASK.</span>
           </h6>
           <p v-scroll-reveal="{delay : 250}">{{info.task}}
           </p>
          </article>
         </div>
        </div>
       </div>
      </div>
     </div>
     <div class="col-lg-6 col-md-6 col-sm-12">
      <div class="cell-view page-height">
       <!-- my-customers-->
       <div class="my-customers">
        <div class="row">
         <div class="col-md-8 offset-md-2 col-sm-10 offset-sm-1">
          <article class="bigger text-left">
           <h6 class="heading text-left" v-scroll-reveal="{delay : 200}">
            <span class="font-weight-bold">Concept and Process</span>
           </h6>
           <p v-scroll-reveal="{delay : 250}">{{info.processAndConcept}}</p>
          </article>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
  <!--Blog-->
  <section v-for="(section, i) in info.blog" :key="i"><!---->
   <!--List type section-->
   <div v-if="section.type === 'list'" class="container">
    <!--  Head Empty Space-->
    <div class="empty-space h50-lg h30-md h15-xs"></div>
    <!--  Body-->
    <div class="wide-container">
     <div v-if="section.image" class="portfolio-detail-entry p-l-5 p-md-4 p-sm-1">
      <template v-if="Array.isArray(section.image)">
       <!--Multiple Images-->
       <lazy-image
        v-for="(img, i) in section.image" :key="i"
        image-style="max-width: 100%"
        :alt="`${section.head} Image ${i}`"
        :low-res-src="`https://kobina.sirv.com/Images/kobina-koomson-w/portfolio/${img}?q=3`"
        :src="`https://kobina.sirv.com/Images/kobina-koomson-w/portfolio/${img}`"/>
      </template>
      <!--Single Image-->
      <lazy-image v-else
                  image-style="max-width: 100%"
                  :alt="`${section.head} Image`"
                  :low-res-src="`https://kobina.sirv.com/Images/kobina-koomson-w/portfolio/${section.image}?q=3`"
                  :src="`https://kobina.sirv.com/Images/kobina-koomson-w/portfolio/${section.image}`"/>
     </div>
    </div>
    <!--  Foot-->
    <div class="container">
     <div class="row justify-content-center">
      <div class="col-md-11 col-md-offset-3">
       <div class="h5">
        <h6 class="heading text-center" v-scroll-reveal="{delay : 200}">
         <span class="font-weight-bold">{{section.head}}</span>
        </h6>
       </div>
       <div class="empty-space col-xs-b5"></div>
       <div class="simple-article grey">
        <p>{{section.body}}</p>
        <div class="empty-space h30-lg h15-md"></div>
        <div>
         <ul class="blog-list list-unstyled">
          <li v-for="(item, i) in section.list" :key="i">
           <p><span class="line-head font-weight-bold">{{item.head}}</span>. <span class="line-body">{{item.body}}</span></p>
          </li>
         </ul>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
   <!--/List type Section-->
   <!--/thumb-text type Section-->
   <div v-else class="container">
    <!--  Head Empty Space-->
    <div class="empty-space h50-lg h30-md h15-xs"></div>
    <!--  Body-->
    <div class="wide-container">
     <div v-if="section.image" class="portfolio-detail-entry p-l-5 p-md-4 p-sm-1">
      <template v-if="Array.isArray(section.image)">
       <lazy-image
        v-for="(img, i) in section.image" :key="i"
        image-style="max-width: 100%"
        :alt="`${section.head} Image ${i}`"
        :low-res-src="`https://kobina.sirv.com/Images/kobina-koomson-w/portfolio/${img}?q=3`"
        :src="`https://kobina.sirv.com/Images/kobina-koomson-w/portfolio/${img}`"/>
      </template>
      <lazy-image
       v-else
       image-style="max-width: 100%"
       :alt="`${section.head} Image`"
       :low-res-src="`https://kobina.sirv.com/Images/kobina-koomson-w/portfolio/${section.image}?q=3`"
       :src="`https://kobina.sirv.com/Images/kobina-koomson-w/portfolio/${section.image}`"/>
     </div>
    </div>
    <!--  Foot-->
    <div class="container">
     <div class="row justify-content-center">
      <div class="col-md-11 col-md-offset-3">
       <div class="h5">
        <h6 class="heading text-center" v-scroll-reveal="{delay : 200}">
         <span class="font-weight-bold">{{section.head}}</span>
        </h6>
       </div>
       <div class="empty-space col-xs-b5"></div>
       <div class="simple-article grey">
        <p>{{section.body}}</p>
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
  <!--/Blog-->
  <div class="empty-space h60-md h30-xs"></div>
  <!--Section What Client Says-->
  <section v-if="info && info.testimony" class="clients-section left-right">
   <div class="container-fluid">
    <div class="empty-space h35-md h20-xs"></div>
    <article class="bigger text-center heading-top-bar ctr">
     <h2 class="heading">
      <span class="font-weight-light">What </span>
      <span class="font-weight-bold">Client Said..</span>
     </h2>
    </article>
    <div class="row m-lg-5">
     <div class="col-lg-6 col-md-6 col-sm-12">
      <div class="row">
       <div class="col-md-10 offset-md-1 text-center">
        <img :src="`/img/testimony-author/${info.testimony.pic}`"
             :alt="`${info.testimony.giverName} pic`" class="images-box m-4 fade-blur">

        <h5>{{info.testimony.giverName}}</h5>
        <h5 class="font-italic font-weight-light">{{info.testimony.giverTitle}}</h5>
       </div>
      </div>
     </div>
     <div class="col-lg-6 col-md-6 col-sm-12 position-relative testimonials">
      <div class="row m-auto justify-content-center flex-row">
       <div class="col-md-10 offset-md-1 pt-lg-5 pb-lg-5">
        <p class="message mb-15">{{info.testimony.message}}</p>
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
  <!--Section /What Client Says-->
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
      <router-link class="portfolio-detail-related-entry" :to="`/portfolio/${item.id}`">
       <div class="background full-size"
            v-lazy-background="{
            blur : true,
            lowResSrc : `https://kobina.sirv.com/Images/kobina-koomson-w/portfolio/${item.bannerImage}?q=3&h=200`,
            highResSrc : `https://kobina.sirv.com/Images/kobina-koomson-w/portfolio/${item.bannerImage}?h=200`}">
       </div>
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
import NavBar          from '../layout-components/nav.vue'
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
  methods    : {
    openRelated (e, payload)
    {
      this.$router.push({ path : `/portfolio/${payload.id}` });
    }
  },
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
