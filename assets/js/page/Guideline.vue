<template>
    <row>
        <div class="col s12">
            <markdown-card url="content/Suggestion.txt" />
        </div>
    </row>
</template>
<script>
  export default{
    components: {
      row: require('../component/Row.vue'),
      'markdown-card': require('../component/MarkdownCard.vue')
    }
  }
</script>
