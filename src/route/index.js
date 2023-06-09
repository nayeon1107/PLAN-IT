import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import TodoLogin from '../components/TodoLogin'
import TodoContents from '../components/TodoContents'
import TodoMission from '../components/TodoMission' 

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', name: 'login',component: TodoLogin },
        { path: '/todo', component: TodoContents },
        { path : '/mission',component :TodoMission},
        { path: '*', component: TodoLogin}
    ]
})

export default router
