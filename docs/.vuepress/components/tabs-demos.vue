<template>
  <div>
    <g-tabs :selected="selected">
      <g-tabs-head>
        <g-tabs-item name="1">P1</g-tabs-item>
        <g-tabs-item name="2">P2</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-panel name="1">content 1</g-tabs-panel>
        <g-tabs-panel name="2">content 2</g-tabs-panel>
      </g-tabs-body>
    </g-tabs>
  </div>
</template>

<script>
import Tabs from "../../../src/tabs";
import TabsHead from "../../../src/tabs-head";
import TabsBody from "../../../src/tabs-body";
import TabsItem from "../../../src/tabs-item";
import TabsPanel from "../../../src/tabs-panel";
export default {
  components: {
    "g-tabs": Tabs,
    "g-tabs-head": TabsHead,
    "g-tabs-body": TabsBody,
    "g-tabs-item": TabsItem,
    "g-tabs-panel": TabsPanel
  },
  data() {
    return {
      selected: "1"
    };
  }
};
</script>