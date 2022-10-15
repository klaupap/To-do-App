<template>
  <div class="container-fluid">
    <div class="row align-items-center">
      <div class="col-sm-6 p-3 mb-2 text-white d-none d-md-block .has-bg-img">
        <img class="img-fluid" src="./icons/Doing-best.png" />
      </div>

      <div class="col align-items-center">
        <h4 class="text-center">Sign in</h4>
        <form @submit.prevent="signIn">
          <!-- Pendiente la validación email-->
          <div class="mb-3">
            <input
              type="email"
              v-model="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email address"
            />
          </div>
          <!-- Pendiente la validación password-->
          <div class="mb-3">
            <input
              type="password"
              v-model="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div class="text-center">
            <!-- Pendiente el sign in-->
            <button type="submit" class="btn btn-primary">Sign In</button>
          </div>
        </form>
        <div class="text-center">
          <!-- Pendiente el forgot password -->
          <p>Forgot password?</p>
          <!-- Pendiente el sign up -->
          <p>
            Don't have an account?
            <router-link to="/signup"> Sign Up </router-link>
            <router-view />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

