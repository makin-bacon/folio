<template>
  <div class="container mx-auto">
    <AboutHeader></AboutHeader>
    <AboutCv></AboutCv>
  </div>
</template>

<script>
import AboutHeader from "../components/_about/AboutHeader"
import AboutCv from "../components/_about/AboutCv"
export default {
  components: {
    AboutHeader,
    AboutCv,
  },
}
</script>
