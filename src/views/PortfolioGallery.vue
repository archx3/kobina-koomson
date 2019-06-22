<template>
  <section class="block full-height-block scroll-animate">
    <div class="cell-view page-height" style="height: 682px; min-height: 682px;">
      <div class="empty-space h30-md h0-sm fl heading-top-bar ctr"></div>
      <div class="width-100vw centre">
        <div class="container-fluid ">
          <div class="row d-block">
            <div class="col-lg-4 offset-lg-4 col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-xs-12 offset-xs-0 text-center">
              <article class="bigger text-center">
                <h2 class="heading">
                  <span class="font-weight-light">Here are Some </span>
                  <span class="font-weight-bold">works..</span>
                </h2>
<!--                <div class="empty-space h35-md h20-xs"></div>-->
                <p>
                  My customers have high expectations so  I try my best to satisfy them with zero tolerance for mediocrity.
                </p>
                <div class="empty-space h45-md h25-xs"></div>
              </article>
            </div>
          </div>
          <div class="portfolio">
            <div class="row d-inline-block">
              <!--<a class="drop-menu" href="#">All <i id="portfolioCaret" class="fa fa-angle-down" aria-hidden="true"></i></a>
              <ul class="drop-list big">
                <li>
                  <a class="nav-a cur-ptr" :class="{active : activeCategory === ''}" @click="setCategory('')">All</a>
                </li>
                <li v-for="(category, index) in categories" :key="index"
                     @click="setCategory(category)">
                  <a class="nav-a cur-ptr" :class="{active : activeCategory === category}">{{category}}</a>
                </li>
              </ul>-->
<!--              <div class="empty-space h25-xs h45-md"></div>-->
              <div class="col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-xs-8 offset-xs-2">
                <carousel class="swiper-wrapper" :perPage="5" :perPageCustom="[[480, 2], [768, 5]]" :paginationEnabled="false">
                  <slide class="text-center swiper-slide" v-for="(portfolio, index) in getPortfolioList" :key="index">
                    <a class="portfolio-wrap lightbox" @click="selectedImageIndex = index">
                      <img :src="`/img/portfolio/${portfolio.image}`" alt="">
                      <span class="bg-hover">
                            <span class="lines">
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                            </span>
                            <span class="plus">
                              <span></span>
                              <span></span>
                            </span>
                          </span>
                    </a>
                    <p class="font-weight-bold description">{{portfolio.name}}</p>
                    <p class="category"><span>— </span>
                      {{typeof portfolio.category === 'string' ? portfolio.category : portfolio.category.join(', ')}}
                    </p>
                  </slide>
                </carousel>
                <div class="empty-space h50-md fl"></div>
                <input class="rounded-pill flex-fill" type="submit" value="See Details & More">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <smart-light-box :images="portfolioData" :selected-image-index="selectedImageIndex"/>
  </section>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel'
import SmartLightBox       from './SmartLightBox'

export default {
  components: { SmartLightBox, Slide, Carousel },
  name: 'portfolio-gallery',
  data () {
    return {
      portfolioData : [
        {
          image : 'aickono-p.jpg',
          name: 'UI/UX for Aickono',
          category : 'User Experience'
        },
        {
          image : 'codbit-p.jpg',
          name: 'Codbit RMaaS',
          category : ['Development', 'User Experience']
        },
        {
          image : 'sharehouse-p.jpg',
          name: 'Sharehouse',
          category : ['Development', 'User Experience']
        },
        {
          image : 'portfolio1.jpg',
          name: 'Branding for Mango',
          category : ['Print']
        },
        {
          image : 'front-desk-p.jpg',
          name: 'Front Dəsk',
          category : 'User Experience, Development'
        },
        {
          image : 'chekkit-p.jpg',
          name: 'Chekkit App',
          category : 'Development'
        },
        {
          image : 'moov-p.png',
          name: 'Moov',
          category : 'Branding'
        },
        {
          image : 'bosch-p.jpg',
          name: 'Bosch Ghana (SSR)',
          category : ['Branding', 'Print']
        },
        {
          image : 'acacia-p.jpg',
          name: 'Acacia Branding',
          category : ['Branding', 'Print']
        },
      ],
      categories : ['Development', 'User Experience', 'Branding', 'Print'],
      activeCategory : '',
      selectedImageIndex : null,
      portfolioSortKey : ''
    }
  },
  computed : {
    getPortfolioList : function () {
      if (this.activeCategory === '')
      {
        return this.portfolioData
      }
      else
      {
        return this.portfolioData.filter((item) => {
          if (Array.isArray(item.category)) {
            return item.category.indexOf(this.activeCategory) > -1
          }
          else
          {
            return item.category.toLocaleLowerCase() === this.activeCategory.toLocaleLowerCase()
          }
        })
      }
    }
  },
  methods : {
    setCategory : function (category) {
      this.activeCategory = category;
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../assets/css/colors";

  .container-fluid, .row, .container{
    &::before{
      display: table;
      content: ' ';
    }
  }

  section {
  }

  .empty-space {
    position: relative;
    display: block;
  }

  .bg-hover:hover .plus span {
    transform: rotate(-90deg);
    opacity: 100;
  }
  .VueCarousel-slide{
    padding: 0 15px;
  }
  .category{
    font-size: 10px;
  }
  .description{
    margin-top: 10px;
  }
</style>
