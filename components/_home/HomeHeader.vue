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
            class="mb-8 text-white"
          >
            Thank you for your time in looking through this presentation site to
            show my suitability for the role of Digital Producer and Designer at
            Southern Cross University. I've enjoyed the last couple of years
            working with the team in the Office of Engagement and am keen for
            that to continue.
          </p>
        </div>
      </div>
      <div class="w-16 h-16 px-4 ml-auto md:w-3/12 lg:w-2/12">
        <svg
          id="homeHeaderLogo"
          v-gsap.from="{
            y: 50,
            x: -50,
            duration: 4,
            opacity: 0,
            ease: 'power2',
          }"
          v-gsap.to="{
            y: 0,
            x: 0,
            duration: 4,
            opacity: 1,
            ease: 'power2',
          }"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 32 32"
          style="enable-background: new 0 0 32 32"
        >
          <rect class="logoTopBar" width="32" height="10" />
          <rect y="11" class="logoLeftBar" width="10" height="21" />
          <rect x="11" y="11" class="logoMiddleBar" width="10" height="21" />
          <rect x="22" y="11" class="logoRightBar" width="10" height="21" />
        </svg>
      </div>
    </div>
  </div>
</template>
