<!-- r热门主播 -->
 <template>
  <div class='container'>
    <div :class="['hot-host-container',flag==1?'rank-container':'']" >
    <img :src="img" alt="">
    <div class="host-info">
      <div :class=" ['host-name',flag==1?'rank-title':'']" >{{hostname  }}</div>
      <div :class="['host-like',flag==1?'ranknew':'']">{{ like }}</div>
    </div>
    </div>
  </div>
 </template>
 
 <script>
 export default {
 
  props: {
    img:{
      type:String,
      default:'',
    },
     hostname:{
      type:String,
      default:'',
    },
 like:{
      type:String,
      default:'',
    },
    flag:{
      type:Number,
      default:0,
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
 .hot-host-container{
    display: flex;
 }
  .rank-container{
    padding: 10px 0 10px 20px;
 }
 .hot-host-container img{
  width: 40px;
  height: 40px;
 }
 .host-name{
  font-size: 12px;
  color: #000;
   height: 21px;
   
 }
  .host-name:hover{
text-decoration: underline;
  }
 .host-info{
  margin-left: 10px;
 }

 .host-like{
    font-size: 12px;
  color: #666;
  height: 21px;
  width: 160px;
  -webkit-line-clamp: 1; 
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.5;
 }
 .rank-title{
      color: #000;
      font-size: 12px;
 }
 .ranknew{
  color: #000;
      font-size: 12px;
          color: #999;
 }
 </style>