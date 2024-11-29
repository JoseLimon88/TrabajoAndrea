<template>
  <div id="app">

    <!--USO DE LAYOUT-->
    <header>
      <p class="margin-top text-weight-bold">LAYOUT</p>
      <router-link to="/">Inicio | </router-link>
      <router-link to="/second-page">Ir a segunda pagina</router-link>
    </header>
    <main>
      <router-view /> <!-- Aquí se renderizan las vistas -->
    </main>
  </div>
</template>

<script setup>

</script>

<style>
.margin-top {
  margin-top: 30px;
}

.text-weight-bold {
  font-weight: bold;
}
</style>
