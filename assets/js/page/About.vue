<template>
    <div>
        <Header :title="title" />
        <main class="container">
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
        </main>
    </div>
</template>
<script>
  import loader from '../loader';
  const files = {
    'aim': 'Aim',
    'about': 'About',
    'rule': 'Rule'
  };
  export default{
    components: {
      Header: require('../component/Header.vue'),
      row: require('../component/Row.vue'),
      loader: require('../component/Loader.vue')
    },
    data() {
      const {section} = this.$route.params;
      return {
        section,
        file: files[section],
        done: false,
        title: '',
        content: ''
      }
    },
    computed: {
      title() {
        return `About Us - ${this.file}`
      }
    },
    mounted() {
      this.loadData();
    },
    watch: {
      '$route': 'loadData'
    },
    methods: {
      loadData() {
        const {section} = this.$route.params;
        if (!(section in files)) {
          this.$router.replace({name: 'home'});
        }
        this.section = section;
        this.file = files[section];
        loader(`https://spyc.github.io/library-data/introduction/${this.file}.txt`, this);
      }
    }
  }
</script>
