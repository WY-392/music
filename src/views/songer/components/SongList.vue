<template>
    <div class='songerlist'>
        <div class="title">{{ title }}</div>
        <div class="songerclass-container" v-for="(item, index) in songerclass" :key="index">
            <div class="songerclass">{{ item }}</div>
        </div>
    </div>
</template>

<script>
export default {

    components: {},
    props: {
        title: {
            type: String,
            default: '无'
        },
        songerclass: {
            type: Array,
            default: () => ['无']
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
.title {
    font-size: 16px;
    color: #333;
    margin-left: 14px;
    font-weight: bold;
    font-family: "Microsoft Yahei";
}

.songerclass {
    font-size: 12px;
    width: 133px;
    height: 29px;
    background: url('@/assets/singer.png');
    background-position: 0 0px;
    line-height: 29px;
    padding-left: 27px;

}
</style>
