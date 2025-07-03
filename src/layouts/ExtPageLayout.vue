<template>
 <div>
  <!-- Navbar Start -->
  <!-- Navbar End -->
  <div class="page-header"
       :style="`background-image: url('/img/gallery/${banner || 'grp-ph-nc.jpg'}');` + `min-height : ${headerHeight};`">
   <nav-bar :active="active" external-page></nav-bar>
   <div class="container">
    <div class="row">
     <div class="col-12">
      <div class="page-header-inner text-center">
       <slot name="page-title"></slot>
      </div>
     </div>
    </div>
   </div>
  </div>
  <!--Slot for the Content Area-->
  <slot name="main-content"></slot>
  <slot name="other-panel"></slot>
  <footer-section></footer-section>
 </div>
</template>

<script>
// import HeaderWrap from '../views/HeaderWrap'
import NavBar    from '../layout-components/nav.vue'
export default {
  name       : "ext-page-layout",
  components : { NavBar },
  props      : {
    banner  : {},
    active  : {},
    options : {}
  },
  computed   : {
    headerHeight ()
    {
      return this.options && this.options.headerHeight ? this.options.headerHeight + 'px' : ''
    }
  },
  data ()
  {
    return {}
  },
  methods    : {},
}
</script>

<style lang="scss" scoped>
 .section-padding {
  padding: 30px 0;
 }

 .page-header {
  padding: 0;
  margin: 0;
  position: relative;
  /*background: url('/img/gallery/grp-ph-nc.jpg');*/
  background-size: cover;
  background-position: center 35%;
  min-height: 250px;

  /*&::before {
    background: rgba(34, 34, 34, 0.6);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    content: "";
    display: block;
  }*/
  .page-header-inner {
   color: #fff;
   margin-top: 100px;
  }

  .page-title {
   /*color: #fff;*/
   font-size: 40px;
   margin-bottom: 10px !important;
  }
 }
</style>
