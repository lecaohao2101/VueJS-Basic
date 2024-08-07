<template>
  <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
    <h5 class="my-0 mr-md-auto font-weight-normal">
      <router-link to="/">Vue Mini Project</router-link>
    </h5>
    <nav class="my-2 my-md-0 mr-md-3">
      <router-link to="/product">Product management</router-link>
      <router-link to="/user">User management</router-link>
    </nav>
    <a class="btn btn-outline-primary" routerlink="cart">Administrator</a>
  </div>

  <router-view/>
</template>

<style>

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0px 15px 0px 15px
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
