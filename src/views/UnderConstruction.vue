<template>
  <section class="overlay under-construction abs top0 left0 zi50 fp">
    <div class="fp bg-clr1 op7"></div>
    <div class="w450 ha bg-clr14 clr1 ctr-hv">
      <div class="fph h30 stripe-1">
        <button class="btn">×</button>
      </div>
      <div class="content">
        <h3 class="fts20 bld7 pdb10 bb1 tt-uc">Site Still Under Construction</h3>
        <p>Portions of this site use Dummy Text or are empty</p>
        <p class="btn btn-dark">Click Anywhere to Dismiss</p>
      </div>

      <div class="fph h30 stripe-1"></div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'under-construction'
}
</script>
<style scoped lang="scss">
  @import "../assets/css/colors";
  .under-construction{
    min-width: 450px;
    height: auto;
    color: #000000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    .content{
      height: calc(100% - 60px);
      width: 100%;
      padding: 30px 40px;
      text-align: center;
      background-color: $accent-color;
    }
  }
  .stripe-1{
    height: 30px;
    width: 100%;
    color: white;
    background: repeating-linear-gradient(-45deg, #ffcf02, #ffcf02 15px, #000 15px, #000 40px);

    .btn{
      width: 30px;
      height: 30px;
      padding: 5px;
      background-color: #000000;
      -webkit-border-radius: 0;
      -moz-border-radius: 0;
      border-radius: 0;
      &:hover{
        color: transparentize(#fff, .5);
      }
    }
  }
</style>
