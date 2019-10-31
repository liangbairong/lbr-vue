<template>
  <div>
    <scroller v-if="isPaging" :refreshText='refreshText' :noDataText='noDataText' :on-refresh="refresh" :on-infinite="loadMove" ref="my_scroller">
      <slot></slot>
    </scroller>
    <scroller :on-refresh="refresh" :refreshText='refreshText' :noDataText='noDataText' v-else ref="my_scroller">
      <slot></slot>
    </scroller>
  </div>
</template>
<script>
import scroller from './components/Scroller'
export default {
  name: "lbr-srcoll",
  data() {
    return {

    };
  },
  components:{scroller},
  props: {
    //是否开启下拉加载
    isPaging: {
      type: Boolean,
      default: false
    },
    //下拉刷新的提示文字
    refreshText: {
      type: String,
      default: '下拉刷新'
    },
    //下拉刷新的提示文字
    noDataText: {
      type: String,
      default: '数据已加载完'
    },
    
  },
  mounted() {
    this.init();
  },
  methods: {
    init(){
      if(this.isPaging){
        this.$refs.my_scroller.finishInfinite(true); // 禁止上拉加载更多
      }
    },
    // 下拉刷新
    refresh() {
      this.$emit("refresh", () => {
       this.$refs.my_scroller.finishPullToRefresh();
      });
    },
    /**
     * 加载更多
     */
    loadMove() {
      this.$emit("loadMove", () => {
        this.$refs.my_scroller.finishInfinite(true); // 禁止上拉加载更多
      });
    },
    // 滚动到指定位置
    scrollTo(x,y,times){
      this.$refs.my_scroller.scrollTo(x,y,times)
    }
  }
};
</script>

<style lang="scss">
._v-container > ._v-content > .pull-to-refresh-layer {
  float: left;
}
</style>