<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { peoples } from "@/components/store";
const router = useRouter();

defineProps({
  msg: String,
});

function addPerson() {
  peoples.add({ firstName: firstName.value, lastName: lastName.value });
  router.push({ name: "list" });
}
const firstName = ref("");
const lastName = ref("");
</script>
<template>
  <div>
    <h2>{{ msg }}</h2>
    <form @submit.prevent="addPerson">
      <div>
        <label for="firstName">Imię:</label>
        <input v-model="firstName" id="firstName" type="text" required />
      </div>
      <div>
        <label for="lastName">Nazwisko:</label>
        <input v-model="lastName" id="lastName" type="text" required />
      </div>
      <button type="submit">Dodaj osobę</button>
    </form>
  </div>
</template>
<style scoped>
button {
  font-weight: bold;
}
</style>
