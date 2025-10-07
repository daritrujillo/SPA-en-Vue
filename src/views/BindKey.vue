<template>
  <section>
    <h2>v-bind:key (dentro de un bucle)</h2>
    <p>Permite identificar cada elemento único dentro de un bucle para optimizar el renderizado.</p>

    <ul>
      <li v-for="persona in personas" :key="persona.id">
        {{ persona.id }} — {{ persona.nombre }}
      </li>
    </ul>
  </section>
</template>

<script setup>
const personas = [
  { id: 1, nombre: 'Darinel' },
  { id: 2, nombre: 'Sofía' },
  { id: 3, nombre: 'Mateo' }
]
</script>
