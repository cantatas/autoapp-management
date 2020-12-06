<template>
  <div class="phone-view">
    <iframe
      id="page-view"
      ref="appIframe"
      src="./app/#/login"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
import { getInfoByIdApi } from "@/api/pageList";
import { saveDataApi } from "@/api/editor";
import eventKeys from "@/commons/event-keys";

export default {
  name: "EditerPhoneView",
  data() {
    return {
      beautifyType: {
        //0=页面; 1=logo; 2=文本框; 3=密码;5=按钮; 6=文本按钮
        1: "cLogo",
        2: "cInput",
        6: "cButton",
      },
      editeData: {},
    };
  },
  mounted() {
    this.setPagePath();
    this.init();
  },
  methods: {
    init() {
      getInfoByIdApi({ _id: this.$route.params.id }).then((res) => {
        document.title = res[0].title;
      });
      this.onClickPage();
      this.onEditeFormAttrs();
      this.onSaveData();
      this.setPageBeautify();
    },
    setPagePath(){
        const sedata = this.$refs.appIframe.contentWindow.sessionStorage.getItem("beautify-page-list")
        this.$refs.appIframe.src = `./app/#${JSON.parse(sedata)[0].path}`;
    },
    onSaveData() {
      //保存
      this.$root.$on(eventKeys.ON_CLICK_SAVE_DATA, () => {
        const params = {
          page_id: this.$route.params.id,
          formAttribute: this.editeData,
        };
        saveDataApi(params).then((res) => {
          if (!res.data.success) {
            this.$message.error("保存失败");
          }else{
            this.$message.success("保存成功");
          }
        });
      });
    },
    onClickPage() {
      this.$refs.appIframe.contentWindow.addEventListener("click", (e) => {
        const formType = e.target.getAttribute("data-beautify-type");
        this.$root.$emit(eventKeys.ON_CLICK_BEAUTIFY_FORM_EL, formType);
      });
    },
    onEditeFormAttrs() {
      //表单属性编辑
      this.$root.$on(
        eventKeys.ON_EDITE_FORM_ATTRS,
        ({
          fontColor,
          FormBorderClass,
          borderColor,
          borderThick,
          borderRadius,
          formType,
        }) => {

          // 样式设置
          const FormTitleColor = `
          --input-title-color:${fontColor};
          --input-border-color:${borderColor};
          --input-border-radius:${borderRadius};
          --input-border-thick:${borderThick}px;
          `;

          //接口参数
          this.editeData = {
            formType,
            FormTitleColor,
            FormBorderClass,
          };
          //页面样式更改
          const pageInstance = this.$refs.appIframe.contentWindow.document.body;
          pageInstance.style = FormTitleColor;
          const bForm = pageInstance.querySelector(".beautify-form");
          const noBorder = "no-border";
          const fllBorder = "full-border border-radius";
          if (bForm) {
            bForm.className = `${bForm.className
              .replace(noBorder, "")
              .replace(fllBorder, "")} ${FormBorderClass} `; //form表单样式
          }
          console.log(fontColor, FormBorderClass, borderColor, borderRadius);
        }
      );
    },
    setPageBeautify() {
      let iframe = this.$refs.appIframe.contentWindow;
      iframe.window.onload = () => {
        let cnames = iframe.document.body.className;
        iframe.document.body.className = `${cnames} beautify`;
      };
    },
  },
};
</script>

<style lang="less" scoped>
.phone-view {
  width: 375px;
  height: 667px;
  background: url(../../../assets/imgs/phone-bg.png);
  box-shadow: 0 0 14px 0 rgba(22, 45, 61, 0.36);
  margin-top: 40px;
  margin-bottom: 80px;
  iframe {
    width: 100%;
    height: 100%;
  }
}
/deep/ .vue-resizable-handle {
  z-index: 9999;
}
.vue-grid-item {
  background: transparent;
  border-radius: 4px;

  &:hover {
    .item-mask {
      display: flex;
    }
  }
  .item-mask {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    justify-content: center;
    z-index: 99;
    background: rgba(0, 0, 0, 0.7);
    display: none;
    a {
      color: #fff;
      line-height: 2.5;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px;
      margin-right: 15px;
      &.del {
        color: #ffac11;
      }
    }
  }
  > * {
    z-index: -1;
    width: 100%;
    height: 100%;
  }
}
</style>
