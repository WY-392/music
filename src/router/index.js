import Vue from "vue";
import Router from 'vue-router';
import RankPage from "@/views/RankPage/RankPage.vue";
import DownLoad from "@/views/downLoad/DownLoad.vue";
import MyMusic from "@/views/myMusic/MyMusic.vue";
import PlayList from "@/views/PlayListPage/PlayList.vue";
import FriendPage from "@/views/friendPage/FriendPage.vue";
import HomePage from "@/views/Home/HomePage.vue";
import FindMusic from "@/views/Home/FindMusic.vue";
import DjRadio from "@/views/djRadio/DjRadio.vue";
import SongerPage from "@/views/songer/SongerPage.vue";
import NewAlbum from "@/views/album/NewAlbum.vue";


Vue.use(Router)

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/homepage',
    },

    {
      path: '/homepage',
      component: HomePage,
      redirect: '/findmusic',
      children: [{
        path: '/rankpage',
        component: RankPage
      },
      {
        path: '/findmusic',
        component: FindMusic
      },
      {
        path: '/playlist',
        component: PlayList
      },
      {
        path: '/djRadio',
        component: DjRadio
      },
      {
        path: '/songerpage',
        component: SongerPage
      },
       {
        path: '/newalbum',
        component: NewAlbum
      },
    ]
    },
    {
      path: '/friendPage',
      component: FriendPage
    },

    {
      path: '/myMusic',
      component: MyMusic
    },
    {
      path: '/downLoad',
      component: DownLoad
    },

  ]
})


export default router