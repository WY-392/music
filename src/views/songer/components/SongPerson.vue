<template>
    <div class='songperson'>
        <div class="songer">
            <img :src="img" alt="">
            <div class="songer-name">
                <div class="name">{{ songername }}</div>
                <div class="icon" v-if="showicon"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    components: {},
    props: {
        img:{
            type:String,
            default:'无图片'
        },
         songername:{
            type:String,
            default:'未知'
        }, 
        showicon:{
            type:Boolean,
            default:false
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

<style lang="less" scoped>
.songperson {
    padding: 0 0 30px 17px;

    .songer {
        width: 130px;
        height: 130px;
    }

    .songer-name {
        font-size: 12px;
        color: #000;
        display: flex;
        width: 130px;
        justify-content: space-between;

        .icon {

            width: 17px;
            height: 18px;
            background: url('@/assets/icon.png');
            background-position: 0 -740px;
        }
    }
}
</style>