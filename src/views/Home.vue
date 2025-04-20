<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
    <!-- Navigation -->
    <nav class="relative backdrop-blur-md bg-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex-shrink-0 flex items-center">
            <router-link to="/" class="group flex items-center space-x-2">
              <div class="relative w-8 h-8">
                <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg transform group-hover:scale-110 transition-transform duration-300"></div>
                <div class="absolute inset-0.5 bg-gray-900 rounded-lg flex items-center justify-center">
                  <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 font-bold">P</span>
                </div>
              </div>
              <span class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                PriceOptimizer
              </span>
            </router-link>
          </div>
          <div class="flex items-center space-x-4">
            <router-link
              to="/login"
              class="group relative px-4 py-2 text-white hover:text-blue-100 transition-colors duration-200"
            >
              Sign in
            </router-link>
            <router-link
              to="/signup"
              class="relative inline-flex items-center px-6 py-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Start Free Trial
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <div class="relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div class="text-center">
          <h1 class="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span class="block">Optimize Your Pricing with</span>
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              AI-Powered Intelligence
            </span>
          </h1>
          <p class="mt-3 max-w-md mx-auto text-base text-blue-200 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Maximize revenue with real-time price optimization. Our AI analyzes market trends, competitor prices, and demand patterns to help you make data-driven pricing decisions.
          </p>
          <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div class="rounded-md shadow">
              <router-link
                to="/signup"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 md:py-4 md:text-lg md:px-10"
              >
                Start Free Trial
              </router-link>
            </div>
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#features"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        <!-- Live Demo Component -->
        <div class="mt-16">
          <LiveDemo />
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div id="features" class="relative py-20 bg-gray-900/50 backdrop-blur-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
            Powerful Features for Smart Pricing
          </h2>
          <p class="mt-4 max-w-2xl mx-auto text-xl text-blue-200">
            Everything you need to optimize your pricing strategy and boost revenue.
          </p>
        </div>

        <div class="mt-20">
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <!-- AI Optimization -->
            <div class="feature-card">
              <div class="relative">
                <div class="h-8 w-8 text-blue-500">
                  <img src="/icons/ai.svg" alt="AI" class="h-full w-full" />
                </div>
                <h3 class="mt-4 text-xl font-medium text-white">AI-Powered Optimization</h3>
                <p class="mt-2 text-blue-200">
                  Advanced algorithms analyze market data to recommend optimal pricing strategies.
                </p>
              </div>
            </div>

            <!-- Competitor Tracking -->
            <div class="feature-card">
              <div class="relative">
                <div class="h-8 w-8 text-green-500">
                  <img src="/icons/tracking.svg" alt="Tracking" class="h-full w-full" />
                </div>
                <h3 class="mt-4 text-xl font-medium text-white">Competitor Tracking</h3>
                <p class="mt-2 text-blue-200">
                  Real-time monitoring of competitor prices to stay competitive.
                </p>
              </div>
            </div>

            <!-- Demand Forecasting -->
            <div class="feature-card">
              <div class="relative">
                <div class="h-8 w-8 text-purple-500">
                  <img src="/icons/forecast.svg" alt="Forecast" class="h-full w-full" />
                </div>
                <h3 class="mt-4 text-xl font-medium text-white">Demand Forecasting</h3>
                <p class="mt-2 text-blue-200">
                  Predict future demand patterns to optimize inventory and pricing.
                </p>
              </div>
            </div>

            <!-- Analytics -->
            <div class="feature-card">
              <div class="relative">
                <div class="h-8 w-8 text-yellow-500">
                  <img src="/icons/analytics.svg" alt="Analytics" class="h-full w-full" />
                </div>
                <h3 class="mt-4 text-xl font-medium text-white">Advanced Analytics</h3>
                <p class="mt-2 text-blue-200">
                  Comprehensive insights into pricing performance and market trends.
                </p>
              </div>
            </div>

            <!-- Automation -->
            <div class="feature-card">
              <div class="relative">
                <div class="h-8 w-8 text-red-500">
                  <img src="/icons/automation.svg" alt="Automation" class="h-full w-full" />
                </div>
                <h3 class="mt-4 text-xl font-medium text-white">Price Automation</h3>
                <p class="mt-2 text-blue-200">
                  Automate price updates based on custom rules and market conditions.
                </p>
              </div>
            </div>

            <!-- Performance -->
            <div class="feature-card">
              <div class="relative">
                <div class="h-8 w-8 text-indigo-500">
                  <img src="/icons/performance.svg" alt="Performance" class="h-full w-full" />
                </div>
                <h3 class="mt-4 text-xl font-medium text-white">Performance Monitoring</h3>
                <p class="mt-2 text-blue-200">
                  Track the impact of pricing changes on revenue and profit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pricing Section -->
    <div class="relative py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
            Choose Your Plan
          </h2>
          <p class="mt-4 text-xl text-blue-200">
            Start optimizing your prices today with our flexible plans
          </p>
        </div>

        <!-- ROI Calculator -->
        <div class="mb-12 backdrop-blur-lg bg-white/5 rounded-xl p-6">
          <h3 class="text-xl font-bold text-white mb-4">ROI Calculator</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="space-y-2">
              <label class="block text-sm font-medium text-blue-200">Monthly Revenue</label>
              <input
                v-model="roiCalculator.revenue"
                type="number"
                class="w-full bg-white/10 border-0 rounded-lg text-white px-4 py-2"
                placeholder="Enter your monthly revenue"
              />
            </div>
            <div class="space-y-2">
              <label class="block text-sm font-medium text-blue-200">Number of Products</label>
              <input
                v-model="roiCalculator.products"
                type="number"
                class="w-full bg-white/10 border-0 rounded-lg text-white px-4 py-2"
                placeholder="Enter number of products"
              />
            </div>
            <div class="flex items-center">
              <div class="text-center w-full">
                <div class="text-2xl font-bold text-green-400">
                  +{{ calculateROI }}%
                </div>
                <div class="text-sm text-blue-200">Estimated Monthly ROI</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Pricing Tiers -->
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <!-- Freemium Tier -->
          <div class="relative group">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl transform transition-all duration-300 group-hover:scale-105"></div>
            <div class="relative backdrop-blur-lg bg-white/10 p-8 rounded-2xl h-full">
              <h3 class="text-2xl font-bold text-white">Free</h3>
              <p class="mt-4 text-blue-200">Perfect for trying out our platform</p>
              <div class="mt-8">
                <span class="text-4xl font-bold text-white">$0</span>
                <span class="text-blue-200">/month</span>
              </div>
              <ul class="mt-6 space-y-4">
                <li v-for="feature in freeTierFeatures" :key="feature" class="flex items-center text-blue-100">
                  <svg class="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  {{ feature }}
                </li>
              </ul>
              <router-link
                to="/signup"
                class="mt-8 block w-full text-center px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              >
                Get Started
              </router-link>
            </div>
          </div>

          <!-- Basic Tier -->
          <div class="relative group">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl transform transition-all duration-300 group-hover:scale-105"></div>
            <div class="relative backdrop-blur-lg bg-white/10 p-8 rounded-2xl h-full">
              <h3 class="text-2xl font-bold text-white">Basic</h3>
              <p class="mt-4 text-blue-200">For small businesses getting started</p>
              <div class="mt-8">
                <span class="text-4xl font-bold text-white">$50</span>
                <span class="text-blue-200">/month</span>
              </div>
              <ul class="mt-6 space-y-4">
                <li v-for="feature in basicTierFeatures" :key="feature" class="flex items-center text-blue-100">
                  <svg class="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  {{ feature }}
                </li>
              </ul>
              <router-link
                to="/signup"
                class="mt-8 block w-full text-center px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              >
                Start Free Trial
              </router-link>
            </div>
          </div>

          <!-- Pro Tier -->
          <div class="relative group">
            <div class="absolute -inset-[2px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl transform transition-all duration-300 group-hover:scale-105"></div>
            <div class="relative backdrop-blur-lg bg-white/10 p-8 rounded-2xl h-full">
              <div class="absolute -top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-1 rounded-full text-white text-sm font-medium">
                Best Value
              </div>
              <h3 class="text-2xl font-bold text-white">Pro</h3>
              <p class="mt-4 text-blue-200">For growing businesses needing more power</p>
              <div class="mt-8">
                <span class="text-4xl font-bold text-white">$100</span>
                <span class="text-blue-200">/month</span>
              </div>
              <ul class="mt-6 space-y-4">
                <li v-for="feature in proTierFeatures" :key="feature" class="flex items-center text-blue-100">
                  <svg class="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  {{ feature }}
                </li>
              </ul>
              <router-link
                to="/signup"
                class="mt-8 block w-full text-center px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              >
                Start Free Trial
              </router-link>
            </div>
          </div>

          <!-- Enterprise Tier -->
          <div class="relative group">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl transform transition-all duration-300 group-hover:scale-105"></div>
            <div class="relative backdrop-blur-lg bg-white/10 p-8 rounded-2xl h-full">
              <h3 class="text-2xl font-bold text-white">Enterprise</h3>
              <p class="mt-4 text-blue-200">Custom solutions for large businesses</p>
              <div class="mt-8">
                <span class="text-4xl font-bold text-white">$200+</span>
                <span class="text-blue-200">/month</span>
              </div>
              <ul class="mt-6 space-y-4">
                <li v-for="feature in enterpriseTierFeatures" :key="feature" class="flex items-center text-blue-100">
                  <svg class="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  {{ feature }}
                </li>
              </ul>
              <router-link
                to="/signup"
                class="mt-8 block w-full text-center px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              >
                Contact Sales
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Success Stories Section -->
    <div class="relative py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
            Success Stories
          </h2>
          <p class="mt-4 max-w-2xl mx-auto text-xl text-blue-200">
            See how businesses are transforming their pricing strategy with our platform.
          </p>
        </div>

        <div class="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          <!-- Success Story 1 -->
          <div class="testimonial-card">
            <div class="h-12 w-12 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              <span class="text-xl font-bold text-white">E</span>
            </div>
            <blockquote class="mt-6">
              <p class="text-lg text-blue-100">
                "PriceOptimizer helped us increase our revenue by 25% within the first month. The AI recommendations are spot-on!"
              </p>
            </blockquote>
            <div class="mt-4 text-center">
              <p class="text-base font-medium text-white">Emma Thompson</p>
              <p class="text-sm text-blue-200">CEO, EcoStore</p>
            </div>
          </div>

          <!-- Success Story 2 -->
          <div class="testimonial-card">
            <div class="h-12 w-12 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              <span class="text-xl font-bold text-white">M</span>
            </div>
            <blockquote class="mt-6">
              <p class="text-lg text-blue-100">
                "The competitor tracking feature is invaluable. We're always one step ahead of market changes now."
              </p>
            </blockquote>
            <div class="mt-4 text-center">
              <p class="text-base font-medium text-white">Michael Chen</p>
              <p class="text-sm text-blue-200">COO, TechGear</p>
            </div>
          </div>

          <!-- Success Story 3 -->
          <div class="testimonial-card">
            <div class="h-12 w-12 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              <span class="text-xl font-bold text-white">S</span>
            </div>
            <blockquote class="mt-6">
              <p class="text-lg text-blue-100">
                "The automation features save us hours of work each week. It's like having a pricing expert on staff 24/7."
              </p>
            </blockquote>
            <div class="mt-4 text-center">
              <p class="text-base font-medium text-white">Sarah Martinez</p>
              <p class="text-sm text-blue-200">Founder, StyleHub</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineAsyncComponent, onMounted } from 'vue'
import { useThemeStore } from '../stores/theme'

// Lazy load components
const PriceSimulator = defineAsyncComponent(() => import('../components/PriceSimulator.vue'))
const LiveDemo = defineAsyncComponent(() => import('../components/LiveDemo.vue'))

const themeStore = useThemeStore()

onMounted(() => {
  themeStore.initTheme()
})

// ROI Calculator
const roiCalculator = ref({
  revenue: 10000,
  products: 50
})

const calculateROI = computed(() => {
  const baseIncrease = 15 // Base ROI percentage
  const revenueMultiplier = Math.min(roiCalculator.value.revenue / 10000, 2)
  const productsMultiplier = Math.min(roiCalculator.value.products / 50, 2)
  return Math.round(baseIncrease * revenueMultiplier * productsMultiplier)
})

// Pricing Features
const freeTierFeatures = [
  'Up to 10 products',
  'Basic price recommendations',
  'Community access',
  'Email support',
  'Standard updates'
]

const basicTierFeatures = [
  'Up to 100 products',
  'AI price recommendations',
  'Basic demand forecasting',
  'Limited competitor tracking',
  'Email support',
  'Priority updates'
]

const proTierFeatures = [
  'Up to 1,000 products',
  'Advanced AI optimization',
  'Real-time competitor tracking',
  'A/B testing',
  'Performance analytics',
  'Priority support',
  'Custom rules engine'
]

const enterpriseTierFeatures = [
  'Unlimited products',
  'Custom AI models',
  'Advanced competitor tracking',
  'API access',
  'Geo-pricing',
  'Custom integrations',
  'Dedicated account manager',
  '24/7 phone support'
]
</script>