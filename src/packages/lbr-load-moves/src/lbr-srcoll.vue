<template>
  <div>
    <scroller v-if="isPaging" :on-refresh="refresh" :on-infinite="infinite" ref="my_scroller">
      <slot></slot>
    </scroller>
    <scroller :on-refresh="refresh" v-else ref="my_scroller">
      <slot></slot>
    </scroller>
  </div>
</template>
<script>
export default {
  name: "lbr-srcoll",
  data() {
    return {
      page: 1
    };
  },
  props: {
    //是否分页
    isPaging: {
      type: Boolean,
      default: false
    }
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
    refresh() {
      this.$emit("refresh", () => {
       this.$refs.my_scroller.finishPullToRefresh();
      });
    },
    /**
     * 加载更多
     */
    infinite() {
      this.$emit("loadMove", () => {
        this.$refs.my_scroller.finishInfinite(true); // 禁止上拉加载更多
      });
    }
  }
};
</script>

<style lang="scss">
._v-container > ._v-content > .pull-to-refresh-layer {
  float: left;
}
</style>