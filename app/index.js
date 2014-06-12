var director = require('director');
var domify = require('domify');
var Vue = require('vue');
var _ = require('underscore');

var index = require('./index.html');
document.body.appendChild(domify(index));

// controllers...
Vue.component('home', require('./home'));
Vue.component('about', require('./about'));

// main app
var app = new Vue({
  el: '#app',
  data: {
    currentView: 'home'
  }
});

// router...
var router = director.Router({
  '/': function() { app.currentView = 'home'; },
  '/about': function() { app.currentView = 'about'; }
});
router.init();
