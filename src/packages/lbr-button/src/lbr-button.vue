<template>
    <button class="btn" v-tap="{methods:ss}">{{title}}</button>
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
            ss(){
                console.log("11")
            }
        }
    }
</script>

<style lang="scss" scoped>
.btn{
    background: #fff;
    border: 1PX solid #eee;
    padding: 10px 20px;
    font-size: 20px;
    border-radius: 10px;
}
</style>