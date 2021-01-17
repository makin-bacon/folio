<template>
  <div class="home min-h-100">
    <HomeHeader></HomeHeader>
    <div class="pb-4 bg-white">
      <div class="container pt-24 pb-12 block-wrapper">
        <HomeAboutImage></HomeAboutImage>
        <HomeAboutText></HomeAboutText>
      </div>
    </div>
    <div class="py-16 bg-gray-900">
      <div class="container block-wrapper">
        <HomeSkillsImage></HomeSkillsImage>
        <HomeSkillsText></HomeSkillsText>
      </div>
    </div>
    <div class="py-16 bg-white">
      <div class="container block-wrapper">
        <HomeWorkImage></HomeWorkImage>
        <HomeWorkText></HomeWorkText>
      </div>
    </div>
  </div>
</template>

<script>
import HomeHeader from "../components/_home/HomeHeader"
import HomeAboutText from "../components/_home/HomeAboutText"
import HomeAboutImage from "../components/_images/_home/HomeAboutImage"
import HomeSkillsText from "../components/_home/HomeSkillsText"
import HomeSkillsImage from "../components/_images/_home/HomeSkillsImage"
import HomeWorkText from "../components/_home/HomeWorkText"
import HomeWorkImage from "../components/_images/_home/HomeWorkImage"
export default {
  components: {
    HomeHeader,
    HomeAboutText,
    HomeAboutImage,
    HomeSkillsText,
    HomeSkillsImage,
    HomeWorkText,
    HomeWorkImage,
  },
}
</script>
