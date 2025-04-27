import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
} from 'chart.js'
import './style.css'
import App from './App.vue'
import { router } from './router'

// Register Chart.js components globally
ChartJS.register(
  CategoryScale,  // Register CategoryScale first
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')