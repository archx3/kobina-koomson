<template>
  <div id="hero-area" class="hero-area-bg container-full-bg main-content">
    <div class="container flex-row flex ctr-h bot-85">
      <div class="row justify-content-between main-actions">
        <div class="col-md-5">
          <img src="/img/background/kobina-hero-pic.png" alt="">
        </div>
        <div class=" col-lg-6">
          <div class="contents page-header-inner home-text text-left mb-5">
            <h3 class="my-name">
              <span class='font-weight-light'>Hi, I'm <span class='official-name font-weight-bold'>{{
                  name
                }}</span></span>
            </h3>
            <p>
              A <span class="skill-highlight badge-pill badge badge-light pb-0">Software Engineer</span> with a passion
              for building.
              This is my personal space where I share my thoughts, ideas, and projects.
            </p>
            <p class="text-muted">
              I am a full-stack web developer with a background in graphic design and a degree in computer science. I am
              a
              self-motivated, detail-oriented, always looking to learn new things and improve my skills.
            </p>
          </div>
          <div class="hero-buttons d-flex justify-content-between mt-5">
            <a href="/resume" class="">
              <div class=" d-flex rounded-pill" style="background-color: rgb(244, 168, 4)">
                <h6 class="d-none d-md-block mb-0 text-secondary m-auto">About Me</h6>
              </div>
            </a>
            <a href="/projects" class="">
              <div class=" d-flex rounded-pill" style="background-color: rgb(253,86,25)">
                <h6 class="d-none d-md-block mb-0 m-auto">My Projects</h6>
              </div>
            </a>
            <a href="/contact" class="">
              <div class=" d-flex rounded-pill" style="background-color: rgb(194,248,3)">
                <h6 class="d-none d-md-block mb-0 text-secondary m-auto">Contact Me</h6>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "hero-section",
  components: {},
  data () {
    return {
      officialName: "Kobina G. Koomson",
      name: "Kobina",
      nameTyped: false,
      skillsTyped: false,
      bgImage: "https://kobina.sirv.com/Images/kobina-koomson-w/background/hero16x9-3-br.jpg?q=3",
      bgChanged: false,
      lastScrollTop: 0,
      jumpIndex: 0,
      shadowOfficialName: []
    };
  },
  props: [],
  computed: {},
  methods: {},
  mounted () {
  }
};
</script>
<style scoped lang="scss">
@import "../assets/styles/scss/colors";
@import "../assets/styles/scss/media-queries";

.hero-area-bg {
  height: calc(100vh - 224px);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  img {
    width: 100%;
  }

  .col-12 {
    padding: 0;
    background-repeat: no-repeat;
    /*filter: blur(8px);*/
    /*background-attachment: fixed;*/
    transition: all .8s ease-out;
    background-size: cover;
    background-position: center center;

    &.loaded {
      filter: blur(0) grayscale(0.65);
    }
  }
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  /*background: rgba(0, 0, 0, 0);*/
  opacity: .8;
  /*z-index: 1;*/
  //background: linear-gradient(45deg, #181b27 58%, #443329 66%, rgba(255, 153, 50, 0.65) 100%);
  /*display: none;*/
}

#hero-area {
  overflow: hidden;
  position: relative;

  .contents {

    .btn {
      margin: 0 10px 0;
      font-size: 16px;
      padding: 12px 40px;
      text-transform: uppercase;
    }
  }

}

.main-actions {
  /*margin-top: 40%;*/
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

.container-full-bg {
  display: flex;

}

.home-text {
  h3 {
    font-size: 4.3rem;
    margin: 0 auto;
    color: #fff !important;

    span.offcial-name span {
      display: unset;
    }
  }
}

span.offcial-name {
  font-size: 90px;

  span {
    display: unset;
  }
}

.skill-highlight {
  width: auto;
  //margin: 0 auto;
  text-transform: uppercase;
  //padding: 5px 20px;
  //-webkit-border-radius: 20px;
  //-moz-border-radius: 20px;
  //border-radius: 20px;
  font-weight: 700;
  letter-spacing: 3px;
  color: #000;
  //background-color: $accent-color;
  margin-bottom: 10px;
}

.about-d-chevron {
  height: 45px;
  width: 45px;
  bottom: 22.5px;
  left: calc(50% - 22.5px);
  background: url(../assets/img/scroll.gif) 50% 50% no-repeat rgba(215, 181, 94, 0);
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  display: block;
  cursor: pointer;
  -webkit-transition: all 300ms ease-in-out 0s;
  -moz-transition: all 300ms ease-in-out 0s;
  -ms-transition: all 300ms ease-in-out 0s;
  -o-transition: all 300ms ease-in-out 0s;
  transition: all 300ms ease-in-out 0s;
  position: absolute;

  &:hover {
    background-color: #ffcf02;
    transform: scale(1.01, 1.01);
  }
}

.more-tooltip {
  background-color: $accent-color;
  width: 250px;
  height: auto;
  border-radius: 3px;
  /*bottom: 85px;*/
  color: #000;
  padding: 10px;
  position: relative;

  &::before, &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px;
    border-color: transparent;
  }

  &::before {
    bottom: -20px;
    left: calc(50% - 10px);
    border-top-color: #ffcf02;
  }

  p {
    font-size: 16px;
    font-weight: 400;
  }
}

.hero-buttons {
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;

  div {
    height: 60px;
    width: 140px;
  }
}

@media (max-width: 992px) {
  .main-actions {
    margin-top: calc(65%);
  }

  .skill-highlight {
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
  }
}
</style>
<style lang="scss">
@import "../assets/styles/scss/media-queries";
@import "../assets/styles/scss/includes/mixins";

.main-content {
  height: calc(100vh - 124px);

  &.fixed-footer {
    height: calc(100vh - 224px);
  }
}

@keyframes fadeBlur {
  0% {
    filter: grayscale(0);
  }
  100% {
    filter: grayscale(0.65);
  }
}

.fade-blur, .fade-blur.blurry-bg-vision.loaded {
  animation-name: fadeBlur;
  animation-duration: .8s;
  filter: grayscale(0.65);
}

@include max-screen-size(760px) {
  .skill-highlight {
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
  }
}

@include max-screen-size(576px) {
  .official-name {
    font-weight: bold;
    font-size: 40px;
  }
}

</style>
