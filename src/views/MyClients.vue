<template>
  <section class="clients-section left-right">
    <div class="container-fluid">
      <!--:style="`background-image: url('${client.logo}')`"-->
      <div class="row fpv85 flex-cols-4-2 pdt5 pdlr20p justify-content-between">
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="cell-view page-height" style="height: 331px; min-height: 480px;">
            <!-- my-customers-->
            <div class="my-customers">
              <div class="empty-space h50-md h0-sm heading-top-bar offset-md-2 offset-sm-1"></div>
              <div class="row">
                <div class="col-md-8 offset-md-2 col-sm-10 offset-sm-1">
                  <article class="bigger line-article text-left">
                    <h2 class="heading text-left" v-scroll-reveal.reset="{delay : 200}">
                      <span class="font-weight-light">My </span>
                      <span class="font-weight-bold">customers.</span>
                    </h2>
                    <p  v-scroll-reveal.reset="{delay : 250}">
                      I'm happy always to help in boosting the metrics of these awesome brands and many more of all sizes who trust
                      that they'll get the best of results if they hand their goals to me.
                    </p>
                  </article>
                </div>
              </div>
              <div class="empty-space h60-md h30-xs"></div>
              <div class="row">
                <div class="col-md-8 offset-md-2 col-sm-10 offset-sm-1 d-flex">
                  <div class="container">
                    <div class="row">
                      <!--<div class="col-xs-4 col-md-6 text-center"
                           :class="{'text-center' : (index+1) % 2 === 0,
                        'text-right' : (index+1) % 3 === 0,
                        'text-left' : (index+1) % 3 !== 0 && (index+1) % 2 !== 0}"
                           v-for="(client, index) in clients" :key="index"
                           v-scroll-reveal.reset="{delay : 50 + (index * 150)}">-->
                      <div class="col-xs-4 col-md-4 client text-center"
                           v-for="(client, index) in clients" :key="index"
                           v-scroll-reveal.reset="{delay : 50 + (index * 150)}">
                        <div :data-tooltip="client.name" :tooltip-pos="(index) > 2 ? 'down' : 'up'">
                          <a href="#" class="hex-mask">
                            <img class="ctr-hv" :src="client.logo" width="90" :alt="client.name">
                          </a>
                        </div>
                        <div class="empty-space h70-md h30-sm"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="empty-space h50-md h20-sm"></div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 position-relative testimonials">
          <div class="clip clip-right">
            <div class="bg fix-right fade-blur" style="background-image:url(img/background/testimonials.jpg);"></div>
            <div class="bg-span40"></div>
          </div>
          <div class="cell-view page-height" style="height: 682px; min-height: 682px;">
            <div class="width-50vw">
              <div class="row">
                <div class="col-md-8 offset-md-2 col-sm-10 offset-sm-1 img-text">
                  <article class="bigger text-center">
                    <div class="empty-space h50-md"></div>

                    <div class="empty-space h45-md h25-xs"></div>
                    <p>
                      I appreciate the feedback that I receive from my clients colleagues.
                      They go a long way to improve my entire work process and influence future results.
                    </p>
                    <h3 class="heading">
                      <span class="font-weight-light">Here's </span>
                      <span class="font-weight-bold">what some say.</span>
                    </h3>
                    <div class="empty-space h55-md h30-xs"></div>
                  </article>
                </div>
              </div>
              <div class="row">
                <div class="col-md-10 offset-md-1">
                  <p class="quote-marks">“</p>
                  <carousel :autoPlay="true" :perPage="1" paginationActiveColor="#ffcf02"
                            paginationColor="#000" :paginationPadding="5">
                    <slide class="text-center testimony" v-for="testimony in testimonials" :key="testimony.giverName">
                      <img :src="`img/testimony-author/${testimony.pic}`"
                           :alt="`${testimony.giverName} pic`" class="images-box fade-blur">

                      <p class="message mb-15">{{testimony.message}}</p>
                      <h5>{{testimony.giverName}}</h5>
                      <h5 class="font-italic font-weight-light">{{testimony.giverTitle}}</h5>
                    </slide>
                  </carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { Slide, Carousel } from 'vue-carousel'
export default {
  components : { Slide, Carousel },
  name : 'my-clients',
  data () {
    return {
      clients                  : [
        { name: 'Ghana Cocoa Board', logo: '/img/logos/cocobod-logo-b.png' },
        { name: 'Creative Arts Council', logo: '/img/logos/cac-logo-b.png' },
        { name: 'Webster University', logo: '/img/logos/webster-uni-logo-b.png' },
        { name: 'Acacia Medical Center', logo: '/img/logos/amc-logo-b.png' },
        { name: 'Codbit Ghana Ltd', logo: '/img/logos/codbit-logo-b.png' },
        { name: 'Bima Insurance', logo: '/img/logos/bima-logo-b.png' },
        // { name : 'Group 5ive', logo : '/img/logos/group-five-logo-b.png' },
      ],
      testimonials             : [
        {
          giverName : 'Abdul Quadri Sotomiwa',
          giverTitle: 'Product Design Expert',
          pic       : 'aqs.jpg',
          message   : `George is a passion driven Engineer. He understands complex technologies and is able to present them in a simple, engaging manner. I am always awed at how he converts mockup designs to engaging interfaces. He is a team player, and can be relied upon to lead multi-functional projects diligently. My respect for him stems from him being always ready to provide a helping hand wherever necessary. I recommend him highly.`
        },
        {
          giverName : 'Godwin Micthual',
          giverTitle: 'Cofounder, Unorthodox Reviews',
          pic       : 'mitch.jpg',
          message   : 'Choosing to work with George has been one of the decisions in my life. His attention to detail and innovation is quite exemplary'
        }
      ]
    }
  },
  props: {
  }
}
</script>
<style lang="scss" scoped>
  @import "../assets/css/colors";

  .hex-mask {
    -webkit-clip-path: url("../assets/img/hex-mask.svg#hexagonPath");
    -moz-clip-path: url("../assets/img/hex-mask.svg#hexagonPath");
    -o-clip-path: url("../assets/img/hex-mask.svg#hexagonPath");
    clip-path: url("../assets/img/hex-mask.svg#hexagonPath");
    -webkit-mask-image: url("../assets/img/hex-mask.svg");
    -moz-mask-image: url("../assets/img/hex-mask.svg");
    -o-mask-image: url("../assets/img/hex-mask.svg");
    mask-image: url("../assets/img/hex-mask.svg");
    mask-border: round;
    /*transform          : scale(0);*/
    -webkit-animation: FadeIn .4s ease-in-out;
    -webkit-animation-fill-mode: both;
    mask-repeat: no-repeat;
    mask-position: center;
    background-color: $accent-color;

  }

  .container {
    padding: 0 !important;
    margin: 0;
  }

  .clients-section {
  }

  .clip{
    width: 100%;
  }

  .clip-right {
    left: 0;
  }

  .VueCarousel{
    z-index: 3;
  }

  .images-box{
    max-height: 90px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
</style>
<style lang="scss">
  @import "../assets/css/colors";

  section {
  }

  .empty-space {
    position: relative;
    display: block;
  }

  .width-50vw {
    max-width: 50vw;
  }

  .testimonials {
  }

  .testimony {
  }

  .quote-marks {
    content: '\201C';
    font-size: 450px;
    font-family: freeSans, Arial, sans-serif;
    opacity: .2;
    color: #ffcf02;
    position: absolute;
    z-index: 1;
    top: 230px;
    user-select: none;
  }

  .heading {
    text-align: center;
    text-transform: uppercase;
    color: $accent-color;
    letter-spacing: 3px;
    padding: 15px 10px;

  }

  .client {
    a {
      display: inline-block;
      height: 100px;
      width: 100px;
      background-color: $accent-color;
      position: relative;
      padding: 10px;

      img {
        vertical-align: bottom;
      }
    }
  }

  .heading-top-bar{
    &::before
    {
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
    &.ctr::before{
      width: 200px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
</style>
