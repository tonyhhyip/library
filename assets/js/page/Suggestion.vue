<template>
    <div>
        <Header />
        <main class="container">
            <router-view></router-view>
        </main>
    </div>
</template>
<script>
  export default{
    components: {
      Header: require('../component/Header.vue')
    }
  }
</script>
