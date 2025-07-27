import Home          from  '@/views/home'

export default [
  { path : '/', name : 'home', component : Home },
  { path : '/portfolio',
    name : 'portfolio',
    component: () => import(/* webpackChunkName: "teachers" */ '../views/Portfolio.vue')
  },
  { path : '/contact',
    name : 'contact',
    component: () => import(/* webpackChunkName: "teachers" */ '../views/contact.vue')
  },
  { path : '/about',
    name : 'about',
    component: () => import(/* webpackChunkName: "resume" */ '../views/resume.vue')
  },
  { path : '/portfolio/:id',
    name : 'portfolio-name',
    component: () => import(/* webpackChunkName: "teacher" */ '../views/PortfolioItem.vue')
  },
  { path : '/logofolio',
    name : 'logofolio',
    component: () => import(/* webpackChunkName: "teacher" */ '../views/Logofolio.vue')
  },
  { path : '/blogs/',
    name : 'all-blog-posts',
    component: () => import(/* webpackChunkName: "teacher" */ '../views/BlogPosts.vue')
  },
  { path : '/blog/',
    name : 'blog-posts',
    component: () => import(/* webpackChunkName: "teacher" */ '../views/BlogPosts.vue')
  },
  { path: '*', component: () => import(/* webpackChunkName: "notfound" */ '../views/NotFound.vue') }
]
