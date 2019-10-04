<template>
  <div>
    <g-button @click="onClickButton">支持 HTML</g-button>
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
      this.$toast('<span style="color:#3eaf7c">我是绿色的</span>', {
        enableHTML: true
      });
    }
  }
};
</script>