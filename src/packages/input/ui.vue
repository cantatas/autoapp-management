<template>
  <div class="form-view">
    <div class="form-row">
      <a-form :form="form" v-bind="formItemLayout">
        <a-form-item label="字体颜色">
          <a-input v-model="dataFrom.fontColor" placeholder="名字体颜色设置" />
        </a-form-item>
        <a-form-item label="边框样式">
          <a-select v-model="dataFrom.FormBorderClass" default-value="">
            <a-select-option value="">
              底部有边框
            </a-select-option>
            <a-select-option value="no-border">
              无边框
            </a-select-option>
            <a-select-option :value="fullBorder">
              有边框
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item v-if="dataFrom.FormBorderClass === fullBorder" label="边框半圆">
          <a-input v-model="dataFrom.borderRadius" placeholder="边框半圆设置" />
        </a-form-item>
        <a-form-item v-if="dataFrom.FormBorderClass !== 'no-border'" label="边框宽度">
          <a-input-number
            @change="onBorderThickChange"
            v-model="borderThick"
            :min="1"
            :max="3"
          />
        </a-form-item>
        <a-form-item  v-if="dataFrom.FormBorderClass !== 'no-border'" label="边框颜色">
          <a-input v-model="dataFrom.borderColor" placeholder="边框颜色设置" />
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};
const formTailLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16, offset: 4 },
};
import eventKeys from "@/commons/event-keys";

export default {
  name: "appPageLibInputUI",
  props: {},
  data() {
    return {
      checkNick: false,
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this, { name: "dynamic_rule" }),
      config: {
        required: 0,
      },
      dataFrom: {
        fontColor: "",
        FormBorderClass: "",
        borderColor: "",
        borderThick: 1,
        borderRadius: "",
        formType: 2,
      },
      borderThick: 1,
      timer: null,
      fullBorder : 'full-border border-radius'
    };
  },
  mounted() {
    this.$root.$on(eventKeys.ON_ATTRIBUTE_EDITE_UPDATE, ({ config }) => {
      console.log(config);
    });
  },
  watch: {
    dataFrom: {
      handler(newVal) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.$root.$emit(eventKeys.ON_EDITE_FORM_ATTRS, newVal);
        }, 1000);
      },
      deep: true,
    },
  },
  methods: {
    doEdit() {},
    check() {
      this.form.validateFields((err) => {
        if (!err) {
          console.info("success");
        }
      });
    },
    onBorderThickChange(val) {//边框
      this.dataFrom.borderThick = val;
    },
  },
};
</script>

<style lang="less" scoped>
@import "@/assets/less/form.less";
.form-row {
  font-size: 12px;
  width: 100%;
  h3 {
    font-size: 14px;
  }
}
</style>
