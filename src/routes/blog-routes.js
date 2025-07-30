export default [
  {  
    path: '/blog/brain-drain-in-a-new-dress',
    component: () => import(/* webpackChunkName: "brain-drain-in-a-new-dress" */ '../views/BlogPost.vue'),
    props: {
  "slug": "brain-drain-in-a-new-dress.md"
}
  },
  {  
    path: '/blog/building-a-scalable-translation-system',
    component: () => import(/* webpackChunkName: "building-a-scalable-translation-system" */ '../views/BlogPost.vue'),
    props: {
  "slug": "building-a-scalable-translation-system.md"
}
  },
  {  
    path: '/blog/google-doc-resume-download',
    component: () => import(/* webpackChunkName: "google-doc-resume-download" */ '../views/BlogPost.vue'),
    props: {
  "slug": "google-doc-resume-download.md"
}
  }
]
