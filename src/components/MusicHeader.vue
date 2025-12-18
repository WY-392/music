<!-- 网易云头部 -->
<template>
  <div class="header-container">
    <div class="header-nav">
      <div class="header-content">
        <img src="../assets/musiclogo.png" alt="" class="musicimg">
        <div class="music-text">网易云音乐</div>
        <div class="nav-list" >
          <div :class="['findmusic',showitem==0?'activeselect':'']" @click="gotoHome">发现音乐
            <div class="menu-icon" v-if="showitem==0"></div>
          </div>
          <div :class="['mymusic',showitem==1?'activeselect':'']" @click="gotomyMusic">我的音乐
            <div class="menu-icon" v-if="showitem==1"></div>
          </div>
          <div :class="['care',showitem==2?'activeselect':'']" @click="gotofriendPage">关注
            <div class="menu-icon" v-if="showitem==2"></div>
          </div>
          <div class="shop">商城
            <div class="menu-icon" v-if="showitem==3"></div>
          </div>
          <div class="musician">音乐人
            <div class="menu-icon" v-if="showitem==4"></div>
          </div>
          <div class="commend">云推歌
            <div class="menu-icon" v-if="showitem==5"></div>
          </div>
          <div class="download" @click="gotodownload">下载客户端
            <div class="menu-icon" v-if="showitem==6"></div>
          </div>
        </div>
        <div class="music-search">
          <img src="../assets/search.png" alt="">
          <input type="text" placeholder="音乐/视频/电台/用户">
        </div>
        <div class="creator-center">创作者中心</div>
        <div class="loginBtn">登录</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      showitem:0,
    };
  },
  computed: {},
  watch: {},
  created() { },
  mounted() { },
  methods: {
    gotoHome(){
       this.showitem=0;
 this.$router.push('/');

    },
    gotofriendPage(){
       this.$router.push('/friendPage');
       this.showitem=2;
    },
    gotomyMusic(){
      this.showitem=1;
      this.$router.push('/myMusic');
    },
gotodownload(){
  this.showitem=6;
  this.$router.push('/downLoad');
}
  }
};
</script>
<style scoped>
html,body {
 width: 100%;
  margin: 0;
  padding: 0;
}

.header-container {
  min-width: 1800px;
    height: 69px;
}

.header-nav {
  width: 100%;
  height: 69px;
  background-color: #242424;
}
.nav-list div:hover{
  background-color:black;

}
.header-line {
  width: 100%;
  height: 1px;
  background-color: #000000;
}

.header-content {
  display: flex;
  line-height: 69px;
  margin-left: 350px;
  height: 69px;

}
.activeselect{
  background-color:  #000000;
}
.musicimg {
  width: 33px;
  height: 33px;
  margin-top: 18px;

}

.music-text {
  width: 120px;
  margin-left: 8px;
  color: #fff;
  font-size: 20px;
}

.nav-list {
  display: flex;
  height: 69px;
  width: 588px;
  color: #ccc;
  font-size: 14px;
  line-height: 69px;
  text-align: center;
   
}
.findmusic{
  width: 56px;
}
.findmusic,.mymusic,.care,.shop,.musician,.commend,.download{
position: relative;
padding: 0 19px;
}
.menu-icon {
  width: 12px;
  height: 7px;
  overflow: hidden;
  position: absolute;
  top: 64px;
  left: 50%;
      margin-left: -6px;
  background: url('@/assets/topbar.png') no-repeat 0 9999px;
  background-position: -226px 0;
}

.music-search {
  width: 160px;
  height: 32px;
  margin-left: 20px;
  left: 50%;
  display: flex;
  background-color: white;
  border-radius: 20px;
  margin-top: 19px;
  overflow: hidden;
}

.music-search img {
  height: 14px;
  width: 13px;
  margin-left: 10px;
  margin-right: 5px;
  margin-top: 10px;
}

.music-search input {
  flex: 1;
  outline: none;
  border: none;
}

.creator-center {
  height: 32px;
  width: 90px;
  border-radius: 20px;
  border: 1px solid #4f4f4f;
  color: #accccc;
  text-align: center;
  line-height: 32px;
  margin-top: 19px;
  margin-left: 13px;
  font-size: 12px;
}

.loginBtn {
  width: 24px;
  margin-left: 20px;
  font-size: 12px;
  color: #707068;
}
</style>