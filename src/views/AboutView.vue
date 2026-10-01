<script>
import { siteContent } from '@/data/siteContent'

export default {
  data() {
    return {
      about: siteContent.about
    };
  }
}
</script>
<template>
  <div
    class="bg-[#FFFFFF] px-5 py-5 md:px-12 md:py-10 text-left border border-[#C79A7B] rounded-3xl text-[#574438] mx-3 mb-5">
    <article data-page="about">

      <header>
        <div class="text-2xl font-bold text-[#4B382B] mb-5 fadein-bot title-section flex items-center">
          {{ about.title }} &nbsp;
          <div class="h-[1px] w-32 bg-[#C79A7B] md:w-96 aos-init aos-animate" data-aos="zoom-in-left"
            data-aos-duration="600"></div>
        </div>
      </header>

      <section
        class="text-sm md:text-lg text-justify flex flex-col gap-4 md:flex-row md:gap-8 md:justify-left md:items-center">
        <div class="flex justify-center">
          <img class="w-9/12 rounded-full mb-3 fadein-up" :src="about.image" alt="Foto">
        </div>
        <div class="md:w-7/12">
          <p v-for="(paragraph, index) in about.paragraphs" :key="index" class="mb-3 fadein-left" :class="index === 0 ? 'md:mb-7' : ''">
            &nbsp; &nbsp; &nbsp; {{ paragraph }}
          </p>
        </div>

      </section>

    </article>
  </div>

</template>

<style>
.fadein-left {
  opacity: 0;
  animation: fadeInLeft 0.5s ease-out forwards;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadeins-1 {
  animation-delay: 500ms;
}

.fadeins-2 {
  animation-delay: 800ms;
}

.img-tech,
.tech {
  transition: transform 0.3s ease;
}

.item-tech:hover .img-tech {
  transform: scale(1.3);
}

.item-tech:hover .tech {
  transform: translateY(-12px);
}

.item-tech:hover .status-tech {
  opacity: 1;
}
</style>
