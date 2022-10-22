<template>
  <div class="container-fluid">
    <div class="row align-items-center">
      <div class="col-sm-6 p-3 mb-2 text-white d-none d-md-block .has-bg-img">
        <img class="img-fluid" src="../components/icons/Doing-best.png" />
      </div>

      <div class="col align-items-center">
        <h4 class="text-center">Register</h4>
        <p>Are you ready to do your best?</p>

        <!-- Formulario -->
        <!-- Mensaje error / falta el CSS -->
        <div id="error-message" v-if="errorMsg">
          <p>{{ errorMsg }}</p>
        </div>

        <form @submit.prevent="signup">
          <div class="mb-3">
            <input
              type="email"
              required
              class="form-control"
              id="email"
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
          <div class="mb-3">
            <input
              type="password"
              required
              class="form-control"
              id="confirmPassword"
              placeholder="Confirm Password"
              v-model="confirmPassword"
            />
          </div>
          <div class="text-center">
            <!-- Sign up // Sale este error a la vez que {{ verifyEmail }}: duplicate key value violates unique constraint "users_email_key"-->
            <button type="submit" class="btn btn-primary">Register</button>
          </div>
          <div class="text-center">
            <!-- Sign in -->
            <p>
              Already have an account?
              <router-link to="/signin"> Sign In </router-link>
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
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/user.js";

const email = ref(null);
const password = ref(null);
const confirmPassword = ref(null);
const errorMsg = ref(null);
const router = useRouter();
//const verifyEmail = ref(null);//
const userStore = useUserStore();

const signup = async () => {
  if (password.value === confirmPassword.value) {
    try {
      await userStore.signUp(email.value, password.value);
      router.push({ name: "signin" });
    } catch (error) {
      errorMsg.value = error.message;
      setTimeout(() => {
        errorMsg.value = null;
      }, 5000);
    }
    return;
  }
  errorMsg.value = "Error: Passwords do not match";
  setTimeout(() => {
    errorMsg.value = null;
  }, 5000);
};
</script>
