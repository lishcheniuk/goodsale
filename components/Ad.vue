<template>
  <article class="ad">
    <img class="ad__img" :src="validImage(ad.image)" />
    <div class="ad__content">
      <h3 class="ad__content__title">
        {{ ad.name }}
      </h3>
      <div class="ad__content__price price-ad">
        <span class="price-ad__discount" v-if="ad.discount_amount">
          <svg class="price-ad__icon" fill="#6C6C6C" width="17" height="12">
            <use xlink:href="sprite.svg#vector"></use>
          </svg>
          $ {{ ad.discount_amount }}
        </span>
        <span class="price-ad__current">
          <svg class="price-ad__icon" fill="#cc9966" width="17" height="12">
            <use xlink:href="sprite.svg#vector"></use>
          </svg>
          $ {{ ad.price }}
        </span>
      </div>
      <p class="ad__content__desc">
        {{ ad.description }}
      </p>
      <div class="ad__content__footer ad-footer">
        <div class="ad-footer__categories">
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
        <a class="ad-footer__link" @click="$router.push(`/${ad.id}`)"
          >переглянути</a
        >
      </div>
    </div>
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
      const formats = [".png", ".jpg", ".jpeg"];
      return formats.some(f => path.includes(f))
        ? path
        : "https://loremflickr.com/250/250";
    }
  }
};
</script>

<style lang="scss">
.ad {
  height: 360px;
  display: flex;
  border: 1px solid $bg_color;
  margin-top: 35px;

  &__img {
    flex-basis: 252px;
  }

  &__content {
    flex-grow: 1;
    margin: 0 60px;
    padding: 52px 0;
    display: flex;
    flex-direction: column;

    &__title {
      font: 800 18px "Montserrat";
    }

    &__desc {
      font-size: 14px;
      line-height: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      max-height: 40%;
    }

    .price-ad {
      margin: 28px 0;

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

    .ad-footer {
      margin-top: auto;
      padding-top: 14px;
      display: flex;
      justify-content: space-between;

      &__categories {
        font-size: 12px;
        line-height: 20px;
        // display: flex;
        // align-items: center;

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
      &__link {
        display: inline-block;
        font: 800 14px "Montserrat";
        position: relative;
        padding: 5px 0 5px 53px;
        cursor: pointer;
        margin-left: 10px;
        align-self: center;

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
  }
}
</style>
