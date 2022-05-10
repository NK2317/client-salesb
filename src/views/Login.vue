<template>
  <LoginSection @submit="submit" />
</template>
<script setup lang="ts">
import LoginSection from '@/components/sections/LoginSection.vue';
import useAuth from '@/hooks/useAuth';
import { LoginPayloadType } from '@/store/auth/types';
import { useRouter } from 'vue-router';

const { login } = useAuth();
const router = useRouter();

const submit = async ({ username, password }: LoginPayloadType) => {
  if (await login(username, password)) router.push("/");
}
</script>
