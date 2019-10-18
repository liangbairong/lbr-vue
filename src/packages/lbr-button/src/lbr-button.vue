<template>
    <button class="btn"  >{{title}}</button>
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
        },
        methods:{

        }
    }
</script>

<style lang="scss" scoped>
.btn{
  background: #fff;
  border: 1PX solid #eee;
  padding: 20px 40px;
  font-size: 30px;
  border-radius: 10px;
}
</style>