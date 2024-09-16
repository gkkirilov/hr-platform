<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-md">
    <div class="px-4 py-5 sm:px-6">
      <div class="flex justify-between items-center">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          {{ job.title }}
        </h3>
        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          {{ job.salary }}
        </span>
      </div>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">{{ job.company }} • {{ job.location }}</p>
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
      <p class="text-sm text-gray-500">{{ job.description }}</p>
    </div>
    <div class="bg-gray-50 px-4 py-4 sm:px-6">
      <div class="text-sm">
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
          Вижте повече детайли<span class="sr-only"> за {{ job.title }} в {{ job.company }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  job: {
    type: Object,
    required: true,
  },
})
</script>
