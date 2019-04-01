// 导入Vue
import Vue from 'vue'
// 导入VueRouter
import VueRouter from 'vue-router'
// 导入路由模块
import router from './router/routes.js'
// 导入Vue-resource
import vueSource from 'vue-resource'


// 导入基本Vue组件
import baseComponent from '../src/App.vue'
// 导入mintUI
import 'mint-ui/lib/style.css'
// 导入MUI的扩展CSS文件以及字体图标
import '../lib/mui/css/icons-extra.css'
import '../lib/mui/fonts/mui-icons-extra.ttf'


// 按需导入组件
// 引入头部组件
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)
// 导入swipe组件
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 使用Vue-source
Vue.use(vueSource)
// 配置Vue-source
Vue.http.options.root = 'http://www.liulongbin.top:3005'
Vue.http.options.emulateJSON = true


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
    router: router
})
