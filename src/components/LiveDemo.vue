<template>
  <div class="text-white">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <h3 class="text-xl font-bold mb-6">Price Optimization Demo</h3>
        <div class="space-y-6">
          <div class="grid grid-cols-2 gap-4">
            <div v-for="(product, index) in products" :key="index"
                 class="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200 cursor-pointer"
                 :class="{ 'border-2 border-blue-500': selectedProduct === index }"
                 @click="selectProduct(index)">
              <div class="font-medium">{{ product.name }}</div>
              <div class="text-sm text-blue-200">${{ product.price.toFixed(2) }}</div>
            </div>
          </div>
          
          <div v-if="selectedProduct !== null" class="space-y-4">
            <div>
              <label class="block text-sm font-medium mb-2">Adjust Price</label>
              <input
                v-model.number="products[selectedProduct].price"
                type="range"
                :min="products[selectedProduct].minPrice"
                :max="products[selectedProduct].maxPrice"
                step="0.1"
                class="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                @input="updatePrice"
              />
              <div class="flex justify-between mt-2">
                <span>${{ products[selectedProduct].price.toFixed(2) }}</span>
                <span :class="getPriceChangeClass(products[selectedProduct].priceChange)">
                  {{ formatPriceChange(products[selectedProduct].priceChange) }}
                </span>
              </div>
            </div>
            
            <div class="h-48">
              <LineChart :data="getChartData(selectedProduct)" :options="chartOptions" />
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 class="text-xl font-bold mb-6">Market Analysis</h3>
        <div class="space-y-6">
          <div class="grid grid-cols-2 gap-4">
            <div class="p-4 rounded-lg bg-white/5">
              <div class="text-sm text-blue-200">Market Position</div>
              <div class="text-2xl font-bold">{{ getMarketPosition() }}</div>
            </div>
            <div class="p-4 rounded-lg bg-white/5">
              <div class="text-sm text-blue-200">Competitor Count</div>
              <div class="text-2xl font-bold">{{ competitors.length }}</div>
            </div>
          </div>
          
          <div class="p-4 rounded-lg bg-white/5">
            <h4 class="font-medium mb-4">Competitor Prices</h4>
            <div class="space-y-2">
              <div v-for="(competitor, index) in competitors" :key="index"
                   class="flex justify-between items-center">
                <span>{{ competitor.name }}</span>
                <span :class="getPriceComparisonClass(competitor.price)">
                  ${{ competitor.price.toFixed(2) }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Line as LineChart } from 'vue-chartjs'

const selectedProduct = ref<number | null>(null)

const products = ref([
  {
    name: 'Premium Widget',
    price: 49.99,
    minPrice: 39.99,
    maxPrice: 59.99,
    priceChange: 0,
    history: [48.50, 48.75, 49.00, 49.25, 49.50, 49.99]
  },
  {
    name: 'Basic Widget',
    price: 29.99,
    minPrice: 24.99,
    maxPrice: 34.99,
    priceChange: 0,
    history: [28.50, 28.75, 29.00, 29.25, 29.50, 29.99]
  },
  {
    name: 'Pro Widget',
    price: 79.99,
    minPrice: 69.99,
    maxPrice: 89.99,
    priceChange: 0,
    history: [77.50, 77.75, 78.00, 78.25, 78.50, 79.99]
  },
  {
    name: 'Enterprise Widget',
    price: 149.99,
    minPrice: 129.99,
    maxPrice: 169.99,
    priceChange: 0,
    history: [145.50, 146.75, 147.00, 148.25, 149.00, 149.99]
  }
])

const competitors = ref([
  { name: 'Competitor A', price: 51.99 },
  { name: 'Competitor B', price: 48.99 },
  { name: 'Competitor C', price: 52.99 },
  { name: 'Competitor D', price: 47.99 }
])

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

const selectProduct = (index: number) => {
  selectedProduct.value = index
}

const updatePrice = () => {
  if (selectedProduct.value !== null) {
    const product = products.value[selectedProduct.value]
    product.priceChange = calculatePriceChange(product.price)
    updateChartData()
  }
}

const calculatePriceChange = (newPrice: number) => {
  const basePrice = 49.99
  return Number(((newPrice - basePrice) / basePrice * 100).toFixed(1))
}

const updateChartData = () => {
  if (selectedProduct.value !== null) {
    const product = products.value[selectedProduct.value]
    product.history = [...product.history.slice(1), product.price]
  }
}

const getChartData = (index: number) => ({
  labels: ['5m ago', '4m ago', '3m ago', '2m ago', '1m ago', 'Now'],
  datasets: [{
    label: 'Price History',
    data: products.value[index].history,
    borderColor: '#60A5FA',
    tension: 0.4,
    fill: false
  }]
})

const getPriceChangeClass = (change: number) => {
  return change > 0 
    ? 'text-green-400' 
    : change < 0 
    ? 'text-red-400' 
    : 'text-blue-200'
}

const getPriceComparisonClass = (price: number) => {
  if (selectedProduct.value === null) return 'text-blue-200'
  const currentPrice = products.value[selectedProduct.value].price
  return price > currentPrice 
    ? 'text-green-400' 
    : price < currentPrice 
    ? 'text-red-400' 
    : 'text-blue-200'
}

const formatPriceChange = (change: number) => {
  return change > 0 
    ? `+${change}%` 
    : `${change}%`
}

const getMarketPosition = () => {
  if (selectedProduct.value === null) return 'N/A'
  const currentPrice = products.value[selectedProduct.value].price
  const higherPrices = competitors.value.filter(c => c.price > currentPrice).length
  const position = Math.round((higherPrices / competitors.value.length) * 100)
  return `Top ${position}%`
}
</script>