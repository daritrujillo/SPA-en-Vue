<template>
  <section>
    <h2>v-show</h2>
    <p>v-show oculta o muestra un elemento sin eliminarlo del DOM.</p>

    <button @click="visible = !visible">
      {{ visible ? 'Ocultar' : 'Mostrar' }}
    </button>

    <p v-show="visible">Este texto se muestra con v-show.</p>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const visible = ref(true)
</script>
