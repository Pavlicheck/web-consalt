<template> 
	<v-toolbar flat>
		<v-btn flat @click="setSbLeft">
    		<v-icon>format_align_left</v-icon>
    	</v-btn>
		<v-toolbar-title class="body-1">АИС мониторинг муниципальных программ</v-toolbar-title>
		<v-spacer></v-spacer>
		<v-toolbar-items class="hidden-sm-and-down">
			<nav-search></nav-search>
			<v-btn flat small>
				<v-icon>settings</v-icon>
			</v-btn>
			<v-btn flat small class="px-0">
				<v-badge color="orange"  overlap>
					<span slot="badge" color="red text-xs-center"></span>
					<v-icon>notifications</v-icon>
				</v-badge>
			</v-btn>
		</v-toolbar-items>
		<div class="text-xs-center">
			<v-menu offset-y>
			  <v-btn slot="activator" class="caption" flat>
			  	Администратор
			  	<i class="material-icons">keyboard_arrow_down</i>
			  </v-btn>
			  <v-list>
			    <v-list-tile v-for="(item, index) in adminList" :key="index + 'admin'" @click="">
			      <v-list-tile-title>{{ item.title }}</v-list-tile-title>
			    </v-list-tile>
			  </v-list>
			</v-menu>
		</div>
		<v-avatar>
      		<img src="https://vuetifyjs.com/static/doc-images/john.jpg" alt="John">
    	</v-avatar>
    	<v-btn flat  @click="setSbRight">
    		<v-icon>format_align_right</v-icon>
    	</v-btn>
	</v-toolbar>	
</template>

<!--############ Sctipts #############################-->
<script>
	import navSearch from './Search.vue'
	import { mapMutations } from 'vuex'
	export default {
		data() {
			return {
				adminList: [
					{ title: 'Click Me' },
					{ title: 'Click Me' },
					{ title: 'Click Me' },
					{ title: 'Click Me 2' },
				]
			}
		},
		components: { navSearch },
		methods: {
			...mapMutations(['setSbLeft', 'setSbRight']),
		}
	}
</script>

<!-- ############ Styles ############################# -->
<style>
	.badge__badge {
		width: 10px;
		height: 10px;
	}
	.btn {
		min-width: 55px;
	}

</style>