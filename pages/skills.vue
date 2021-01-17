<template>
  <div class="skills-bg-color w-100">
    <div class="container mx-auto">
      <SkillsHeader></SkillsHeader>
      <SkillsBody></SkillsBody>
    </div>
  </div>
</template>

<script>
import SkillsHeader from "../components/_skills/SkillsHeader"
import SkillsBody from "../components/_skills/SkillsBody"
export default {
  components: {
    SkillsHeader,
    SkillsBody,
  },
}
</script>
