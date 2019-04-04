<template>
  <div class="app-container">
    <!-- 顶部-->
    <mt-header fixed title="固定在顶部"></mt-header>
    <!-- 组件动画 -->
    <transition>
     <!-- 路由组件-->
      <router-view></router-view>
    </transition>
    <!-- 底部导航-->
    <nav class="mui-bar mui-bar-tab">
      <router-link  tag="div" class="mui-tab-item" to="/home">
				 <span class="mui-icon mui-icon-home"></span>
				 <span class="mui-tab-label">首页</span>
      </router-link>
			<router-link tag="div" class="mui-tab-item" to="/member" >
				  <span class="mui-icon mui-icon-person"></span>
				  <span class="mui-tab-label">消息</span>
      </router-link>
      <router-link tag="div" class="mui-tab-item" to="/cart">
				 <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
            <span class="mui-badge">0</span>
        </span>
				<span class="mui-tab-label">购物车</span>
      </router-link>
			<router-link tag="div" class="mui-tab-item"  to="/search">
				  <span class="mui-icon mui-icon-search"></span>
				  <span class="mui-tab-label">搜索</span>
      </router-link>
		</nav>
  </div>
</template>
<script>
  // 导入MUI
  import mui from '../lib/mui/js/mui.min.js'
  import '../lib/mui/css/mui.min.css'
  // 注册默认事件（此时有一个格外的BUG，即如果写入了touch-action，router-link的事件不被触发,经过初步判断为tap事件机制的问题）
  mui('body').on('touchstart','.mui-tab-item',function(e){
      e.stopPropagation()
	})
  //组件数据
  export default {
      data() {
        return {
        }
      },
      methods: {
      },
      mounted() {
        
      },
      created() {
      },
  }
</script>
<style>
  * {
    touch-action: none;
  }
  .app-container {
    /* 留出上下距离 */
    padding-top: 40px;
    padding-bottom: 50px;
    /* 防止以为切换造成的滚动条 */
    overflow-x: hidden;
    /* 基础字号 */
    font-size: 12px;
  }
  /* 组件动画 */
  .v-enter {
    opacity: 0;
    transform: translateX(100%);
  }
  .v-leave-to {
    opacity: 0;
    transform: translateX(-100%)
  }
  .v-enter-active,
  .v-leave-active {
    opacity: 1;
    transition: all 0.5s ease-in;
  }
  ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
  }
</style>