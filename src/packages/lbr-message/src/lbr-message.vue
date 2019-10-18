<template>
  <transition name="fade">
    <div class="message" :class="type" v-show="show">
      <i class="icon"></i>
      <span class="text">{{text}}</span>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
export default {
  name: "lbr-message",
  props: {
    type: {
      type: String,
      default: "info",
      validator: val => ["info", "success", "warning", "error"].includes(val)
      //['info', 'success', 'warning', 'error'] 表示type只接收这四个字符串作为参数传入message组件
    },
    text: {
      type: String,
      default: ""
    },
    show: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.message {
  position: fixed;
  top: 50%;
  text-align: center;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  min-width: 400px;
  padding: 10px 20px;
  color: #000;
  background: #f5f5f5;
  font-size: 36px;
  line-height: 1.4;
  border-radius: 10px;
  z-index: 1000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  &.info {
    background: #fff;
  }
  &.success {

  }
  &.error {
  }
  &.warning {
  }
}
</style>