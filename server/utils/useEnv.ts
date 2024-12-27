const environment = {
  get isDevelopment() {
    return process.env.NODE_ENV === 'development'
  },

  get isProduction() {
    return !this.isDevelopment
  },

  get isDev() {
    return import.meta.dev
  },

  get isProd() {
    return !import.meta.dev
  },
}

export const useEnv = () => {
  return environment
}
