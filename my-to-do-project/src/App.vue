<template>
    <NavBar></NavBar>
    <RouterView />
</template>

<script setup>
import { onMounted } from "vue";
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "./stores/user.js";
import { useRouter } from "vue-router";
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import { supabase } from "./supabase";

const router = useRouter();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);



    /*
const appReady = ref(null);

// check to see if user is already logged in
const user1 = supabase.auth.user();

// if user does not exist, need to make app ready
if (!user1) {
  appReady.value = true;

// if user is logged in, this will fire
  supabase.auth.onAuthStateChange((_, session) => {
  store.methods.setUser(session);
  appReady.value = true;
})

}
*/



</script>

<style>
html {
  font-family: "Roboto", sans-serif;
}
body,
html, 
#app {
  height: 100%;
}
</style>
