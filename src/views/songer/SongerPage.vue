<template>
 <div class='songerpage'>
    <main>
        <!-- 左边部分 -->
        <div class="songer-container">
        <div class="comment-songer">
        <SongList title="推荐"
        :songerclass="songerclass"></SongList>
        
    </div>
<div class="line"></div>
    <div class="comment-songer">
        <SongList title="华语"
        :songerclass="songerclass"></SongList>
    </div>
<div class="line"></div>
     <div class="comment-songer">
        <SongList title="欧美"
        :songerclass="songerclass"></SongList>
        
    </div>
    </div>
      <!-- 右边部分 -->
       <div class="songer-list">
         <TitleMusic title="入驻歌手">
            <div class="more-btn">更多 ></div></TitleMusic>

          <div class="songer-item">
            <SongPerson v-for="(item,index) in songerlist" :key="index"
              :img="item.img"
              :songername="item.songername"
              :showicon="item.showicon"></SongPerson>
          </div>
               <div class="line-center"></div>
          <div class="name-list">
          <SongerName v-for="(item,index) in songerlist" :key="index"
        :songername="item.songername"
        :showicon="item.showicon"></SongerName>
          </div>
       </div>
    </main>
 </div>
</template>

<script>
    import SongList from './components/SongList.vue';
    import TitleMusic from '@/components/TitleMusic.vue';
import SongPerson from './components/SongPerson.vue';
import SongerName from './components/SongerName.vue';
    
export default {

 components: {
    SongList,
    TitleMusic,
    SongPerson,
    SongerName
 },
 props: {},
 data() {
 return {
songerclass:['推荐歌手','入驻歌手'],
  songerlist:[{
    showicon:false,
    img:'http://p1.music.126.net/cSAmmAvsKhm3N-zxWg7QcQ==/109951168490195225.jpg?param=130y130',
    songername:'张惠妹'
  },
{
      showicon:true,
    img:'http://p2.music.126.net/ei0o1W2N_SX1vpkXr2DDtA==/109951165122695489.jpg?param=130y130',
    songername:'颜人中'
  },
{
    showicon:true,
    img:'http://p2.music.126.net/r6W-zCnV-aduVn_PLZYuYg==/109951168529049969.jpg?param=130y130',
    songername:'林俊杰'
  },
{
     showicon:false,
    img:'http://p1.music.126.net/cSAmmAvsKhm3N-zxWg7QcQ==/109951168490195225.jpg?param=130y130',
    songername:'张惠妹'
  },
{
    showicon:true,
    img:'http://p2.music.126.net/ei0o1W2N_SX1vpkXr2DDtA==/109951165122695489.jpg?param=130y130',
    songername:'颜人中'
  },
{
    showicon:true,
    img:'http://p2.music.126.net/r6W-zCnV-aduVn_PLZYuYg==/109951168529049969.jpg?param=130y130',
    songername:'林俊杰'
  },
{
    img:'http://p2.music.126.net/r6W-zCnV-aduVn_PLZYuYg==/109951168529049969.jpg?param=130y130',
    songername:'林俊杰'
  },
{
    img:'http://p1.music.126.net/cSAmmAvsKhm3N-zxWg7QcQ==/109951168490195225.jpg?param=130y130',
    songername:'张惠妹'
  },
{
    img:'http://p2.music.126.net/ei0o1W2N_SX1vpkXr2DDtA==/109951165122695489.jpg?param=130y130',
    songername:'颜人中'
  },
{
    img:'http://p2.music.126.net/r6W-zCnV-aduVn_PLZYuYg==/109951168529049969.jpg?param=130y130',
    songername:'林俊杰'
  }]
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
    body,html{
        width: 100%;
        padding: 0;
        margin: 0;
    }
    main{
        width: 980px;
        margin: 0 auto;
        display: flex;
    }
   
.songer-container{
    width: 160px;
    margin-top: 30px;
    padding: 0 10px 40px 10px;
}
.comment-songer{
    width: 160px;
    padding-top: 16px;
    margin-top: 5px;
}
.line{
    height: 1px;
    background-color: #d3d3d3;
        margin-top: 5px;
}
.songer-list{
    width: 720px;
    padding: 40px;
}
.more-btn{
        font-size: 12px;
        height: 41px;
        margin-top: 8px;
        line-height: 41px;
        color: #666;
    }
    .songer-item{
        margin-top: 20px;
        width: 800px;
        margin-left: -16px;
        display: flex;
        flex-wrap: wrap;
    }
    .line-center{
        margin-top: 20px;
        width: 720px;
        height: 1px;
            border-bottom: 1px dotted #999;
    }
    .name-list{
         margin-top: 20px;
        width: 800px;
        margin-left: -16px;
        display: flex;
        flex-wrap: wrap;
    }
</style>