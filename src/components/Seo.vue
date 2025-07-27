<!-- components/Seo.vue -->
<template>
  <div />
</template>

<script>
import { ADDRESS_DATA } from "@/config/address";
export default {
  name: 'seo',
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, default: '' },
    url: { type: String, required: true },
    type: { type: String, default: 'article' },
    publishedTime: { type: String, default: '' },
    author: { type: String, default: 'Kobina Koomson' },
    twitterCard: { type: String, default: 'summary_large_image' },
    twitterHandle: { type: String, default: ADDRESS_DATA.social.twitter },
    siteName: { type: String, default: ADDRESS_DATA.website }
  },
  metaInfo () {
    return {
      title: this.title,
      meta: [
        { name: 'description', content: this.description },

        // Open Graph
        { property: 'og:title', content: this.title },
        { property: 'og:description', content: this.description },
        { property: 'og:image', content: this.image },
        { property: 'og:url', content: this.url },
        { property: 'og:type', content: this.type },
        { property: 'og:site_name', content: this.siteName },
        this.publishedTime
          ? { property: 'article:published_time', content: this.publishedTime }
          : {},

        // Twitter Card
        { name: 'twitter:card', content: this.twitterCard },
        { name: 'twitter:title', content: this.title },
        { name: 'twitter:description', content: this.description },
        { name: 'twitter:image', content: this.image },
        { name: 'twitter:site', content: this.twitterHandle }
      ].filter(Boolean),
      link: [
        { rel: 'canonical', href: this.url },
        { rel: 'icon', href: '/favicon.ico' }
      ]
    };
  }
};
</script>
