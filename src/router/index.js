import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/Tripreports',
    name:'Trip Reports',
    component: function () {
      return import(/*webpackChunkName: "tripreports" */ '../views/TripReports.vue')
    }
  },
  {
    path: '/GearReviews',
    name:'Gear Reviews',
    component: function() {
      return import('../views/GearReviews.vue')
    }
  
  },
  {
    path: '/TripPlanner',
    name:'Trip Planner',
    component: function() {
      return import('../views/TripPlanner.vue')
    }
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
