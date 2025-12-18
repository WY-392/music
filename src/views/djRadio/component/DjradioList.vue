<template>
 <div class='musiclist'>
    <div class="music-item" v-for="(item,index) in recommendmusic" :key="index">
        <slot name="num" :index="index+1"></slot>
        <img :src="item.img" alt="">
        <div class="title">
            <div class="big-title">{{ item.title }}</div>
            <div class="songname">{{ item.name }}</div>
        </div>
        <slot name="djradio-icon"></slot>
        <slot name="progess"></slot>
    </div>
 </div>
</template>

<script>
export default {
 components: {},
 props: {
    recommendmusic:{
        type:Array,
        default:()=>[]
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
 .musiclist>.music-item:nth-child(odd){
    background-color: #f4f4f4;
 }
.music-item{
    height: 40px;
    padding: 10px 0px;
    display: flex;
    font-size: 12px;
    img{
        width: 40px;
        height: 40px;
    }
    .title{
        width: 220px;
        margin-left: 5px;
    }
    .big-title{
        color: #333;
         display: -webkit-box;
   -webkit-box-orient: vertical;
   -webkit-line-clamp: 1;
   overflow: hidden;
   text-overflow: ellipsis;
    }
    .songname{
        color: #999;
        display: -webkit-box;
   -webkit-box-orient: vertical;
   -webkit-line-clamp: 1;
   overflow: hidden;
   text-overflow: ellipsis;
    }
}
</style>