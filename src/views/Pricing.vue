<template>
  <div class="bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <div class="sm:flex sm:flex-col sm:align-center">
        <h1 class="text-5xl font-extrabold text-gray-900 dark:text-white sm:text-center">
          Pricing Plans
        </h1>
        <p class="mt-5 text-xl text-gray-500 dark:text-gray-400 sm:text-center">
          Start with a 14-day free trial. No credit card required.
        </p>
        <div class="relative mt-6 bg-gray-100 dark:bg-gray-800 rounded-lg p-0.5 flex self-center">
          <button
            v-for="(option, idx) in billingOptions"
            :key="idx"
            @click="selectedBilling = option.value"
            :class="[
              selectedBilling === option.value
                ? 'relative w-1/2 bg-white dark:bg-gray-700 border-gray-200 rounded-md shadow-sm py-2 text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500 focus:z-10 sm:w-auto sm:px-8'
                : 'ml-0.5 relative w-1/2 border border-transparent rounded-md py-2 text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500 focus:z-10 sm:w-auto sm:px-8'
            ]"
          >
            {{ option.label }}
          </button>
        </div>
      </div>

      <div class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0">
        <div v-for="tier in tiers" :key="tier.name"
             class="border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800">
          <div class="p-6">
            <h2 class="text-lg leading-6 font-medium text-gray-900 dark:text-white">{{ tier.name }}</h2>
            <p class="mt-4 text-sm text-gray-500 dark:text-gray-400">{{ tier.description }}</p>
            <p class="mt-8">
              <span class="text-4xl font-extrabold text-gray-900 dark:text-white">${{ selectedBilling === 'monthly' ? tier.priceMonthly : tier.priceYearly }}</span>
              <span class="text-base font-medium text-gray-500 dark:text-gray-400">/{{ selectedBilling === 'monthly' ? 'mo' : 'yr' }}</span>
            </p>
            <router-link
              :to="tier.href"
              class="mt-8 block w-full bg-blue-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-blue-700"
            >
              {{ tier.cta }}
            </router-link>
          </div>
          <div class="pt-6 pb-8 px-6">
            <h3 class="text-xs font-medium text-gray-900 dark:text-white tracking-wide uppercase">
              What's included
            </h3>
            <ul role="list" class="mt-6 space-y-4">
              <li v-for="feature in tier.features" :key="feature"
                  class="flex space-x-3">
                <svg
                  class="flex-shrink-0 h-5 w-5 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm text-gray-500 dark:text-gray-400">{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedBilling = ref('monthly')

const billingOptions = [
  { label: 'Monthly billing', value: 'monthly' },
  { label: 'Annual billing', value: 'yearly' }
]

const tiers = [
  {
    name: 'Starter',
    href: '/signup',
    priceMonthly: 49,
    priceYearly: 39,
    description: 'Perfect for small businesses starting with dynamic pricing.',
    features: [
      'Up to 100 products',
      'Basic price optimization',
      'Weekly market analysis',
      'Email support',
      'Basic reporting'
    ],
    cta: 'Start free trial'
  },
  {
    name: 'Professional',
    href: '/signup',
    priceMonthly: 99,
    priceYearly: 89,
    description: 'Advanced features for growing businesses.',
    features: [
      'Up to 1,000 products',
      'Advanced AI optimization',
      'Real-time competitor tracking',
      'Priority support',
      'Advanced analytics',
      'Custom rules engine'
    ],
    cta: 'Start free trial'
  },
  {
    name: 'Enterprise',
    href: '/signup',
    priceMonthly: 199,
    priceYearly: 179,
    description: 'Custom solutions for large enterprises.',
    features: [
      'Unlimited products',
      'Custom AI models',
      'Dedicated account manager',
      '24/7 phone support',
      'Custom integrations',
      'Advanced API access',
      'Multi-store management'
    ],
    cta: 'Contact sales'
  }
]
</script>