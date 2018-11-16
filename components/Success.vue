<template>

	<div class="success__container">
		<h1>Merci !</h1>

		<img src="~assets/img/success.svg" alt="">
		<h3 class="success__container--successMsg">+1 partie de votre Dung Beetle*</h3>

		<p>Nous avons bien reçu votre annonce. Après vérification elle sera publiée et visible par tous.</p>

		<a href="/" class="success__container--submit">Retour à l'accueil</a>

		<i>*: Bousier</i>
	</div>

</template>

<script>
export default {
  methods: {
    returnHome() {
    	console.log('opfs');
      // this.$router.push('/');
    }
  }
}
</script>