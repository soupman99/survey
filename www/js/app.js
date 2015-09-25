// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }






      console.log('booting')
      mixpanel.init('eb076fd1f393d8b2e37a08c523e7fe4d', function(success){
        console.log(JSON.stringify(success))
        console.log('mixpanel setup')

      }, function(error){
        console.log(JSON.stringify(error))
                console.log('mixpanel setup error')


      })


     mixpanel.people.identify(ionic.Platform.device().uuid, function(success){
          console.log('mixpanel alias success')


      }, function(error){
                  console.log('mixpanel alias error')


      })



   mixpanel.people.set({'First Login Date':new Date()});


    mixpanel.track('Account Created', {'Account Type':'Paid'});

      mixpanel.track("test view", {'page':'fake page title'}, function(success){
          console.log('mixpanel track success')


      }, function(error){
                  console.log('mixpanel track error')


      })


       mixpanel.flush();

       
//crashes
    mixpanel.showSurvey(function(success){
          console.log('mixpanel survey success')


      }, function(error){
                  console.log('mixpanel survey error')


      });




  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});
