<template>
  <nav class="navbar navbar-expand-lg bg-inverse fixed-top scrolling-navbar" :class="{ 'top-nav-collapse' : topNavCollapse}">
    <div class="container">
      <div id="hamburger" class="hamburglar navbar-toggler is-open" :class="{'is-closed' : !mobNavShow, 'is-open' : mobNavShow}"
           @click="handleMobNav" data-toggle="collapse" data-target="#navbarCollapse"
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
          <svg class="svg-ring">
            <path class="path" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="2"
                  d="M 34 2 C 16.3 2 2 16.3 2 34 s 14.3 32 32 32 s 32 -14.3 32 -32 S 51.7 2 34 2"/>
          </svg>
        </div>
        <!-- the masked path that animates the fill to the ring -->
        <svg width="0" height="0">
          <mask id="mask">
            <path xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ff0000" stroke-miterlimit="10" stroke-width="2"
                  d="M 34 2 c 11.6 0 21.8 6.2 27.4 15.5 c 2.9 4.8 5 16.5 -9.4 16.5 h -4"/>
          </mask>
        </svg>
        <div class="path-burger">
          <div class="animate-path">
            <div class="path-rotation"></div>
          </div>
        </div>
      </div>
      <transition name="collapsing">
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto w-100 justify-content-end">
            <!--List Items-->
            <li v-for="listItem in homeNavList "
                :key="listItem.name" @click="setActiveNavItem(listItem.name)"
                class="nav-item" :class="{ active : activeNavItem ===  listItem.name }">
              <a class="nav-link" v-scroll-to="listItem.link">{{listItem.name}}</a>
            </li>
            <li class="search-inp-li rltv">
              <label for="search-inp">
                <input id="search-inp" class="rc25 pdl25 pdr15 w100 search-inp bg-nr bgp-x-9 bgp-y-51p" type="text" title=""
                       placeholder="SEARCH">
              </label>
            </li>
            <li v-for="listItem in extNavList "
                :key="listItem.name" @click="setActiveNavItem(listItem.name)"
                class="nav-item" :class="{ active : activeNavItem ===  listItem.name }">
              <router-link tag="a" class="nav-link" :to="listItem.link">{{listItem.name}}</router-link>
            </li>
          </ul>
        </div>
      </transition>
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
        { name: 'Home', link: '#home' },
        { name: 'About', link: '#about' },
        { name: 'Gallery', link: '#gallery' },
        { name: 'Customers', link: '#contacts' },
        { name: 'Contact', link: '#contact' }
      ],
      extNavList    : [
        { name: 'Logofolio', link: '#' },
        { name: 'Github', link: 'https://github.com/archX3' },
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

  .top-nav-collapse {
    z-index: 98;
    top: 0 !important;
    min-height: 50px;
    box-shadow: 0 3px 6px 3px rgba(0, 0, 0, 0.06);
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: fadeInDown;
    animation-name: fadeInDown;
    /*background: #fff !important;*/

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
      .nav-link {
        color: #212121 !important;

        &:hover {
          color: $accent-color !important;
        }
      }

      li.active a.nav-link {
        color: $accent-color !important;
      }
    }
  }

  .indigo {
    background: transparent;
  }

  .navbar-expand-lg {
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
        padding: 0 15px;
        margin-top: 10px;
        margin-bottom: 10px;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        line-height: 40px;
        text-transform: uppercase;
        background: transparent;
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
        background: $accent-color;
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

  .navbar-expand-lg .navbar-nav li a:hover,
  .navbar-expand-lg .navbar-nav li .active > a,
  .navbar-expand-lg .navbar-nav li a:focus {
    background-image: $accent-gradient;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    outline: none;
    cursor: pointer;
  }

  .navbar-expand-lg .navbar-nav .nav-link:focus,
  .navbar-expand-lg .navbar-nav .nav-link:hover {
    background-image: $accent-gradient;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text !important;
  }

  .navbar {
    padding: 0;
  }

  .navbar li.active a.nav-link {
    background-image: $accent-gradient;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text !important;
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
        background-image: url("/img/logos/js-camp-19-cy.png") !important;
      }
    }
    .navbar-expand-lg .navbar-brand, .navbar-expand-lg .navbar-toggler {
      margin: 0 15px;
    }
    .navbar-nav {
      padding: 5px 15px;
    }
    .navbar-expand-lg .navbar-nav .nav-link {
      margin-top: 0;
      margin-bottom: 0;
      padding: 0 40px;
      color: #212121;
    }
  }

  @media (max-width: 991px) {
    .bg-inverse {
      /*background: #fff !important;*/
      box-shadow: 0 3px 6px 3px rgba(0, 0, 0, 0.06);
    }
    .navbar-expand-lg .navbar-brand, .navbar-expand-lg .navbar-toggler {
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
    .navbar-expand-lg .navbar-nav .nav-link {
      margin-top: 0;
      margin-bottom: 0;
      padding: 0 40px;
      color: #212121;
    }
  }

  .search-inp-li {
    display: flex;

    label {
      margin: auto;
      position: relative;

      &::before {
        content: "";
        height: 2px;
        width: 10px;
        background: #fff;
        display: block;
        transform: rotate(45deg);
        position: absolute;
        top: 80%;
        left: 75%;

        &:focus::before {
          top: 75%;
          left: 95%;
        }
      }
    }
  }

  input.search-inp {

    background-color: transparent;
    background-size: 11px;
    background-position-y: 51%;
    background-position-x: 5px;
    background-repeat: no-repeat;
    transition: all .3s ease;
    cursor: pointer;
    width: 15px;
    height: 15px;

    padding: 5px;
    border: 2px solid #fff;
    -webkit-border-radius: 25px;
    -moz-border-radius: 50%;
    border-radius: 25px;

    & + label {
      &::before {
        top: 20%;
        left: 0;
        display: none;
      }
    }

    &:focus {
      background-image: url("../assets/img/musica-searcher.svg");

      height: 28px;
      width: 200px;
      padding: 5px 20px;
      border-color: $accent-color;
      cursor: auto;
      /*-webkit-border-radius: 0;*/
      /*-moz-border-radius: 0;*/
      /*border-radius: 0;*/

      & + label::before, & + label::after {
        top: 20%;
        left: 10%;
        display: none !important;
      }
    }
  }

  $color: #fff; // icon color
  $blue: #158fef; // background color-->
  $animation: 0.6s; // animation speed
  $scale: 1; // icon scale 68/68 default

  .hamburglar {
    transform: scale($scale);
    margin: 40px auto;
    position: relative;
    display: block;
    width: 68px;
    height: 68px;
    -webkit-touch-callout: none;
    user-select: none;
  }

  // transition mask
  .path-burger {
    position: absolute;
    top: 0;
    left: 0;
    height: 68px;
    width: 68px;
    // two masks because... browser support.
    mask: url(#mask);
    -webkit-mask-box-image: url(https://raygun.io/upload/mask.svg);
  }

  .animate-path {
    position: absolute;
    top: 0;
    left: 0;
    width: 68px;
    height: 68px;
  }

  // what this does is create a small square that I then rotate behind an svg mask, giving the apparence of the line animating
  .path-rotation {
    height: 34px;
    width: 34px;
    margin: 34px 34px 0 0;
    transform: rotate(0deg);
    transform-origin: 100% 0;

    &:before {
      content: '';
      display: block;
      width: 30px;
      height: 34px;
      margin: 0 4px 0 0;
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

  .burger-icon {
    position: absolute;
    padding: 20px 16px;
    height: 68px;
    width: 68px;
  }

  .burger-container {
    position: relative;
    height: 28px;
    width: 36px;
  }

  .burger-bun-top,
  .burger-bun-bot,
  .burger-filling {
    position: absolute;
    display: block;
    height: 2px;
    width: 36px;
    border-radius: 2px;
    background: $color;
  }

  .burger-bun-top {
    top: 0;
    transform-origin: 34px 2px;
  }

  .burger-bun-bot {
    bottom: 0;
    transform-origin: 34px 2px;
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
    width: 68px;
    height: 68px;
  }

  .svg-ring {
    width: 68px;
    height: 68px;
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
      animation-fill-mode: forwards;
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
