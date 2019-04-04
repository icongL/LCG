<template>

</template>
<script>
     // 导入MintIndicator
    import { Indicator } from 'mint-ui'
    // 导入Toset组件
    import { Toast } from 'mint-ui'
    // 公共方法；
    export default {
        data() {
            return {
                message: '新闻详情加载失败',
            }
        },
        methods: {
          ToastMessage () {
            Toast({
              message: this.message,
              position: 'bottom',
              duration: 1000
            })
          },
          setLoading () {
          this.timer = window.setTimeout( () => {
              Indicator.open({
              text: '加载中...',
              spinnerType: 'fading-circle'
              })
          }, 200)
          },
          cancelLoading () {
            clearTimeout(this.timer)
                Indicator.close()
            },
          }
    }
</script>