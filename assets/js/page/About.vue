<template>
    <div>
        <Header :title="title" />
        <main class="container">
            <row>
                <div class="col s12">
                    <MarkdownCard :url="url" />
                </div>
            </row>
        </main>
    </div>
</template>
<script>
  const loader = require('../loader');

  const files = {
    'aim': 'Aim',
    'about': 'About',
    'rule': 'Rule'
  };

  export default{
    components: {
      Header: require('../component/Header.vue'),
      row: require('../component/Row.vue'),
      MarkdownCard: require('../component/MarkdownCard.vue')
    },
    data() {
      const {section} = this.$route.params;
      return {
        section
      }
    },
    computed: {
      file() {
        return files[this.section];
      },
      title() {
        return `About Us - ${this.file}`
      },
      url() {
        return `introduction/${this.file}.txt`;
      }
    },
    watch: {
      '$route': function () {
        this.updateCard();
      }
    },
    methods: {
      updateCard() {
        const {section} = this.$route.params;
        if (!(section in files)) {
          this.$router.replace({name: 'home'});
        }
        this.section = section;
      }
    }
  }
</script>
