<template>
    <div>
        <Header :title="title" />
        <main class="container">
            <router-view></router-view>
        </main>
    </div>
</template>
<script>
  const titles = require('../title')('suggestion');
  export default{
    data(){
      const title = titles[this.$route.name];
      return {
        title: `Suggestion - ${title}`
      }
    },
    components: {
      Header: require('../component/Header.vue')
    },
    watch: {
      '$route': function () {
        this.title = `Suggestion - ${titles[this.$route.name]}`;
      }
    }
  }
</script>
