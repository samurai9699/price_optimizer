<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Overview Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="stats-card">
          <h3 class="text-lg font-medium text-white">Total Revenue</h3>
          <p class="text-3xl font-bold text-white mt-2">$24,567</p>
          <p class="text-sm text-blue-200 mt-1">+12% from last month</p>
        </div>
        <div class="stats-card">
          <h3 class="text-lg font-medium text-white">Active Products</h3>
          <p class="text-3xl font-bold text-white mt-2">142</p>
          <p class="text-sm text-blue-200 mt-1">+8 new this week</p>
        </div>
        <div class="stats-card">
          <h3 class="text-lg font-medium text-white">Price Updates</h3>
          <p class="text-3xl font-bold text-white mt-2">37</p>
          <p class="text-sm text-blue-200 mt-1">Last 24 hours</p>
        </div>
      </div>

      <!-- Main Content -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Price Impact Chart -->
        <div class="chart-container">
          <h3 class="text-lg font-medium text-white mb-4">Price Impact Analysis</h3>
          <div class="h-80">
            <LineChart :data="priceImpactData" :options="chartOptions" />
          </div>
        </div>

        <!-- Recent Updates -->
        <div class="chart-container">
          <h3 class="text-lg font-medium text-white mb-4">Recent Price Updates</h3>
          <div class="space-y-4">
            <div v-for="update in recentUpdates" :key="update.id" 
                 class="flex items-center justify-between p-4 rounded-lg bg-white/5">
              <div>
                <p class="text-white font-medium">{{ update.product }}</p>
                <p class="text-sm text-blue-200">{{ update.time }}</p>
              </div>
              <div class="text-right">
                <p class="text-white">${{ update.newPrice }}</p>
                <p :class="[
                  update.change > 0 ? 'text-green-400' : 'text-red-400',
                  'text-sm'
                ]">
                  {{ update.change > 0 ? '+' : '' }}{{ update.change }}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Recommendations -->
      <div class="mt-8">
        <h3 class="text-lg font-medium text-white mb-4">AI Recommendations</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="rec in recommendations" :key="rec.id" 
               class="feature-card bg-white/5">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h4 class="text-white font-medium">{{ rec.product }}</h4>
                <p class="text-sm text-blue-200">{{ rec.reason }}</p>
              </div>
              <span :class="[
                rec.impact > 0 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400',
                'px-2 py-1 rounded text-sm'
              ]">
                {{ rec.impact > 0 ? '+' : '' }}{{ rec.impact }}%
              </span>
            </div>
            <div class="flex justify-between items-center mt-4">
              <div class="text-white">
                <p class="text-sm">Current: ${{ rec.currentPrice }}</p>
                <p class="text-sm">Suggested: ${{ rec.suggestedPrice }}</p>
              </div>
              <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Line as LineChart } from 'vue-chartjs'

const priceImpactData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [{
    label: 'Revenue',
    data: [12000, 19000, 15000, 22000, 20000, 25000, 24000],
    borderColor: '#60A5FA',
    tension: 0.4
  }]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    y: {
      grid: {
        color: 'rgba(255, 255, 255, 0.1)'
      },
      ticks: {
        color: 'rgba(255, 255, 255, 0.7)'
      }
    },
    x: {
      grid: {
        display: false
      },
      ticks: {
        color: 'rgba(255, 255, 255, 0.7)'
      }
    }
  }
}

const recentUpdates = ref([
  {
    id: 1,
    product: 'Premium Widget',
    time: '2 hours ago',
    newPrice: 49.99,
    change: 2.5
  },
  {
    id: 2,
    product: 'Basic Widget',
    time: '4 hours ago',
    newPrice: 29.99,
    change: -1.5
  },
  {
    id: 3,
    product: 'Pro Widget',
    time: '6 hours ago',
    newPrice: 79.99,
    change: 3.0
  }
])

const recommendations = ref([
  {
    id: 1,
    product: 'Premium Widget',
    reason: 'Competitor price increase',
    impact: 5.2,
    currentPrice: 49.99,
    suggestedPrice: 52.99
  },
  {
    id: 2,
    product: 'Basic Widget',
    reason: 'High demand period',
    impact: 3.8,
    currentPrice: 29.99,
    suggestedPrice: 31.99
  },
  {
    id: 3,
    product: 'Pro Widget',
    reason: 'Market opportunity',
    impact: 4.5,
    currentPrice: 79.99,
    suggestedPrice: 84.99
  }
])
</script>