<template>
  <div class="default-layout">
    <Head />

    <main>
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
  min-width: 320px;
}
main {
  margin: 53px 0 141px;
}

@media (max-width: 730px) {
  main {
    margin: 0;
  }
}
</style>
