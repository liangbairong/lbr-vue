<template>
  <div class="home">
    <ul class="list">
      <li v-for="(item,index) in list" :key="index">
        <router-link :to="item.url">
          {{item.text}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { LbrMessage } from '@/packages/index'
export default {
  name: "home",
  data() {
    return {
      list:[
        {
          text:'Button',
          url:'button'
        },
        {
          text:'Srcoll',
          url:'srcoll'
        },{
          text:'Button',
          url:'button'
        },
        {
          text:'Button',
          url:'button'
        },
        {
          text:'Button',
          url:'button'
        }
      ],
      birthday: "2016-12-01"
    };
  },
  created() {
    console.log("home");
  },
  methods: {
    message(a) {
      console.log(a)
      // this.$toast({ message: '提示',})
      LbrMessage({title:'sss'})
      // this.$lbrLoading.show();
      // setTimeout(() => {
      //   this.$lbrLoading.hide();
      // }, 1000);
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
.list{
  display: flex;
  text-align: center;

   flex-wrap:wrap;
   border-top: 1PX solid #ccc;
   border-left: 1PX solid #ccc;
   font-size: 40px;
  li{
    border: 1PX solid #ccc;
    border-left: none;
    border-top: none;
    height: 200px;
    line-height: 200px;
    width:33.33%;
    box-sizing: border-box;
    a{
      display: block;
    }
  }
}
</style>

