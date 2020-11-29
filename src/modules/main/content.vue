<template>
  <div class="add-app-page">
    <div class="step-1 box">
      <div class="page-item add box">
        <div class="page-item-view box">
          <a @click="showModal" class="add-app box">添加</a>
        </div>
      </div>
      <div :key="item._id" v-for="item in dataList" class="page-item box">
        <div class="page-item-view box">
          <a>{{ item.title }}</a>
        </div>
        <div class="page-item-operate-area box">
          <div class="o-item"><a @click="goToEditer(item)">编辑</a></div>
          <div class="o-item"><a @click="doRemovePage(item)">删除</a></div>
        </div>
      </div>
    </div>
    <div class="stip-2 edit-container"></div>

    <a-modal
      v-model="visible"
      :maskClosable="false"
      title="新增APP"
      @ok="handleOk"
    >
      <div>
        <a-input v-model="pageTitle" placeholder="页面名称" />
      </div>
    </a-modal>
  </div>
</template>

<script>
import { addPageApi, getPageListApi, deletePageByIdApi } from "@/api/pageList";
export default {
  name: "MainContent",
  data() {
    return {
      visible: false,
      pageTitle: "",
      dataList: [],
    };
  },
  components: {},
  mounted() {
    this.getPageList();
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      addPageApi({
        title: this.pageTitle,
      }).then((res) => {
          this.$router.push(`/editer/${res.data.msg._id}`);
          this.visible = false;
        })
        .catch(() => {
          this.$message.error("新增失败！");
        });
    },
    getPageList() {
      getPageListApi()
        .then((res) => {
          this.dataList = res;
        })
        .catch(() => {
          this.$message.error("获取页面列表失败");
        });
    },
    doRemovePage(item) {
      let vm = this;
      this.$confirm({
        title: '提示',
        content: '确定删除？',
        okText: '确认',
        cancelText: '取消',
        onOk() {
          deletePageByIdApi({ _id : item._id}).then(()=>{
            vm.getPageList()
          });
        },
      });
    },
    goToEditer(item){
      this.$router.push(`/editer/${item._id}`)
    }
  },
};
</script>

<style lang="less" scoped>
.add-app-page {
  .add-app {
    width: 100px;
    height: 100px;
    border: 1px dashed #999;
    border-radius: 100%;
    font-size: 16px;
    color: #666;
    font-weight: 900;
    background: #f5f5f5;
    &:hover {
      background: #4aadff;
      color: #fff;
    }
  }
}

.step-1 {
  flex-flow: wrap;
  justify-content: flex-start;
  a {
    margin-right: 10px;
  }
}
.page-item {
  margin-right: 20px;
  margin-bottom: 20px;
  .page-item-view {
    width: 160px;
    height: 284px;
    border: 1px solid #ddd;
    border-radius: 7px;
  }
  .page-item-operate-area {
    padding: 10px;
    font-size: 12px;
    flex-flow: column;
    justify-content: flex-start;
    height: 284px;
    .o-item {
      margin-bottom: 10px;
    }
  }
}
</style>
