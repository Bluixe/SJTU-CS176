<template>
    <!-- <img alt="Image" height="300" width="400" v-lazy:src='"https://raw.githubusercontent.com/Bluixe/cloudimg/main/1650800460011.jpg"' > -->
    <img alt="Image" class="img" v-lazy="image" >
    <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// Vue.use(VueLazyload)

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return {
      image: {
        src: "https://raw.githubusercontent.com/Bluixe/cloudimg/main/1650800460011.jpg",
        // loading: "/src/assets/logo.png"
        loading: "https://raw.githubusercontent.com/Bluixe/cloudimg/main/1650810912391.jpg"
      }
    }
  }
  
}
</script>

<style scoped>
  .img {
    max-width: 600px;
    width: 80vw;
    
  }
</style>