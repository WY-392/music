<!-- 主页右侧黑胶vip板块 -->
<template>
    <div class='app'>
        <img src="@/assets/black-vip.png" alt="" class="black-vip">
        <div class="login-container">
            <div class="login-text">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</div>
            <div class="login-btn">用户登录</div>
        </div>
    </div>
</template>

<script>
export default {

    components: {},
    props: {},
    data() {
        return {
            data: ''
        };
    },
    computed: {},
    watch: {},
    created() { },
    mounted() { },
    methods: {
    }
};
</script>

<style scoped>
.app {
    height: 216px;
    width: 250px;
}

.black-vip {
    width: 250px;
    height: 90px;
}
.login-container{
    width: 250px;
    height: 126px;
 background: url('@/assets/index.png') no-repeat 0 9999px;
    background-position: 0 0;
}
.login-text {
    color: #666;
    font-size: 12px;
    width: 205px;
    height: 44px;
    text-align: center;
    padding: 16px 0;
    margin: 0 auto;
  
}

.login-btn {
    width: 100px;
    height: 31px;
       margin: 0 auto;
    line-height: 31px;
    text-align: center;
    color: #fff;
    background: url('@/assets/index.png') no-repeat 0 9999px;
  background-position: 0 -195px;
    cursor: pointer;
 
}
</style>