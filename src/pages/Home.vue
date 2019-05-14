<template>
  <div class="home">
    <lbr-button class="red">fd</lbr-button>
    <img alt="Vue logo" src="../assets/logo.png" class="logo" >
    <router-link to="/about">about</router-link>
     <img alt="Vue logo" src="../assets/logo.png" class="logo" >
     <img alt="Vue logo" src="../assets/logo.png" class="logo" >
     <img alt="Vue logo" src="../assets/logo.png" class="logo" ><img alt="Vue logo" src="../assets/logo.png" class="logo" >
     <div>sjsjjs</div>
      <router-link to="/about">about</router-link>
        <div>sjsjjs</div>
          <div>sjsjjs</div>
            <div>sjsjjs</div>

  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
    // lbrButton
    // HelloWorld
  },
  created(){
    console.log('home')
  }
}
</script>
<style lang="scss" scoped>

.logo{
  width:750px;
}
.red{
  background: #000;
}
</style>

