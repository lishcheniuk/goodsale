<template>
  <div class="ad-page wrap">
    <Ad :ad="ad" />
  </div>
</template>

<script>
import Ad from "@/components/Ad";

export default {
  name: "AdPage",
  components: { Ad },
  async asyncData(ctx) {
    const { data: ad } = await ctx.store.dispatch("fetchAdById", ctx.params.id);
    return { ad };
  }
};
</script>

<style></style>
