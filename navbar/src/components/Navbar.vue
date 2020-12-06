<template>
  <header class="bg-gray-900 flex justify-between items-center px-4 py-3">
    <div class="flex items-center text-2xl text-bold">
      <CubeTransparentIcon class="h-12 w-12 text-indigo-500" /> <span class="ml-2 text-white">Work<span class="text-indigo-500">cation</span></span>
    </div>
    <div>
      <button type="button" class="block text-gray-500 focus:text-white focus:outline-none hover:text-white">
        <MenuIcon class="h-6 w-6 fill-current" />
      </button>
    </div>
  </header>
</template>

<script>
import { CubeTransparentIcon, MenuIcon } from '@vue-hero-icons/solid';

export default {
  components: {
    CubeTransparentIcon,
    MenuIcon,
  },
  data() {
    return {};
  },
};
</script>
