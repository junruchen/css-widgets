import Vue from 'vue';
import router from './router';

Vue.config.silent = false;

var app = new Vue({
    router,
}).$mount('#app');
