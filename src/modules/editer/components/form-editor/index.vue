<template>
  <div class="attribute-editor">
    <a-tabs type="card">
      <a-tab-pane
        key="1"
        tab="外观"
      >
        <component :is="formUIMap[formType]" />
      </a-tab-pane>
      <a-tab-pane
        key="2"
        tab="编辑"
      >
        <component :is="formAttrMap[formType]" />
      </a-tab-pane>
      <a-tab-pane
        key="3"
        tab="其他"
      >
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import eventKeys from "@/commons/event-keys";
import cInputAttr from "@/packages/input/attribute.vue";
import cButtonAttr from "@/packages/button/attribute.vue";
import cInputUI from "@/packages/input/ui.vue";
import cButtonUI from "@/packages/button/ui.vue";
import cTextButtonUI from "@/packages/textButton/ui.vue";

export default {
  name: "EditerAttributeEditor",
  data() {
    return {
      formType : 0,
       //0=页面;1=logo;2=文本框;3=密码;5=按钮;6=文本按钮
      formAttrMap: {
        2 : "cInputAttr",
        5 : "cButtonAttr",
      },
      formUIMap: {
        2 : "cInputUI",
        5 : "cButtonUI",
        6 : "cTextButtonUI",
      },
    };
  },
  components: {
    cInputAttr,
    cButtonAttr,
    cInputUI,
    cButtonUI,
    cTextButtonUI,
  },
  mounted() {
    // 点击表单
    this.$root.$on(eventKeys.ON_CLICK_BEAUTIFY_FORM_EL, (formType) => {
      this.formType = formType;
      console.log(formType,'--====---')
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
