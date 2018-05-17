<template> 
	<!-- <v-btn flat> -->
		<v-expansion-panel class="elevation-0 header-search">
			<v-expansion-panel-content hide-actions>
				<v-icon slot="header">search</v-icon>
				<v-text-field></v-text-field>
			</v-expansion-panel-content>
		</v-expansion-panel>
	<!-- </v-btn> -->
</template>

<!--############ Sctipts #############################-->
<script>
	export default {
		data() {
			return {
				show: false
			}
		}

	}
</script>

<!-- ############ Styles ############################# -->
<style>
.header-search .header__icon {
	display: none;
}
.header-search .expansion-panel__container {
	display: flex;
	flex-direction: row;
}
.header-search .expansion-panel__header {
	width: auto;
}

.header-search .input-group--text-field input {
	min-width: 300px;
}

</style>