<template>
   <form>
     <slot></slot>
   </form>
</template>
<script>
   export default {
     name:'lbr-form',
     provide() {
       return {
          form:this
       }
     },
     props:['rules','model'],
     methods:{
        validate(cb) {
        //执行所有的FormItem的方法
          const tasks = this.$children
          .filter(v => v.prop)
          .map(item => item.validate())

          Promise.all(tasks)
          .then(() => cb(true))
          .catch(() => cb(false))
        }
     }
   }
</script>