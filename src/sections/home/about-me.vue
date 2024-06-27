<template>
  <section class="about-section left-right">
    <b-container>
      <b-row class="justify-content-between">
        <b-col>
          <b-card class="bg-warning rounded-25 p-2">
            <b-card-header class="border-bottom-0">
              <h2 class=" font-weight-bold">Hey, I'm Kobina Koomson a software engineer with 8+ years experience</h2>
            </b-card-header>
            <b-card-body>

              <p class="text-muted">
                I am a full-stack web developer with a passion for creating beautiful, responsive, and functional websites and web applications. I have a background in graphic design and a degree in computer science. I am a self-motivated, detail-oriented, and organized individual who is always looking to learn new things and improve my skills.
              </p>
              <p>
                I have experience working with a variety of technologies including HTML, CSS, JavaScript, Vue.js, React, Node.js, Express, MongoDB, MySQL, PHP, and WordPress. I am always looking to learn new technologies and improve my skills.
              </p>
              <p>
                I am currently looking for a full-time position as a web developer. If you are interested in working with me, please feel free to contact me.
              </p>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col cols="12" md="5" class="ml-md-5">
          <carousel>
            <slide>
              <img src="" alt="placeholder image">
            </slide>
          </carousel>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
import { Slide, Carousel } from 'vue-carousel'
import {BCard, BCardBody, BCardHeader, BCardFooter, BCardTitle, BCardSubTitle, BCardText, BCardImg} from "bootstrap-vue";

export default {
  components : { Slide, Carousel, BCard, BCardBody, BCardHeader, BCardFooter, BCardTitle, BCardSubTitle, BCardText, BCardImg },
  name: 'about-me'
}
</script>
<style lang="scss" scoped>
  .VueCarousel-slide{
    img{
      max-height: 100vh;
    }
  }
</style>
<style lang="scss">
  @import "../../assets/styles/scss/colors";

  section {
  }

  .empty-space {
    position: relative;
    display: block;
  }

  .heading {
    text-align: center;
    text-transform: uppercase;
    color: $accent-color;
    letter-spacing: 3px;
    padding: 15px 10px;

  }

  .heading-top-bar::before {
    position: absolute;
    left: 0;
    top: 0;
    height: 4px;
    width: 150px;
    background: #ffcf02;
    content: "";

    & + div {
      position: relative;
    }
  }
</style>
