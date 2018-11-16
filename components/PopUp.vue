<template>
  <div class="popup__container">
    <div class="popup__img-container">
      <img class="popup__img" src="~/assets/img/fauteuil.png">
    </div>
    <div class="popup__content">
      
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.popup__container{
  height: 200px;
  width: 100vw;
  display: flex;
  background-color: cyan;
}

.popup__img-container {
  width: calc(100%/3);
  background-color: red;
  position: relative;
  overflow: hidden;
}

.popup__img {
  width: 110%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.popup__content {
  width: calc(2*(100%/3));
  background-color: blue;
}

</style>
