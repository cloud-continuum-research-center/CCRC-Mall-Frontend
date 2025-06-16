module.exports = {
  devServer: {
    proxy: {
      '/api': {
<<<<<<< HEAD
        //target: 'http://13.209.75.28',
        target: 'http://localhost:8000',
=======
        target: 'http://<IP>:<Port>>', // backend server address
>>>>>>> master
      },

    }
  }
}