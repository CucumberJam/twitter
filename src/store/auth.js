import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {useRouter} from "vue-router";
import {useMessagesStore} from "./messages.js";

export const useAuthStore = defineStore('auth', ()=>{
    const userId = ref('');
    const getUserId = computed(()=> id.value);
    const isLoggedIn = ref(false);
    const messagesStore = useMessagesStore();
    const router = useRouter();
    const authenticateUser = (id)=>{
        userId.value = id;
        messagesStore.userId = id;
        isLoggedIn.value = true;
        router.push({path: '/profile'});
    }
    const logOut = ()=>{
        userId.value = '';
        messagesStore.userId = '';
        isLoggedIn.value = false;
    }
    const init = () =>{
        if(!isLoggedIn.value) {
            router.replace({path: '/login'});
        }else{
            router.push({path: '/profile'});
        }
    }
    return {
        getUserId, init, authenticateUser, isLoggedIn, logOut
    }

})