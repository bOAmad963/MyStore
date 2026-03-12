<template>
  <div class="page-shell info-page">
    <header class="info-header">
      <h1>Care guide</h1>
      <p>A few simple steps to keep your pieces looking fresh, longer.</p>
    </header>

    <section class="info-grid">
      <article class="info-card">
        <h2>Cotton</h2>
        <p>Wash cold, gentle cycle. Air dry when possible to reduce shrinkage.</p>
      </article>
      <article class="info-card">
        <h2>Knits</h2>
        <p>Fold rather than hang. Use a delicates bag and avoid high heat drying.</p>
      </article>
      <article class="info-card">
        <h2>Footwear</h2>
        <p>Wipe clean and let dry naturally. Store away from direct sunlight.</p>
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

.info-grid {
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
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

.info-card p {
  margin: 0;
  color: var(--muted);
  font-size: 0.9rem;
}

@media (max-width: 900px) {
  .info-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .info-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>

