<template>
	<div class="titulo">
		<div class="back"><PhCaretLeft color="#1ED96F"/></div>
		<div class="home"><PhCalendarCheck color="#1ED96F"/></div>
		<div class="exit"><PhSignIn color="#1ED96F"/></div>
	</div>

	<div class="calendario">
		<span>Seu calendário de provas</span>
		<select name="view" id="view">
			<option value="grid">Calendário</option>
			<option value="list">Lista</option>
		</select>
		<hr>
		<div class="seletor">
			<a class="anterior"><PhCaretLeft/></a>
			<a class="display">{{ mes }}</a>
			<a class="proximo"><PhCaretRight/></a>
		</div>
		<!-- <div>			
		</div> -->
	</div>
</template>

<script lang="ts" setup>
  import { PhCaretLeft, PhCalendarCheck, PhSignIn, PhCaretRight } from "@phosphor-icons/vue";
  import { ref } from "vue";

  const mes= ref('abril')
</script>

<style>
.seletor{
  }
.display{

}
.calendario{
	text-align: center;
	background: #ffffff;
}

div.titulo{
	position: relative;
	background: #010B40;
	height:8%;
	width: 100%;
}
div.back{
	display: inline;
	border: 1px solid #ff0000;
}
div.home{
	display: inline;
	border: 1px solid #ff0000;
}
div.exit{
	display: inline;
	border: 1px solid #ff0000;
}
span{
	font-family: "Quicksand" ;
}
</style>