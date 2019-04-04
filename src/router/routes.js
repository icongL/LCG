// 导入VueRouter
import VueRouter from 'vue-router'
// 导入导航部分路由组件
import indexComponent from '../components/tabbar/index.vue'
import memberComponent from '../components/tabbar/member.vue'
import cartComponent from '../components/tabbar/cart.vue'
import searchComponent from '../components/tabbar/search.vue'
// menu菜单组件
import newsList from '../components/menu/newsList.vue'
//详情页：
import newsDetails from '../components/details/newsDetail.vue'
// 导入mintUI
import 'mint-ui/lib/style.css'
// 导入MUI的扩展CSS文件以及字体图标
import '../../lib/mui/css/icons-extra.css'
import '../../lib/mui/fonts/mui-icons-extra.ttf'


// 创建路由
var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: indexComponent },
        { path: '/member', component: memberComponent },
        { path: '/cart', component:cartComponent },
        { path: '/search', component: searchComponent },
        // menu部分
        { path: '/home/newsList', component: newsList },
        // 详情页部分
        { path: '/home/newsList/:id', component: newsDetails },
    ],
    linkActiveClass: 'mui-active'
})
export default router