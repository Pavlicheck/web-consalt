<template>
  <v-navigation-drawer height="100vh" v-if="sbRight" :absolute="!sbRight" right width="400" scrollable>
    <div  class="px-3 py-3">
      <contacts></contacts>
    </div>
    <div  class="px-3 py-3">
      <contacts></contacts>
    </div>
  </v-navigation-drawer>
</template>

<script>
  import { mapGetters } from 'vuex'
  import contacts from './contacts.vue'
  export default {
    data () {
      return {
         items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' }
        ],
        mini: false,
        right: true
      }
    },
    computed: {
      ...mapGetters(['sbRight'])
    },
    components: { contacts }
  }
</script>