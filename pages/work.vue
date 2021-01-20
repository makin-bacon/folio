<template>
  <div class="container mx-auto">
    <div class="lg:w-8/12 lg:mr-auto">
      <WorkHeader></WorkHeader>
    </div>
    <WorkBody></WorkBody>
  </div>
</template>

<script>
import WorkHeader from "../components/_work/WorkHeader"
import WorkBody from "../components/_work/WorkBody"
export default {
  components: {
    WorkHeader,
    WorkBody,
  },
}
</script>
