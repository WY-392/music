<template>
    <div class='djradio'>
        
           <div class="djradio-container">
             <div class="card-select">
                <div class="prv-btn" @click="prvcard"></div>
                <div class="card-list">
                    <div class='card-item' v-for="num in 18" :key="num" v-show="pageselect==true">
                        <div class="card-icon"></div>
                        情感
                    </div>
                    <div class='card-item' v-for="num in 10" :key="'key'+num" v-show="pageselect==false">
                        <div class="card-icon"></div>
                        情感
                    </div>
                    
                </div>
                <div class="next-btn" @click="nextcard"></div>
            </div>
          <div class="card-select-container">
              <div :class="['page-select',this.pageselect==true?'activepage':'']" @click="pageselect=true"></div>
            <div :class="['page-select',this.pageselect==false?'activepage':'']" @click="pageselect=false"></div>
          </div>

           <!-- 左右布局 -->
         <div class="music-list-container">
            <!-- 左边盒子 -->
            <div class="recommend-music">
                <TitleMusic title="推荐节目">
                    <div class="more-btn">更多 ></div>
            </TitleMusic>
               <DjradioList :recommendmusic="recommendmusicList">
                <template #djradio-icon>
                    <div class="music-djradio-icon">音乐播客</div>
                </template>
               </DjradioList>
            </div>

            <!-- 右边盒子 -->
             <div class="program-container">
               <TitleMusic title="节目排行榜">
            <div class="more-btn">更多 ></div>
        </TitleMusic>
               <div class="program-list">
                <DjradioList :recommendmusic="recommendmusicList">
                <template #num="{index}">
                    <div class="num-container">
                        <div class="num-text">{{ index }} </div>
                        <div class="data-icon">
                             <div class="up-icon"></div>
                             <div class="data">80</div>
                        </div>
                    </div>
                </template>
                <template #progess>
                    <div class="progess-bar"></div>
                </template>
               </DjradioList>
               </div>

             </div>
         </div>

            <div class="music-djredio">
               <div class="music-title">
                 <TitleMusic title="音乐播客·电台">
                    <div class="more-btn">更多 ></div>
                 </TitleMusic>
                <div class="music-list">
                    <DjradioMusic v-for="(item,index) in musicitem" :key="index"
                    :img="item.img"
                    :title="item.title"
                    :desc="item.desc"></DjradioMusic>
                </div>
               </div>
            </div>

              <div class="music-djredio">
               <div class="music-title">
                <TitleMusic title="生活·电台">
                    <div class="more-btn">更多 ></div>
                 </TitleMusic>
                <div class="music-list">
                    <DjradioMusic v-for="(item,index) in musicitem" :key="index"
                    :img="item.img"
                    :title="item.title"
                    :desc="item.desc"></DjradioMusic>
                </div>
               </div>
            </div>

              <div class="music-djredio">
               <div class="music-title">
                 <TitleMusic title="情感·电台">
                    <div class="more-btn">更多 ></div>
                 </TitleMusic>
                <div class="music-list">
                    <DjradioMusic v-for="(item,index) in musicitem" :key="index"
                    :img="item.img"
                    :title="item.title"
                    :desc="item.desc"></DjradioMusic>
                </div>
               </div>
            </div>

              <div class="music-djredio">
               <div class="music-title">
                  <TitleMusic title="创作翻唱·电台">
                    <div class="more-btn">更多 ></div>
                 </TitleMusic>
                <div class="music-list">
                    <DjradioMusic v-for="(item,index) in musicitem" :key="index"
                    :img="item.img"
                    :title="item.title"
                    :desc="item.desc"></DjradioMusic>
                </div>
               </div>
            </div>
                <div class="music-djredio">
               <div class="music-title">
                 <TitleMusic title="知识·电台">
                    <div class="more-btn">更多 ></div>
                 </TitleMusic>
                <div class="music-list">
                    <DjradioMusic v-for="(item,index) in musicitem" :key="index"
                    :img="item.img"
                    :title="item.title"
                    :desc="item.desc"></DjradioMusic>
                </div>
               </div>
            </div>
           </div>
    </div>
</template>

<script>
    import DjradioList from './component/DjradioList.vue';
    import TitleMusic from '@/components/TitleMusic.vue';
import DjradioMusic from './component/DjradioMusic.vue';
export default {
   
    components: {
        DjradioList,
        TitleMusic,
        DjradioMusic
    },
    props: {},
    data() {
        return {
            pageselect:true,
            musicitem:[{
               img:'http://p2.music.126.net/t50y30-xlyf0it1rQKR3qw==/109951172401855541.jpg?param=200y200',
               title:'民谣时光',
               desc:'跟随翟翊，一同走进民谣的发展脉络'
            },
        {
               img:'http://p1.music.126.net/uFTzvFBkbTiK86AgiptL2w==/109951172237383791.jpg?param=200y200',
               title:'杨丞琳·有且',
               desc:'@杨丞琳的播客，遇见独一无二的自己'
            },
        {
               img:'http://p2.music.126.net/t50y30-xlyf0it1rQKR3qw==/109951172401855541.jpg?param=200y200',
               title:'民谣时光',
               desc:'跟随翟翊，一同走进民谣的发展脉络'
            },
        {
               img:'http://p1.music.126.net/uFTzvFBkbTiK86AgiptL2w==/109951172237383791.jpg?param=200y200',
               title:'杨丞琳·有且',
               desc:'@杨丞琳的播客，遇见独一无二的自己'
            }],
            recommendmusicList:[{
                id:1,
                img:'http://p1.music.126.net/-bubSAcLpTAG13dBnu9RwA==/109951172056321971.jpg?param=40x40',
                title:'跟着交响游中国：中国西北地区篇 （4）1111111111111111111111111111',
                name:'交响学人'
            },{
                id:2,
                img:'http://p1.music.126.net/-bubSAcLpTAG13dBnu9RwA==/109951172056321971.jpg?param=40x40',
                title:'跟着交响游中国：中国西北地区篇 （4）',
                name:'交响学人'
            },{
                 id:4,
                img:'http://p1.music.126.net/-bubSAcLpTAG13dBnu9RwA==/109951172056321971.jpg?param=40x40',
                title:'跟着交响游中国：中国西北地区篇 （4）',
                name:'交响学人'
            },
        {
             id:5,
                img:'http://p1.music.126.net/-bubSAcLpTAG13dBnu9RwA==/109951172056321971.jpg?param=40x40',
                title:'跟着交响游中国：中国西北地区篇 （4）',
                name:'交响学人'
            },
        {
             id:6,
                img:'http://p1.music.126.net/-bubSAcLpTAG13dBnu9RwA==/109951172056321971.jpg?param=40x40',
                title:'跟着交响游中国：中国西北地区篇 （4）',
                name:'交响学人'
            },
        {
             id:7,
                img:'http://p1.music.126.net/-bubSAcLpTAG13dBnu9RwA==/109951172056321971.jpg?param=40x40',
                title:'跟着交响游中国：中国西北地区篇 （4）',
                name:'交响学人'
            }]
        };
    },
    computed: {},
    watch: {},
    created() { },
    mounted() { },
    methods: {
        prvcard(){
this.pageselect=!this.pageselect
        },
        nextcard(){
this.pageselect=!this.pageselect
        }
    }
};
</script>

<style lang="less" scoped>
@background: #f5f5f5;

body {
    width: 100%;
    margin: 0;
    padding: 0;
}

.djradio {
    background-color: @background;
}

.djradio-container {
    margin: 0 auto;
    width: 900px;
    background-color: #fff;
    padding: 40px;
}

.card-select {
    display: flex;
    width: 980px;
    height: 193px;
    margin-left: -40px;

    .prv-btn {
        width: 20px;
        margin: auto 10px;
        height: 30px;
        opacity: 0.25;
        background: url('@/assets/radio_slide.png');
        background-position: 0 -30px;
    }

    .card-list {
        display: flex;
        flex: 1;
        justify-content: space-between;
        flex-wrap: wrap;

        .card-item {
            width: 100px;
            text-align: center;
            margin-top: -3px;
           font-size: 12px;
           color: #888888;
            .card-icon {
                margin: 2px 11px 0px 20px;
                width: 48px;
                height: 48px;
                background: url('http://p2.music.126.net/icULXvfqWJMFvcjTrXSLeA==/109951165406422565.jpg');
                background-position: 0 0;
            }
        }
    }

    .next-btn {
        margin: 0 auto;
        width: 20px;
         margin: auto 10px;
        height: 30px;
        background: url('@/assets/radio_slide.png');
        background-position: -30px -30px;
         opacity: 0.25;
    }
}
  .card-select-container{
        display: flex;
        height: 30px;
        width: 100px;
        margin: 0 auto;
       
        .page-select{
            width: 20px;
            height: 20px;
             background: url('@/assets/radio_slide.png');
             background-position: 0px 0px;
         
        }
        .activepage{
              width: 20px;
            height: 20px;
             background: url('@/assets/radio_slide.png');
                 background-position: -30px 0;
        }
    }
    .music-list-container{
        display: flex;
        justify-content: space-between;
    }
    .recommend-music{
        width: 426px;
    }
    .program-container{
        width: 426px;
    }
    .more-btn{
        font-size: 12px;
        height: 41px;
        margin-top: 8px;
        line-height: 41px;
        color: #666;
    }
.music-djradio-icon{
    width: 63px;
    height: 19px;
    margin: auto 0;
    margin-left: 30px;
        border: 1px solid #999;
        color: #999;
        text-align: center;
}
.num-container{
    width: 47px;
    height: 30px;
}
.num-text{
    font-size: 14px;
    text-align: center;
}
.data-icon{
    display: flex;
}
.up-icon{
    margin-left: 10px;
    margin-top: 5px;
    margin-right: 3px;
    width: 6px;
    height: 6px;
    background: url('@/assets/icon.png');
background-position: -74px -304px;
}
.data{
    text-align: center;
font-size: 10px;
color: #ba2226;
}
.progess-bar{
    width: 92px;
    height: 8px;
        padding: 0 0 0 4px;
        margin-top: 13px;
            margin-left: -4px;
            background:url('@/assets/table.png');
                background-position: 0 -304px;
}
.music-djredio{
    width: 100%;
}
.music-title{
    margin-top: 40px;
}
.music-list{

    width: 940px;
    margin-left: -30px;
    display: flex;
    flex-wrap: wrap;
}
</style>