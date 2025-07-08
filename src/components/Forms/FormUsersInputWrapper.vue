<template>
  <BaseForm @delete:form="$emit('delete:form', props.modelValue.id)">
    <v-text-field
      v-model="formUsers.marks"
      :label="'Метки'"
      :rules="fieldsValidate(formUsers).marks"
    />
    <v-select
        v-model="formUsers.record_type"
        label="Тип записи"
        :items="['Локальная', 'LDAP']"
    />

    <BaseColumnGrid :columns-grid="authorizationData">
      <v-text-field
        v-model="formUsers.login"
        :label="'Логин'"
        :rules="fieldsValidate(formUsers).login"
      />
      <v-text-field
        v-if="formUsers.record_type === 'Локальная'"
        v-model="formUsers.password"
        :type="isPasswordShown ? 'text' : 'password'"
        :label="'Пароль'"
        :rules="fieldsValidate(formUsers).password"
      >
        <template #append-inner>
          <svg class="icon15" @click="isPasswordShown = !isPasswordShown">
            <use :href="`/public/images/svg/icon-eye-${isPasswordShown ? 'open' : 'closed'}.svg#icon`"></use>
          </svg>
        </template>
      </v-text-field>
    </BaseColumnGrid>
  </BaseForm>
</template>

<script setup lang="ts">
import BaseForm from "@/components/Base/Form/BaseForm.vue";
import BaseColumnGrid from "@/components/Base/ColumnGrid/BaseColumnGrid.vue";
import { GridColumnTypes } from "@/global/enums/GridColumnTypes.ts";
import type { FormUsers } from "@/global/types/FormUsers.js";
import { computed, ref, watch } from "vue";
import {fieldsValidate} from "@/utils/fieldsValidate.ts";

interface Props {
  modelValue: FormUsers
}

const props = defineProps<Props>()
const emits = defineEmits<{
  (e: 'update:formUsers', value: FormUsers): void
  (e: 'delete:form', id: number): void
}>()

const isPasswordShown = ref<boolean>(false)
const formUsers = ref<FormUsers>({ ...props.modelValue })

const authorizationData = computed(() =>
    formUsers.value.record_type === 'Локальная'
        ? GridColumnTypes.TwoColumns
        : GridColumnTypes.OneColumns
)

watch(
    formUsers,
    (_, oldValue) => {
      if (oldValue.marks !== formUsers.value.marks) {
        formUsers.value.marks = formUsers.value.marks.split(';').trim()
      }

      if (formUsers.value.record_type !== 'Локальная' && 'password' in formUsers.value) {
        delete formUsers.value.password
      }

      emits('update:formUsers', { ...formUsers.value })
    },
    { deep: true }
)
</script>

<style scoped lang="scss"></style>