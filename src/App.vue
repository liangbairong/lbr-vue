<template>
  <div id="app">
    <header class="header">
      <span @click="back">后退</span>
      {{title}}
    </header>
    <div class="rowheight"></div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      title:''
    };
  },
  created() {},
  watch: {
    $route(to, from) {
      this.title=to.name || from.name
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss">
.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100px;
  line-height: 100px;
  background: #fff;
  z-index: 99;
  font-size: 36px;
  text-align: center;
  font-weight: 800;
}
.rowheight {
  height: 100px;
}
</style>