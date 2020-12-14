<template>
  <div class="page-list">
    <ul>
      <li
        class="page-item box"
        :class="{ active: activeIndex === index }"
        @click="doEdite(item, index)"
        :key="index"
        v-for="(item, index) in pageList"
      >
        <div v-if="item.meta">
          <div class="page-desc box">
            <span class="id">{{ item.meta.id }}</span>
          </div>
          <div class="page-desc box">
            <span>{{ item.meta.name }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import eventKeys from "@/commons/event-keys";
export default {
  name: "EditerPageList",
  data() {
    return {
      pageView: null,
      pageList: [],
      activeIndex: 0,
    };
  },
  components: {},
  mounted() {
    this.pageView = document.querySelector("#page-view");
    this.init();
  },
  methods: {
    init() {
      if (this.pageView) {
        this.pageList = JSON.parse(
          this.pageView.contentWindow.sessionStorage.getItem(
            "beautify-page-list"
          )
        );
      }
    },
    doEdite(item, index) {
      if (item.meta) {
        this.activeIndex = index;
        this.pageView.src = `./app/#${item.path}`;
        this.$root.$emit(eventKeys.ON_SELECTED_LEFT_PAGE, item);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.page-list {
  position: relative;
  padding: 20px 0;
  padding-bottom: 60px;
  .page-item {
    width: 128px;
    height: 213px;
    flex-flow: column;
    margin: 0 auto;
    margin-bottom: 20px;
    border: 1px solid #e8e8e8;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    background: #fff;
    &.active {
      box-shadow: 0 0 15px #4eb7f5;
    }
    .page-desc {
      justify-content: space-between;
      width: 100%;
      margin-bottom: 15px;
      .id {
        font-size: 28px;
        font-weight: 600;
        color: #333;
      }
      span {
        color: #666;
        flex: 1;
        font-size: 14px;
      }
    }
  }
}
</style>
