<template>
  <section id="hero-area" class="hero-area-bg  main-content">
    <div class="container flex-row flex bot-85">
      <div class="row justify-content-between main-actions">
        <div class="col-md-5 ">
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
          <article class="normal-4 clearfix  line-article">
            <h4 class="heading text-left font-weight-light md-h">
              <span class="font-weight-bold">Call me</span>, <span class="font-weight-bold">Shoot me an email</span> if
              it's your kind of thing or
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
                  <a href="https://www.google.com.ua/maps/@40.7573849,-73.9721243,19z" target="_blank">Blk 101 Cash
                    link, Accra, Ghana</a>
                </li>
              </ul>
            </p>
          </article>
        </div>
        <!--form col-->
        <div class="col-md-5">
          <div class="cell-view page-height">
            <div class="empty-space h50-md heading-top-bar"></div>

            <div class="row">
              <div class="col-md-8 offset-md-2 col-sm-10 offset-sm-1">
                <!-- contact-info -->
                <div class="contact-info text-left">

                  <form class="contact-form">
                    <div class="row col-xs-b30">
                      <div class="col-sm-12">
                        <div class="input-wrapper">
                          <input name="name" id="sender_name" class="input" type="text">
                          <label for="sender_name">Name</label>
                          <span class="bg-hover col-sm-12">
                            <span class="lines">
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
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
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
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
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="text-center  mt-md-3 mt-sm-3">
                      <input class="rounded-pill flex-fill" type="button" value="LEAVE ME A MESSAGE">
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
  name: "contact-me"
};
</script>
