<template>
  <div class="sl-wrapper simple-lightbox" v-if="currImage !== null">
    <div class="sl-image"
         style="position: fixed; top: 50%; transform: translateY(-50%); left: 40%; transition: transform 0.25s linear 0s; opacity: 1;">

<!--      <img style="width: 259.432px; height: 344.7px;" :src="`/img/portfolio/${images[0].image}`">-->
      <carousel class="" :perPage="1" :paginationEnabled="false" :navigateTo="currImage"
      :centerMode="true" :loop="true">
        <slide class="text-center testimony sl-image" v-for="(portfolio, index) in images" :key="index"
               style=" transform: translateX(0px); transition: transform 0.25s linear 0s; opacity: 1;">

          <img :src="`/img/portfolio/${portfolio.image}`" alt="" style="width: 259.432px; height: 344.7px;">

<!--          <h5 class="font-italic font-weight-light">{{portfolio.name}}</h5>-->
        </slide>
      </carousel>
    </div>

    <button class="sl-close" style="display: inline-block;" @click="currImage = null">×</button>
    <div class="sl-counter" style="display: block;">
      <span class="sl-current">{{currImage + 1}}</span>/<span class="sl-total">{{images.length}}</span></div>
    <div class="sl-navigation" style="display: block;">
      <button class="sl-prev" @click="currImage++">‹</button>
      <button class="sl-next" @click="currImage--">›</button>
    </div>
    <div class="sl-spinner" style="display: none;">
      <div></div>
    </div>
    <div class="sl-overlay" style="display: block;"></div>
  </div>
</template>
<script>
import { Slide, Carousel } from 'vue-carousel';

export default {
  components: { Slide, Carousel },
  name: 'smart-light-box',
  data () {
    return {
      currImage : this.selectedImageIndex
    }
  },
  computed : {
  },
  props : ['images', 'selectedImageIndex']
}
</script>
<style lang="scss" scoped>
  @import "../assets/styles/scss/colors";
  @import "../assets/styles/scss/light-box";

  section {
  }

  .bg-hover:hover .plus span {
    transform: rotate(-90deg);
    opacity: 100;
  }
  .VueCarouse-inner{
    transition: transform 0.5s ease 0s;
    left: 40%;
    position: relative;
  }
</style>
