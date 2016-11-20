<template>
    <div>
        <Header title="Book Recommend" />
        <main>
            <container>
                <row>
                    <div class="col s12">
                        <div class="card">
                            <div class="card-content">
                                <loader v-if="!done" />
                                <div class="card-title" v-if="done">{{ title }}</div>
                                <div v-html="content" v-if="done"></div>
                            </div>
                        </div>
                    </div>
                </row>
            </container>
        </main>
    </div>
</template>
<script>
  import loader from '../loader';
  export default{
    data(){
      return {
        done: false,
        content: '',
        title: ''
      }
    },
    components: {
      Header: require('../component/Header.vue'),
      container: require('../component/Container.vue'),
      row: require('../component/Row.vue'),
      loader: require('../component/Loader.vue')
    },
    mounted() {
      const url = `https://spyc.github.io/library-data/books/${this.$route.params.id}.txt`;
      loader(url, this);
    }
  }
</script>
