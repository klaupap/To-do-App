<template>
  <div class="container-fluid">
    <div class="row align-items-center">
      <div class="col-sm-6 p-3 mb-2 text-white d-none d-md-block .has-bg-img">
        <img class="img-fluid" src="../components/icons/Doing-best.png" />
      </div>

      <div class="col align-items-center">
        <h4 class="text-center">Sign in</h4>
        <p>Are you ready to do your best?</p>

        <!-- Mensaje error -->
        <div id="error-message" v-if="errorMsg">
            <p>{{ errorMsg }}</p>
          </div>

        <form @submit.prevent="login">
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
            <button
              type="submit"
              class="btn btn-primary"
              style="background-color: #f28482"
            >
              Login
            </button>
          </div>


          <div class="text-center">
            <p>
              Don't have an account?
              <router-link to="/signup"> Register </router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user.js";
import { storeToRefs } from "pinia";

const email = ref(null);
const password = ref(null);
const errorMsg = ref(null);
const router = useRouter();
const userStore = useUserStore();

const login = async () => {
  try {
    await userStore.logIn(email.value, password.value);
    router.push({ name: "home" });
  } catch (error) {
    errorMsg.value = "Error: Invalid mail or password";
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  }
};
</script>
