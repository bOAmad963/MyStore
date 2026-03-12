<template>
  <div class="page-shell cart-page">
    <header class="cart-header">
      <h1>Cart</h1>
      <p v-if="cart.itemCount === 0" class="muted">Your cart is empty.</p>
      <p v-else class="muted">
        {{ cart.itemCount }} item<span v-if="cart.itemCount > 1">s</span> in your bag.
      </p>
    </header>

    <div v-if="cart.itemCount > 0" class="cart-layout">
      <section class="cart-items">
        <article
          v-for="item in cart.items"
          :key="item.product.id"
          class="cart-item"
        >
          <div class="thumb">
            <img :src="item.product.image" :alt="item.product.name">
          </div>
          <div class="info">
            <h2>{{ item.product.name }}</h2>
            <p class="price">${{ item.product.price }}</p>
            <label class="qty">
              Qty
              <input
                type="number"
                min="1"
                max="10"
                :value="item.quantity"
                @change="onQuantityChange(item.product.id, $event)"
              >
            </label>
          </div>
          <button class="remove" type="button" @click="cart.remove(item.product.id)">
            Remove
          </button>
        </article>
      </section>

      <aside class="summary">
        <h2>Summary</h2>
        <div class="row">
          <span>Subtotal</span>
          <span>${{ cart.subtotal }}</span>
        </div>
        <div class="row">
          <span>Shipping</span>
          <span v-if="cart.shipping === 0">Free</span>
          <span v-else>${{ cart.shipping }}</span>
        </div>
        <div class="row total">
          <span>Total</span>
          <span>${{ cart.total }}</span>
        </div>
        <button class="btn primary full" type="button" @click="fakeCheckout">
          Continue to checkout
        </button>
        <p v-if="showThanks" class="muted small">
          This is a demo checkout. No real payment will be processed.
        </p>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCartStore } from '~/stores/cart'

const cart = useCartStore()
const showThanks = ref(false)

function onQuantityChange(productId: number, event: Event) {
  const target = event.target as HTMLInputElement
  const value = Number(target.value)
  cart.setQuantity(productId, value)
}

function fakeCheckout() {
  showThanks.value = true
}
</script>

<style scoped>
.cart-page {
  padding-bottom: 32px;
}

.cart-header h1 {
  margin-bottom: 4px;
}

.muted {
  color: var(--muted);
}

.muted.small {
  font-size: 0.8rem;
  margin-top: 8px;
}

.cart-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr);
  gap: 26px;
  margin-top: 18px;
}

.cart-items {
  display: grid;
  gap: 12px;
}

.cart-item {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 12px;
  padding: 10px;
  border-radius: var(--radius-md);
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.45);
}

.thumb {
  width: 82px;
  height: 96px;
  overflow: hidden;
  border-radius: 10px;
}

.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info h2 {
  margin: 0 0 4px;
  font-size: 0.95rem;
}

.info .price {
  margin: 0 0 8px;
  font-size: 0.9rem;
}

.qty {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.82rem;
  color: var(--muted);
}

.qty input {
  width: 60px;
  padding: 4px 8px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(15, 23, 42, 0.95);
  color: var(--text);
}

.remove {
  background: none;
  border: none;
  color: var(--muted);
  font-size: 0.8rem;
  cursor: pointer;
}

.summary {
  border-radius: var(--radius-md);
  padding: 14px 14px 16px;
  background: rgba(15, 23, 42, 0.95);
  border: 1px solid rgba(148, 163, 184, 0.45);
}

.summary h2 {
  margin: 0 0 12px;
  font-size: 1rem;
}

.row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 0.9rem;
}

.row.total {
  margin-top: 6px;
  font-weight: 600;
}

.btn.full {
  width: 100%;
  justify-content: center;
  margin-top: 6px;
}

@media (max-width: 900px) {
  .cart-layout {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>

