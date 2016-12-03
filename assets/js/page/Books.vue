<template>
    <div>
        <top />
        <main>
            <container>
                <loader v-if="!done" />
                <row v-if="done" v-for="(list, language) in books">
                    <div class="col s12">
                        <ul class="collection with-header">
                            <li class="collection-header">
                                <h4>{{ language }}</h4>
                            </li>
                            <li v-for="book in list" class="collection-item">
                                <div v-if="book.ID">
                                    {{  book.Title }}
                                    <small>{{ book.Author }}</small>
                                    <router-link :to="{name: 'book', params:{id:book.ID}}" class="secondary-content">
                                        <i class="material-icons">send</i>
                                    </router-link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </row>
            </container>
        </main>
    </div>
</template>
<script>
  import parser from '../parser';
  export default{
    data(){
      return {
        done: false,
        eng: null,
        chin: null
      }
    },
    computed: {
      books() {
        const obj = {};
        if (this.chin) {
          obj.Chinese = this.chin;
        }

        if (this.eng) {
          obj.English = this.eng;
        }

        return obj;
      }
    },
    components: {
      top: require('../component/Header.vue'),
      container: require('../component/Container.vue'),
      row: require('../component/Row.vue'),
      loader: require('../component/Loader.vue')
    },
    mounted() {
      const lists = {
        eng: 'https://spyc.github.io/library-data/english.txt',
        chin: 'https://spyc.github.io/library-data/chinese.txt'
      };
      const self = this;
      for (let language in lists) {
        const file = lists[language];
        self.$http.get(file)
          .then(function (response) {
            self.done = true;
            return response.text();
          })
          .then(function (content) {
            self[language] = parser(content);
          });
      }
    }
  }
</script>
