<script setup>
import 'primeicons/primeicons.css'
import {computed} from "vue";

const props = defineProps({
  id: Number,
  author: String,
  content: String,
  timestamp: String
})
const date = computed(() => new Date(+props.timestamp).toLocaleDateString());

</script>

<template>
  <div class="bord" v-bind:id="id">
    <div class="w-full flex items-center justify-between gap-8 p-x-3 mb-2">
      <p class="text-sm self-start text-gray-500">{{date}}</p>
      <i @click="$emit('remove', id)" class="pi pi-times" style="font-size: 0.75rem; color: #ccc"></i>
    </div>
    <p class="self-start italic underline">{{author}}</p>
    <p class="text-lg self-start text-gray-800">{{content}}</p>
    <i class="pi pi-heart self-end px-3 py-1" style="font-size: 1rem; color: mediumvioletred"></i>
  </div>

</template>

<style scoped>
.bord{
  max-width: 200px;
  width: 100%;
  min-height: 50px;

  padding: 5px;
  margin: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border: 1px solid #ccc;/*hsla(160, 100%, 37%, 1);*/
  border-radius: 5px;
}

</style>


<!--
const isEdit = ref(false);
const newText = ref(props.content);

const emit = defineEmits(['change', 'remove']);

function edit(){
  isEdit.value = true;
}
function save(){
  isEdit.value = false;
  emit('change', props.id, newText.value);
}
-->