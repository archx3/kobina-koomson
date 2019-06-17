<template>
  <footer>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-12 col-xs-12 ">
          <p class="copyright">Copyright © Kobina George Koomson. {{year}}</p>
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
<style lang="css">
  .copyright{
    padding: 30px 10px;
  }
  /*footer{
    min-height: 100px ;
  }*/
</style>
