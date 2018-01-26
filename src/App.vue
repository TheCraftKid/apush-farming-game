<template>
  <div id="app">
    <md-toolbar class="md-primary" v-if="gameInSession">
      <span class="md-title">Homestead</span> 
    </md-toolbar>
    <main>
      <start-screen id="startScreen" v-if="!gameInSession" @gameStart="startGame()" @showLeaderboard="showLeaderboard()">
      </start-screen>
      <game-leaderboard v-if="shouldShowLeaderboard">
      </game-leaderboard>
      <homestead-game v-if="gameInSession"></homestead-game>
    </main>
  </div>
</template>

<script>
import StartScreen from '@/components/StartScreen'
// import * as storage from '../scripts/storage'

export default {
  name: 'app',
  components: [
    StartScreen
  ],
  computed: {
    gameInSession () {
      return false
    },
    dialogArributes () {
    },
    shouldShowLeaderboard () {
      return true
    }
  },
  methods: {
    startGame () {
      console.log('Starting game...')
      // this.$route
    },
    showLeaderboard () {
      console.log('Showing leaderboard...')
    }
  }
}
</script>

<style lang="scss">
@import "~vue-material/dist/theme/engine";

@include md-register-theme("default", (
  primary: #D48D00,
  accent: #7E7900,
));

@import "~vue-material/dist/theme/all";

body {
  margin: 0;
  max-height: 100vh;
  flex: 1 1 auto
}

main {
  text-align: center;
  height: 100vh;
}
</style>
