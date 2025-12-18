<template>
    <div class='djradiomusic'>
        <img :src="img" alt="">
        <div class="music-title">
            <div class="title">{{ title }}</div>
            <div class="desc">{{ desc }}</div>
        </div>
    </div>
</template>

<script>
export default {

    components: {},
    props: {
        img:{
            type:String,
            default:'无'
        },
          title:{
            type:String,
            default:'无'
        }
        ,
          desc:{
            type:String,
            default:'无'
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

<style lang="less" scoped>
.djradiomusic {
    width: 435px;
    height: 120px;
    padding: 30px 0;
    margin-left: 30px;
    display: flex;

    .music-title {
        margin-left: 10px;

        .title {
            width: 295px;
            font-size: 18px;
            color: #333;
            margin: 16px 0 20px;
        }

        .desc {
            width: 295px;
            color: #999;
            font-size: 12px;
            margin-bottom: 6px;
        }
    }

}
</style>