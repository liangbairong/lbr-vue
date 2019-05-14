<template>
  <div class="about">
    <h1>This is an about page</h1>
      <img alt="Vue logo" src="../assets/logo.png" class="logo" >
        <img alt="Vue logo" src="../assets/logo.png" class="logo" >
          <img alt="Vue logo" src="../assets/logo.png" class="logo" >
            <img alt="Vue logo" src="../assets/logo.png" class="logo" >
  </div>
</template>
<script>

export default {
  name: 'about',
  components: {
    // HelloWorld
  },
  created(){
    console.log('about')
  }
}
</script>
<style lang="scss" scoped>
.about{
  position: absolute;
  width: 100%;height: 100%;
  background: red;
}
</style>

