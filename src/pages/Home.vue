<template>
  <div class="home">
    <ul class="list">
      <li v-for="(item,index) in list" :key="index">
        <router-link :to="item.url">{{item.text}}</router-link>
      </li>
    </ul>

    <!-- <mt-picker :slots="slots" @change="onValuesChange"></mt-picker> -->

  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      slots: [
        {
          flex: 1,
          values: [
            "2015-01",
            "2015-02",
            "2015-03",
            "2015-04",
            "2015-05",
            "2015-06"
          ],
          className: "slot1",
          textAlign: "right"
        },
        {
          divider: true,
          content: "-",
          className: "slot2"
        },
        {
          flex: 1,
          values: [
            "2015-01",
            "2015-02",
            "2015-03",
            "2015-04",
            "2015-05",
            "2015-06"
          ],
          className: "slot3",
          textAlign: "left"
        }
      ],
      list: [
        {
          text: "Button",
          url: "button"
        },
        {
          text: "Srcoll",
          url: "srcoll"
        },
        {
          text: "Swipe",
          url: "swipe"
        },
        {
          text: "Pop",
          url: "pop"
        },
        {
          text: "Button",
          url: "button"
        },
        {
          text: "Form",
          url: "form"
        }
      ]
    };
  },
  created() {}
};
</script>
<style lang="scss" scoped>
.list {
  // display: flex;
  padding: 0 20px;
  flex-wrap: wrap;
  background: #fff;
  font-size: 34px;

  li {
    border-bottom: 1px solid #eee;

    height: 100px;
    line-height: 100px;

    box-sizing: border-box;

    a {
      display: block;
    }
  }
}
</style>

