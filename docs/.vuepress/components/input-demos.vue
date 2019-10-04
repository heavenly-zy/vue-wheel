<template>
  <div>
    <g-input value="普通"></g-input>
    <g-input value="禁用" :disabled="true"></g-input>
    <g-input value="只读" :readonly="true"></g-input>
    <div class="error">
      <g-input value="错误" error="错误信息"></g-input>
    </div>
  </div>
</template>
<script>
import Input from "../../../src/input";
export default {
  components: {
    "g-input": Input
  }
};
</script>
<style lang="scss" scoped>
.error {
  padding: 5px 0 0;
}
</style>