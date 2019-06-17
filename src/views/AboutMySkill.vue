<template>
  <section id="skills-section" class="vh-100 skills-section" :class="{'fixed-top' : stickGallery}">
    <div class="container">
      <div class="row portfolio-section min-vh-100 vw-100 justify-content-between">
        <div class="col-lg-6 col-md-6 col-xs-12 portfolio-intro-pic fade-blur min-vh-100">
          <div class="row " v-show="indicatorTranslation === 0">
            <carousel :perPage="1" :paginationEnabled="false">
              <slide class="text-center overflow-hidden">
                <img src="../assets/img/background/hero16x9-3-br.jpg" class="vh-100" alt="">
              </slide>
              <slide class="text-center">
                <img src="../assets/img/background/hero16x9-3-br.jpg" class="vh-100" alt="">
              </slide>
            </carousel>
          </div>
          <div class="row" v-show="indicatorTranslation === 33">
            <img src="../assets/img/background/ui-ux-lg.png" class="vh-100" alt="">
          </div>
          <div class="row" v-show="indicatorTranslation === 66">
            <img src="../assets/img/background/hero16x9-3-br.jpg" class="vh-100" alt="">
          </div>
        </div>
        <div class="I3u14I7M col-lg-2 portfolio-section-indicator">
          <div class="_2tn0DybF">
            <div class="z_W9K9qB" :style="`transform:translateY(${indicatorTranslation * (-1)}%)`">
              <button class="_24Kb_y7t undefined" aria-label="slide 1" @click="translation=19"></button>
              <button class="_24Kb_y7t" aria-label="slide 2" @click="translation=50"></button>
              <button class="_24Kb_y7t" aria-label="slide 3" @click="translation=84"></button>
              <!--  <button class="_24Kb_y7t" aria-label="slide 4"></button>-->
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-xs-12 min-vh-100 portfolio-description" style="color: #000">
          <div class="portfolio-intro-text" :style="`transform:translateY(${translation * (-1)}%)`">
            <div class="text">
              <div>
                <h3>Full Stack Developer</h3>
                <p>I build Apps from Start to finish using industry Standard practices</p>
                <button class="rounded-pill">View me on Github</button>
              </div>
            </div>
            <div class="text">
              <div>
                <h3>UI/UX Designer</h3>
                <p>I try to create the best user experience by designing and building beautiful and endearing interactivity</p>
                <button class="rounded-pill">See Samples</button>
              </div>
            </div>
            <div class="text">
              <div>
                <h3>Graphic Designer</h3>
                <p>I craft modern and sexy art you can't get enough of. Sweet eye candy.</p>
                <button class="rounded-pill">See Samples</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    name : 'about-my-skill',
    props: {
      indicatorTranslation: {},
      stickGallery        : {},
      translation         : {}
    }
  }
</script>
<style lang="scss" >
  @import "../assets/css/colors";

  .skills-section {
    overflow: hidden;

    .container {
      margin: 0;
    }

  }

  .portfolio-section {
    background-color: $dark-b-gray;

  }

  .I3u14I7M {
    position: relative;
    flex-basis: 8%;
    display: block;
    top: 6px;
    z-index: 0;
    justify-content: flex-start;
    margin-top: -6.5px;
  }

  ._2tn0DybF {
    position: relative;
    top: 25%;

    &::before {
      content: "";
      position: absolute;
      top: 6px;
      left: 6px;
      display: block;
      width: 13px;
      height: 13px;
      border: 2px solid $accent-color;
      background-color: $dark-b-gray;
      border-radius: 50px;
      z-index: 1;
    }

    &::after {
      content: "";
      position: absolute;
      top: 12.5px;
      /*left: calc(-25vw + 6px);*/
      display: block;
      /*width: 25vw;*/
      height: 2px;
      background-color: $accent-color;
      left: -344px;
      width: 350px;
    }

  }

  .container {
    padding: 0 !important;
    margin: 0;
  }
</style>
<style lang="scss">
  @import "../assets/css/colors";

  section {
  }

  .rounded-pill {
    width: auto;
    margin: 0 auto;
    padding: 5px 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    font-weight: 400;
    background-color: $dark-b-gray;
    border: 1px solid $accent-color;
    color: $accent-color;
    margin-bottom: 10px;
    transition: all .3s ease;

    &:hover {
      border: 1px solid transparent;
      /*border: none;*/
      background-color: $accent-color;
      color: $dark-b-gray;
    }
  }
</style>
