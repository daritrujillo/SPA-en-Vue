<template>
  <section>
    <h2>v-for</h2>
    <p>Se utiliza para iterar sobre listas o arreglos.</p>

    <ul>
      <li v-for="(nombre, index) in nombres" :key="index">
        {{ index + 1 }}. {{ nombre }}
      </li>
    </ul>
  </section>
</template>

<script setup>
const nombres = ['Ana', 'Luis', 'María', 'Carlos']
</script>
