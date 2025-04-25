<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-white">Products</h1>
        <button @click="showAddProduct = true" 
                class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
          Add Product
        </button>
      </div>

      <!-- Loading State -->
      <div v-if="pricingStore.loading" class="text-white text-center py-8">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
        <p class="mt-4">Loading products...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="pricingStore.error" class="text-red-400 text-center py-8">
        {{ pricingStore.error }}
      </div>

      <!-- Empty State -->
      <div v-else-if="pricingStore.products.length === 0" 
           class="text-center py-12 backdrop-blur-lg bg-white/5 rounded-lg">
        <div class="mx-auto h-24 w-24 text-gray-400">
          <svg class="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" 
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>
        <h3 class="mt-4 text-xl font-medium text-white">No products yet</h3>
        <p class="mt-2 text-blue-200">Get started by adding your first product</p>
        <button @click="showAddProduct = true"
                class="mt-4 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
          Add Your First Product
        </button>
      </div>

      <!-- Product Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="product in pricingStore.products" :key="product.id" 
             class="group backdrop-blur-lg bg-white/10 rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:bg-white/20">
          <div class="flex justify-between items-start mb-4">
            <h3 class="text-lg font-semibold text-white">{{ product.name }}</h3>
            <div class="flex space-x-2">
              <button @click="editProduct(product)" 
                      class="opacity-0 group-hover:opacity-100 transition-opacity p-2 text-blue-400 hover:text-blue-300">
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
              <button @click="confirmDelete(product)" 
                      class="opacity-0 group-hover:opacity-100 transition-opacity p-2 text-red-400 hover:text-red-300">
                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
          
          <div class="space-y-3">
            <div class="flex justify-between items-center">
              <span class="text-blue-200">Current Price</span>
              <span class="text-lg font-semibold text-white">${{ product.current_price }}</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-blue-200">Min Price</span>
              <span class="text-white">${{ product.min_price }}</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-blue-200">Max Price</span>
              <span class="text-white">${{ product.max_price }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Add/Edit Product Modal -->
      <TransitionRoot appear :show="showAddProduct || showEditProduct" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10">
          <div class="fixed inset-0 bg-black/75" />
          
          <div class="fixed inset-0 overflow-y-auto">
            <div class="flex min-h-full items-center justify-center p-4">
              <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-900 p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle as="h3" class="text-lg font-medium leading-6 text-white">
                  {{ showEditProduct ? 'Edit Product' : 'Add New Product' }}
                </DialogTitle>

                <form @submit.prevent="handleSubmit" class="mt-4 space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-blue-200">
                      Product Name
                    </label>
                    <input v-model="formData.name" type="text" required
                           class="mt-1 block w-full rounded-lg bg-gray-800 border-gray-700 text-white" />
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-blue-200">
                      Current Price
                    </label>
                    <input v-model.number="formData.current_price" type="number" step="0.01" required
                           class="mt-1 block w-full rounded-lg bg-gray-800 border-gray-700 text-white" />
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-blue-200">
                      Minimum Price
                    </label>
                    <input v-model.number="formData.min_price" type="number" step="0.01" required
                           class="mt-1 block w-full rounded-lg bg-gray-800 border-gray-700 text-white" />
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-blue-200">
                      Maximum Price
                    </label>
                    <input v-model.number="formData.max_price" type="number" step="0.01" required
                           class="mt-1 block w-full rounded-lg bg-gray-800 border-gray-700 text-white" />
                  </div>

                  <div class="mt-6 flex justify-end space-x-3">
                    <button type="button" @click="closeModal"
                            class="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                      Cancel
                    </button>
                    <button type="submit"
                            class="bg-blue-500 px-4 py-2 text-sm font-medium text-white rounded-lg hover:bg-blue-600 transition-colors">
                      {{ showEditProduct ? 'Save Changes' : 'Add Product' }}
                    </button>
                  </div>
                </form>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>

      <!-- Delete Confirmation Modal -->
      <TransitionRoot appear :show="showDeleteConfirm" as="template">
        <Dialog as="div" @close="showDeleteConfirm = false" class="relative z-10">
          <div class="fixed inset-0 bg-black/75" />
          
          <div class="fixed inset-0 overflow-y-auto">
            <div class="flex min-h-full items-center justify-center p-4">
              <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-900 p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle as="h3" class="text-lg font-medium leading-6 text-white">
                  Delete Product
                </DialogTitle>

                <div class="mt-4">
                  <p class="text-blue-200">
                    Are you sure you want to delete this product? This action cannot be undone.
                  </p>
                </div>

                <div class="mt-6 flex justify-end space-x-3">
                  <button @click="showDeleteConfirm = false"
                          class="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                    Cancel
                  </button>
                  <button @click="deleteProduct"
                          class="bg-red-500 px-4 py-2 text-sm font-medium text-white rounded-lg hover:bg-red-600 transition-colors">
                    Delete
                  </button>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionRoot } from '@headlessui/vue'
import { usePricingStore } from '../stores/pricing'

const pricingStore = usePricingStore()
const showAddProduct = ref(false)
const showEditProduct = ref(false)
const showDeleteConfirm = ref(false)
const selectedProduct = ref<any>(null)

const formData = ref({
  name: '',
  current_price: 0,
  min_price: 0,
  max_price: 0
})

onMounted(async () => {
  await pricingStore.fetchProducts()
})

const closeModal = () => {
  showAddProduct.value = false
  showEditProduct.value = false
  resetForm()
}

const resetForm = () => {
  formData.value = {
    name: '',
    current_price: 0,
    min_price: 0,
    max_price: 0
  }
  selectedProduct.value = null
}

const editProduct = (product: any) => {
  selectedProduct.value = product
  formData.value = {
    name: product.name,
    current_price: product.current_price,
    min_price: product.min_price,
    max_price: product.max_price
  }
  showEditProduct.value = true
}

const confirmDelete = (product: any) => {
  selectedProduct.value = product
  showDeleteConfirm.value = true
}

const deleteProduct = async () => {
  if (selectedProduct.value) {
    await pricingStore.deleteProduct(selectedProduct.value.id)
    showDeleteConfirm.value = false
    selectedProduct.value = null
  }
}

const handleSubmit = async () => {
  if (showEditProduct.value && selectedProduct.value) {
    await pricingStore.updateProduct(selectedProduct.value.id, formData.value)
  } else {
    await pricingStore.addProduct(formData.value)
  }
  closeModal()
}
</script>