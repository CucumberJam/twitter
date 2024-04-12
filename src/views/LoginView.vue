<script setup>
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import 'primeicons/primeicons.css'
import {ref} from 'vue';
import {useAuthStore} from "../store/auth.js";
import Warning from "../components/Warning.vue";

const authStore = useAuthStore();
const uuid = ref();
const error = ref('');
const success = ref(false);
const login = () => {
  if(!uuid.value ){
    error.value = 'Please fill all fields.';
    return;
  }
  authStore.authenticateUser(uuid.value);
  success.value = true;
}
</script>

<template>
  <main class="form-block">
    <Warning v-if="error" :label="error"/>

    <div class="form__item">
      <i class="pi pi-user"></i>
      <InputText class="input"
                 type="text"
                 v-model="uuid"
                 placeholder="Your id"/>
      <Button class="btn" label="Login" @click="login"/>
    </div>
  </main>
</template>

<style scoped>
.btn{
  padding: 5px 15px;
  box-sizing: border-box;
  border: 1px solid #1E95EA;
  border-radius: 10px;
  color: white;
  background-color: #1E95EA;
  transition: all linear 500ms;
}
.btn:hover{
  color: #1E95EA;
  background-color: white;
}
.form_header{
  font-size: 28px;
  font-weight: 700;
}
.input{
  border: 1px solid #cbd5e1;
  background-color: white;
  border-radius: 5px;
  padding-left: 15px;
}
.input:focus{
  outline: none;
  color: #808277;
}

h2{
  padding-left: 10px;
  margin: 20px auto;
  color: white;
  text-align: center;
}
.form-block {
  opacity: 80%;
  margin: 0 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
}
.form{
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
}
.btn{
  width: 35%;
}
.form__item{
  max-width: 300px;
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
}
.form__item:last-child{
  margin: 20px 0 0 0;
}
.form__item span {
  color: white;
  margin-right: 10px;
  font-size: 14px;
}
.form__item a{
  text-decoration: none;
  color: white;
  transition: all linear 300ms;
}
.form__item a:hover{
  color: darkgray;
}
</style>