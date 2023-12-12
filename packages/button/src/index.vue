<script setup lang="ts">
import type { ZtsButtonProps } from './interface'

withDefaults(defineProps<ZtsButtonProps>(), {
  type: 'primary',
})
defineOptions({
  name: 'ZtsButton',
})
defineSlots<{
  default: () => void
}>()
</script>

<template>
  <button class="zts-button" type="button">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss"></style>
