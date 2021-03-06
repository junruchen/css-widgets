import Vue from 'vue';
import VueRouter from 'vue-router';

//路由
/*---组件---*/
const component = {template: '<router-view></router-view>'};
const button = resolve => require(['./views/widgets/button.vue'], resolve);
const checkbox = resolve => require(['./views/widgets/checkbox.vue'], resolve);
const dropdown = resolve => require(['./views/widgets/dropdown.vue'], resolve);
const radio = resolve => require(['./views/widgets/radio.vue'], resolve);
const input = resolve => require(['./views/widgets/input.vue'], resolve);
const tips = resolve => require(['./views/widgets/tips.vue'], resolve);
const popover = resolve =>require(['./views/widgets/popover.vue'], resolve);
const table = resolve =>require(['./views/widgets/table.vue'], resolve);
const pagination = resolve =>require(['./views/widgets/pagination.vue'], resolve);
const tabs = resolve =>require(['./views/widgets/tabs.vue'], resolve);
const progress = resolve =>require(['./views/widgets/progress.vue'], resolve);


Vue.use(VueRouter);

var router = new VueRouter({
    routes: [
        {path: '/', name: 'index', component: button},
        {
            path: '/conponents', component: component,
            children: [
                {path: '/', component: button},
                {path: 'button', component: button},
                {path: 'radio', component: radio},
                {path: 'checkbox', component: checkbox},
                {path: 'input', component: input},
                {path: 'dropdown', component: dropdown},
                {path: 'tips', component: tips},
                {path: 'popover', component: popover},
                {path: 'table', component: table},
                {path: 'pagination', component: pagination},
                {path: 'tabs', component: tabs},
                {path: 'progress', component: progress}
            ]
        },
    ]
});

export default router;

