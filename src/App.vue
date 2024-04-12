<script setup>
import {onMounted} from "vue";
import {useAuthStore} from "./store/auth.js";
import PageNav from "./components/PageNav.vue";
import {useRouter} from "vue-router";
import 'primeicons/primeicons.css'

const authStore = useAuthStore();
const router = useRouter()

onMounted(() => {
  authStore.init();
})
const logOut = () => {
  authStore.logOut();
  router.replace({path: '/'});
}
router.beforeEach((to) => {
  if (!authStore.isLoggedIn && to.name !== 'login'){
    router.push({name: 'login'});
  }
})

</script>

<template>
  <div class="w-full">
    <PageNav :logout="logOut" :is-logged-in="authStore.isLoggedIn"/>
    <RouterView/>
  </div>
</template>

<style scoped>
.container{
  width: 100%;
  min-width: 600px;
  margin: 0 auto;
}
</style>
