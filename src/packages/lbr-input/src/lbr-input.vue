<template>
  <div>
    <input :type="type" :blur="onBlur" :value="value"  />
  </div>
</template>
<script>
//失去焦点时触发校验以及用户输入的时候触发校验
export default {
  name: "lbr-input",
  props: {
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: String,
      default: ""
    }
  },
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
      this.$parent.$emit("validate");
    },
    onBlur() {
      this.$dispatch("validate");
    }
  }
};
</script>
