<template>
    <div class="relative isolate overflow-hidden bg-white">
      <svg class="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
        <defs>
          <pattern id="0787a7c5-978c-4f66-83c7-11c213f99cb7" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" stroke-width="0" fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
      </svg>
      <div class="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <div class="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" class="inline-flex space-x-6">
              <span class="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">Какво ново</span>
              
              <span class="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                      <NuxtLink to="/jobs" class="inline-flex items-center">
                      <span>Вече с над 1 000 обяви</span>
                      <ChevronRightIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </NuxtLink>
                    </span>
            </a>
          </div>
          <h1 class="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Намерете мечтаната си работа в България</h1>
          <p class="mt-6 text-lg leading-8 text-gray-600">Jobs Assistant е вашият надежден партньор в търсенето на работа. Разгледайте хиляди актуални обяви от водещи компании в България и направете следващата стъпка в кариерата си.</p>
          <div class="mt-10 flex items-center gap-x-6">
            <NuxtLink to="/jobs" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Търсене на работа</NuxtLink>
            <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Научете повече <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <img src="/home.svg" alt="Jobs Assistant screenshot" width="2432" height="1442" class="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <HomeFeatures />
    <HomeWorkflow />
  </template>
  
  <script setup>
  import { ChevronRightIcon } from '@heroicons/vue/20/solid'
  </script>