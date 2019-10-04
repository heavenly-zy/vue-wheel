<template>
  <div>
    <g-button @click="onClickButton">自定义关闭按钮</g-button>
  </div>
</template>
<style>
.g-toast {
  z-index: 30 !important;
}
</style>
<script>
import Vue from "vue";
import Toast from "../../../src/toast";
import Button from "../../../src/button";
import plugin from "../../../src/plugin";
Vue.use(plugin);
export default {
  components: {
    "g-toast": Toast,
    "g-button": Button
  },
  methods: {
    onClickButton() {
      this.$toast("弹出提示", {
        enableHTML: true,
        closeButton: {
          text: "xxx",
          callback: () => {
            console.log("xxx");
          }
        }
      });
    }
  }
};
</script>