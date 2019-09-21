<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
    <g-icon class="icon" v-if="icon" :name="icon"></g-icon>
    <g-icon class="loading" name="loading"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  // 接一个对象
  //props: ["icon", "iconPosition"]
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        // 属性检查器
        console.log(value);
        return value === "left" || value === "right";
        // 1.return value !== "left" && value !== "right" ? false : true;
        // 2.if (value !== "left" && value !== "right") {
        //      return false;
        //   } else {
        //      return true;
        //   }
      }
    }
  }
};
</script>

<style lang="scss">
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loading {
  animation: spin 1s infinite linear;
}
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle; // 经验：内联元素不对齐的情况下使用
  &:hover {
    //.g-button:hover{...}
    border-color: var(--border-color-hover);
  }

  &:active {
    background-color: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }
  > .icon {
    // .g-button .icon{...}
    order: 1;
    margin-right: 0.1em;
  }
  > .content {
    // .g-button .content{...}
    order: 2;
  }
  &.icon-right {
    // .g-button.icon-right{}
    > .icon {
      // .g-button.icon-right .icon{}
      order: 2;
      margin-left: 0.1em;
      margin-right: 0;
    }
    > .content {
      order: 1;
    }
  }
}
</style>