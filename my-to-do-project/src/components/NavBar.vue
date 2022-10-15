<template>

  <header>
    <nav class="container nav nav-fill">
      <div style="height: 70px; width: 60px">
        <router-link to="/home" class="nav-link" aria-current="page"
          ><img class="img-fluid" src="./icons/mug-white.png" />
        </router-link>
      </div>

      <router-link to="/signin" class="nav-link">Sign In</router-link>
      <router-link to="/signout" class="nav-link">Sign Out</router-link>
      <router-view />
    </nav>
  </header>
</template>

<script setup></script>
