<template>
  <div class="app-shell">
    <header class="app-header">
      <NuxtLink to="/" class="brand">
        <span class="brand-mark" />
        <span class="brand-text">Aurora<span class="brand-dot">.</span>Shop</span>
      </NuxtLink>
      <nav class="nav">
        <NuxtLink to="/catalog" class="nav-link">Shop</NuxtLink>
        <NuxtLink to="/about" class="nav-link">About</NuxtLink>
      </nav>
      <div class="header-actions">
        <NuxtLink
          v-if="!auth.isAuthenticated"
          to="/auth"
          class="btn ghost"
        >
          Sign in
        </NuxtLink>
        <button
          v-else
          class="btn ghost user-pill"
          type="button"
          @click="auth.logout()"
        >
          {{ auth.user?.name }}
          <span class="dot" />
          Sign out
        </button>
        <NuxtLink to="/cart" class="icon-btn" aria-label="Cart">
          <span class="icon-cart" />
        </NuxtLink>
      </div>
    </header>

    <main class="app-main">
      <slot />
      <transition name="toast-fade">
        <div v-if="toast.message" class="toast">
          {{ toast.message }}
        </div>
      </transition>
    </main>

    <footer class="app-footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <span class="brand-text">Aurora<span class="brand-dot">.</span>Shop</span>
          <p>Minimal everyday pieces for a considered wardrobe.</p>
        </div>
        <div class="footer-columns">
          <div class="footer-col">
            <p class="heading">Shop</p>
            <NuxtLink to="/catalog">All products</NuxtLink>
            <NuxtLink to="/cart">View cart</NuxtLink>
          </div>
          <div class="footer-col">
            <p class="heading">Support</p>
            <NuxtLink to="/shipping-returns">Shipping &amp; returns</NuxtLink>
            <NuxtLink to="/care-guide">Care guide</NuxtLink>
          </div>
          <div class="footer-col">
            <p class="heading">Account</p>
            <NuxtLink to="/auth">Sign in</NuxtLink>
          </div>
        </div>
      </div>
      <p class="footnote">© {{ new Date().getFullYear() }} Aurora.Shop. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useToast } from '~/composables/useToast'
import { useAuthStore } from '~/stores/auth'

const { toast } = useToast()
const auth = useAuthStore()
</script>
