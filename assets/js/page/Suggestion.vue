<template>
    <div>
        <Header :title="title" />
        <main class="container">
            <router-view></router-view>
        </main>
    </div>
</template>
<script>
  export default{
    data(){
      const title = require('../title')('suggestion')[this.$route.name];
      return {
        title: `Suggestion - ${title}`
      }
    },
    components: {
      Header: require('../component/Header.vue')
    }
  }
</script>
