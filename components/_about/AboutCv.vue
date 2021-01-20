<template>
  <div class="container flex flex-col">
    <!-- <h2
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
      class="text-2xl lg:text-3xl lg:mt-12 lg:w-9/12"
    >
      About me
    </h2> -->
    <div class="w-12/12 lg:w-8/12 lg:mr-auto">
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
        I've worked in agencies and as a freelancer on the East Coast of
        Australia for nearly 20 years. I live in Lennox Head, New South Wales
        with my wife, two kids and dog, Gravy. When I'm not doing digital work I
        like camping, gardening and playing guitar (badly). See below for a
        brief work history.
      </p>
    </div>
    <!-- SKILL CATEGORY -->
    <hr class="my-16 border-gray-200" />

    <div class="flex flex-col mb-24 md:flex-row">
      <!-- WORK COL -->
      <div
        v-gsap.from="{
          x: -100,
          duration: 0.5,
          opacity: 0,
          ease: 'power2',
          stagger: 0.5,
        }"
        v-gsap.to="{
          x: 0,
          duration: 0.5,
          opacity: 1,
          ease: 'power2',
        }"
        class="w-100 xl:w-6/12 md:pr-16"
      >
        <!-- JOB-BLOCK -->
        <div>
          <h3
            v-gsap.from="{
              y: 50,
              duration: 1,
              opacity: 0,
              ease: 'power2',
              stagger: 0.5,
            }"
            v-gsap.to="{
              y: 0,
              duration: 1,
              opacity: 1,
              ease: 'power2',
            }"
            class="mb-0 text-xl"
          >
            Graphic Artist
          </h3>
          <h4
            v-gsap.from="{
              x: 50,
              duration: 2.5,
              opacity: 0,
              ease: 'power2',
              stagger: 0.5,
            }"
            v-gsap.to="{
              x: 0,
              duration: 2.5,
              opacity: 1,
              ease: 'power2',
            }"
            class="pt-2 mb-2 text-xl"
          >
            Southern Cross University
          </h4>
          <p
            v-gsap.from="{
              duration: 2.5,
              opacity: 0,
              ease: 'power2',
              stagger: 0.5,
            }"
            v-gsap.to="{
              duration: 2.5,
              opacity: 1,
              ease: 'power2',
            }"
          >
            Feb 2019 – Current
          </p>
          <p
            v-gsap.from="{
              y: 10,
              duration: 3.5,
              opacity: 0,
              ease: 'power2',
              stagger: 0.5,
            }"
            v-gsap.to="{
              y: 0,
              duration: 3.5,
              opacity: 1,
              ease: 'power2',
            }"
            class="mb-12"
          >
            Design and artwork of digital and print assets as required for a
            range of mediums using a range of technologies. My initial contract
            role was to service print and digital graphic requests within The
            Office of Engagement and the wider University, however the last 12
            months have been spent as Design Lead on the Web Upgrade Project.
            Outside of these duties I’m involved in regular content creation and
            maintenance in the T4 environment.
          </p>
        </div>
        <!-- END JOB BLOCK -->
        <!-- JOB-BLOCK -->
        <div>
          <h3
            v-gsap.from="{
              y: 50,
              duration: 1,
              opacity: 0,
              ease: 'power2',
              stagger: 0.5,
            }"
            v-gsap.to="{
              y: 0,
              duration: 1,
              opacity: 1,
              ease: 'power2',
            }"
            class="mb-0 text-xl"
          >
            Freelance Designer
          </h3>
          <h4
            v-gsap.from="{
              x: 50,
              duration: 2.5,
              opacity: 0,
              ease: 'power2',
              stagger: 0.5,
            }"
            v-gsap.to="{
              x: 0,
              duration: 2.5,
              opacity: 1,
              ease: 'power2',
            }"
            class="mb-2 text-lg"
          >
            Various
          </h4>
          <p
            v-gsap.from="{
              duration: 2.5,
              opacity: 0,
              ease: 'power2',
              stagger: 0.5,
            }"
            v-gsap.to="{
              duration: 2.5,
              opacity: 1,
              ease: 'power2',
            }"
          >
            March 2002 – Current
          </p>
          <p
            v-gsap.from="{
              y: 10,
              duration: 3.5,
              opacity: 0,
              ease: 'power2',
              stagger: 0.5,
            }"
            v-gsap.to="{
              y: 0,
              duration: 3.5,
              opacity: 1,
              ease: 'power2',
            }"
            class="mb-12"
          >
            Design and artwork for print and digital mediums for a range of
            clients on the East Coast of Australia. Past clients include Amcor,
            McCann Erickson, De Pasquale, Queensland Newspapers, Aquent, 3×3
            Digital, Mint Communications, Creative Plantation, KBR and New Word
            Order to name a few.
          </p>
        </div>
        <!-- END JOB BLOCK -->

        <!-- JOB-BLOCK -->
        <div>
          <h3
            v-gsap.from="{
              y: 50,
              duration: 1,
              opacity: 0,
              ease: 'power2',
              stagger: 0.5,
            }"
            v-gsap.to="{
              y: 0,
              duration: 1,
              opacity: 1,
              ease: 'power2',
            }"
            class="mb-0 text-xl"
          >
            Senior Graphic Designer
          </h3>
          <h4
            v-gsap.from="{
              x: 50,
              duration: 2.5,
              opacity: 0,
              ease: 'power2',
              stagger: 0.5,
            }"
            v-gsap.to="{
              x: 0,
              duration: 2.5,
              opacity: 1,
              ease: 'power2',
            }"
            class="mb-2 text-lg"
          >
            New Word Order Brisbane
          </h4>
          <p>July 2011 – July 2012</p>
          <p
            v-gsap.from="{
              y: 10,
              duration: 3.5,
              opacity: 0,
              ease: 'power2',
              stagger: 0.5,
            }"
            v-gsap.to="{
              y: 0,
              duration: 3.5,
              opacity: 1,
              ease: 'power2',
            }"
            class="mb-12"
          >
            Design and layout of various items for print and digital mediums.
            Primary duties included branding, layout, multimedia design and
            direction, web design, banner ad creation, internal marketing tasks
            and pre-press. Clients included Queensland Government, Queensland
            Health, Transport and Main Roads, Intrust Super and Hastings
            Deering.
          </p>
        </div>
        <!-- END JOB BLOCK -->

        <!-- JOB-BLOCK -->
        <div>
          <h3
            v-gsap.from="{
              y: 50,
              duration: 1,
              opacity: 0,
              ease: 'power2',
              stagger: 0.5,
            }"
            v-gsap.to="{
              y: 0,
              duration: 1,
              opacity: 1,
              ease: 'power2',
            }"
            class="mb-0 text-xl"
          >
            Graphic Designer
          </h3>
          <h4
            v-gsap.from="{
              x: 50,
              duration: 2.5,
              opacity: 0,
              ease: 'power2',
              stagger: 0.5,
            }"
            v-gsap.to="{
              x: 0,
              duration: 2.5,
              opacity: 1,
              ease: 'power2',
            }"
            class="mb-2 text-lg"
          >
            Mint Communications
          </h4>
          <p>July 2007 – July 2008</p>
          <p
            v-gsap.from="{
              y: 10,
              duration: 3.5,
              opacity: 0,
              ease: 'power2',
              stagger: 0.5,
            }"
            v-gsap.to="{
              y: 0,
              duration: 3.5,
              opacity: 1,
              ease: 'power2',
            }"
            class="mb-12"
          >
            Layout and finished art of various items for print and digital
            mediums. Primary duties included design, finished art, illustration,
            banner ad creation and pitch preparation. Clients included
            Queensland Rugby Union, Australand and GPT Group.
          </p>
        </div>
        <!-- END JOB BLOCK -->

        <!-- JOB-BLOCK -->
        <div>
          <h3
            v-gsap.from="{
              y: 50,
              duration: 1,
              opacity: 0,
              ease: 'power2',
              stagger: 0.5,
            }"
            v-gsap.to="{
              y: 0,
              duration: 1,
              opacity: 1,
              ease: 'power2',
            }"
            class="mb-0 text-xl"
          >
            Graphic Designer
          </h3>
          <h4
            v-gsap.from="{
              x: 50,
              duration: 2.5,
              opacity: 0,
              ease: 'power2',
              stagger: 0.5,
            }"
            v-gsap.to="{
              x: 0,
              duration: 2.5,
              opacity: 1,
              ease: 'power2',
            }"
            class="mb-2 text-lg"
          >
            TFD Group
          </h4>
          <p>August 2005 – Jun 2006</p>
          <p
            v-gsap.from="{
              y: 10,
              duration: 3.5,
              opacity: 0,
              ease: 'power2',
              stagger: 0.5,
            }"
            v-gsap.to="{
              y: 0,
              duration: 3.5,
              opacity: 1,
              ease: 'power2',
            }"
            class="mb-12"
          >
            Design of software graphics and interface elements for a range of
            clients. Primary duties included branding of software to particular
            client requirements. End users include BAE Systems, Lotus plc and
            Boeing.
          </p>
        </div>
        <!-- END JOB BLOCK -->

        <!-- JOB-BLOCK -->
        <div>
          <h3
            v-gsap.from="{
              y: 50,
              duration: 1,
              opacity: 0,
              ease: 'power2',
              stagger: 0.5,
            }"
            v-gsap.to="{
              y: 0,
              duration: 1,
              opacity: 1,
              ease: 'power2',
            }"
            class="mb-0 text-xl"
          >
            Finished Artist
          </h3>
          <h4
            v-gsap.from="{
              x: 50,
              duration: 2.5,
              opacity: 0,
              ease: 'power2',
              stagger: 0.5,
            }"
            v-gsap.to="{
              x: 0,
              duration: 2.5,
              opacity: 1,
              ease: 'power2',
            }"
            class="mb-2 text-lg"
          >
            RWK Design (Now Loop Branding)
          </h4>
          <p>August 2005 – Jun 2006</p>
          <p
            v-gsap.from="{
              y: 10,
              duration: 3.5,
              opacity: 0,
              ease: 'power2',
              stagger: 0.5,
            }"
            v-gsap.to="{
              y: 0,
              duration: 3.5,
              opacity: 1,
              ease: 'power2',
            }"
            class="mb-12"
          >
            Finished art and typesetting for a range of packaging clients.
            Primary duties included retouching, illustration, image compositing,
            DCS file creation and colour separation. Clients include
            Colgate-Palmolive, Kellogg’s, Arnott’s, Wyeth and AAB Holdings.
          </p>
        </div>
        <!-- END JOB BLOCK -->
        <!-- JOB-BLOCK -->
        <div>
          <h3
            v-gsap.from="{
              y: 50,
              duration: 1,
              opacity: 0,
              ease: 'power2',
              stagger: 0.5,
            }"
            v-gsap.to="{
              y: 0,
              duration: 1,
              opacity: 1,
              ease: 'power2',
            }"
            class="mb-0 text-xl"
          >
            Junior Graphic Designer
          </h3>
          <h4
            v-gsap.from="{
              x: 50,
              duration: 2.5,
              opacity: 0,
              ease: 'power2',
              stagger: 0.5,
            }"
            v-gsap.to="{
              x: 0,
              duration: 2.5,
              opacity: 1,
              ease: 'power2',
            }"
            class="mb-2 text-lg"
          >
            TFD Group
          </h4>
          <p>Mar 2000 – Oct 2001</p>
          <p
            v-gsap.from="{
              y: 10,
              duration: 3.5,
              opacity: 0,
              ease: 'power2',
              stagger: 0.5,
            }"
            v-gsap.to="{
              y: 0,
              duration: 3.5,
              opacity: 1,
              ease: 'power2',
            }"
          >
            Creation of interface and marketing materials under the direction of
            the global brand manager. Tasks included button creation, toolbar
            design and build and creation of defence related web and press
            content.
          </p>
        </div>
        <!-- END JOB BLOCK -->
      </div>

      <!-- CONTACT COL -->
      <div
        v-gsap.from="{
          x: 100,
          duration: 0.5,
          opacity: 0,
          ease: 'power2',
          stagger: 0.5,
        }"
        v-gsap.to="{
          x: 0,
          duration: 0.5,
          opacity: 1,
          ease: 'power2',
        }"
        class="xl:w-6/12"
      >
        <!-- CONTACT BLOCK -->

        <div class="mb-12">
          <h2
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
            class="mt-5 mb-4 text-xl lg:mt-0"
          >
            Contact
          </h2>

          <p class="mb-1 text-sm">
            <span class="font-bold">Name</span> Tim Millhouse
          </p>
          <p class="mb-1 text-sm">
            <span class="font-bold">Mobile</span>
            <a href="tel:61429174298">0429 174 298</a>
          </p>
          <p class="mb-0 text-sm">
            <span class="font-bold">Email</span>
            <a href="mailto:tim.millhouse@gmail.com">tim.millhouse@gmail.com</a>
          </p>
        </div>
        <!-- ./CONTACT BLOCK -->
        <hr class="my-12 border-gray-200" />
        <!-- QUALIFICATIONS BLOCK -->
        <div>
          <h2
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
            class="mt-5 mb-3 text-xl"
          >
            Qualifications
          </h2>
          <p class="mt-5 mb-2 text-sm leading-snug">Dip Graphic Design</p>
          <p class="mb-1 text-sm leading-snug">
            Cert IV Printing &amp; Graphic Arts (Graphic Pre-Press) [ICP40399]
          </p>
          <p class="mb-2 text-sm">CGC, Sydney NSW<br />(2003-04)</p>
          <p class="mb-0 text-sm">Cert I Communications</p>
          <p class="mb-2 text-sm">Canberra Institute of TAFE (2001)</p>
          <p class="mb-0 text-sm">Higher Schools Certificate</p>
          <p class="text-sm">Canberra Grammar School (1997)</p>
        </div>
        <!-- ./QUALIFICATIONS BLOCK -->
        <hr class="my-12 border-gray-200" />
        <!-- SOFTWARE BLOCK -->
        <div>
          <h2
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
            class="mb-3 text-xl"
          >
            Software
          </h2>
          <h4 class="mb-2 text-base">Adobe Creative Suite</h4>
          <div class="text-sm">
            <p class="mb-0 text-sm">InDesign</p>
            <p class="mb-0 text-sm">Illustrator</p>
            <p class="mb-0 text-sm">Photoshop</p>
            <p class="mb-0 text-sm">Acrobat</p>
            <p class="mb-0 text-sm">XD</p>
            <p class="mb-0 text-sm">After Effects</p>
            <p class="mb-4 text-sm">Premiere</p>
          </div>
          <h4 class="mb-3 text-base">Microsoft Office Suite</h4>
          <h4 class="mb-2 text-base">Web and Digital</h4>
          <p class="mb-0 text-sm">HTML5</p>
          <p class="mb-0 text-sm">CSS3</p>
          <p class="mb-0 text-sm">SASS</p>
          <p class="mb-0 text-sm">PostCSS</p>
          <p class="mb-0 text-sm">Javascript</p>
          <p class="mb-0 text-sm">Greensock</p>
          <p class="mb-0 text-sm">Terminalfour</p>
          <p class="mb-0 text-sm">Wordpress</p>
          <p class="mb-0 text-sm">Vue</p>
        </div>
        <!-- ./SOFTWARE BLOCK -->
        <a
          href="./TMillhouse_CV_2021.pdf"
          class="inline-block px-6 py-4 mt-12 text-white bg-purple-700"
          download=""
          >Download a PDF</a
        >
      </div>
    </div>
  </div>
</template>
