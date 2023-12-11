<script setup lang="ts">
import type { ZtsButtonProps } from './interface';
const props = withDefaults(defineProps<ZtsButtonProps>(), {
  type: 'primary'
});
defineOptions({
  name: 'zts-button',
})
</script>

<template>
  <button class="zts-button" type="button">
    <slot>
      我是ZtsButt?
    </slot>
  </button>
</template>

<style scoped lang="scss"></style>