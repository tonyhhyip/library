<template>
    <row>
        <div class="col s12">
            <MarkdownCard url="content/Suggestion.txt" />
        </div>
    </row>
</template>
<script>
  export default{
    components: {
      row: require('../component/Row.vue'),
      MarkdownCard: require('../component/MarkdownCard.vue')
    }
  }
</script>
