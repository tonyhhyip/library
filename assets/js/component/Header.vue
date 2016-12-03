<template>
    <header>
        <Navbar></Navbar>
        <div v-if="home" class="parallax-container">
            <div id="cover-title">
                <h1>SPYC Library</h1>
            </div>
            <div class="parallax"><img :src="src"></div>
        </div>
    </header>
</template>
<script>
  import Navbar from './Navbar.vue'
  export default{
    components:{
      Navbar
    },
    data() {
      return {
        src: './images/cover.jpg',
        home: this.$route.name === 'home'
      }
    },
    mounted: function () {
      if (this.home)
        $('.parallax').parallax();
    }
  }
</script>
