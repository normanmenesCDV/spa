<script setup>
import { ref, reactive, computed } from "vue";
function addPerson() {
  peoples.push({ firstName: firstName.value, lastName: lastName.value });
}
const firstName = ref("");
const lastName = ref("");
const peoples = reactive([]);

const personCount = computed(() => {
  return peoples.length;
});
</script>
<template>
  <div>
    <h2>Dodaj nową osobę</h2>
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
  <div>
    <h2>Lista osób</h2>
    <ul>
      <li v-for="person in peoples">
        {{ person.firstName }} {{ person.lastName }}
      </li>
    </ul>
  </div>
  <div>
    <h2>Liczba osób:</h2>
    {{ personCount }}
  </div>
</template>
<style scoped>
button {
  font-weight: bold;
}
</style>
