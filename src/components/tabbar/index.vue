<template>
  <div class="home-page">
    <mt-swipe @change="handleChange">
      <mt-swipe-item v-for="(item, index) in swipeImg " :key="index">
          <a :href="item.url">
            <img :src="item.img">
          </a>
      </mt-swipe-item>
    </mt-swipe>
    <div class="menu">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../images/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div></a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div></a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div></a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div></a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div></a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div></a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
      data() {
          return {
              swipeImg: []
          }
      },
      methods: {
          // 获取轮播图的数据
          getSwipeImg () {
            this.$http.get('api/getlunbo',null).then(response => {   // 注意这里的地址不能以 '/' 开头
              if (response.body.status === 0) {
                this.swipeImg = response.body.message
              } else {
                Toast('轮播图加载失败.....')
              }
              
            })
          },
          handleChange(index) {
             
          },
          
      },
      created () {
          // 在created时调用获取swipe图片资源
          this.getSwipeImg()
      }
  }

</script>
<style scoped>
  .home-page {
    background: white;
  }
  .mint-swipe {
    height: 200px;
  }
  .mint-swipe-item a {
    display: block;
    height: 100%;
  }
  .mint-swipe-item img {
    width: 100%;
    height: 100%;
  }
  /* menu部分 */
  .menu  .mui-grid-9 .mui-table-view-cell {
    border: none;
  }
  .menu .mui-grid-9 .mui-media-body {
    font-size: 12px !important;
  }
  .menu .mui-grid-9 .mui-table-view-cell,.menu .mui-grid-9 .mui-table-view-cell a {
    padding-top: 0px;
    padding-bottom: 0px;
  }  
  .menu .mui-grid-9 .mui-table-view-cell img {
    width: 60px;
    height: 100%;
  }
</style>