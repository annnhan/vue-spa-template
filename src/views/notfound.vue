<template>
  <div>
    <c-title :text="title" :hide="true"></c-title>
    <p>{{ message }}</p>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import cTitle from 'components/title';

  export default {
    data () {
      return {
        title: 'ERROR!',
      }
    },
    computed: mapState([
      'message'
    ]),
    mounted: function () {
      this.$store.commit('MESSAGE', '404 Not Found！');
    },
    components: {cTitle}
  }
</script>