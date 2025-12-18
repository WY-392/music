<template>
  <div id="homepage">
   <NavMenu></NavMenu>
    <main>
     <router-view />
    </main>
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu.vue';




export default {
  components: {
    NavMenu,
   
  },
}
  </script>