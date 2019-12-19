<template>
  <div>
    <div v-if="lable">{{lable}}</div>
    <slot></slot>
    <p v-if="error" style="color:red">{{error}}</p>
  </div>
</template>
<script>
import Schema from "async-validator";
export default {
  name: "lbr-form-item",
  props: ["lable", "prop"],
  //能够获取全局的规则
  inject: ["form"],
  data() {
    return {
      error: ""
    };
  },
  mounted() {
    this.$on("validate", this.validate);
  },
  methods: {
    validate() {
      //每个item都有一个validata方法
      //1、获取rule校验规则
      const rules = this.form.rules[this.prop];
      //2、获取model数据模型
      const value = this.form.model[this.prop];
      let descriptor = {
        [this.prop]: rules
      };
      const schema = new Schema(descriptor);
      return schema.validate(
        {
          [this.prop]: value
        },
        errors => {
          if (errors) {
            this.error = errors[0].message;
          } else {
            this.error = "";
          }
        }
      );
    }
  }
};
</script>
