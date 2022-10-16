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
        <div v-if="errorMsg">
          <p>{{ errorMsg }}</p>
        </div>
        <form>
          <!-- Pendiente la validación email-->
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
          <!-- Pendiente la validación password-->
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
            <button type="submit" class="btn btn-primary">Login</button>
          </div>
        </form>
        <div class="text-center">
          <!-- Pendiente el sign up -->
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

export default {
  name: "signIn",
  setup() {
    const email = ref(null);
    const password = ref(null);
    const errorMsg = ref(null);

    return { email, password, errorMsg };
  },
};
</script>
