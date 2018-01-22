<template>
  <md-table md-card v-model="scores">
    <md-table-toolbar>
      <h1 class="md-title">High Scores</h1>
    </md-table-toolbar>
    <md-table-row slot="md-table-row" slot-scope="{ item }">
      <md-table-cell md-label="Score" md-sort-by="score" md-numeric>{{ item.score }}</md-table-cell>
      <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
    </md-table-row>
  </md-table>
</template>

<script>
// import * as firebase from 'firebase'

export default {
  name: 'game-leaderboard',
  computed: {
    scores () {

    }
  }
}
</script>