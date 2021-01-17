<template>
  <div class="mb-16">
    <div class="flex flex-col items-center md:flex-row md:flex-wrap">
      <!-- LEFT BLOCK -->
      <div class="order-2 md:w-4/12 md:pl-6">
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
          KBR
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
          Application interface for Navy. Designed as an on and offline training
          tool for sailors and maintenance workers deployed on the LHD (Landing
          Helicopter Dock), the largest ships in the Australian Navy. Interface
          initially mocked up in sketchfrom various layouts were built in highly
          organised Photoshop files for handoff to developers.
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
          <span class="font-bold">Role: </span>Design and build
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
          <span class="font-bold">Tools: </span>Adobe Photoshop, Adobe
          Illustrator
        </p>
      </div>
      <!-- RIGHT BLOCK -->
      <div class="flex flex-col order-1 md:w-8/12 md:pr-6 md:order-1">
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
          src="../../assets/img/work/KBR-defence-UI-1280.jpg"
          alt="KBR Defence UI"
        />
      </div>
    </div>
  </div>
</template>
