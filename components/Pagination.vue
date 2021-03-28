<template>
  <div class="pagination">
    <ul class="pagination__list">
      <li class="pagination__item ">
        <a
          class="pagination__item__link"
          href="#"
          @click.prevent="$emit('to', -1, true)"
          >назад</a
        >
      </li>
      <li
        v-for="p of countPages"
        :key="p"
        class="pagination__item"
        :class="{
          'pagination__item--active': currentPage === p
        }"
      >
        <a
          class="pagination__item__link"
          href="#"
          @click.prevent="$emit('to', p)"
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
          @click.prevent="$emit('to', 1, true)"
          >вперед</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["currentPage", "pages"],
  emits: ["to"],
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
    padding: 15px 21px;
    &__link {
      //display: inline-block;

      cursor: pointer;
      font-size: 14px;
      text-decoration: none;
      color: $color_main;

      &:hover {
        text-decoration: underline;
      }
    }

    &--active {
      background-color: $bg_color2;

      .pagination__item__link {
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

@media (max-width: 730px) {
  .pagination__item {
    margin-left: 9px;
    padding: 5px 10px;
  }
}
</style>
