<template>
 <div class='App'>
     <MusicHeader></MusicHeader>
  <router-view />
<MusicFooter></MusicFooter>
 </div>
</template>

<script>
import MusicHeader from '@/components/MusicHeader.vue';
import MusicFooter from '@/components/MusicFooter.vue';

export default {

 components: {
    MusicHeader,
    MusicFooter
 },
 props: {},
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

</style>