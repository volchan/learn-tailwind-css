<template>
  <div>
    <button class="block h-16 w-16 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:ring focus:ring-white">
      <img
        class="h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=845&q=80"
        alt="Your avatar"
      />
    </button>
    <div class="mt-2 shadow-xl w-48 bg-white rounded-lg overflow-hidden py-2">
      <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Account settings</a>
      <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Support</a>
      <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Sign out</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>
