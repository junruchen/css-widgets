import Vue from 'vue';
import VueRouter from 'vue-router';

//路由
const index = resolve => require(['./views/index/'], resolve);

Vue.use(VueRouter);

var router = new VueRouter({
    routes: [
        {path: '/', name: 'index', component: index},
    ]
});

router.beforeEach((to, from, next) => {
    if (to.query.night && to.query.night == 1)
        document.body.setAttribute('class', 'night-mode');
    next();
})

export default router;

