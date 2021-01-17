<template>
  <div class="mb-16">
    <div class="flex flex-col items-center md:flex-row md:flex-wrap">
      <!-- LEFT BLOCK -->
      <div class="flex flex-col order-1 md:w-8/12 md:pl-6 md:order-2">
        <img
          v-gsap.from="{
            duration: 4,
            opacity: 0,
            ease: 'power2',
            stagger: 0.5,
          }"
          v-gsap.to="{
            duration: 4,
            opacity: 1,
            ease: 'power2',
          }"
          class="mb-8"
          src="../../assets/img/work/KEGS-INNER-block.jpg"
          alt="KEGS UI inner screen"
        />
      </div>
      <!-- RIGHT BLOCK -->
      <div class="order-2 md:w-4/12 md:pr-6 md:order-1">
        <h4
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
          class="mb-0 text-lg md:text-xl"
        >
          Interface Design
        </h4>
        <h5
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
          class="pt-2 mb-8 text-lg"
        >
          Geosynergy
        </h5>
        <p
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
          class="mb-4 text-sm md:text-base"
        >
          UI for web-based resource and logistics application (desktop only).
          This complex project served as a visual reference to the massive
          amounts of data collected and leveraged in a large-scale resource
          project. Styling of hundreds of Geoserver layers formed a large part
          of this project. This app was prototyped directly in vueJS.
        </p>
        <p
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
          class="mb-1 text-sm"
        >
          <span class="font-bold">Role: </span>Design, Frontend build
        </p>
        <p
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
          class="text-sm"
        >
          <span class="font-bold">Tools: </span>Sublime Text, vueJS, Bootstrap 4
        </p>
      </div>
    </div>
  </div>
</template>
