<template>
  <footer>
    <div class="container wide border-top">
      <div class="row justify-content-between text-left">
       <div class="col-md-10">
          <div class="row copyright">
            <div class="col-md-4">
              <h6 class="mb-0 font-weight-600">Phone</h6>
              <a :href="`tel:${address.phone}`"
                 :aria-label="`Call us at ${address.name}`"
                 class=""><p>{{ address.phone }}</p>
              </a>
            </div>
            <div class="col-md-4">
              <h6 class="mb-">Email</h6>
              <a :href="`mailto:${address.email}`"
                 :aria-label="`Email us at ${address.name}`"
                 class=""><p>{{ address.email }}</p>
              </a>
            </div>
            <div class="col-md-4">
              <h6 class="">Follow Me</h6>
              <div class="d-flex ju">
                <a class="mr-3" :href="address.social.linkedin" target="_blank">
                  <img class=" valign-middle" type="image/svg+xml" height="18" width="18" alt="linkedin" :src="`/img/icons/linkedin.svg`">
                </a>
                <a class="my-auto" :href="address.social.twitter" target="_blank">
                  <img class="" type="image/svg+xml" height="18" width="18" alt="twitter" :src="`/img/icons/twitter.svg`">
                </a>
              </div>

            </div>
          </div>
        </div>
        <div class="col-md-2 d-flex flex-column justify-content-center">
          <p class="">Copyright © {{ year }}</p>
          <p class="">Kobina George Koomson.</p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import { ADDRESS_DATA } from "@/config/address";

export default {
  name: "footer-section",
  data () {
    return {
      year: new Date().getFullYear(),
      ...mapState(["events"]),
      address: ADDRESS_DATA,
    };
  },
  computed: {
    ...mapGetters(["community"])
  }
};
</script>
<!--<style lang="scss">
@import "../assets/styles/scss/includes/variables";

.copyright {
  padding: 30px 10px;
}

/*footer{
  min-height: 100px ;
}*/
a.back-to-top {
  position: relative;
  background-color: rgba(24, 27, 39, 0.5);
  color: $primary-color;

  &:hover i {
    color: #000;
    background-color: $primary-color;
  }
}
</style>-->
