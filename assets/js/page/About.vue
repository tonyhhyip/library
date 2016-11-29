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
  const files = {
    'aim': 'Aim',
    'about': 'About',
    'opening': 'Opening',
    'librarian': 'Librarian'
  };

  const titles = require('../title')('intro');

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
      title() {
        return `About Us - ${titles[this.section]}`
      },
      url() {
        return `introduction/${files[this.section]}.txt`;
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
