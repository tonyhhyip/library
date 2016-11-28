<template>
    <div class="card">
        <div v-if="image" class="card-image">
            <img :src="image" :alt="key">
        </div>
        <div class="card-content markdown">
            <loader v-if="!done" />
            <div class="card-title" v-if="done">{{ title }}</div>
            <div v-html="content" v-if="done"></div>
        </div>
    </div>
</template>
<script>
  import loader from '../loader'
  export default{
    data(){
      return {
        done: false,
        title: '',
        content: '',
        image: '',
        key: ''
      }
    },
    props: {
      url: {
        type: String,
        required: true
      }
    },
    components: {
      'loader': require('./Loader.vue')
    },
    mounted() {
      this.fetch();
    },
    watch: {
      'url': function() {
        this.fetch();
      }
    },
    methods: {
      fetch() {
        if (this.url.trim().length > 0) {
          const url = `https://spyc.github.io/library-data/${this.url}`;
          loader(url, this);
        }
      }
    }
  }
</script>
