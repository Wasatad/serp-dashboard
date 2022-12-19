export default {
  server: {
    host: "0.0.0.0",
  },

  ssr: true,
  target: "server",
  head: {
    title: "SERP",
    htmlAttrs: {
      lang: "ru",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Аналитический маркетиговый инструмент",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap",
      },
    ],
    script: [
      {
        src: "https://kit.fontawesome.com/237962fb04.js",
        crossorigin: "anonymous",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // css: ["element-ui/lib/theme-chalk/index.css"],
  css: ["@assets/styles/element-ui/index.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/element-ui"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/style-resources"],
  styleResources: {
    scss: ["@assets/styles/scss/*.scss"],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },
};
