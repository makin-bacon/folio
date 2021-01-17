<template>
  <div class="px-0 md:pl-12 md:w-6/12">
    <div class="block w-full">
      <!-- <h3
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
        class="mb-4 text-2xl gsReveal gsReveal-from-right"
      >
        About me
      </h3> -->
      <p
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
        class="mb-12"
      >
        While you already know me we do have a criteria to meet here so I've
        made a section covering my vital statistics and work history. Also
        listed here is a list of tools I use daily.
      </p>
      <NuxtLink
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
        class="inline-block px-6 py-4 text-white bg-purple-700"
        to="/about"
        >Take me there</NuxtLink
      >
    </div>
  </div>
</template>
