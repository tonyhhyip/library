<template>
    <div>
        <Header title="Book Recommend" />
        <main>
            <container>
                <row>
                    <div class="col s12 l8">
                        <markdown-card :url="url" />
                    </div>
                </row>
            </container>
        </main>
    </div>
</template>
<script>
  export default{
    data(){
      return {
        url: `books/${this.$route.params.id}.txt`
      }
    },
    components: {
      Header: require('../component/Header.vue'),
      container: require('../component/Container.vue'),
      row: require('../component/Row.vue'),
      'markdown-card': require('../component/MarkdownCard.vue')
    }
  }
</script>
