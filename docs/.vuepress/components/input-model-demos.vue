<template>
  <div>
    <g-input v-model="value"></g-input>
    <div>value: {{value}}</div>
  </div>
</template>
<script>
import Input from "../../../src/input";
export default {
  components: {
    "g-input": Input
  },
  data() {
    return {
      value: "默认值"
    };
  }
};
</script>