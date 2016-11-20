<template>
    <div>
        <Header :title="title" />
        <main class="container">
            <router-view></router-view>
        </main>
    </div>
</template>
<style>

</style>
<script>
  export default{
    components: {
      Header: require('../component/Header.vue')
    },
    computed: {
      title() {
        const name = {
          aim: 'Aim',
          rule: 'Rule'
        };
        return `About Us - ${name[this.$route.path.replace('/intro/', '')]}`
      }
    }
  }
</script>
