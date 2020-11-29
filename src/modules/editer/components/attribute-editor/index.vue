<template>
  <div class="attribute-editor">
    <a-tabs type="card">
      <a-tab-pane
        key="1"
        tab="基础"
      >
        <component :config="defaultData" :is="configType[config.type]" />
      </a-tab-pane>
      <a-tab-pane
        key="2"
        tab="编辑"
      >
      </a-tab-pane>
      <a-tab-pane
        key="3"
        tab="外观"
      >
      </a-tab-pane>
      <a-tab-pane
        key="4"
        tab="其他"
      >
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import eventKeys from "@/commons/event-keys";
import baseSettings from "./base-settings.vue";
import cInputAttr from "@/packages/input/attribute.vue";
import cButtonAttr from "@/packages/button/attribute.vue";

export default {
  name: "EditerAttributeEditor",
  data() {
    return {
      getEditeData: {},
      configType: {
        2: "cInputAttr",
        6: "cButtonAttr",
      },
      config : {},
      defaultData : {},
    };
  },
  components: {
    baseSettings,
    cInputAttr,
    cButtonAttr,
  },
  mounted() {
    this.$root.$on(eventKeys.ON_ATTRIBUTE_EDITE, ({ config,defaultData }) => {
      this.config = config;
      this.defaultData = defaultData;
    });
  },
  methods: {
    
  }
};
</script>

<style lang="less" scoped>

/deep/ .ant-input,
/deep/ .ant-form label {
  font-size: 12px;
  color:#666;
}
/deep/ .ant-form {
  width: 100%;
}
.attribute-editor {
  width: 400px;
  height: 100%;
  background-color: #f1f8ff;
  padding: 15px;
}
</style>
