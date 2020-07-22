// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import "vuetify/dist/vuetify.min.css";
import App from './App';
//importing components
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Todo from './components/Todo';
import Tasks from './components/Tasks';
import NotesModel from './components/NotesModel';

import "./plugins/vuetify.js"
// import VueRouter from 'router';
import VueRouter from "vue-router"

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    component: Todo,
    name: 'todo',
    children: [
      {
        path: 'list/:id',
        components: {tasks: Tasks},
        name: 'tasks',
        children: [
          {
            path: 'task/:taskId',
            components: { NotesModel },
            name: 'notes'
          }

        ]
      },
    ]
  },
  {
    path: '/login',
    component: Login,
    name: 'login'
  },
  {
    path: '/signup',
    component: Signup,
    name: 'signup'
  }
];

const router = new VueRouter({
  'mode': 'history',
  routes,
  'base': '/'
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify: new Vuetify(),
  components: {App},
  template: '<App/>'
})
