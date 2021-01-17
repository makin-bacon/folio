<template>
  <div class="order-2 text-white md:mt-0 md:w-6/12 md:order-1 lg:pr-12">
    <div class="block w-full">
      <!-- <h3 class="mb-4 text-2xl">What I can do</h3> -->
      <p
        v-gsap.from="{
          y: 50,
          duration: 2,
          opacity: 0,
          ease: 'power2',
        }"
        v-gsap.to="{
          x: 0,
          duration: 2,
          opacity: 1,
          ease: 'power2',
        }"
        class="mb-12"
      >
        Whether it is creating assets for web, film or print, I use a range of
        industry-standard technologies and methodologies to achieve high quality
        outputs.
      </p>
      <NuxtLink
        v-gsap.from="{
          x: -50,
          duration: 2,
          opacity: 0,
          ease: 'power2',
        }"
        v-gsap.to="{
          x: 0,
          duration: 2,
          opacity: 1,
          ease: 'power2',
        }"
        class="inline-block px-6 py-4 text-white bg-purple-700"
        to="/skills"
        >See what I use</NuxtLink
      >
    </div>
  </div>
</template>
