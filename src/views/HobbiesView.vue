<script>
import { siteContent } from '@/data/siteContent'

export default {
  data() {
    return {
      hobbies: siteContent.hobbies,
      writing: siteContent.portfolio.items.find(item => item.id === 4)
    }
  }
}
</script>

<template>
  <div class="px-5 py-5 md:px-12 md:py-10 text-left text-[#574438] mx-3">
    <article data-page="hobbies">
      <header>
        <div class="text-2xl font-bold text-[#4B382B] mb-10 fadein-bot title-section flex items-center justify-center flex-col">
          <h4>Hobbies</h4>
          <h4 class="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#2F5D7E] via-[#5E88A8] to-[#1F3F56]">
            {{ hobbies.headline }}
          </h4>
        </div>
      </header>
      <section class="grid grid-cols-1 gap-4 pb-32 md:grid-cols-2">
        <template v-for="topic in hobbies.topics" :key="topic">
          <a v-if="topic === 'Writing'" :href="writing.demo" target="_blank" rel="noreferrer"
            aria-label="Open Whispers of The Heart PDF" title="Open Whispers of The Heart PDF"
            class="flex min-h-40 items-center justify-center rounded-xl border border-[#C79A7B] bg-[#FFFFFF] px-8 py-8 text-[#4B382B] hover:bg-[#FBF8F4]">
            <span class="max-w-40 border-y border-[#C79A7B] py-3 text-center font-serif text-xl leading-tight tracking-wide">
              {{ writing.name }}
            </span>
          </a>
          <a v-if="topic === 'Music'" :href="hobbies.spotifyUrl" target="_blank" rel="noreferrer"
            aria-label="Open Spotify playlist" title="Open Spotify playlist"
            class="flex items-center justify-center rounded-xl border border-[#C79A7B] bg-[#FFFFFF] px-5 py-8 hover:bg-[#FBF8F4]">
            <img src="https://cdn.simpleicons.org/spotify/1ED760" alt="Spotify" class="h-12 w-12">
          </a>
          <div v-else-if="topic !== 'Writing'"
            class="rounded-xl border border-[#C79A7B] bg-[#FFFFFF] px-5 py-8 text-center text-lg hover:bg-[#FBF8F4]">
            {{ topic }}
          </div>
        </template>
      </section>
    </article>
  </div>
</template>
