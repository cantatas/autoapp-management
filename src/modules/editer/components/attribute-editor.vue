<template>
  <div class="attribute-editor">
    <a-tabs type="card">
      <a-tab-pane key="1" tab="编辑">
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
      </a-tab-pane>
      <a-tab-pane key="2" tab="其他">
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
export default {
  name: "EditerAttributeEditor",
  components: {},
};
</script>

<style lang="less" scoped>
.attribute-editor {
  width: 300px;
  height: 100%;
  background-color: #f1f8ff;
  padding: 15px;
}
</style>
