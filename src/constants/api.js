export const baseURL = {
  production: 'http://52.79.173.235',
  dev: 'http://52.79.173.235',
}[process.env.NODE_ENV || 'production'];