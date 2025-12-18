<!-- 网易云标题二级菜单 -->
<template>
<header>
      <div class="header-line"></div>
      <div class="nav-menu">
        <div class="menu-item">
          <div @click="gotohome" :class="index==0?'active-btn':''">推荐</div>
          <div @click="gotoRankPage" :class="index==1?'active-btn':''">排行榜</div>
          <div @click="gotomusiclist" :class="index==2?'active-btn':''">歌单</div>
          <div @click="gotodjRadio" :class="index==3?'active-btn':''">播客</div>
          <div @click="gotosonger" :class="index==4?'active-btn':''">歌手</div>
          <div @click="gotoalbum" :class="index==5?'active-btn':''">新碟上架</div>
        </div>
       
      </div>
      <div class="menu-line"></div>
    </header>
</template>

<script>
export default {
 
 data() {
 return {
   index:0
 };
 },
methods:{
   gotoRankPage() {
    this.index=1
      this.$router.push('/rankpage');
    },
    gotohome(){
      this.index=0
      this.$router.push('/findmusic');
    },
    gotomusiclist(){
      this.index=2
        this.$router.push('/playlist');
    },
    gotodjRadio(){
      this.index=3
       this.$router.push('/djRadio');
    },
    gotosonger(){
      this.index=4
      this.$router.push('/songerpage');
    },
    gotoalbum(){
      this.index=5
      this.$router.push('/newalbum');
    }
    
}
};
</script>

<style  scoped>
header {
    min-width: 1800px;
  height: 35px;
}

.nav-menu {
  
  height: 35px;
  background-color: #c20c0c;
  width: 100%;
}

.menu-item {
  margin-left: 520px;
width: 550px;
  height: 35px;
  
  align-items: center;
  display: flex;
  justify-content: space-between;
  color: #fff;
}
.menu-item div{
  cursor: pointer;
  font-size: 12px;
  align-items: center;
  margin: 0 17px;
  padding: 0 13px;
  
}

.menu-line {
  height: 1px;
  width: 100%;
  background-color: #a40011;
}
.active-btn{
  background: #9B0909;
  border-radius: 20px;
  height: 20px;
  
}
</style>