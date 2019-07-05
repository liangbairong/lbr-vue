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
    this.$message.info("普通消息");
  }
};
</script>
<style lang="scss" scoped>
.logo {
  width: 750px;
}
</style>

