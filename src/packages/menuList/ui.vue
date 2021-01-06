<template>
  <div class="form-view">
    <div class="form-row">
      <a-form :form="form" v-bind="formItemLayout">
        <a-form-item label="字体颜色">
          <a-input v-model="dataFrom.listMenuFontColor" placeholder="名字体颜色设置" />
        </a-form-item>
        <a-form-item label="字体大小">
          <a-input-number
            @change="onFontSize"
            v-model="dataFrom.listMenuFontSize"
            :min="9"
            :max="20"
          />
        </a-form-item>
        <a-form-item label="菜单排列">
          <a-select v-model="dataFrom.listMenuColumnNum" default-value="">
            <a-select-option value="50%">
              2列
            </a-select-option>
            <a-select-option value="33.33%">
              3列
            </a-select-option>
            <a-select-option value="25%">
              4列
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="图标下间距">
          <a-input-number
            @change="onMarginBottom"
            v-model="dataFrom.listMenuIconMarginBottom"
            :min="5"
            :max="40"
          />
        </a-form-item>
        <a-form-item label="图标阴影">
          <a-input v-model="dataFrom.listMenuIconBoxShadow" placeholder="图标阴影设置" />
        </a-form-item>
        <a-form-item label="图标半圆">
          <a-input v-model="dataFrom.listMenuIconBorderRadius" placeholder="图标半圆设置" />
        </a-form-item>
        <a-form-item label="图标背景色">
          <a-input v-model="dataFrom.listMenuIconBgColor" placeholder="图标背景色设置" />
        </a-form-item>
        <a-form-item label="图标颜色">
          <a-input v-model="dataFrom.listMenuIconColor" placeholder="图标颜色设置" />
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
  name: "appPageLibMenuListUI",
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
        listMenuFontColor: '#333',
        listMenuFontSize: 12,
        listMenuColumnNum: '33.33%',
        listMenuIconBoxShadow: '0 6px 15px -3px #000',
        listMenuIconBgColor: '#fff',
        listMenuIconColor: '#105595',
        listMenuIconBorderRadius: '100%',
        listMenuIconMarginBottom: 20,
        formType: 7,
      },
      timer: null,
    };
  },
  mounted() {
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
    onFontSize(val) {
      this.dataFrom.listMenuFontSize = val;
    },
    onMarginBottom(val) {
      this.dataFrom.listMenuIconMarginBottom = val;
    },
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
