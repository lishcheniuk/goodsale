<template>
  <div class="ad-page wrap">
    <pre>{{ ad }}</pre>
  </div>
</template>

<script>
export default {
  name: "AdPage",
  async asyncData(ctx) {
    const { data: ad } = await ctx.store.dispatch("fetchAdById", ctx.params.id);
    return { ad };
  }
};
</script>

<style></style>
