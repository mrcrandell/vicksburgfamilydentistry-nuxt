<template>
  <nav class="navbar">
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link" href="#services">Services</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#contact-us">Contact Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#about-us">About Us</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav.navbar {
  position: relative;
  padding: 0 rem(16);
  background-color: $silver-sand;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  @include bp-md-tablet {
    font-size: 1.25rem; // 20px
  }
  .nav {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    width: 100%;
    justify-content: center;
    .nav-item {
      flex: 1;
      > a,
      > a:focus {
        display: block;
        padding: 1.25rem 1rem;
        color: #fff;
        text-align: center;
        transition: background-color 0.5s ease;
        text-decoration: none;
        &:hover {
          background-color: $deep_cerulean;
        }
      }
    }
  }
}
</style>
