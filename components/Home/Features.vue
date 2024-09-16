<template>
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <h2 class="text-base font-semibold leading-7 text-indigo-600">Намерете работа по-бързо</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Всичко необходимо за вашата кариера</p>
          <p class="mt-6 text-lg leading-8 text-gray-600">Jobs Assistant е вашият надежден партньор в търсенето на работа в България. Нашата платформа предлага разнообразни възможности за кариерно развитие и улеснява връзката между търсещи работа и работодатели.</p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div v-for="feature in features" :key="feature.name" class="flex flex-col">
              <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <component :is="feature.icon" class="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                {{ feature.name }}
              </dt>
              <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p class="flex-auto">{{ feature.description }}</p>
                <p class="mt-6">
                  <a :href="feature.href" class="text-sm font-semibold leading-6 text-indigo-600">Научете повече <span aria-hidden="true">→</span></a>
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { MagnifyingGlassIcon, BriefcaseIcon, AcademicCapIcon } from '@heroicons/vue/20/solid'
  
  const features = [
    {
      name: 'Интелигентно търсене',
      description:
        'Нашата усъвършенствана система за търсене ви помага да намерите идеалната работа, съответстваща на вашите умения и предпочитания. Филтрирайте по местоположение, заплата и много други.',
      href: '#',
      icon: MagnifyingGlassIcon,
    },
    {
      name: 'Директна връзка с работодатели',
      description:
        'Свържете се директно с водещи компании в България. Нашата платформа улеснява комуникацията и ви дава възможност да изпратите вашето CV с едно кликване.',
      href: '#',
      icon: BriefcaseIcon,
    },
    {
      name: 'Кариерно развитие',
      description:
        'Получете достъп до ексклузивни ресурси за кариерно развитие, включително съвети за CV, подготовка за интервю и информация за тенденциите на пазара на труда в България.',
      href: '#',
      icon: AcademicCapIcon,
    },
  ]
  </script>