<template>
  <div class="bg-gray-100 w-100">
    <div class="container mx-auto">
      <ul class="flex p-6 nav-links">
        <li class="block mr-4 font-bold text-purple-900 lg:mr-6">Go to:</li>
        <li class="block mr-6 lg:mr-12"><NuxtLink to="/">Home</NuxtLink></li>
        <li class="block mr-6 lg:mr-12">
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li class="block mr-6 lg:mr-12">
          <NuxtLink to="/skills">Skills</NuxtLink>
        </li>
        <li class="block"><NuxtLink to="/work">Work</NuxtLink></li>
      </ul>
    </div>
  </div>
</template>
