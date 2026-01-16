<script setup>
// No need for scroll animation since logo is immediately visible
</script>

<template>
  <header class="header">
    <div class="logo logo-animate">
      <AppLogo />
    </div>
  </header>
</template>
<style lang="scss" scoped>
header.header {
  background-color: $emporor;
  color: #ffffff;
  padding: rem(60) rem(30);
  .logo {
    display: block;
    width: 100%;
    max-width: rem(620);
    margin: 0 auto;

    &.logo-animate {
      opacity: 0;
      transform: scale(0.8);
      animation: logoZoomIn 0.25s ease-out forwards;

      @media (prefers-reduced-motion: reduce) {
        animation: none;
        opacity: 1;
        transform: none;
      }
    }
  }
}

@keyframes logoZoomIn {
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
