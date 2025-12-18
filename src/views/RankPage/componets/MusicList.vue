<!-- 榜单中歌单列表 -->
<template>
    <div class='ranklist'>
        <div class="ranklist-item-container">
            <!-- 前三个 -->
            <div class="ranklist-item" v-for="(item) in musicList.slice(0, 3)" :key="item.title">
                <div class="music-data">
                <div class="music-num">{{ item.id }}</div>
                <div :class="item.icon==2?'bank-new-icon':item.icon==3?'bank-down-icon':item.icon==1?'data-up':''"></div>
                <div :class="item.icon==2?'noshow':'num'">{{ item.data }}</div>
            </div>
            <div class="music-name-container">
                <img :src="item.img" alt="">
                <div class="play-btn"></div>
                <div :class="['music-name',item.fontcolor==0?'noactive-font-color':'active-font-color']"> {{ item.title }}</div>
            </div>
            <div :class="['music-time',item.fontcolor==0?'noactive-font-color':'active-font-color']"> {{ item.time }}</div>
            <div :class="['songer',item.fontcolor==0?'noactive-font-color':'active-font-color']">{{ item.songer }}</div>
            </div>

              <!-- 后面的 -->
            <div class="music-list-container" v-for="(item,index) in musicList.slice(3)" :key="index">
               <div class="music-list">
                 <div class="music-num-container">
                       <div class="music-number">{{item.id}}</div>
                       <div :class="['new-icon',item.icon==1?'up-icon':item.icon==2?'new-icon':item.icon==3?'music-down-icon':'']" ></div>
                       <div :class="item.icon==2?'nomusicdata':'showmusicdata'">{{ item.data }}</div>
                 </div> 
                 <div class="song-title">
                   <div class="play-button"></div>
                   <div :class="['song-text',item.fontcolor==0?'noactive-font-color':'active-font-color']">{{ item.title }}</div>
                 </div>
                 <div :class="['song-time',item.fontcolor==0?'noactive-font-color':'active-font-color']">{{ item.time }}</div>
                 <div :class="['musician',item.fontcolor==0?'noactive-font-color':'active-font-color']">{{ item.songer }}</div>
               </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {

    components: {},
    props: {
        musicList:{
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
    created() { },
    mounted() { },
    methods: {
    }
};
</script>

<style scoped>
.ranklist-item {
    display: flex;

}
.ranklist-item-container>div:nth-child(odd){
    background-color:#f7f7f7;
}
.music-data {
    width: 56px;
    height: 58px;
    padding: 6px 10px;
    display: flex;
}

.music-num {
    color: #999;
    font-size: 12px;
    line-height: 58px;
    width: 25px;
}
/* 控制前三个 */
/* /上箭头图标 */
.data-up{
      width: 11px; 
     height: 17px;
     margin-top: 20px;
     margin-left: 10px;
     background:url('/src/assets/icon.png') ;
     background-position: -74px -299px;
    }
    /* new的图标 */
    .bank-new-icon{
         width: 16px; 
     height: 17px;
     margin-top: 20px;
     margin-left: 10px;
 background:url('/src/assets/icon.png') ;
    background-position: -67px -283px;
    }
    /* 下箭头图标 */
    .bank-down-icon{
         width: 11px; 
     height: 17px;
     margin-top: 20px;
     margin-left: 10px;
 background:url('/src/assets/icon.png') ;
        background-position: -74px -318px;
    }
    .num{
    color: #bbb;
    font-size: 12px;
    line-height: 58px;
    }
    .music-name-container{
        display: flex;
        width: 307px;
        height: 50px;
        padding: 10px;
    }
    .music-name img{
        width: 50px;
        height: 50px;
        margin-right: 14px;
    }
    .music-name{
font-size: 12px;
line-height: 52px;
    }
    .play-btn{
        width: 17px;
        height: 17px;
        margin: 17px 8px 0px 10px ;
        background: url('@/assets/table.png');
        background-position: 0 -103px;
    }
    .music-time{
        width: 71px;
        height: 58px;
        padding: 6px 10px;
       
        line-height: 58px;
            
            font-size: 12px;
    }
    .songer{
        width: 154px;
        height: 58px;
         padding: 6px 10px;
         
            font-size: 12px;
              line-height: 58px;
    }
.music-name,.music-time,.songer{
    color: #bbb;
}
.music-list{
    display: flex;
}
.music-num-container{
    width: 57px;
    height: 18px;
    padding: 6px 10px;
    display: flex;
}
.music-number{
   line-height: 18px;
    color: #bbb;
    font-size: 12px;
    width: 25px;
    height: 18px;
}
/* new的图标 */
.new-icon{
      background:url('/src/assets/icon.png') ;
  background-position: -67px -283px;
        width: 16px;
    height: 17px;
    margin:  0 auto;
}
/* 上箭头图标 */
.up-icon{
      width: 8px;
    height: 17px;
      background:url('/src/assets/icon.png') ;
   background-position: -74px -299px;
    margin:  0 auto;
  
    }
  
    /* 下箭头图标 */
    .music-down-icon{
        width: 8px;
    height: 17px;
    margin:  0 auto;
     background:url('/src/assets/icon.png') ;
       background-position: -74px -318px;
    }

.song-title{
    width: 306px;
    height: 18px;
    display: flex;
    padding: 6px 10px;
}
  .play-button{
        width: 17px;
        height: 17px;
        margin-right: 8px;
        margin-top: 2px;
        background: url('@/assets/table.png');
        background-position: 0 -103px;
    }
    .song-text{
 line-height: 18px;
   
    font-size: 12px;
    }
    .song-time{
        font-size: 12px;
        line-height: 18px;
        padding: 6px 10px;
            width: 70px;
            height: 18px;
            padding: 6px 10px;
    }
    .musician{
        width: 150px;
        height: 18px;
      font-size: 10px;
        line-height: 18px;
          padding: 6px 10px;
}
.song-text,.song-time,.musician{
    color: #333333;
}
.active-font-color{
      color: #333333;
}
.noactive-font-color{
      color: #666666;
}
.showmusicdata{
    font-size: 10px;
    line-height: 18px;
    width: 18px;
        color: #bbb;
}
.nomusicdata{
    font-size: 0px;
}
.num{
    font-size: 10px;
}
</style>