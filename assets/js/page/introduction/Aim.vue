<template>
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
</template>

<script>
  import marked from 'marked';
  export default{
    data(){
      return {
        done: false,
        title: '',
        content: ''
      }
    },
    components: {
      row: require('../../component/Row.vue'),
      loader: require('../../component/Loader.vue')
    },
    mounted() {
      this.$http.get('https://spyc.github.io/library-data/introduction/Aim.txt')
        .then((response) => {
          return response.text();
        })
        .then((content) => {
          const title = content.match(/###(.+)/)[1].trim();
          this.content = marked(content.replace(/^###.+/, ''));
          this.title = title;
          this.done = true;
        })
        .catch((e) => {
          console.log(e.stack);
          this.title = 'Opps! Error occur!';
          this.content = 'Please check your network! If you think the network, please report it at <a href="https://github.com/spyc/library/issues/new">Github</a> or email to tony@opensource.hk';
          this.done = true;
        });
    }
  }
</script>
