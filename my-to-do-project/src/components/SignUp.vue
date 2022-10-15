<template>
  <div class="container-fluid">
    <div class="row align-items-center">
      <div class="col-sm-6 p-3 mb-2 text-white d-none d-md-block .has-bg-img">
        <img class="img-fluid .bg-img width: 100%" src="./icons/Doing-best.png" />
        <h4>Logo i tal</h4>
      </div>
      <div class="col align-items-center">
        <h4 class="text-center">Sign in</h4>
        <form @submit.prevent="signUp">
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
          <div class="mb-3">
            <input
              type="password"
              v-model="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Confirm Password"
            />
          </div>
          <div class="text-center">
            <!-- Pendiente el sign in-->
            <button type="submit" class="btn btn-primary">Sign Up</button>
          </div>
        </form>
        <div class="text-center">
          <p>
            Already have an account?
            <router-link to="/signin"> Sign In </router-link>
          </p>
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>
