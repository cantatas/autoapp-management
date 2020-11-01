<template>
  <aside class="aside-panel">
    <slot></slot>
  </aside>
</template>

<script>
export default {
  name: "AsidePanel",
  props: {
    msg: String,
  },
};
</script>

<style lang="less" scoped>
.aside-panel {
  position: absolute;
  top: 50px;
  left: 0;
  display: inline-block;
  height: 100%;
  vertical-align: top;
  min-width: 45px;
  max-width: 500px;
  color: #fff;
}
</style>
