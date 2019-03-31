// 导入Vue
import Vue from 'vue'
// 导入VueRouter
import VueRouter from 'vue-router'
// 导入路由模块
import routes from './router/routes.js'
// 导入基本Vue组件
import baseComponent from '../src/App.vue'
// 导入mintUI
import 'mint-ui/lib/style.css'
// 导入MUI
import mui from '../lib/mui/js/mui.min.js'
import '../lib/mui/css/mui.min.css'


// 按需导入组件
// 引入头部组件
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)


// 使用Vue路由
Vue.use(VueRouter)

var vm = new Vue({
    el: '#app',
    data: {
        
    },
    methods: {

    },
    components: {
        
    },
    render: cs => cs(baseComponent),
    routes: routes
})
