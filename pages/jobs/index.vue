<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <div class="bg-gray-50">
    <div>
      <!-- Mobile menu -->
      <TransitionRoot as="template" :show="mobileMenuOpen">
        <Dialog class="relative z-40 lg:hidden" @close="mobileMenuOpen = false">
          <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
            <div class="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>
  
          <div class="fixed inset-0 z-40 flex">
            <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
              <DialogPanel class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div class="flex px-4 pb-2 pt-5">
                  <button type="button" class="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400" @click="mobileMenuOpen = false">
                    <span class="sr-only">Close menu</span>
                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
  
                <!-- Links -->
                <TabGroup as="div" class="mt-2">
                  <div class="border-b border-gray-200">
                    <TabList class="-mb-px flex space-x-8 px-4">
                      <Tab as="template" v-for="category in navigation.categories" :key="category.name" v-slot="{ selected }">
                        <button :class="[selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900', 'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium']">{{ category.name }}</button>
                      </Tab>
                    </TabList>
                  </div>
                  <TabPanels as="template">
                    <TabPanel v-for="category in navigation.categories" :key="category.name" class="space-y-12 px-4 py-6">
                      <div class="grid grid-cols-2 gap-x-4 gap-y-10">
                        <div v-for="item in category.featured" :key="item.name" class="group relative">
                          <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                            <img :src="item.imageSrc" :alt="item.imageAlt" class="object-cover object-center" />
                          </div>
                          <a :href="item.href" class="mt-6 block text-sm font-medium text-gray-900">
                            <span class="absolute inset-0 z-10" aria-hidden="true" />
                            {{ item.name }}
                          </a>
                          <p aria-hidden="true" class="mt-1 text-sm text-gray-500">Shop now</p>
                        </div>
                      </div>
                    </TabPanel>
                  </TabPanels>
                </TabGroup>
  
                <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div v-for="page in navigation.pages" :key="page.name" class="flow-root">
                    <a :href="page.href" class="-m-2 block p-2 font-medium text-gray-900">{{ page.name }}</a>
                  </div>
                </div>
  
                <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div class="flow-root">
                    <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Create an account</a>
                  </div>
                  <div class="flow-root">
                    <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Sign in</a>
                  </div>
                </div>
  
                <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                  <!-- Currency selector -->
                  <form>
                    <div class="inline-block">
                      <label for="mobile-currency" class="sr-only">Currency</label>
                      <div class="group relative -ml-2 rounded-md border-transparent focus-within:ring-2 focus-within:ring-white">
                        <select id="mobile-currency" name="currency" class="flex items-center rounded-md border-transparent bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-gray-700 focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-800">
                          <option v-for="currency in currencies" :key="currency">{{ currency }}</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                          <ChevronDownIcon class="h-5 w-5 text-gray-500" aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </TransitionRoot>

    </div>
  
    <div>
      <!-- Mobile filter dialog -->
      <TransitionRoot as="template" :show="mobileFiltersOpen">
        <Dialog class="relative z-40 sm:hidden" @close="mobileFiltersOpen = false">
          <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
            <div class="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>
  
          <div class="fixed inset-0 z-40 flex">
            <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="translate-x-full">
              <DialogPanel class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                <div class="flex items-center justify-between px-4">
                  <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                  <button type="button" class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500" @click="mobileFiltersOpen = false">
                    <span class="sr-only">Close menu</span>
                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
  
                <!-- Filters -->
                <form class="mt-4">
                  <Disclosure as="div" v-for="section in filters" :key="section.name" class="border-t border-gray-200 px-4 py-6" v-slot="{ open }">
                    <h3 class="-mx-2 -my-3 flow-root">
                      <DisclosureButton class="flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-gray-400">
                        <span class="font-medium text-gray-900">{{ section.name }}</span>
                        <span class="ml-6 flex items-center">
                          <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-5 w-5 transform']" aria-hidden="true" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel class="pt-6">
                      <div class="space-y-6">
                        <div v-for="(option, optionIdx) in section.options" :key="option.value" class="flex items-center">
                          <input :id="`filter-mobile-${section.id}-${optionIdx}`" :name="`${section.id}[]`" :value="option.value" type="checkbox" :checked="option.checked" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                          <label :for="`filter-mobile-${section.id}-${optionIdx}`" class="ml-3 text-sm text-gray-500">{{ option.label }}</label>
                        </div>
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </TransitionRoot>
  
      <main>
        <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div class="py-24 text-center">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900">Нови обяви за работа</h1>
            <p class="mx-auto mt-4 max-w-3xl text-base text-gray-500">Открийте най-новите възможности за кариера в България с Jobs Assistant.</p>
          </div>
  
          <!-- Filters -->
          <section aria-labelledby="filter-heading" class="border-t border-gray-200 pt-6">
            <h2 id="filter-heading" class="sr-only">Product filters</h2>
  
            <div class="flex items-center justify-between">
              <Menu as="div" class="relative inline-block text-left">
                <div>
                  <MenuButton class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Сортирай
                    <ChevronDownIcon class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                  </MenuButton>
                </div>
  
                <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                  <MenuItems class="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div class="py-1">
                      <MenuItem v-for="option in sortOptions" :key="option" v-slot="{ active }">
                        <a :href="option.href" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm font-medium text-gray-900']">{{ option.name }}</a>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </transition>
              </Menu>
  
              <button type="button" class="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden" @click="mobileFiltersOpen = true">Filters</button>
  
              <PopoverGroup class="hidden sm:flex sm:items-baseline sm:space-x-8">
                <Popover as="div" v-for="(section, sectionIdx) in filters" :key="section.name" id="menu" class="relative inline-block text-left">
                  <div>
                    <PopoverButton class="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                      <span>{{ section.name }}</span>
                      <span v-if="sectionIdx === 0" class="ml-1.5 rounded bg-gray-200 px-1.5 py-0.5 text-xs font-semibold tabular-nums text-gray-700">1</span>
                      <ChevronDownIcon class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                    </PopoverButton>
                  </div>
  
                  <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                    <PopoverPanel class="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <form class="space-y-4">
                        <div v-for="(option, optionIdx) in section.options" :key="option.value" class="flex items-center">
                          <input :id="`filter-${section.id}-${optionIdx}`" :name="`${section.id}[]`" :value="option.value" :checked="option.checked" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                          <label :for="`filter-${section.id}-${optionIdx}`" class="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900">{{ option.label }}</label>
                        </div>
                      </form>
                    </PopoverPanel>
                  </transition>
                </Popover>
              </PopoverGroup>
            </div>
          </section>
  
          <!-- Job listings -->
          <section aria-labelledby="products-heading" class="mt-8">
            <h2 id="products-heading" class="sr-only">Обяви за работа</h2>
  
            <div class="space-y-6">
              <JobListItem v-for="job in jobs" :key="job.id" :job="job" />
            </div>
          </section>
  
          <section aria-labelledby="featured-heading" class="relative mt-16 overflow-hidden rounded-lg lg:h-96">
            <div class="absolute inset-0">
              <img src="https://tailwindui.com/img/ecommerce-images/category-page-01-featured-collection.jpg" alt="" class="h-full w-full object-cover object-center" />
            </div>
            <div aria-hidden="true" class="relative h-96 w-full lg:hidden" />
            <div aria-hidden="true" class="relative h-32 w-full lg:hidden" />
            <div class="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-96 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg">
              <div>
                <h2 id="featured-heading" class="text-xl font-bold text-white">Топ работодатели</h2>
                <p class="mt-1 text-sm text-gray-300">Открийте възможности в най-добрите компании в България.</p>
              </div>
              <a href="#" class="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-white border-opacity-25 bg-white bg-opacity-0 px-4 py-3 text-base font-medium text-white hover:bg-opacity-10 sm:ml-8 sm:mt-0 lg:ml-0 lg:w-full">Вижте топ работодателите</a>
            </div>
          </section>
        </div>
      </main>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import JobListItem from '~/components/JobListItem.vue'
  
const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']
const navigation = {
  categories: [
    {
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg',
          imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
        },
        {
          name: 'Carry',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg',
          imageAlt: 'Model opening tan leather long wallet with credit card pockets and cash pouch.',
        },
      ],
    },
    {
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
          imageAlt: 'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
          imageAlt: 'Model wearing light heather gray t-shirt.',
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
          imageAlt:
            'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',
        },
        {
          name: 'Carry',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg',
          imageAlt: 'Model putting folded cash into slim card holder olive leather wallet with hand stitching.',
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}
const sortOptions = [
  { name: 'Най-нови', href: '#' },
  { name: 'Най-популярни', href: '#' },
  { name: 'Заплата: Възходящо', href: '#' },
  { name: 'Заплата: Низходящо', href: '#' },
]
const filters = [
  {
    id: 'category',
    name: 'Категория',
    options: [
      { value: 'it', label: 'IT и Разработка' },
      { value: 'marketing', label: 'Маркетинг' },
      { value: 'sales', label: 'Продажби' },
      { value: 'finance', label: 'Финанси' },
      { value: 'hr', label: 'Човешки ресурси' },
      { value: 'other', label: 'Други' },
    ],
  },
  {
    id: 'location',
    name: 'Локация',
    options: [
      { value: 'sofia', label: 'София' },
      { value: 'plovdiv', label: 'Пловдив' },
      { value: 'varna', label: 'Варна' },
      { value: 'burgas', label: 'Бургас' },
      { value: 'remote', label: 'Дистанционна работа' },
    ],
  },
  {
    id: 'experience',
    name: 'Опит',
    options: [
      { value: 'entry', label: 'Без опит' },
      { value: 'junior', label: 'Junior (1-3 години)' },
      { value: 'mid', label: 'Mid-level (3-5 години)' },
      { value: 'senior', label: 'Senior (5+ години)' },
    ],
  },
]
const jobs = [
  {
    id: 1,
    title: 'Frontend Разработчик',
    company: 'ТехСофт ООД',
    location: 'София',
    salary: '3000 - 5000 лв.',
    description: 'Търсим опитен Frontend разработчик за работа по иновативни уеб проекти.',
  },
  {
    id: 2,
    title: 'Маркетинг Специалист',
    company: 'Дигитал Вижън АД',
    location: 'Пловдив',
    salary: '2500 - 4000 лв.',
    description: 'Ключова роля в дигиталния маркетинг екип, фокусирана върху социални медии и SEO.',
  },
  {
    id: 3,
    title: 'Счетоводител',
    company: 'ФинКонсулт ЕООД',
    location: 'Варна',
    salary: '2800 - 4500 лв.',
    description: 'Опитен счетоводител за управление на финансовите операции на компанията.',
  },
  {
    id: 4,
    title: 'DevOps Инженер',
    company: 'КлаудТех България',
    location: 'София',
    salary: '4000 - 7000 лв.',
    description: 'Търсим DevOps инженер за оптимизиране на инфраструктурата и процесите ни.',
  },
  {
    id: 5,
    title: 'HR Мениджър',
    company: 'ТалантПро АД',
    location: 'Бургас',
    salary: '3500 - 5500 лв.',
    description: 'Опитен HR професионалист за управление на целия процес по наемане и развитие на персонала.',
  },
  {
    id: 6,
    title: 'Продуктов Мениджър',
    company: 'ИноваСофт ООД',
    location: 'Дистанционна',
    salary: '4500 - 7500 лв.',
    description: 'Търсим продуктов мениджър за ръководене на разработката на нови софтуерни продукти.',
  },
  {
    id: 7,
    title: 'Backend Разработчик',
    company: 'ДейтаСистемс АД',
    location: 'София',
    salary: '3500 - 6000 лв.',
    description: 'Опитен Backend разработчик за работа по мащабни системи с голямо натоварване.',
  },
  {
    id: 8,
    title: 'Графичен Дизайнер',
    company: 'КреативСтудио ЕООД',
    location: 'Пловдив',
    salary: '2500 - 4000 лв.',
    description: 'Търсим креативен графичен дизайнер за създаване на визуални материали за различни платформи.',
  },
  {
    id: 9,
    title: 'Мениджър Продажби',
    company: 'ТехноТрейд АД',
    location: 'Варна',
    salary: '3000 - 5500 лв.',
    description: 'Опитен мениджър продажби за развитие на бизнеса и управление на търговския екип.',
  },
  {
    id: 10,
    title: 'Data Scientist',
    company: 'АналитиксПро ООД',
    location: 'София',
    salary: '4000 - 7000 лв.',
    description: 'Търсим Data Scientist за анализ на големи обеми данни и създаване на предиктивни модели.',
  },
  {
    id: 11,
    title: 'UX/UI Дизайнер',
    company: 'ДигиталУикс ЕООД',
    location: 'Дистанционна',
    salary: '3000 - 5000 лв.',
    description: 'Опитен UX/UI дизайнер за създаване на интуитивни и атрактивни потребителски интерфейси.',
  },
  {
    id: 12,
    title: 'Системен Администратор',
    company: 'ИнфраТех АД',
    location: 'Бургас',
    salary: '2800 - 4500 лв.',
    description: 'Търсим системен администратор за поддръжка и оптимизация на IT инфраструктурата.',
  },
  {
    id: 13,
    title: 'Бизнес Анализатор',
    company: 'БизнесСолюшънс ООД',
    location: 'София',
    salary: '3500 - 5500 лв.',
    description: 'Опитен бизнес анализатор за идентифициране на бизнес нужди и предлагане на решения.',
  },
]
const footerNavigation = {
  products: [
    { name: 'Bags', href: '#' },
    { name: 'Tees', href: '#' },
    { name: 'Objects', href: '#' },
    { name: 'Home Goods', href: '#' },
    { name: 'Accessories', href: '#' },
  ],
  company: [
    { name: 'Who we are', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
  customerService: [
    { name: 'Contact', href: '#' },
    { name: 'Shipping', href: '#' },
    { name: 'Returns', href: '#' },
    { name: 'Warranty', href: '#' },
    { name: 'Secure Payments', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Find a store', href: '#' },
  ],
}
  
const mobileMenuOpen = ref(false)
const mobileFiltersOpen = ref(false)
</script>