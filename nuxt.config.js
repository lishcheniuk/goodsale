export default {
  head: {
    title: "goodsale",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "goodsale" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Montserrat:wght@600;800&family=Raleway:ital@0;1&display=swap"
      }
    ]
  },

  loading: { color: "#cc9966" },

  css: ["~assets/global.scss"],

  plugins: ["@/plugins/globals"],

  components: true,

  buildModules: ["@nuxtjs/style-resources"],

  //Для глобального использования пременных и миксинов
  styleResources: {
    scss: ["./assets/variables.scss", "./assets/_mixins.scss"]
  },

  modules: [],

  build: {}
};
