<template>
  <div class="container flex flex-col">
    <div class="flex md:flex">
      <div class="mb-16 w-12/12">
        <!-- <h2
          v-gsap.from="{
            y: -50,
            duration: 0.5,
            opacity: 0,
            ease: 'power2',
            stagger: 0.5,
          }"
          v-gsap.to="{
            y: 0,
            duration: 0.5,
            opacity: 1,
            ease: 'power2',
          }"
          class="text-2xl lg:text-3xl lg:mt-12 w-12/12"
        >
          Past projects
        </h2> -->
        <p
          v-gsap.from="{
            y: 50,
            duration: 2,
            opacity: 0,
            ease: 'power2',
            stagger: 0.5,
          }"
          v-gsap.to="{
            y: 0,
            duration: 2,
            opacity: 1,
            ease: 'power2',
          }"
          class="lg:mb-24 lg:mt-12"
        >
          While I've worked in the design industry for nearly 20 years, I've
          spent the last two years at Southern Cross University so have a
          limited selection of <em>recent</em> work to show that you wouldn't
          already be familiar with. Below is some work from my time before
          commencing my contract at SCU as well as a familiar face.
        </p>
        <h3
          v-gsap.from="{
            x: -50,
            duration: 3,
            opacity: 0,
            ease: 'power2',
            stagger: 0.5,
          }"
          v-gsap.to="{
            x: 0,
            duration: 3,
            opacity: 1,
            ease: 'power2',
          }"
          class="mt-8 mb-0 text-2xl"
        >
          Digital
        </h3>
      </div>
    </div>
    <hr
      v-gsap.from="{
        duration: 0.5,
        opacity: 0,
        ease: 'power2',
        stagger: 0.5,
      }"
      v-gsap.to="{
        duration: 0.5,
        opacity: 1,
        ease: 'power2',
      }"
      class="mb-16 border-b border-gray-400"
    />
    <WorkImageBlock0></WorkImageBlock0>
    <WorkImageBlock1></WorkImageBlock1>
    <WorkImageBlock2></WorkImageBlock2>
    <WorkImageBlock3></WorkImageBlock3>
    <WorkImageBlock4></WorkImageBlock4>
    <h3
      v-gsap.from="{
        x: -50,
        duration: 3,
        opacity: 0,
        ease: 'power2',
        stagger: 0.5,
      }"
      v-gsap.to="{
        x: 0,
        duration: 3,
        opacity: 1,
        ease: 'power2',
      }"
      class="mt-8 mb-16 text-2xl"
    >
      Print
    </h3>
    <hr
      v-gsap.from="{
        duration: 0.5,
        opacity: 0,
        ease: 'power2',
        stagger: 0.5,
      }"
      v-gsap.to="{
        duration: 0.5,
        opacity: 1,
        ease: 'power2',
      }"
      class="mb-16 border-b border-gray-400"
    />
    <WorkImageBlock5></WorkImageBlock5>
    <WorkImageBlock6></WorkImageBlock6>
    <WorkImageBlock7></WorkImageBlock7>
  </div>
</template>

<script>
import WorkImageBlock0 from "../_work/WorkImageBlock0"
import WorkImageBlock1 from "../_work/WorkImageBlock1"
import WorkImageBlock2 from "../_work/WorkImageBlock2"
import WorkImageBlock3 from "../_work/WorkImageBlock3"
import WorkImageBlock4 from "../_work/WorkImageBlock4"
import WorkImageBlock5 from "../_work/WorkImageBlock5"
import WorkImageBlock6 from "../_work/WorkImageBlock6"
import WorkImageBlock7 from "../_work/WorkImageBlock7"
export default {
  components: {
    WorkImageBlock0,
    WorkImageBlock1,
    WorkImageBlock2,
    WorkImageBlock3,
    WorkImageBlock4,
    WorkImageBlock5,
    WorkImageBlock6,
    WorkImageBlock7,
  },
}
</script>
