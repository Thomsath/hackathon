<template>
  <div class="popup__container">
    <div class="popup__img-container">
      <img class="popup__img" src="~/assets/img/fauteuil.png">
    </div>
    <div class="popup__content">
      <header class="popup__header">
        <h2 class="popup__title">Electro-Menager</h2>
        <button @click="$emit('click', $event)">
          <img src="~/assets/img/close.svg">
        </button>
      </header>
      <p>à 2.5km</p>
      <div>
        <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
          <circle cx="205" cy="757" r="9" transform="translate(-196 -748)" fill="#FF9B85" fill-rule="nonzero"/>
        </svg>
        <span>Produit réutilisable</span>
      </div>
      <p>Publié le 08/10/18 à 10:15</p>
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
  background-color:#ffffff;
}

.popup__img-container {
  width: calc(100%/3);
  position: relative;
  overflow: hidden;
}

.popup__img {
  width: auto;
  height: 110%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.popup__content {
  width: calc(2*(100%/3));
  /* background-color: blue; */
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.popup__header {
  display: flex;
  justify-content: space-between;
}

.popup__header button {
  background-color: transparent;
  border:0;
}

.popup__title {
  font-family: 'SF Pro Display';
  font-weight: bold;
  color: #083C34;
  font-size: 22px;
}

</style>
