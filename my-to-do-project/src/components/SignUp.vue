<template>
  <div class="container-fluid">
    <div class="row align-items-center">
      <div class="col-sm-6 p-3 mb-2 text-white d-none d-md-block .has-bg-img">
        <img class="img-fluid" src="./icons/Doing-best.png" />
      </div>

      <div class="col align-items-center">
        <h4 class="text-center">Register</h4>
        <p>Are you ready to do your best?</p>

        <!-- Mensaje error -->
        <div v-if="errorMsg">
          <p>{{ errorMsg }}</p>
        </div>
        <form @submit.prevent="signUp">
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
            <!-- Sign up-->
            <button @click="signUp" type="submit" class="btn btn-primary">
              Register
            </button>
          </div>
        </form>
        <div class="text-center">
          <!-- Sign in -->
          <p>
            Already have an account?
            <router-link to="/signin"> Sign In </router-link>
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
  name: "signUp",
  setup() {
    const email = ref(null);
    const password = ref(null);
    const confirmPassword = ref(null);
    const errorMsg = ref(null);
    const router = useRouter();

    const signUp = async () => {
      if (password.value === confirmPassword.value) {
        try {
          const { error } = await supabase.auth.signUp({
            email: email.value,
            password: password.value,
          });
          if (error) throw error;
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

    return { email, password, confirmPassword, errorMsg, signUp };
  },
};
</script>
