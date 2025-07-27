export default [
  {  
    path: '/blog/google-doc-resume-download',
    component: () => import(/* webpackChunkName: "google-doc-resume-download" */ '../views/BlogPost.vue'),
    props: {"slug":"google-doc-resume-download.md"}
  }
]
