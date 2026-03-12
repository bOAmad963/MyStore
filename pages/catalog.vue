<template>
  <div class="page-shell catalog-page">
    <header class="catalog-header">
      <div>
        <h1>Collection</h1>
        <p>Curated pieces designed to mix, match, and wear on repeat.</p>
      </div>
      <p class="catalog-count">{{ products.length }} items</p>
    </header>

    <section class="catalog-grid">
      <article
        v-for="product in products"
        :key="product.id"
        class="product-card"
      >
        <NuxtLink :to="`/product/${product.slug}`" class="product-media">
          <img :src="product.image" :alt="product.name" />
          <span v-if="product.tag" class="badge">{{ product.tag }}</span>
        </NuxtLink>
        <div class="product-info">
          <NuxtLink :to="`/product/${product.slug}`" class="name">
            {{ product.name }}
          </NuxtLink>
          <p class="price">${{ product.price }}</p>
        </div>
        <button class="btn add-btn" type="button" @click="handleAdd(product)">
          Add to cart
        </button>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
import { products } from '~/data/products'
import { useCartStore } from '~/stores/cart'
import { useAuthStore } from '~/stores/auth'
import { useToast } from '~/composables/useToast'

const cart = useCartStore()
const auth = useAuthStore()
const { show } = useToast()

function handleAdd(product: (typeof products)[number]) {
  if (!auth.isAuthenticated) {
    show('Please sign in to add items to your cart')
    return
  }
  cart.add(product, 1)
  show(`Added “${product.name}” to your cart`)
}
</script>

<style scoped>
.catalog-page {
  padding-bottom: 32px;
}

.catalog-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 20px;
}

.catalog-header h1 {
  margin: 0 0 4px;
  font-size: 1.6rem;
}

.catalog-header p {
  margin: 0;
  color: var(--muted);
  font-size: 0.92rem;
}

.catalog-count {
  color: var(--muted);
  font-size: 0.85rem;
}

.catalog-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.product-card {
  border-radius: var(--radius-md);
  padding: 10px;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.45);
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.product-media {
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  aspect-ratio: 4 / 5;
  display: block;
}

.product-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transform: scale(1.02);
  transition: transform 0.25s ease;
}

.product-media:hover img {
  transform: scale(1.06);
}

.badge {
  position: absolute;
  inset-inline: 10px;
  top: 10px;
  padding: 4px 8px;
  border-radius: 999px;
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.6);
}

.product-info {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 10px;
}

.product-info .name {
  font-size: 0.92rem;
}

.product-info .price {
  font-size: 0.9rem;
}

.add-btn {
  margin-top: 4px;
  width: 100%;
  justify-content: center;
  font-size: 0.82rem;
}

@media (max-width: 900px) {
  .catalog-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .catalog-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .catalog-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>

