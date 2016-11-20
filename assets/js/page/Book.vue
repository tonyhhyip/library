<template>
    <div>
        <Header :title="title" />
        <main>
            <container>
                <row>
                    <div class="col s12">
                        <div class="card">
                            <loader />
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
        id: 'foo'
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

      }, 100);
    }
  }
</script>
