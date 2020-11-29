<template>
  <div class="phone-view">
    <!-- <iframe src="http://localhost:8081/h5.html#/" frameborder="0"></iframe> -->
    <grid-layout
      :layout="layout"
      :col-num="16"
      :row-height="40"
      :is-draggable="true"
      :is-resizable="true"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="[10, 10]"
      :use-css-transforms="true"
    >
      <grid-item
        v-for="(item, index) in layout"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :key="`${item.i}-${index}`"
        @resize="resizeEvent"
        @move="moveEvent"
        @resized="resizedEvent"
        @moved="movedEvent"
      >
        <component ref="comData" :is="configType[item.config.type]" />
        <div class="item-mask">
          <a @click="doEdit(item, index)"><a-icon type="edit" />编辑</a>
          <a class="del" @click="doDelete(index)"
            ><a-icon type="delete" />删除</a
          >
        </div>
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
import VueGridLayout from "vue-grid-layout";
import { getInfoByIdApi } from "@/api/pageList";
import { saveDataApi } from "@/api/editor";
import eventKeys from "@/commons/event-keys";
import cInput from "@/packages/input";
import cLogo from "@/packages/logo";
import cButton from "@/packages/button";

export default {
  name: "EditerPhoneView",
  data() {
    return {
      layout: [],
      formDataList: [],
      configType: {
        1: "cLogo",
        2: "cInput",
        6: "cButton",
      },
    };
  },
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    cInput,
    cButton,
    cLogo,
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      getInfoByIdApi({ _id: this.$route.params.id }).then((res) => {
        document.title = res[0].title;
      });
      this.$root.$on(eventKeys.ON_ATTRIBUTE_EDITE_UPDATE, (res) => {
        this.getEditeData = res;
      });
      this.onEditItem();
      this.onSaveData();
      this.onReset();
    },
    doEdit(item, index) {
      //编辑
      this.$root.$emit(eventKeys.ON_ATTRIBUTE_EDITE, {
        config: item.config,
        defaultData: this.$refs.comData[index].defaultData,
      });
    },
    doDelete(index) {
      console.log(this.layout,index)
      this.layout.splice(index, 1);
    },
    resizeEvent(newLayout) {
      console.log("resizeEvent: ", newLayout);
    },
    moveEvent(newLayout) {
      console.log("moveEvent: ", newLayout);
    },
    resizedEvent(newLayout) {
      console.log("resizedEvent: ", newLayout);
    },
    movedEvent(newLayout) {
      console.log("movedEvent: ", newLayout);
    },
    onSaveData() {
      //保存
      this.$root.$on(eventKeys.ON_CLICK_SAVE_DATA, () => {
        saveDataApi({}).then((res) => {
          if (!res.success) {
            this.$message.error("保存失败");
          }
        });
      });
    },
    onReset() {
      //重置
      this.$root.$on(eventKeys.ON_CLICK_RESET, () => {
        this.layout.length = 0
        console.log(this.layout.length)
      });
    },
    onEditItem() {
      this.$root.$on(eventKeys.ON_CLICK_FORM_ITEM, (res) => {
        this.layout.push({
          x: 0,
          y: 0,
          w: 20,
          h: 1,
          i: "button",
          name: "cccc",
          config: {
            type: res.type,
            event: 1,
            text: "11122",
            style: {},
          },
        });
      });
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
