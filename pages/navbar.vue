<template>
  <main>
    <custom-navbar />
  </main>
</template>

<script>
  import CustomNavbar from '~/components/ShowNavbar.vue'
  import SplashScreen from '~/components/SplashScreen.vue'

  export default {
    components: {CustomNavbar},
    data () {
      return {
        online: true
      }
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
      _toggleNetworkStatus ({ type }) {
        this.online = type === 'online'
      }
    },
    destroyed () {
      window.removeEventListener('offline', this._toggleNetworkStatus)
      window.removeEventListener('online', this._toggleNetworkStatus)
    }
  }
</script>
