<template>
  <header class="bg-gray-900">
    <div class="flex justify-between items-center px-4 py-3">
      <div class="flex items-center text-2xl text-bold">
        <CubeTransparentIcon class="h-12 w-12 text-indigo-500" />
        <span class="ml-2 text-white"
          >Work<span class="text-indigo-500">cation</span></span
        >
      </div>
      <div>
        <button
          type="button"
          class="block text-gray-500 focus:text-white focus:outline-none hover:text-white"
          @click="isOpen = !isOpen"
        >
          <MenuIcon class="h-6 w-6 fill-current" v-if="!isOpen" />
          <XIcon class="h-6 w-6 fill-current" v-if="isOpen" />
        </button>
      </div>
    </div>
    <div class="px-2 pt-2 pb-4" :class="isOpen ? 'block' : 'hidden'">
      <a
        href="#"
        class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
        >List your property</a
      >
      <a
        href="#"
        class="block mt-1 px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
        >Trips</a
      >
      <a
        href="#"
        class="block mt-1 px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
        >Messages</a
      >
    </div>
  </header>
</template>

<script>
import { CubeTransparentIcon, MenuIcon, XIcon } from '@vue-hero-icons/solid';

export default {
  components: {
    CubeTransparentIcon,
    MenuIcon,
    XIcon,
  },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
