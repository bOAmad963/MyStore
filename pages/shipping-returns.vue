<template>
  <div class="page-shell info-page">
    <header class="info-header">
      <h1>Shipping &amp; returns</h1>
      <p>Fast, tracked delivery and easy returns.</p>
    </header>

    <section class="info-stack">
      <article class="info-card">
        <h2>Shipping</h2>
        <ul>
          <li>Orders ship in 1–2 business days.</li>
          <li>Estimated delivery: 2–4 business days.</li>
          <li>Free shipping on orders over $80.</li>
        </ul>
      </article>

      <article class="info-card">
        <h2>Returns</h2>
        <ul>
          <li>30‑day returns from delivery date.</li>
          <li>Items must be unworn with original tags.</li>
          <li>Refunds are issued to the original payment method.</li>
        </ul>
      </article>
    </section>
  </div>
</template>

<style scoped>
.info-page {
  padding-bottom: 40px;
}

.info-header h1 {
  margin: 0 0 6px;
  font-size: 1.6rem;
}

.info-header p {
  margin: 0;
  color: var(--muted);
  max-width: 680px;
}

.info-stack {
  margin-top: 18px;
  display: grid;
  gap: 16px;
}

.info-card {
  padding: 14px 14px 16px;
  border-radius: var(--radius-md);
  border: 1px solid rgba(148, 163, 184, 0.4);
  background: rgba(15, 23, 42, 0.9);
}

.info-card h2 {
  margin: 0 0 6px;
  font-size: 1rem;
}

.info-card ul {
  margin: 0;
  padding-left: 18px;
  color: var(--muted);
  display: grid;
  gap: 6px;
  font-size: 0.9rem;
}
</style>

