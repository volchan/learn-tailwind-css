<template>
  <div id="app">
    <div class="bg-gray-200 min-h-screen p-8 flex items-center justify-center">
      <PropertyCard :property="property" />
    </div>
  </div>
</template>

<script>
import PropertyCard from '@/components/PropertyCard.vue';

export default {
  components: {
    PropertyCard,
  },
  data() {
    return {
      property: {
        imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1280',
        imageAlt: 'Rear view of a modern home with pool',
        beds: 3,
        baths: 2,
        title: 'Modern home in city center',
        priceInCents: 190000,
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,
      },
    };
  },
};
</script>

<style lang="scss"></style>
