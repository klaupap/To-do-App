<template>
  <section>
<NavBar></NavBar>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useUserStore } from "./stores/user.js";
import NavBar from "./components/NavBar.vue";

const router = useRouter();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);

onMounted(async () => {
  try {
    await userStore.fetchUser(); // here we call fetch user
    console.log(user.value);
    if (!user.value) {
      console.log("No estás logeado");
      await userStore.signUp("claudiamurall@gmail.com", "password");
      console.log(user.value);
      router.push({ path: "/signin" });
    } else {
      console.log("Estás logeado");
      // continue to dashboard
      router.push({ path: "/home" });
    }
  } catch (e) {
    console.log(e);
  }
});



//USER SIGNUP - SUPABASE (PENDIENTE DE COLOCAR)
/*let { user, error } = await supabase.auth.signUp({
  email: 'someone@email.com',
  password: 'duPlpllykWlVZlEpIWNc'
}) 


//USER LOGIN - SUPABASE (PENDIENTE DE COLOCAR)
/*let { user, error } = await supabase.auth.signInWithPassword({
  email: 'someone@email.com',
  password: 'duPlpllykWlVZlEpIWNc'
}) */


// PASSWORD RECOVERY - SUPABASE (PENDIENTE DE COLOCAR)
//let { data, error } = await supabase.auth.api.resetPasswordForEmail(email)


//USER LOGOUT - SUPABASE (PENDIENTE DE COLOCAR)
//let { error } = await supabase.auth.signOut()

</script>

<style>
html {
  font-family: "Roboto", sans-serif;
}
</style>
