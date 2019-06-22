<template>
  <nav class="navbar  navbar-expand-sm navbar-expand-xs bg-inverse fixed-top scrolling-navbar"
       :class="{ 'top-nav-collapse' : topNavCollapse, 'nav-active' : mobNavShow}">
    <div class="container">
      <transition name="collapsing">
        <div class=" navbar-collapse" id="navbarCollapse" style="z-index: 10">
          <ul class="navbar-nav mr-auto w-100 justify-content-end">
            <!--List Items-->
            <li v-for="listItem in homeNavList "
                :key="listItem.name" @click="setActiveNavItem(listItem.name)"
                class="nav-item" :class="{ active : activeNavItem ===  listItem.name }">
              <a class="nav-link" v-scroll-to="listItem.link" :data-tooltip="listItem.name" tooltip-pos="down">
                <img type="image/svg+xml" :src="`img/icons/${listItem.icon}`">
              </a>
            </li>
            <li class="search-inp-li rltv">
              <input id="search-inp" class="rc25 pdl25 pdr15 w100 search-inp bg-nr bgp-x-9 bgp-y-51p" type="text" title=""
                     placeholder="SEARCH">
              <label for="search-inp">
              </label>
            </li>
            <!--<li v-for="listItem in extNavList " :data-tooltip="listItem.name"
                :key="listItem.name" @click="setActiveNavItem(listItem.name)"
                class="nav-item" :class="{ active : activeNavItem ===  listItem.name }">
              <router-link tag="a" class="nav-link" :data-tooltip="listItem.name" tooltip-pos="down" :to="listItem.link">
                <img type="image/svg+xml" :src="`img/icons/${listItem.icon}`">
              </router-link>
            </li>-->

            <li class="nav-item hamburger-li" >
              <a href="#" @click="handleMobNav">
                <div class="hamburglar is-open"
                     :class="{'is-closed' : !mobNavShow, 'is-open' : mobNavShow}"
                     data-toggle="collapse" data-target="#navbarCollapse"
                     aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                  <div class="burger-icon">
                    <div class="burger-container">
                      <span class="burger-bun-top"></span>
                      <span class="burger-filling"></span>
                      <span class="burger-bun-bot"></span>
                    </div>
                  </div>

                  <!-- svg ring containter -->
                  <div class="burger-ring">
                    <!--<svg class="svg-ring">
                      <path class="path" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"
                            d="M 20 2 C 16.3 2 2 16.3 2 20 s 14.3 32 32 32 s 32 -14.3 32 -32 S 51.7 2 20 2"/>
                    </svg>-->
                  </div>
                  <!-- the masked path that animates the fill to the ring -->
                  <!--<svg width="0" height="0">
                    <mask id="mask">
                      <path xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ff0000" stroke-miterlimit="10" stroke-width="1"
                            d="M 34 2 c 11.6 0 21.8 6.2 27.4 15.5 c 2.9 4.8 5 16.5 -9.4 16.5 h -4"/>
                    </mask>
                  </svg>-->
                  <div class="path-burger">
                    <div class="animate-path">
                      <div class="path-rotation"></div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </transition>
      <nav id="nav">
        <div class="nav-opener-circle" style="/*! display: none; */">
          <div class="circle-container">
            <div class="circle-expand"></div>
          </div>
        </div>
<!--        <div class="holder hidden-sm hidden-xs" ></div>-->
        <div class="container-fluid" >
          <div class="row cont v-align-transform" style="top: 341px;">
            <ul>
              <li v-for="listItem in homeNavList " :key="listItem.name"
                  @click="handleMobNav" :class="{ active : activeNavItem ===  listItem.name }">
                <a v-scroll-to="listItem.link">{{listItem.name}}</a>
              </li>
              <li v-for="listItem in extNavList" :key="listItem.name"
                  @click="handleMobNav" :class="{ active : activeNavItem ===  listItem.name }">
                <router-link tag="a" :to="listItem.link">
                  {{listItem.name}}</router-link>
              </li>
              <li v-for="listItem in extLinkList" :key="listItem.name"
                  @click="handleMobNav" :class="{ active : activeNavItem ===  listItem.name }">
                <router-link tag="a" :to="listItem.link">
                  {{listItem.name}}</router-link>
              </li>
              <!--<li class="has-dropdown"><a href="/solutions/" target="_self">Our <span>Solutions</span></a><ul><li><a href="/solutions/#cloud" target="_self" class="scrollto" data-hash="#cloud">Cloud</a></li><li><a href="/solutions/#connectivity" target="_self" class="scrollto" data-hash="#connectivity">Connectivity</a></li><li><a href="/solutions/#data-centres" target="_self" class="scrollto" data-hash="#data-centres">Data Centres</a></li><li><a href="/solutions/#security" target="_self" class="scrollto" data-hash="#security">Security</a></li><li><a href="/solutions/#communications" target="_self" class="scrollto" data-hash="#communications">Communications</a></li><li class="has-dropdown"><a href="/solutions/#wholesale" target="_self" class="scrollto" data-hash="#wholesale">Wholesale</a></li></ul></li>-->
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </nav>
</template>

<script>
import Vue         from 'vue'
import VueScrollTo from 'vue-scrollto'

// Vue.use(VueScrollTo)

// You can also pass in the default options
Vue.use(VueScrollTo, {
  container : 'body',
  duration  : 500,
  easing    : 'ease',
  offset    : 0,
  force     : true,
  cancelable: false,
  onStart   : false,
  onDone    : function () {
    console.log('scroll-done')
  },
  onCancel  : false,
  x         : false,
  y         : true
})
export default {
  name    : 'NavBar',
  data () {
    return {
      activeNavItem : this.active || 'Home',
      homeNavList   : this.navListSet || [
        { name: 'Home', link: '#app', icon: 'home.svg' },
        { name: 'About', link: '#about-section', icon: 'help.svg' },
        { name: 'Gallery', link: '#gallery-section', icon: 'picture.svg' },
        { name: 'Customers', link: '#customers', icon: 'happy-client.svg' },
        { name: 'Contact', link: '#contact', icon: 'headset.svg' }
      ],
      extNavList    : [
        { name: 'Blog', link: '#', icon: 'blog.svg' },
        { name: 'Logofolio', link: '#', icon: 'logofolio.svg' },
      ],
      extLinkList    : [
        { name: 'Github', link: 'https://github.com/archX3', icon: 'github.svg' },
      ],
      topNavCollapse: false,
      mobNavShow    : false,
    }
  },
  props   : ['navListSet', 'active'],
  computed: {
    year () {
      return this.$route.params.year || new Date().getFullYear()
    },
  },
  methods : {
    setActiveNavItem (name) {
      this.activeNavItem = name
    },
    handleMobNav () {
      this.mobNavShow = !this.mobNavShow
    },
    handleScroll (e) {
      this.topNavCollapse = window.scrollY > 60
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/css/colors";

  $transition-all-02-eio: all 0.3s ease-in-out;
  $hamburger-width : 40px;

  .navbar-brand {
    position: relative;
    padding: 0;

    div {
      min-width: 100px;
      min-height: 100px;
      -webkit-background-size: contain;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
      transition: all 400ms ease-in-out;
    }
  }

  .navbar-toggler {
    padding: 0;
    position: relative;
  }

  .nav-link {
    background: #000;

    img {
      vertical-align: middle;
      height: 30px;
      pointer-events: none;
      transition: none !important;
    }

    &:hover img {
      filter: invert(1);
      transition: none !important;
    }
  }

  .indigo {
    background: transparent;
  }

  .navbar-expand-xs {
    .container {
      max-width: 95%;
    }

    .navbar-toggler {
      //background: $accent-gradient;-->
      //border: 1px solid $accent-color;-->
      /*background-image: #fff;*/
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      /*background-clip: text;*/
      /*border-radius: 4px;*/
      cursor: pointer;
    }

    .navbar-nav {
      .nav-link {
        color: #fff;
        font-size: 14px;
        padding: 0 8px;
        padding-top: 2px;
        margin: 15px 3px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        line-height: 40px;
        width: 46px;
        height: 46px;
        text-transform: uppercase;
        background: transparentize($dark-b-gray, .5);
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        position: relative;
      }

      li > a:before {
        content: '';
        position: absolute;
        top: 19px;
        left: 5%;
        margin-left: -10px;
        width: 15px;
        height: 2px;
        //background: $accent-color;-->
        -webkit-transform: scale3d(0, 1, 1);
        -moz-transform: scale3d(0, 1, 1);
        transform: scale3d(0, 1, 1);
        -webkit-transition: -webkit-transform 0.1s;
        -moz-transition: -webkit-transform 0.1s;
        transition: transform 0.1s;
      }

      .active a {

        &:before {
          -webkit-transform: scale3d(1, 1, 1);
          -moz-transform: scale3d(1, 1, 1);
          transform: scale3d(1, 1, 1);
          -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          -moz-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          -webkit-transition-duration: 0.3s;
          -moz-transition-duration: 0.3s;
          transition-duration: 0.3s;
        }
      }
    }
  }

  .navbar-expand-xs .navbar-nav li a:hover,
  .navbar-expand-xs .navbar-nav li .active > a,
  .navbar-expand-xs .navbar-nav li a:focus {
    //<!--background-image: $accent-gradient;-->
    /*-webkit-background-clip: text;*/
    /*-webkit-text-fill-color: transparent;*/
    /*background-clip: text;*/
    outline: none;
    cursor: pointer;
  }

  .navbar-expand-xs .navbar-nav .nav-link:focus,
  .navbar-expand-xs .navbar-nav .nav-link:hover {
    background-color: $accent-color;
    //background-image: $accent-gradient;
    /*-webkit-background-clip: text;*/
    /*-webkit-text-fill-color: transparent;*/
    /*background-clip: text !important;*/
  }

  @media (min-width: 220px) {
    .navbar-expand-xs{
      -ms-flex-flow: row nowrap;
      flex-flow: row nowrap;
      -ms-flex-pack: start;
      justify-content: flex-start;
      .navbar-nav {
        -ms-flex-direction: row;
        flex-direction: row;

        .nav-link{
          /*display: none;*/
        }
      }
    }
  }
  @media (max-width: 768px) {
    .navbar-nav {
      .nav-link {
        display: none;
      }
    }
  }

  .navbar-expand-md .navbar-nav .nav-link{
    display: block;
  }

  .navbar {
    padding: 0;
  }

  .top-nav-collapse {
    z-index: 999;
    top: 0 !important;
    min-height: 50px;
    /*box-shadow: 0 3px 6px 3px rgba(0, 0, 0, 0.06);*/
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: fadeInDown;
    animation-name: fadeInDown;
    /*<!--background: transparentize($dark-b-gray, .7) !important;-->*/

    .navbar-brand {
      div {
        max-width: 45px;
        min-height: 45px;
      }
    }

    .navbar-brand {
      top: 0;
    }

    .navbar-nav {
      a, .nav-link {
        background: $dark-b-gray;
        color: #fff !important;

        &:hover {

          color: $accent-color !important;
        }
      }

      li.active a.nav-link {
        color: $accent-color !important;
      }
    }
  }

  .navbar li.active a.nav-link {
    //<!--background-image: $accent-gradient;-->
    /*-webkit-background-clip: text;*/
    /*-webkit-text-fill-color: transparent;*/
    /*background-clip: text !important;*/
  }

  .search-inp-li {
    display: flex;
    position: relative;
    /*width: 40px;*/
    /*height: 40px;*/
    input {
      margin: auto 6px;

      & + label {
        /*position: relative;*/

        &::before {
          content: "";
          height: 2px;
          width: 10px;
          background: #fff;
          display: block;
          transform: rotate(50deg);
          /*transform-origin: left;*/
          transition: all .5s ease-in;
          position: absolute;
          top: 64%;
          left: 66%;
        }
      }

      &:focus {
        & + label {
          &::before {
            transition: all 0s;
            transform: scale(0);
          }
        }
      }

      &:focus + li::before {
        transform: scale(0);
      }
    }

    &::before {
      content: '';
      width: 30px;
      height: 30px;
      background-color: transparentize($dark-b-gray, .5);
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      position: absolute;
      top: 31%;
      left: -10%;
      transition: all .3s ease-in;
      transform: scale(0);
    }

    &:hover::before {
      transform: scale(1);
    }
  }

  input.search-inp {

    background-color: transparent;
    background-size: 11px;
    background-position-y: 51%;
    background-position-x: 5px;
    background-repeat: no-repeat;
    transition: all .5s ease-out;
    cursor: pointer;
    width: 15px;
    height: 15px;
    color: #000;

    padding: 5px;
    border: 2px solid #fff;
    -webkit-border-radius: 25px;
    -moz-border-radius: 50%;
    border-radius: 25px;

    &:focus {
      background-image: url("../assets/img/musica-searcher.svg");
      transition: all .3s ease;
      height: 28px;
      width: 200px;
      padding: 5px 20px;
      border-color: $accent-color;
      cursor: auto;
    }
  }

  .dropdown-toggle::after {
    display: none;
  }

  .dropdown-menu {
    margin: 0;
    padding: 0;
    display: none;
    position: absolute;
    z-index: 99;
    min-width: 210px;
    /*background-color: #fff;*/
    white-space: nowrap;
    border-radius: 4px;
    -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
    animation: fadeIn 0.4s;
    -webkit-animation: fadeIn 0.4s;
    -moz-animation: fadeIn 0.4s;
    -o-animation: fadeIn 0.4s;
    //-ms-animation: fadeIn 0.4s;
  }

  .dropdown-menu:before {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: 100%;
    left: 20%;
    margin-left: -5px;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    border-bottom: 10px solid #f5f5f5;
  }

  .dropdown:hover .dropdown-menu {
    display: block;
    position: absolute;
    text-align: left;
    top: 100%;
    border: none;
    animation: fadeIn 0.4s;
    -webkit-animation: fadeIn 0.4s;
    -moz-animation: fadeIn 0.4s;
    -o-animation: fadeIn 0.4s;
    //-ms-animation: fadeIn 0.4s;
    background: #f5f5f5;
  }

  .dropdown .dropdown-menu .dropdown-item {
    width: 100%;
    padding: 12px 20px;
    font-size: 14px;
    color: #212121;
    border-bottom: 1px solid #f1f1f1;
    text-decoration: none;
    display: inline-block;
    float: left;
    clear: both;
    position: relative;
    outline: 0;
    transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    //-ms-transition: all 0.3s ease-in-out;
  }

  .dropdown .dropdown-menu .dropdown-item:last-child {
    border-bottom: none;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .dropdown .dropdown-menu .dropdown-item:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  .dropdown .dropdown-item:focus,
  .dropdown .dropdown-item:hover,
  .dropdown .dropdown-item.active {
    color: $accent-color;
  }

  .dropdown-item.active, .dropdown-item:active {
    background: transparent;
  }

  .fadeInUpMenu {
    -webkit-animation-name: fadeInUpMenu;
    animation-name: fadeInUpMenu;
  }

  /* only small tablets */
  @media (min-width: 768px) and (max-width: 991px) {
    .bg-inverse {
      /*background: #fff !important;*/
      box-shadow: 0 3px 6px 3px rgba(0, 0, 0, 0.06);
    }
    .navbar-brand {
      div {
        /*background-image: url("/img/logos/js-camp-19-cy.png") !important;*/
      }
    }
    .navbar-expand-xs .navbar-brand, .navbar-expand-xs .navbar-toggler {
      margin: 0 15px;
    }
    .navbar-nav {
      padding: 5px 15px;
    }
    .navbar-expand-xs .navbar-nav .nav-link {
      /*margin-top: 0;*/
      /*margin-bottom: 0;*/
      /*padding: 0 40px;*/
      color: #212121;
    }
  }

  @media (max-width: 991px) {
    .bg-inverse {
      /*background: #fff !important;*/
      box-shadow: 0 3px 6px 3px rgba(0, 0, 0, 0.06);
    }
    .navbar-expand-xs .navbar-brand, .navbar-expand-xs .navbar-toggler {
      margin: 0 15px;
    }
    .navbar-nav {
      padding: 5px 15px;
    }
    .navbar-brand {
      div {
        background-image: url("/img/logos/js-camp-19-cy.png") !important;
      }
    }
    .navbar-expand-xs .navbar-nav .nav-link {
      /*margin-top: 0;*/
      /*margin-bottom: 0;*/
      /*padding: 0 40px;*/
      color: #212121;
    }
  }

  $color: $accent-color; // icon color
  $blue: #158fef; // background color-->
  $animation: 0.6s; // animation speed
  $scale: 1; // icon scale 68/68 default

  .hamburglar {
    transform: scale($scale);
    margin: 0 auto;
    position: relative;
    display: block;
    width: $hamburger-width;
    height: $hamburger-width;
    -webkit-touch-callout: none;
    user-select: none;
  }

  // transition mask
  .path-burger {
    position: absolute;
    top: 0;
    left: 0;
    height: $hamburger-width;
    width: $hamburger-width;
    // two masks because... browser support.
    mask: url(#mask);
    -webkit-mask-box-image: url(https://raygun.io/upload/mask.svg);
  }

  .animate-path {
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
  }

  // what this does is create a small square that I then rotate behind an svg mask, giving the apparence of the line animating
  .path-rotation {
    height: 34px;
    width: 34px;
    /*margin: 34px 34px 0 0;*/
    transform: rotate(0deg);
    transform-origin: 100% 0;

    &:before {
      content: '';
      display: block;
      width: 30px;
      height: 34px;
      /*margin: 0 4px 0 0;*/
      background: $color;
    }
  }

  // box rotation animation
  @keyframes rotate-out {
    0% {
      transform: rotate(0deg);
    }
    40% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes rotate-in {
    0% {
      transform: rotate(360deg);
    }
    40% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  // offset moves
  // dasharray is the dash size
  // need to be able to control dash space size.

  .hamburglar.is-open {
    .path {
      animation: dash-in $animation linear normal;
      animation-fill-mode: forwards;
    }

    .animate-path {
      animation: rotate-in $animation linear normal;
      animation-fill-mode: forwards;
    }
  }

  .hamburglar.is-closed {
    .path {
      animation: dash-out $animation linear normal;
      animation-fill-mode: forwards;
    }

    .animate-path {
      animation: rotate-out $animation linear normal;
      animation-fill-mode: forwards;
    }
  }

  .path {
    stroke-dasharray: 240;
    stroke-dashoffset: 240;
    stroke-linejoin: round;
  }

  @keyframes dash-in {
    0% {
      stroke-dashoffset: 240;
    }
    40% {
      stroke-dashoffset: 240;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes dash-out {
    0% {
      stroke-dashoffset: 0;
    }
    40% {
      stroke-dashoffset: 240;
    }
    100% {
      stroke-dashoffset: 240;
    }
  }

  // All good burgers need filling!

  .hamburger-li{
    a{
      display: block;
      color: #fff;
      font-size: 14px;
      padding: 0 8px;
      padding-top: 2px;
      margin: 15px 3px;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      line-height: 40px;
      width: 46px;
      height: 46px;
      text-transform: uppercase;
      background: transparentize($dark-b-gray, .5);
      -webkit-transition: all 0.3s ease-in-out;
      -moz-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
      position: relative;
    }
    &:hover{
      a {
        background-color: $accent-color;
      }

      div.burger-icon span{
      background: $dark-b-gray !important;
    }
  }}

  .burger-icon {
    position: absolute;
    /*padding: 6px 3px;*/
    margin: 6px 3px;
    height: 30px;
    width: 25px;
    z-index: 3;
  }

  .burger-container {
    position: relative;
    height: 25px;
    width: 25px;
  }

  .burger-bun-top,
  .burger-bun-bot,
  .burger-filling {
    position: absolute;
    display: block;
    height: 2px;
    width: 25px;
    border-radius: 2px;
    background: $color;
  }

  .burger-bun-top {
    top: 0;
    transform-origin: 30px 1px;
  }

  .burger-bun-bot {
    bottom: 0;
    transform-origin: 26px 2px;
  }

  //.burger-filling {
  //  @include transition(all,($animation/2.5),ease-in-//out);
  //}
  // relative parent is the button
  .burger-filling {
    top: 12px;
  }

  // burger ring container
  .burger-ring {
    position: absolute;
    top: 0;
    left: 0;
    width: $hamburger-width;
    height: $hamburger-width;
  }

  .svg-ring {
    width: $hamburger-width;
    height: $hamburger-width;
  }

  // bun animations
  .hamburglar.is-open {
    .burger-bun-top {
      animation: bun-top-out $animation linear normal;
      animation-fill-mode: forwards;
    }

    .burger-bun-bot {
      animation: bun-bot-out $animation linear normal;
      animation-fill-mode: forwards;
    }
  }

  .hamburglar.is-closed {
    .burger-bun-top {
      animation: bun-top-in $animation linear normal;
      animation-fill-mode: forwards;
    }

    .burger-bun-bot {
      animation: bun-bot-in $animation linear normal;
      animation-fill-mode: forwards;
    }
  }

  @keyframes bun-top-out {
    0% {
      left: 0;
      top: 0;
      transform: rotate(0deg);
    }
    20% {
      left: 0;
      top: 0;
      transform: rotate(15deg);
    }
    80% {
      left: -5px;
      top: 0;
      transform: rotate(-60deg);
    }
    100% {
      left: -5px;
      top: 1px;
      transform: rotate(-45deg);
    }
  }

  @keyframes bun-bot-out {
    0% {
      left: 0;
      transform: rotate(0deg);
    }
    20% {
      left: 0;
      transform: rotate(-15deg);
    }
    80% {
      left: -5px;
      transform: rotate(60deg);
    }
    100% {
      left: -5px;
      transform: rotate(45deg);
    }
  }

  @keyframes bun-top-in {
    0% {
      left: -5px;
      bot: 0;
      transform: rotate(-45deg);
    }
    20% {
      left: -5px;
      bot: 0;
      transform: rotate(-60deg);
    }
    80% {
      left: 0;
      bot: 0;
      transform: rotate(15deg);
    }
    100% {
      left: 0;
      bot: 1px;
      transform: rotate(0deg);
    }
  }

  @keyframes bun-bot-in {
    0% {
      left: -5px;
      transform: rotate(45deg);
    }
    20% {
      left: -5px;
      bot: 0;
      transform: rotate(60deg);
    }
    80% {
      left: 0;
      bot: 0;
      transform: rotate(-15deg);
    }
    100% {
      left: 0;
      transform: rotate(0deg);
    }
  }

  // burger filling
  .hamburglar.is-open {
    .burger-filling {
      animation: burger-fill-out $animation linear normal;
      animation-fill-mode: forwards;
    }
  }

  .hamburglar.is-closed {
    .burger-filling {
      animation: burger-fill-in $animation linear normal;
      /*animation-fill-mode: forwards;*/
    }
  }

  @keyframes burger-fill-in {
    0% {
      width: 0;
      left: 36px;
    }
    40% {
      width: 0;
      left: 40px;
    }
    80% {
      width: 36px;
      left: -6px;
    }
    100% {
      width: 36px;
      left: 0px;
    }
  }

  @keyframes burger-fill-out {
    0% {
      width: 36px;
      left: 0px;
    }
    20% {
      width: 42px;
      left: -6px;
    }

    40% {
      width: 0;
      left: 40px;
    }

    100% {
      width: 0;
      left: 36px;
    }
  }
</style>
<style lang="scss">
  @import "../assets/css/colors";
  #nav {
    top: 0;
    left: 0;
    right: 0;
    max-height: 100px;
    transition: all linear 0.8s;
    position: absolute;
    z-index: 7;
    overflow: hidden;
  }

  #nav > * {
    visibility: hidden;
    opacity: 0;
    top: 0;
  }

  #nav .holder {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    top: -100vh;
    bottom: 100vh;
  }

  .nav-active {
    #nav {
      .holder {
      top: 0;
      bottom: 0;
      }
    }
    a.nav-link{
      background-color: $dark-b-gray ;
    }
    input.search-inp{
      background-image: url(/img/musica-searcher.8df84450.svg);
      -webkit-transition: all .3s ease;
      transition: all .3s ease;
      height: 28px;
      width: 200px;
      padding: 5px 20px;
      border-color: #ffcf02;
      color: #fff;
      cursor: auto;
      &+label::before{
        display: none;
      }
    }
  }

  #nav .holder:before {
    content: "\e9be";
    font-size: 600px;
    font-family: 'is' !important;
    position: absolute;
    left: -210px;
    top: 50%;
    color: #fff;
    opacity: 0.2;
  }

  #nav .holder:after {
    content: "\e9ba";
    font-size: 600px;
    font-family: 'is' !important;
    position: absolute;
    right: -210px;
    top: 50%;
    color: #fff;
    opacity: 0.2;
  }

  #nav .container-fluid {
    min-height: 100vh;
  }

  #nav .container-fluid .cont {
    padding: 240px 0;
  }

  @media only screen and (max-width: 1681px) {
    #nav .container-fluid .cont {
      padding: 150px 0;
    }
  }

  @media only screen and (max-width: 767px) {
    #nav .container-fluid .cont {
      padding: 108px 0 100px 0;
      top: 0 !important;
    }
  }

  @media only screen and (max-width: 1681px) {
    #nav {
    }
  }

  @media only screen and (max-width: 1024px) {
    #nav {
      max-height: 90px;
    }
  }

  @media only screen and (max-width: 767px) {
    #nav {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
    .nav-active #nav {
      overflow-x: hidden;
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
    }
  }

  #nav .nav-opener-circle {
    opacity: 1;
    visibility: visible;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    max-height: 100px;
  }

  .nav-active #nav .nav-opener-circle {
    height: 100vh;
    max-height: 100vh;
    overflow: hidden;
    position: fixed;
  }

  #nav .nav-opener-circle .circle-container {
    padding: 10px 0 0 37px;
    max-width: 1989px;
    position: relative;
    margin: 0 auto;
  }

  #nav .nav-opener-circle .circle-container .circle-expand {
    position: relative;
    background-color: $dark-b-gray;
    width: 800px;
    height: 800px;
    left: calc( 100% - 80px);
    top: 5px;
    border-radius: 50%;
    -moz-transform: translate(-50%, -50%) scale(0);
    -ms-transform: translate(-50%, -50%) scale(0);
    -o-transform: translate(-50%, -50%) scale(0);
    -webkit-transform: translate(-50%, -50%) scale(0);
    transform: translate(-50%, -50%) scale(0);
    z-index: -1;
    transition: transform ease 0.8s, background-color ease 0.3s;
    margin: 32px 5px 0 23px;
  }

  #nav .nav-opener-circle .circle-container .circle-expand.hover, .nav-active #nav .nav-opener-circle .circle-container .circle-expand {
    background-color: transparentize($dark-b-gray, 0.05);
  }

  @media only screen and (max-width: 1681px) {
    #nav .nav-opener-circle .circle-container .circle-expand {
      margin: 24px 5px 0 5px;
    }
  }

  @media only screen and (max-width: 1299px) {
    #nav .nav-opener-circle .circle-container .circle-expand {
      margin: 24px 5px 0 5px;
    }
  }

  @media only screen and (max-width: 1023px) {
    #nav .nav-opener-circle .circle-container .circle-expand {
      margin: 21px 0 0 5px;
      transform: translate(-50%, -50%) scale(0);
    }
  }

  @media only screen and (max-width: 767px) {
    #nav .nav-opener-circle .circle-container .circle-expand {
      margin: 7px 0 0 0px;
      transform: translate(-50%, -50%) scale(0);
    }
  }

  .affix #nav .nav-opener-circle .circle-container .circle-expand {
    margin: 3px 5px 0 5px;
  }

  @media only screen and (max-width: 1681px) {
    .affix #nav .nav-opener-circle .circle-container .circle-expand {
      margin: 3px 5px 0 5px;
    }
  }

  @media only screen and (max-width: 1299px) {
    .affix #nav .nav-opener-circle .circle-container .circle-expand {
      margin: 3px 5px 0 5px;
    }
  }

  @media only screen and (max-width: 1023px) {
    .affix #nav .nav-opener-circle .circle-container .circle-expand {
      margin: 3px 0 0 5px;
      transform: translate(-50%, -50%) scale(0);
    }
  }

  @media only screen and (max-width: 767px) {
    .affix #nav .nav-opener-circle .circle-container .circle-expand {
      margin: 6px 0 0 0px;
      transform: translate(-50%, -50%) scale(0);
    }
  }

  .nav-active #nav {
    min-height: 100vh;
    max-height: 900vh;
  }

  .nav-active #nav > * {
    opacity: 1;
    visibility: visible;
  }

  .nav-active #nav .nav-opener-circle {
    opacity: 1;
    visibility: visible;
  }

  .nav-active #nav .nav-opener-circle .circle-expand {
    background-color: transparentize($dark-b-gray, 0);
    -moz-transform: translate(-50%, -50%) scale(10) !important;
    -ms-transform: translate(-50%, -50%) scale(10) !important;
    -o-transform: translate(-50%, -50%) scale(10) !important;
    -webkit-transform: translate(-50%, -50%) scale(10) !important;
    transform: translate(-50%, -50%) scale(10) !important;
  }

  .nav-active #nav .affix .nav-opener-circle {
    opacity: 1;
    visibility: visible;
  }

  .nav-active #nav .affix .nav-opener-circle .circle-expand {
    background-color: transparentize($dark-b-gray, 0.05);
    -moz-transform: translate(-50%, -50%) scale(10);
    -ms-transform: translate(-50%, -50%) scale(10);
    -o-transform: translate(-50%, -50%) scale(10);
    -webkit-transform: translate(-50%, -50%) scale(10);
    transform: translate(-50%, -50%) scale(10);
  }

  #nav:before {
    z-index: -1;
  }

  @media only screen and (max-width: 1681px) {
    #nav:before {
      bottom: 280px;
    }
  }

  @media only screen and (max-width: 1023px) {
    #nav:before {
      bottom: 160px;
    }
  }

  @media only screen and (max-width: 767px) {
    #nav:before {
      display: none;
    }
  }

  #nav ul {
    margin: 0 auto;
    padding: 0;
    list-style: none;
    font-size: 25px;
    line-height: 25px;
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: -0.32em;
    text-align: center;
  }

  @media only screen and (max-width: 1681px) {
    #nav ul {
      font-size: 20px;
    }
  }

  @media only screen and (max-width: 1023px) {
    #nav ul {
      font-size: 15px;
    }
  }

  @media only screen and (max-width: 767px) {
    #nav ul {
      font-size: 16px;
    }
  }

  #nav ul li {
    display: inline-block;
    vertical-align: top;
    letter-spacing: 0;
    padding: 0 55px;
    text-align: left;
  }

  @media only screen and (max-width: 1681px) {
    #nav ul li {
      padding: 25px;
    }
  }

  @media only screen and (max-width: 767px) {
    #nav ul li {
      display: block;
      text-align: center;
      margin: 0 0 10px;
      padding: 25px;
    }
  }

  #nav ul li > a {
    position: relative;
    padding-bottom: 10px;
  }

  #nav ul li > a:after {
    content: "";
    position: absolute;
    height: 2px;
    background-color: $accent-color;
    width: 50%;
    left: 0;
    bottom: -100%;
    transition: all linear 0.3s;
  }

  @media only screen and (max-width: 767px) {
    #nav ul li > a:after {
      right: 0;
      margin-left: auto;
      margin-right: auto;
      bottom: 0;
    }
  }

  #nav ul li a {
    display: inline-block;
    color: $accent-color;
  }

  #nav ul li a:hover {
    color: #fff;
  }

  #nav ul li a:hover:after {
    background-color: #fff;
  }

  #nav ul li > ul {
    font-size: 18px;
    line-height: 21px;
    text-transform: uppercase;
    font-weight: 400;
    max-width: 190px;
    padding: 80px 0 0;
  }

  @media only screen and (max-width: 1681px) {
    #nav ul li > ul {
      font-size: 16px;
      padding: 80px 0 0;
    }
  }

  @media only screen and (max-width: 1023px) {
    #nav ul li > ul {
      font-size: 13px;
      padding: 80px 0 0;
      max-width: 112px;
    }
  }

  @media only screen and (max-width: 767px) {
    #nav ul li > ul {
      font-size: 14px;
      padding: 40px 0 0;
      width: 100%;
      max-width: 100%;
    }
  }

  #nav ul li > ul li {
    display: block;
    padding: 0;
    margin: 0 0 25px;
    margin-right: -50px;
  }

  @media only screen and (max-width: 1681px) {
    #nav ul li > ul li {
      margin: 0 0 15px;
    }
  }

  @media only screen and (max-width: 1023px) {
    #nav ul li > ul li {
      margin: 0 0 10px;
    }
  }

  @media only screen and (max-width: 767px) {
    #nav ul li > ul li {
      margin: 0 0 7px;
    }
  }

  #nav ul li > ul li > a {
    padding-bottom: 0;
  }

  #nav ul li > ul li > a:after {
    display: none;
  }

  #nav ul li > ul li a {
    color: #fff;
  }

  #nav ul li > ul li a:hover {
    color: $accent-color-light;
  }
</style>
