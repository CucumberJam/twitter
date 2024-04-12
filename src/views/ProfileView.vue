<script setup>
import FormAddTweet from "../components/FormAddTweet.vue";
import {useMessagesStore} from "../store/messages.js";
import LoaderComponent from "../components/LoaderComponent.vue";
import Posts from "../components/Posts.vue";
import {computed, onMounted, ref} from "vue";
import 'primeicons/primeicons.css'
import Warning from "../components/Warning.vue";
const messagesStore = useMessagesStore();
onMounted(()=>{
  messagesStore.getUserMessages();
})
</script>

<template>
  <section class="container">
    <FormAddTweet @add="messagesStore.addPost"/>

    <LoaderComponent v-if="messagesStore.isLoading"/>

    <div v-else>
      <Posts v-if="!messagesStore.error"
             :posts="messagesStore.userMessages"
             :remove="messagesStore.removePost"/>

      <Warning v-else :label='"You have not posts yet"'/>
    </div>
  </section>
</template>

<style scoped>
.container{
  margin: 30px auto;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>