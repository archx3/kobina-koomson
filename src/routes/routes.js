import Home          from  '../views/home'

export default [
  { path : '/', name : 'home', component : Home },
  { path : '/portfolio',
    name : 'portfolio',
    component: () => import(/* webpackChunkName: "teachers" */ '../views/Portfolio.vue')
  },
  { path : '/portfolio/:id',
    name : 'portfolio-name',
    component: () => import(/* webpackChunkName: "teacher" */ '../views/PortfolioItem.vue')
  },
  { path : '/logofolio',
    name : 'logofolio',
    component: () => import(/* webpackChunkName: "teacher" */ '../views/Logofolio.vue')
  },
  { path : '/blog/',
    name : 'blog-posts',
    component: () => import(/* webpackChunkName: "teacher" */ '../views/BlogPost.vue')
  },
  { path : '/blog/:id',
    name : 'blog-post',
    component: () => import(/* webpackChunkName: "teacher" */ '../views/BlogPosts.vue')
  },
]
