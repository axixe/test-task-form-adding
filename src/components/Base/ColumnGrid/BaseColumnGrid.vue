<template>
  <div
    class="grid"
    :class="`grid--${columnsGrid}`"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { GridColumnTypes } from '@/global/enums/GridColumnTypes';

interface Props {
  columnsGrid?: GridColumnTypes
}

withDefaults(defineProps<Props>(), {
  columnsGrid: GridColumnTypes.OneColumn,
})
</script>

<style scoped lang="scss">
.grid {
  display: grid;
  gap: 20px;

  &--one_column {
    grid-template-columns: 1fr;
  }

  &--two_columns   {
    grid-template-columns: 1fr 1fr;
  }
}
</style>