# CCRC-Mall-Frontend

### Project setup
```
apt-get update
apt install nodejs
apt install npm

<<<<<<< HEAD
npm install -g @vue/cli
=======
>>>>>>> master
npm install
```


### Start server
```
npm run serve
```

### Edit vue.config.js
```
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        //target: 'back-end server',
      },
    }
  }
}
```
