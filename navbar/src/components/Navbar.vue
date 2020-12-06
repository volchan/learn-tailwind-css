<template>
  <header
    class="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3"
  >
    <div class="flex justify-between items-center px-4 py-3 sm:px-0 sm:py-0">
      <div class="flex items-center text-2xl text-bold">
        <CubeTransparentIcon class="h-12 w-12 text-indigo-500" />
        <span class="ml-2 text-white"
          >Work<span class="text-indigo-500">cation</span></span
        >
      </div>
      <div class="sm:hidden">
        <button
          type="button"
          class="block text-gray-300 focus:text-white focus:outline-none hover:text-white"
          @click="isOpen = !isOpen"
        >
          <MenuIcon class="h-6 w-6 fill-current" v-if="!isOpen" />
          <XIcon class="h-6 w-6 fill-current" v-if="isOpen" />
        </button>
      </div>
    </div>
    <div class="sm:block" :class="isOpen ? 'block' : 'hidden'">
      <div class="px-2 pt-2 pb-4 sm:flex sm:px-0 sm:pt-0 sm:pb-0">
        <a
          href="#"
          class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
          >List your property</a
        >
        <a
          href="#"
          class="block mt-1 sm:mt-0 sm:ml-2 px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
          >Trips</a
        >
        <a
          href="#"
          class="block mt-1 sm:mt-0 sm:ml-2 px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
          >Messages</a
        >
        <AccountDropdown class="hidden sm:block sm:sm-6" />
      </div>
      <div class="px-4 py-5 border-t border-gray-600 sm:hidden">
        <div class="flex items-center">
          <img
            class="h-8 w-8 border-2 border-gray-600 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=845&q=80"
            alt="Your avatar"
          />
          <span class="ml-3 text-white font-semibold">John Doe</span>
        </div>
        <div class="mt-4">
          <a href="#" class="block text-gray-400 hover:text-white">Account settings</a>
          <a href="#" class="mt-2 block text-gray-400 hover:text-white">Support</a>
          <a href="#" class="mt-2 block text-gray-400 hover:text-white">Sign out</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { CubeTransparentIcon, MenuIcon, XIcon } from '@vue-hero-icons/solid';

import AccountDropdown from './AccountDropdown.vue';

export default {
  components: {
    AccountDropdown,
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
