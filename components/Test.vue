<template>
  <div ref="map" id="map">
    Loading Google Maps... (maybe display an image from Google maps API...https://developers.google.com/maps/documentation/maps-static/intro)
  </div>
</template>

<script>
// TODO: Create your API Key:
// https://cloud.google.com/maps-platform/ -> GET STARTET -> Follow the instructions
import mapStyle from '~/static/mapStyle.json'

export default {
  data() {
    return {
      map: null,
      mapStyle: mapStyle,
    };
  },
  mounted() {
    this.loadMap();
    console.log(this.mapStyle);
  },
  beforeDestroy() {
    this.map = null;
  },
  methods: {
    async loadMap() {
      // See https://developers.google.com/maps/documentation/javascript/tutorial#The_Hello_World_of_Google_Maps_v3
      await this.loadGoogleMapsScript();
      // Load the map in the ref="map" div
      // todo: use props location or if empty use maroc location
      this.map = new google.maps.Map(this.$refs.map, {
        center: {
          lat: 43.6,
          lng: 1.43,
        },
        zoom: 12,
        styles: this.mapStyle,
        disableDefaultUI: true,
      });

      const latLng1 = { lat: 43.604402, lng: 1.444208 };
      const latLng2 = { lat: 43.635811, lng: 1.483707 };

      // Todo: update marker icon
      // eslint-disable-next-line no-unused-vars
      const marker1 = new google.maps.Marker({
        position: latLng1,
        map: this.map,
      });

      // eslint-disable-next-line no-unused-vars
      const marker2 = new google.maps.Marker({
        position: latLng2,
        map: this.map,
      });
    },
    loadGoogleMapsScript() {
      return new Promise(resolve => {
        // If google maps is already loaded
        if (typeof window.google !== 'undefined') {
          return resolve();
        }
        const script = document.createElement('script');

        script.setAttribute('type', 'text/javascript');
        script.setAttribute(
          'src',
          'https://maps.googleapis.com/maps/api/js?key=AIzaSyD8exQlZRPRE2WJfTlxm1hmuHl0hRNzy6A'
        );
        script.setAttribute('id', '_google_maps_js');
        script.onload = resolve;
        document.head.appendChild(script);
      });
    },
  },
};
</script>

<style scoped>
#map {
  height: 100%;
  width: 100%;
}
</style>
