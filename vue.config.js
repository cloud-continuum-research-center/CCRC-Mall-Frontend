module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://<IP>:<Port>>', // backend server address
      },

    }
  }
}