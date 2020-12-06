<template>
  <div class="relative">
    <button
      class="relative z-10 block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:ring focus:ring-white"
      @click="isOpen = !isOpen"
    >
      <img
        class="h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=845&q=80"
        alt="Your avatar"
      />
    </button>
    <button @click="isOpen = false" tabindex="-1" class="fixed inset-0 h-full w-full cursor-default focus:outline-none bg-black opacity-25" v-if="isOpen"></button>
    <div
      class="absolute right-0 mt-2 shadow-xl w-48 bg-white rounded-lg overflow-hidden py-2"
      v-if="isOpen"
    >
      <a
        href="#"
        class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
        >Account settings</a
      >
      <a
        href="#"
        class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
        >Support</a
      >
      <a
        href="#"
        class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
        >Sign out</a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    close(e) {
      if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
        this.isOpen = false;
      }
    },
  },
  mounted() {
    document.addEventListener('keydown', this.close);
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.close);
  },
};
</script>
