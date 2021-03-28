<template>
  <div class="home-page wrap">
    <Ad v-for="ad of ads" :key="ad.id" :ad="ad" />

    <Pagination :pages="pages" :currentPage="currentPage" @to="toPage" />
  </div>
</template>

<script>
import Ad from "../components/Ad";
import Pagination from "@/components/Pagination";

export default {
  name: "Home",
  components: { Ad, Pagination },
  async asyncData(ctx) {
    const currentPage = +ctx.query.page || 1;
    const { data: ads, meta } = await ctx.store.dispatch(
      "fetchAds",
      currentPage
    );

    return {
      ads,
      pages: meta.pagination.pages,
      currentPage
    };
  },

  methods: {
    toPage(page, flag = false) {
      if (flag) {
        this.currentPage += page;

        if (this.currentPage > this.pages) this.currentPage = 1;
        if (this.currentPage < 1) this.currentPage = this.pages;
      } else this.currentPage = page;
    }
  },
  watch: {
    async currentPage(page) {
      const { data } = await this.$store.dispatch("fetchAds", page);
      this.ads = data;

      this.$router.push(`/?page=${this.currentPage}`);
    }
  }
};
</script>

<style lang="scss">
@media (max-width: 730px) {
  .home-page {
    padding: 18px 10px;
  }
}
</style>
