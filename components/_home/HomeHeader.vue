<template>
  <div class="-mt-24 bg-purple-800 w-100">
    <div
      class="container flex flex-col px-8 pb-12 mx-auto pt-72 md:flex-row min-h-96 lg:pb-24 lg:pt-78"
    >
      <div class="px-4 md:w-6/12">
        <div>
          <h1
            v-gsap.from="{
              y: 50,
              duration: 2,
              opacity: 0,
              ease: 'power2',
            }"
            v-gsap.to="{
              y: 0,
              duration: 2,
              opacity: 1,
              ease: 'power2',
            }"
            class="text-2xl text-white"
          >
            Digital Producer<br />and Designer
          </h1>
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
            class="mb-12 text-white"
          >
            Thank you for your time in looking through this presentation site to
            show my suitability for the role of Digital Producer and Designer at
            Southern Cross University. I've enjoyed the last couple of years
            working with the team in the Office of Engagement and am keen for
            that to continue.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
