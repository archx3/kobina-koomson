<template>
 <div id="app" ref="globalHost" class="blk fp global-host ys position-relative csspointerevents">
  <ext-page-layout>
   <page-title slot="page-title" class=" bigger text-center ctr">
    <h2 class="heading" slot="main-heading">
     <span class="font-weight-bold">Logofolio</span>
    </h2>
   </page-title>

   <div slot="main-content">
    <div class="container">
     <div class="row logofolio">
      <div v-for="(item, i) in logofolio" :key="i" class="col-sm-12 col-md-6 col-lg-4 _logo"
           :style="{backgroundColor : item.bgColor || ''}" :class="{light : item.light}">
       <div v-if="!Array.isArray(item.image)" class="background full-size"
            v-background="`/img/logofolio/${item.image}`"></div>
       <div v-else="" class="background full-size" v-background="`/img/logofolio/${item.image[0]}`"></div>
       <h3 class="font-weight-light pt-3 text-center name">{{item.name}}</h3>
      </div>
     </div>
    </div>
   </div>
  </ext-page-layout>
 </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name       : "PortfolioItem",
  components : {},
  props      : [],
  data ()
  {
    return {
      bgImage : '/img/portfolio/background-46.jpg',
      info    : null,
    }
  },
  computed   : {
    ...mapGetters('logofolio', { logofolio : 'logos', }),
  },
  methods    : {},
  mounted ()
  {
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

 .col-xs-4 {
  width: 33.33333333%;
 }

 //.portfolio-detail-related-entry .square-hamburger-icon{position: absolute; left: 50%; top: 50%; margin: -10px 0 0 -10px;}

 .full-size {
  width: 100%;
  height: 350px;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center;
 }

 .logofolio {
  ._logo {
   /*background-color : #fff;*/
   transition: all .3s ease-out;
   &:hover{
    z-index: 1;
    box-shadow:  0 0 28px rgba(0, 0, 0, 0.24);
   }
   .name{
    color: #fff;
   }

   &.light{
    background-color : $dark-b-gray;
    .name{
     color: #000;
    }
   }
  }
 }
</style>
