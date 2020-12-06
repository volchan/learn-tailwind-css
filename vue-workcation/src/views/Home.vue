<template>
  <div>
    <div class="bg-white flex">
      <div
        class="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12"
      >
        <div class="xl:max-w-lg xl:ml-auto">
          <h1 class="text-indigo-500 h-10 text-5xl font-bold">Workcation</h1>
          <img
            class="mt-6 rounded-lg shadow-lg sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
            src="../assets/images/beach-work.jpg"
            alt="beach work"
          />
          <h1
            class="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl"
          >
            You can work from anywhere.<br />
            <span class="text-indigo-500">Take advantage of it.</span>
          </h1>
          <p class="mt-2 text-gray-600 sm:mt-2 sm:text-xl">
            Workcation helps you find work-friendly rentals in beautiful
            locations so you can enjoy some nice weather even when you're not on
            vacation.
          </p>
          <div class="mt-4 sm:mt-6">
            <a href="#" class="btn btn-indigo shadow-lg sm:text-base"
              >Book your escape</a
            >
            <a href="#" class="ml-2 btn btn-gray sm:text-base">Learn more</a>
          </div>
        </div>
      </div>
      <div class="hidden lg:block lg:w-1/2 lg:relative">
        <img
          class="absolute inset-0 h-full w-full object-cover object-center"
          src="../assets/images/beach-work.jpg"
          alt="beach work"
        />
      </div>
    </div>
    <div
      class="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8 lg:px-12 py-8"
    >
      <h2 class="text-xl text-grey-900">Popular destinations</h2>
      <p class="text-gray-600">
        A selection of great work-friendly cities with lots to see
      </p>
      <div class="flex flex-wrap -mx-4">
        <div
          class="mt-6 w-full px-4 lg:w-1/2 xl:w-1/3"
          v-for="destination in popularDestinations"
          :key="destination.id"
        >
          <DestinationCard :destination="destination" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DestinationCard from '@/components/DestinationCard.vue';

import Toronto from '../assets/images/toronto.jpg';
import Malibu from '../assets/images/malibu.jpg';
import Chicago from '../assets/images/chicago.jpg';
import Seattle from '../assets/images/seattle.jpg';
import Colorado from '../assets/images/colorado.jpg';
import Miami from '../assets/images/miami.jpg';

export default {
  components: {
    DestinationCard,
  },
  data() {
    return {
      popularDestinations: [
        {
          id: 1,
          city: 'Toronto',
          averagePrice: 120,
          propertyCount: 76,
          imageUrl: Toronto,
          imageAlt: 'Toronto skyline',
        },
        {
          id: 2,
          city: 'Malibu',
          averagePrice: 215,
          propertyCount: 43,
          imageUrl: Malibu,
          imageAlt: 'Cliff in Malibu',
        },
        {
          id: 3,
          city: 'Chicago',
          averagePrice: 130,
          propertyCount: 115,
          imageUrl: Chicago,
          imageAlt: 'Chicago skyline',
        },
        {
          id: 4,
          city: 'Seattle',
          averagePrice: 135,
          propertyCount: 63,
          imageUrl: Seattle,
          imageAlt: 'Seattle skyline',
        },
        {
          id: 5,
          city: 'Colorado',
          averagePrice: 85,
          propertyCount: 47,
          imageUrl: Colorado,
          imageAlt: 'Colorado lake',
        },
        {
          id: 6,
          city: 'Miami',
          averagePrice: 115,
          propertyCount: 86,
          imageUrl: Miami,
          imageAlt: 'Miami skyline',
        },
      ],
    };
  },
};
</script>
