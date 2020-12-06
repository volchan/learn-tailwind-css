<template>
  <div id="app" class="antialiased text-gray-900 bg-gradient-to-r from-indigo-50 to-indigo-100 flex items-center justify-center h-full">
    <AccountDropdown />
  </div>
</template>

<script>
import AccountDropdown from '@/components/AccountDropdown.vue';

export default {
  components: {
    AccountDropdown,
  },
};
</script>

<style lang="scss"></style>
