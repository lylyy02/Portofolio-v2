<template>
  <div class="max-w-7xl mx-auto flex flex-col relative">
    <nav class="max-w-7xl px-5 md:fixed top-0 z-[98] w-screen backdrop-blur-md bg-[#FBF8F4] bg-opacity-95">
      <div class="container mx-auto flex flex-wrap items-center justify-between">
        <button @click="redirectToHome" class="flex">
          <span class="self-center text-lg text-[#4B382B] font-semibold whitespace-nowrap fadein-bot hover:text-[#4B382B]">{{ siteContent.brand }}</span>
        </button>
        <div class="flex md:order-2 fadein-bot">
          <a :href="siteContent.githubUrl" target="_blank" rel="noreferrer">
            <img class="w-9 rounded-full" :src="siteContent.githubImage" alt="GitHub">
          </a>
        </div>
        <div class="hidden md:flex justify-between items-center w-full md:w-auto md:order-1" id="mobile-menu-3">
          <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <li v-for="(item, index) in siteContent.menu" :key="item.to">
              <router-link :to="item.to"
                class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0"
                :class="index === 0 ? 'fadein-bot' : index === 1 ? 'fadein-1' : index === 2 ? 'fadein-2' : 'fadein-3'"
                aria-current="page">{{ item.label }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="md:mt-[100px]">
      <router-view />
    </div>
  </div>
  <footer class="block md:hidden fixed bottom-0 left-0 right-0 rounded-t-3xl border border-[#C79A7B] bg-[#FFFFFF] bg-opacity-95 backdrop-blur-md backdrop-opacity-90">
    <nav class="flex justify-around py-4 text-xs">
      <router-link v-for="item in siteContent.menu" :key="item.to" :to="item.to" class="text-[#574438] hover:text-[#4B382B]">{{ item.label }}</router-link>
    </nav>
  </footer>
</template>

<script>
import { siteContent } from '@/data/siteContent'

export default {
  data() {
    return {
      siteContent
    }
  },
  methods: {
    redirectToHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 5px; /* for vertical scrollbar */
  height: 5px; /* for horizontal scrollbar */
}

::-webkit-scrollbar-track {
  background: hsl(240, 1%, 17%);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: #C79A7B;
  border-radius: 5px;
}

::-webkit-scrollbar-button { width: 20px; }

body {
  font-family: 'Poppins', sans-serif;
  background: #FBF8F4;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #574438;
  height: 100vh;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  transition: color 0.3s;
}

nav a.router-link-exact-active {
  display: inline-flex;
  flex-direction: column;
  color: white;
  transition: color 0.3s;
}

nav a.router-link-exact-active::after {
  display: inline-block;
  content: "";
  margin-top: 0.08em;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: #C79A7B;
}

nav a.router-link-exact-active:hover {
  color: white;
}


@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

</style>
