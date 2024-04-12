module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://15.164.170.196',
        //target: 'http://localhost:8000',
      },

    }
  }
}