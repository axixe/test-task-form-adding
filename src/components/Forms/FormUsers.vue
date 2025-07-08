<template>
  <div class="form-users">
    <BaseColumnGrid :columns-grid="GridColumnTypes.ThreeColumns">
      <span>Метки</span>
      <span>Тип записи</span>

      <BaseColumnGrid :columns-grid="GridColumnTypes.TwoColumns">
        <span>Логин</span>
        <span>Пароль</span>
      </BaseColumnGrid>
    </BaseColumnGrid>

    <FormUsersInputWrapper
      v-for="form in modelValue"
      :key="form.id"
      :model-value="form"
      @update:form-users="updateUserById"
      @delete:form="(id: number) => $emit('delete:form', id)"
    />
  </div>
</template>

<script setup lang="ts">
import BaseColumnGrid from "@/components/Base/ColumnGrid/BaseColumnGrid.vue";
import { GridColumnTypes } from "@/global/enums/GridColumnTypes.ts";
import FormUsersInputWrapper from "@/components/Forms/FormUsersInputWrapper.vue";
import type { FormUsers } from "@/global/types/FormUsers.ts";

interface Props {
  modelValue: FormUsers[]
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'update:modelValue', form: FormUsers): void
  (e: 'delete:form', id: number): void
}>()

const updateUserById = (value: FormUsers) => {
  const updated = props.modelValue.map((user) =>
      user.id === value.id ? value : user
  )

  emit("update:modelValue", updated)
}
</script>

<style scoped lang="scss">
.form-users {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>