<template>
  <div>
    <lbr-srcoll @refresh="refresh" :isPaging="true" @loadMove='loadMove'>
      <ul class="list">
        <li v-for="(item,index) in list"  :key="index">{{item}}</li>
      </ul>
    </lbr-srcoll>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list:[]
    };
  },
  created() {
    this.init();
  },
  methods: {
    init(){
      this.list=[]
      for(let i=0;i<20;i++){
          this.list.push(i)
      }
    },
    refresh(callback) {
      setTimeout(() => {
        this.init();
        this.$LbrMessage({title:"刷新成功"})
        callback();
      }, 1000);
    },
    loadMove(callback) {
      setTimeout(() => {
        for(let i=0;i<20;i++){
          this.list.push(i)
        }
        callback();
      }, 1000);
    }
  }
};
</script>
<style lang="scss" scoped>
.list {
  text-align: center;
  li {
    line-height: 120px;
    font-size: 40px;
    border-bottom: 1PX solid #eee;
  }
}
</style>

