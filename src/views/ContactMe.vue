<template>
  <section class="block left-right scroll-animate contact-section">
    <div class="container-fluid">
      <div class="row">
        <!--map col-->
        <div class="col-md-6 fade-blur">
          <object style="border:0; height: 100%; width: 100%;"
                  data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.6794577123587!2d-0.2648326855924582!3d5.614264795929929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf98e2b2892191%3A0x597774872f955171!2sCash+Link%2C+Nii+Okaiman+West!5e0!3m2!1sen!2sgh!4v1561061452166!5m2!1sen!2sgh"></object>
        </div>
        <!--form col-->
        <div class="col-md-6">
          <div class="cell-view page-height" style="height: 682px; min-height: 682px;">
            <div class="empty-space h50-md heading-top-bar"></div>
            <div class="row">
              <div class="col-md-8 offset-md-2 col-sm-10 offset-sm-1">
                <article class="bigger line-article text-left clearfix">
                  <h2 class="heading text-left">
                    <span class="font-weight-light">Get </span>
                    <span class="font-weight-bold">in touch..</span>
                  </h2>
                  <p>
                    If you'd want to hire me or Love what you see.
                  </p>
                </article>

              </div>
            </div>

            <div class="row">
              <div class="col-md-8 offset-md-2 col-sm-10 offset-sm-1">
                <!-- contact-info -->
                <div class="contact-info text-left">
                  <article class="normal-4 clearfix  line-article">
                    <h4 class="heading text-left font-weight-light md-h">
                      <span class="font-weight-bold">Call me</span>, <span class="font-weight-bold">Shoot me an email</span> if it's your kind of thing or
                      <span class="font-weight-bold">pay a visit</span>
                    </h4>
                    <p>
                      <ul>
                        <li class="text-white">
                          <a href="tel:+233 260 721 202" target="_blank">+233 260 721 202</a>
                        </li>
                        <li class="text-white">
                          <a href="mailto:georgeranch31@gmail.com" target="_blank">georgeranch31@gmail.com</a>
                        </li>
                        <li class="text-white">
                          <a href="https://www.google.com.ua/maps/@40.7573849,-73.9721243,19z" target="_blank">Blk 101 Cash link, Accra, Ghana</a>
                        </li>
                      </ul>
                    </p>
                  </article>
                  <div class="empty-space h15-md clearfix"></div>
                  <form class="contact-form">
                    <div class="row col-xs-b30">
                      <div class="col-sm-12">
                        <div class="input-wrapper">
                          <input name="name" id="sender_name" class="input" type="text">
                          <label for="sender_name">Name</label>
                          <span class="bg-hover col-sm-12">
                            <span class="lines">
                              <span ></span>
                              <span ></span>
                              <span ></span>
                              <span ></span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="row col-xs-b30 mt-md-3">
                      <div class="col-sm-12">
                        <div class="input-wrapper">
                          <input title="" id="msg_subject" name="subject" class="input" type="email">
                          <label for="msg_subject">Email</label>
                          <span class="bg-hover col-sm-12">
                            <span class="lines">
                              <span ></span>
                              <span ></span>
                              <span ></span>
                              <span ></span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="row mt-md-3">
                      <div class="col-sm-12">
                        <div class="input-wrapper">
                          <textarea id="message" name="message" class="input"></textarea>
                          <label for="message">Message</label>
                          <span class="bg-hover col-sm-12">
                            <span class="lines">
                              <span ></span>
                              <span ></span>
                              <span ></span>
                              <span ></span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="text-center  mt-md-3 mt-sm-3">
                      <input class="rounded-pill flex-fill" type="submit" value="LEAVE ME A MESSAGE">
                    </div>
                  </form>
                </div>
                <!-- end contact-info -->
              </div>
            </div>
            <div class="empty-space h50-md"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'contact-me'
}
</script>
<style lang="scss" scoped>
  .bg-hover{
    padding: 0;
    margin: 0 14px;
    width: calc(100% - 28px);
    &:hover{
      background: none;
    }
  }

  .contact-form{
    input, textarea{
      &:focus+label{
        font-size: 10px;
        top: -20px;
        margin-bottom: 0.25rem;
        left: 15px;
        opacity: 1;
      }
    }

    label{
      top: 6px;
      position: absolute;
      opacity: .4;
      transition: all .2s ease;
      left: 25px;
      font-weight: bold;
    }
    textarea{
      label{
        top: 10px;
      }
    }
  }
</style>
<style lang="scss">
  @import "../assets/css/colors";
  :root{
    --inputBg: rgba(0, 0, 0, 0.3);
  }
  section {
  }

  article{
    float: none !important;
    clear: both;
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
  ul{
    li{
      &.text-white{
        a{
          color: #fff;
        }
      }
    }
  }
  input, textarea {
    font-size: 14px;
    display: block;
    width: 100%;
    height: 100%;
    padding: 5px 10px;
    background-color: var(--inputBg);
    border: 1px solid transparent;
    border-bottom-color: $accent-color;
    color: var(--inputFg);
    border-radius: 0;
    -webkit-transition: border-color .25s ease,box-shadow .25s ease;
    transition: border-color .25s ease,box-shadow .25s ease;
    position: relative;

    +label+span.bg-hover {
      pointer-events: none;
      .lines span {
        opacity: 1 !important;
        background-color: $accent-color !important;
      }
    }

    &:focus+label+span.bg-hover{
      .lines span:nth-child(1) {
        width: 100%;
      }
      .lines span:nth-child(2) {
        height: 100%;
      }
      .lines span:nth-child(3) {
        width: 100%;
      }
      .lines span:nth-child(4) {
        height: 100%;
      }
    }
    /*&:hover+label span.bg-hover{
      .lines span:nth-child(1) {
        width: 0;
      }
      .lines span:nth-child(2) {
        height: 0;
      }
      .lines span:nth-child(3) {
        width: 0;
      }
      .lines span:nth-child(4) {
        height: 0;
      }
    }*/
  }
</style>
