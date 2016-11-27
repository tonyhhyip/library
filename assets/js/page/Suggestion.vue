<template>
    <div>
        <Header :title="title" />
        <main class="container">
            <row>
                <div class="col s12">
                </div>
            </row>
        </main>
    </div>
</template>
<script>
  export default{
    data(){
      return {
        title: `Suggestion`
      }
    },
    components: {
      Header: require('../component/Header.vue'),
      row: require('../component/Row.vue')
    }
  }
</script>
