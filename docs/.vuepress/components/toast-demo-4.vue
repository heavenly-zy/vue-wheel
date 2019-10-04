<template>
  <div>
    <g-button @click="onClickButton">我不会自动关闭</g-button>
    <g-button @click="onClickButton1">3秒后自动关闭</g-button>
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
      this.$toast("我不会自动关闭", {
        autoClose: false
      });
    },
    onClickButton1() {
      this.$toast("3秒后自动关闭", {
        autoClose: 3
      });
    }
  }
};
</script>
