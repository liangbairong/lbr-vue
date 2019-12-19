<template>
  <div class="app2">
    <lbr-form :model="model" :rules="rules" ref="loginForm">
      <lbr-form-item lable="用户名" prop="username">
        <lbr-input v-model="model.username"></lbr-input>
      </lbr-form-item>
      <lbr-form-item lable="用户密码" prop="password">
        <lbr-input type="password" v-model="model.password"></lbr-input>
      </lbr-form-item>
      <lbr-form-item>
        <lbr-button type="primary" @click="submitForm('loginForm')">提交</lbr-button>
      </lbr-form-item>
    </lbr-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      model: { username: "", password: "" },
      rules: {
        username: [{ required: true, message: "请输入用户名" }],
        password: [{ required: true, message: "请输入密码" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        // if (valid) {
        //   alert("校验成功");
        // } else {
        //   alert("校验失败");
        // }
      });
    }
  }
};
</script>
