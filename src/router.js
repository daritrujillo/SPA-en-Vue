import { createRouter, createWebHashHistory } from 'vue-router'
import IfElse from './views/IfElse.vue'
import Show from './views/Show.vue'
import For from './views/For.vue'
import BindKey from './views/BindKey.vue'

const routes = [
  { path: '/', redirect: '/if-else' },
  { path: '/if-else', component: IfElse },
  { path: '/v-show', component: Show },
  { path: '/v-for', component: For },
  { path: '/v-bind-key', component: BindKey }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
