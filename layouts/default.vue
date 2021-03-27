<template>
  <div class="default-layout">
    <Head />

    <main class="default-layout__main">
      <Nuxt />
    </main>

    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import Head from "@/components/Head";

export default {
  components: { Footer, Head }
};
</script>

<style lang="scss">
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__main {
    margin: 53px 0 141px;
  }
}
</style>
