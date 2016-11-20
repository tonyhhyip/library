<template>
    <div>
        <Header :title="title" />
        <main>
            <container>
                <row>
                    <div class="col s12">
                        <div class="card">
                            <div class="card-content">
                                <loader v-if="!done" />
                                <div class="card-title" v-if="done">
                                    {{ name }}
                                    <small>{{ author}}</small>
                                </div>
                                <div v-if="done" v-html="abstract"></div>
                            </div>
                        </div>
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
        name: 'Foo',
        author: 'Bar',
        id: 'foo',
        done: false,
        abstract: '<strong>Testing</strong>'
      }
    },
    computed: {
      title() {return `Book Recommend - ${this.name}` }
    },
    components: {
      Header: require('../component/Header.vue'),
      container: require('../component/Container.vue'),
      row: require('../component/Row.vue'),
      loader: require('../component/Loader.vue')
    },
    mounted() {
      setTimeout(() => {
        this.done = true;
      }, 1000);
    }
  }
</script>
