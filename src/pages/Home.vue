<template>
  <div class="home">
    <lbr-srcoll @refresh="refresh">
      <lbr-button  @click="message(1)">按钮</lbr-button>
      <input v-resetInput/>
      <lbr-date-picker v-model="birthday" label="生日" date-format="yyyy-mm-dd"></lbr-date-picker>
      <ul class="s">
        <li v-for="(item,index) in 20"  :key="index">aaa</li>
      </ul>
    </lbr-srcoll>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      birthday: "2016-12-01"
    };
  },
  created() {
    console.log("home");
  },
  methods: {
    message(a) {
      console.log(a)
      this.$lbrLoading.show();
      setTimeout(() => {
        this.$lbrLoading.hide();
      }, 1000);
      // this.$lbrMessage({title:"普通消息"}).then(()=>{
      //   console.log("Sdd")
      // });
    },
    refresh(callback) {
      setTimeout(() => {
        callback();
      }, 1000);
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.logo {
  width: 750px;
}
.s {
  li {
    line-height: 80px;
    font-size: 40px;
  }
}
</style>

