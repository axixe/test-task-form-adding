<template>
  <div class="index-page">
    <div class="index-page__header">
      <h1>Учётные записи</h1>
      <v-btn class="index-page__button-create-form" @click="createUserForm">+</v-btn>
    </div>

    <BaseHint>Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;</BaseHint>

    <FormUsers :model-value="userForm" @update:model-value="updateUserForm" @delete:form="deleteUserForm" />
  </div>
</template>

<script setup lang="ts">
import BaseHint from "@/components/Base/Hint/BaseHint.vue";
import FormUsers from "@/components/Forms/FormUsers.vue";
import { ref } from "vue";

const userForm = ref<FormUsers>([])

const getNextId = () => {
  return userForm.value.length
      ? Math.max(...userForm.value.map((user: FormUsers) => user.id)) + 1
      : 1;
}

const createUserForm = () => {
  userForm.value.push({
    id: getNextId(),
  })
}

const updateUserForm = (value: FormUsers) => {
  userForm.value = [ ...value ]
}

const deleteUserForm = (id: number) => {
  userForm.value = userForm.value.filter((form: FormUsers) => form.id !== id)
}
</script>

<style scoped lang="scss">
.index-page {
  display: flex;
  flex-direction: column;
  gap: 40px;

  &__header {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__button-create-form {
    font-size: 20px;
    font-weight: 700;
  }
}
</style>