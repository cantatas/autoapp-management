<template>
  <div class="page-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "PageContent",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>

<style lang="less" scoped>
.page-content {
  position: absolute;
  left: 130px;
  right: 0;
  top: 80px;
  display: flex;
}
</style>
