const withOffline = require('next-offline')

module.exports = withOffline({
  images: {
    domains: ['avatars1.githubusercontent.com'],
  },
  workboxOpts: {
    runtimeCaching: [
      {
        urlPattern: /.jpg$/,
        handler: 'CacheFirst'
      },
      {
        urlPattern: /api/,
        handler: 'NetworkFirst',
        options: {
          cacheableResponse: {
            statuses: [0, 200],
            headers: {
              'x-test': 'true'
            }
          }
        }
      }
    ]
  }
})