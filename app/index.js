// router dependency
var director = require('director');
// converts a string into a dom element
var domify = require('domify');
// App Framework....
var Vue = require('vue');
// # app Document
//
// This document contains the app container
var index = require('./index.html');
// must add the doc to the body before
// initializing the Vue App
document.body.appendChild(domify(index));

// # view models...
//
// The view models are declared with the
// component registration method
Vue.component('home', require('./home'));
Vue.component('about', require('./about'));

// # main app
//
// Simply binds the app object to the `dom`
var app = new Vue({
  el: '#app',
  data: {
    currentView: 'home'
  }
});

// # router
//
// to switch views, all you have to do is change
// the current view
var router = director.Router({
  '/': function() { app.currentView = 'home'; },
  '/about': function() { app.currentView = 'about'; }
});
router.init();
