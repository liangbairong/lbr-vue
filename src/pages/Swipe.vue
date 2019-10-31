<template>
  <div>
    <h2>自动播放</h2>
    <lbr-swipe :auto="4000" @change="handleChange" style="height:200px">
      <lbr-swipe-item>1</lbr-swipe-item>
      <lbr-swipe-item>2</lbr-swipe-item>
      <lbr-swipe-item>3</lbr-swipe-item>
    </lbr-swipe>
    <h2>关闭自动播放</h2>
    <lbr-swipe :auto="0">
      <lbr-swipe-item>1</lbr-swipe-item>
      <lbr-swipe-item>2</lbr-swipe-item>
      <lbr-swipe-item>3</lbr-swipe-item>
    </lbr-swipe>
  </div>
</template>
<script>
export default {
  name: "swipe",
  data() {
    return {};
  },
  methods:{
    handleChange(index){
      console.log(index)
    }
  }
};
</script>