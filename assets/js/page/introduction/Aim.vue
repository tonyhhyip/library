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
  import loader from '../../loader';
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
      loader('https://spyc.github.io/library-data/introduction/Aim.txt', this);
    }
  }
</script>
