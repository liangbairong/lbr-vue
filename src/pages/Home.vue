<template>
  <div class="home">
    <lbr-load-move>
      <lbr-button class="red">fd</lbr-button>
    </lbr-load-move>
  </div>
</template>

<script>
export default {
  name: "home",
  created() {
    console.log("home");
    this.$toast({
      message: "提示",
      position: "bottom",
      duration: 5000
    });
  }
};
</script>
<style lang="scss" scoped>
.logo {
  width: 750px;
}
</style>

