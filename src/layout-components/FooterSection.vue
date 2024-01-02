<template>
  <footer>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-11">
          <p class="copyright">Copyright © Kobina George Koomson. {{year}}</p>
        </div>
        <div class="col-md-1 ">
          <a class="copyright d-block back-to-top" href="#app" v-scroll-to="'#app'"
             data-tooltip="Back to Top" tooltip-pos="left">
            <i class="lni-chevron-up"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import { mapGetters, mapState } from 'vuex';
export default {
  name : 'footer-section',
  data () {
    return {
      year  : new Date().getFullYear(),
      ...mapState(['events'])
    }
  },
  computed : {
    ...mapGetters(['community'])
  }
}
</script>
<style lang="scss">
  @import "../assets/styles/scss/includes/variables";
  .copyright{
    padding: 30px 10px;
  }
  /*footer{
    min-height: 100px ;
  }*/
  a.back-to-top{
    position: relative;
    background-color: rgba(24, 27, 39, 0.5);
    color: $primary-color;
    &:hover i{
      color: #000;
      background-color: $primary-color;
    }
  }
</style>
