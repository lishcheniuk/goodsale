<template>
  <article class="ad">
    <img class="ad__img" :src="validImage(ad.image)" />

    <h3 class="ad__title">
      {{ ad.name }}
    </h3>
    <div class="ad__price">
      <span class="ad__price__discount" v-if="ad.discount_amount">
        <svg class="ad__price__icon" fill="#6C6C6C" width="17" height="12">
          <use xlink:href="sprite.svg#vector"></use>
        </svg>
        $ {{ ad.discount_amount }}
      </span>
      <span class="ad__price__current">
        <svg class="ad__price__icon" fill="#cc9966" width="17" height="12">
          <use xlink:href="sprite.svg#vector"></use>
        </svg>
        $ {{ ad.price }}
      </span>
    </div>
    <p class="ad__desc">
      {{ ad.description }}
    </p>

    <div class="ad__categories">
      <svg
        class="category"
        fill="#cc9966"
        width="15"
        height="15"
        v-if="ad.categories.length"
      >
        <use xlink:href="sprite.svg#category"></use>
      </svg>
      <a
        v-for="(c, index) of ad.categories"
        :key="c.id"
        @click="$router.push(`/search?category=${c.id}`)"
        >{{ c.name
        }}{{ index === ad.categories.length - 1 ? "" : ",&nbsp;" }}</a
      >
    </div>
    <a
      v-if="!$route.params.id"
      class="ad__link"
      @click="$router.push(`/${ad.id}`)"
      >переглянути</a
    >
  </article>
</template>

<script>
export default {
  props: {
    ad: {
      type: Object,
      required: true
    }
  },
  methods: {
    validImage(path) {
      return /^https:\/\/loremflickr.com\//.test(path)
        ? path
        : "https://loremflickr.com/250/250";
    }
  }
};
</script>

<style lang="scss">
.ad {
  border: 1px solid $bg_color;
  margin-top: 35px;
  padding-right: 60px;
  display: grid;
  grid-template-areas:
    "img title title"
    "img price price"
    "img desc desc"
    "img  cats link";
  align-items: start;
  grid-template-columns: auto 1fr max-content;

  &__img {
    grid-area: img;
    max-width: 252px;
    height: 360px;
    margin-right: 60px;
  }

  .ad__title {
    grid-area: title;
    align-self: end;
    font: 800 18px "Montserrat";
  }

  .ad__price {
    grid-area: price;
    align-self: center;

    &__discount,
    &__current {
      margin-right: 27px;
      svg {
        margin-right: 10px;
      }
    }

    &__discount {
      color: #6c6c6c;
      font-size: 12px;
      text-decoration: line-through;
    }

    &__current {
      font-weight: 700;
    }
  }

  .ad__desc {
    font-size: 14px;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    grid-area: desc;
  }

  .ad__categories {
    font-size: 12px;
    line-height: 20px;
    grid-area: cats;

    a {
      color: #6c6c6c;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

    svg {
      margin-right: 10px;
      position: relative;
      top: 3px;
    }
  }

  .ad__link {
    display: inline-block;
    font: 800 14px "Montserrat";
    position: relative;
    padding: 5px 0 5px 53px;
    cursor: pointer;
    margin-left: 10px;
    grid-area: link;
    justify-self: end;

    &::before {
      content: "";
      display: inline-block;
      position: absolute;
      top: 50%;
      left: 0;
      width: 30%;
      height: 3.3px;
      background-color: $color_main;
    }

    &:hover {
      text-decoration: underline;
    }
  }
}

@media (max-width: 730px) {
  .ad {
    grid-template-areas: "title" "img" "cats" "price" "desc" "link";
    grid-template-columns: 1fr;
    grid-gap: 16px 0;
    padding: 0 0 16px;
    border: none;
    border-bottom: 1px solid $bg_color;

    &__img {
      min-width: 100%;
      min-height: 50%;
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>
