<template>
 <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 offset-xs-0 text-center">
  <article class="bigger text-center">
   <slot name="main-heading"></slot>
   <slot name="mini-heading"></slot>
   <div class="empty-space h45-md h25-xs"></div>
  </article>
 </div>
</template>
<script>
export default {
  name : 'page-title'
}
</script>
