<!-- 热歌榜音乐列表 -->
<template>
    <div class='hot-music'>
        <img :src="musicimg" alt="" class="music-photo">
        <div class="music-title">
            <span class="title-text">
                 <slot name="hot-icon"></slot>
                 <slot name="title"></slot>
            </span>
        </div>
        <div class="min-title-container">
            <slot name="min-title"></slot>
        </div>
        <div class="music-date">
            <img src="../assets/erji.png" alt="" class="ear-icon">
            <div class="views-music">{{ viewsnum }}万</div>
            <img src="../assets/bofang.png" alt="" class="view-icon">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        
        viewsnum: {
            type: Number,
            default: 0
        },
        musicimg: {
            type: String,
            default: 'http://p2.music.126.net/IvQtaw0emx2uZeQwj0Y45g==/109951172283745920.jpg?param=140y140',
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
.hot-music {
    width: 140px;
    position: relative;
   
}
.music-photo {
    width: 140px;
    height: 140px;
}
.title-text {
    display: flex;
    width: 140px;
    font-size: 14px;
    cursor: pointer;
    text-decoration-color: #000;
    
 
}

.min-title-container{
    display: flex;
    font-size: 12px;
    color: #666;
      
}
.music-title{
    width: 140px;
}
.music-date {
    width: 140px;
    height: 27px;
    display: flex;
    background-color: #ccc;
    position: absolute;
    z-index: 999;
    top: 113px;
    opacity: 0.8;
    align-items: center;
}

.ear-icon {
    margin-left: 10px;
    margin-right: 5px;
    width: 11px;
    height: 14px;
}

.views-music {
    font-size: 12px;
    color: #333;
    line-height: 27px;
    height: 27px;
    width: 50px;
}

.view-icon {
    width: 16px;
    height: 14px;
    margin-left: 38px;
}

.title-text:hover {
    text-decoration: underline;
    text-decoration-color: #000;
}
</style>