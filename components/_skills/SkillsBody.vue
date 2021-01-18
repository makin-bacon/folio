<template>
  <div class="container pt-12 pb-12 mx-auto text-white min-h-96 lg:pb-24">
    <div class="mb-16 md:mb-24 w-12/12">
      <!-- <h2 class="text-2xl lg:text-3xl lg:mt-12 w-12/12">
        Web, motion and print
      </h2> -->
      <p
        v-gsap.from="{
          y: 50,
          duration: 3,
          opacity: 0,
          ease: 'power2',
          stagger: 0.5,
        }"
        v-gsap.to="{
          y: 0,
          duration: 3,
          opacity: 1,
          ease: 'power2',
        }"
      >
        For the last 20 years I've worked as a freelancer, contractor and a
        full-time staff member and produced work for large companies, agencies
        down to small businesses. Over this time I've developed a strong working
        knowledge in production over a range of mediums. Below is an outline of
        the tools and technologies I use on a regular basis.
      </p>
    </div>
    <!-- SKILL CATEGORY -->
    <div
      v-gsap.from="{
        x: 50,
        duration: 3,
        opacity: 0,
        ease: 'power2',
        stagger: 0.5,
      }"
      v-gsap.to="{
        x: 0,
        duration: 3,
        opacity: 1,
        ease: 'power2',
      }"
      class="flex flex-col lg:flex-row"
    >
      <div class="w-100 lg:w-6/12">
        <h3
          v-gsap.from="{
            y: 50,
            duration: 3,
            opacity: 0,
            ease: 'power2',
            stagger: 0.5,
          }"
          v-gsap.to="{
            y: 0,
            duration: 3,
            opacity: 1,
            ease: 'power2',
          }"
          class="mb-4 text-2xl"
        >
          Web
        </h3>
        <p
          v-gsap.from="{
            y: 50,
            duration: 3,
            opacity: 0,
            ease: 'power2',
            stagger: 0.5,
          }"
          v-gsap.to="{
            y: 0,
            duration: 3,
            opacity: 1,
            ease: 'power2',
          }"
          class="mb-4"
        >
          A primary focus of my work over the last decade has been in the
          digital space. I build websites, deploy CMS installations, largely
          Wordpress, as well as Single Page Applications (such as this website)
          and application interfaces. I use a combination of technologies and
          have firm grasp on front to backend interactions.
        </p>
        <p
          v-gsap.from="{
            y: 50,
            duration: 3,
            opacity: 0,
            ease: 'power2',
            stagger: 0.5,
          }"
          v-gsap.to="{
            y: 0,
            duration: 3,
            opacity: 1,
            ease: 'power2',
          }"
          class="mb-4"
        >
          Over the last 12 months I have worked primarily within the Southern
          Cross University CMS of choice, Terminalfour. I can create pages to
          brief, correct page errors and am able to train external users on its
          use.
        </p>
        <p
          v-gsap.from="{
            y: 50,
            duration: 3,
            opacity: 0,
            ease: 'power2',
            stagger: 0.5,
          }"
          v-gsap.to="{
            y: 0,
            duration: 3,
            opacity: 1,
            ease: 'power2',
          }"
          class="mb-4"
        >
          A large share of digital work requires a strong grasp on a number of
          online services, I have experience working within the Google Analytics
          console and can generate reports on web performance and ad
          effectiveness. I am also very experienced in producing marketing
          materials for social media and EDM use.
        </p>
      </div>
      <div class="flex flex-col mb-12 lg:mb-48 w-100 lg:w-4/12 lg:ml-auto">
        <!-- WEB LOGOS -->
        <h4
          v-gsap.from="{
            y: 50,
            duration: 3,
            opacity: 0,
            ease: 'power2',
            stagger: 0.5,
          }"
          v-gsap.to="{
            y: 0,
            duration: 3,
            opacity: 1,
            ease: 'power2',
          }"
          class="text-xl font-normal"
        >
          Web
        </h4>
        <div
          v-gsap.from="{
            y: -50,
            duration: 3,
            opacity: 0,
            ease: 'power2',
            stagger: 0.5,
          }"
          v-gsap.to="{
            y: 0,
            duration: 3,
            opacity: 1,
            ease: 'power2',
          }"
          class="flex flex-col w-full mb-4"
        >
          <div
            v-gsap.from="{
              y: 50,
              duration: 3,
              opacity: 0,
              ease: 'power2',
              stagger: 0.5,
            }"
            v-gsap.to="{
              y: 0,
              duration: 3,
              opacity: 1,
              ease: 'power2',
            }"
            class="flex"
          >
            <a
              href="//html.spec.whatwg.org/"
              title="HTML5"
              target="_blank"
              class="vendor-icon-col"
              ><img
                class="w-8 h-8 mr-5"
                src="../../assets/img/vendor/html5.svg"
                alt="HTML5 logo"
            /></a>
            <a
              href="//www.w3.org/TR/CSS/#css"
              title="CSS3"
              target="_blank"
              class="vendor-icon-col"
              ><img
                class="w-8 h-8 mr-5"
                src="../../assets/img/vendor/css3.svg"
                alt="CSS3 logo"
            /></a>
            <a
              href="//www.javascript.com"
              title="Javascript"
              target="_blank"
              class="vendor-icon-col"
              ><img
                class="w-8 h-8 mr-5"
                src="../../assets/img/vendor/javascript.svg"
                alt="Javascript logo"
            /></a>
            <a
              href="//greensock.com/"
              title="Greensock"
              target="_blank"
              class="vendor-icon-col"
              ><img
                class="w-8 h-8 mr-5"
                src="../../assets/img/vendor/gsap-greensock.svg"
                alt="Greensock logo"
            /></a>
            <a
              href="//vuejs.org/"
              title="VueJS"
              target="_blank"
              class="vendor-icon-col"
              ><img
                class="w-8 h-8 mr-5"
                src="../../assets/img/vendor/vuejs.svg"
                alt="VueJS"
            /></a>
            <a
              href="//nuxtjs.org/"
              title="Nuxt"
              target="_blank"
              class="vendor-icon-col"
              ><img
                class="w-8 h-8 mr-5"
                src="../../assets/img/vendor/nuxtJS-square.svg"
                alt="NuxtJS"
            /></a>
            <a
              href="//www.terminalfour.com/"
              title="Terminalfour"
              target="_blank"
              class="vendor-icon-col"
              ><img
                class="w-8 h-8"
                src="../../assets/img/vendor/terminal4.svg"
                alt="Terminalfour logo"
            /></a>
          </div>
          <div class="flex mt-4">
            <a
              href="//wordpress.org"
              title="Wordpress"
              target="_blank"
              class="vendor-icon-col"
              ><img
                class="w-8 h-8 mr-5"
                src="../../assets/img/vendor/wordpress.svg"
                alt="Wordpress logo"
            /></a>
            <a
              href="//postcss.org/"
              title="PostCSS"
              target="_blank"
              class="vendor-icon-col"
              ><img
                class="w-8 h-8 mr-5"
                src="../../assets/img/vendor/postcss.svg"
                alt="postCSS logo"
            /></a>
            <a
              href="//getbootstrap.com/"
              title="Bootstrap"
              target="_blank"
              class="vendor-icon-col"
              ><img
                class="w-8 h-8 mr-5"
                src="../../assets/img/vendor/bootstrap.svg"
                alt="Bootstrap logo"
            /></a>
            <a
              href="//tailwindcss.com/"
              title="TailwindCSS"
              target="_blank"
              class="vendor-icon-col"
              ><img
                class="w-8 h-8 mr-5"
                src="../../assets/img/vendor/tailwind-css-logo.svg"
                alt="TailwindCSS logo"
            /></a>
            <a
              href="//www.npmjs.com/"
              title="Node Package Manager"
              target="_blank"
              class="vendor-icon-col"
              ><img
                class="w-8 h-8 mr-5"
                src="../../assets/img/vendor/npmjs.svg"
                alt="Node Package Manager logo"
            /></a>
            <a
              href="//yarngpkg.com/"
              title="Yarn Package Manager"
              target="_blank"
              class="vendor-icon-col"
              ><img
                class="w-8 h-8 mr-5"
                src="../../assets/img/vendor/yarnJS.svg"
                alt="Yarn Package Manager"
            /></a>
            <a
              href="//www.adobe.com/au/products/xd.html"
              title="Adobe XD"
              target="_blank"
              class="vendor-icon-col"
              ><img
                class="w-8 h-8"
                src="../../assets/img/vendor/adobe-xd.svg"
                alt="Adobe XD logo"
            /></a>
          </div>
        </div>
        <!-- MARKETING LOGOS -->
        <h4
          v-gsap.from="{
            y: 50,
            duration: 3,
            opacity: 0,
            ease: 'power2',
            stagger: 0.5,
          }"
          v-gsap.to="{
            y: 0,
            duration: 3,
            opacity: 1,
            ease: 'power2',
          }"
          class="mt-4 text-xl font-normal"
        >
          Marketing
        </h4>
        <div
          v-gsap.from="{
            y: -50,
            duration: 3,
            opacity: 0,
            ease: 'power2',
            stagger: 0.5,
          }"
          v-gsap.to="{
            y: 0,
            duration: 3,
            opacity: 1,
            ease: 'power2',
          }"
          class="flex flex-col w-full mb-8"
        >
          <div class="flex flex-row">
            <a
              href="//analytics.google.com/"
              title="Google Analytics"
              target="_blank"
              class="vendor-icon-col"
              ><img
                class="w-8 h-8 mr-5"
                src="../../assets/img/vendor/google-analytics.svg"
                alt="Google Analytics logo"
            /></a>
            <a
              href="//ads.google.com/"
              title="Google Ads"
              target="_blank"
              class="vendor-icon-col"
              ><img
                class="w-8 h-8 mr-5"
                src="../../assets/img/vendor/google-ads.svg"
                alt="Google Ads logo"
            /></a>
            <a
              href="//siteimprove.com/"
              title="Siteimprove"
              target="_blank"
              class="vendor-icon-col"
              ><img
                class="w-8 h-8 mr-5"
                src="../../assets/img/vendor/siteimprove.svg"
                alt="Siteimprove logo"
            /></a>
            <a
              href="//linkedin.com/"
              title="LinkedIn"
              target="_blank"
              class="vendor-icon-col"
              ><img
                class="w-8 h-8 mr-5"
                src="../../assets/img/vendor/linkedin.svg"
                alt="LinkedIn logo"
            /></a>
            <a
              href="//instagram.com/"
              title="Instagram"
              target="_blank"
              class="vendor-icon-col"
              ><img
                class="w-8 h-8 mr-5"
                src="../../assets/img/vendor/instagram.svg"
                alt="Instagram logo"
            /></a>
            <a
              href="//facebook.com/"
              title="Facebook"
              target="_blank"
              class="vendor-icon-col"
              ><img
                class="w-8 h-8 mr-5"
                src="../../assets/img/vendor/facebook.svg"
                alt="Facebook logo"
            /></a>
            <a
              href="//jotform.com/"
              title="Jotform"
              target="_blank"
              class="vendor-icon-col"
              ><img
                class="w-8 h-8"
                src="../../assets/img/vendor/jotform.svg"
                alt="Jotform logo"
            /></a>
          </div>
        </div>
      </div>
    </div>
    <!-- END SKILL CATEGORY -->
    <!-- SKILL CATEGORY -->
    <div class="flex flex-col mb-8 lg:flex-row">
      <div class="w-100 lg:w-6/12">
        <h3
          v-gsap.from="{
            y: 50,
            duration: 3,
            opacity: 0,
            ease: 'power2',
            stagger: 0.5,
          }"
          v-gsap.to="{
            y: 0,
            duration: 3,
            opacity: 1,
            ease: 'power2',
          }"
          class="mt-8 mb-4 text-2xl"
        >
          Motion
        </h3>
        <p
          v-gsap.from="{
            y: 50,
            duration: 3,
            opacity: 0,
            ease: 'power2',
            stagger: 0.5,
          }"
          v-gsap.to="{
            y: 0,
            duration: 3,
            opacity: 1,
            ease: 'power2',
          }"
          class="mb-4"
        >
          Over my career it has been essential to be able to provide high
          quality motion assets. Whether it is creating online video ads for
          social media or rolling out campaign TVCs, I draw on a range of tools
          to produce outputs to spec as required.
        </p>
        <p
          v-gsap.from="{
            y: 50,
            duration: 3,
            opacity: 0,
            ease: 'power2',
            stagger: 0.5,
          }"
          v-gsap.to="{
            y: 0,
            duration: 3,
            opacity: 1,
            ease: 'power2',
          }"
        >
          I have a particular interest in creating special effects in Adobe
          After Effects and creating 3D images (such as the headings on this
          website) using Blender.
        </p>
      </div>
      <div
        v-gsap.from="{
          x: 50,
          duration: 3,
          opacity: 0,
          ease: 'power2',
          stagger: 0.5,
        }"
        v-gsap.to="{
          x: 0,
          duration: 3,
          opacity: 1,
          ease: 'power2',
        }"
        class="flex flex-col mb-12 w-100 lg:w-4/12 lg:ml-auto lg:mb-48"
      >
        <h4
          v-gsap.from="{
            y: 50,
            duration: 3,
            opacity: 0,
            ease: 'power2',
            stagger: 0.5,
          }"
          v-gsap.to="{
            y: 0,
            duration: 3,
            opacity: 1,
            ease: 'power2',
          }"
          class="mt-8 text-xl font-normal"
        >
          Motion technologies
        </h4>
        <div
          v-gsap.from="{
            y: -50,
            duration: 3,
            opacity: 0,
            ease: 'power2',
            stagger: 0.5,
          }"
          v-gsap.to="{
            y: 0,
            duration: 3,
            opacity: 1,
            ease: 'power2',
          }"
          class="flex flex-col w-12/12"
        >
          <div class="flex">
            <a
              href="//www.adobe.com/au/products/aftereffects.html"
              title="Adobe After Effects"
              target="_blank"
              class="vendor-icon-col"
              ><img
                class="w-8 h-8 mr-5"
                src="../../assets/img/vendor/adobe-after-effects.svg"
                alt="Adobe After Effects logo"
            /></a>
            <a
              href="//www.adobe.com/au/products/premiere.html"
              title="Adobe Premiere"
              target="_blank"
              class="vendor-icon-col"
              ><img
                class="w-8 h-8 mr-5"
                src="../../assets/img/vendor/adobe-premiere.svg"
                alt="Adobe Premiere logo"
            /></a>
            <a
              href="//www.adobe.com/au/products/aftereffects.html"
              title="Adobe Media Encoder"
              target="_blank"
              class="vendor-icon-col"
              ><img
                class="w-8 h-8 mr-5"
                src="../../assets/img/vendor/adobe-media-encoder.svg"
                alt="Adobe Media Encoder logo"
            /></a>
            <a
              href="//bender/org"
              title="Blender"
              target="_blank"
              class="vendor-icon-col"
              ><img
                class="w-8 h-8"
                src="../../assets/img/vendor/blender.svg"
                alt="Blender logo"
            /></a>
          </div>
        </div>
      </div>
    </div>
    <!-- END SKILL CATEGORY -->
    <!-- SKILL CATEGORY -->
    <div class="flex flex-col lg:flex-row">
      <div class="w-100 lg:w-6/12">
        <h3
          v-gsap.from="{
            y: -50,
            duration: 3,
            opacity: 0,
            ease: 'power2',
            stagger: 0.5,
          }"
          v-gsap.to="{
            y: 0,
            duration: 3,
            opacity: 1,
            ease: 'power2',
          }"
          class="mb-4 text-2xl"
        >
          Print and Media
        </h3>
        <p
          v-gsap.from="{
            x: -100,
            duration: 3,
            opacity: 0,
            ease: 'power2',
            stagger: 0.5,
          }"
          v-gsap.to="{
            x: 0,
            duration: 3,
            opacity: 1,
            ease: 'power2',
          }"
          class="mb-4"
        >
          The earlier part of my career was largely focused on finished art and
          production-based roles which gave me a very strong grounding in print
          design, application and finished art. A large part of my earlier roles
          involved creating front-of-pack imagery using a combination of
          Photoshop, Illustrator and Indesign and these images appeared on many
          household brands.
        </p>
        <p>
          I also have extensive display print experience and have designed and
          produced countless press and outdoor advertisements.
        </p>
      </div>
      <div
        v-gsap.from="{
          y: -50,
          duration: 3,
          opacity: 0,
          ease: 'power2',
          stagger: 0.5,
        }"
        v-gsap.to="{
          y: 0,
          duration: 3,
          opacity: 1,
          ease: 'power2',
        }"
        class="flex flex-col mb-12 lg:mb-48 w-100 lg:w-4/12 lg:ml-auto"
      >
        <h4
          v-gsap.from="{
            y: 50,
            duration: 3,
            opacity: 0,
            ease: 'power2',
            stagger: 0.5,
          }"
          v-gsap.to="{
            y: 0,
            duration: 3,
            opacity: 1,
            ease: 'power2',
          }"
          class="text-xl font-normal"
        >
          Print and media technologies
        </h4>
        <div class="flex flex-col w-12/12">
          <div class="flex">
            <a
              href="//www.adobe.com/au/products/illustrator.html"
              title="Adobe Illustrator"
              target="_blank"
              class="vendor-icon-col"
              ><img
                class="w-8 h-8 mr-5"
                src="../../assets/img/vendor/adobe-illustrator.svg"
                alt="Adobe Illustrator logo"
            /></a>
            <a
              href="//www.adobe.com/au/products/photoshop.html"
              title="Adobe Photoshop"
              target="_blank"
              class="vendor-icon-col"
              ><img
                class="w-8 h-8 mr-5"
                src="../../assets/img/vendor/adobe-photoshop.svg"
                alt="Adobe Illustrator logo"
            /></a>
            <a
              href="//www.adobe.com/au/products/indesign.html"
              title="Adobe InDesign"
              target="_blank"
              class="vendor-icon-col"
              ><img
                class="w-8 h-8 mr-5"
                src="../../assets/img/vendor/adobe-indesign.svg"
                alt="Adobe InDesign logo"
            /></a>
            <a
              href="//www.adobe.com/au/products/acrobat.html"
              title="Adobe Acrobat"
              target="_blank"
              class="vendor-icon-col"
              ><img
                class="w-8 h-8 mr-5"
                src="../../assets/img/vendor/adobe-acrobat.svg"
                alt="Adobe Acrobat logo"
            /></a>
          </div>
        </div>
      </div>
    </div>
    <!-- END SKILL CATEGORY -->
  </div>
</template>
