<template>
  <div class="px-0 md:pl-12 md:mt-0 md:w-6/12 lg:pl-12">
    <div class="block w-full">
      <!-- <h3 class="mb-4 text-2xl">Work examples</h3> -->
      <p
        v-gsap.from="{
          x: 50,
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
        Here is a small collection of work across a range of mediums. As I've
        worked in a similar role at SCU for some time I'm hopeful that I've
        demonstrated enough ability in the skills you need in the role of
        Digital Producer and Designer so I thought it might be a nice idea to
        make you a website.
      </p>
      <NuxtLink
        v-gsap.from="{
          y: 50,
          duration: 2,
          opacity: 0,
          ease: 'power2',
        }"
        v-gsap.to="{
          duration: 2,
          opacity: 1,
          ease: 'power2',
        }"
        class="inline-block px-6 py-4 text-white bg-purple-700"
        to="/work"
        >View some work</NuxtLink
      >
    </div>
  </div>
</template>
