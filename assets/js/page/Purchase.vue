<template>
    <row>
        <div class="col s12">
            <iframe :src="form">Loading&amp;#8230;</iframe>
        </div>
    </row>
</template>
<style scoped>
    iframe {
        height: 1500px;
        border: 0;
        margin: 0;
    }
</style>
<script>
  export default{
    data(){
      return {
        form: 'https://nodejs.org'
      }
    },
    components: {
      row: require('../component/Row.vue')
    }
  }
</script>
