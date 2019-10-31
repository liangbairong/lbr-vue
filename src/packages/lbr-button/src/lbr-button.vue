<template>
    <button :class="{'button':true,'min-button':min}" @click="click"><slot/></button>
</template>
<script>
    export default {
        name: 'lbr-button',
        data() {
            return {

            }
        },
        props: {
            title: {
                type: String,
                default: "按钮"
            },
            min: {
                type: Boolean,
                default: false
            },
        },
        methods:{
          click(){
            this.$emit('click')
          }
        }
    }
</script>

<style lang="scss" scoped>
.button {
  border-radius: 50px;
  text-shadow: 0px 1PX 0px #2f6627;
  font-family: Arial;
  color: #ffffff;
  font-size:34px;
  background: #44c767;
  padding: 20px 50px 20px 50px;
  border: solid #18ab29 1PX;
  text-decoration: none;
  display: block;
  width: 100%;
  box-sizing: border-box;
}
.min-button{
  display: inline-block;
  width: auto;
}

.button:hover {
  color: #ffffff;
  background: #5cbf2a;
  text-decoration: none;
}
</style>