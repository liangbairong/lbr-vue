<template>
  <ul class="content">
    <li>
       <lbr-button @click="loading">loading</lbr-button>
    </li>
    <li>
      <lbr-button @click="message">message</lbr-button>
    </li>
    
  </ul>
</template>
<script>
export default {
  name: "pop",
  data() {
    return {};
  },
  methods: {
    loading() {
      this.$LbrLoading.open();
      setTimeout(() => {
        this.$LbrLoading.close();
      }, 1000);
    },
    message(){
      this.$LbrMessage({title:'sdsdsd'})
    }
  }
};
</script>
<style lang="scss" scoped>
.content{
  padding: 20px;
  li{
    margin-top: 30px;
  }
}
</style>