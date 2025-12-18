<!-- 新碟上架音乐列表 -->
<template>
    <div class='app'>
        <div :class="['newMusic-item',flag==1?'newMusic-width':'']">
            <div :class="['newmusic-img',flag==1?'changewidth':'']">
                <img :src="newMusicicon" alt="">
            </div>
            <div class="music-title">{{ title }}</div>
            <div class="music-author">{{ authorname }}</div>
        </div>
    </div>
</template>

<script>
export default {

    props: {
        newMusicicon: {
            type: String,
            default: 'http://p2.music.126.net/IvQtaw0emx2uZeQwj0Y45g==/109951172283745920.jpg?param=140y140'
        },
        title: {
            type: String,
            default: '无',
        },
        authorname: {
            type: String,
            default: '无',
        },
        flag:{
            type:Number,
            default:0
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
.newMusic-item {
    width: 118px;
    height: 150px;
}
.newMusic-width{
    width: 153px;
    height: 180px;
}
.newmusic-img {
    width: 118px;
    height: 100px;
    background: url('../assets/coverall.png') no-repeat;
    width: 118px;
    height: 100px;
    background-position: 0 -570px;
}
.changewidth{
     width: 153px;
    height: 130px;
    background: url('../assets/coverall.png') no-repeat;
    
        background-position: 0 -845px;
}
.changewidth img{
      width: 130px;
    height: 130px;
}
.music-title,
.music-author {
    width: 100px;
    font-size: 12px;
    color: #000;
}
.music-author{
     height: 20px;
    color: #666;
}
.music-title {
    width: 100px;
    font-weight: 500;
    height: 20px;
     display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1; /* 显示3行，超出隐藏 */
  overflow: hidden;
  text-overflow: ellipsis;
}
.music-title:hover{
    text-decoration:underline;
}
.music-author:hover{
text-decoration:underline;
}
</style>