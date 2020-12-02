<template>
  <div class="form-view">
    <div class="form-row">
      <a-form :form="form">
        <a-form-item
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
          label="字体颜色"
        >
          <a-input v-model="dataFrom.fontColor" placeholder="名字体颜色设置" />
        </a-form-item>

        <a-form-item
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
          label="边框样式"
        >
          <a-input v-model="dataFrom.borderStyle" placeholder="边框样式设置" />
        </a-form-item>

        <a-form-item
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
          label="边框颜色"
        >
          <a-input v-model="dataFrom.borderColor" placeholder="边框颜色设置" />
        </a-form-item>

        <a-form-item
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
          label="边框半圆"
        >
          <a-input v-model="dataFrom.borderRadius" placeholder="边框半圆设置" />
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

import Vue from "vue";
import vcolorpicker from "vcolorpicker";
Vue.use(vcolorpicker);
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
        borderStyle: "",
        borderColor: "",
        borderRadius: "",
      },
      timer : null
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
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.$root.$emit(eventKeys.ON_EDITE_FORM_ATTRS, newVal);
        },1000)
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
