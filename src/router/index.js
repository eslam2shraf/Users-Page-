import { createRouter, createWebHistory } from 'vue-router'
import UserDetails from'../components/UserDetails.vue'
import AllUsers from '../components/AllUsers.vue'
const routes = [
  {

    path: '/',
    name: 'AllUsers',
    component: AllUsers,
  },
  {

    path: '/:id',
    name: 'UserDetails',
    component: UserDetails,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
