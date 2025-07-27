<template>
  <section class="about-section left-right">
    <div class="container-fluid">
      <div class="row fpv85 flex-cols-4-2 pdt5 pdlr20p justify-content-between">
        <div class="col">
          <div class="cell-view page-height" style="height: 331px; min-height: 480px;">
            <!-- my-customers-->
            <div class="my-customers">
              <div class="empty-space h50-md h0-sm heading-top-bar offset-md-2 offset-sm-1"></div>
              <div class="row">
                <div class="col-md-8 offset-md-2 col-sm-10 offset-sm-1">
                  <article class="bigger line-article text-left">
                    <h2 class="heading text-left" v-scroll-reveal.reset="{delay : 200}" >
                      <span class="font-weight-light">Let's </span>
                      <span class="font-weight-bold">get acquainted..</span>
                    </h2>
                    <p v-scroll-reveal.reset="{delay : 250}">I'm detail and result oriented with love for user-centered design that drives client satisfaction.
                      <br>
                      Also a Lover of Open standards, author and regular contributor to open source projects. Participant and organiser
                      of local developer meetups..
                    </p>
                  </article>
                </div>
              </div>
              <div class="about-me text-left">
                <div class="row normal">
                  <div class="col-md-4 col-sm-5 col-media offset-md-2 offset-sm-1">
                    <article>
                      <h4>Brief Contact Info</h4>
                      <div class="empty-space h15-md"></div>
                      <ul class="normal-4">
                        <li><a href="tel:+233260721202" class="text-white">+233 260721202</a></li>
                        <li><a href="mailto:georgeranch31@gmail.com" class="text-white">georgeranch31@gmail.com</a></li>
                        <li>Accra, Ghana</li>
                      </ul>
                      <div class="empty-space h40-md"></div>
                    </article>
                    <div class="follow">
                      <a class="m4p entry" href="https://github.com/archX3" target="_blank">
                        <i class="lni-github-original tz-icon-color"></i></a>
                      <a class="m4p entry" href="https://www.linkedin.com/in/kobina-koomson/" target="_blank">
                        <i class="fa lni-linkedin-filled tz-icon-color"></i></a>
                      <a class="m4p entry" href="https://www.behance.net/georgeranc8053" target="_blank">
                        <i class="fa lni-behance-original tz-icon-color"></i></a>

                      <a class="m4p entry" href="https://twitter.com/georgeranch" target="_blank">
                        <i class="fa lni-twitter-filled tz-icon-color"></i></a>
                      <!--<a class="m4p" href="https://plus.google.com/102834295247716950853">
                      <i class="fa fa-google-plus tz-icon-color"></i></a>-->
                      <a class="m4p entry" href="https://www.facebook.com/koomson.george" target="_blank">
                        <i class="fa lni-facebook-filled tz-icon-color"></i></a>
                      <a class="m4p entry" href="https://www.instagram.com/archx3/" target="_blank">
                        <i class="fa lni-instagram-original tz-icon-color"></i></a>
                    </div>
                  </div>
                </div>
                <div class="empty-space h30-md h15-sm"></div>
                <div class=" offset-md-2 offset-sm-1">
                  <a href="https://drive.google.com/open?id=1-snYSJh9QlB0-0rjKrWCeX3SJ-N4PNi9" target="_blank"
                     class="rounded-pill flex-fill" type="submit">View My Resume</a>
                </div>
              </div>
              <div class="empty-space h50-md h20-sm"></div>
            </div>
          </div>
        </div>

      <!--        <div class="col-lg-6 col-md-6 col-sm-12 position-relative padding-right-none fade-blur">
          <carousel :perPage="1" :paginationEnabled="false">
            <slide class="text-center overflow-hidden">
              <lazy-image
               alt="Sample Artwork 1"
               :low-res-src="`https://kobina.sirv.com/Images/kobina-koomson-w/background/about-slide-1.jpg?q=3`"
               :src="`https://kobina.sirv.com/Images/kobina-koomson-w/background/about-slide-1.jpg`"/>
            </slide>
            <slide class="text-center">
              <lazy-image
               alt="Sample Artwork 1"
               :low-res-src="`https://kobina.sirv.com/Images/kobina-koomson-w/background/about-slide-2.jpg?q=3`"
               :src="`https://kobina.sirv.com/Images/kobina-koomson-w/background/about-slide-2.jpg?q=70`"/>
            </slide>
          </carousel>
        </div>-->
      </div>
    </div>
  </section>
</template>
<script>
import { Slide, Carousel } from 'vue-carousel'
export default {
  components : { Slide, Carousel },
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
