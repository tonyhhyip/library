<template>
    <div>
        <top />
        <main class="container">
            <router-view></router-view>
        </main>
    </div>
</template>
<script>
  export default{
    components: {
      top: require('../component/Header.vue')
    }
  }
</script>
