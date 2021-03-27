<template>
  <div class="home-page wrap">
    <Ad v-for="ad of ads" :key="ad.id" :ad="ad" />

    <div class="pagination">
      <ul class="pagination__list">
        <li class="pagination__item ">
          <a
            class="pagination__item__link"
            href="#"
            @click.prevent="toPage(-1, true)"
            >назад</a
          >
        </li>
        <li
          class="pagination__item pagination__item--active"
          v-for="p of countPages"
          :key="p"
        >
          <a
            class="pagination__item__link"
            :class="{
              'pagination__item__link--active': currentPage === p
            }"
            href="#"
            @click.prevent="toPage(p)"
            >{{ p }}</a
          >
        </li>
        <li class=" pagination__item more" v-if="pages - 2 > currentPage">
          . . .
        </li>

        <li class="pagination__item">
          <a
            class="pagination__item__link"
            href="#"
            @click.prevent="toPage(1, true)"
            >вперед</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Ad from "../components/Ad";

export default {
  name: "Home",
  components: { Ad },
  async asyncData(ctx) {
    const { data: ads, meta } = await ctx.store.dispatch("fetchAds", 1);

    return {
      ads,
      pages: meta.pagination.pages,
      currentPage: +ctx.query.page || 1
    };
  },

  computed: {
    countPages() {
      const nav = [];
      Array(this.pages)
        .fill("")
        .forEach((_, idx) => {
          if (this.currentPage + 1 >= idx && idx >= this.currentPage - 3) {
            nav.push(idx + 1);
          }
        });

      return nav.length > 1 ? nav : [];
    }
  },

  methods: {
    toPage(page, flag = false) {
      if (flag) {
        if (this.currentPage >= this.pages) this.currentPage = 1;
        else if (this.currentPage <= 1) this.currentPage = this.pages;
        else this.currentPage += page;
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
.pagination {
  margin-top: 64px;

  &__list {
    list-style-type: none;
    display: flex;
    justify-content: center;
  }

  &__item {
    border: 1px solid $color_main;
    margin-left: 29px;

    &__link {
      display: inline-block;
      padding: 15px 21px;
      cursor: pointer;
      font-size: 14px;
      text-decoration: none;
      color: $color_main;

      &:hover {
        text-decoration: underline;
      }

      &--active {
        background-color: $bg_color2;
        color: #fff;
      }
    }
    &.more {
      display: flex;
      align-items: flex-end;
      font-weight: 800;
      border: none;
      padding: 5px;
    }
  }
}
</style>
