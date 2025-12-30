<script setup lang="ts">
defineProps<{
  year: number | string;
}>();
</script>

<template>
  <footer class="footer">
    <p>
      Vicksburg Family Dentistry<br /><span class="unstyle-auto-detected-links"
        >02 West Prairie Street, Vicksburg, MI 49009<br />269-649-1495</span
      >
    </p>
    <p>&copy; {{ year }} All Rights Reserved</p>
  </footer>
</template>

<style>
footer.footer {
  text-align: center;
  padding: 20px;
  background-color: #636466;
  color: #fff;
  font-size: 14px;
}
footer.footer p {
  margin-top: 0;
  margin-bottom: 16px;
}
</style>
