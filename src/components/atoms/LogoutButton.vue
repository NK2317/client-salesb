
<template>
    <button type="button"
        class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 
        focus:outline-none focus:ring-red-300 font-medium rounded-lg 
        text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 
        dark:hover:bg-red-700 dark:focus:ring-red-800"
        :onclick="logOut" >
        Logout
        <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
        </svg>
    </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        text: {
            type: String,
            default: "Logout",
        },
        computed:{
            isLogIn(){
                return window.sessionStorage.getItem("_username");
            }
        },
        methods: {
            logOut(){
                window.sessionStorage.removeItem("_username");
                window.location.replace("http://localhost:8080/login");
            }
        },
    },
});
</script>