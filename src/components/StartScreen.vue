<template>
  <div class="container">
    <md-card>
      <div class="brand-box">
        <img src="../assets/logo.png" alt="Homestead Game" class="brand-image">
        <h1>Homestead</h1>
        <p class="description-short">
          Play as an 1870s farmer trying to make a living in the midwest under
          the Homestead Act.
        </p>
      </div>
      <div class="button-container">
        <md-button class="md-raised md-primary" v-on:click="onGameStart()">START</md-button>
      </div>
      <div class="button-container">
        <md-button class="md-raised" v-on:click="showLeaderboard()">LEADERBOARD</md-button>
      </div>
    </md-card>
  </div>
</template>
<script>
export default {
  name: 'start-screen',
  methods: {
    onGameStart (event) {
      this.$emit('game-start')
    },
    showLeaderboard (event) {
      this.$emit('show-leaderboard')
    }
  }
}
</script>

<style>
.md-card {
  margin: 16px;
  display: inline-block;
  padding: 16px;
}

.md-button {
  display: inline-block;
}

.container {
  background-image: url('../assets/homestead_home.jpg');
  object-position: center;
  height: 100%;
}

.brand-image {
  width: 192px;
  height: 192px;
}

.description-short {

}

.button-container > * {
  min-width: 128px;
}
</style>

