<template>
  <section class="container">
    <splash-screen ref="splashScreen" v-if="splashScreenVisible"/>
    <custom-navbar />
    <div ref="map" id="map">
      Loading Google Maps... (maybe display an image from Google maps API...https://developers.google.com/maps/documentation/maps-static/intro)
    </div>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import SplashScreen from '~/components/SplashScreen.vue'
  import mapStyle from '~/static/mapStyle.json'
  import mapMarker from "~/static/mapMarker.json"
  import CustomNavbar from '~/components/ShowNavbar.vue' 

  export default {
    components: {
      Logo,
      SplashScreen,
      CustomNavbar
    },
    data () {
      return {
        online: true,
        splashScreenVisible : true,
        navVisible: true,
        map: null,
        mapStyle: mapStyle,
        mapMarker: mapMarker,
        pos: {}
      }
    },
    beforeDestroy() {
      this.map = null;
    },
    created() {
      const vm = this;
      if (process.browser) {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function (position){
            vm.pos = {lat: position.coords.latitude, lng: position.coords.longitude}
          });
        }
      }
    },
    mounted () {
      this.loadMap();
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
      },
      async loadMap() {
        const vm = this;
        await this.loadGoogleMapsScript();

        setTimeout( function(){
          vm.splashScreenVisible = false;
        }, 2000)
        
        this.map = new google.maps.Map(this.$refs.map, {
          center: {
            lat: parseFloat(vm.pos.lat),
            lng: parseFloat(vm.pos.lng),
          },
          zoom: 12,
          styles: this.mapStyle,
          disableDefaultUI: true,
        });

        let infowindow = new google.maps.InfoWindow({
          content: '<div class="marker-container">hello</div>'
        });

        for (var i = 0; i<vm.mapMarker.length; i++) {
          let marker = new google.maps.Marker({
            position: {lat: parseFloat(mapMarker[i].lat), lng: parseFloat(mapMarker[i].lng)},
            map: this.map,
            icon: vm.mapMarker[i].type+'.png'
          });

          marker.addListener('click', function() {
            infowindow.open(map, marker);
            console.log('heelo');
          })
        }
      },
      loadGoogleMapsScript() {
        return new Promise(resolve => {
          // If google maps is already loaded
          if (typeof window.google !== 'undefined') {
            return resolve();
          }
          const scriptMap = document.createElement('script');

          scriptMap.setAttribute('type', 'text/javascript');
          scriptMap.setAttribute(
            'src',
            'https://maps.googleapis.com/maps/api/js?key=AIzaSyD8exQlZRPRE2WJfTlxm1hmuHl0hRNzy6A'
          );
          scriptMap.setAttribute('id', '_google_maps_js');
          scriptMap.onload = resolve;
          document.head.appendChild(scriptMap);
        });
      },
    },
  }
</script>

<style scoped>
#map {
  height: 100%;
  width: 100%;
}
</style>