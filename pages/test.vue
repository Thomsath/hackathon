<template>
  <div style="height: 500px;width: 500px;">
    <test v-if="show"/>
    {{text}}
  </div>
</template>

<script>
import Test from '~/components/Test.vue'

export default {
  data () {
    return {
      show: true,
      text: 'fzf'
    }
  },
  components: {
    Test
  },
  mounted () {
    console.log(this.text);
    setTimeout( function() {
      this.show = false
      this.text = 'tgtgt';
      console.log(this.text);
    }, 3000);
  }
}
</script>

<style>

</style>
