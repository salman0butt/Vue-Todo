import Vue from 'vue'
import Router from 'vue-router'
// import Login from '../components/Auth/Login'
// import Signup from '../components/Auth/Signup'
import Todo from '../components/Todo'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Login',
    //   component: Login
    // },
    // {
    //   path: '/',
    //   name: 'signup',
    //   component: Signup
    // },
    {
      path: '/',
      name: 'todo',
      component: Todo
    }
  ]
})
