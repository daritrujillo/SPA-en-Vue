<template>
  <div>
    <Navbar />
    <main class="p-6">
      <router-view />

    <footer style="margin-top: 30px; padding: 10px; text-align: center; background: #f3f3f3; border-top: 1px solid #ddd;">
      <p><strong>Integrantes del equipo:</strong></p>
      <p>Darinel Roblero Trujillo · Moisés Cruz Damián · Maria Fernanda Estrada Gutiérrez</p>
    </footer>
    </main>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
}
</style>
