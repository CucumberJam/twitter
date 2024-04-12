import {defineStore} from "pinia";
import {ref} from "vue";
import {
    addPostsByUserId,
    getPostsByUserId,
    removePostByUserId,
} from "../service/api.js";

export const useMessagesStore = defineStore('messages', ()=>{
    const userId = ref('');
    const userMessages = ref([]);
    const isLoading = ref(false);
    const error = ref(false);
    const getUserMessages = async()=>{
        error.value = false;
        isLoading.value = true;
        userMessages.value = await getPostsByUserId(userId.value);
        if(userMessages.value.length === 0) error.value = true;
        isLoading.value = false;
    }
    const addPost = async (post)=> {
        isLoading.value = true;
        const resId = await addPostsByUserId(userId.value, post);
        console.log('addPost: ' + resId);

        const newPost = {
            id: resId,
            author: userId,
            content: post,
            timestamp: new Date().getTime().toString(),
        }
        userMessages.value.push(newPost);
        if(userMessages.value.length > 0) error.value = false;
        isLoading.value = false;
    }
    const removePost = async (postId)=>{
        isLoading.value = true;
        const res = await removePostByUserId(postId);
        userMessages.value =  [...userMessages.value.filter(el => el.id !== postId)];
        isLoading.value = false;

        if(userMessages.value.length === 0) error.value = true;

        console.log('removePost: ' + postId);
    }

    return {
        isLoading, userMessages, userId, error,
        addPost, getUserMessages,
        removePost
    }
})






/*    const producersMessages = ref([]);*/
/*    const getProducersMessages = async()=>{
        isLoading.value = true;
        producersMessages.value = await getProducersPostsByUserId(userId.value);
        isLoading.value = false;
    }*/
/*    const changePost = async (postId, newText)=>{
        isLoading.value = true;
        const res = await updatePostByUserId(userId.value, postId, newText);
        userMessages.value = [...userMessages.value.map(el => (el.id === postId) ? {...el, text: newText} : el)];
        isLoading.value = false;
        console.log('changePost: ' + postId + ' ' + newText);
    }*/