export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "SCU Digital Producer and Designer",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    // script: [
    //   {
    //     src: "~/assets/js/scripts.js",
    //   },
    // ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // script: [{ src: "/assets/js/scripts" }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    // https://nuxtjs.org/blog/going-dark-with-nuxtjs-color-mode/
    "@nuxtjs/color-mode",
    // https://github.com/nuxt-community/fontawesome-module#readme
    "@nuxtjs/fontawesome",
    // https://github.com/nuxt-community/google-fonts-module
    "@nuxtjs/google-fonts",
    "nuxt-gsap-module",
  ],
  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true,
    },
    extraEases: {
      expoScaleEase: true,
    },
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // https://storybook.nuxtjs.org
  storybook: {
    addons: [
      "@storybook/addon-docs",
      "@storybook/addon-notes",
      "@storybook/addon-controls",
    ],
    parameters: {},
  },

  // https://color-mode.nuxtjs.org
  colorMode: {
    preference: "light", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    classSuffix: "",
  },

  googleFonts: {
    families: {
      "Work Sans": true,
    },
  },

  // Add global page transition
  pageTransition: {
    name: "page",
    mode: "out-in",
    css: false,

    beforeEnter(el) {
      this.$gsap.set(el, {
        opacity: 0,
      })
    },

    enter(el, done) {
      this.$gsap.to(el, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: done,
      })
    },

    leave(el, done) {
      this.$gsap.to(el, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: done,
      })
    },
  },
}
