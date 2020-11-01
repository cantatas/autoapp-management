<template>
  <div class="phone-view">
    <grid-layout
      :layout.sync="layout"
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
        v-for="item in layout"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :key="item.i"
        @resize="resizeEvent"
        @move="moveEvent"
        @resized="resizedEvent"
        @moved="movedEvent"
      >
        <a-button type="primary">
          确定
        </a-button>
        <div class="item-mask">
          <a @click="doEdit(item)"><a-icon type="edit" />编辑</a>
          <a class="del" @click="doEdit(item)"><a-icon type="delete" />删除</a>
        </div>
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
import VueGridLayout from "vue-grid-layout";

let layout = [
  { x: 0, y: 0, w: 10, h: 1, i: "button", name: "ddd", config: {
    type : 1,
    event: 1,
    text : '',
    style : {}
  } },
];

export default {
  name: "EditerPhoneView",
  data() {
    return {
      layout,
    };
  },
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
  },
  methods: {
    doEdit(item) {
      console.log("doEdit: ", item.name);
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
}
/deep/ .vue-resizable-handle {
  z-index: 9999;
}
.vue-grid-item {
  background: rgba(0, 0, 0, 0.2);
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
      .anticon {
        margin-right: 5px;
      }
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
