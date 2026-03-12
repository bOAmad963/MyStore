<template>
  <div class="page-shell auth-page">
    <section class="auth-card">
      <header>
        <h1>Sign in</h1>
        <p>Use your email to access your Aurora.Shop account.</p>
      </header>

      <form class="auth-form" @submit.prevent="onSubmit">
        <label>
          Email
          <input v-model="email" type="email" required placeholder="you@example.com">
        </label>

        <label>
          Password
          <input v-model="password" type="password" required minlength="4" placeholder="••••••••">
        </label>

        <button class="btn primary full" type="submit">
          Continue
        </button>
      </form>

      <p class="hint">
        This is a demo sign‑in. Any email and password will work.
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '~/stores/auth'
import { useToast } from '~/composables/useToast'

const email = ref('')
const password = ref('')

const router = useRouter()
const auth = useAuthStore()
const { show } = useToast()

function onSubmit() {
  auth.login(email.value, password.value)
  show('Signed in successfully')
  router.push('/')
}
</script>

<style scoped>
.auth-page {
  display: flex;
  justify-content: center;
  align-items: center;
}

.auth-card {
  width: 100%;
  max-width: 420px;
  padding: 20px 22px 22px;
  border-radius: var(--radius-lg);
  background: rgba(15, 23, 42, 0.98);
  border: 1px solid rgba(148, 163, 184, 0.55);
  box-shadow: var(--shadow-soft);
}

.auth-card header h1 {
  margin: 0 0 4px;
  font-size: 1.4rem;
}

.auth-card header p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--muted);
}

.auth-form {
  margin-top: 16px;
  display: grid;
  gap: 10px;
}

.auth-form label {
  display: grid;
  gap: 4px;
  font-size: 0.85rem;
  color: var(--muted);
}

input {
  padding: 8px 10px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(15, 23, 42, 0.96);
  color: var(--text);
  font-size: 0.9rem;
}

.btn.full {
  margin-top: 4px;
  width: 100%;
  justify-content: center;
}

.hint {
  margin-top: 10px;
  font-size: 0.8rem;
  color: var(--muted);
  text-align: center;
}
</style>

