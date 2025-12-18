<template>
  <div id="FindMusic">
    <main>
      <!-- 轮播图 -->
      <div class="coursoul-container">
        <CoursoulCom :coursoulList="CoursoulList"></CoursoulCom>
      </div>
      <!-- 内容的容器，左右布局 -->
      <div class="main-container">
        <!-- 左边内容的盒子 -->
        <div class="container-musiclist">
          <!-- 热门推荐 -->
          <div class="hotmusic-list">
            <TitleMusic title="热门推荐"  showIcon>
              <div class="more-btn-container">
                更多<div class="icon"></div>
              </div>
               <template #min-title>
                 <div class="min-title">
                  <div class="title-item" v-for="(item,index) in musicClass" :key="index">
                       {{ item }}
                  </div>
                 </div>
              </template>
            </TitleMusic>
            <HotMusic v-for="(item) in HotMusicList" :key="item.musicimg" :musicimg="item.musicimg"
              :viewsnum="item.viewsnum">
              <template #hot-icon>
                <span class="hot-icon" v-if="item.flag == 1"></span>
              </template>
              <template #title>
                <span class="music-title">
                  {{ item.title }}
                </span>
              </template>
            </HotMusic>
          </div>
          <!-- 新碟上架 -->
          <div class="newmusic-list">
            <TitleMusic title="新碟上架" showIcon>
              <div class="more-btn-container">
                更多<div class="icon"></div>
              </div>
             
            </TitleMusic>
            <div class="newMusic-items">
              <div class="prv-icon" @click="prvpage"></div>
              <div class="carousel-photo-prv" v-show="carouselFlag == 'prv'" @click="gotoRank">
                <NewMusic v-for="(item) in NewMusic" :key="item.musicimg" :newMusicicon="item.musicimg"
                  :title="item.musictitle" :authorname="item.autor"></NewMusic>
              </div>
              <div class="carousel-photo-next" v-show="carouselFlag == 'next'">
                <NewMusic v-for="(item) in NewMusicnext" :key="item.musicimg" :newMusicicon="item.musicimg"
                  :title="item.musictitle" :authorname="item.autor"></NewMusic>
              </div>
              <div class="next-icon" @click="nextpage"></div>
            </div>
          </div>
          <!-- 榜单 -->
          <div class="rank-list-container">
            <TitleMusic title="榜单" showIcon>
              <div class="more-btn-container">
                更多<div class="icon"></div>
              </div>
            </TitleMusic>
            <div class="rank-item">
              <RankList :arrlist="musicnames" :rankname="'飙升榜'"
                :rankimg="'http://p3.music.126.net/rIi7Qzy2i2Y_1QD7cd0MYA==/109951170048506929.jpg?param=100y100'">
              </RankList>
              <RankList :arrlist="musicnames" :rankname="'新歌榜'"
                :rankimg="'http://p4.music.126.net/5guhqPBTcIrrhLBotgaT6w==/109951170048511751.jpg?param=100y100'">
              </RankList>
              <RankList :arrlist="musicnames" :rankname="'原创榜'"
                :rankimg="'http://p3.music.126.net/BaP9nrocNTL3gGThysv4eQ==/109951170091896587.jpg?param=100y100'">
              </RankList>
            </div>
          </div>
        </div>
        <!-- 右边容器 -->
        <div class="songer-info">
          <Tologin></Tologin>
          <!-- 入驻音乐头部 -->
          <div class="Autor-totle">
            <AutorClass title="入驻歌手" :flag="1"></AutorClass>
          </div>
          <!-- 入驻音乐列表 -->
          <div class="Autor-list-container">
            <AutorList :autorArr="autorList"></AutorList>
          </div>
          <!-- 申请音乐人 -->
          <div class="apply-musician">
            申请成为网易云音乐人
          </div>
          <!-- 热门主播 -->
          <div class="hot—host-container">
            <div class="host-title">
              <AutorClass title="热门主播" :flag="0"></AutorClass>
            </div>
            <!-- 热门主播列表 -->
            <div class="HotHost-info">
              <HotHost v-for="(item) in hostInfo" :key="item.hostname" :img="item.hostimg" :hostname="item.hostname"
                :like="item.hostlike"></HotHost>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer>

    </footer>
  </div>
</template>

<script>

import TitleMusic from '@/components/TitleMusic.vue';
import HotMusic from '@/components/HotMusic.vue';
import NewMusic from '@/components/NewMusic.vue';
import RankList from '@/components/RankList.vue';
import Tologin from '@/views/Home/maincomponents/ToLogin.vue';
import AutorClass from '@/views/Home/maincomponents/AutorClass.vue';
import AutorList from '@/components/AutorList.vue';
import CoursoulCom from '@/views/Home/maincomponents/CoursoulCom.vue';
import HotHost from '@/components/HotHost.vue';



export default {
  components: {

    TitleMusic,
    HotMusic,
    NewMusic,
    RankList,
    Tologin,
    AutorClass,
    AutorList,
    CoursoulCom,
    HotHost,
  },
  data() {
    return {
      carouselFlag: 'prv',
      musicClass:['华语', '|', '流行', '|', '摇滚', '|', '民谣', '|', '电子'],
      HotMusicList: [{
        flag: 1,
        title: 'vol.04 大环境的难，还要再扛13年',
        musicimg: 'http://p2.music.126.net/IvQtaw0emx2uZeQwj0Y45g==/109951172283745920.jpg?param=140y140',
        viewsnum: 2241
      },
      {
        flag: 0,
        title: '【民谣盛宴】100首必听欧美民谣',
        musicimg: 'http://p2.music.126.net/69UvJeww927sMtnjfwlO0Q==/1371091002111924.jpg?param=140y140',
        viewsnum: 3366
      },
      {
        flag: 0,
        title: '重温旧梦 电影里的深情告白',
        musicimg: 'http://p2.music.126.net/HJ33z38SWj4ZGjGl6hheSQ==/18678503534940630.jpg?param=140y140',
        viewsnum: 2530
      },
      {
        flag: 0,
        title: '粤语女声：永远心仪',
        musicimg: 'http://p2.music.126.net/dMlINUxUskjYg30JTRYexw==/19221662277102979.jpg?param=140y140',
        viewsnum: 4420
      },
      {
        flag: 1,
        title: '汤令山 Gareth.T 玻璃',
        musicimg: 'http://p2.music.126.net/4J5W3koG8J6q-8hi2gXhUA==/109951170722904332.jpg?param=140y140',
        viewsnum: 336
      },
      {
        flag: 1,
        title: '华语青春 | 90后校园岁月的流行歌曲',
        musicimg: 'http://p2.music.126.net/6eIG5kB52Uf87RbT58qtjw==/109951167081793683.jpg?param=140y140',
        viewsnum: 3552
      },
      {
        flag: 1,
        title: '万倍返还 第001集 这堆圣级功法，勉强够我烧整个冬天',
        musicimg: 'http://p2.music.126.net/lvZ-y1p3_29cJdjDf4MjJw==/109951169698482276.jpg?param=140y140',
        viewsnum: 145
      },
      {
        flag: 0,
        title: '『粤语』好听到爆的粤语歌单.',
        musicimg: 'http://p2.music.126.net/QHD2Uy2y9ktndbK1UKgdgg==/18611433325258133.jpg?param=140y140',
        viewsnum: 20732
      }],
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
      ],
      NewMusicnext: [{
        musicimg: 'http://p2.music.126.net/ZLunCTp4RRnu7N8lGVw4Fw==/109951172372358346.jpg?param=100y100',
        musictitle: '槍火天使 Gun-fire Angel',
        autor: 'Capper',
      },
      {
        musicimg: 'http://p2.music.126.net/o3BtModPfRAq0Ughv7Khjg==/109951172370674253.jpg?param=100y100',
        musictitle: '世界与孤独女王',
        autor: '祁紫檀',
      },
      {
        musicimg: 'http://p2.music.126.net/LSqgMzAdlKfVcpl_2GBdCQ==/109951172185142614.jpg?param=100y100',
        musictitle: 'HEART MAID',
        autor: '宣美',
      },
      {
        musicimg: 'http://p2.music.126.net/hB_L67ZmbFNMIPr1yuNIlQ==/109951172213496049.jpg?param=100y100',
        musictitle: 'RECOLLECTION, VOL. I - MY Harmonic Minor',
        autor: '杨千嬅',
      },
      {
        musicimg: 'http://p1.music.126.net/JZQhKhRMxBM1BG1G18rAUA==/109951172178072640.jpg?param=100y100',
        musictitle: '生活麻辣烫',
        autor: '王齐铭WatchMe',
      },
      ],
      musicnames: [{
        num: 1,
        title: 'Carefree',
        flag: 0,
      },
      {
        num: 2,
        title: 'Chemical',
        flag: 0
      },
      {
        num: 3,
        title: '雨是神明的烟花',
        flag: 0
      },
      {
        num: 4,
        title: '认真的雪',
        flag: 0
      },
      {
        num: 5,
        title: 'TAXI',
        flag: 0
      },
      {
        num: 6,
        title: '雪落下的声音 (Live)',
        flag: 0
      },
      {
        num: 7,
        title: '夢幻上昇:Mew Rage Up!',
        flag: 0
      },
      {
        num: 8,
        title: 'Give Me Something (for Arknights Endfield)',
        flag: 0
      },
      {
        num: 9,
        title: '小半',
        flag: 0
      },
      {
        num: 10,
        title: '帧帧瞬间',
        flag: 1
      }],
      autorList: [{
        Autorimg: 'http://p2.music.126.net/cSAmmAvsKhm3N-zxWg7QcQ==/109951168490195225.jpg?param=62y62',
        autorname: '张惠妹aMEI',
        autorinfo: '台湾歌手张惠妹'
      },
      {
        Autorimg: 'http://p2.music.126.net/FRjXcFEflJMI0UBFauC--g==/109951169959806190.jpg?param=62y62',
        autorname: '吴莫愁Momo',
        autorinfo: '《中国好声音》选手吴莫愁'
      },
      {
        Autorimg: 'http://p2.music.126.net/whG7pbsbd1akKtOE7V3R_Q==/109951168299161319.jpg?param=62y62',
        autorname: '孙楠',
        autorinfo: '歌手孙楠 代表作《你快回来》《燃烧》'
      },
      {
        Autorimg: 'http://p2.music.126.net/1GIlkxKmvKu66ufU83FyvA==/31885837222663.jpg?param=62y62',
        autorname: '麦田老狼',
        autorinfo: '歌手，音乐人。代表作《同桌的你》等。'
      },
      {
        Autorimg: 'http://p2.music.126.net/HXs1MIcM7n9V7qFDTuW71A==/109951170540755845.jpg?param=62y62',
        autorname: '陈楚生',
        autorinfo: '唱作歌手'
      },],
      hostInfo: [{
        hostimg: 'http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40',
        hostname: '陈农',
        hostlike: '心理学家、美食家陈立教授',
      },
      {
        hostimg: 'http://p1.music.126.net/GgXkjCzeH4rqPCsrkBV1kg==/109951164843970584.jpg?param=40y40',
        hostname: '刘维-Julius',
        hostlike: '歌手、播客节目《维维道来》主理人',
      },
      {
        hostimg: 'http://p1.music.126.net/RJNdt11mh-t74HLtv7vAgw==/109951172077610908.jpg?param=40y40',
        hostname: '莫非定律乐团',
        hostlike: '男女双人全创作独立乐团',
      },
      {
        hostimg: 'http://p1.music.126.net/NHjNoFpLDEZ-3OR9h35z1w==/109951165825466770.jpg?param=40y40',
        hostname: '碎嘴许美达',
        hostlike: '脱口秀网络红人',
      },
      {
        hostimg: 'http://p1.music.126.net/mMZvNruOjEa4XNL6-lWjNg==/109951168919647064.jpg?param=40y40',
        hostname: '银临Rachel',
        hostlike: '',
      },
      ],
      CoursoulList: [{
        Coursoulimg: 'https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/77078941403/46e7/ac70/97b4/1df2d982d9f34e5100be781894033cf1.jpg?imageView&quality=89',
        CoursoulBlackground: 'https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/77101647364/8b46/9716/3d86/d83e80e73685d1d1cd4e257f0b18aec3.jpg?imageView&blur=40x20',
      },
      {
        Coursoulimg: 'https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/77155034853/c350/6d90/12c1/36ad112892889289cb55b5d3b4aa47ae.jpg?imageView&quality=89',
        CoursoulBlackground: 'https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/77155034853/c350/6d90/12c1/36ad112892889289cb55b5d3b4aa47ae.jpg?imageView&blur=40x20',

      },
      {
        Coursoulimg: 'https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/77055442814/6c7f/a776/c6e3/1881386e837b5a847be243614db49115.jpg?imageView&quality=89',
        CoursoulBlackground: 'https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/77055442814/6c7f/a776/c6e3/1881386e837b5a847be243614db49115.jpg?imageView&blur=40x20',

      },
      {
        Coursoulimg: 'https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/77154823619/231b/617a/39b3/09d4c4904bbaa856c53e5097015b7664.jpg?imageView&quality=89',
        CoursoulBlackground: 'https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/77099648163/1420/fe04/6724/35bec16256699f85fb531f860aeefafa.jpg?imageView&blur=40x20',
      },
      {
        Coursoulimg: 'https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/77101520650/b638/989f/5911/cc0c617bb04a16f867af97020d633b7c.jpg?imageView&quality=89',
        CoursoulBlackground: 'https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/77101520650/b638/989f/5911/cc0c617bb04a16f867af97020d633b7c.jpg?imageView&blur=40x20',

      }
      ]
    }
  },
  methods: {
    prvpage() {
      if (this.carouselFlag == 'next') {
        this.carouselFlag = 'prv';
      } else {
        this.carouselFlag = 'next';
      }
    },
    nextpage() {
      if (this.carouselFlag == 'prv') {
        this.carouselFlag = 'next';
      } else {
        this.carouselFlag = 'prv';
      }
    },
    gotoRank() {
      this.$router.push('/rankpage')
    }
  }
}
</script>

<style scoped>
html,
.FindMusic {

  height: 100%;
  margin: 0;
  padding: 0;
}

.FindMusic {
  min-width: 1800px;
}

main {
  width: 100%;
  background-color: #F5F5F5;
}

.coursoul-container {
  width: 100%;
  height: 285px;
  font-size: 1px;
}

.main-container {
  width: 980px;
  margin: 0 auto;
  display: flex;
  background-color: #fff;
}

.container-musiclist {
  width: 689px;
  padding: 20px 20px 40px 20px;
  border: 1px solid #ccc;

}

.hotmusic-list {
  height: 522px;
  display: flex;
  margin-top: 20px;
  flex-wrap: wrap;
  width: 689px;
  justify-content: space-between;
}

.more-btn-container {
  margin-top: 10px;
  height: 32px;
  display: flex;
  font-size: 12px;
  align-items: center;
  text-align: center;
  color: #666;
}

.icon {
  align-items: center;
  margin-left: 3px;
  width: 12px;
  height: 12px;
  background: url('@/assets/index.png');
  background-position: 0 -240px;
}
.min-title{
  display: flex;
  width: 240px;
  height: 18px;

  line-height: 18px;
  justify-content: space-between;
  margin-left: 12px;
  margin-top: 7px;
  font-size: 12px;
  color: #666;
}
.hot-icon {
  width: 35px;
  height: 15px;
  margin: 0px 3px 0px 0px;
  background: url('@/assets/icon.png') no-repeat 0 9999px;
  background-position: -31px -658px;
  display: inline-block;
}

.music-title {
  font-size: 14px;
  display: flex;
  flex-wrap: wrap;
  word-break: break-all;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
}

.newmusic-list {
  width: 689px;
  margin-top: 20px;

}

.newMusic-items {
  width: 687px;
  display: flex;

  justify-content: space-between;
  background: #f5f5f5;
  margin-top: 20px;
  border: 1px solid #fff;
  padding-top: 20px;
}

.prv-icon {
  width: 17px;
  height: 17px;
  background: url('@/assets/index.png') 0px 9999px no-repeat;
  background-position: -260px -75px;
  margin-top: 50px;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
}

.next-icon {
  width: 17px;
  height: 17px;
  background: url('@/assets/index.png') 0px 9999px no-repeat;
  background-position: -300px -75px;
  margin-top: 50px;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
}

footer {
  width: 100%;
  height: 326px;
}

.carousel-photo-prv,
.carousel-photo-next {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.rank-list-container {
  width: 689px;
  margin-top: 30px;
}

.rank-item {
  height: 500px;
  width: 100%;
  display: flex;
  margin-top: 20px;
}

.Autor-totle {
  margin-top: 20px;
}

.Autor-list-container {
  width: 250px;
  height: 380px;
  margin: 6px 0px 14px 10px;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
}

.apply-musician {
  width: 250px;
  margin-left: 10px;
  margin-top: 0px;
  width: 205px;
  height: 31px;
  color: rgb(51, 51, 51);
  padding-right: 5px;
  line-height: 31px;
  text-align: center;
  border-radius: 4px;
  border-right: 1px solid #c4c4c4;
  background: url('@/assets/button2.png') 0px 9999px no-repeat;

  background-position: 0px -59px;



  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
}

.hot—host-container {
  width: 250px;
}

.host-title {
  margin-top: 35px;
}

.HotHost-info {
  margin-left: 20px;
  height: 270px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
