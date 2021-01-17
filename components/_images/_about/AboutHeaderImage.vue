<template>
  <div
    v-gsap.from="{
      duration: 3,
      opacity: 0,
      ease: 'power2',
    }"
    v-gsap.to="{
      duration: 3,
      opacity: 1,
      ease: 'power2',
    }"
    class="w-full h-32 mb-8 bg-no-repeat bg-contain lg:mb-0 lg:mt-16 lg:h-72 sm:w-6/12 about-header-image"
  ></div>
</template>
