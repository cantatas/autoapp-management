<template>
  <div class="attribute-editor">
    <a-tabs type="card">
      <a-tab-pane
        key="1"
        tab="编辑"
      >
        <baseSettings></baseSettings>
      </a-tab-pane>
      <a-tab-pane
        key="2"
        tab="外观"
      >
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
import baseSettings from "./base-settings.vue";
export default {
  name: "EditerAttributeEditor",
  data() {
    return {
      getEditeData: {},
      postEditeData: {
        input : {
          value : ''
        }
      }
    };
  },
  components: {
    baseSettings
  },
  mounted() {
    this.$root.$on(eventKeys.ON_ATTRIBUTE_EDITE, item => {
      this.getEditeData = item.config;
      console.log("ON_ATTRIBUTE_EDITE: ", item);
    });
  },
  methods: {
    doEdit() {
      this.$root.$emit(eventKeys.ON_ATTRIBUTE_EDITE_UPDATE, this.postEditeData);
    }
  }
};
</script>

<style lang="less" scoped>
.attribute-editor {
  width: 400px;
  height: 100%;
  background-color: #f1f8ff;
  padding: 15px;
}
</style>
