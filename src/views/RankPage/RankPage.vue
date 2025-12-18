<template>
  <div class='Rankpage'>

    <!-- 左右布局 -->
    <main>
      <!-- 左边布局 -->
      <div class="music-rank-container">
        <div class="music-rank">
          <div class="music-feature">云音乐特色榜</div>
          <HotHost v-for="(item,index) in musicfeature" :key="index" :flag="item.flag" :img="item.img"
            :hostname="item.rankclass" :like="item.new"></HotHost>
        </div>
        <div class="world-medio">全球媒体榜</div>
        <div class="world-medio-list">
          <HotHost v-for="(item,index) in musicmedioList" :key="index" :flag="item.flag" :img="item.img"
            :hostname="item.rankclass" :like="item.new"></HotHost>
        </div>
      </div>
      <!-- 右侧内容 -->
      <div class="music-rank-list">
        <RankItem rankname="飙升榜" changedate="最近更新：12月16日" changetime="（刚刚更新）" :favoritenum="4176794" :forwordnum="16848"
          :commentnum="226112"></RankItem>

        <TitleMusic title="歌曲列表">
            <template #min-title>
              <div class="mintitle-text">100首</div>
            </template>
            <div class="playnum">播放：<span>4343546575213</span>次</div>
        </TitleMusic>

        <div class="musiclist-title">
          <div class="emypt"></div>
          <div class="title-text">标题</div>
          <div class="time-long">时长</div>
          <div class="musician">歌手</div>
        </div>
        <MusicList  :musicList="songlist"></MusicList>
      </div>

    </main>
  </div>
</template>

<script>


import HotHost from '@/components/HotHost.vue';
import RankItem from './componets/RankItem.vue';
import TitleMusic from '@/components/TitleMusic.vue';
import MusicList from './componets/MusicList.vue';
export default {

  components: {
    HotHost,
    RankItem,
    TitleMusic,
    MusicList,
  },
  props: {},
  data() {
    return {
      musicfeature: [{
        flag: 1,
        img: 'http://p2.music.126.net/rIi7Qzy2i2Y_1QD7cd0MYA==/109951170048506929.jpg?param=40y40',
        rankclass: '飙升榜',
        new: '刚刚更新'
      },
      {
        flag: 1,
        img: 'http://p2.music.126.net/5guhqPBTcIrrhLBotgaT6w==/109951170048511751.jpg?param=40y40',
        rankclass: '新歌榜',
        new: '刚刚更新'
      },
      {
        flag: 1,
        img: 'http://p2.music.126.net/BaP9nrocNTL3gGThysv4eQ==/109951170091896587.jpg?param=40y40',
        rankclass: '原创榜',
        new: '刚刚更新'
      },
      {
        flag: 1,
        img: 'http://p2.music.126.net/0SUEG8yDACfx0Bw2MYFv4Q==/109951170048519512.jpg?param=40y40',
        rankclass: '热歌榜',
        new: '更新12首'
      },
      ],
      musicmedioList: [{
        flag: 1,
        img: 'http://p1.music.126.net/GgHbgDfGXHpE2YTchU7IvA==/109951171510498108.jpg?param=40y40',
        rankclass: '网易云中文说唱榜',
        new: '每周五更新'
      },
      {
        flag: 1,
        img: 'http://p1.music.126.net/urByD_AmfBDBrs7fA9-O8A==/109951167976973225.jpg?param=40y40',
        rankclass: '网易云古典榜',
        new: '每周四更新'
      },
      {
        flag: 1,
        img: 'http://p1.music.126.net/hXGObvXfsGtFjFvRhOYAkA==/109951170091888741.jpg?param=40y40',
        rankclass: '网易云电音榜',
        new: '每周五更新'
      },
      {
        flag: 1,
        img: 'http://p1.music.126.net/0hhFjP6WyIjHYDXKW5E7BA==/109951171535150782.jpg?param=40y40',
        rankclass: '网易云全球说唱榜',
        new: '每周五更新'
      },
      {
        flag: 1,
        img: 'http://p1.music.126.net/s6ITpmGjKbyDpi7DPkqd2w==/109951170187827373.jpg?param=40y40',
        rankclass: '潮流风向榜',
        new: '更新76首'
      },
      {
        flag: 1,
        img: 'http://p1.music.126.net/s6ITpmGjKbyDpi7DPkqd2w==/109951170187827373.jpg?param=40y40',
        rankclass: '音乐合伙人推荐榜',
        new: '更新29首'
      },
      {
        flag: 1,
        img: 'http://p1.music.126.net/RgYxQmB-ZUjkMRo2N1jWnQ==/109951170187823494.jpg?param=40y40',
        rankclass: '音乐合伙人热歌榜',
        new: '更新85首'
      },
      {
        flag: 1,
        img: 'http://p1.music.126.net/aJJzGIxhkVaD7dX0XBNUnw==/109951170187831145.jpg?param=40y40',
        rankclass: '音乐合伙人留名榜',
        new: '更新18首'
      },
      {
        flag: 1,
        img: 'http://p1.music.126.net/bfk15bvanhdPFU7yjPFgWA==/109951170187832038.jpg?param=40y40',
        rankclass: '音乐合伙人高分新歌榜',
        new: '更新43首'
      },
      {
        flag: 1,
        img: 'http://p1.music.126.net/fPP5T0Z8Ac15qNvRTcHa6g==/109951170074028970.jpg?param=40y40',
        rankclass: '音乐合伙人高分榜',
        new: '更新47首'
      },
      {
        flag: 1,
        img: 'http://p1.music.126.net/qo6-o9n5AhMjNyejev38-A==/109951169743111905.jpg?param=40y40',
        rankclass: '黑胶VIP爱听榜',
        new: '每周四更新'
      },
      {
        flag: 1,
        img: 'http://p1.music.126.net/na1kEeCS1iZEkzOrs9r_9g==/109951167976973667.jpg?param=40y40',
        rankclass: '网易云ACG榜',
        new: '每周四更新'
      },
       {
        flag: 1,
        img: 'http://p1.music.126.net/0hhFjP6WyIjHYDXKW5E7BA==/109951171535150782.jpg?param=40y40',
        rankclass: '网易云全球说唱榜',
        new: '每周五更新'
      },
      {
        flag: 1,
        img: 'http://p1.music.126.net/s6ITpmGjKbyDpi7DPkqd2w==/109951170187827373.jpg?param=40y40',
        rankclass: '潮流风向榜',
        new: '更新76首'
      },
      {
        flag: 1,
        img: 'http://p1.music.126.net/s6ITpmGjKbyDpi7DPkqd2w==/109951170187827373.jpg?param=40y40',
        rankclass: '音乐合伙人推荐榜',
        new: '更新29首'
      },
      {
        flag: 1,
        img: 'http://p1.music.126.net/RgYxQmB-ZUjkMRo2N1jWnQ==/109951170187823494.jpg?param=40y40',
        rankclass: '音乐合伙人热歌榜',
        new: '更新85首'
      },
      {
        flag: 1,
        img: 'http://p1.music.126.net/aJJzGIxhkVaD7dX0XBNUnw==/109951170187831145.jpg?param=40y40',
        rankclass: '音乐合伙人留名榜',
        new: '更新18首'
      },
      {
        flag: 1,
        img: 'http://p1.music.126.net/bfk15bvanhdPFU7yjPFgWA==/109951170187832038.jpg?param=40y40',
        rankclass: '音乐合伙人高分新歌榜',
        new: '更新43首'
      },
      {
        flag: 1,
        img: 'http://p1.music.126.net/5oN9YaFznwNGXkmi8i2Ytw==/109951167430864741.jpg?param=40y40',
        rankclass: '网易云韩语榜',
        new: '每周四更新'
      },
      {
        flag: 1,
        img: 'http://p1.music.126.net/fhAqiflLy3eU-ldmBQByrg==/109951165613082765.jpg?param=40y40',
        rankclass: 'UK排行榜周榜',
        new: '更新23首'
      },
      {
        flag: 1,
        img: 'http://p1.music.126.net/rwRsVIJHQ68gglhA6TNEYA==/109951165611413732.jpg?param=40y40',
        rankclass: '美国Billboard榜',
        new: '每周三更新'
      },
      {
        flag: 1,
        img: 'http://p1.music.126.net/oT-RHuPBJiD7WMoU7WG5Rw==/109951166093489621.jpg?param=40y40',
        rankclass: 'Beatport全球电子舞曲榜',
        new: '每周三更新'
      },
      {
        flag: 1,
        img: 'http://p1.music.126.net/5wDP78s43ydVTKt62C8OjQ==/109951165613100063.jpg?param=40y40',
        rankclass: 'KTV唛榜',
        new: '每周五更新'
      },
      {
        flag: 1,
        img: 'http://p1.music.126.net/aXUPgImt8hhf4cMUZEjP4g==/109951165611417794.jpg?param=40y40',
        rankclass: '日本Oricon榜',
        new: '每天更新'
      },
      {
        flag: 1,
        img: 'http://p1.music.126.net/70_EO_Dc7NT_hhfvsapzcQ==/109951167430862162.jpg?param=40y40',
        rankclass: '网易云欧美热歌榜',
        new: '每周四更新'
      },
      {
        flag: 1,
        img: 'http://p1.music.126.net/0lPWpI9Ejn1OiW2LSbg-qw==/109951167430863224.jpg?param=40y40',
        rankclass: '网易云欧美新歌榜',
        new: '更新31首'
      },
      {
        flag: 1,
        img: 'http://p1.music.126.net/SkGlKQ6acixthb77VlD9eQ==/109951164432300406.jpg?param=40y40',
        rankclass: '网易云ACG动画榜',
        new: '每周五更新'
      },
      {
        flag: 1,
        img: 'http://p1.music.126.net/SkGlKQ6acixthb77VlD9eQ==/109951164432300406.jpg?param=40y40',
        rankclass: '网易云ACG游戏榜',
        new: '更新82首'
      },
      {
        flag: 1,
        img: 'http://p1.music.126.net/Ag7RyRCYiINcd9EtRXf6xA==/109951164432303690.jpg?param=40y40',
        rankclass: '网易云ACG VOCALOID榜',
        new: '更新94首'
      },
      {
        flag: 1,
        img: 'http://p1.music.126.net/YFBFNI2F-4BveUpv6FKFuw==/109951167430864069.jpg?param=40y40',
        rankclass: '网易云日语榜',
        new: '每周二更新'
      },
      {
        flag: 1,
        img: 'http://p1.music.126.net/LjkX2hktgFD1NXc3W6w0sA==/109951170048522513.jpg?param=40y40',
        rankclass: '网易云摇滚榜',
        new: '每周五更新'
      },
      {
        flag: 1,
        img: 'http://p1.music.126.net/kTJC5OBhg8I477X_ZmXyDQ==/109951168539740982.jpg?param=40y40',
        rankclass: '网易云国风榜',
        new: '每周五更新'
      },
      {
        flag: 1,
        img: 'http://p1.music.126.net/Mi4QPklg1mtbWAfq74tEqQ==/109951165498334721.jpg?param=40y40',
        rankclass: '潜力爆款榜',
        new: '每周二更新'
      },
      {
        flag: 1,
        img: 'http://p1.music.126.net/Xe9qLTAqtBAWX_hPgFHMyw==/109951170048510929.jpg?param=40y40',
        rankclass: '网易云民谣榜',
        new: '每周五更新'
      },
      {
        flag: 1,
        img: 'http://p1.music.126.net/wJVUAiUuykKk7yGbQxDBug==/109951167430857712.jpg?param=40y40',
        rankclass: '听歌识曲榜',
        new: '每周四更新'
      },
      {
        flag: 1,
        img: 'http://p1.music.126.net/_kSxOPqQ5J5etC5DKTFwNA==/109951170048519530.jpg?param=40y40',
        rankclass: '网络热歌榜',
        new: '每周五更新'
      },
      {
        flag: 1,
        img: 'http://p1.music.126.net/HbJ0BK5doY4I4pEMY6-FQw==/109951167430852698.jpg?param=40y40',
        rankclass: '俄语榜',
        new: '每周四更新'
      },
      {
        flag: 1,
        img: 'http://p1.music.126.net/N-Y5maLGWgrowt3TE6RtSg==/109951167430857045.jpg?param=40y40',
        rankclass: '越南语榜',
        new: '每周四更新'
      },
      {
        flag: 1,
        img: 'http://p2.music.126.net/w_01BfDU012ojxnzLO6tYw==/109951167977358686.jpg?param=40y40',
        rankclass: '中文慢摇DJ榜',
        new: '刚刚更新'
      },
      {
        flag: 1,
        img: 'http://p2.music.126.net/KLVO8PxVZzOoLdWQQNyprA==/109951166327316568.jpg?param=40y40',
        rankclass: '俄罗斯top hit流行音乐榜',
        new: '每周五更新'
      },
      ],
      songlist:[{
        id:1,
        fontcolor:0,
        data:50,
        icon:1,
        img:'http://p1.music.126.net/05niw9hnQgwMqNVvYN2fiw==/109951172418987244.jpg?param=50y50&quality=100',
        title:"小孩与我 (Live)",
        time:'4:38',
        songer:'魏翔/薛之谦'
      },
      {
        id:2,
        fontcolor:1,
        icon:2,
        img:'http://p1.music.126.net/8E9NHOTIf6V6Vv45_Taxdg==/109951168163299080.jpg?param=50y50&quality=100',
        title:"给未来的自己",
        time:'04:10',
        songer:'梁静茹'
      },
       {
        id:3,
        fontcolor:0,
        data:40,
        icon:3,
        img:'http://p1.music.126.net/05niw9hnQgwMqNVvYN2fiw==/109951172418987244.jpg?param=50y50&quality=100',
        title:"人字拖 (Live)",
        time:'04:24',
        songer:'薛之谦'
      },
       {
        id:4,
        fontcolor:0,
        icon:2,
        title:"潇洒",
        time:'03:33',
        songer:'TizzyT/GALI/马思唯'
      },
        {
        id:5,
        fontcolor:0,
        icon:2,
        title:"潇",
        time:'03:33',
        songer:'TizzyT/GALI/马思唯'
      },
         {
        id:6,
        fontcolor:1,
        icon:2,
        title:"玲子4.0",
        time:'02:44',
        songer:'叶霁晨/翁杰Winjay'
      },
        {
        id:7,
        fontcolor:0,
        icon:1,
        data:38,
        title:"地球没有你 (Live)",
        time:'03:41',
        songer:'周深'
      },
         {
        id:8,
        fontcolor:1,
        icon:3,
        data:17,
        title:"左转灯 (1000 Times +1)(live)",
        time:'03:14',
        songer:'汪苏泷/周兴哲'
      },
          {
        id:9,
        fontcolor:0,
        icon:2,
        title:"爱上你之前的我",
        time:'03:02',
        songer:'方世杰'
      },
           {
        id:10,
        fontcolor:0,
        icon:1,
        data:47,
        title:"不然算了吧 (Live)",
        time:'03:33',
        songer:'刘宇宁'
      },
            {
        id:11,
        fontcolor:0,
        icon:2,
        title:"小问题",
        time:'03:33',
        songer:'刘宇宁'
      },
        {
        id:12,
        fontcolor:1,
        icon:2,
        title:"落了白",
        time:'03:18',
        songer:'TizzyT'
      },
        {
        id:13,
        fontcolor:1,
        icon:1,
        data:24,
        title:"midnight smoke slow",
        time:'03:27',
        songer:'TizzyT'
      },
         {
        id:14,
        fontcolor:0,
        icon:2,
       
        title:"过度依赖",
        time:'03:33',
        songer:'step.jad依加/Karencici'
      },
    ]
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
html,
.Rankpage {
  height: 100%;
  margin: 0;
  padding: 0;
}

.Rankpage {
  min-width: 1800px;
  background: #f5f5f5;
}

main {
  width: 980px;
  display: flex;
  margin: 0 auto;
  margin-top: 1px;
}

.music-rank-container {
  border: 1px solid #ccc;
}

.music-rank {
  width: 240px;
  font-size: 14px;
  height: 276px;
  margin-top: 30px;
  font-weight: bold;
}

.world-medio,
.music-feature {
  color: #000;
  font-size: 14px;
  padding: 0 10px 12px 15px;
  margin-top: 20px;
  font-weight: bold;
}

.music-rank-list {
  padding: 0 40px;
  background-color: #fff;
}
.mintitle-text{
  font-size: 12px;
  margin-left: 10px;
  text-align: center;
  height: 30px;
  line-height: 30px;
  margin-top: 5px;
    color: #666;
}
.playnum{
  display: flex;
  font-size: 12px;
  margin-left: 10px;
  text-align: center;
  height: 30px;
  line-height: 30px;
  margin-top: 5px;
  color: #666;
}
.playnum span{
  color: #c20c0c;
}
.musiclist-title {
  display: flex;
   background: url('@/assets/table.png')repeat 0 9999px;
  background-position: 0 0;
  background-color: #f7f7f7;
  color: #666;
}

.emypt {
  width: 78px;
  height: 39px;
   
  height: 38px;

}

.title-text {
  width: 307px;
  height: 18px;
  padding: 8px 10px;
  line-height: 18px;
  font-size: 12px;
 border-left: 1px solid #ccc;
}
.time-long{
  width: 71px;
  height: 18px;
    padding: 8px 10px;
     line-height: 18px;
       font-size: 12px;
   border-left: 1px solid #ccc
}
.musician{
  width: 154px;
  height: 18px;
    padding: 8px 10px;
     line-height: 18px;
       font-size: 12px;
   border-left: 1px solid #ccc
}
</style>