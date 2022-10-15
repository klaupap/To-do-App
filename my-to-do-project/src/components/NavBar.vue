<template>
  <nav class="nav nav-pills nav-fill">
    <router-link to="/" class="nav-link active" aria-current="page" href="#"
      >Home</router-link
    >
    <router-link to="/auth" class="nav-link">Sign In</router-link>
    <a class="nav-link" href="#">Sign Out</a>
    <router-view />
  </nav>
</template>

<script></script>
