// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','nvd3'])
.controller('MainController', MainController)



.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

function MainController() {  
  var vm = this;

  vm.options = {  
    chart: {
      type: "pieChart",
      height: 500,
      x: function(d){return d.key;},
      y: function(d){return d.y;},
      showLabels: false,
      duration: 500,
      labelThreshold: 0.01,
      labelSunbeamLayout: true,
      width: 320,
      title: "Sweet!",
      donut: true,
      tooltips: false,
      legend: {
        margin: {
          top: 5,
          right: 0,
          bottom: 5,
          left: 0
        }
      }
    }
  };

  vm.data = [  
    {
      key: "Angular",
      y: 18567
    },
    {
      key: "Backbone",
      y: 16651
    },
    {
      key: "Ember",
      y: 9023
    },
    {
      key: "Flight",
      y: 4655
    },
    {
      key: "Knockout",
      y: 4487
    },
    {
      key: "Marionette",
      y: 4261
    },
    {
      key: "React",
      y: 3691
    }
  ];
}