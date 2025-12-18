<template>
    <div class='rankitem'>
        <div class="rank-content">
            <img src="http://p2.music.126.net/rIi7Qzy2i2Y_1QD7cd0MYA==/109951170048506929.jpg?param=150y150" alt=""
                class="rank-img">
            <div class="rank-info">
                <div class="rank-name">{{ rankname }}</div>
                <div class="changeinfo">
                    <div class="time-icon"></div>
                    <div class="change-time">{{ changedate }}</div>
                    <div class="change-now">{{ changetime }}</div>
                </div>
                <div class="icons">
                    <div class="play-icons">
                        <div class="play-icon-container">
                            <div class="play-icon"></div>
                            <div class="play-text">播放</div>
                        </div>
                        <div class="play-background"></div>
                        <div class="add-btn"></div>
                    </div>
                    <div class="favorite">
                        <div class="favorite-icon">
                            <div class="favorite-num">({{ favoritenum }})</div>
                        </div>
                        <div class="favorite-horn"> 
                        </div>
                    </div>
                    <div class="forward">
                        <div class="forward-back">
                            <div class="forword-num">({{ forwordnum }})</div>
                        </div>
                         <div class="favorite-horn"> 
                        </div>
                    </div>
                    <div class="download">
                        <div class="download-back">
                                 <div class="download-text">下载</div>
                        </div>
                        <div class="favorite-horn"> </div>
                    </div>
                    <div class="comment">
                         <div class="comment-back">
                            <div class="comment-num">({{ commentnum }})</div>
                         </div>
                          <div class="favorite-horn"> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    components: {},
    props: {
         rankname:{
            type:String,
            default:'无'
           },
            changedate:{
            type:String,
            default:'无'
           },
            changetime:{
            type:String,
            default:'无'
           },
             favoritenum:{
            type:Number,
            default:0
           },
             forwordnum:{
            type:Number,
            default:0
           },
             commentnum:{
            type:Number,
            default:0
           },
    },
    data() {
        return {
          
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
.rank-content {
    width: 660px;
    height: 155px;
    padding: 40px 0 40px 0;
    display: flex;
}

.rank-info {
    margin-left: 30px;
}

.rank-img {
    width: 150px;
    height: 150px;
    padding: 3px;
    border: 1px solid #ccc;
}

.rank-name {
    margin-top: 20px;
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
    font-size: 20px;
    line-height: 24px;
    font-weight: normal;
}

.changeinfo {
    width: 473px;
    height: 35px;
    margin-top: 10px;
    display: flex;
    margin-bottom: 20px;
}

.time-icon {
    width: 13px;
    height: 13px;
    margin: 5px 0 0 3px;
    background: url('@/assets/icon.png') no-repeat 0 9999px;
    background-position: -18px -682px;
}

.change-time {
    color: #666;
    margin-left: 6px;
    font-size: 12px;
}

.change-now {
    color: #999;
    margin-left: 6px;
    font-size: 12px;
}

.icons {
    display: flex;
    width: 483px;
    height: 31px;
}

.play-icons {
    display: flex;

}

.play-icon-container {
    width: 66px;
    height: 31px;
    background: url('@/assets/button2.png') no-repeat 0 9999px;
    background-position: 0 -387px;
display: flex;
}

.play-background {
    width: 5px;
    height: 31px;
    
    background: url('@/assets/button2.png') no-repeat 0 9999px;
    background-position: right -428px;
}

.play-icon {
    width: 20px;
    height: 18px;
    margin: 6px 2px 2px 5px;
    background: url('@/assets/button2.png') no-repeat 0 9999px;
    background-position: 0 -1622px;
}

.play-text {
    width: 30px;
    height: 15px;
    font-size: 12px;
    text-align: center;
    line-height: 31px;
    color: #ffffff;
}
.add-btn{
    width: 31px;
    height: 31px;
    padding: 0 5px 0 0;
     background: url('@/assets/button2.png') no-repeat 0 9999px;
    background-position: 0 -1588px;
}
.favorite{
    display: flex;
}
.favorite-icon{
    width: 88px;
    height: 31px;
      background: url('@/assets/button2.png') no-repeat 0 9999px;
      background-position: 0 -977px;
}
.favorite-horn{
      width: 5px;
    height: 31px;
    background: url('@/assets/button2.png') no-repeat 0 9999px;
      background-position: right -1020px;
}
.favorite-num,.forword-num{
    width: 88px;
    height: 31px;
    margin-left: 10px;
    font-size: 12px;
    text-align: center;
    line-height: 31px;
    color: black;
    font-weight: 400;
}
.download-text,.comment-num{
    width: 65px;
    height: 31px;
    margin-left: 10px;
    font-size: 12px;
    text-align: center;
    line-height: 31px;
    color: black;
    font-weight: 400;
}
.comment-num{
margin-left: 20px;
}
.forward,.download,.comment{
    display: flex;
}
.forward-back{
     width: 88px;
    height: 31px;
      background: url('@/assets/button2.png') no-repeat 0 9999px;
     background-position: 0 -1225px;
}
.download-back{
         width: 54px;
    height: 31px;
      background: url('@/assets/button2.png') no-repeat 0 9999px;
    background-position: 0 -2761px;
}
.comment-back{
     width: 81px;
    height: 31px;
      background: url('@/assets/button2.png') no-repeat 0 9999px;
    background-position: 0 -1465px;
}
</style>