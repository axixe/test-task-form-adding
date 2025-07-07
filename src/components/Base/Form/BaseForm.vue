<template>
  <form class="form">
    <BaseColumnGrid :columns-grid="columns" class="form__content-wrapper">
      <slot></slot>
    </BaseColumnGrid>

    <ButtonDelete class="form__button-delete" @click="$emit('delete:form')" />
  </form>
</template>

<script setup lang="ts">
import BaseColumnGrid from "@/components/Base/ColumnGrid/BaseColumnGrid.vue";
import { GridColumnTypes } from "@/global/enums/GridColumnTypes.ts";
import ButtonDelete from "@/components/ui/ButtonDelete.vue";

interface Props {
  columns?: GridColumnTypes
}

withDefaults(defineProps<Props>(), {
  columns: GridColumnTypes.ThreeColumns
})

defineEmits<{
  (e: 'delete:form'): void
}>()
</script>

<style scoped lang="scss">
.form {
  display: flex;
  align-items: center;
  gap: 20px;

  &__content-wrapper {
    width: 100%;
  }

  &__button-delete {
    fill: #35253f;
  }
}
</style>