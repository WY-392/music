<template>
    <div class='app'>
        <div class="ranklist-container">
            <div class="ranklist-head">
                <img :src="rankimg" alt="">
                <div class="rank-icon-container">
                    <div class="class-name">{{ rankname }}</div>
                    <div class="play-icon">
                        <div class="play"></div>
                        <div class="addfile"></div>
                    </div>
                </div>
            </div>
            <div class="rankmusic-list">
                <div class="rankMusic-item" v-for="(item) in arrlist" :key="item.title">
                    <div class="Number">{{ item.num }}</div>
                    <div :class="['music-title',item.flag==1?'activemusic':'']">{{ item.title }}</div>
                    <div :class="item.flag==1?'musicplay-icons':'noshow-icon'">
                        <div class="play-small"></div>
                        <div class="add"></div>
                        <div class="addfile-small"></div>
                    </div>
                </div>
                <div class="rankMusic-item">
                    <div class="lookAll">查看全部></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    props: {
        rankname: {
            type: String,
            default: '未知'
        },
        rankimg: {
            type: String,
            default: '无图片',
        },
        arrlist: {
            type: Array,
            default: () => [],
        }
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
.ranklist-container {
    border: 1px solid #ccc;
}

.ranklist-head {
    display: flex;
    padding-top: 20px;
    padding-left: 19px;
    background-color: #F4F4F4;
    width: 209px;
    height: 120px;
}

.ranklist-head img {
    width: 80px;
    height: 80px;
}

.rank-icon-container {
    margin-left: 10px;
    margin-top: 6px;
}

.class-name {
    font-size: 14px;
    font-weight: 600;

}
.class-name:hover{
    text-decoration: underline;
}
.play-icon {
    display: flex;
}
.activemusic:hover{
 text-decoration: underline;
}
.play,
.addfile {
    width: 22px;
    height: 22px;
}

.play {
    margin-right: 10px;
    background: url('../assets/index.png') no-repeat 0 9999px;
    background-position: -267px -205px;
}

.addfile {

    background: url('../assets/index.png') no-repeat 0 9999px;
    background-position: -300px -205px;
}

.play-small {
    width: 17px;
    height: 17px;
    margin-right: 10px;
    background: url('../assets/index.png') no-repeat 0 9999px;
    background-position: -267px -268px;
}

.addfile-small {
    width: 17px;
    height: 17px;
    background: url('../assets/index.png') no-repeat 0 9999px;
    background-position: -297px -268px;
}

.add {
    width: 17px;
    height: 17px;
    background: url('../assets/icon.png') no-repeat 0 9999px;
     background-position: 0 -700px;
    
}
.play-small,.addfile-small,.add{
    margin-top: 8px;
    
}
.musicplay-icons{
    display: flex;
    opacity: 0;
}
.rankMusic-item:hover .musicplay-icons{
    cursor: pointer;
    opacity: 1;
}
.noshow-icon{
    display: none;
}
.rankMusic-item {
    display: flex;
    padding-left: 19px;
}

.Number {
    width: 35px;
    height: 32px;
    font-size: 16px;
    text-align: center;
    line-height: 32px;
}

.music-title {
    font-size: 12px;
    height: 32px;
    line-height: 32px;
    overflow: hidden;
    width: 100px;
        color: #bbb;
}
.activemusic{
    color: #000;
}
.rankmusic-list>.rankMusic-item:nth-child(odd) {
    background-color: #E8E8E8;
}

.rankmusic-list>.rankMusic-item:nth-child(even) {
    background-color: #f4f4f4;
}

.rankmusic-list>.rankMusic-item:nth-child(1)>.Number {
    color: #c10d0c;
    ;
}

.rankmusic-list>.rankMusic-item:nth-child(2)>.Number {
    color: #c10d0c;
    ;
}

.rankmusic-list>.rankMusic-item:nth-child(3)>.Number {
    color: #c10d0c;
    ;
}

.lookAll {
    width: 170px;
    margin-right: 32px;
    text-align: right;
    height: 32px;
    font-size: 14px;
    line-height: 32px;
}
</style>
