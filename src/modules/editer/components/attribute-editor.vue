<template>
  <div class="attribute-editor">
    <a-tabs type="card">
      <a-tab-pane
        key="1"
        tab="编辑"
      >
        <div class="form-view">
          <div class="form-row">
            基础设置
          </div>
          <div class="form-row">

            <div class="form-col name">
              名称：
            </div>
            <div class="form-col input">
              <a-input @keyup="doEdit" v-model="postEditeData.input.value"  />
            </div>
          </div>
        </div>
      </a-tab-pane>
      <a-tab-pane
        key="2"
        tab="其他"
      >
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import eventKeys from "@/commons/event-keys";
export default {
  name: "EditerAttributeEditor",
  data() {
    return {
      getEditeData: {},
      postEditeData: {
        input : {
          value : ''
        }
      }
    };
  },
  components: {},
  mounted() {
    this.$root.$on(eventKeys.ON_ATTRIBUTE_EDITE, item => {
      this.getEditeData = item.config;
      console.log("ON_ATTRIBUTE_EDITE: ", item);
    });
  },
  methods: {
    doEdit() {
      this.$root.$emit(eventKeys.ON_ATTRIBUTE_EDITE_UPDATE, this.postEditeData);
    }
  }
};
</script>

<style lang="less" scoped>
.attribute-editor {
  width: 300px;
  height: 100%;
  background-color: #f1f8ff;
  padding: 15px;
}
.form-view {
  .form-row {
    display: flex;
    justify-content: flex-start;
    .form-col {
    display: flex;
    justify-content: flex-start;
    align-items: center;
      flex: 1;
      &.name {
        flex: 3;
        text-align: right;
      }
      &.input {
        flex: 7;
      }
    }
  }
}
</style>
