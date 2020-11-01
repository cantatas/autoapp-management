<template>
  <div class="page-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "PageContent",
  data() {
    return {
    };
  },
  components: {
  },
  methods: {
  },
};
</script>

<style lang="less" scoped>
.page-content {
  position: absolute;
  left: 186px;
  right: 0;
  top: 50px;
  display: flex;
}
</style>
