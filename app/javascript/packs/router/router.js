import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/index.vue'
import About from '../components/about.vue'
import Contact from '../components/contact.vue'
import Task from '../components/tasks.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Index },
        { path: '/about', component: About },
        { path: '/contact', component: Contact },
        { path: '/projects/:id', component: Task },
    ],
})

