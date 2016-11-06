export const baseURL = {
  production: 'http://api.hayaggu.com',
  dev: 'http://api.hayaggu.com',
}[process.env.NODE_ENV || 'production'];