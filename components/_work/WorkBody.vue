<template>
  <div class="container flex flex-col">
    <div class="flex md:flex">
      <div class="mb-16 w-12/12 lg:w-8/12 lg:mr-auto">
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
        >
          While I've worked in the design industry for nearly 20 years, I've
          spent the last two years at Southern Cross University so have a
          limited selection of <em>recent</em> work to show that you wouldn't
          already be familiar with.
        </p>
        <p
          v-gsap.from="{
            y: 50,
            duration: 3,
            opacity: 0,
            ease: 'power2',
            stagger: 0.5,
          }"
          v-gsap.to="{
            y: 0,
            duration: 3,
            opacity: 1,
            ease: 'power2',
          }"
        >
          In many ways this little website serves as a good summary of the type
          of work I do. This was built as HTML partials (i.e. little pieces) and
          the CSS was written using the
          <a href="//tailwindcss.com" target="_blank">Tailwind CSS</a>
          framework. This was then ported into the
          <a
            class="transition-colors duration-300"
            href="//nuxtjs.org"
            target="_blank"
            >NuxtJS
          </a>
          framework so it could behave as a single page application. The
          <a href="//greensock.com" target="_blank">Greensock</a>
          javascript library was used for a little bit of movement between pages
          and finally it was all uploaded to
          <a href="//github.com" target="_blank">Github</a>
          and served as a static site through
          <a href="//netlify.com" target="_blank">Netlify</a>.
        </p>
        <p
          v-gsap.from="{
            y: 50,
            duration: 4,
            opacity: 0,
            ease: 'power2',
            stagger: 0.5,
          }"
          v-gsap.to="{
            y: 0,
            duration: 4,
            opacity: 1,
            ease: 'power2',
          }"
        >
          All code was written on a mac and the headings were rendered in
          <a href="//blender.org" target="_blank">Blender</a>
          on a Windows 10 machine.
        </p>
      </div>
    </div>
    <hr class="mb-16 border-gray-200" />

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
      Digital
    </h3>

    <WorkImageBlock0></WorkImageBlock0>
    <WorkImageBlock1></WorkImageBlock1>
    <WorkImageBlock2></WorkImageBlock2>
    <WorkImageBlock3></WorkImageBlock3>
    <WorkImageBlock4></WorkImageBlock4>
    <hr class="mb-16 border-gray-200" />

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
