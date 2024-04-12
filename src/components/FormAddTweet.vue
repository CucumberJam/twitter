<script setup>
import InputText from "primevue/inputtext";
import 'primeicons/primeicons.css'
import {ref} from "vue";

const post = ref('');
const emit = defineEmits(['add'])
function handleAddPost(){
  emit('add', post);
  post.value = '';
}

</script>

<template>
  <form class="nav_item search-box" @submit.prevent="handleAddPost">
    <InputText class="input-search"
               placeholder="Add new post..."
               v-model="post"/>
    <div class="flex items-center">
      <button class="btn" type="submit">Add post</button>
    </div>
  </form>
</template>

<style scoped>
form{
  max-width: 90%;
  width: 100%;
  margin: 0 auto;
}
.nav_item{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;
  overflow: visible;
}
.input-search{
  background: transparent;
  color: #334155;
  padding-left: 10px;
  max-width: 250px;
  width: 100%;
  min-height: 30px;
  height: 100%;
  min-width: 80px;
  outline: none;
  border: none;
  box-shadow: none;
  overflow: visible;
}
.search-box{
  background: #ffffff;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  outline-color: transparent;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05);
  color: #334155;
  overflow: visible;
}
.search-icon{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  overflow: visible;
}
.btn{
  box-sizing: border-box;
  border: 1px solid #1E95EA;
  border-radius: 0;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  color: white;
  background-color: #1E95EA;
  transition: all linear 500ms;
}
.btn:hover{
  color: #1E95EA;
  background-color: white;
}
</style>