<template>
  <section>
    <h2>v-if / v-else-if / v-else</h2>
    <p>Esta estructura permite mostrar contenido según condiciones.</p>

    <button @click="estado++">Cambiar Estado</button>
    <p>Estado actual: {{ estado }}</p>

    <div v-if="estado === 0">Estado es cero</div>
    <div v-else-if="estado === 1">Estado es uno</div>
    <div v-else>Estado es diferente de cero o uno</div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const estado = ref(0)
</script>
