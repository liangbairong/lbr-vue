<template>
  <button
    :disabled="disabled"
    :class="{'lbr-button':true,'lbr-max-button':max}"
    :style="`border-radius: ${radius}px;`"
    @click="click"
  >
    <slot />
  </button>
</template>
<script>
export default {
  name: "lbr-button",
  data() {
    return {
      color: "red"
    };
  },
  props: {
    title: {
      type: String,
      default: "按钮"
    },
    max: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    radius: {
      type: Number,
      default: 0
    }
  },
  methods: {
    click() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped>
.lbr-button {
  border-radius: 50px;
  text-shadow: 0px 1px 0px #2f6627;
  font-family: Arial;
  color: #ffffff;
  font-size: 34px;
  background: #44c767;
  padding: 20px 50px 20px 50px;
  border: solid #18ab29 1px;
  text-decoration: none;

  box-sizing: border-box;
  display: inline-block;
  width: auto;
}
.lbr-max-button {
  display: block;
  width: 100%;
}

.lbr-button:hover {
  background: #5cbf2a;
}
.lbr-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.lbr-button:disabled:hover{
   background: #44c767;
}
</style>