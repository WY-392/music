<!-- 歌手的分类头部 -->
<template>
 <div class='app'>
    <div class="container">
        <div class="autor-class">{{ title }}</div>
        <div class="look-all" v-show="flag==1">查看全部></div>
    </div>
 </div>
</template>

<script>
export default {
 props: {
    title:{
        type:String,
        default:'无',
    },
    flag:{
        type:Number,
        default:0,
    }
 },
 data() {
 return {
 data: ''
 };
 },
 computed: {},
 watch: {},
 created() {},
 mounted() {},
 methods: {
 }
};
</script>

<style scoped>
.container{
    width: 210px;
    height: 24px;
    margin:0 20px ;
    display: flex;
    justify-content: space-between;
   border-bottom: 1px solid #ccc;
}
.autor-class{
    line-height: 24px;
    color: #333;
    font-size: 12px;
    width: 48px;
    height: 17px;
}
.look-all{
color: #666;
font-size: 12px;
line-height: 24px;
}
</style>