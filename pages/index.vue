<template>
  <div class="page-shell home-page">
    <section class="hero">
      <div class="hero-copy">
        <div class="hero-tags">
          <span class="pill">New · Collection</span>
          <span class="pill">Free shipping over $80</span>
        </div>
        <h1>Everyday essentials for modern style.</h1>
        <p>
          Aurora.Shop is a minimal online boutique for clean, timeless pieces.
          Discover curated looks designed to feel premium, without the luxury price tag.
        </p>
        <div class="hero-actions">
          <NuxtLink to="/catalog" class="btn primary">
            Browse collection
          </NuxtLink>
          <NuxtLink to="/cart" class="btn ghost">
            View cart
          </NuxtLink>
        </div>
      </div>

      <aside class="hero-showcase">
        <div class="hero-showcase-inner">
          <div class="hero-grid">
            <article class="hero-card">
              <span>Carefully edited range</span>
              <strong>Pieces that are easy to mix, match, and wear on repeat.</strong>
            </article>
            <article class="hero-card">
              <span>Made for every day</span>
              <strong>Comfortable fits in breathable fabrics for real life.</strong>
            </article>
            <article class="hero-card">
              <span>Fast, tracked shipping</span>
              <strong>Free shipping over $80 with tracked delivery.</strong>
            </article>
          </div>
          <div class="hero-mock">
            <span>New arrivals · Essentials · Accessories</span>
            <span>Ships in 2–4 business days</span>
          </div>
        </div>
      </aside>
    </section>

    <section class="home-section home-featured">
      <header class="section-header">
        <div>
          <p class="eyebrow">Featured</p>
          <h2>Most‑loved pieces</h2>
        </div>
        <NuxtLink to="/catalog" class="link-inline">
          View all
        </NuxtLink>
      </header>
      <div class="featured-grid">
        <NuxtLink
          v-for="product in featuredProducts"
          :key="product.id"
          :to="`/product/${product.slug}`"
          class="featured-card"
        >
          <div class="img-wrap">
            <img :src="product.image" :alt="product.name">
          </div>
          <div class="body">
            <p class="name">
              {{ product.name }}
            </p>
            <p class="price">${{ product.price }}</p>
          </div>
        </NuxtLink>
      </div>
    </section>

    <section class="home-section home-perks">
      <div class="perk">
        <h3>Free shipping over $80</h3>
        <p>Automatically applied at checkout on all qualifying orders.</p>
      </div>
      <div class="perk">
        <h3>30‑day returns</h3>
        <p>Try pieces at home and send back what doesn’t work.</p>
      </div>
      <div class="perk">
        <h3>Secure checkout</h3>
        <p>Encrypted checkout flow for peace of mind.</p>
      </div>
    </section>

    <section class="home-section home-journal">
      <header class="section-header">
        <div>
          <p class="eyebrow">From the journal</p>
          <h2>Style notes</h2>
        </div>
      </header>
      <div class="journal-grid">
        <article class="journal-card">
          <p class="meta">Guides</p>
          <h3>Building a minimal wardrobe</h3>
          <p>
            Start with a small edit of pieces you actually reach for, then layer in
            texture, accessories, and colour slowly.
          </p>
        </article>
        <article class="journal-card">
          <p class="meta">Care</p>
          <h3>How to make cotton last</h3>
          <p>
            Wash on cool, skip the dryer when you can, and fold knits rather than
            hanging them to keep their shape.
          </p>
        </article>
        <article class="journal-card">
          <p class="meta">Occasions</p>
          <h3>Desk‑to‑dinner outfits</h3>
          <p>
            Swap sneakers for leather shoes and add a blazer over your favourite tee
            for an instant lift.
          </p>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { products } from '~/data/products'

const featuredProducts = products.slice(0, 3)
</script>

<style scoped>
.home-page {
  padding-bottom: 40px;
}

.home-section {
  margin-top: 36px;
}

.section-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 18px;
}

.section-header h2 {
  margin: 4px 0 0;
  font-size: 1.4rem;
}

.eyebrow {
  margin: 0;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--muted);
}

.link-inline {
  font-size: 0.85rem;
  color: var(--muted);
  text-decoration: underline;
  text-underline-offset: 4px;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.featured-card {
  border-radius: var(--radius-md);
  padding: 10px;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.45);
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.featured-card .img-wrap {
  border-radius: 14px;
  overflow: hidden;
  aspect-ratio: 4 / 5;
}

.featured-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.featured-card .body {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 10px;
}

.featured-card .name {
  font-size: 0.9rem;
}

.featured-card .price {
  font-size: 0.9rem;
}

.home-perks {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.perk {
  padding: 14px 14px 16px;
  border-radius: var(--radius-md);
  border: 1px solid rgba(148, 163, 184, 0.4);
  background: rgba(15, 23, 42, 0.9);
}

.perk h3 {
  margin: 0 0 4px;
  font-size: 0.98rem;
}

.perk p {
  margin: 0;
  font-size: 0.86rem;
  color: var(--muted);
}

.home-journal .journal-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.journal-card {
  padding: 14px 14px 16px;
  border-radius: var(--radius-md);
  border: 1px solid rgba(148, 163, 184, 0.4);
  background: rgba(15, 23, 42, 0.9);
}

.journal-card .meta {
  margin: 0 0 4px;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--muted);
}

.journal-card h3 {
  margin: 0 0 6px;
  font-size: 0.98rem;
}

.journal-card p {
  margin: 0;
  font-size: 0.86rem;
  color: var(--muted);
}

@media (max-width: 900px) {
  .featured-grid,
  .home-perks,
  .home-journal .journal-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .featured-grid,
  .home-perks,
  .home-journal .journal-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
