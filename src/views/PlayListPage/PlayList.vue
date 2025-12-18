<template>
   <div class='playlist'>
      <main>
         <div class="music-list-title">
            <TitleMusic title="全部" >
               <template #min-title>
                     <div style="display: flex;">
                  <div class="menu-container">
                     <div class="menu-btn">选择分类</div>
                     <div class="down"></div>
                  </div>
                  <div class="rone"></div>
               </div>
               </template>
             <div class="hot-text">热门</div>
            </TitleMusic>
         </div>

         <div class="music-list">
            <div class="music-list-item" v-for="(item, index) in HotMusicList" :key="index">
               <HotMusic :viewsnum="item.viewsnum">
                  <template #title>
                     <div class="music-title">
                        {{ item.title }}
                     </div>
                  </template>

                  <template #min-title>
                     <div class="by-icon">by</div>
                     {{ item.mintitle }}
                     <div class="title-icon">by</div>
                  </template>

               </HotMusic>
            </div>
         </div>
         <div class="pagenum-container">
            <div class="pagenum-item">
               <div class="prv-btn">
                 上一页
               </div>
               <div class="page-button">1</div>
               <div class="page-button">2</div>
               <div class="page-button">3</div>
               <div class="page-button">4</div>
               <div class="page-button">5</div>
               <div class="page-button">6</div>
               <div class="page-button">7</div>
               <div class="page-button">8</div>
               <div class="more-page">...</div>
               <div class="page-button">21</div>
               <div class="next-btn">
                  下一页
               </div>
            </div>
         </div>
      </main>
   </div>
</template>

<script>
import HotMusic from '@/components/HotMusic.vue';
import TitleMusic from '@/components/TitleMusic.vue';

export default {

   components: {
      TitleMusic,
      HotMusic,
   },
   props: {},
   data() {
      return {
         HotMusicList: [{
            flag: 1,
            title: 'vol.04 大环境的难，还要再扛13年',
            mintitle: '露露在发呆',
            musicimg: 'http://p2.music.126.net/IvQtaw0emx2uZeQwj0Y45g==/109951172283745920.jpg?param=140y140',
            viewsnum: 2241
         },
         {
            flag: 0,
            title: '【民谣盛宴】100首必听欧美民谣',
            mintitle: '露露在发呆',
            musicimg: 'http://p2.music.126.net/69UvJeww927sMtnjfwlO0Q==/1371091002111924.jpg?param=140y140',
            viewsnum: 3366
         },
         {
            flag: 0,
            title: '重温旧梦 电影里的深情告白',
            mintitle: '露露在发呆',
            musicimg: 'http://p2.music.126.net/HJ33z38SWj4ZGjGl6hheSQ==/18678503534940630.jpg?param=140y140',
            viewsnum: 2530
         },
         {
            flag: 0,
            title: '粤语女声：永远心仪',
            mintitle: '露露在发呆',
            musicimg: 'http://p2.music.126.net/dMlINUxUskjYg30JTRYexw==/19221662277102979.jpg?param=140y140',
            viewsnum: 4420
         },
         {
            flag: 1,
            title: '汤令山 Gareth.T 玻璃',
            mintitle: '露露在发呆',
            musicimg: 'http://p2.music.126.net/4J5W3koG8J6q-8hi2gXhUA==/109951170722904332.jpg?param=140y140',
            viewsnum: 336
         },
         {
            flag: 1,
            title: '华语青春 | 90后校园岁月的流行歌曲',
            mintitle: '露露在发呆',
            musicimg: 'http://p2.music.126.net/6eIG5kB52Uf87RbT58qtjw==/109951167081793683.jpg?param=140y140',
            viewsnum: 3552
         },
         {
            flag: 1,
            title: '万倍返还 第001集 这堆圣级功法，勉强够我烧整个冬天',
            mintitle: '露露在发呆',
            musicimg: 'http://p2.music.126.net/lvZ-y1p3_29cJdjDf4MjJw==/109951169698482276.jpg?param=140y140',
            viewsnum: 145
         },
         {
            flag: 0,
            title: '『粤语』好听到爆的粤语歌单.',
            mintitle: '露露在发呆',
            musicimg: 'http://p2.music.126.net/QHD2Uy2y9ktndbK1UKgdgg==/18611433325258133.jpg?param=140y140',
            viewsnum: 20732
         }],
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
.playlist {
   min-width: 1800px;
   margin: 0;
   padding: 0;
   background-color: #f5f5f5;

}

main {
  
   padding: 40px;
   width: 900px;
   margin: 0 auto;
   background-color: white;
}

.menu-container {
   display: flex;
   width: 86px;
   height: 31px;
   padding-right: 5px;
   margin: 2px 0 0 12px;
   background: url('@/assets/button2.png') no-repeat 0 9999px;
   background-position: 0 -141px;
}

.rone {
   width: 5px;
   height: 31px;
   background: url('@/assets/button2.png') no-repeat 0 9999px;
   background-position: right -99px;
}
.hot-text{
   width: 46px;
   font-size: 12px;
   height: 29px;
   text-align: center;
   line-height: 29px;
   background: url('@/assets/button.png');
       background-position: 0 0;
    border-radius: 3px;
    color: #fff;
}
.menu-btn {
   width: 40px;
   height: 11px;
   font-size: 10px;
   color: #0c73c2 !important;
   padding: 0 10px 0 15px;
   text-align: center;
   line-height: 31px;
}

.down {
   width: 8px;
   height: 5px;
   margin: auto 0;
   background: url('@/assets/icon.png');
   background-position: -70px -543px;
}

.music-list {
   width: 980px;
   margin-left: -50px;
   display: flex;
   flex-wrap: wrap;
 
    margin-top: 40px;
}

.music-list-item {
   padding: 0 0 30px 50px;
}

.music-title {
   display: -webkit-box;
   -webkit-box-orient: vertical;
   -webkit-line-clamp: 1;
   overflow: hidden;
   text-overflow: ellipsis;
}

.by-icon {
   width: 13px;
   height: 14px;
   color: #999;
   font-size: 12px;

}

.pagenum-container {
   width: 900px;
   height: 27px;
   margin: 20px 0;
padding-left: calc(50% - 250px);
}

.pagenum-item {
   width: 470px;
   display: flex;
      justify-content: space-between;
}

.prv-btn {
   display: flex;
   width: 47px;
   height: 24px;
   border: 1px solid #ccc;
   font-size: 12px;
   color: #cacaca;
   text-align: center;
   padding-left: 22px;
   line-height: 24px;
   background: url('@/assets/button.png');
   background-position: 0 -620px;
   margin: 0 1px 0 2px;
   border-radius: 2px;
}

.page-button {
   width: 25px;
   height: 25px;
   color: #333;
   border: 1px solid #ccc;
   border-radius: 2px;
   text-align: center;
   line-height: 25px;
   font-size: 12px;
   font-weight: 400;
}

.more-page {
   width: 25px;
   height: 25px;
   color: #333;
   text-align: center;
   line-height: 25px;
   font-size: 12px;
   font-weight: 400;
}

.next-btn {
   display: flex;
   width: 47px;
   height: 24px;
   border: 1px solid #ccc;
   font-size: 12px;
   text-align: center;
   color: #cacaca;
   padding-right: 17px;
   padding-left: 5px;
   line-height: 24px;
     margin: 0 1px 0 2px;
   border-radius: 2px;
   background: url('@/assets/button.png');
   background-position: -75px -560px;
 
}

</style>