<!-- 入驻歌手列表 -->
<template>
    <div class="AutorList">
        <div class="Autor-list-container" v-for="(item) in autorArr" :key="item.autorname">
            <img :src="item.Autorimg" alt="">
            <div class="autor-info-container">
                <div class="autor-name">{{ item.autorname }}</div>
                <div class="autor-info">{{ item.autorinfo }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        autorArr:{
            typeof:Array,
            default:['无']
        },
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
    .AutorList{
        height: 380px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .AutorList>.Autor-list-container:first-child{
        padding-top: 15px;
    }
.Autor-list-container {
    height: 380px;
    display: flex;
   
    width: 210px;
    height: 60px;
}

.autor-info-container {
    width: 148px;
    height: 60px;
    padding-left: 14px;
    border: 1px solid #e9e9e9;
    background-color: #f5f5f5;
}

.autor-name {
    color: #333;
    font-size: 14px;
    margin-top: 8px;
    width: 120px;
    height: 20px;
}

.autor-info {
    margin-top: 8px;
    color: #666;
    font-size: 12px;
    width: 120px;
    height: 17px;
     -webkit-line-clamp: 1; 
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.5;
}
</style>