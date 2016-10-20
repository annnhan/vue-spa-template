<template>
  <h1 v-if="!hide">{{ text }}</h1>
</template>

<script>
  export default {
    props: ['text', 'hide'],
    mounted: function () {
      document.title = this.text;
    }
  }
</script>