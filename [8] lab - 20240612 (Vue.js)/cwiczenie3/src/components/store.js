import { reactive, computed } from "vue";

export const peoples = reactive({
  list: [],
  add(person) {
    this.list.push(person);
  },
});

export const personCount = computed(() => {
  return peoples.list.length;
});
