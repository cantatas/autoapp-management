<template>
  <div>
    <div class="page-head">
      <span>{{ pageId }}</span
      >{{ pageName }}
    </div>
    <div class="phone-view">
      <iframe
        id="page-view"
        ref="appIframe"
        src="./app/#/login"
        frameborder="0"
      ></iframe>
    </div>
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
      editeData: {},
      pageId: "",
      pageName: "",
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
      this.onClickLeftPage();
      this.setPageBeautify();
    },
    setPagePath() {
      const sedata = this.$refs.appIframe.contentWindow.sessionStorage.getItem(
        "beautify-page-list"
      );
      const defData = JSON.parse(sedata)[0];
      if (defData.meta) {
        this.$refs.appIframe.src = `./app/#${defData.path}`;
        this.pageName = defData.meta.name;
        this.pageId = defData.meta.id;
      }
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
          } else {
            this.$message.success("保存成功");
          }
        });
      });
    },
    onClickPage() {
      //点击表单
      this.$refs.appIframe.contentWindow.addEventListener("click", (e) => {
        const formType = e.target.getAttribute("data-beautify-type");
        this.$root.$emit(eventKeys.ON_CLICK_BEAUTIFY_FORM_EL, formType);
      });
    },
    onEditeFormAttrs() {
      let inputStyle = "";
      let buttonStyle = "";
      let textButtonStyle = "";
      let listMenuStyle = "";
      let formStyle = "";
      //表单属性编辑
      this.$root.$on(
        eventKeys.ON_EDITE_FORM_ATTRS,
        ({
          fontColor,
          FormBorderClass,
          borderColor,
          borderThick,
          borderRadius,
          bgColor,
          textDecoration,
          listMenuFontColor,
          listMenuFontSize,
          listMenuColumnNum,
          listMenuIconBoxShadow,
          listMenuIconBorderRadius,
          listMenuIconBgColor,
          listMenuIconMarginBottom,
          formType,
        }) => {
          // 样式设置

          //0=页面; 1=logo; 2=文本框; 3=密码;5=按钮; 6=文本按钮
          if (formType === 2) {
            inputStyle = `
                    --input-title-color:${fontColor};
                    --input-border-color:${borderColor};
                    --input-border-radius:${borderRadius};
                    --input-border-thick:${borderThick}px;
                    `;
          } else if (formType === 5) {
            buttonStyle = `
                    --btn-font-color:${fontColor};
                    --btn-border-color:${borderColor};
                    --btn-border-radius:${borderRadius};
                    --btn-bg-color:${bgColor};
                    --btn-border-thick:${borderThick}px;
                    `;
          } else if (formType === 6) {
            textButtonStyle = `
                    --text-btn-font-color:${fontColor};
                    --text-btn-text-decoration:${textDecoration};
                    `;
          } else if (formType === 7) {
            listMenuStyle = `
                  --list-menu-font-color:${listMenuFontColor};
                  --list-menu-font-size:${listMenuFontSize}px;
                  --list-menu-column-num:${listMenuColumnNum};
                  --list-menu-box-shadow:${listMenuIconBoxShadow};
                  --list-menu-border-radius: ${listMenuIconBorderRadius};
                  --list-menu-icon-bgcolor: ${listMenuIconBgColor};
                  --list-menu-icon-margin-bottom: ${listMenuIconMarginBottom}px;
                    `;
          }
          //表单样式拼接
          formStyle = `${inputStyle || ""}${buttonStyle ||
            ""}${textButtonStyle || ""}${listMenuStyle}`;
          //接口参数
          this.editeData = {
            formType,
            formStyle,
            FormBorderClass,
          };
          //页面样式更改
          const pageInstance = this.$refs.appIframe.contentWindow.document.body;
          pageInstance.style = `${formStyle}`;
          const bForm = pageInstance.querySelector(".beautify-form");
          const noBorder = "no-border";
          const fllBorder = "full-border border-radius";
          if (bForm && FormBorderClass) {
            bForm.className = `${bForm.className
              .replace(noBorder, "")
              .replace(fllBorder, "")} ${FormBorderClass || ""} `; //form表单样式
          }
          console.log(fontColor, FormBorderClass, borderColor, borderRadius);
        }
      );
    },
    onClickLeftPage() {
      console.log("onClickLeftPage");
      this.$root.$on(eventKeys.ON_SELECTED_LEFT_PAGE, (item) => {
        console.log(item);
        this.pageName = item.meta.name;
        this.pageId = item.meta.id;
      });
    },
    formStyleMap(formType) {
      let type = {};
      return type[formType];
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
.page-head {
  height: 60px;
  line-height: 60px;
  font-size: 14px;
  font-weight: 600;
  span {
    font-size: 22px;
    margin-right: 10px;
  }
}
.phone-view {
  width: 375px;
  height: 667px;
  background: url(../../../assets/imgs/phone-bg.png);
  box-shadow: 0 0 14px 0 rgba(22, 45, 61, 0.36);
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
