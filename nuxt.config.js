export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "SCU Interview",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["~/assets/css/tailwind.css"],

  purgeCSS: {
    whitelist: ["dark-mode"],
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    // https://nuxtjs.org/blog/going-dark-with-nuxtjs-color-mode/ (if needed)
    "@nuxtjs/color-mode",
    // Google Fonts
    "@nuxtjs/google-fonts",
    // GSAP Nuxt
    "nuxt-gsap-module",
  ],
  // Add Fonts
  googleFonts: {
    families: {
      "Work Sans": true,
    },
  },
  // Activate extra GSAP
  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true,
    },
    extraEases: {
      expoScaleEase: true,
    },
  },
  // Activate page transitions
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

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-import': {},
        'tailwindcss': {},
        'autoprefixer': {}
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true
        }
      }
    }
  }
}
