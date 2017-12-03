import Vue from 'vue'
import Header from './components/header.vue'

new Vue({
    el: "#app",
    data: {
        todo: "",
        tasks: ['風呂そうじ', '洗濯', '炊事']
    },
    components: {
        'navbar': Header,
    }
});