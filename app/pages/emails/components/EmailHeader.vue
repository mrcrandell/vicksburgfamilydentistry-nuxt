<script setup lang="ts">
const config = useRuntimeConfig();
const siteUrl = config.public.siteUrl;
</script>
<template>
  <header class="header">
    <img
      :src="`${siteUrl}/img/vicksburg-family-dentistry-logo-email.jpg`"
      alt="Vicksburg Family Dentistry"
    />
  </header>
</template>

<style>
header.header {
  display: block;
  max-width: 600px;
  background-color: #555555;
}
header.header img {
  width: 100%;
  height: auto;
  display: block;
}
</style>
