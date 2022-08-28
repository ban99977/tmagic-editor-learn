<!-- Test.vue -->
<template>
  <div>
    <el-button type="primary">按钮</el-button>
    <span>this is a Test component:</span>
    <span :style="{ color: config.color }">{{ config.text }}</span>
  </div>
</template>

<script>
export default {
  name: 'magic-ui-test',

  props: {
    config: {
      type: Object,
      default: () => ({}),
    },
  },

  setup() {},
};
</script>
