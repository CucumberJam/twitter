<script setup>
import Logo from "./Logo.vue";
import {RouterLink} from "vue-router";

defineProps({
  isLoggedIn: Boolean,
  logout: Function
})

</script>

<template>
  <nav class="nav">
    <Logo/>
    <ul class="pl-10">
      <li v-if="!isLoggedIn">
        <RouterLink to='/login'>Login</RouterLink>
      </li>
      <template v-else>
        <li>
          <RouterLink to='/profile'>
            <i class="pi pi-user" style="color: #ccc"></i>
          </RouterLink>
        </li>
        <li>
          <RouterLink to='/' @click="logout">
            <i class="pi pi-sign-out" style="font-size: 1.5rem; color: #ccc"></i>
          </RouterLink>
        </li>
      </template>

    </ul>
  </nav>
</template>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
}

.nav ul {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 4rem;
}

.nav a:link,
.nav a:visited {
  text-decoration: none;
  color: var(--color-light--2);
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 600;
}

/* CSS Modules feature make global:*/
.nav a:global(.active) {
  color: var(--color-brand--2);
}

a.ctaLink:link,
a.ctaLink:visited {
  background-color: var(--color-brand--2);
  color: var(--color-dark--0);
  padding: 0.8rem 2rem;
  border-radius: 7px;
}

/* to make css class global: */
:global(.test){
  background-color: red;
}
</style>