<template>
  <main>
   	<custom-navbar />
   	<list-waste />
  </main>
</template>

<script>
  import ListWaste from '~/components/ListWaste.vue'
  import CustomNavbar from '~/components/ShowNavbar.vue'

  export default {
    components: {CustomNavbar, ListWaste},
    data () {
    },
    mounted () {
      if (!window.navigator) {
        this.online = false
        return
      }
      this.online = Boolean(window.navigator.onLine)
      window.addEventListener('offline', this._toggleNetworkStatus)
      window.addEventListener('online', this._toggleNetworkStatus)
    },
    methods: {
    }
  }
</script>

<style>

</style>
