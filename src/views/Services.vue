<template>
  <div class="services-square-wrapper row clearfix">
    <div class="services-square-entry">
      <div class="content">
        <div class="layer-1 full-size valign-middle">
          <div class="valign-text-wrapper">
            <img class="col-xs-b15" src="img/services-icons/design.png" alt=""><br>
            <div class="h5">DESIGN</div>
          </div>
        </div>
        <div class="layer-2 full-size">
          <div class="valign-text-wrapper">
            <div class="h5 light">DESIGN</div>
            <div class="empty-space col-xs-b10"></div>
            <div class="simple-article bigger light transparent">
              Logo design<br>
              Corporate identity<br>
              Styleguide<br>
              Corporative typography<br>
              Poligraphy<br>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="services-square-entry">
      <div class="content">
        <div class="layer-1 full-size valign-middle">
          <div class="valign-text-wrapper">
            <img class="col-xs-b15" src="img/services-icons/devt.png" alt=""><br>
            <div class="h5">DEVELOPMENT</div>
          </div>
        </div>
        <div class="layer-2 full-size valign-middle">
          <div class="valign-text-wrapper">
            <div class="h5 light">DEVELOPMENT</div>
            <div class="empty-space col-xs-b10"></div>
            <div class="simple-article bigger light transparent">
              Logo design<br>
              Corporate identity<br>
              Styleguide<br>
              Corporative typography<br>
              Poligraphy<br>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="services-square-entry">
      <div class="content">
        <div class="layer-1 full-size valign-middle">
          <div class="valign-text-wrapper">
            <img class="col-xs-b15" src="img/services-icons/ui-ux.png" alt=""><br>
            <div class="h5">UX/UI</div>
          </div>
        </div>
        <div class="layer-2 full-size valign-middle">
          <div class="valign-text-wrapper">
            <div class="h5 light">UI/UX</div>
            <div class="empty-space col-xs-b10"></div>
            <div class="simple-article bigger light transparent">
              Logo design<br>
              Corporate identity<br>
              Styleguide<br>
              Corporative typography<br>
              Poligraphy<br>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="services-square-entry">
      <div class="content">
        <div class="layer-1 full-size valign-middle">
          <div class="valign-text-wrapper">
            <img class="col-xs-b15" src="img/services-icons/branding.png" alt=""><br>
            <div class="h5">BRANDING</div>
          </div>
        </div>
        <div class="layer-2 full-size valign-middle">
          <div class="valign-text-wrapper">
            <div class="h5 light">BRANDING</div>
            <div class="empty-space col-xs-b10"></div>
            <div class="simple-article bigger light transparent">
              Logo design<br>
              Corporate identity<br>
              Styleguide<br>
              Corporative typography<br>
              Poligraphy<br>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="services-square-entry">
      <div class="content">
        <div class="layer-1 full-size valign-middle">
          <div class="valign-text-wrapper">
            <img class="col-xs-b15" src="img/services-icons/motion.png" alt=""><br>
            <div class="h5">MOTION</div>
          </div>
        </div>
        <div class="layer-2 full-size valign-middle">
          <div class="valign-text-wrapper">
            <div class="h5 light">MOTION</div>
            <div class="empty-space col-xs-b10"></div>
            <div class="simple-article bigger light transparent">
              Logo design<br>
              Corporate identity<br>
              Styleguide<br>
              Corporative typography<br>
              Poligraphy<br>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="services-square-entry">
      <div class="content">
        <div class="layer-1 full-size valign-middle">
          <div class="valign-text-wrapper">
            <img class="col-xs-b15" src="img/services-icons/photography.png" alt=""><br>
            <div class="h5">PHOTOGRAPHY</div>
          </div>
        </div>
        <div class="layer-2 full-size valign-middle">
          <div class="valign-text-wrapper">
            <div class="h5 light">PHOTOGRAPHY</div>
            <div class="empty-space col-xs-b10"></div>
            <div class="simple-article bigger light transparent">
              Logo design<br>
              Corporate identity<br>
              Styleguide<br>
              Corporative typography<br>
              Poligraphy<br>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'services'
}
</script>
<style>
  /*helper classes*/
  .nopadding, .nopadding>*[class*="col"]{padding-left: 0; padding-right: 0; margin-left: 0; margin-right: 0;}
  .line-through{display: inline-block; position: relative;}
  .line-through:after{position: absolute; width: 100%; height: 1px; left: 0; top: 50%; background: currentColor; content: "";}
  .clearfix:after{content: ""; display: block; clear: both;}
  .valign-middle {
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;

    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;

    align-items: center;
  }
  .page-height{position: relative;}
  .full-size{position: absolute; left: 0; top: 0; width: 100%; height: 100%;}
  .text-left{text-align: left;}
  .text-center{text-align: center;}
  .text-right{text-align: right;}
  .hidden{display: none!important;}
  .visible{display: block!important;}
  .inline-indent{width: 10px; height: 1px; background: currentColor; display: inline-block; vertical-align: middle; margin-right: 10px; position: relative; top: -1px;}
  .fixed-background{background-size: cover; background-position: center top; background-attachment: fixed;}
  body.mobile .fixed-background{background-attachment: scroll;}
  .label{white-space: normal;}



  /*-------------------------------------------------------------------------------------------------------------------------------*/
  /* 27 - ABOUT 2 */
  /*-------------------------------------------------------------------------------------------------------------------------------*/
  .full-size-banner-entry{background-size: cover; background-position: center center;}
  .full-size-banner-entry:before{content: ""; position: absolute; left: 0; top: 0; width: 100%; height: 100%; background: rgba(0,0,0,.45);}
  .full-size-banner-entry.style-1:before{display: none;}
  .full-size-banner-entry.style-2:before{background: rgba(0,0,0,.2);}
  .valign-text-wrapper{padding: 0 15px; width: 100%;}
  .banner-max-width{max-width: 570px; margin: 0 auto;}
  .team-entry{max-width: 370px; margin: 0 auto;}
  .team-thumbnail-wrapper{position: relative; overflow: hidden;}
  .team-thumbnail-wrapper .follow{position: absolute; left: 0; top: 0; width: 100%;}
  .team-thumbnail{display: block; position: relative;}
  .team-thumbnail img{display: block; width: 100%; height: auto;}
  .team-thumbnail-wrapper:hover .team-thumbnail{transform: translateY(50px); -webkit-transform: translateY(50px);}
  .thumbnail-line-entry{float: left; width: 10%;}
  .client-entry-wrapper{margin-bottom: 60px;}
  .client-entry{position: relative; overflow: hidden; max-width: 171px; margin: 0 auto; display: block;}
  .client-entry img{display: block; width: 100%; height: auto;}
  .client-entry:hover .client-logo{transform: scale(.8); -webkit-transform: scale(.8);}
  .client-entry .client-thumbnail{position: absolute; left: 0; top: 0; width: 100%; transform: translateY(100%); -webkit-transform: translateY(100%);}
  .client-entry:hover .client-thumbnail{transform: translateY(0%); -webkit-transform: translateY(0%);}
  .client-entry .client-thumbnail:after{content: ""; position: absolute; left: 0; top: 0; width: 100%; height: 100%; background: rgba(0,0,0,.3);}
  /*Phones (<768px)*/
  @media (max-width: 767px) {
    .thumbnail-line-entry{width: 20%;}
    .client-entry-wrapper{margin-bottom: 15px;}
  }

</style>
<style lang="scss">
  @import "../assets/css/colors";

  /*-------------------------------------------------------------------------------------------------------------------------------*/
  /* 29 - SERVICES 1 */
  /*-------------------------------------------------------------------------------------------------------------------------------*/
  .left-right-entry.style-1 .right {
    width: calc(50% - 15px);
    top: 0;
    bottom: 0;
  }

  .frame-article-entry {
    position: absolute;
    left: 125px;
    right: 125px;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
  }

  .frame-article-entry .frame-wrapper {
    position: relative;
    max-width: 570px;
    margin: 0 auto;
  }

  .frame-article-entry .frame {
    border: 5px #fff solid;
  }

  .frame-article-entry .frame-wrapper .cell-view {
    height: 340px;
    position: relative;
  }

  /*Phones (<768px)*/
  @media (max-width: 767px) {
    .frame-article-entry {
      left: 15px;
      right: 15px;
    }
    .frame-article-entry .frame {
      display: none;
    }
  }
  /*-------------------------------------------------------------------------------------------------------------------------------*/
  /* 30 - SERVICES 2 */
  /*-------------------------------------------------------------------------------------------------------------------------------*/
  .awards-slider .content {
    padding: 0 15px;
    max-width: 370px;
    margin: 0 auto;
  }

  .awards-slider .entry {
    display: block;
    padding-bottom: 110%;
    position: relative;
    position: relative;
    overflow: hidden;
  }

  .awards-slider .entry .background {
    background-size: cover;
    background-position: center center;
  }

  .awards-slider .entry .background:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(34, 34, 34, .3);
  }

  .awards-slider .entry:hover .background {
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
  }

  .awards-slider .award-date {
    width: 130px;
    height: 130px;
    /*background: url(../img/slider-awards-logo-1.png);*/
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -65px 0 0 -65px;
    font-size: 12px;
    line-height: 12px;
    text-transform: uppercase;
    text-align: center;
    color: #fff;
    padding-top: 20px;
  }

  .awards-slider .entry:hover .award-date {
    top: 60%;
  }

  .awards-slider .award-date span {
    display: block;
    font-size: 55px;
    line-height: 1em;
  }

  .awards-slider .award-logo {
    position: absolute;
    bottom: 30px;
    text-align: center;
    left: 0;
    width: 100%;
  }

  .awards-slider .award-logo img {
    display: inline-block;
    vertical-align: bottom;
    max-width: 90%;
    height: auto;
  }

  .services-banner-icon-wrapper {
    text-align: center;
  }

  .services-banner-icon-entry {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    border: 2px currentColor solid;
    position: relative;
    margin: 0 auto;
    display: block;
  }

  .services-banner-icon-entry.light {
    color: rgba(255, 255, 255, .5);
  }

  .services-banner-icon-wrapper:before, .services-banner-icon-wrapper:after {
    height: 1px;
    background: #989898;
    position: absolute;
    top: 50%;
    content: "";
    left: 0;
    right: calc(50% + 85px);
  }

  .services-banner-icon-wrapper:after {
    right: 0;
    left: calc(50% + 85px);
  }

  .services-banner-icon-entry:hover {
    background: currentColor;
  }

  .services-banner-icon-entry.light:hover {
    background: #222;
    border-color: #222;
  }

  .services-banner-icon-entry img {
    display: block;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
  }

  .services-banner-icon-text {
    position: absolute;
    width: 190px;
    left: 50%;
    margin-left: -95px;
    top: 150px;
  }

  .services-banner-icon-text .visible-1, .services-banner-icon-text .visible-2 {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    padding-top: 25px;
  }

  .services-banner-icon-text .visible-2 {
    opacity: 0;
    transform: translateY(30px);
    -webkit-transform: translateY(30px);
  }

  .services-banner-icon-entry:hover .visible-2 {
    opacity: 1;
    transform: translateY(0px);
    -webkit-transform: translateY(0px);
  }

  .services-banner-icon-entry:hover .visible-1 {
    opacity: 0;
  }

  /*-------------------------------------------------------------------------------------------------------------------------------*/
  /* 31 - SERVICES 3 */
  /*-------------------------------------------------------------------------------------------------------------------------------*/
  .background-block {
    background-size: cover;
    background-position: center top;
    position: relative;
  }

  .background-block-shadow:before {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .3);
    content: "";
  }

  .services-square-wrapper {
    /*. services-square-entry {*/
    /*float: left;*/
    /*width: 33.3333%;*/
    /*}*/
  }

  .services-square-entry {
    border-right: 1px #e3e3e3 solid;
    border-bottom: 1px #e3e3e3 solid;
    border-top: 1px #e3e3e3 solid;
    margin-top: -1px;
    text-align: center;
    overflow: hidden;
  }

  .services-square-entry .content {
    padding-bottom: 100%;
    position: relative;
  }

  .services-square-entry img {
    display: inline-block;
    vertical-align: bottom;
    max-width: 100%;
    height: auto;
  }

  .services-square-entry .layer-2 {
    background: #222;
    transform: scale(.5) translateY(50%);
    -webkit-transform: scale(.5) translateY(50%);
    opacity: 0;
  }

  .services-square-entry:hover .layer-2 {
    transform: scale(1) translateY(0%);
    -webkit-transform: scale(1) translateY(0%);
    opacity: 1;
  }

  /*Desktops (>=992px)*/
  @media (max-width: 1199px) {
    .services-square-wrapper .services-square-entry {
      width: 25%;
    }
  }

  /* Tablets (>=768px)*/
  @media (max-width: 991px) {
    .services-square-wrapper .services-square-entry {
      width: 33.3333333%;
    }
  }

  /*Phones (<768px)*/
  @media (max-width: 767px) {
    .services-square-wrapper .services-square-entry {
      width: auto;
      max-width: 400px;
      margin-left: auto;
      margin-right: auto;
      float: none;
      border: 1px #e3e3e3 solid;
    }
  }

  /*-------------------------------------------------------------------------------------------------------------------------------*/
  /* 32 - SERVICES 4 */
  /*-------------------------------------------------------------------------------------------------------------------------------*/
  .article-frame {
    border: 1px #989898 solid;
    padding: 45px 50px;
  }

  .swiper-text .swiper-pagination {
    position: relative;
    padding-top: 15px;
    bottom: 0 !important;
  }

  .tab-entry {
    display: none;
    opacity: 0;
  }

  .services-preview-entry {
    position: relative;
    background-size: cover;
    background-position: center center;
    overflow: hidden;
  }

  .services-preview-entry:before {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    content: "";
    background: rgba(34, 34, 34, .4);
  }

  .services-preview-entry:hover:before {
    background: rgba(34, 34, 34, .6);
  }

  .services-preview-entry .content {
    padding-bottom: 100%;
  }

  .services-preview-entry .align-1 {
    position: absolute;
    left: 30px;
    bottom: 20px;
    right: 30px;
  }

  .services-preview-entry .align-2 {
    position: absolute;
    top: 0;
    padding-top: 30px;
    right: 30px;
    width: 50%;
  }

  .services-preview-entry:hover .align-2 {
    transform: translateY(-150%);
    -webkit-transform: translateY(-150%);
  }

  .services-preview-entry .animation {
    max-height: 0;
    overflow: hidden;
  }

  .services-preview-entry:hover .animation {
    max-height: 200px;
  }

  /* Tablets (>=768px)*/
  @media (max-width: 991px) {
    .services-preview-entry .align-2 {
      right: auto;
      left: 30px;
    }
  }
</style>
