<template>
  <div id="app">

    <keep-alive>
      <router-view />
    </keep-alive>

  </div>
</template>
<script>
  export default {
    name: "app",
    data() {
      return {
        transitionName: '',
        topNum: 0
      };
    },
    created() {
      var _this = this;
      window.addEventListener("scroll", debounce(realFunc, 300));
      //优化滚动效果防抖动
      function debounce(fn, time) {
        var timeout = null;
        return function () {
          clearTimeout(timeout);
          timeout = setTimeout(fn, time);
        };
      }

      function realFunc() {
        var scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        console.log(scrollTop);

        _this.topNum = scrollTop;
      }
    },
    watch: {
      $route(to, from) {
        window.document.title = to.meta.title || "慧宝";
        from.meta.topNum = this.topNum
        if (to.meta.rank > from.meta.rank || !from.name) {
          console.log("23");


          setTimeout(() => {
            window.scrollTo(0, 0);
          }, 50);
        } else {

          setTimeout(() => {
            window.scrollTo(0, to.meta.topNum);
          }, 50);
        }

        console.log(from);
        console.log(to);
      }
    },
    methods: {



    }
  };
</script>

<style lang="scss">

</style>