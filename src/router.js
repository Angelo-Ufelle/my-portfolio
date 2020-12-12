import Vue from 'vue'
import VueRouter from 'vue-router'
import { VueTypedJs } from 'vue-typed-js'

import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Work from './components/Work'

Vue.use(VueRouter)
Vue.use(VueTypedJs)

const router = new VueRouter ({
    mode:'history',
    routes: [
        {path: '/', component: Home},
        {path: '/contact', component: Contact},
        {path: '/about', component: About},
        {path: '/work', component: Work}
    ]
})
export default router