<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6 p-3 mb-2 bg-info text-white">
        <h4>Logo i tal</h4>
      </div>

      <div class="col">
        <h4>Hello! Sign in into your account</h4>
        <form>
          <!-- Pendiente la validación email-->
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Email address</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <!-- Pendiente la validación password-->
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <!-- Pendiente el sign in-->
          <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
        <!-- Pendiente el forgot password -->
        <p>Forgot password?</p>
        <!-- Pendiente el sign up -->
        <p>Don't have an account? Sign up</p>
      </div>
    </div>
  </div>
</template>

<script></script>
