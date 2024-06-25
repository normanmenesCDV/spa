<script setup>
import { peoples, personCount } from "@/components/store";

defineProps({
  msg: String,
});
</script>
<template>
  <div>
    <h2>{{ msg }}</h2>
    <ul>
      <li v-for="person in peoples.list">
        {{ person.firstName }} {{ person.lastName }}
      </li>
    </ul>
  </div>
  <div>
    <h2>Number of people:</h2>
    {{ personCount }}
  </div>
</template>
<style scoped>
button {
  font-weight: bold;
}
</style>
