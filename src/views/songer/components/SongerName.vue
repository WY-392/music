<template>
 <div class='songer-name'>
    <div class="songername">{{songername }}</div>
    <div class="icon" v-if="showicon"></div>
 </div>
</template>

<script>
export default {

 components: {},
 props: {
    songername:{
        type:String,
        default:'无'
    },
     showicon:{
        type:Boolean,
        default:false
    }
 },
 data() {
 return {
 data: ''
 };
 },
 computed: {},
 watch: {},
 created() {},
 mounted() {},
 methods: {
 }
};
</script>

<style scoped>
.songer-name{
    display: flex;
    width: 130px;
    height: 30px;
    margin-left: 17px;
   font-size: 12px;
   color: #000;
     .icon {
            width: 17px;
            height: 18px;
            background: url('@/assets/icon.png');
            background-position: 0 -740px;
        }
}
</style>