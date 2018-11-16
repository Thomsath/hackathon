<template>
  <section class="container">
    <splash-screen ref="splashScreen" v-if="splashScreenVisible"/>
    <custom-navbar />
    <app-map class="map"/>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import SplashScreen from '~/components/SplashScreen.vue'
  import CustomNavbar from '~/components/ShowNavbar.vue' 
  import AppMap from '~/components/AppMap.vue'

  export default {
    components: {
      Logo,
      SplashScreen,
      AppMap,
      CustomNavbar
    },
    data () {
      return {
        online: true,
        splashScreenVisible : false,
        navVisible: true
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
      
      
      // this.splashScreenVisible = true;
      // this.navVisible = false;
      setTimeout(
        function() {
          this.splashScreenVisible = false;

          // const contain = document.getElementsByClassName('container');
          // const splashScreen = document.getElementsByClassName('splashScreen');
          
        }, 3000);
    },
    methods: {
      _toggleNetworkStatus ({ type }) {
        this.online = type === 'online'
      }
    },
    destroyed () {
      window.removeEventListener('offline', this._toggleNetworkStatus)
      window.removeEventListener('online', this._toggleNetworkStatus)
    },
  }
</script>

<style>
</style>
