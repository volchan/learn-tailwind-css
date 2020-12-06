<template>
  <div class="bg-white border rounded-lg overflow-hidden">
    <img :src="property.imageUrl" :alt="property.imageAlt" />
    <div class="p-6">
      <div class="flex items-baseline">
        <span class="inline-block bg-teal-300 text-teal-700 font-semibold text-xs px-2 rounded-full uppercase">New</span>
        <div class="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
          {{ property.beds }} beds &bull; {{ property.baths }} baths
        </div>
      </div>
      <h4 class="mt-1 font-semibold text-lg leading-tight truncate">
        {{ property.title }}
      </h4>
      <div class="mt-1">
        {{ property.formattedPrice }}
        <span class="text-gray-600 text-sm">/ wk</span>
      </div>
      <div class="mt-2 flex items-center">
        <StarIcon class="h-4 w-4" v-for="i in 5" :key="i" :class="i <= property.rating ? 'text-teal-600' : 'text-gray-400'" />
        <span class="ml-2 text-gray-600 text-sm">{{ property.reviewCount }} reviews</span>
      </div>
    </div>
  </div>
</template>

<script>
import { StarIcon } from '@vue-hero-icons/solid';

export default {
  props: ['property'],
  components: {
    StarIcon,
  },
};
</script>
