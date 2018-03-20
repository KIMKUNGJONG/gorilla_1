window.global = {
  Backand_AppName :'xxxxxxxxxx',
  Backand_Token   :'xxxxxxxxxx', // FROM Backand->Security & Auth->Configuration

  Facebook_APP_ID :'1120976434688101', // Get this from https://developers.facebook.com
  Google_OAUTH_ID :'766870155204-f732lnhhihl8d3fim08hgvjcujf5m9l9.apps.googleusercontent.com', // Get this from https://console.developers.google.com

  GCM_SENDER_ID   :'766870155204', // Get this from https://console.developers.google.com
  GCM_SERVER_KEY  :'AAAAso0F78Q:APA91bHbYge2YpdDqwm95u1Br4FYVCiLbuzTo9k3Iglm0T51j0FWKMGN9gHh5EGHy58JnUbgB5kFRdlpaR7eD990mVL9HI0QN-qZePjFwY9z4uhZlZwmFalhMHt3mU7xyGfXX51bqhv6', // Get this from https://console.developers.google.com
  IONIC_APP_ID : "f39d08eb",

  Admob_Unit_ID   :'xxxxxxxxxx',
  Facebook_APP_token : '1120976434688101|B8z29HtsG94EirJmFsK_qzh9Two',
  my_key : "85EB5623D4ED03B64C152B24E704E150E60C9F69CBD8F57BAF8929A18077EC23",
  Twitterapi_key  :'LJjonP3ip5KYm2GJ6BtQ1h1tw',
  Twitterapi_secret :'CeBVg0AEgtI7uo8sB5PijFOZDP216prKft6yuJxPDIO17kgdYw',
  //var coreurl = "http://192.168.0.7/",
  //var coreurl = "http://192.168.219.100/",
  baseurl : "http://104.238.128.65:8080/index.php",
  appversion : "00100",
  api_key : "",
  user_session : ""
};
/*var config1 = {
  apiKey: "AIzaSyDPYC_7I42z5TBQtfhmKAYP9I3t7m9l04s",
  authDomain: "custom-cargo-144611.firebaseapp.com",
  databaseURL: "https://custom-cargo-144611.firebaseio.com",
  storageBucket: "custom-cargo-144611.appspot.com",
  messagingSenderId: "766870155204"
};
firebase.initializeApp(config1);*/
/*google.setOnLoadCallback(function () {
    angular.bootstrap(document.body, ['gorilla']);
});*/
google.load('visualization', '1', { packages: ['corechart'] });

//var myApp = myApp ||
angular.module('gorilla',[
	'ionic', 'ngMessages', 'ion-floating-menu', 'morphCarousel', 'ionic-letter-avatar', 'ionic.native',
	'gorilla.controllers', 'gorilla.filters', 'angularMoment', 'lz-string', 'base64', //'ionic.cloud', //'firebase',
    'gorilla.factories' , 'gorilla.services', 'gorilla.directives' , 'vsGoogleAutocomplete', 'ion-autocomplete',
    'ngCordova', 'ngCordovaOauth', 'pdf', 'ngFileUpload', 'ion-datetime-picker', 'google-chart', 'ui.rCalendar'
])
.run(function($ionicPlatform, AuthService, $ionicPopup, $cordovaDialogs, $rootScope, $cordovaPushV5, $state) {
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
    /*var device = $cordovaDevice.getDevice();
    $scope.manufacturer = device.manufacturer;
    $scope.model = device.model;
    $scope.platform = device.platform;
    $scope.uuid = device.uuid;

    alert($scope.uuid);
    $scope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams){
            if (User.getCurrentUser() == null) {
                $location.path('/app/login');
            }
        });*/

        if(window.plugins && window.plugins.AdMob) {
            var admob_key = device.platform == "Android" ? "ca-app-pub-7735536663540939/8427740207" : "ca-app-pub-7735536663540939/6920654207";
            var admob = window.plugins.AdMob;
            admob.createBannerView(
                {
                    'publisherId': admob_key,
                    'adSize': admob.AD_SIZE.BANNER,
                    'bannerAtTop': false
                },
                function() {
                    admob.requestAd(
                        { 'isTesting': false },
                        function() {
                            admob.showAd(true);
                        },
                        function() { alert('failed to request ad'); }
                    );
                },
                function() { alert('failed to create banner view'); }
            );
        }
    document.addEventListener('deviceready', function() {
      navigator.splashscreen.hide();
      //alert("serial=" + device.serial);
      window.localStorage.setItem("device.uuid", device.uuid);
      window.localStorage.setItem("device.serial", device.serial);
      window.localStorage.setItem("device.platform", device.platform);
      window.localStorage.setItem("device.version", device.version);
      //AuthService.init();
      {
        var options = {
          android: {
            senderID: window.global.GCM_SENDER_ID
          },
          ios: {
            alert: "true",
            badge: "true",
            sound: "true"
          },
          windows: {}
        };

        // initialize
        $cordovaPushV5.initialize(options).then(function() {
          // start listening for new notifications
          $cordovaPushV5.onNotification();
          // start listening for errors
          $cordovaPushV5.onError();

          // register to get registrationId
          $cordovaPushV5.register().then(function(registrationId) {
            window.localStorage.setItem("fcm.registrationId", registrationId);
            //window.global.registrationId = registrationId;
            //alert("cordovaPushV5 register registrationId=" + registrationId);

          }, function (err) {
              alert("register err=" + JSON.stringify(err));
          });
        }, function (err) {
            alert("initialize err=" + JSON.stringify(err));
        });
      }
    }, false);
    // triggered every time notification received
    $rootScope.$on('$cordovaPushV5:notificationReceived', function(event, data){
      // data.message,
      // data.title,
      // data.count,
      // data.sound,
      // data.image,
      // data.additionalData
      //alert(data.message + " " +data.title + " " +data.additionalData  );
      if (data.additionalData.foreground === true) {
          // do something if the app is in foreground while receiving to push - handle in app push handling
          alert("foreground state=" + (data.additionalData.state) + "\nadditionalData=" + JSON.stringify(data.additionalData));
      } else {
         // handle push messages while app is in background or not started
           alert("background state=" + (data.additionalData.state) + "\nadditionalData=" + JSON.stringify(data.additionalData));
      }
      $cordovaDialogs.confirm('Do you want to respond to message '+data.title +'?', 'Respond to a Message', ['Yes','No'])
      .then(function(buttonIndex) {
        // no button = 0, 'OK' = 1, 'Cancel' = 2
        if(buttonIndex==1){
          if(data.additionalData.paramQNA){
            $state.go(data.additionalData.state, {'post':data.additionalData.paramQNA.post, 'opponent':data.additionalData.paramQNA.opponent});
          }else if(data.additionalData.paramTest){
            $state.go(data.additionalData.state, {'post_id':data.additionalData.paramTest.post_id});
          }else{
            $state.go(data.additionalData.state, {'post':data.additionalData.param.post, 'interview':data.additionalData.param.interview});
          }
        }
      }, function(error) {
        alert("Error -> " + error);
      });
/*
      if (Device.isOniOS()) {
          if (data.additionalData.badge) {
              $cordovaPushV5.setBadgeNumber(NewNumber).then(function (result) {
                  // OK
              }, function (err) {
                  // handle error
              });
          }
      }

      $cordovaPushV5.finish().then(function (result) {
          // OK finished - works only with the dev-next version of pushV5.js in ngCordova as of February 8, 2016
      }, function (err) {
          // handle error
      });*/
    });

    // triggered every time error occurs
    $rootScope.$on('$cordovaPushV5:errorOcurred', function(event, e){
      // e.message
      alert(JSON.stringify(event) + "\n" + JSON.stringify(e));
    });
/*
    {
      var options = {
        android: {
          senderID: window.global.GCM_SENDER_ID
        },
        ios: {
          alert: "true",
          badge: "true",
          sound: "true"
        },
        windows: {}
      };

      // initialize
      $cordovaPushV5.initialize(options).then(function() {
        // start listening for new notifications
        $cordovaPushV5.onNotification();
        // start listening for errors
        $cordovaPushV5.onError();

        // register to get registrationId
        $cordovaPushV5.register().then(function(registrationId) {
          window.localStorage.setItem("fcm.registrationId", registrationId);
          //alert("registrationId=" + registrationId);

        });
      });
    }

      // triggered every time notification received
      $rootScope.$on('$cordovaPushV5:notificationReceived', function(event, data){
        // data.message,
        // data.title,
        // data.count,
        // data.sound,
        // data.image,
        // data.additionalData
        //alert(data.message + " " +data.title + " " +data.additionalData  );
        if (data.additionalData.foreground === true) {
            // do something if the app is in foreground while receiving to push - handle in app push handling
            alert("foreground state=" + (data.additionalData.state) + "\nparam=" + JSON.stringify(data.additionalData.param));
        } else {
           // handle push messages while app is in background or not started
             alert("background state=" + (data.additionalData.state) + "\nparam=" + JSON.stringify(data.additionalData.param));
        }
        $cordovaDialogs.confirm('Do you want to respond to message '+data.title +'?', 'Respond to a Message', ['Yes','No'])
        .then(function(buttonIndex) {
          // no button = 0, 'OK' = 1, 'Cancel' = 2
          if(buttonIndex==1){
            //if(data.additionalData)
            {
              $state.go(data.additionalData.state, {'post':data.additionalData.param.post, 'interview':data.additionalData.param.interview});
            }
          }
        }, function(error) {
          alert("Error -> " + error);
        });

        if (Device.isOniOS()) {
            if (data.additionalData.badge) {
                $cordovaPushV5.setBadgeNumber(NewNumber).then(function (result) {
                    // OK
                }, function (err) {
                    // handle error
                });
            }
        }

        $cordovaPushV5.finish().then(function (result) {
            // OK finished - works only with the dev-next version of pushV5.js in ngCordova as of February 8, 2016
        }, function (err) {
            // handle error
        });
      });

      // triggered every time error occurs
      $rootScope.$on('$cordovaPushV5:errorOcurred', function(event, e){
        // e.message
        alert(JSON.stringify(event) + "\n" + JSON.stringify(e));
      });
*/
  });
  // Disable BACK button on home
$ionicPlatform.registerBackButtonAction(function(event) {
  if (true) { // your check here
    /*$ionicPopup.confirm({
      title: 'Confirmation to Exit',
      template: 'Are you sure?'
    }).then(function(res) {
      if (res) {
        ionic.Platform.exitApp();
      }
    })*/
    $cordovaDialogs.confirm('Exiting Gorilla?', 'Confirm to Exit', ['Yes','No'])
    .then(function(buttonIndex) {
      // no button = 0, 'OK' = 1, 'Cancel' = 2
      if(buttonIndex==1){
        ionic.Platform.exitApp();
      }
    }, function(error) {
      alert("Error -> " + error);
    });

  }
}, 100);

})
/*.run(function ($ionicPlatform, $rootScope, User, $location) {
    $ionicPlatform.ready(function () {

    $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams){
            if (User.getCurrentUser() == null) {
                $location.path('/app/login');
            }
        });
})
}
)*/
.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider//, $ionicCloudProvider
) {
  $ionicConfigProvider.navBar.alignTitle('center');
/*
  $ionicCloudProvider.init({
    "core": {
      "app_id": window.global.IONIC_APP_ID
    },
    "push": {
      "sender_id": window.global.GCM_SENDER_ID,
      "pluginConfig": {
        "ios": {
          "badge": true,
          "sound": true
        },
        "android": {
          "iconColor": "#343434"
        }
      }
    }
  });
*/
  $stateProvider
  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: 'views/app/side-menu.html',
    controller: 'SideMenuCtrl'
  })
  .state('login', {
    cache:false,
    url: '/login',
	  templateUrl: 'views/auth/main.html',
	  controller: 'LoginCtrl'
  })
  .state('snslogin', {
    cache:false,
    url: '/snslogin',
	  templateUrl: 'views/auth/snslogin.html',
	  controller: 'LoginCtrl'
  })
  .state('app.profile', {
    url: '/profile',
    views: {
    'menuContent': {
      templateUrl: 'views/app/profile.html',
      controller: 'UserProfileCtrl'
    }
    }
    })
  .state('app.postJobMain', {
    url: "/postJobMain",

    resolve: {
        getGPS: function (LocationService) {
          if(!initialgpslocked){
            initialgpslocked = true;
            return LocationService.getCurrentLocation();
          }else{
            return window.global.gps;
          }
        }
      },
    views: {
      'menuContent': {
        templateUrl: "views/app/postJobMain.html",
        controller: 'PostJobMainCtrl'
      }
    }
  })
  .state('app.manageResume', {
    url: "/manageResume",
    cache: false,
    views: {
      'menuContent': {
        templateUrl: "views/app/manageResume.html",
        controller: 'ResumeDataCtrl as dc'
      }
    }
  })
  .state('app.managePDFResume', {
    url: "/managePDFResume",
    cache: false,
    views: {
      'menuContent': {
        templateUrl: "views/app/managePDFResume.html",
        controller: 'PDFResumeCtrl'
      }
    }
  })
  .state('app.manageImgResume', {
    url: "/manageImgResume",
    params: {
       index:null
    },
    cache: false,
    views: {
      'menuContent': {
        templateUrl: "views/app/manageImgResume.html",
        controller: 'ImgResumeCtrl'
      }
    }
  })
  .state('app.shareApp', {
    url: '/shareApp',
    views: {
      'menuContent': {
        templateUrl: 'views/app/shareApp.html',
          controller: 'ShareAppCtrl'
      }
    }
  })
  .state('app.postJob', {
    url: '/postJob',
/*    resolve: {
    getMyPost: function (DataService) {
      return DataService.mypost();
    }
  },*/
    views: {
      'menuContent': {
        templateUrl: 'views/app/postJob.html',
          controller: 'PostJobCtrl'
      }
    }
  })
  .state('app.PostDetailMessage', {
    url: '/PostDetailMessage',
    params: {
       post:null,
       opponent:null
    },
/*    resolve: {
    getPostDetail: ['$stateParams', 'PostingManageService',
        function ($stateParams, PostingManageService) {
          return PostingManageService.getPostDetail($stateParams.post_id);
        }
        ]
  },*/
    views: {
      'menuContent': {
        templateUrl: 'views/app/PostDetailMessage2.html',
          controller: 'PostDetailMessageCtrl'
      }
    }
  })
  .state('app.postDetail', {
    url: '/postDetail',
    params: {
       post_id:null,
       isposter:false
    },
    resolve: {
    getPostDetail: ['$stateParams', 'PostingManageService',
        function ($stateParams, PostingManageService) {
          return PostingManageService.getPostDetail($stateParams.post_id, $stateParams.isposter);
        }
        ]
  },
    views: {
      'menuContent': {
        templateUrl: 'views/app/postingDetail.html',
          controller: 'PostDetailCtrl'
      }
    }
  })
  .state('app.postingContractSig', {
    url: '/postingContractSig',
    params: {
       post_id:null,
       opponent:null
    },
    resolve: {
    getPostDetailContract: ['$stateParams', 'PostingManageService',
        function ($stateParams, PostingManageService) {
          return PostingManageService.getPostDetailContract($stateParams.post_id, $stateParams.opponent.user_id);
        }
        ]
  },
    views: {
      'menuContent': {
        templateUrl: 'views/app/postingContractSig.html',
          controller: 'PostContractSigCtrl'
      }
    }
  })
  .state('app.postingContractSigReview', {
    url: '/postingContractSigReview',
    params: {
       post:null,
       opponent:null
    },
    resolve: {
    getPostDetailContract: ['$stateParams', 'PostingManageService',
        function ($stateParams, PostingManageService) {
          return PostingManageService.getPostDetailContract($stateParams.post.post_id, $stateParams.opponent.user_id);
        }
        ]
  },
    views: {
      'menuContent': {
        templateUrl: 'views/app/postingContractSigReview.html',
          controller: 'PostContractSigReviewCtrl'
      }
    }
  })
  .state('app.postJobStepOne', {
    url: '/postJobStepOne',
    params: {
       post_id:null,
       newaddress:null
    },
    cache:false,
    views: {
      'menuContent': {
        templateUrl: 'views/app/postJobStepOne.html',
          controller: 'PostingDataCtrl1 as pdc1'
      }
    }
  })
  .state('app.postJobStepTwo', {
    url: '/postJobStepTwo',
    params: {
       post_id:null
    },

    views: {
      'menuContent': {
        templateUrl: 'views/app/postJobStepTwo.html',
          controller: 'PostingDataCtrl2'
      }
    }
  })
  .state('app.postJobStepThree', {
    url: '/postJobStepThree',
    params: {
       post_id:null
    },

    views: {
      'menuContent': {
        templateUrl: 'views/app/postJobStepThree.html',
          controller: 'PostingDataCtrl3 as pdc3'
      }
    }
  })
  .state('app.postJobStepFour', {
    url: '/postJobStepFour',
    params: {
       post_id:null
    },

    views: {
      'menuContent': {
        templateUrl: 'views/app/postJobStepFour.html',
          controller: 'PostingDataCtrl4 as pdc4'
      }
    }
  })
  .state('app.postJobStepFive', {
    url: '/postJobStepFive',
    /*resolve: {
    getPostData: function (PostingService) {
      return PostingService.getData();
    }
  },*/
    views: {
      'menuContent': {
        templateUrl: 'views/app/postJobStepFive.html',
          controller: 'PostingDataCtrl5'
      }
    }
  })
  .state('app.mySchedule', {
    url: '/mySchedule',
    views: {
      'menuContent': {
        templateUrl: 'views/app/mySchedule.html',
          controller: 'MyScheduleCtrl'
      }
    }
  })
  .state('app.postJobEmploy', {
    url: '/postJobEmploy',
    views: {
      'menuContent': {
        templateUrl: 'views/app/postJobEmploy.html',
          controller: 'PostJobEmployCtrl'
      }
    }
  })
  .state('app.postJobSearch', {
    url: '/postJobSearch',
    views: {
      'menuContent': {
        templateUrl: 'views/app/postJobSearch.html',
          controller: 'PostJobSearchCtrl'
      }
    }
  })
 .state('app.applicants', {
    url: '/applicants',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'views/app/applicants.html',
          controller: 'ApplicantsCtrl'
      }
    }
  })

  .state('app.scheduleNegoInterview', {
     url: '/scheduleNegoInterview',
     params: {
        post:null,
        interview:null
     },
     cache:false,
     views: {
       'menuContent': {
         templateUrl: 'views/app/scheduleNegoInterview.html',
           controller: 'scheduleNegoInterviewCtrl'
       }
     }
   })
  .state('app.scheduleInterview', {
     url: '/scheduleInterview',
     params: {
        post:null,
        applicant:null,
        interview:null
     },
     cache:false,
     views: {
       'menuContent': {
         templateUrl: 'views/app/scheduleInterview.html',
           controller: 'scheduleInterviewCtrl'
       }
     }
   })
   .state('app.moduleInterviewDetailApplicant', {
      url: '/moduleInterviewDetailApplicant',
      params: {
         post:null,
         interviews:null,
         interview_sequence:null
      },
      cache:false,
      views: {
        'menuContent': {
          templateUrl: 'views/app/moduleInterviewDetailApplicant.html',
            controller: 'moduleInterviewDetailApplicantCtrl'
        }
      }
    })

    .state('app.moduleInterviewWrapUp', {
       url: '/moduleInterviewWrapUp',
       params: {
          post:null,
          interviews:null,
          interview_sequence:null
       },
       cache:false,
       views: {
         'menuContent': {
           templateUrl: 'views/app/moduleInterviewWrapUp.html',
             controller: 'moduleInterviewWrapUpCtrl'
         }
       }
     })
     .state('app.moduleInterviewDetailPoster', {
        url: '/moduleInterviewDetailPoster',
        params: {
           post:null,
           interviews:null,
           interview_sequence:null
        },
        cache:false,
        views: {
          'menuContent': {
            templateUrl: 'views/app/moduleInterviewDetailPoster.html',
              controller: 'moduleInterviewDetailPosterCtrl'
          }
        }
      })
   .state('app.answerApp', {
      url: '/answerApp',
      params: {
         post:null,
         interview:null
      },
      cache:false,
      views: {
        'menuContent': {
          templateUrl: 'views/app/answerApp.html',
            controller: 'answerAppCtrl'
        }
      }
    })
  .state('app.scheduleApp', {
     url: '/scheduleApp',
     params: {
        post:null,
        applicant:null,
        interview:null
     },
     cache:false,
     views: {
       'menuContent': {
         templateUrl: 'views/app/scheduleApp.html',
           controller: 'scheduleAppCtrl'
       }
     }
   })
   .state('app.evalInterview', {
      url: '/evalInterview',
      params: {
         post:null,
         applicant:null,
         interview:null,
         nextinterview:null
      },
      cache:false,
      views: {
        'menuContent': {
          templateUrl: 'views/app/evaluateInterview.html',
            controller: 'evalInterviewCtrl'
        }
      }
    })
   .state('app.evalResume', {
      url: '/evalResume',
      params: {
         post:null,
         applicant:null,
         nextinterview:null
      },
      cache:false,
      views: {
        'menuContent': {
          templateUrl: 'views/app/evaluateResume.html',
            controller: 'EvalResumeCtrl'
        }
      }
    })
 .state('app.recently', {
    url: '/recently',
    views: {
      'menuContent': {
        templateUrl: 'views/app/recently.html',
          controller: 'RecentlyCtrl'
      }
    }
  })
  .state('app.applyJobStepOne', {
      url: '/applyJobStepOne',
      params: {
         post:null
      },
      views: {
        'menuContent': {
          templateUrl: 'views/app/applyJobStepOne.html',
            controller: 'ApplyingDataCtrl1'
        }
      }
    })
    .state('app.applyJobStepTwo', {
        url: '/applyJobStepTwo',
        params: {
           post:null
        },
        views: {
          'menuContent': {
            templateUrl: 'views/app/applyJobStepTwo.html',
              controller: 'ApplyingDataCtrl2 as adc2'
          }
        }
      })
      .state('app.myJobApplied', {
          url: '/myJobApplied',
          cache: false,
          views: {
            'menuContent': {
              templateUrl: 'views/app/myJobApplied.html',
                controller: 'MyJobAppliedCtrl'
            }
          }
        })
.state('app.apply', {
    url: '/apply',
    params: {
       post_id:null
    },
    views: {
      'menuContent': {
        templateUrl: 'views/app/apply.html',
          controller: 'ApplyCtrl'
      }
    }
  })
.state('app.bookmark', {
    url: '/bookmark',
    views: {
      'menuContent': {
        templateUrl: 'views/app/bookmark.html',
          controller: 'BookmarkCtrl'
      }
    }
  })
.state('app.matched', {
    url: '/matched',
    views: {
      'menuContent': {
        templateUrl: 'views/app/matched.html',
          controller: 'MatchedCtrl'
      }
    }
  })
.state('app.myJobSearchList', {
    url: '/myJobSearchList',
    params: {
       filter:null,
       keywords:null
    },
    views: {
      'menuContent': {
        templateUrl: 'views/app/myJobSearchList.html',
          controller: 'MyJobSearchListCtrl'
      }
    }
  })

  .state('app.modalGoogleMap', {
      url: '/modalGoogleMap',
      params: {
         latitude:null,
         longitude:null
      },
      views: {
        'menuContent': {
          templateUrl: 'views/app/modalGoogleMap.html',
            controller: 'modalGoogleMapCtrl'
        }
      }
    })
  .state('app.myJobSearchMap', {
      url: '/myJobSearchMap',
      params: {
         filter:null,
         keywords:null,
         googleMap:null
      },
      views: {
        'menuContent': {
          templateUrl: 'views/app/myJobSearchMap.html',
            controller: 'MyJobSearchMapCtrl'
        }
      }
    })
.state('app.employInfo', {
    url: '/employInfo',
    views: {
      'menuContent': {
        templateUrl: 'views/app/employInfo.html',
          controller: 'EmployInfoCtrl'
      }
    }
  })
.state('app.liveChat', {
    url: '/liveChat',
    views: {
      'menuContent': {
        templateUrl: 'views/app/liveChat.html',
          controller: 'LiveChatCtrl'
      }
    }
  })
.state('app.appInterview', {
    url: '/appInterview',
    views: {
      'menuContent': {
        templateUrl: 'views/app/appInterview.html',
          controller: 'AppInterviewCtrl'
      }
    }
  })
.state('app.arsInterview', {
    url: '/arsInterview',
    views: {
      'menuContent': {
        templateUrl: 'views/app/arsInterview.html',
          controller: 'ArsInterviewCtrl'
      }
    }
  })
.state('app.phoneInterview', {
    url: '/phoneInterview',
    views: {
      'menuContent': {
        templateUrl: 'views/app/phoneInterview.html',
          controller: 'PhoneInterviewCtrl'
      }
    }
  })
.state('app.personInterview', {
    url: '/personInterview',
    views: {
      'menuContent': {
        templateUrl: 'views/app/personInterview.html',
          controller: 'PersonInterviewCtrl'
      }
    }
  })
.state('app.livechatInterview', {
    url: '/livechatInterview',
    views: {
      'menuContent': {
        templateUrl: 'views/app/livechatInterview.html',
          controller: 'LivechatInterviewCtrl'
      }
    }
  })
.state('app.videoInterview', {
    url: '/videoInterview',
    views: {
      'menuContent': {
        templateUrl: 'views/app/videoInterview.html',
          controller: 'VideoInterviewCtrl'
      }
    }
  })
.state('app.posting', {
    url: '/posting',
    views: {
      'menuContent': {
        templateUrl: 'views/app/posting.html',
          controller: 'PostingCtrl'
      }
    }
  })
.state('app.setting', {
    url: '/setting',
    views: {
      'menuContent': {
        templateUrl: 'views/app/setting.html',
          controller: 'SettingCtrl'
      }
    }
  })

.state('app.listViewFilter', {
    url: '/listViewFilter',

    params: {
       keywords:null,
       viewMode:null,
       googleMap:null,
       viewId:null
    },
    views: {
      'menuContent': {
        templateUrl: 'views/app/listViewFilter.html',
          controller: 'ListViewFilterCtrl'
      }
    }
  })
.state('app.mapViewFilter', {
    url: '/mapViewFilter',
    views: {
      'menuContent': {
        templateUrl: 'views/app/mapViewFilter.html',
          controller: 'MapViewFilterCtrl'
      }
    }
  })
.state('app.postJobMapSearch', {
    url: '/postJobMapSearch',
    views: {
      'menuContent': {
        templateUrl: 'views/app/postJobMapSearch.html',
          controller: 'PostJobMapSearchCtrl'
      }
    }
  })
.state('app.systemMessage', {
    url: '/systemMessage',
    views: {
      'menuContent': {
        templateUrl: 'views/app/systemMessage.html',
          controller: 'SystemMessageCtrl'
      }
    }
  })
  .state('app.aboutGorilla', {
    url: '/aboutGorilla',
    views: {
      'menuContent': {
        templateUrl: 'views/app/aboutGorilla.html',
          controller: 'aboutGorilla'
      }
    }
  })

  $urlRouterProvider.otherwise("/login");

})
;
