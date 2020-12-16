<template>
  <div v-show="value" class="s-picker-color">
    <sketch-picker v-model="colors" @input="colorValueChange"></sketch-picker>
  </div>
</template>

<script>
import { Sketch } from "vue-color";
export default {
  name: "coloerPicker",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      colors: "",
    };
  },
  components: {
    "sketch-picker": Sketch,
  },
  mounted() {
    document.body.addEventListener(
      "click",
      (e) => {
        if ( !['ant-input','vc-saturation--black'].includes(e.target.className)) {
          this.$emit("input", false);
        }
      },
      false
    );
  },
  methods: {
    colorValueChange(val) {
      this.$emit("onColorChange", val);
    },
  },
};
</script>

<style lang="less" scoped>
.s-picker-color {
  position: fixed;
  z-index: 999;
  margin-top: 40px;
}
</style>
