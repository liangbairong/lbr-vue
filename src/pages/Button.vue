<template>
  <div>
    <lbr-button max>超大</lbr-button>
    <lbr-button >按钮</lbr-button>
    <lbr-button :radius="10" >10度圆角</lbr-button>
    <lbr-button :radius="50" >圆角</lbr-button>

    <lbr-button max :radius="50" :disabled="true" >圆角</lbr-button>
  </div>
</template>
<script>
export default {
  name:'button'
}
</script>