import Vue from 'vue'
import Router from 'vue-router'
import todolist from '@/components/todolist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/todolist',
      name: 'todolist',
      component: todolist
    }
  ]
})
