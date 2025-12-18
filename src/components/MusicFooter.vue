<!-- 网易云底部 -->
<template>
    <div class='footer-container'>
        <div class="music-Certification">
            <div class="Certification-item">
                <div class="Certification-icon"></div>
                <div class="music-font">音乐开发平台</div>
            </div>
            <div class="Certification-item">
                <div class="Certification-icon2"></div>
                <div class="music-font">云村交易所</div>
            </div>
            <div class="Certification-item">
                <div class="Certification-icon3"></div>
                <div class="music-font">X StudioAI歌手</div>
            </div>
            <div class="Certification-item">
                <div class="Certification-icon4"></div>
                <div class="music-font">用户认证</div>
            </div>
             <div class="Certification-item">
                <div class="Certification-icon5"></div>
                <div class="music-font">AI免费写歌</div>
            </div>
            <div class="Certification-item">
                <div class="Certification-icon6"></div>
                <div class="music-font">云推歌</div>
            </div>
            <div class="Certification-item">
                <div class="Certification-icon7"></div>
                <div class="music-font">赞赏</div>
            </div>
        </div>
        <div class="contact">
          <div class="contact-content">
             <div>服务条款</div>
           <div>|</div>
           <div>隐私政策</div>
           <div>|</div>
           <div>儿童隐私政策</div>
           <div>|</div>
           <div>版权投诉</div>
           <div>|</div>
           <div>投资者关系</div>
           <div>|</div>
           <div>广告合作</div>
           <div>|</div>
           <div>联系我们</div>
          </div>
          <div class="report">
            <div >廉正举报</div>
            <div>不良信息举报邮箱: 51jubao@service.netease.com</div>
          </div>
          <div class="info">互联网宗教信息服务许可证：浙（2022）0000120
            增值电信业务经营许可证：浙B2-20150198粤B2-20090191-18  
            浙ICP备15006616号-4  工业和信息化部备案管理系统网站
          </div>
          <div class="copyright">
           <span>网易公司版权所有©1997-2025</span>
           <span>杭州乐读科技有限公司运营：</span>
           <span>浙网文[2024] 0900-042号</span>
           <img src="../assets/police.png" alt="">
           <span>浙公网安备 33010802013307号</span>
           <span>算法服务公示信息</span>
          </div>
        </div>
    </div>
</template>

<script>
export default {
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
.footer-container {
    width: 100%;
    height: 326px;
    border-top: 1px solid rgb(211, 211, 211);
    background: rgb(242, 242, 242);
}

.music-Certification {
    display: flex;
    width: 800px;
    height: 72px;
    padding-top: 33px;
    margin: 0 auto;
    justify-content: space-between;
}

.Certification-item {
    width: 100px;
    height: 72px;
}

.Certification-icon {
    width: 45px;
    height: 45px;
    background: url('../assets/foot_enter_new2.png') -170px -5px no-repeat;
    background-size: 220px 220px;
    margin: 0 auto;
}

.Certification-icon2 {
    width: 45px;
    height: 45px;
    background: url('../assets/foot_enter_new2.png');
    background-size: 220px 220px;
    background-position: -5px -170px;
    margin: 0 auto;
}

.Certification-icon3 {
    width: 45px;
    height: 45px;
    background: url('../assets/xStudio.png');
    background-size: 45px;
    margin: 0 auto;
}

.Certification-icon4{
    width: 45px;
    height: 45px;
    background: url('../assets/foot_enter_new2.png')  0% 0% / 220px 220px no-repeat;
    background-position: -60px -60px;
    margin: 0 auto;
}
.Certification-icon5 {
    width: 45px;
    height: 45px;
    background: url('../assets/aiLogo.png');
    background-size: 45px;
    margin: 0 auto;
}
.Certification-icon6{
    width: 45px;
    height: 45px;
    background: url('../assets/cloudSong.png');
    background-size: 45px;
    margin: 0 auto;
}
.Certification-icon7 {
    width: 45px;
    height: 45px;
    background: url('../assets/foot_enter_new2.png') 0% 0% / 220px 220px no-repeat;;
background-position: -170px -115px;
    
    margin: 0 auto;
}
.music-font {
    width: 100px;
    margin-top: 10px;
    font-weight: 400;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
}
.contact{
    width: 980px;
    text-align: center;
    height: 101px;
    line-height: 24px;
    margin: 0 auto;
    justify-content: space-between;
    color: rgb(102, 102, 102);
    margin-top: 60px;
    font-size: 12px;
}
.contact-content{
    width: 540px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
.report{
    width: 330px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
}
.info{
    width: 980px;
    margin: 0 auto;
}
.copyright{
     width: 760px;
    margin: 0 auto;
    display: flex;
}
.copyright img{
    width: 14px;
    height: 14px;
    margin: auto 0;
}
.copyright span{
    margin-right: 4px;
}
</style>