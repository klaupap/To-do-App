<!-- No funciona el sign in. Revisar-->

<template>
  <div class="container-fluid">
    <div class="row align-items-center">
      <div class="col-sm-6 p-3 mb-2 text-white d-none d-md-block .has-bg-img">
        <img class="img-fluid" src="./icons/Doing-best.png" />
      </div>

      <div class="col align-items-center">
        <h4 class="text-center">Sign in</h4>
        <p>Are you ready to do your best?</p>

        <!-- Mensaje error -->
        <div v-if="errorMsg"></div>
        <form @submit.prevent="signIn">
          <div class="mb-3">
            <input
              type="email"
              required
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email address"
              v-model="email"
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              required
              class="form-control"
              id="password"
              placeholder="Password"
              v-model="password"
            />
          </div>
          <div class="text-center">
            <!-- Pendiente el sign in-->
            <button @click="signIn" type="submit" class="btn btn-primary">
              Login
            </button>
          </div>
        </form>
        <div class="text-center">
          <p>
            Don't have an account?
            <router-link to="/signup"> Register </router-link>
            <router-view />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";

export default {
  name: "signIn",
  setup() {
    const email = ref(null);
    const password = ref(null);
    const errorMsg = ref(null);
    const router = useRouter();

    const signIn = async () => {
      try {
        const { error } = await supabase.auth.signIn({
          email: email.value,
          password: password.value,
        });
        if (error) throw error;
        router.push({ name: "home" });
      } catch (error) {
        errorMsg.value = "Error: Invalid mail or password";
        setTimeout(() => {
          errorMsg.value = null;
        }, 5000);
      }
    };
    return { email, password, errorMsg, signIn };
  },
};
</script>
