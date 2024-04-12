<script setup>
defineProps({
  label: String
})
</script>

<template>
  <div  class="flex gap-8 justify-between items-center px-5
  max-w-80 my-10 py-1 text-rose-800 bg-rose-200
  rounded-lg border-b-rose-800 w-full">
    <i class="pi pi-times-circle" style="font-size: 0.8rem"></i>
    {{label}}
    <i class="pi pi-times" style="font-size: 0.8rem"></i>
  </div>
</template>

<style scoped>

</style>