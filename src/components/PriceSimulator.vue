<template>
  <div class="text-white">
    <h3 class="text-xl font-bold mb-6">Price Impact Simulator</h3>
    <div class="space-y-6">
      <div>
        <label class="block text-sm font-medium mb-2">Current Price</label>
        <input
          v-model="currentPrice"
          type="range"
          min="10"
          max="100"
          step="0.1"
          class="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
        />
        <div class="flex justify-between mt-2">
          <span>${{ currentPrice }}</span>
          <span class="text-green-400">+{{ projectedIncrease }}% Revenue</span>
        </div>
      </div>
      
      <div class="h-48">
        <LineChart :data="chartData" :options="chartOptions" />
      </div>
      
      <div class="grid grid-cols-3 gap-4 text-center">
        <div class="p-4 rounded-lg bg-blue-500/20">
          <div class="text-2xl font-bold">${{ projectedRevenue }}</div>
          <div class="text-sm text-blue-200">Projected Revenue</div>
        </div>
        <div class="p-4 rounded-lg bg-green-500/20">
          <div class="text-2xl font-bold">{{ conversionRate }}%</div>
          <div class="text-sm text-green-200">Conversion Rate</div>
        </div>
        <div class="p-4 rounded-lg bg-purple-500/20">
          <div class="text-2xl font-bold">${{ profit }}</div>
          <div class="text-sm text-purple-200">Estimated Profit</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { Line as LineChart } from 'vue-chartjs'

const currentPrice = ref(50)

const projectedIncrease = computed(() => {
  return ((currentPrice.value - 50) * 0.5).toFixed(1)
})

const projectedRevenue = computed(() => {
  return (currentPrice.value * 100).toFixed(2)
})

const conversionRate = computed(() => {
  return (10 - (currentPrice.value - 50) * 0.1).toFixed(1)
})

const profit = computed(() => {
  return (currentPrice.value * 100 * 0.4).toFixed(2)
})

const chartData = computed(() => ({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    label: 'Revenue',
    data: [
      currentPrice.value * 80,
      currentPrice.value * 85,
      currentPrice.value * 90,
      currentPrice.value * 95,
      currentPrice.value * 100,
      currentPrice.value * 105
    ],
    borderColor: '#60A5FA',
    tension: 0.4,
    fill: false
  }]
}))

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
</script>