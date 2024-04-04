module.exports = {
  devServer: {
    proxy: {
      '/api': {
        //target: 'http://13.209.75.28',
        target: 'http://localhost:8000',
      },

    }
  }
}