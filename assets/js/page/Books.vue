<template>
    <div>
        <Header title="Book Recommend" />
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
                                <div>
                                    {{  book.name }}
                                    <small>{{ book.author }}</small>
                                    <router-link :to="{name: 'book', params:{id:book.id}}" class="secondary-content">
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
  export default{
    data(){
      // TODO: use vue resource to load for this
      return {
        done: false,
        books: {
          Chinese: [
            {name: 'Foo', author: 'Bar', id: 'foo'}
          ]
        }
      }
    },
    components: {
      Header: require('../component/Header.vue'),
      container: require('../component/Container.vue'),
      row: require('../component/Row.vue'),
      loader: require('../component/Loader.vue')
    },
    mounted() {
      setTimeout(() => this.done = true, 1000);
    }
  }
</script>
