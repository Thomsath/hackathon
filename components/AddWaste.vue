<template>
	<div class="addWaste">

		<div class="picture__container">
			
		</div>

		<form action="" class="form__addWaste">
			
			<img src="~assets/img/location.svg" alt="Pictogramme de localisation" class="form__addWaste--locationPicto">
			<label class="form__addWaste--label" for="form__addWaste--address"><b>J'ai découvert cet encombrant au :</b></label>
			<input type="text" class="form__addWaste--address" id="form__addWaste--address" placeholder="Endroit de découverte">

			<label class="form__addWaste--label" for="form__addWaste--reusable"><b>Etat de l'encombrant</b></label>
			<label class="switch">
				<span class="form__addWaste--spanReusable">Bon</span>
				<input type="checkbox" class="form__addWaste--reusable">

				<span class="slider round"></span>
				<span class="form__addWaste--spanNReusable">Mauvais</span>
			</label>
			
			<input type="submit" class="form__addWaste--submit" value="Publier l'annonce">
		</form>
	</div>

</template>