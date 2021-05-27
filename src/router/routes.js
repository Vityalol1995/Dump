
const routes = [
  {
    path: '/',
    component: () => import('../pages/Home.vue')
  },
  {
    path: '/MapDump',
    component: () => import('pages/MapDump')
  },
  {
    path: '/OurHeroes',
    component: () => import('pages/OurHeroes')
  },
  {
    path: '/Hero/:id',
    component: () => import('../pages/Hero'),
    props: true
  },
  {
    path: '/AllNews',
    component: () => import('../pages/AllNews'),
  },
  {
    path: '/New/:id',
    component: () => import('../pages/New'),
    props: true
  },
  {
    path: '/About',
    component: () => import('../pages/About'),
  },
  {
    path: '/Subbotniks',
    component: () => import('../pages/Subbotniks'),
  },
  {
    path: '/Regulations',
    component: () => import('../pages/Regulations'),
  },
  {
    path: '/Contacts',
    component: () => import('../pages/Contacts'),
  },
  {
    path: '/Dumps',
    component: () => import('../pages/Dumps'),
  },
  {
    path: '/Dump/:id',
    component: () => import('../pages/Dump'),
    props: true
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
