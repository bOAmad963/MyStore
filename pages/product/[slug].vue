<template>
  <div v-if="product" class="page-shell product-page">
    <div class="product-layout">
      <div class="product-media">
        <img :src="product.image" :alt="product.name" />
      </div>
      <section class="product-details">
        <p class="pill small">Aurora · Essentials</p>
        <h1>{{ product.name }}</h1>
        <p class="price">${{ product.price }}</p>
        <p class="description">
          {{ product.description }}
        </p>

        <form class="purchase" @submit.prevent="handleAdd">
          <label class="qty">
            Quantity
            <input
              v-model.number="quantity"
              type="number"
              min="1"
              max="10"
            >
          </label>
          <button class="btn primary" type="submit">
            Add to cart
          </button>
        </form>

        <ul class="meta">
          <li>Free shipping over $80</li>
          <li>Estimated delivery: 2–4 business days</li>
          <li>30‑day returns</li>
        </ul>
      </section>
    </div>
  </div>
  <div v-else class="page-shell">
    <p>Product not found.</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { findProductBySlug } from '~/data/products'
import { useCartStore } from '~/stores/cart'
import { useAuthStore } from '~/stores/auth'
import { useToast } from '~/composables/useToast'

const route = useRoute()
const cart = useCartStore()
const auth = useAuthStore()
const { show } = useToast()

const slug = route.params.slug as string
const product = findProductBySlug(slug)

const quantity = ref(1)

function handleAdd() {
  if (!product) return
  if (!auth.isAuthenticated) {
    show('Please sign in to add items to your cart')
    return
  }
  if (quantity.value < 1) quantity.value = 1
  cart.add(product, quantity.value)
  show(`Added ${quantity.value} × “${product.name}” to your cart`)
}
</script>

<style scoped>
.product-page {
  padding-bottom: 40px;
}

.product-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  gap: 36px;
}

.product-media {
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(148, 163, 184, 0.5);
  background: rgba(15, 23, 42, 0.95);
}

.product-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.product-details h1 {
  margin: 8px 0 6px;
  font-size: 1.7rem;
}

.product-details .price {
  margin: 0 0 12px;
  font-size: 1.1rem;
}

.product-details .description {
  color: var(--muted);
  font-size: 0.95rem;
}

.pill.small {
  font-size: 0.68rem;
  margin-bottom: 6px;
}

.purchase {
  margin-top: 16px;
  display: flex;
  align-items: flex-end;
  gap: 10px;
}

.qty {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 0.8rem;
  color: var(--muted);
}

.qty input {
  width: 72px;
  padding: 6px 8px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(15, 23, 42, 0.95);
  color: var(--text);
}

.meta {
  list-style: none;
  padding: 0;
  margin: 18px 0 0;
  color: var(--muted);
  font-size: 0.85rem;
  display: grid;
  gap: 4px;
}

@media (max-width: 900px) {
  .product-layout {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>

