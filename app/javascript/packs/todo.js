import Vue from 'vue'
import Router from './router/router'
import Header from './components/header.vue'

var app = new Vue({
    router: Router,
    el: "#app",
    data: {
        todo: "",
        tasks: ['風呂そうじ', '洗濯', '炊事']
    },
    components: {
        'navbar': Header,
    }
});