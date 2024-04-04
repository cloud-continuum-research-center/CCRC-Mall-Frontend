# CCRC-Mall-Frontend

### Project setup
```
npm install
npm install -g @vue/cli
```

### Create Project
```
vue create frontend
```

### Install packages
```
npm install vue-router
npm install vuex --save
npm install axios
npm install --save gsplat
```

### Start server
```
npm init
npm run serve
```
### Edit vue.config.js to connet with back-end server
```
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        //target: 'back-end server',
      },

    }
  }
}
```
