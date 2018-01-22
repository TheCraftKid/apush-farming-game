<template>
  <md-card>
    <md-card-header>
     <h2 class="md-title">{{ title }}</h2>
     <div class="md-subhead">{{ subtitle }}</div>
    </md-card-header>

    <md-card-content>{{ exposition }}</md-card-content>
    
    <md-card-actions>
      <md-button v-on:click="triggerCallback">{{ actionText }}</md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
export default {
  name: 'exposition-dialog',
  props: ['title', 'subtitle', 'exposition', 'actionText'],
  methods: {
    triggerCallback (event) {
      this.$emit('on-action')
    }
  }
}
</script>

<style>
md-card {
  max-width: 320px;
  margin: 16px;
}
</style>
