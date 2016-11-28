<template>
    <div>
        <top title="Book Lists" />
        <main>
            <container>
                <row>
                    <div class="col s12">
                        <h4>Book List</h4>
                        <div class="collection">
                            <a v-for="list in lists" :download="getUrl(list.file)" :href="getUrl(list.file)" class="collection-item">
                                {{ list.name }}
                            </a>
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
        lists: [
          {
            name: 'Junior Form Recommended Booklist',
            file: 'JuniorFormRecommended'
          },
          {
            name: '中一級中國語文科廣泛閱讀推薦書目',
            file: 'S1ChineseBookList'
          },
          {
            name: '中二級中國語文科廣泛閱讀推薦書目',
            file: 'S2ChineseBookList'
          },
          {
            name: '中三級中國語文科廣泛閱讀推薦書目',
            file: 'S3ChineseBookList'
          },
          {
            name: '中四及中五級廣泛閱讀優質讀物介紹',
            file: 'S5ChineseBookList'
          }
        ]
      }
    },
    components: {
      top: require('../component/Header.vue'),
      row: require('../component/Row.vue'),
      container: require('../component/Container.vue')
    },
    methods: {
      getUrl(file) {
        return `https://spyc.github.io/library-data/document/${file}.pdf`
      }
    }
  }
</script>
