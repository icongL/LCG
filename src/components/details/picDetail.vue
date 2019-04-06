<template>
    <div class="pic-detail">
        <h3>{{ picDetail.title }}</h3>
        <p class="pic-info">
            <span>发表时间：{{ picDetail.add_time | strTime }}</span>
            <span>点击次数：{{ picDetail.click }}</span>
        </p>
        <ul class="pic-list">
            <li><img src="" alt=""></li>
        </ul>
        <p>{{ picDetail.content}}</p>
        <comment :articleId="picId"></comment>
    </div>
</template>
<script>
    import global from '../commonComponent/global.vue'
    import comment from '../subComponent/comment.vue'
    export default {
        data() {
            return {
               picId: this.$route.params['picId'],
               common: global.methods,
               picDetail: {}
            }
        },
        methods: {
            getPicDetail () {
                this.common.requestGet.call(this, response => {
                    this.picDetail = response.body.message[0]
                }, null, { url: 'api/getimageInfo/', param: this.picId, message: '图片详情加载失败' })
            },
        },
        created() {
            this.common.setLoading()
            this.getPicDetail()
        },
        components: {
            comment: comment
        }
    }
</script>
<style >
    .pic-detail {
        padding: 0px 5px;
    }
    .pic-detail h3 {
        line-height: 30px;
    }
    .pic-info {
        display: flex;
        justify-content: space-between;
        padding: 7px 0px;
        border-bottom: 1px solid gray;
    }
</style>