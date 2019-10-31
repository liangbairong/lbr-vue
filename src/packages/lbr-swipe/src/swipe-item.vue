<template>
  <div class="lbr-swipe-item">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'lbr-swipe-item',

    mounted() {
      this.$parent && this.$parent.swipeItemCreated(this);
    },

    destroyed() {
      this.$parent && this.$parent.swipeItemDestroyed(this);
    }
  };
</script>
