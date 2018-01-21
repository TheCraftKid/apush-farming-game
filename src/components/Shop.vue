<template>
  <md-list>
    <md-list-item v-for="item in items" v-bind:key="item.itemId">
      <img class="item-icon" :src="fetchIconSrc(itemId)">
      <span class="md-list-item-text">{{ item.name }}</span>
    </md-list-item>
  </md-list>
</template>
<script>
export default {
  name: 'item-shop',
  computed: {
    // item() {
    //   if (this.$route.params)
    // }
  },
  methods: {
    fetchIconSrc (itemId) {
      switch (itemId) {

      }
    }
  }
}
</script>

<style>
.shop-icon {

}
</style>
