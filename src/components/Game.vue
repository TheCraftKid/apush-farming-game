<template>
  <div id="root">
    <router-view></router-view>
    <exposition-dialog :title="getDialogProperties().title" :subtitle="getDialogProperties().subtitle" :exposition="getDialogProperties().exposition" 
                        :action-text="getDialogProperties().actionText" @on-action="showExposition()">
    </exposition-dialog>
    
  </div>
</template>

<script>
import * as Events from "../assets/events.json";

export default {
  name: 'homestead-game',
  data() {
  },
  computed: {
    getDialogProperties () {
      return {
        title: _fetchTitle(),
        subtitle: _fetchSubtitle(),
        exposition: _fetchExposition(),
        actionText: _fetchActionText() 
      }
    },
  },
  methods: {
    gameInSession() {
      return true
    },
    routeState() {
      if (this.gameInSession()) {

      }
    },
    handleDialogClick() {

    },
    fetchIntroductionText() {
      return Events['introduction']
    },
    fetchDroughtEvent() {
      return Events['event_drought']
    },
    startGame() {
      console.log('Start game')
    },
    showLeaderboard() {
      this.shouldShowLeaderboard = true
      console.log('Show leaderboard')
    },
    showExposition() {
      // TODO: Check for game state
      console.log('Showing exposition')
    },
    _fetchTitle () {

    },
    _fetchSubtitle () {

    },
    _fetchExposition() {

    },
    _fetchActionText() {

    },
    
  }
};
</script>

<style>
.container {
  flex: 1 1 auto;
}
</style>
