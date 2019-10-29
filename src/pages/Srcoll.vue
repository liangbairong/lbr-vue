<template>
  <div>
    <lbr-srcoll @refresh="refresh">
      <ul class="s">
        <li v-for="(item,index) in 20"  :key="index">aaa</li>
      </ul>
    </lbr-srcoll>
  </div>
</template>

<script>
export default {
  data() {
    return {
      birthday: "2016-12-01"
    };
  },
  created() {
    console.log("home");
  },
  methods: {
    refresh(callback) {
      setTimeout(() => {
        callback();
      }, 1000);
    }
  }
};
</script>
<style lang="scss" scoped>
.s {
  li {
    line-height: 80px;
    font-size: 40px;
  }
}
</style>

