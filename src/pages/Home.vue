<template>
  <div class="home">
    <!-- <lbr-load-move>
      <lbr-button class="red">fd</lbr-button>
    </lbr-load-move> -->
     <button class="red" @click="message">fd</button>
  </div>
</template>

<script>

export default {
  name: "home",
  created() {
    console.log("home");
    
  },
  methods:{
    message(){
   
      this.$lbrMessage({title:"普通消息"}).then(()=>{
        console.log("Sdd")
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.logo {
  width: 750px;
}
</style>

