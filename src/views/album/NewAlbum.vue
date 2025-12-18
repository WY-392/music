<template>
 <div class='newalbum'>
    <div class="music-list-container">
        <TitleMusic title="热门新碟"></TitleMusic>
        <div class="music-list">
             <NewMusic v-for="(item) in NewMusic" :key="item.musicimg" :newMusicicon="item.musicimg"
                  :title="item.musictitle" :authorname="item.autor" style="padding:0 0 30px 33px;"
                  :flag="1"></NewMusic>
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
    </div>


    
 </div>
</template>

<script>
import NewMusic from '@/components/NewMusic.vue';
import TitleMusic from '@/components/TitleMusic.vue';

export default {

 components: {
    TitleMusic,
    NewMusic
 },
 props: {},
 data() {
 return {
  NewMusic: [{
        musicimg: 'http://p1.music.126.net/r1AKMenByofI7Qqj3E5EqQ==/109951172091080013.jpg?param=100y100',
        musictitle: '离开银色荒原',
        autor: '裘德',
      },
      {
        musicimg: 'http://p1.music.126.net/41oaDv7XLcIMU98IUYO2rA==/109951172148823628.jpg?param=100y100',
        musictitle: '有且',
        autor: '杨丞琳',
      },
      {
        musicimg: 'http://p1.music.126.net/arfLbEKWiZlHnSkC-FQacw==/109951172161804297.jpg?param=100y100',
        musictitle: '自恋是骄傲',
        autor: '新裤子',
      },
      {
        musicimg: 'http://p1.music.126.net/Bf5WiTReeifmwWSKLPLi5A==/109951172161561229.jpg?param=100y100',
        musictitle: '在没有答案的日子里',
        autor: '傻子与白痴',
      },
      {
        musicimg: 'http://p1.music.126.net/aK3Rn59z08m2FXGw6KtXhA==/109951172144778642.jpg?param=100y100',
        musictitle: 'TEENAGE RAMBLE',
        autor: '刘柏辛Lexie',
      },
      {
        musicimg: 'http://p1.music.126.net/r1AKMenByofI7Qqj3E5EqQ==/109951172091080013.jpg?param=100y100',
        musictitle: '离开银色荒原',
        autor: '裘德',
      },
      {
        musicimg: 'http://p1.music.126.net/41oaDv7XLcIMU98IUYO2rA==/109951172148823628.jpg?param=100y100',
        musictitle: '有且',
        autor: '杨丞琳',
      },
      {
        musicimg: 'http://p1.music.126.net/arfLbEKWiZlHnSkC-FQacw==/109951172161804297.jpg?param=100y100',
        musictitle: '自恋是骄傲',
        autor: '新裤子',
      },
      {
        musicimg: 'http://p1.music.126.net/Bf5WiTReeifmwWSKLPLi5A==/109951172161561229.jpg?param=100y100',
        musictitle: '在没有答案的日子里',
        autor: '傻子与白痴',
      },
      {
        musicimg: 'http://p1.music.126.net/aK3Rn59z08m2FXGw6KtXhA==/109951172144778642.jpg?param=100y100',
        musictitle: 'TEENAGE RAMBLE',
        autor: '刘柏辛Lexie',
      },
      ],
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

<style lang="less" scoped>

    .newalbum{
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        background-color: #f4f4f4;
    }
.music-list-container{
    margin: 0 auto;
    width: 900px;
    padding: 40px;
    background-color: #fff;
}
.music-list{
    width: 950px;
    margin-left: -30px;
   display: flex;
   flex-wrap: wrap;


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