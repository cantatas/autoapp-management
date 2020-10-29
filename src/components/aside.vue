<template>
<aside class="aside-panel">
aside
</aside>
</template>

<script>
export default {
  name: 'AsidePanel',
  props: {
    msg: String
  }
}
</script>

<style lang="less" scoped>
.aside-panel{
    position: absolute;
    top:50px;
    left:0;
    bottom:0;
    background: #3899ec;
    display: inline-block;
    height: 100%;
    vertical-align: top;
    width: 186px;
    color:#fff;
    .sub{
      background-color: #f1f8ff;
      display: inline-block;
      height: calc(100% - 28px);
      padding: 14px 0;
      vertical-align: top;
    }
}
</style>
