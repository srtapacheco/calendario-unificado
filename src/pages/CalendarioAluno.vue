<template>
	<div class="titulo">
		<h1>
			<button>
				(PH)back
			</button>
			<span @click=homepage>(PH-Home)</span>
			<button>
				(PH)exit
			</button>
		</h1>
	</div>

	<body>
		
	</body>
</template>


  
<script>
	// import SvgIcon from '@jamescoyle/vue-icon';
	// import { mdiChevronLeft } from '@mdi/js';
	// import { mdiCalendarCheck } from '@mdi/js';
	// import LoginPage from './LoginPage.vue'
	export default {
		methods: {
			homepage() {
				this.$router.push('/LoginPage.vue');
			}
		}
	}
</script>