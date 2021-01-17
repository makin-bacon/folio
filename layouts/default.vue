<template>
  <div class="flex flex-col justify-between h-screen app">
    <Header></Header>
    <Nuxt />
    <FooterLinks></FooterLinks>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/_global/Header"
import FooterLinks from "../components/_global/FooterLinks"
import Footer from "../components/_global/Footer"
export default {
  components: {
    Header,
    FooterLinks,
    Footer,
  },
}
</script>
