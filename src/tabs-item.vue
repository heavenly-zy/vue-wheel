<template>
  <div class="tabs-item" @click="onClick" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "WheelTabsItem",
  inject: ["eventBus"],
  data() {
    return {
      active: false
    };
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String | Number,
      required: true
    }
  },
  computed: {
    classes() {
      return {
        active: this.active
      };
    }
  },
  created() {
    this.eventBus.$on("update:selected", name => {
      if (name === this.name) {
        this.active = true;
      } else {
        this.active = false;
      }
    });
  },
  methods: {
    onClick() {
      this.eventBus.$emit("update:selected", this.name,this);
    }
  }
};
</script>

<style lang="scss" scoped>
$blue:blue;
.tabs-item {
  flex-shrink: 0;
  padding: 0 1em;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 100%;
  &.active{
    color:$blue;
    font-weight: bold;
  }
}
</style>