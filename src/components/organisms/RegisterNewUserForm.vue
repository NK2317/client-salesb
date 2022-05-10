<template>
  <form class="py-12 px-4 sm:px-6 lg:px-8 shadow-2xl" @submit="submit">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          First Name
        </label>
        <DefaultInput
          id="firstName"
          name="firstName"
          @change="(e) => changeName('first', e)"
        />
        <p class="text-red-500 text-xs italic"></p>
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-last-name"
        >
          Last Name
        </label>
        <DefaultInput
          id="lastName"
          name="lastName"
          @change="(e) => changeName('last', e)"
        />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4"
          for="grid-mail"
        >
          Mail
        </label>
        <DefaultInput id="mail" name="mail" type="mail" @change="changeMail" />
        <p class="text-gray-600 text-xs italic">
          <strong>We will send you a mail to confirm the account</strong>
        </p>
      </div>
      <div class="w-full px-3 mt-2">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-password"
        >
          Password
        </label>
        <DefaultInput
          id="password"
          name="password"
          type="password"
          @change="(e) => changePassword('pass', e)"
        />

        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2"
          for="grid-password"
        >
          Confirm Password
        </label>
        <DefaultInput
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          @change="(e) => changePassword('confirm', e)"
        />
        <p class="text-gray-600 text-xs italic">
          Make it as long and as crazy as you'd like
        </p>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-city"
        >
          Country
        </label>
        <DefaultSelect id="city" name="city" :options="countries" />
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-city"
        >
          City
        </label>
        <DefaultSelect id="city" name="city" />
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-city"
        >
          State
        </label>
        <DefaultSelect id="city" name="city" />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full px-3 mb-6 md:mb-0">
        <DefaultButton text="Register" button-type="submit" />
      </div>
    </div>
  </form>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "@vue/runtime-core";
import DefaultInput from "@/components/atoms/DefaultInput.vue";
import DefaultSelect from "@/components/atoms/DefaultSelect.vue";
import DefaultButton from "@/components/atoms/DefaultButton.vue";
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";

const store = useStore();

const names = ref({
  firstName: "",
  lastName: "",
});
const mail = ref({
  mail: "",
});
const passwords = ref({
  password: "",
  confirmPassword: "",
});

const location = ref({
  country: "",
  city: "",
  state: "",
});

const countries = computed(() => {
  return store.state?.catalog?.countryList.map((country: any) => {
    return {
      value: country?.id,
      label: country?.name,
    };
  });
});

const changeName = (type: string, { target: { value } }: any) => {
  if (type === "first") names.value.firstName = value;
  else names.value.lastName = value;
};

const changeMail = ({ target: { value } }: any) => (mail.value = value);

const changePassword = (type: string, { target: { value } }: any) => {
  if (type === "pass") passwords.value.password = value;
  else passwords.value.confirmPassword = value;
};

const mounted = async () => {
  try {
    await store.dispatch("catalog/fetchCountries");
  } catch (e) {
    console.error(e);
  }
}

onMounted(() => {
  mounted().catch(console.error);
});

const submit = (e: Event) => {
  e.preventDefault();
  console.log(passwords.value, mail.value);
};
</script>
