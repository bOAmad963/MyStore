export type ToastState = {
  message: string | null
}

export function useToast() {
  const toast = useState<ToastState>('toast', () => ({
    message: null
  }))

  function show(message: string, duration = 2500) {
    toast.value.message = message
    if (duration > 0) {
      setTimeout(() => {
        toast.value.message = null
      }, duration)
    }
  }

  return {
    toast,
    show
  }
}

