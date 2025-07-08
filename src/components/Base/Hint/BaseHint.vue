<template>
  <div class="hint">
    <svg class="hint__icon icon25">
      <use :href="'/public/images/svg/icon-hint.svg#icon'"></use>
    </svg>

    <slot></slot>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.hint {
  display: flex;
  gap: 20px;
  align-items: center;
  width: 100%;
  background: #EEF4FA;
  padding: 8px 12px;
}
</style>