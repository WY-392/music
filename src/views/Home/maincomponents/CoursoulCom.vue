<template>
 <div class="app">
   <div class="coursoul-box" :style="{backgroundImage:`url(${coursoulList[this.currentIndex].CoursoulBlackground})`}">
    <div class="prv-icon" @click="prvimg"></div>
    <div class="coursoul-content">
       <img :src="coursoulList[this.currentIndex].Coursoulimg" alt="">
    </div>
    <div class="loaddown"></div>
    <div class="next-icon" @click="nextimg"></div>

    <div class="coursoul-control" >
      <div 
          v-for="( item,index) in coursoulList"  
          :key="index"  
          :class="['control-btn',index==currentIndex?'btnactive':'']"   
          @click="currentIndex=index"  
        ></div>

 </div>
 </div>
   </div>
</template>

<script>
export default {

 components: {},
 props: {
  coursoulList:{
    type:Array,
    default:()=>['无'],
  }
 },
 data() {
 return {
currentIndex:0,

 };
 },
 computed: {

 },
 watch: {},
 created() {},
 mounted() {},
 methods: {
  prvimg(){
 this.currentIndex = (this.currentIndex - 1 + this.coursoulList.length) % this.coursoulList.length;
  },
  nextimg(){

this.currentIndex==this.coursoulList.length-1?this.currentIndex=0:this.currentIndex+=1
  },
 }
};
</script>

<style scoped>
    .coursoul-box{
      position: relative;
        width: 100%;
        z-index: 1;
        height: 285px;
         display: flex;
          justify-content:center;
          align-items: center;
          
    }
    .prv-icon{
      width: 37px;
      height: 63px;
     margin-right: 20px;
      background: url('@/assets/banner.png')  0 9999px no-repeat;
         background-position: 0 -360px;
    }
    .next-icon{
        width: 37px;
      height: 63px;
      margin-left: 20px;
        background: url('@/assets/banner.png')  0 9999px no-repeat;
      background-position: 0 -508px;
    }
     .coursoul-box img{
        width: 730px;
        height: 285px;
        
    }
  
    .loaddown{
      width: 254px;
      height: 285px;
      background: url('@/assets/download.png') no-repeat 0 0;;
    }
    .coursoul-control{
      position: absolute;
      top: 260px;
      
      z-index: 9999;
     display: flex;
     width: 730px;
     height: 20px;
     justify-content: center;
    }
    .control-btn{
 width: 20px;
      height: 20px;
      margin-left: 10px;
      background: url('@/assets/banner.png') no-repeat;
      background-position: 3px -343px;
         
    text-align: center;
    line-height: 20px
    }
    .btnactive{
        width: 20px;
      height: 20px;
      background: url('@/assets/banner.png') no-repeat;
      background-position: -18px -343px; 
    }
    .control-btn:hover{
       width: 20px;
      height: 20px;
      background: url('@/assets/banner.png') no-repeat;
      background-position: -18px -343px; 
    }
</style>