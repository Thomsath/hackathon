<template>
  <section class="container">
    <splash-screen v-if="splashScreenVisible"/>
    <div class="navbar" v-if="navVisible">
      <a href="new-waste" class="nav__link nav__link--left"><img class="nav__logo" src="~assets/img/location.svg"></a>

      <label class="nav__link nav__link--label">
        <input type="file" name="pic" class="nav__link nav__link--middle" accept="image/location.svg*">
      </label>
      <a href="list-waste" class="nav__link nav__link--right"><img class="nav__logo" src="~assets/img/list.svg"></a>
    </div>
    <app-map class="map"/>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import SplashScreen from '~/components/SplashScreen.vue'
  import AppMap from '~/components/AppMap.vue'

  export default {
    components: {
      Logo,
      SplashScreen,
      AppMap
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
