<template>
  <div class="header">
    <img
      class="header__logo"
      src="/logo.png"
      alt="logo"
      @click="$router.push('/')"
    />
  </div>
</template>

<style lang="scss" scoped>
.header {
  background-color: $color_main;
  text-align: center;

  &__logo {
    margin: 20px;
    cursor: pointer;
  }
}

@media (max-width: 730px) {
  .header__logo {
    max-width: 50%;
  }
}
</style>
