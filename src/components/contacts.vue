<template> 
	<v-expansion-panel>
		<v-expansion-panel-content hide-actions>
			<div slot="header" class="header">
				<v-icon>menu</v-icon>
				<span class="title">Контакты</span>
				<v-icon>contact_phone</v-icon>
			</div>
			<v-container>
				<v-flex>
					<v-text-field append-icon="search"></v-text-field>
				</v-flex>

				<v-flex v-for="item, i in items" :key="'contact' + i" class="py-2" d-flex align-center>
					
					<v-badge :color="item.active ? 'green' : 'red'">
						<span slot="badge"></span>
						<v-icon>account_circle</v-icon>
					</v-badge>
					<span class="ml-5 title">{{ item.name }}</span>
					<span>{{ item.comment }}</span>
					<v-btn flat icon><v-icon>phone</v-icon></v-btn>
				</v-flex>

			</v-container>
			 
		</v-expansion-panel-content>
	</v-expansion-panel>
</template>

<!--############ Sctipts #############################-->
<script>
	export default {
		data () {
      return {
        items: [
          { active: true, name: 'Jason Oner', comment: 'comment' },
          { active: false, name: 'Jason Oner', comment: 'comment' },
          { active: true, name: 'Jason Oner', comment: 'comment' },

        ],
        items2: [
          { title: 'Travis Howard', avatar: '/static/doc-images/lists/5.jpg' }
        ]
      }
    }

	}
</script>
<!-- ############ Styles ############################# -->
<style>
.expansion-panel__container {
	display: flex;
	flex-direction: column;
}
.expansion-panel__header {
	width: 100%;
}
.header {
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.badge__badge {
	top: 6px;
}
	

</style>