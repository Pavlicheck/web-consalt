<template>
  <v-navigation-drawer height="100vh"  width="200" :mini-variant="sbLeft" v-model="drawer">
    <v-toolbar flat class="transparent">
      <v-flex class="d-flex" heigth="100%">
        <v-avatar>
              <img src="https://files.voenpro.ru/products/znachok-korona-monarha.1600x1600.jpg" >
        </v-avatar>
      </v-flex>
    </v-toolbar>


    <v-list dense class="pt-0 sb-left__content">
      <v-expansion-panel>
        <v-expansion-panel-content hide-actions
 v-for="item, i in items" :key="i">

          <v-list-tile  slot="header">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list>
            <v-list-tile v-for="subItem, i in item.items" :key="i">
              {{ subItem.title }}
            </v-list-tile>
          </v-list>

        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-list>
    <v-list class="theme-controls">
      <v-list-tile-content>
        <v-list-tile-title>
        <v-flex class="d-flex">
          <v-icon>wb_sunny</v-icon>
          <v-switch @change="setTheme" v-model="dark"></v-switch>
          <v-icon>brightness_3</v-icon>
        </v-flex>
      </v-list-tile-title>
    </v-list-tile-content>
    </v-list>


  </v-navigation-drawer>
</template>


<script>
  import { mapGetters } from 'vuex';
  import { mapMutations} from 'vuex';
  export default {
    data () {
      return {
        drawer: true,
        dark: true,
        items: [
          { title: 'Учет МП', icon: 'description', items: [] },
          { title: 'Объекты', icon: 'home', items: [] },
          { title: 'Закупки', icon: 'shopping_basket', items: [] },
          { title: 'Бюджет', 
            icon: 'monetization_on',
            items: [
              {
                title: 'Бюджет на МП',
                link: ''
              },
              {
                title: 'Заявка на экспертизу',
                link: ''
              },
              {
                title: 'Работы',
                link: ''
              },
              {
                title: 'Показатели',
                link: ''
              },
            ] },
          { title: 'Панели', icon: 'dashboard', items: [] }
        ],
        // mini: true,
        right: null
      }
    },
    computed: {
      ...mapGetters(['sbLeft']),
    },
    methods: {
      ...mapMutations(['setTheme']),
    }
  }
</script>


<style> 
.sb-left__content .expansion-panel__header {
  padding-left: 0;
  padding-right: 0;
}
.sidebar-left .navigation-drawer {
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
}

.sidebar-left .navigation-drawer--mini-variant {
  overflow: visible!important;
}

.navigation-drawer--mini-variant .sb-left__content .expansion-panel__container.expansion-panel__container--active .expansion-panel__body {
    width: 200px;
    display: block;
    position: relative;
    left: 80px;
    background: #424242;
    opacity: .7;
  }

.navigation-drawer--mini-variant .sb-left__content .expansion-panel__container--active .list__tile__content{
  position: relative;
  left: 40px;
  opacity: 1;

}
.expansion-panel__container .expansion-panel__body {
  opacity: 0!important;
}
.expansion-panel__container.expansion-panel__container--active .expansion-panel__body {
  opacity: 0.7!important;

}
.navigation-drawer--mini-variant .sb-left__content .expansion-panel__container.expansion-panel__container--active .expansion-panel__header {
  background: #424242;
  width: 280px;
}


.sidebar-left .input-group.switch, .sidebar-left .input-group {
  width: 48px;
}

.sidebar-left .theme-controls {
  margin-top: auto;
}

</style>