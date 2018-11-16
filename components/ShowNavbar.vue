<template>
    <div>
      <div class="navbar">
        <a href="/" class="nav__link nav__link--left">
          <img class="nav__logo" src="~assets/img/location.svg">
        </a>

        <label class="nav__link nav__link--label">
          <a href="add-waste">
              <img src="~assets/img/logo_rose_plein.svg">
              <input @input="sendPicture" type="file" name="pic" class="nav__link nav__link--middle" accept="image/location.svg*">
          </a>
        </label>
        <a href="list-waste" class="nav__link nav__link--right"><img class="nav__logo" src="~assets/img/list.svg"></a>
      </div>
    </div>
</template>

<script>
export default {
  methods: {
    sendPicture() {
      const vm = this;
      console.log('test');
      this.$router.push('add-waste');
    }
  }
}
</script>

