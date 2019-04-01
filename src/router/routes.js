// 导入VueRouter
import VueRouter from 'vue-router'
// 导入导航部分路由组件
import indexComponent from '../components/tabbar/index.vue'
import memberComponent from '../components/tabbar/member.vue'
import cartComponent from '../components/tabbar/cart.vue'
import searchComponent from '../components/tabbar/search.vue'



// 创建路由
var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home'},
        { path: '/home', component: indexComponent },
        { path: '/member', component: memberComponent },
        { path: '/cart', component:cartComponent },
        { path: '/search', component:searchComponent }
    ],
    linkActiveClass: 'mui-active'
})
export default router