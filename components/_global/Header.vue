<template>
  <header class="bg-gray-100 main-tool-bar">
    <div class="container flex items-center justify-between mt-0 nav-content">
      <a
        v-gsap.from="{
          duration: 2,
          opacity: 0,
          ease: 'power2',
        }"
        v-gsap.to="{
          duration: 2,
          opacity: 1,
          ease: 'power2',
        }"
        href="//www.digitaltim.com.au"
        class="w-8 h-8 ml-4"
      >
        <svg
          id="Layer_1"
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
      </a>
      <ul
        v-gsap.from="{
          duration: 2,
          opacity: 0,
          ease: 'power2',
        }"
        v-gsap.to="{
          duration: 2,
          opacity: 1,
          ease: 'power2',
        }"
        class="nav-links"
      >
        <li class="block mr-6 lg:mr-12"><NuxtLink to="/">Home</NuxtLink></li>
        <li class="block mr-6 lg:mr-12">
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li class="block mr-6 lg:mr-12">
          <NuxtLink to="/skills">Skills</NuxtLink>
        </li>
        <li class="block mr-6"><NuxtLink to="/work">Work</NuxtLink></li>
      </ul>
    </div>
  </header>
</template>
