<template>
 <!-- <div class="loaders-container">-->
 <!--<div class="container">
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
 </div>-->
 <div class="signal"></div>
 <!-- </div>-->
</template>

<script>
export default {
  name : "loader",
}
</script>

<style lang="scss" scoped>

 .loaders-container {
  padding: 20px;
  margin: 0 auto;
  width: 700px;
  text-align: center;
  font-size: 0;

  .container {
   position: relative;
   display: inline-block;
   box-sizing: border-box;
   padding: 30px;
   width: 25%;
   height: 140px;
  }
 }

 .line {
  position: absolute;
  top: 50%;
  margin-left: 10px;
  width: 60px;
  height: 4px;
  background: #fff;
  animation: spin 1.5s infinite ease;

  &:nth-of-type(2) {
   animation-delay: 0.1s;
  }

  &:nth-of-type(3) {
   animation-delay: 0.2s;
  }

  &:nth-of-type(4) {
   animation-delay: 0.3s;
  }
 }

 .signal {
  border: 5px solid #ffcf02;
  border-radius: 30px;
  height: 30px;
  left: 50%;
  margin: -15px 0 0 -15px;
  opacity: 0;
  position: absolute;
  top: 50%;
  width: 30px;

  animation: pulsate 1s ease-out;
  animation-iteration-count: infinite;
  z-index: 10;
  /*display: none;*/
 }

 @keyframes pulsate {
  0% {
   transform: scale(.1);
   opacity: 0.0;
  }
  50% {
   opacity: 1;
  }
  100% {
   transform: scale(1.2);
   opacity: 0;
  }
 }

</style>
