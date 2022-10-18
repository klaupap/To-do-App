<template>
  <header>
    <nav class="container nav nav-fill">
      <div style="height: 70px; width: 60px">
        <router-link to="/home" class="nav-link" aria-current="page"
          ><img class="img-fluid" src="./icons/mug-white.png" />
        </router-link>
      </div>

      <router-link to="/signin" class="nav-link"
        >Sign In</router-link
      >
      <button @click="logout" type="submit" class="nav-link">
        Sign Out
      </button>
      <router-view />
    </nav>
  </header>
</template>

<!-- USER LOGOUT - No funciona. Revisar -->

<!-- Conditional renderings nav links pendent - No funciona. Revisar -->

<script>

import { supabase } from "../supabase";
import { useRouter } from "vue-router";

export default {
  setup() {

    const router = useRouter();

    const logout = async () => {
      await supabase.auth.signOut();
      router.push({ name: "home" });
    };
    return { logout };
  },
};
</script>

//USER LOGOUT - SUPABASE (PENDIENTE DE COLOCAR) //let { error } = await
supabase.auth.signOut()
