import Vue from 'vue';
import VueRouter from 'vue-router';

//路由
const button = resolve => require(['./views/button/'], resolve);
const radio = resolve => require(['./views/radio/'], resolve);
const checkbox = resolve => require(['./views/checkbox/'], resolve);

Vue.use(VueRouter);

var router = new VueRouter({
    routes: [
        {path: '/', name: 'index', component: button},
        {path: '/button', name: 'button', component: button},
        {path: '/radio', name: 'radio', component: radio},
        {path: '/checkbox', name: 'checkbox', component: checkbox},
    ]
});

router.beforeEach((to, from, next) => {
    if (to.query.night && to.query.night == 1)
        document.body.setAttribute('class', 'night-mode');
    next();
})

export default router;

