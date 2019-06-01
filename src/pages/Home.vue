<template>
  <div class="home">
    <lbr-button class="red">fd</lbr-button>

  </div>
</template>

<script>
  import {lbrButton} from '@/packages/index'
export default {
  name: 'home',
  components: {
   'lbr-button': lbrButton
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

</style>

