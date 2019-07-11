<template>
 <section class="section p-lg-5 p-sm-2">
  <div class="container">
   <div class="row">
    <div class="col-12 text-center">
     <slot name="head"></slot>
     <slot name="body"></slot>
     <slot name="foot"></slot>
    </div>
   </div>
   <div class="empty-space h30-md h25-sm"></div>
  </div>
 </section>
</template>
<script>
export default {
  name  : 'highlight-banner'
}
</script>
<style lang="scss" scoped>
 @import "../assets/styles/scss/includes/mixins";
 p {
  font-size: 1.2rem;
  line-height: 2.2;
  @include tablet{
   font-size: 1.1rem;
   line-height: 2;
  }
  @include mobile{
   font-size: 1rem;
   line-height: 1.5;
  }
 }
</style>
