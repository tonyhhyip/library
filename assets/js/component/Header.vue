<template>
    <header>
        <Navbar></Navbar>
        <div class="parallax-container">
            <div id="cover-title">
            <h1>SPYC Library</h1>
            <h2 v-if="title">{{ title }}</h2>
            </div>
            <div class="parallax"><img :src="src"></div>
        </div>
    </header>
</template>
<script>
  import Navbar from './Navbar.vue'
  export default{
    props: ['title'],
    components:{
      Navbar
    },
    data() {
      return {
        src: './images/cover.jpg'
      }
    },
    mounted: function () {
      $('.parallax').parallax();
    }
  }
</script>
