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
      type: 'multiBarHorizontalChart',
      height: 450,
      x: function(d){return d.label;},
      y: function(d){return d.value;},
      showControls: true,
      showValues: true,
      duration: 500,
      xAxis: {
        showMaxMin: false
      },
      yAxis: {
        axisLabel: 'GitHub Stars',
        tickFormat: function(d) {
          return d3.format(',.2f')(d);
        }
      }
    }
  };

  var stars = {  
    "Angular" : [18567 , 44913],
    "Backbone" : [16651 , 23633],
    "Ember" : [9023 , 15249],
    "Flight" : [4655 , 6380],
    "Knockout" : [4487 , 6990],
    "Marionette" : [4261 , 6629],
    "React" : [3691 , 32656]
  };

  vm.data = [  
    {
      "key": "As of Jan '14",
      "color": "#1f77b4",
      "values": [
         { 
           "label" : "Angular" , 
           "value" : stars.Angular[0] 
         },
         { 
           "label" : "Backbone" , 
           "value" : stars.Backbone[0] 
         },
         { 
           "label" : "Ember" , 
           "value" : stars.Ember[0] 
         },
         { 
           "label" : "Flight" , 
           "value" : stars.Flight[0] 
         },
         { 
           "label" : "Knockout" , 
           "value" : stars.Knockout[0] 
         },
         { 
           "label" : "Marionette" , 
           "value" : stars.Marionette[0] 
         },
         { 
           "label" : "React" , 
           "value" : stars.React[0] 
         }
      ]
    },
    {
      "key": "As of Dec '15",
      "color": "#2b93db",
      "values": [
         { 
           "label" : "Angular" , 
           "value" : stars.Angular[1] - stars.Angular[0] 
         },
         { 
           "label" : "Backbone" , 
           "value" : stars.Backbone[1] - stars.Backbone[0] 
         },
         { 
           "label" : "Ember" , 
           "value" : stars.Ember[1] - stars.Ember[0] 
         },
         { 
           "label" : "Flight" , 
           "value" : stars.Flight[1] - stars.Flight[0] 
         },
         { 
           "label" : "Knockout" , 
           "value" : stars.Knockout[1] - stars.Knockout[0] 
         },
         { 
           "label" : "Marionette" , 
           "value" : stars.Marionette[1] - stars.Marionette[0] 
         },
         { 
           "label" : "React" , 
           "value" : stars.React[1] - stars.React[0] 
         }
      ]
    }
  ];
}