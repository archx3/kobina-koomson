<template>
  <div class="gallery-wrapper">
    <div class="close-btn is-open"
         @click="handleMobNav" data-toggle="collapse" data-target="#navbarCollapse"
         aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <div class="burger-icon">
        <div class="burger">
          <span class="burger-bun-top"></span>
          <span class="burger-bun-bot"></span>
        </div>
      </div>

      <!-- svg ring containter -->
      <div class="burger-ring">
        <svg class="svg-ring">
          <path class="path" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="2" d="M 34 2 C 16.3 2 2 16.3 2 34 s 14.3 32 32 32 s 32 -14.3 32 -32 S 51.7 2 34 2" />
        </svg>
      </div>
      <!-- the masked path that animates the fill to the ring -->
      <svg width="0" height="0">
        <mask id="mask">
          <path xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ff0000" stroke-miterlimit="10" stroke-width="2" d="M 34 2 c 11.6 0 21.8 6.2 27.4 15.5 c 2.9 4.8 5 16.5 -9.4 16.5 h -4" />
        </mask>
      </svg>
      <div class="path-burger">
        <div class="animate-path">
          <div class="path-rotation"></div>
        </div>
      </div>
    </div>
    <div id="portfolio" class="portfolio">
      <div id="background" class="background"></div>
      <div class="arrows">
        <a href="#" class="up">Up</a>
        <a href="#" class="down">Down</a>
        <a href="#" class="prev">Previous</a>
        <a href="#" class="next">Next</a>
      </div>
      <div class="gallery">
        <div class="inside">
          <div class="item" v-for="(imageSet, index) in imageSets" :key="index">
            <div v-for="(image, index) in imageSet" :key="index">
              <img :src="image.link" :alt="image.name"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import jQuery from 'jquery'

export default {
  name: 'gallery-preview',
  props : ['imageSets'],
  data () {
    return {
    }
  },
  mounted () {
    var $ = jQuery;
    window.$ = $;
    (function ($) {
      $.fn.portfolio = function (options) {
        var d = {
          image         : {
            width : 600,
            height: 400,
            margin: 20
          },
          path          : {
            width     : 10,
            height    : 10,
            marginTop : 5,
            marginLeft: 5
          },
          animationSpeed: 400
        } // default settings

        var s = $.extend({}, d, options)

        return this.each(function () {
          var $t     = $(this),
            plugin = {
              init    : function () {
                this.set.position()
                this.paths.draw()
                this.paths.go()
                this.animate.item()
              },
              set     : {
                position: function () {
                  $t.find('.item').each(function (i) {
                    var t = $(this)
                    t.css({ left: (s.image.width + s.image.margin) * i + 'px' })
                    t.find('div').each(function (j) {
                      var t = $(this)
                      t.css({ top: (s.image.height + s.image.margin) * j + 'px' })
                    })
                  })
                }
              },
              paths   : {
                draw   : function () {
                  $t.append($('<div />').addClass('paths'))
                  var path  = $t.find('.paths'),
                    items = $t.find('.item')
                  items.each(function (i) {
                    var t = $(this), div = t.find('div')
                    path.append($('<div />').addClass('path' + i).css({
                      width: s.path.width + 'px',
                      left : (s.path.width + s.path.marginLeft) * i + 'px'
                    })
                    )
                    div.each(function (j) {
                      $('<a />').attr({ href: '#', rel: j }).css({
                        width : s.path.width + 'px',
                        height: s.path.height + 'px',
                        top   : (s.path.height + s.path.marginTop) * j + 'px'
                      }).appendTo(path.find('.path' + i))
                    })
                  })
                  path.find('.path0').find('a').eq(0).addClass('active')
                },
                go     : function () {
                  $t.find('.paths').find('a').click(function () {
                    var t = $(this), all = $t.find('.paths').find('a'), column = t.parent('div').attr('class').split('path')[1],
                      row = t.attr('rel'),
                      inside                                                 = $t.find('.inside'),
                      top                                                    = row * (s.image.height + s.image.margin),
                      left                                                   = column * (s.image.width + s.image.margin)
                    inside.animate({
                      top : -top + 'px',
                      left: -left + 'px'
                    }, s.animationSpeed, function () {
                      plugin.position.get(inside)
                    })
                    return false
                  })
                },
                classes: function (column, row) {
                  var anchors = $t.find('.paths').find('a'), anchor = anchors.filter(function () {
                    var t   = $(this),
                      col = t.parent('div').attr('class').split('path')[1],
                      r   = t.attr('rel')
                    return col === column && r === row
                  })
                  anchors.removeClass('active')
                  anchor.addClass('active')
                }
              },
              animate : {
                item: function () {
                  var down = { top: '-=' + (s.image.height + s.image.margin) + 'px' },
                    up   = { top: '+=' + (s.image.height + s.image.margin) + 'px' },
                    next = { top: 0, left: '-=' + (s.image.width + s.image.margin) + 'px' },
                    prev = { top: 0, left: '+=' + (s.image.width + s.image.margin) + 'px' }
                  plugin.animate.img('.down', down, 40)
                  plugin.animate.img('.up', up, 38)
                  plugin.animate.img('.next', next, 39)
                  plugin.animate.img('.prev', prev, 37)
                },
                img : function (element, object, key) {
                  var inside = $t.find('.inside'), type = /* $.browser.mozilla ? 'keypress' : */ 'keydown'
                  $(element).click(function () {
                    var t = $(this)
                    if (!t.hasClass('active')) {
                      inside.animate(object, s.animationSpeed, function () {
                        plugin.position.get(inside)
                        t.removeClass('active')
                      })
                    }
                    t.addClass('active')
                    return false
                  })
                  $(document).bind(type, function (e) {
                    var code = e.keyCode ? e.keyCode : e.which
                    if (code === key && $(element).is(':visible')) {
                      if (!inside.is(':animated')) {
                        inside.animate(object, s.animationSpeed, function () {
                          plugin.position.get(inside)
                        })
                      }
                    }
                    return false
                  })
                }
              },
              position: {
                get  : function (element) {
                  var top  = element.position().top,
                    left = element.position().left
                  plugin.position.check(top, left)
                },
                check: function (top, left) {
                  // top = ($.browser.msie && parseInt($.browser.version) === 8 && top !== 0) ? top - 1 : top
                  let items                             = $t.find('.item'),
                    // eslint-disable-next-line camelcase
                    sizeLeft                         = items.length - 1,
                    maxLeft                          = -sizeLeft * (s.image.width + s.image.margin),
                    column                            = left * sizeLeft / maxLeft,
                    current                           = items.filter(function () {
                      return parseInt($(this).css('left')) === -left
                    }),
                    sizeTop                          = current.find('div').length - 1,
                    maxTop                           = -sizeTop * (s.image.height + s.image.margin),
                    row                               = top * sizeTop / maxTop,
                    arrows                            = $t.find('.arrows'),
                    up                                = arrows.find('.up'), down = arrows.find('.down'),
                    next = arrows.find('.next'), prev = arrows.find('.prev')
                  if (left === maxLeft) { next.hide() } else { next.show() }
                  if (left < 0) { prev.show() } else { prev.hide() }
                  if (top === maxTop) { down.hide() } else { down.show() }
                  if (top < 0) { up.show() } else { up.hide() }
                  plugin.paths.classes(column, row)
                }
              }
            }
          plugin.init()
        })
      }
    }(jQuery))

    var o = {
      init     : function () {
        this.portfolio.init()
      },
      portfolio: {
        data: {},
        init: function () {
          $('#portfolio').portfolio(o.portfolio.data)
        }
      }
    }

    $(function () { o.init() })
  },
  beforeDestroy: function () {
    jQuery = null
  }
}
</script>
<style lang="scss" scoped>
  /*@import url("reset.css");*/

  .gallery-wrapper{
    height: 100vh;
    width: 100vw;
    background: #000;
    display: grid;
    position: fixed;

    z-index: 999;

    top: 0;
  }

  .portfolio {
    position:fixed;
    top:50%;
    left:50%;
    z-index:9999999;
    width:1000px;
    height:500px;
    margin:-250px 0 0 -500px;
  }

  .background {
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:2;
    background-image:url(/img/test/bg.png);
    -webkit-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .portfolio .gallery,
  .portfolio .gallery .inside {
    position:absolute;
    top:0;
    left:0;
  }

  .portfolio .gallery {
    width:100%;
    height:100%;
    overflow:hidden;
  }

  .portfolio .gallery .inside {
    z-index:1;
  }

  .portfolio .arrows a {
    position:absolute;
    z-index:3;
    width:32px;
    height:32px;
    background-image:url(../assets/img/arrows.png);
    background-repeat:no-repeat;
    outline:none;
    text-indent:-9999px;
  }

  .portfolio .arrows .prev,
  .portfolio .arrows .up {
    display:none;
  }

  .portfolio .arrows .up,
  .portfolio .arrows .down {
    left:50%;
    margin-left:-16px;
  }

  .portfolio .arrows .prev,
  .portfolio .arrows .next {
    top:180px;
  }

  .portfolio .arrows .up {
    background-position:0 -64px;
    top:20px;
  }

  .portfolio .arrows .down {
    background-position:0 -96px;
    bottom:120px;
  }

  .portfolio .arrows .prev {
    background-position:0 -32px;
    left:60px;
  }

  .portfolio .arrows .next {
    background-position:0 0;
    right:60px;
  }

  .portfolio .arrows .up:hover {
    background-position:-32px -64px;
  }

  .portfolio .arrows .down:hover {
    background-position:-32px -96px;
  }

  .portfolio .arrows .next:hover {
    background-position:-32px 0;
  }

  .portfolio .arrows .prev:hover {
    background-position:-32px -32px;
  }

  .portfolio .item {
    position:absolute;
    top:0;
    width:1000px;
    height:400px;
  }

  .portfolio .item div {
    position:absolute;
    left:0;
    width:100%;
    height:100%;
  }

  .portfolio .item div img {
    position:absolute;
    top:0;
    left:50%;
    margin-left:-300px;
  }

  .portfolio .paths {
    position:absolute;
    bottom:60px;
    left:50%;
    margin-left:-30px;
    z-index:4;
  }

  .portfolio .paths div {
    position:absolute;
    top:0;
  }

  .portfolio .paths a {
    background:#333;
    display:block;
    position:absolute;
    left:0;
    outline:none;
  }

  .portfolio .paths a:hover,
  .portfolio .paths .active {
    background:#fff;
  }

  /* anchors */
  a {
    text-decoration:none;
    color:#fff;
  }

  $color: #fff;// icon color
  $blue: #158fef;// background color-->
  $animation: 0.6s;// animation speed
  $scale: 1;// icon scale 68/68 default

  .close-btn {
    transform: scale($scale);
    margin: 40px auto;
    position: absolute;
    left: 10px;
    display: block;
    width: 68px;
    height: 68px;
    -webkit-touch-callout: none;
    user-select: none;
    z-index: 9999999999;
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

  .close-btn.is-open {
    .path {
      animation: dash-in $animation-duration linear normal;
      animation-fill-mode:forwards;
    }
    .animate-path {
      animation: rotate-in $animation-duration linear normal;
      animation-fill-mode:forwards;
    }
  }

  .close-btn.is-closed {
    .path {
      animation: dash-out $animation-duration linear normal;
      animation-fill-mode:forwards;
    }
    .animate-path {
      animation: rotate-out $animation-duration linear normal;
      animation-fill-mode:forwards;
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

  .burger {
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
  //  @include transition(all,($animation-duration/2.5),ease-in-//out);
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
  .close-btn.is-open {
    .burger-bun-top {
      animation: bun-top-out $animation-duration linear normal;
      animation-fill-mode:forwards;
    }
    .burger-bun-bot {
      animation: bun-bot-out $animation-duration linear normal;
      animation-fill-mode:forwards;
    }
  }
  .close-btn.is-closed {
    .burger-bun-top {
      animation: bun-top-in $animation-duration linear normal;
      animation-fill-mode:forwards;
    }
    .burger-bun-bot {
      animation: bun-bot-in $animation-duration linear normal;
      animation-fill-mode:forwards;
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
      top: 50%;
      transform: translateY(-50%) rotate(15deg);
    }
    80% {
      left: 0;
      top: 50%;
      transform: translateY(-50%) rotate(-60deg);
    }
    100% {
      left: 0;
      top: 50%;
      transform: translateY(-50%) rotate(-45deg);
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

  @keyframes bun-bot-out {
    0% {
      left: 0;
      transform: rotate(0deg);
    }
    20% {
      left: 0;
      top: 50%;
      transform: translateY(-50%) rotate(-15deg);
    }
    80% {
      left: -5px;
      top: 50%;
      transform: translateY(-50%) rotate(60deg);
    }
    100% {
      left: -5px;
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
    }
  }

  @keyframes bun-bot-in {
    0% {
      left: -5px;
      transform: rotate(45deg);
    }
    20% {
      left: -5px;
      top: 0;
      transform: rotate(60deg);
    }
    80% {
      left: 0;
      top: 0;
      transform: rotate(-15deg);
    }
    100% {
      left: 0;
      transform: rotate(0deg);
    }
  }

  // burger filling
  .close-btn:hover {
    .burger-filling {
      animation: burger-fill-out $animation-duration linear normal;
      animation-fill-mode:forwards;
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
