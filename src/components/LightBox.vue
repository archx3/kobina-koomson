<template>
  <div class="nivo-lightbox-overlay nivo-lightbox-theme-default nivo-lightbox-effect-fadeScale nivo-lightbox-open">
    <div class="nivo-lightbox-overlay" @click.capture="hideLightBox"></div>
    <div class="nivo-lightbox-wrap">
      <div class="nivo-lightbox-content">
        <div class="nivo-lightbox-image" style="line-height: 373px; height: 100%;">
          <img :src="`/img/gallery/${selectedImage.url}`" class="nivo-lightbox-image-display" alt="">
        </div>
      </div>
      <div class="nivo-lightbox-title-wrap"></div>
    </div>
    <div class="nivo-lightbox-nav nivo-lightbox-prev" @click.prevent="previous" style="font-size: 35px">
      <i class="lni-arrow-left"></i></div>
    <div class="nivo-lightbox-nav nivo-lightbox-next" @click.prevent="next" style="font-size: 35px">
      <i class="lni-arrow-right"></i></div>
    <a @click="hideLightBox" class=" nivo-lightbox-close" title="Close" style="{width: 40px; height: 40px}">&times;</a>
  </div>
</template>
<script>
export default {
  name : 'light-box',
  props: {
    galleryData : {},
    selectedImage: {}
  },
  data () {
    return {
      maxIndex : this.galleryData ? this.galleryData.images.length - 1 : 0
    }
  },
  computed: {
    /* maxIndex         : function () {
      return this.galleryData.images.length - 1
    }, */
    currentImageIndex: function () {
      return this.galleryData.selected !== null ? this.galleryData.images.indexOf(this.selectedImage) : -1
    }
  },
  created () {
    window.addEventListener('keyup', this.keyEventsHandler)
  },
  destroyed () {
    window.removeEventListener('keyup', this.keyEventsHandler);
  },
  methods : {
    hideLightBox () {
      this.setSelectedImage(null)
    },
    keyEventsHandler: function (e) {
      if (e.key === 'ArrowRight' || e.key === 'Enter') {
        this.next()
      } else if (e.key === 'ArrowLeft') {
        this.previous()
      } else if (e.key === 'Escape') {
        this.hideLightBox()
      }
    },
    next () {
      this.setSelectedImage(this.currentImageIndex < this.maxIndex ? this.galleryData.images[this.currentImageIndex + 1] : this.galleryData.images[0])
    },
    previous () {
      this.setSelectedImage(this.galleryData.images[this.currentImageIndex > 0 ? this.currentImageIndex - 1 : this.maxIndex])
    },
    setSelectedImage (image) {
      this.$emit('setSelected', image)
    }
  }
}
</script>
<style scoped lang="scss">
  @import "../assets/css/colors";

  /*!
 * Nivo Lightbox v1.3.1
 * http://dev7studios.com/nivo-lightbox
 *
 * Copyright 2013, Dev7studios
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

  .nivo-lightbox-image img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    vertical-align: middle;
  }

  .nivo-lightbox-content iframe {
    width: 100%;
    height: 100%;
  }

  .nivo-lightbox-error p {
    display: table-cell;
    vertical-align: middle;
  }

  .nivo-lightbox-close {
    color: $accent-color !important;
    padding: 10px 0;
    font-size: 25px;
    text-align: center;
    width: 35px;
    height: 35px;
    line-height: .4;
    background: transparent;
    border: 2px solid $accent-color;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;

    &:hover {
      color: #fff !important;
      background: $accent-color;
    }
  }

  .nivo-lightbox-overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 100%;
    overflow: hidden;
    visibility: hidden;
    opacity: 0;
    background: rgba(0, 0, 0, 0.8);
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .nivo-lightbox-overlay.nivo-lightbox-open {
    visibility: visible;
    opacity: 1;
  }

  .nivo-lightbox-wrap {
    position: absolute;
    top: 10%;
    bottom: 10%;
    left: 10%;
    right: 10%;
  }

  .nivo-lightbox-content {
    width: 100%;
    height: 100%;
  }

  .nivo-lightbox-title-wrap {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    text-align: center;
  }

  .nivo-lightbox-nav {
    /*display: none;*/
    z-index: 102;
    cursor: pointer;
    color: $accent-color;

    &:hover {
      color: $accent-color-light;
    }
  }

  .nivo-lightbox-prev {
    position: absolute;
    top: 50%;
    left: 35px;
  }

  .nivo-lightbox-next {
    position: absolute;
    top: 50%;
    right: 35px;
  }

  .nivo-lightbox-close {
    position: absolute;
    top: 2%;
    right: 2%;
    cursor: pointer;
  }

  .nivo-lightbox-image {
    text-align: center;
  }

  .nivo-lightbox-image img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    vertical-align: middle;
  }

  .nivo-lightbox-content iframe {
    width: 100%;
    height: 100%;
  }

  .nivo-lightbox-error p {
    display: table-cell;
    vertical-align: middle;
  }

  /* Effects
   **********************************************/

  /* fadeScale */
  .nivo-lightbox-effect-fadeScale .nivo-lightbox-wrap {
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    -webkit-transform: scale(0.7);
    -moz-transform: scale(0.7);
    -ms-transform: scale(0.7);
    transform: scale(0.7);
  }

  .nivo-lightbox-effect-fadeScale.nivo-lightbox-open .nivo-lightbox-wrap {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  /* slideLeft / slideRight / slideUp / slideDown */
  .nivo-lightbox-effect-slideLeft .nivo-lightbox-wrap,
  .nivo-lightbox-effect-slideRight .nivo-lightbox-wrap,
  .nivo-lightbox-effect-slideUp .nivo-lightbox-wrap,
  .nivo-lightbox-effect-slideDown .nivo-lightbox-wrap {
    -webkit-transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);
    -moz-transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);
    -ms-transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);
    -o-transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);
    transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);
  }

  .nivo-lightbox-effect-slideLeft .nivo-lightbox-wrap {
    -webkit-transform: translateX(-10%);
    -moz-transform: translateX(-10%);
    -ms-transform: translateX(-10%);
    transform: translateX(-10%);
  }

  .nivo-lightbox-effect-slideRight .nivo-lightbox-wrap {
    -webkit-transform: translateX(10%);
    -moz-transform: translateX(10%);
    -ms-transform: translateX(10%);
    transform: translateX(10%);
  }

  .nivo-lightbox-effect-slideLeft.nivo-lightbox-open .nivo-lightbox-wrap,
  .nivo-lightbox-effect-slideRight.nivo-lightbox-open .nivo-lightbox-wrap {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }

  .nivo-lightbox-effect-slideDown .nivo-lightbox-wrap {
    -webkit-transform: translateY(-10%);
    -moz-transform: translateY(-10%);
    -ms-transform: translateY(-10%);
    transform: translateY(-10%);
  }

  .nivo-lightbox-effect-slideUp .nivo-lightbox-wrap {
    -webkit-transform: translateY(10%);
    -moz-transform: translateY(10%);
    -ms-transform: translateY(10%);
    transform: translateY(10%);
  }

  .nivo-lightbox-effect-slideUp.nivo-lightbox-open .nivo-lightbox-wrap,
  .nivo-lightbox-effect-slideDown.nivo-lightbox-open .nivo-lightbox-wrap {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  /* fall */
  .nivo-lightbox-effect-fall .nivo-lightbox-wrap {
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -ms-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
    -webkit-transform: translateZ(300px);
    -moz-transform: translateZ(300px);
    -ms-transform: translateZ(300px);
    transform: translateZ(300px);
  }

  .nivo-lightbox-effect-fall.nivo-lightbox-open .nivo-lightbox-wrap {
    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }
</style>
