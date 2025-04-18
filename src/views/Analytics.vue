<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 class="text-2xl font-bold text-white mb-6">Analytics Dashboard</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <!-- Revenue Impact -->
        <div class="backdrop-blur-lg bg-white/10 rounded-lg p-6">
          <h3 class="text-lg font-semibold text-white mb-4">Revenue Impact</h3>
          <div class="h-64">
            <LineChart :data="revenueData" :options="chartOptions" />
          </div>
        </div>
        
        <!-- Conversion Rate -->
        <div class="backdrop-blur-lg bg-white/10 rounded-lg p-6">
          <h3 class="text-lg font-semibold text-white mb-4">Conversion Rate</h3>
          <div class="h-64">
            <LineChart :data="conversionData" :options="chartOptions" />
          </div>
        </div>
      </div>

      <div class="backdrop-blur-lg bg-white/10 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-white mb-4">Price Elasticity Analysis</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div v-for="product in elasticityData" :key="product.id" 
               class="bg-white/5 rounded-lg p-4">
            <h4 class="font-medium text-white">{{ product.name }}</h4>
            <p class="text-sm text-blue-200 mt-2">
              Elasticity: {{ product.elasticity }}
            </p>
            <p class="text-sm text-blue-200">
              Optimal Price Range: ${{ product.minPrice }} - ${{ product.maxPrice }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Line as LineChart } from 'vue-chartjs'

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

const revenueData = ref({
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [{
    label: 'Revenue',
    data: [12000, 19000, 15000, 22000, 20000, 25000, 24000],
    borderColor: '#60A5FA',
    tension: 0.4
  }]
})

const conversionData = ref({
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [{
    label: 'Conversion Rate',
    data: [2.4, 2.8, 2.6, 3.2, 3.0, 3.5, 3.3],
    borderColor: '#34D399',
    tension: 0.4
  }]
})

const elasticityData = ref([
  {
    id: 1,
    name: 'Premium Widget',
    elasticity: '-1.2',
    minPrice: '45.99',
    maxPrice: '59.99'
  },
  {
    id: 2,
    name: 'Basic Widget',
    elasticity: '-0.8',
    minPrice: '24.99',
    maxPrice: '34.99'
  },
  {
    id: 3,
    name: 'Pro Widget',
    elasticity: '-1.5',
    minPrice: '75.99',
    maxPrice: '89.99'
  }
])
</script>