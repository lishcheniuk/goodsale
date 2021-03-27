<template>
  <div class="footer">
    <div class="footer__wrap wrap">
      <h2 class="footer__title">Бажаєте отримувати більше новин?</h2>
      <div class="footer__form form-footer">
        <div class="form-footer__input">
          <label for="email">Email</label><br />
          <input
            id="email"
            type="text"
            placeholder="placeholder"
            v-model.lazy="$v.email.$model"
            :class="{
              invalid:
                ($v.email.$dirty && !$v.email.required) ||
                ($v.email.$dirty && !$v.email.email) ||
                ($v.email.$dirty && !$v.email.maxLength)
            }"
          />
        </div>
        <div class="form-footer__input">
          <label for="name">Ваше ім'я</label><br />
          <input
            id="name"
            type="text"
            placeholder="placeholder"
            v-model.lazy="$v.name.$model"
            :class="{
              invalid:
                ($v.name.$dirty && !$v.name.required) ||
                ($v.name.$dirty && !$v.name.minLength) ||
                ($v.name.$dirty && !$v.name.maxLength) ||
                ($v.name.$dirty && !$v.name.regExp)
            }"
          />
        </div>
        <button class="form-footer__btn" @click="submitHandler">
          підписатися
        </button>
      </div>
      <div class="footer__logo"><img src="/logo.png" alt="logo" /></div>
    </div>
  </div>
</template>

<script>
import {
  required,
  email,
  minValue,
  maxLength,
  minLength
} from "vuelidate/lib/validators";

export default {
  data() {
    return {
      email: "",
      name: ""
    };
  },
  validations: {
    email: { email, required, maxLength: maxLength(100) },
    name: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(100),
      regExp: value => /^[А-Яа-яі\-']+$/.test(value)
    }
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      console.log({ email: this.email, name: this.name });
      this.email = "";
      this.name = "";
      this.$v.$reset();
    }
  }
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: $color_main;
  margin-top: auto;
  color: #fff;

  &__title {
    color: #fff;
    font-size: 1.5rem;
    font-family: "Montserrat", sans-serif;
    padding: 41px 0 10px;
    border-bottom: 1px solid $bg_color;
  }

  &__logo {
    text-align: center;
    margin: 38px 0 26px;

    img {
      width: 288px;
    }
  }

  .form-footer {
    color: $color_grey;
    display: flex;

    &__input {
      margin-right: 20px;
      flex-basis: 30%;

      label {
        display: inline-block;
        font-size: 12px;
        padding: 20px 10px 8px;
      }

      input {
        color: $color_grey;
        width: 100%;
        padding: 0 15px 15px;
        background-color: transparent;
        border: 1px solid $color_grey;
        font-size: 14px;
        line-height: 2.1;

        &.invalid {
          border: 1px solid red;
        }

        &:focus {
          outline: none;
        }
      }
    }

    &__btn {
      width: 210px;
      margin-left: auto;
      margin-top: 38px;
      color: #fff;
      background-color: $bg_color2;
      font: 800 14px/70px "Montserrat";
      border: none;
      cursor: pointer;
    }
  }
}
</style>
