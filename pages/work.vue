<template>
  <div class="container mx-auto">
    <WorkHeader></WorkHeader>
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
