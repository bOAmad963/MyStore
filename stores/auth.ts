import { defineStore } from 'pinia'

type User = {
  name: string
  email: string
}

type State = {
  user: User | null
}

export const useAuthStore = defineStore('auth', {
  state: (): State => ({
    user: null
  }),
  getters: {
    isAuthenticated: (state) => !!state.user
  },
  actions: {
    login(email: string, _password: string) {
      // Fake login for demo purposes
      this.user = {
        email,
        name: email.split('@')[0] || 'Guest'
      }
    },
    logout() {
      this.user = null
    }
  }
})

