import { defineStore } from 'pinia'
import { supabase } from '../supabase'

interface Product {
  id: string
  name: string
  current_price: number
  min_price: number
  max_price: number
  created_at?: string
  updated_at?: string
}

export const usePricingStore = defineStore('pricing', {
  state: () => ({
    products: [] as Product[],
    competitors: [],
    priceHistory: [],
    loading: false,
    error: null as string | null,
  }),
  
  actions: {
    async fetchProducts() {
      this.loading = true
      this.error = null
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .order('created_at', { ascending: false })
        
        if (error) throw error
        this.products = data || []
      } catch (err: any) {
        this.error = err.message
        console.error('Error fetching products:', err)
      } finally {
        this.loading = false
      }
    },
    
    async addProduct(product: Omit<Product, 'id' | 'created_at' | 'updated_at'>) {
      this.loading = true
      this.error = null
      try {
        const { data, error } = await supabase
          .from('products')
          .insert([{
            name: product.name,
            current_price: product.current_price,
            min_price: product.min_price,
            max_price: product.max_price,
            user_id: (await supabase.auth.getUser()).data.user?.id
          }])
          .select()
        
        if (error) throw error
        if (data) {
          this.products = [data[0], ...this.products]
        }
      } catch (err: any) {
        this.error = err.message
        console.error('Error adding product:', err)
      } finally {
        this.loading = false
      }
    },
    
    async updateProduct(productId: string, updates: Partial<Product>) {
      this.loading = true
      this.error = null
      try {
        const { data, error } = await supabase
          .from('products')
          .update(updates)
          .eq('id', productId)
          .select()
        
        if (error) throw error
        
        // Update local state
        const index = this.products.findIndex(p => p.id === productId)
        if (index !== -1 && data) {
          this.products[index] = { ...this.products[index], ...data[0] }
        }
      } catch (err: any) {
        this.error = err.message
        console.error('Error updating product:', err)
      } finally {
        this.loading = false
      }
    },
    
    async deleteProduct(productId: string) {
      this.loading = true
      this.error = null
      try {
        const { error } = await supabase
          .from('products')
          .delete()
          .eq('id', productId)
        
        if (error) throw error
        
        // Update local state
        this.products = this.products.filter(p => p.id !== productId)
      } catch (err: any) {
        this.error = err.message
        console.error('Error deleting product:', err)
      } finally {
        this.loading = false
      }
    }
  }
})