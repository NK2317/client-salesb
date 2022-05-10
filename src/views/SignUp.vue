<template>
  <div
    class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register
        </h2>
      </div>
      <div class="mt-8 space-y-6" action="#" method="POST">
        <div>
          <DefaultButton
            text="I'm a publisher (change text)"
            mode="red"
            @click="goRegisterPublisher"
          />
        </div>
        <div>
          <DefaultButton
            text="I'm a customer"
            mode="blue"
            @click="goRegisterCustomer"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import DefaultButton from "@/components/atoms/DefaultButton.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goRegisterCustomer = () => {
  router.push("/signup-customer");
};

const goRegisterPublisher = () => {
  router.push("/signup-publisher");
};
</script>
