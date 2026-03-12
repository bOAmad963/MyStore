import { defineStore } from 'pinia'
import type { Product } from '~/data/products'

type CartItem = {
  product: Product
  quantity: number
}

type State = {
  items: CartItem[]
}

export const useCartStore = defineStore('cart', {
  state: (): State => ({
    items: []
  }),
  getters: {
    itemCount: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
    subtotal: (state) => state.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    shipping(): number {
      return this.subtotal >= 80 || this.subtotal === 0 ? 0 : 8
    },
    total(): number {
      return this.subtotal + this.shipping
    }
  },
  actions: {
    add(product: Product, quantity = 1) {
      const existing = this.items.find((item) => item.product.id === product.id)
      if (existing) {
        existing.quantity += quantity
      } else {
        this.items.push({ product, quantity })
      }
    },
    remove(productId: number) {
      this.items = this.items.filter((item) => item.product.id !== productId)
    },
    setQuantity(productId: number, quantity: number) {
      if (quantity <= 0) {
        this.remove(productId)
        return
      }
      const item = this.items.find((i) => i.product.id === productId)
      if (item) {
        item.quantity = quantity
      }
    },
    clear() {
      this.items = []
    }
  }
})

