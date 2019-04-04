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


// 按需导入组件
// 引入头部组件
import { Header } from 'mint-ui'
// 导入swipe组件
import { Swipe, SwipeItem } from 'mint-ui'
 // 导入MintIndicator
 import { Indicator } from 'mint-ui'
 // 导入Toset组件
 import { Toast } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

// 使用Vue-source
Vue.use(vueSource)
// 配置Vue-source
Vue.http.options.root = 'http://www.liulongbin.top:3005'
// Vue.http.options.emulateJSON = true

// 定义全局过滤器
Vue.filter('strTime', function (utcTime) { 
    // 因为异步数据没有加载时，其过滤器和数据也会渲染，此时应当判断其是否有数据，有则进行过滤，无则直接返回空
    if (!utcTime) return utcTime
    // 转为正常的时间格式 年-月-日 时:分:秒
    var T_pos = utcTime.indexOf('T')
    var Z_pos = utcTime.indexOf('Z')
    // 截取当前的年月日，以及时分秒
    var year_month_day = utcTime.substr(0,T_pos)
    var hour_minute_second = utcTime.substr(T_pos+1, Z_pos-T_pos-1)
    var new_datetime = year_month_day+" "+hour_minute_second
 
    // 处理成为时间戳
    timestamp = new Date(Date.parse(new_datetime))
    timestamp = timestamp.getTime()
 
    // 增加8个小时，北京时间比utc时间多八个时区，注意这点；
    var timestamp = timestamp + 8 * 60 * 60 * 1000
    // 时间戳转为时间

    var beijing_datetime = new Date(parseInt(timestamp)).toLocaleString().replace(/\/|\//g, "-").replace(/日/g, " ")
    // 返回北京事件；
    return beijing_datetime 
})

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
