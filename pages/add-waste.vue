<template>
  <main>
    <add-waste />

    <custom-navbar />
  </main>
</template>


<script>
  import AddWaste from '~/components/AddWaste.vue'
  import CustomNavbar from '~/components/ShowNavbar.vue'

  export default {
    components: {AddWaste, CustomNavbar},
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
