angular.module('gorilla.controllers', [])
.controller('LoginCtrl', function($rootScope, $scope, $http, $state, $ionicModal, $timeout, $cordovaOauth, $ionicHistory, $cordovaOauthUtility, AuthService, LoadingService, //$ionicPush,
  $cordovaDialogs, $cordovaPushV5, $cordovaGooglePlus) {
  $scope.$on('$ionicView.enter', function(event, viewData) {
    $ionicHistory.clearCache();
  });
/*
    var platform = window.localStorage.getItem("device.platform");
    if(platform != null){
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
    }
    */
/*
  // triggered every time notification received
  $rootScope.$on('$cordovaPushV5:notificationReceived', function(event, data){
    // data.message,
    // data.title,
    // data.count,
    // data.sound,
    // data.image,
    // data.additionalData
    alert(JSON.stringify(event) + "\n" + JSON.stringify(data));
  });

  // triggered every time error occurs
  $rootScope.$on('$cordovaPushV5:errorOcurred', function(event, e){
    // e.message
    alert(JSON.stringify(event) + "\n" + JSON.stringify(e));
  });
*/
  /*
  $rootScope.$on('$cordovaPush:tokenReceived', function(event, data) {
    alert("Successfully registered token " + data.token);
    console.log('Ionic Push: Got token ', data.token, data.platform);
    //$scope.token = data.token;
    $ionicPush.saveToken(data.token);

    //update fcmregid in t_device
    //update lastaccessed in t_user
    var uuid = window.localStorage.getItem("device.uuid");
    LoadingService.showLoading();
    var url='/mobile/user_session_connect';
    $http({
      url: window.global.baseurl+url,
      method: "GET",
      params: {'my_key': window.global.my_key, 'api_key': window.global.api_key, 'user_id' : $scope.me.user_id, 'uuid' : uuid, 'token' : t.token},
    }).then(function (response) {
      //console.log("responded -->" +JSON.stringify(response.data));
      if(response.data.status==true){

      }else{
        if(response.data.msg=="Invalid mobile key used"){
          AuthService.getApiKey($scope.me.user_id).then(function (result) {
          });
        }
      }
        LoadingService.hideLoading();
        $state.go("app.postJobMain");
      }, function(error){
          LoadingService.hideLoading();
          //there was an error fetching from the server
          alert(JSON.stringify(error));
          });

  });
  */
  /*
  function registerPush(){

    //var PushNotification = window.plugins.pushNotification;
    //var push = window.PushNotification.init(pushConfig);
    var push = PushNotification.init({
  	android: {
  		senderID: window.global.GCM_SENDER_ID
  	},
      browser: {
          pushServiceURL: 'http://push.api.phonegap.com/v1/push'
      },
  	ios: {
  		alert: "true",
  		badge: "true",
  		sound: "true"
  	},
  	windows: {}
  });

  push.on('registration', function(data) {
  	// data.registrationId
    alert(JSON.stringify(data));
  });

  push.on('notification', function(data) {
  	// data.message,
  	// data.title,
  	// data.count,
  	// data.sound,
  	// data.image,
  	// data.additionalData
    alert(JSON.stringify(data));
  });

  push.on('error', function(e) {
  	// e.message
  });
}*/
/*
  function pushRegister() {
    console.log('Ionic Push: Registering user');

    // Register with the Ionic Push service.  All parameters are optional.
    $ionicPush.register({
      canShowAlert: true, //Can pushes show an alert on your screen?
      canSetBadge: true, //Can pushes update app icon badges?
      canPlaySound: true, //Can notifications play a sound?
      canRunActionsOnWake: true, //Can run actions outside the app,
      onNotification: function(notification) {
        alert(JSON.stringify(notification));
        if(notification["$state"]) {
          $cordovaDialogs.confirm('Are you sure?', 'Confirm to Delete', ['Yes','No'])
          .then(function(buttonIndex) {
            if(buttonIndex==1){
              $state.go(notification["$state"]);
            }
          }, function(error) {
            alert("Error -> " + error);
          });
        }
        return true;
      }
    }).then(function(t) {
      return $ionicPush.saveToken(t);
    }).then(function(t) {
      //update fcmregid in t_device
      //update lastaccessed in t_user
      var uuid = window.localStorage.getItem("device.uuid");
      LoadingService.showLoading();
      var url='/mobile/user_session_connect';
      $http({
        url: window.global.baseurl+url,
        method: "GET",
        params: {'my_key': window.global.my_key, 'api_key': window.global.api_key, 'user_id' : $scope.me.user_id, 'uuid' : uuid, 'token' : t.token},
      }).then(function (response) {
        //console.log("responded -->" +JSON.stringify(response.data));
        if(response.data.status==true){

        }else{
          if(response.data.msg=="Invalid mobile key used"){
            AuthService.getApiKey($scope.me.user_id).then(function (result) {
            });
          }
        }
          LoadingService.hideLoading();
          $state.go("app.postJobMain");
        }, function(error){
            LoadingService.hideLoading();
            //there was an error fetching from the server
            alert(JSON.stringify(error));
            });

    });
  };*/
  //alert("LoginCtrl baseurl="+$scope.baseurl);
  $timeout(checkSession, 1000);
  //checkSession();
//  $scope.islogged = false;
//  $scope.isguest = false;

  //var snsparam = {};
  //if(!$scope.$$phase)
  function checkSession(){
    if(!snsloginconnecting)
    {
      /*
      $scope.me = AuthService.getSession();
      if($scope.me){
        AuthService.getApiKey($scope.me.user_id).then(function (result) {
        });
      }*/
      AuthService.getSyncCompleted().then(function (response) {
        if(response){
          $scope.me = AuthService.getSession();
          if($scope.me){
      //      $scope.islogged = $scope.me.islogged;
      //      $scope.isguest = $scope.me.isguest;
            //console.log($scope.me.picture);
            alert('Welcome Back ' + $scope.me.name);
            $ionicHistory.nextViewOptions({ disableBack: true });

            var platform = window.localStorage.getItem("device.platform");
            if(platform == null){
              $state.go("app.postJobMain");
            }else{
              var registrationId = window.localStorage.getItem("fcm.registrationId");
              //alert("storage Login registrationId=" + registrationId);
              /*if(window.global.registrationId){
                registrationId = window.global.registrationId;
                alert("registrationId="+registrationId);
              }*/
              {
                  //update fcmregid in t_device
                  //update lastaccessed in t_user
                  var uuid = window.localStorage.getItem("device.uuid");
                  LoadingService.showLoading();
                  var url='/mobile/user_session_connect';
                  $http({
                    url: window.global.baseurl+url,
                    method: "GET",
                    params: {'my_key': window.global.my_key, 'api_key': window.global.api_key, 'user_id' : $scope.me.user_id, 'uuid' : uuid, 'token' : registrationId},
                  }).then(function (response) {
                    //console.log("responded -->" +JSON.stringify(response.data));
                    if(response.data.status==true){

                    }else{
                      if(response.data.msg=="Invalid mobile key used"){
                        AuthService.getApiKey($scope.me.user_id).then(function (result) {
                        });
                      }
                    }
                      LoadingService.hideLoading();
                      $state.go("app.postJobMain");
                    }, function(error){
                        LoadingService.hideLoading();
                        //there was an error fetching from the server
                        alert(JSON.stringify(error));
                        });
                }
              }


            //pushRegister();
            //registerPush();
            /*
            $ionicPush.register().then(function(t) {
              return $ionicPush.saveToken(t);
            }).then(function(t) {
              console.log('Token saved:', t.token);

              //update fcmregid in t_device
              //update lastaccessed in t_user
              var uuid = window.localStorage.getItem("device.uuid");
              LoadingService.showLoading();
              var url='/mobile/user_session_connect';
              $http({
                url: window.global.baseurl+url,
                method: "GET",
                params: {'my_key': window.global.my_key, 'api_key': window.global.api_key, 'user_id' : $scope.me.user_id, 'uuid' : uuid, 'token' : t.token},
              }).then(function (response) {
                //console.log("responded -->" +JSON.stringify(response.data));
                if(response.data.status==true){

                }else{
                  if(response.data.msg=="Invalid mobile key used"){
                    AuthService.getApiKey($scope.me.user_id).then(function (result) {
                    });
                  }
                }
                  LoadingService.hideLoading();
                }, function(error){
                    LoadingService.hideLoading();
                    //there was an error fetching from the server
                    alert(JSON.stringify(error));
                    });

            });
            push.on('notification', function(notification) {
                alert(JSON.stringify(notification));
                if(notification["$state"]) {
                  $cordovaDialogs.confirm('Are you sure?', 'Confirm to Delete', ['Yes','No'])
                  .then(function(buttonIndex) {
                    if(buttonIndex==1){
                      $state.go(notification["$state"]);
                    }
                  }, function(error) {
                    alert("Error -> " + error);
                  });
                }
                return true;
            });*/
            //$state.go("app.postJobMain");
          }
        }
      });
    }
  }
$scope.goBack = function(){
  snsloginconnecting = false;
  $ionicHistory.goBack();
};

$scope.googlelogin = function() {
  $cordovaGooglePlus.login({})
  .then(function(user_data) {
      LoadingService.showLoading();
      var userinfo = {};
      userinfo.sessiontoken = user_data.accessToken;
      userinfo.sns = 'google.com';
      userinfo.email = user_data.email;
      userinfo.name = user_data.displayName;
      userinfo.snsid = user_data.userId;
      var snsparam = {};
      snsparam.logintype = '1003';
      snsparam.email = user_data.email;
      snsparam.name = user_data.displayName;
      snsparam.snsuid = user_data.userId;
      //snsparam.api_key = window.global.api_key;
      snsparam.lastaccessed = 'now()';
      //snsparam.sessiontoken = user_data.accessToken;
      var url='/mobile/get_profile_bysnsuid';
      $http({
        url: window.global.baseurl+url,
        method: "GET",
        params: {'my_key': window.global.my_key, 'api_key': window.global.api_key, 'sns':snsparam},
      }).then(function mySucces(response) {
        LoadingService.hideLoading();
        alert("responded -->" +(response.data.status));
        if(response.data.status==true){
          if(snsloginconnecting){
            alert("Merging is not allowed for existing sns account [google] " + response.data.email)
            return;
          }
          userinfo.email = response.data.email;
          userinfo.name = response.data.name;
          userinfo.phone = response.data.phone;
          userinfo.picture = response.data.picture;
          //window.localStorage.setItem("login-profile", JSON.stringify(userinfo));
          AuthService.storeLoginProfile(userinfo);
          //$scope.me = (userinfo);
          //console.log("userinfo -->" +JSON.stringify(userinfo));
    //          $scope.islogged = true;
          registerDevice(snsparam);

        }else{
          if(snsloginconnecting){
            //merge guest account
            mergeDevice(snsparam);
            snsloginconnecting = false;
            return;
          }
          if(user_data.imageUrl){
            convertFileToDataURLviaFileReader(user_data.imageUrl, function(base64Img) {
              userinfo.picture = base64Img;
              //window.localStorage.setItem("login-profile", JSON.stringify(userinfo));
              AuthService.storeLoginProfile(userinfo);
              //$scope.me = (userinfo);
              alert("userinfo -->" +JSON.stringify(userinfo));
    //            $scope.islogged = true;
              registerDevice(snsparam, base64Img);
            }, function(error) {
              //window.localStorage.setItem("login-profile", JSON.stringify(userinfo));
              AuthService.storeLoginProfile(userinfo);
              //$scope.me = (userinfo);
              alert("userinfo -->" +JSON.stringify(userinfo));
    //            $scope.islogged = true;
              registerDevice(snsparam);
            });
          }else{
            //window.localStorage.setItem("login-profile", JSON.stringify(userinfo));
            AuthService.storeLoginProfile(userinfo);
            //$scope.me = (userinfo);
            alert("userinfo -->" +JSON.stringify(userinfo));
    //            $scope.islogged = true;
            registerDevice(snsparam);
          }
        }
        }
        , function(error){
            LoadingService.hideLoading();
            //there was an error fetching from the server
            alert(JSON.stringify(error));
            });
      //alert("userinfo -->" +JSON.stringify(user_data));
  }, function(err) {
    alert('error');
    alert(JSON.stringify(err));
  });
};
$scope.googlelogin2 = function() {
  window.plugins.googleplus.login(
    {},
    function (user_data) {
      LoadingService.showLoading();
      var userinfo = {};
      userinfo.sessiontoken = user_data.accessToken;
      userinfo.sns = 'google.com';
      userinfo.email = user_data.email;
      userinfo.name = user_data.displayName;
      userinfo.snsid = user_data.userId;
      var snsparam = {};
      snsparam.logintype = '1003';
      snsparam.email = user_data.email;
      snsparam.name = user_data.displayName;
      snsparam.snsuid = user_data.userId;
      //snsparam.api_key = window.global.api_key;
      snsparam.lastaccessed = 'now()';
      //snsparam.sessiontoken = user_data.accessToken;
      var url='/mobile/get_profile_bysnsuid';
      $http({
        url: window.global.baseurl+url,
        method: "GET",
        params: {'my_key': window.global.my_key, 'api_key': window.global.api_key, 'sns':snsparam},
      }).then(function mySucces(response) {
        LoadingService.hideLoading();
        alert("responded -->" +(response.data.status));
        if(response.data.status==true){
          if(snsloginconnecting){
            alert("Merging is not allowed for existing sns account [google] " + response.data.email)
            return;
          }
          userinfo.email = response.data.email;
          userinfo.name = response.data.name;
          userinfo.phone = response.data.phone;
          userinfo.picture = response.data.picture;
          //window.localStorage.setItem("login-profile", JSON.stringify(userinfo));
          AuthService.storeLoginProfile(userinfo);
          //$scope.me = (userinfo);
          //console.log("userinfo -->" +JSON.stringify(userinfo));
//          $scope.islogged = true;
          registerDevice(snsparam);

        }else{
          if(snsloginconnecting){
            //merge guest account
            mergeDevice(snsparam);
            snsloginconnecting = false;
            return;
          }
          if(user_data.imageUrl){
            convertFileToDataURLviaFileReader(user_data.imageUrl, function(base64Img) {
              userinfo.picture = base64Img;
              //window.localStorage.setItem("login-profile", JSON.stringify(userinfo));
              AuthService.storeLoginProfile(userinfo);
              //$scope.me = (userinfo);
              alert("userinfo -->" +JSON.stringify(userinfo));
  //            $scope.islogged = true;
              registerDevice(snsparam, base64Img);
            }, function(error) {
              //window.localStorage.setItem("login-profile", JSON.stringify(userinfo));
              AuthService.storeLoginProfile(userinfo);
              //$scope.me = (userinfo);
              alert("userinfo -->" +JSON.stringify(userinfo));
  //            $scope.islogged = true;
              registerDevice(snsparam);
            });
          }else{
            //window.localStorage.setItem("login-profile", JSON.stringify(userinfo));
            AuthService.storeLoginProfile(userinfo);
            //$scope.me = (userinfo);
            alert("userinfo -->" +JSON.stringify(userinfo));
//            $scope.islogged = true;
            registerDevice(snsparam);
          }
        }
        }
        , function(error){
            LoadingService.hideLoading();
            //there was an error fetching from the server
            alert(JSON.stringify(error));
            });
      //alert("userinfo -->" +JSON.stringify(user_data));
    },
    function (msg) {
    }
  );
};
  function convertFileToDataURLviaFileReader(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function() {
      var reader = new FileReader();
      reader.onloadend = function() {
        callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.send();
  }

  //Create the Signature
function createTwitterSignature(method, url, token) {
    //var token = angular.fromJson(getStoredToken());
    var oauthObject = {
        oauth_consumer_key: window.global.Twitterapi_key,
        oauth_nonce: $cordovaOauthUtility.createNonce(32),
        oauth_signature_method: "HMAC-SHA1",
        oauth_token: token.oauth_token,
        oauth_timestamp: Math.round((new Date()).getTime() / 1000.0),
        oauth_version: "1.0",
    };

    var signatureObj = $cordovaOauthUtility.createSignature(method, url,
        oauthObject,{screen_name:token.screen_name}, window.global.Twitterapi_secret,
        token.oauth_token_secret);

    $http.defaults.headers.common.Authorization =
         signatureObj.authorization_header;
}
  $scope.twitterlogin = function(){

    $cordovaOauth.twitter(window.global.Twitterapi_key, window.global.Twitterapi_secret, {redirect_uri:"https://custom-cargo-144611.firebaseapp.com/__/auth/handler"}).then(function(result) {
      //alert("userinfo -->" +JSON.stringify(result));

      var userinfo = {};
      userinfo.sessiontoken = result.oauth_token;
      userinfo.sns = 'twitter.com';
         {
           createTwitterSignature('GET',
                  'https://api.twitter.com/1.1/users/show.json', result);

           $http.get("https://api.twitter.com/1.1/users/show.json",
                    {params: { screen_name: result.screen_name}})
           .success(function(data) {
                    LoadingService.showLoading();
                     //alert("data -->" +JSON.stringify(data));
                     var picture = data.profile_image_url;
                     var name = data.name;
                     userinfo.name = name;

                     var snsparam = {};
                     snsparam.logintype = '1004';
                     snsparam.snsuid = result.user_id;
                     snsparam.name = name;
                     snsparam.lastaccessed = 'now()';
                     //snsparam.api_key = window.global.api_key;
                     //snsparam.sessiontoken = result.oauth_token;
                     var url='/mobile/get_profile_bysnsuid';
                     $http({
                       url: window.global.baseurl+url,
                       method: "GET",
                       params: {'my_key': window.global.my_key, 'api_key': window.global.api_key, 'sns':snsparam},
                     }).then(function mySucces(response) {
                       LoadingService.hideLoading();
                       alert("responded -->" +(response.data.status));
                       if(response.data.status==true){
                         if(snsloginconnecting){
                           alert("Merging is not allowed for existing sns account [twitter] " + response.data.email)
                           return;
                         }
                         userinfo.email = response.data.email;
                         userinfo.name = response.data.name;
                         userinfo.phone = response.data.phone;
                         userinfo.picture = response.data.picture;
                         //window.localStorage.setItem("login-profile", JSON.stringify(userinfo));
                         AuthService.storeLoginProfile(userinfo);
                         //$scope.me = (userinfo);
                         //console.log("userinfo -->" +JSON.stringify(userinfo));
//                         $scope.islogged = true;
                         registerDevice(snsparam);

                       }else{
                         if(snsloginconnecting){
                           //merge guest account
                           mergeDevice(snsparam);
                           snsloginconnecting = false;
                           return;
                         }
                         convertFileToDataURLviaFileReader(picture, function(base64Img) {

                           userinfo.picture = base64Img;
                           //window.localStorage.setItem("login-profile", JSON.stringify(userinfo));
                           AuthService.storeLoginProfile(userinfo);
                           //$scope.me = (userinfo);
                           alert("userinfo -->" +JSON.stringify(userinfo));
//                           $scope.islogged = true;
                           registerDevice(snsparam, base64Img);
                         }, function(error) {

                           //window.localStorage.setItem("login-profile", JSON.stringify(userinfo));
                           AuthService.storeLoginProfile(userinfo);
                           //$scope.me = (userinfo);
                           alert("userinfo -->" +JSON.stringify(userinfo));
//                           $scope.islogged = true;
                           registerDevice(snsparam);
                         });
                       }
                     }, function(error){
                         LoadingService.hideLoading();
                         //there was an error fetching from the server
                         alert(JSON.stringify(error));
                         });

           })
          .error(function(error) {
                     alert("error -->" +JSON.stringify(error));
           });
         }
    }, function(error) {
      console.log("Error -> " + error);
    });
  }

  $scope.Guestlogin = function(){
    var snsparam = {};
    //window.localStorage.setItem("login-profile", JSON.stringify({'sns':'guest'}));
    AuthService.storeLoginProfile({'sns':'guest', 'name':'', 'email':'', 'phone':'', 'picture':''});
    snsparam.logintype = '1001';
    snsparam.lastaccessed = 'now()';
    snsparam.snsuid = '00000000000000000000';
    //snsparam.api_key = window.global.api_key;
//    $scope.islogged = true;
//    $scope.isguest = true;
//    $scope.me = {'sns':'guest', 'name':'', 'email':'', 'phone':'', 'picture':''};
    registerDevice(snsparam);
  };
  $scope.FBlogin = function(){
    $cordovaOauth.facebook(window.global.Facebook_APP_ID, ["email", "public_profile", "user_about_me"]).then(function(result) {
      displayDataFB(result.access_token);

    }, function(error) {
      console.log("Error -> " + error);
    });
  };

  function displayDataFB(access_token){
    // The signed-in user info.
    var userinfo = {};
    userinfo.sessiontoken = access_token;
    userinfo.sns = 'facebook.com';

    console.log(JSON.stringify(userinfo) +'\n');

    $http.get("https://graph.facebook.com/v2.6/me", {params: {access_token: access_token, fields: "cover,email,name,about,picture", format: "json" }}).then(function(result) {
      //result.data.access_token = access_token;
      //result.data.sns='facebook.com';
      LoadingService.showLoading();
      result.data.picture = 'https://graph.facebook.com/'+result.data.id+'/picture?type=large';
      alert("avatar link -->" +result.data.picture);

      userinfo.email = result.data.email;
      userinfo.name = result.data.name;
      userinfo.snsid = result.data.id;
      var snsparam = {};
      snsparam.logintype = '1002';
      snsparam.email = result.data.email;
      snsparam.name = result.data.name;
      snsparam.snsuid = result.data.id;
      //snsparam.api_key = window.global.api_key;
      snsparam.lastaccessed = 'now()';
      //snsparam.sessiontoken = access_token;
      var url='/mobile/get_profile_bysnsuid';
      $http({
        url: window.global.baseurl+url,
        method: "GET",
        params: {'my_key': window.global.my_key, 'api_key': window.global.api_key, 'sns':snsparam},
      }).then(function mySucces(response) {
        LoadingService.hideLoading();
        alert("responded -->" +(response.data.status));
        if(response.data.status==true){
          if(snsloginconnecting){
            alert("Merging is not allowed for existing sns account [facebook] " + response.data.email)
            return;
          }
          userinfo.email = response.data.email;
          userinfo.name = response.data.name;
          userinfo.phone = response.data.phone;
          userinfo.picture = response.data.picture;
          //window.localStorage.setItem("login-profile", JSON.stringify(userinfo));
          AuthService.storeLoginProfile(userinfo);
//          $scope.me = (userinfo);
          console.log("userinfo -->" +JSON.stringify(userinfo));
//          $scope.islogged = true;
          registerDevice(snsparam);

        }else{
          if(snsloginconnecting){
            //merge guest account
            mergeDevice(snsparam);
            snsloginconnecting = false;
            return;
          }
          convertFileToDataURLviaFileReader(result.data.picture, function(base64Img) {
            userinfo.picture = base64Img;
            //window.localStorage.setItem("login-profile", JSON.stringify(userinfo));
            AuthService.storeLoginProfile(userinfo);
//            $scope.me = (userinfo);
            alert("userinfo -->" +JSON.stringify(userinfo));
//            $scope.islogged = true;
            registerDevice(snsparam, base64Img);
          }, function(error) {
            //window.localStorage.setItem("login-profile", JSON.stringify(userinfo));
            AuthService.storeLoginProfile(userinfo);
//            $scope.me = (userinfo);
            alert("userinfo -->" +JSON.stringify(userinfo));
//            $scope.islogged = true;
            registerDevice(snsparam);
          });
        }
      }, function(error){
          LoadingService.hideLoading();
          //there was an error fetching from the server
          alert(JSON.stringify(error));
          });
    }, function(error) {
      alert("Error: " + error);
    });
  }
/*
  $scope.testDB = function(){
    var url='/mobile/get_codes?groupid=0000';
    $http({
      url: window.global.baseurl+url,
      method: "GET",
      params: {'my_key': window.global.my_key, 'api_key': window.global.api_key},
    }).then(function mySucces(response) {
      alert("responded -->" +(response.data.status));
    });
  }*/
  function mergeDevice(param, picture=undefined){
    LoadingService.showLoading();
    console.log('param='+JSON.stringify(param));
    var url='/mobile/merge_device_post';

    var data = {
      my_key : window.global.my_key,
      api_key : window.global.api_key,
      //device : deviceinfo,
      sns : param,
      picture :picture
    };
    $http({
      method: 'POST',
      url: window.global.baseurl+url,
      data: data,
      dataType: 'json',
      headers:
      {'Content-Type': 'application/x-www-form-urlencoded'}
    }).then(function mySucces(response) {
      LoadingService.hideLoading();
      alert("responded -->" +(response.data.status));

      if(response.data.status==true){
        alert("user_id="+response.data.user_id);
        $ionicHistory.nextViewOptions({ disableBack: true });
        $state.go("app.postJobMain");
      }
    }, function(error){
        LoadingService.hideLoading();
        //there was an error fetching from the server
        alert(JSON.stringify(error));
        });
  }
  function updateUserStatus(user_id){
    var registrationId = window.localStorage.getItem("fcm.registrationId");
    alert("storage registerdevice registrationId=" + registrationId);
    /*
    if(window.global.registrationId){
      registrationId = window.global.registrationId;
      alert("window.global registrationId="+registrationId);
    }*/
    {
        //update fcmregid in t_device
        //update lastaccessed in t_user
        var uuid = window.localStorage.getItem("device.uuid");
        LoadingService.showLoading();
        var url='/mobile/user_session_connect';
        $http({
          url: window.global.baseurl+url,
          method: "GET",
          params: {'my_key': window.global.my_key, 'api_key': window.global.api_key, 'user_id' : user_id, 'uuid' : uuid, 'token' : registrationId},
        }).then(function (response) {
          //console.log("responded -->" +JSON.stringify(response.data));
          if(response.data.status==true){

          }else{
            if(response.data.msg=="Invalid mobile key used"){
              AuthService.getApiKey($scope.me.user_id).then(function (result) {
              });
            }
          }
            LoadingService.hideLoading();
            $state.go("app.postJobMain");
          }, function(error){
              LoadingService.hideLoading();
              //there was an error fetching from the server
              alert(JSON.stringify(error));
              });
      }
  }
  function registerDevice(param, picture=undefined){
    var deviceinfo = {};
    deviceinfo.uuid = window.localStorage.getItem("device.uuid");
    var platform = window.localStorage.getItem("device.platform");
    deviceinfo.platformtype = '2001';
    if(platform === 'iOS'){
      deviceinfo.platformtype = '2002';
    }
    deviceinfo.osversion = window.localStorage.getItem("device.version");
    deviceinfo.appversion = window.global.appversion;
    deviceinfo.notification = 'Y';
    LoadingService.showLoading();
    console.log('param='+JSON.stringify(param));
    var url='/mobile/register_device_post2';

    var data = {
      my_key : window.global.my_key,
      api_key : window.global.api_key,
      device : deviceinfo,
      sns : param,
      picture :picture
    };
    $http({
      method: 'POST',
      url: window.global.baseurl+url,
      data: data,
      dataType: 'json',
      headers:
      {'Content-Type': 'application/x-www-form-urlencoded'}
    }).then(function mySucces(response) {
      LoadingService.hideLoading();
      alert("responded -->" +(response.data.status));

      if(response.data.status==true){
        //$scope.me.user_id = response.data.user_id;
        //window.localStorage.setItem("session_id", response.data.user_id);
        AuthService.storeUserId(response.data.user_id);
        AuthService.getApiKey(response.data.user_id).then(function (result) {
          if(result){
            alert("user_id="+response.data.user_id);
            $ionicHistory.nextViewOptions({ disableBack: true });
            var platform = window.localStorage.getItem("device.platform");
            if(platform == null){
              $state.go("app.postJobMain");
            }else{
              updateUserStatus(response.data.user_id);
            }
          }
        });


        //pushRegister();
        //registerPush();
        /*$ionicPush.register().then(function(t) {
          return $ionicPush.saveToken(t);
        }).then(function(t) {
          console.log('Token saved:', t.token);

          //update fcmregid in t_device
          //update lastaccessed in t_user
          var uuid = window.localStorage.getItem("device.uuid");
          LoadingService.showLoading();
          var url='/mobile/user_session_connect';
          $http({
            url: window.global.baseurl+url,
            method: "GET",
            params: {'my_key': window.global.my_key, 'api_key': window.global.api_key, 'user_id' : $scope.me.user_id, 'uuid' : uuid, 'token' : t.token},
          }).then(function (response) {
            //console.log("responded -->" +JSON.stringify(response.data));
            if(response.data.status==true){

            }else{
              if(response.data.msg=="Invalid mobile key used"){
                AuthService.getApiKey($scope.me.user_id).then(function (result) {
                });
              }
            }
              LoadingService.hideLoading();
            }, function(error){
                LoadingService.hideLoading();
                //there was an error fetching from the server
                alert(JSON.stringify(error));
                });

        });
        push.on('notification', function(notification) {
            alert(JSON.stringify(notification));
            if(notification["$state"]) {
              $cordovaDialogs.confirm('Are you sure?', 'Confirm to Delete', ['Yes','No'])
              .then(function(buttonIndex) {
                if(buttonIndex==1){
                  $state.go(notification["$state"]);
                }
              }, function(error) {
                alert("Error -> " + error);
              });
            }
            return true;
        });*/
        //$state.go("app.postJobMain");
      }
    }, function(error){
        LoadingService.hideLoading();
        //there was an error fetching from the server
        alert(JSON.stringify(error));
        });
  }
})
.controller('ResumeDataCtrl', function($scope, $http, $state, $cordovaDialogs, $ionicActionSheet, $cordovaCamera, $ionicModal, $ionicListDelegate, LoadingService, $ionicHistory, AuthService) {
  $scope.shouldShowReorder = false;
  $scope.listCanSwipe = true;
  $scope.resumes = [];
  var dc = this;
  function base64ToUint8Array(base64) {
    var raw = atob(base64);
    var uint8Array = new Uint8Array(raw.length);
    for (var i = 0; i < raw.length; i++) {
      uint8Array[i] = raw.charCodeAt(i);
    }
    return uint8Array;
  };
  $ionicModal.fromTemplateUrl('views/app/modalResume.html', {
        scope: $scope,
        animation: 'slide-in-up',
    }).then(function (modal) {
        dc.modal = modal;
    });
  // Load the modal from the given template URL
  /*$ionicModal.fromTemplateUrl('views/app/modalPdfResume.html', {
        scope: $scope,
        animation: 'slide-in-up',
    }).then(function (modal) {
        dc.modalpdf = modal;
    });
    $ionicModal.fromTemplateUrl('views/app/modalImgResume.html', {
          scope: $scope,
          animation: 'slide-in-up',
      }).then(function (modal) {
          dc.modalimg = modal;
      });*/
    $scope.$on('$destroy', function () {
        //dc.modalpdf.remove();
        //dc.modalimg.remove();
        dc.modal.remove();
    });
  function getcodefromfiletype(filetype){
    var cvfiletype = '3001';
    if(filetype == 'MS Word')
      cvfiletype = '3002';
    else if(filetype == 'PDF')
      cvfiletype = '3003';
    else if(filetype == 'Text')
      cvfiletype = '3004';
    return cvfiletype;
  }
  dc.get_userCVList = function() {
    LoadingService.showLoading();
    var url='/mobile/get_userCVList';
    $http({
      url: window.global.baseurl+url,
      method: "GET",
      params: {'my_key': window.global.my_key, 'api_key': window.global.api_key, 'user_id': $scope.me.user_id},
    }).then(function mySucces(response) {
      LoadingService.hideLoading();
      if(response.data.status==true){
        //$scope.resumes = response.data.resumes;
        if(!Array.isArray(response.data.resumes)){
          return;
        }
        for (var i = 0; i < response.data.resumes.length; i++) {
          var found = false;
          for (var j = 0; j < $scope.resumes.length; j++) {
            if($scope.resumes[j].filename == response.data.resumes[i].filename){
              found = true;
              break;
            }
          }
          if(!found){
            $scope.resumes.push(response.data.resumes[i]);
          }
        }
      }else{
        //alert("Error -->" +JSON.stringify(response.data.msg));
        if(response.data.msg=="Invalid mobile key used"){
          AuthService.getApiKey($scope.me.user_id).then(function (result) {
          });
        }
      }
    }, function(error){
        LoadingService.hideLoading();
        //there was an error fetching from the server
        alert(JSON.stringify(error));
        });
    //$scope.$broadcast('scroll.refreshComplete');
  }
  dc.addResume = function(){
    $scope.hideSheet = $ionicActionSheet.show({
      buttons: [
        { text: 'Take photo' },
        { text: 'PDF' },
        { text: 'Image' }
      ],
      titleText: 'Managing Resume by',
      cancelText: 'Cancel',
      buttonClicked: function(index) {
        $scope.hideSheet();

        if(index==0){
          /*var options = {
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            //allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            //targetWidth: 500,
            //targetHeight: 500,
            //popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false,
            quality: 80,
            correctOrientation:true
          };
          $cordovaCamera.getPicture(options).then(function(imageData) {
            $scope.file.resume="data:image/jpeg;base64,"+imageData;
            //$scope.file.imgverified = true;
            $state.go('app.manageImgResume', {index:index});
          });*/
          $state.go('app.manageImgResume', {index:index});
        }else if(index==1){

          $state.go('app.managePDFResume');

        }else {
          /*var options = {
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            //allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            //targetWidth: 500,
            //targetHeight: 500,
            //popoverOptions: CameraPopoverOptions,
            quality: 80//,
          };

          $cordovaCamera.getPicture(options).then(function(imageData) {
            $scope.file.resume="data:image/jpeg;base64,"+imageData;
            //$scope.file.imgverified = true;
            $state.go('app.manageImgResume');
          });*/
          $state.go('app.manageImgResume', {index:index});
        }
      }
    });
  };
  dc.goHome = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.postJobMain");
  };
  dc.goBack = function(){
    $ionicHistory.goBack();
  };
  dc.gotoMessage = function() {
    $state.go('app.systemMessage');
  };
  dc.goSetting = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.setting");
  };
  dc.deleteResume = function(resume, index){
    $cordovaDialogs.confirm('Are you sure?', 'Confirm to Delete', ['Yes','No'])
    .then(function(buttonIndex) {
      if(buttonIndex==1){
        var url='/mobile/manage_usercv';
        var operation = 'delete';
        var data = {
          my_key: window.global.my_key,
          api_key: window.global.api_key,
          cvname: resume.filename,
          user_id: $scope.me.user_id,
          operation: operation,
          filetype: getcodefromfiletype(resume.filetype)
        };
        $http({
          method: 'POST',
          url: window.global.baseurl+url,
          data: data,
          dataType: 'json',
          headers:
          {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function mySucces(response) {
          alert("responded -->" +(response.data.status));
          if(response.data.status==true){
            //$scope.resumes = response.data.resumes;
            $scope.resumes.splice(index, 1);
            //$state.go($state.current, {}, {reload: true});
          }else{
            alert("Error -->" +JSON.stringify(response.data.msg));
            //alert("Error -->" +JSON.stringify(response.data.msg));
            if(response.data.msg=="Invalid mobile key used"){
              AuthService.getApiKey($scope.me.user_id).then(function (result) {
              });
            }
          }
        }, function(error){
            //LoadingService.hideLoading();
            //there was an error fetching from the server
            alert(JSON.stringify(error));
            });
      }else{
        return false;
      }
    }, function(error) {
      alert("Error -> " + error);
    });
    $ionicListDelegate.closeOptionButtons();
  }
  dc.editResume = function(resume){
    $cordovaDialogs.prompt('Enter new name', 'Changing file name', ['OK','Cancel'], resume.filename)
    .then(function(result) {
      var input = result.input1;
      // no button = 0, 'OK' = 1, 'Cancel' = 2
      var btnIndex = result.buttonIndex;

      if(btnIndex==1){
        if(resume.filename == input || input.length ==0){
          alert('Error --> Not valid name');
          return;
        }
        var url='/mobile/manage_usercv';
        var operation = 'edit';
        var data = {
          my_key: window.global.my_key,
          api_key: window.global.api_key,
          cvname: resume.filename,
          newcvname: input,
          user_id: $scope.me.user_id,
          operation: operation,
          filetype: getcodefromfiletype(resume.filetype)
        };
        $http({
          method: 'POST',
          url: window.global.baseurl+url,
          data: data,
          dataType: 'json',
          headers:
          {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function mySucces(response) {
          alert("responded -->"  +(response.data.status));
          if(response.data.status==true){
            $scope.resumes = response.data.resumes;
            $state.go($state.current, {}, {reload: true});
          }else{
            alert("Error -->" +JSON.stringify(response.data.msg));
            //alert("Error -->" +JSON.stringify(response.data.msg));
            if(response.data.msg=="Invalid mobile key used"){
              AuthService.getApiKey($scope.me.user_id).then(function (result) {
              });
            }
          }
        }, function(error){
            //LoadingService.hideLoading();
            //there was an error fetching from the server
            alert(JSON.stringify(error));
            });

      }else{
        return false;
      }
    }, function(error) {
      alert("Error -> " + error);
    });
    $ionicListDelegate.closeOptionButtons();
  }
  dc.openResume = function(resume){
    LoadingService.showLoading();
    var url='/mobile/manage_usercv';
    var operation = 'open';
    var data = {
      my_key: window.global.my_key,
      api_key: window.global.api_key,
      cvname: resume.filename,
      user_id: $scope.me.user_id,
      operation: operation,
      filetype: getcodefromfiletype(resume.filetype)
    };
    $http({
      method: 'POST',
      url: window.global.baseurl+url,
      data: data,
      dataType: 'json',
      headers:
      {'Content-Type': 'application/x-www-form-urlencoded'}
    }).then(function mySucces(response) {
      LoadingService.hideLoading();
      alert("responded -->"  +(response.data.status));
      if(response.data.status==true){
        if(resume.filetype == 'PDF')
        {
          $scope.file.resume = response.data.resume.fileblob;
          var myBaseString = response.data.resume.fileblob;
          alert("myBaseString size-->" +myBaseString.length);

          var block = myBaseString.split(";");
          var dataType = block[0].split(":")[1];// In this case "application/pdf"
          var realData = block[1].split(",")[1];// In this case "JVBERi0xLjcKCjE...."
          var blob = new Blob([base64ToUint8Array(realData)], { type: dataType });
          $scope.pdfUrl = URL.createObjectURL(blob);
          // $state.go($state.current, {}, {reload: true});
          $scope.title = resume.filename;
          $scope.isimg = false;
          $scope.ispdf = true;
          dc.modal.show();
        }else if(resume.filetype == 'Image'){

          $scope.file.resume=response.data.resume.fileblob;
          alert("img size-->" +$scope.file.resume.length);
          //console.log($scope.file.resume);
          $scope.title = resume.filename;
          $scope.isimg = true;
          $scope.ispdf = false;
          dc.modal.show();
          // $state.go('app.manageImgResume');
        }
      }else{
        alert("Error -->" +JSON.stringify(response.data.msg));
        //alert("Error -->" +JSON.stringify(response.data.msg));
        if(response.data.msg=="Invalid mobile key used"){
          AuthService.getApiKey($scope.me.user_id).then(function (result) {
          });
        }
      }
    }, function(error){
        LoadingService.hideLoading();
        //there was an error fetching from the server
        alert(JSON.stringify(error));
        });
    $ionicListDelegate.closeOptionButtons();
  }
  dc.get_userCVList();

  return dc;
  //$scope.resumes = [{filename:'TimHorton 20170101', filetype:'PDF'},{filename:'Zellers 20161101', filetype:'Image'},{filename:'CanadianTire 20150623', filetype:'Text'}];
})
.controller('PDFResumeCtrl', function($scope, $http, $state, $ionicHistory, $cordovaDialogs, $ionicActionSheet, $cordovaCamera, $cordovaFile, $ionicModal, LoadingService, LZString, $base64) {

  $scope.$watch('files', function() {
    $scope.selectResume($scope.files);
  });

  function base64ToUint8Array(base64) {
    var raw = atob(base64);
    var uint8Array = new Uint8Array(raw.length);
    for (var i = 0; i < raw.length; i++) {
      uint8Array[i] = raw.charCodeAt(i);
    }
    return uint8Array;
  };
  $scope.selectResume = function(files){
    if (files && files.length) {
      //  alert(files[0].name);
      var fileToLoad = files[0];
      if(fileToLoad.type != 'application/pdf'){
        alert('Error --> File is not in pdf format!!');
        $scope.file.pdfverified = false;
        return;
      }
      $scope.file.pdfverified = true;
      $scope.file.name = files[0].name;
      var fileReader = new FileReader();
      fileReader.onload = function(fileLoadedEvent)
      {
        //console.log(fileLoadedEvent.target.result);
        $scope.file.resume = fileLoadedEvent.target.result;
        var myBaseString = fileLoadedEvent.target.result;
        var block = myBaseString.split(";");
        var dataType = block[0].split(":")[1];// In this case "application/pdf"
        var realData = block[1].split(",")[1];// In this case "JVBERi0xLjcKCjE...."
        var blob = new Blob([base64ToUint8Array(realData)], { type: dataType });

        //$scope.base64blob = LZString.compressToBase64(blob);

        $scope.pdfUrl = URL.createObjectURL(blob);

        $state.go($state.current, {}, {reload: true});
        // Display the modal view
        //vm.modal.show();
      };
      fileReader.readAsDataURL(fileToLoad);
    }
  };
  $scope.goHome = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.postJobMain");
  };
  $scope.goBack = function(){
    $ionicHistory.goBack();
  };
  $scope.gotoMessage = function() {
    $state.go('app.systemMessage');
  };
  $scope.goSetting = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.setting");
  };
  $scope.clearResume = function(){
    $ionicHistory.goBack();
  };
  function Uint8ToString(u8a){
    var CHUNK_SZ = 0x8000;
    var c = [];
    for (var i=0; i < u8a.length; i+=CHUNK_SZ) {
      c.push(String.fromCharCode.apply(null, u8a.subarray(i, i+CHUNK_SZ)));
    }
    return c.join("");
  }
  $scope.uploadResume = function(){
    if(!$scope.file.resume){
      alert("Error : No resume selected!");
      return;
    }
    $cordovaDialogs.prompt('Enter File name', 'Uploading Resume', ['OK','Cancel'], $scope.file.name)
    .then(function(result) {
      var input = result.input1;
      // no button = 0, 'OK' = 1, 'Cancel' = 2
      var btnIndex = result.buttonIndex;

      if(btnIndex==1){
        LoadingService.showLoading();
/**********/
//alert("Size of original : " + $scope.file.resume.length);
//console.log($scope.file.resume);
//var compressedui8 = LZString.compressToUint8Array($scope.file.resume);
//var compressedutf16 = LZString.compressToUTF16($scope.file.resume);
//var compressed = LZString.compress($scope.file.resume);
//var compressed = Base64String.compress($scope.file.resume);
//alert("Size of compressed : " + compressed.length + ",  compressedui8 : "+ compressedui8.length + ", compressedutf16 : "+compressedutf16.length);
//alert("Size of compressed : " + compressedui8.length);

//var base64compressed = btoa(Uint8ToString(compressed));
//alert("Size of compressed : " + base64compressed.length);
//console.log(compressed);
//string = LZString.decompressToEncodedURIComponent(compressed);
//alert("Sample is: " + string);
/**********/
        var url='/mobile/manage_usercv';
        var operation = 'insert';
        var filetype = '3003';
        var data = {
          my_key: window.global.my_key,
          api_key: window.global.api_key,
          cvname: input,
          cvblob: $scope.file.resume,
          //cvblob: compressedui8,
          user_id: $scope.me.user_id,
          operation: operation,
          filetype: filetype
        };
        $http({
          method: 'POST',
          url: window.global.baseurl+url,
          data: data,
          dataType: 'json',
          headers:
          {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function mySucces(response) {
          LoadingService.hideLoading();
          alert("responded -->"  +(response.data.status));
          //alert("registering device= " + response.data.status + " user_id= " + response.data.user_id);
          if(response.data.status==true){
            $scope.resumes = response.data.resumes;
            $scope.file = {};
            $scope.file.fileverified = false;
            //$ionicHistory.goBack( );
            $state.go('app.manageResume');

            //alert("$scope.me.user_id="+$scope.me.user_id);
          }else{
            alert("Error -->" +JSON.stringify(response.data.msg));
            //alert("Error -->" +JSON.stringify(response.data.msg));
            if(response.data.msg=="Invalid mobile key used"){
              AuthService.getApiKey($scope.me.user_id).then(function (result) {
              });
            }
          }
        }, function(error){
            LoadingService.hideLoading();
            //there was an error fetching from the server
            alert(JSON.stringify(error));
            });
      }else{
        return false;
      }
    }, function(error) {
      alert("Error -> " + error);
    });
  };
})
.controller('ImgResumeCtrl', function($scope, $http, $state, $stateParams, $ionicHistory, $cordovaDialogs, $ionicActionSheet, $cordovaCamera, $cordovaFile, $ionicModal, LoadingService, AuthService) {
  $scope.init = function(){
    var index = $stateParams.index;
    if(index==0)
    {
      var options = {
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        //allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        //targetWidth: 500,
        //targetHeight: 500,
        //popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false,
        quality: 80,
        correctOrientation:true
      };
      $cordovaCamera.getPicture(options).then(function(imageData) {
        $scope.file.resume="data:image/jpeg;base64,"+imageData;

      });
    }else {
      var options = {
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        //allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        //targetWidth: 500,
        //targetHeight: 500,
        popoverOptions: CameraPopoverOptions,
        quality: 80,
        correctOrientation:true
      };

      $cordovaCamera.getPicture(options).then(function(imageData) {
        $scope.file.resume="data:image/jpeg;base64,"+imageData;

      });
    }
  }
  $scope.goHome = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.postJobMain");
  };
  $scope.goBack = function(){
    $ionicHistory.goBack();
  };
  $scope.gotoMessage = function() {
    $state.go('app.systemMessage');
  };
  $scope.goSetting = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.setting");
  };
  $scope.clearResume = function(){
    $ionicHistory.goBack();
  };
  $scope.uploadResume = function(){
    $cordovaDialogs.prompt('Enter File name', 'Uploading Resume', ['OK','Cancel'])
    .then(function(result) {
      var input = result.input1;
      // no button = 0, 'OK' = 1, 'Cancel' = 2
      var btnIndex = result.buttonIndex;

      if(btnIndex==1){
        LoadingService.showLoading();
        var url='/mobile/manage_usercv';
        var operation = 'insert';
        var filetype = '3001';
        var data = {
          my_key: window.global.my_key,
          api_key: window.global.api_key,
          cvname: input,
          cvblob: $scope.file.resume,
          user_id: $scope.me.user_id,
          operation: operation,
          filetype: filetype
        };
        $http({
          method: 'POST',
          url: window.global.baseurl+url,
          data: data,
          dataType: 'json',
          headers:
          {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function mySucces(response) {
          LoadingService.hideLoading();
          alert("responded -->"  +(response.data.status));
          //alert("registering device= " + response.data.status + " user_id= " + response.data.user_id);
          if(response.data.status==true){

            $state.go('app.manageResume');
            //alert("$scope.me.user_id="+$scope.me.user_id);
          }else{
            alert("Error -->" +JSON.stringify(response.data.msg));
            //alert("Error -->" +JSON.stringify(response.data.msg));
            if(response.data.msg=="Invalid mobile key used"){
              AuthService.getApiKey($scope.me.user_id).then(function (result) {
              });
            }
          }
        }, function(error){
            LoadingService.hideLoading();
            //there was an error fetching from the server
            alert(JSON.stringify(error));
            });
      }else{
        return false;
      }
    }, function(error) {
      alert("Error -> " + error);
    });
  };
})
.controller('UserProfileCtrl', function($scope, $http, $state, $ionicHistory, $cordovaDialogs, $ionicActionSheet, $cordovaCamera, $cordovaFile, $ionicModal, AuthService, LoadingService) {
  $scope.openImagePicker = function(){
    $scope.hideSheet = $ionicActionSheet.show({
      buttons: [
        { text: 'Take photo' },
        { text: 'Photo from library' }
      ],
      titleText: 'Updating Avatar by',
      cancelText: 'Cancel',
      buttonClicked: function(index) {
        $scope.hideSheet();

        if(index==0){
          var options = {
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 100,
            targetHeight: 100,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false,
            quality: 80,
            correctOrientation:true
          };

          $cordovaCamera.getPicture(options).then(function(imageData) {
            $scope.me.picture="data:image/jpeg;base64,"+imageData;
            $scope.newavatar = true;
          });

        }else{
          var options = {
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 100,
            targetHeight: 100,
            popoverOptions: CameraPopoverOptions,
            quality: 80,
            correctOrientation:true
          };

          $cordovaCamera.getPicture(options).then(function(imageData) {
            $scope.me.picture="data:image/jpeg;base64,"+imageData;
            $scope.newavatar = true;
          });
        }
      }
    });
  };

  $scope.updateProfile = function(param){
    var msg = 'Enter ' + param;
    var defaultinput = $scope.me.name;
    if (param === 'phone') {
      defaultinput =  $scope.me.phone;
    }else if (param === 'email') {
      defaultinput =  $scope.me.email;
    }
    $cordovaDialogs.prompt(msg, param, ['OK','Cancel'], defaultinput)
    .then(function(result) {
      var input = result.input1;
      // no button = 0, 'OK' = 1, 'Cancel' = 2
      var btnIndex = result.buttonIndex;
      if(btnIndex==1){
        if(param === 'name'){
          $scope.me.name = input;
        }else if (param === 'phone') {
          $scope.me.phone = input;
        }else if (param === 'email') {
          $scope.me.email = input;
        }
      }else{
        return false;
      }
    }, function(error) {
      alert("Error -> " + error);
    });
  };
  $scope.saveProfile = function () {
    $cordovaDialogs.confirm('Do you want to update your info?', 'Confirm to Update', ['Yes','No'])
    .then(function(buttonIndex) {
      // no button = 0, 'OK' = 1, 'Cancel' = 2
      if(buttonIndex==1){
        LoadingService.showLoading();
        var url='/mobile/update_profile_post';
        var data = {
          my_key: window.global.my_key,
          api_key: window.global.api_key,
          user_id : $scope.me.user_id,
          name : $scope.me.name,
          email : $scope.me.email,
          phone : $scope.me.phone,
          picture : $scope.me.picture,
          newavatar : $scope.newavatar
        };
        $http({
          method: 'POST',
          url: window.global.baseurl+url,
          data: data,
          dataType: 'json',
          headers:
          {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function mySucces(response) {
          LoadingService.hideLoading();
          alert("responded -->" +(response.data.status));
          //alert("registering device= " + response.data.status + " user_id= " + response.data.user_id);
          if(response.data.status==true){
            /*var user = JSON.parse(window.localStorage.getItem("login-profile"));
            user.name = $scope.me.name;
            user.email = $scope.me.email;
            user.phone = $scope.me.phone;
            user.picture = $scope.me.picture;
            window.localStorage.setItem("login-profile", JSON.stringify(user));*/
            AuthService.storeLoginProfile($scope.me);

            $ionicHistory.goBack();
          }else{
            alert("Error -->" +JSON.stringify(response.data.msg));
            //alert("Error -->" +JSON.stringify(response.data.msg));
            if(response.data.msg=="Invalid mobile key used"){
              AuthService.getApiKey($scope.me.user_id).then(function (result) {
              });
            }
          }
        }, function(error){
            LoadingService.hideLoading();
            //there was an error fetching from the server
            alert(JSON.stringify(error));
            });
      }else{
        return false;
      }

    }, function(error) {
      alert("Error -> " + error);
    });
  };
})
.controller('MainCtrl', function($scope, $state) {
  $scope.jobApp = function() {
    $state.go('app.postJobMain');
  };

})
.controller('PostJobMainCtrl', function($scope, $state, $ionicHistory, getGPS, BrowsingModeService) {
  $scope.$on('$ionicView.enter', function() {
      //if($stateParams.filter=='change')
      {
        $ionicHistory.clearCache();

      }
  });
  $scope.goHome = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.postJobMain");
  };
  $scope.goBack = function(){
    $ionicHistory.goBack();
  };
  $scope.gotoMessage = function() {
    $state.go('app.systemMessage');
  };
  $scope.goSetting = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.setting");
  };
  /*$scope.$on('cloud:push:notification', function(event, data) {
    alert('event='+JSON.stringify(event)+'\ndata='+JSON.stringify(data));
    //  var msg = data.message;
    //  alert('cloud:push:notification =>' + msg.title + ': ' + msg.text);
      //alert("event -->" +JSON.stringify(event) + "\ndata -->" +JSON.stringify(data));
    });*/
  var browsing = BrowsingModeService.getBrowsingMode();
  if(browsing && browsing.mode==='list'){
    $scope.listmode = true;
  }else{
    $scope.listmode = false;
  }
  //LocationService.getCurrentLocation();
  //LocationService.getCurrentLocation().then(function(gps)
  {
    window.global.gps = getGPS;
  }
  $scope.items = [
    { title: "Applied", page:"app.myJobApplied", count:3},
    { title: "Applicants", page:"app.applicants", count:0},
    { title: "Bookmarks", page:"app.bookmark", count:4},
    { title: "Viewed", page:"app.recently", count:10},
    { title: "Matched", page:"app.matched", count:10}
];
$scope.selectedItem = $scope.items[0];
$scope.$watch('data.selectedItem', function(newValue){
    console.log(newValue);
    /*if(newValue && newValue.title != "")
    {
      $state.go(newValue.page);
    }*/
});
$scope.gotoPage = function(selectedItem){
  if(selectedItem && selectedItem.title != "")
  {
    $state.go(selectedItem.page);
  }
}
  //$ionicHistory.clearCache();
})
.controller('MyScheduleCtrl', function($scope, $ionicHistory, $http, $state, LoadingService, AuthService) {
  'use strict';

   $scope.calendar = {};
   $scope.changeMode = function (mode) {
       $scope.calendar.mode = mode;
   };
   $scope.calendar.queryMode = "remote";
   $scope.calendar.monthviewDisplayEventTemplateUrl = "views/app/monthviewDisplayEvent2.html";
   $scope.calendar.monthviewEventDetailTemplateUrl = "views/app/monthviewEventDetail2.html";
   $scope.loadEvents = function () {
       $scope.calendar.eventSource = createRandomEvents();
   };
   $scope.calendar.mode = "month";

   $scope.onEventSelected = function (event) {
     if(event.actiontype == "post"){
        $state.go("app.postDetail", {'post_id':event.post_id, 'isposter': true});
     }

       //console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
   };
   $scope.goHome = function(){
     $ionicHistory.nextViewOptions({ disableBack: true });
     $state.go("app.postJobMain");
   };
   $scope.goBack = function(){
     $ionicHistory.goBack();
   };
   $scope.gotoMessage = function() {
     $state.go('app.systemMessage');
   };
   $scope.goSetting = function(){
     $ionicHistory.nextViewOptions({ disableBack: true });
     $state.go("app.setting");
   };
   $scope.reloadSource = function (startTime, endTime) {
     console.log('reloadSource :' + startTime + '-' + endTime );
     {
       LoadingService.showLoading();
       var url='/mobile/get_user_schedule';
       $http({
         url: window.global.baseurl+url,
         method: "GET",
         params: {'my_key': window.global.my_key, 'api_key': window.global.api_key, 'user_id' : $scope.me.user_id, 'start_date' : startTime, 'end_date' : endTime},
       }).then(function (response) {
         LoadingService.hideLoading();
         console.log("responded -->" +JSON.stringify(response.data));
         if(response.data.status==true){
           var mypost = response.data.mypost;
           var myapply = response.data.myapply;
           var events = [];
           //mypost
           if(Array.isArray(mypost)){
             for (var i = 0, len = mypost.length; i < len; i++) {
               if(mypost[i].sequence == "1"){
                var startdate = new Date(Number(mypost[i].applicationdeadline));
                var enddate = new Date(Number(mypost[i].decisionby));
                events.push({
                    actiontype: 'post',
                    title: mypost[i].name,
                    post_id: mypost[i].post_id,
                    icon: mypost[i].icon,
                    startTime: startdate,
                    endTime: enddate,
                    allDay: false
                });
              }else{
                events.push({
                    actiontype: 'post',
                    title: mypost[i].name,
                    post_id: mypost[i].post_id,
                    icon: mypost[i].icon,
                    startTime: new Date(Number(mypost[i-1].decisionby)),
                    endTime: new Date(Number(mypost[i].decisionby)),
                    allDay: false
                });
              }
             }
           }
           if(Array.isArray(myapply)){
             //myapply
             for (var i = 0, len = myapply.length; i < len; i++) {{
                events.push({
                    actiontype: 'apply',
                    title: myapply[i].name + " deadline",
                    post_id: myapply[i].post_id,
                    icon: myapply[i].icon,
                    startTime: new Date(Number(myapply[i].starttime)),
                    endTime: new Date(Number(myapply[i].endtime)),
                    allDay: false
                });
              }
             }
           }

           console.log("events -->" +JSON.stringify(events));
           $scope.calendar.eventSource = events;
         }else{
           $scope.calendar.eventSource = undefined;
           //alert("Error -->" +JSON.stringify(response.data.msg));
           if(response.data.msg=="Invalid mobile key used"){
             AuthService.getApiKey($scope.me.user_id).then(function (result) {
             });
           }
         }
         }, function(error){
             LoadingService.hideLoading();
             //there was an error fetching from the server
             alert(JSON.stringify(error));
             });
     }
   };

   $scope.today = function () {
       $scope.calendar.currentDate = new Date();

       var month = $scope.calendar.currentDate.getFullYear() + " " + ($scope.calendar.currentDate.getMonth() + 1);
       //$scope.selectedMonth = month;
       //$scope.viewTitle = $scope.calendar.currentDate;
   };

   $scope.isToday = function () {
       var today = new Date(),
           currentCalendarDate = new Date($scope.calendar.currentDate);

       today.setHours(0, 0, 0, 0);
       currentCalendarDate.setHours(0, 0, 0, 0);
       return today.getTime() === currentCalendarDate.getTime();
   };

   $scope.onTimeSelected = function (selectedTime, events, disabled) {
       //var date = new Date(selectedTime);
       //var month = date.getFullYear() + " " + (date.getMonth() + 1);
       //$scope.selectedMonth = month;
       //$scope.viewTitle = date;
       console.log('Selected time: ' + selectedTime + ', hasEvents: ' + (events !== undefined && events.length !== 0) + ', disabled: ' + disabled);
   };

   function createRandomEvents() {
       var events = [];
       var twodaysfromnow = new Date();
       twodaysfromnow.setDate(twodaysfromnow.getDate() + 2);
       events.push({
           title: 'All Day for 2days ',
           startTime: new Date(),
           endTime: twodaysfromnow,
           allDay: false
       });
       for (var i = 0; i < 50; i += 1) {
           var date = new Date();
           var eventType = Math.floor(Math.random() * 2);
           var startDay = Math.floor(Math.random() * 90) - 45;
           var endDay = Math.floor(Math.random() * 2) + startDay;
           var startTime;
           var endTime;
           if (eventType === 0) {
               startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
               if (endDay === startDay) {
                   endDay += 1;
               }
               endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
               events.push({
                   title: 'All Day - ' + i,
                   startTime: startTime,
                   endTime: endTime,
                   allDay: true
               });
           } else {
               var startMinute = Math.floor(Math.random() * 24 * 60);
               var endMinute = Math.floor(Math.random() * 180) + startMinute;
               startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
               endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
               events.push({
                   title: 'Event - ' + i,
                   startTime: startTime,
                   endTime: endTime,
                   allDay: false
               });
           }
       }
       return events;
   }
})

.controller('PostJobCtrl', function($scope, $http, $state, $ionicHistory, $cordovaDialogs, $ionicListDelegate, LoadingService, AuthService) {
  $scope.postings = [];
  $scope.refreshData = function() {
    LoadingService.showLoading();
    var url='/mobile/get_my_post';
    $http({
      url: window.global.baseurl+url,
      method: "GET",
      params: {'my_key': window.global.my_key, 'api_key': window.global.api_key, 'user_id' :$scope.me.user_id},
    }).then(function (response) {
      LoadingService.hideLoading();
      console.log("responded -->" +JSON.stringify(response.data));
      if(response.data.status==true){
        var count;
        var post_id;
        var postings = [];
        var ii = 0;
        var j=0;
        for (var i = 0, len = response.data.postings.length; i < len; i++) {
          if(response.data.postings[i].post_id != post_id){
            post_id = response.data.postings[i].post_id;
            count = response.data.postings[i].interviewcount;
            postings[j] = {};
            postings[j].post_id = response.data.postings[i].post_id;
            postings[j].title = response.data.postings[i].title;
            if(response.data.postings[i].postingdate){
              postings[j].postingdate = response.data.postings[i].postingdate;
            }
            postings[j].status = response.data.postings[i].status;
            postings[j].interviewstage = response.data.postings[i].interviewstage;
            postings[j].interviewcount = response.data.postings[i].interviewcount;
            postings[j].cvrequired = response.data.postings[i].cvrequired;
            postings[j].hiringtype = response.data.postings[i].hiringtype;
            postings[j].applicantcount = response.data.postings[i].applicantcount;
            if(response.data.postings[i].applicationdeadline){
                postings[j].applicationdeadline = new Date(Number(response.data.postings[i].applicationdeadline));
            }
            postings[j].interviews = [];
            ii = 0;
            /*
            if(Array.isArray(response.data.mystatus)){
              for (var k = 0, len2 = response.data.mystatus.length; k < len2; k++) {
                if(postings[j].post_id == response.data.mystatus[k].post_id){
                  postings[j].isbookmarked=response.data.mystatus[k].isbookmarked;
                  postings[j].isapplicant=response.data.mystatus[k].isapplicant;
                  postings[j].isposter=response.data.mystatus[k].isposter;
                  postings[j].isfalsead=response.data.mystatus[k].isfalsead;
                  postings[j].userstatus=response.data.mystatus[k].userstatus;
                  break;
                }
              }
            }*/
          }
          if(count != 0){
            postings[j].interviews[ii]={};
            postings[j].interviews[ii].sequence = response.data.postings[i].sequence;
            postings[j].interviews[ii].interview_id = response.data.postings[i].interview_id;
            postings[j].interviews[ii].closing = response.data.postings[i].closing;
            postings[j].interviews[ii].name = response.data.postings[i].name;
            //postings[j].interviews[ii].decisionby = response.data.postings[i].decisionby;
            postings[j].interviews[ii].icon = response.data.postings[i].icon;
            postings[j].interviews[ii].applicantcount = response.data.postings[i].applicantcount2;
            ii++;
            count--;
          }
          if(count == 0){
            //ii = 0;
            j++;
          }
        }
        console.log("postings -->" +JSON.stringify(postings));
        //$scope.postings = postings;
        for (var i = 0; i < postings.length; i++) {
          var found = false;
          for (var j = 0; j < $scope.postings.length; j++) {
            if($scope.postings[j].post_id == postings[i].post_id){
              found = true;
              break;
            }
          }
          if(!found){
            $scope.postings.push(postings[i]);
          }
        }
      }else{
        $scope.postings = undefined;
        //alert("Error -->" +JSON.stringify(response.data.msg));
        if(response.data.msg=="Invalid mobile key used"){
          AuthService.getApiKey($scope.me.user_id).then(function (result) {
          });
        }
      }
      //$scope.$broadcast('scroll.refreshComplete');
      }, function(error){
          LoadingService.hideLoading();
          //there was an error fetching from the server
          alert(JSON.stringify(error));
          });


    /*$scope.postings = [
      {post_id:40, title:'Convenience Cashier Wanted @North York', postingdate:'2017-02-06 05:26:54', status:'8005', cvrequired:'Y', applicantcount:5, interviews:[{sequence:1, icon:'ion-ios-people', applicantcount:4}, {sequence:2, icon:'ion-ios-people', applicantcount:0},{sequence:3, icon:'ion-ios-people', applicantcount:0}]}
      ,{post_id:41, title:'Convenience Cashier Wanted @North York', postingdate:'2016-02-06 05:26:54', status:'8004', cvrequired:'Y', applicantcount:15, interviews:[{sequence:2, icon:'ion-ios-people', applicantcount:5}, {sequence:1, icon:'ion-ios-people', applicantcount:10}]}
  ];*/

  }
  $scope.goHome = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.postJobMain");
  };
  $scope.goBack = function(){
    $ionicHistory.goBack();
  };
  $scope.gotoMessage = function() {
    $state.go('app.systemMessage');
  };
  $scope.goSetting = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.setting");
  };
  $scope.init = function(){
      //$scope.postings = getMyPost;
      $scope.refreshData();
  }
  $scope.addPost = function(){
    if(Array.isArray($scope.postings) && $scope.postings.length >0){
      if($scope.postings[0].status == '8001'){
        $scope.continuePost($scope.postings[0].post_id);
      }else{
        $state.go("app.postJobStepOne");
      }
    }else{
      $state.go("app.postJobStepOne");
    }
  }
  $scope.continuePost = function(post_id){

    //alert("not yet implemented!");
    $state.go("app.postJobStepOne", {'post_id':post_id});
  }

  $scope.openPost = function(post){

    if(post.status=='8001'){
      $scope.continuePost(post.post_id);
    }else{
      //var visposter = (post.user_id==$scope.me.user_id)?true:false;
      $state.go("app.postDetail", {'post_id':post.post_id, 'isposter' : true});
    }
    $ionicListDelegate.closeOptionButtons();
  }
  $scope.deletePost = function(post, index){
    $cordovaDialogs.confirm('Are you sure?', 'Confirm to Delete', ['Yes','No'])
    .then(function(buttonIndex) {
      if(buttonIndex==1){
        LoadingService.showLoading();
        var url='/mobile/delete_post';

        var data = {
          my_key: window.global.my_key,
          api_key: window.global.api_key,
          user_id: $scope.me.user_id,
          post_id: post.post_id
        };
        $http({
          method: 'POST',
          url: window.global.baseurl+url,
          data: data,
          dataType: 'json',
          headers:
          {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function mySucces(response) {
          LoadingService.hideLoading();
          alert("responded -->" +(response.data.status));
          if(response.data.status==true){
            $scope.postings.splice(index, 1);
            //$state.go($state.current, {}, {reload: true});
          }else{
            alert("Error -->" +JSON.stringify(response.data.msg));
            //alert("Error -->" +JSON.stringify(response.data.msg));
            if(response.data.msg=="Invalid mobile key used"){
              AuthService.getApiKey($scope.me.user_id).then(function (result) {
              });
            }
          }
        });
      }else{
        return false;
      }
    }, function(error){
        LoadingService.hideLoading();
        //there was an error fetching from the server
        alert(JSON.stringify(error));
        });
    $ionicListDelegate.closeOptionButtons();
  }
  $scope.closePost = function(post, index){
    $cordovaDialogs.confirm('Are you sure?', 'Confirm to Close', ['Yes','No'])
    .then(function(buttonIndex) {
      if(buttonIndex==1){
        LoadingService.showLoading();
        var url='/mobile/close_post';

        var data = {
          my_key: window.global.my_key,
          api_key: window.global.api_key,
          user_id: $scope.me.user_id,
          post_id: post.post_id
        };
        $http({
          method: 'POST',
          url: window.global.baseurl+url,
          data: data,
          dataType: 'json',
          headers:
          {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function mySucces(response) {
          LoadingService.hideLoading();
          alert("responded -->" +(response.data.status));
          if(response.data.status==true){
            //$state.go($state.current, {}, {reload: true});
            $state.go("app.postJobMain");
          }else{
            alert("Error -->" +JSON.stringify(response.data.msg));
            //alert("Error -->" +JSON.stringify(response.data.msg));
            if(response.data.msg=="Invalid mobile key used"){
              AuthService.getApiKey($scope.me.user_id).then(function (result) {
              });
            }
          }
        });
      }else{
        return false;
      }
    }, function(error){
        LoadingService.hideLoading();
        //there was an error fetching from the server
        alert(JSON.stringify(error));
        });
    $ionicListDelegate.closeOptionButtons();
  }
  $scope.completePost = function(post, index){
    $cordovaDialogs.confirm('Are you sure?', 'Confirm to Complete', ['Yes','No'])
    .then(function(buttonIndex) {
      if(buttonIndex==1){
        LoadingService.showLoading();
        var url='/mobile/complete_post';

        var data = {
          my_key: window.global.my_key,
          api_key: window.global.api_key,
          user_id: $scope.me.user_id,
          post_id: post.post_id
        };
        $http({
          method: 'POST',
          url: window.global.baseurl+url,
          data: data,
          dataType: 'json',
          headers:
          {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function mySucces(response) {
          LoadingService.hideLoading();
          alert("responded -->" +(response.data.status));
          if(response.data.status==true){
            //$state.go($state.current, {}, {reload: true});
            $state.go("app.postJobMain");
          }else{
            alert("Error -->" +JSON.stringify(response.data.msg));
            //alert("Error -->" +JSON.stringify(response.data.msg));
            if(response.data.msg=="Invalid mobile key used"){
              AuthService.getApiKey($scope.me.user_id).then(function (result) {
              });
            }
          }
        });
      }else{
        return false;
      }
    }, function(error){
        LoadingService.hideLoading();
        //there was an error fetching from the server
        alert(JSON.stringify(error));
        });
    $ionicListDelegate.closeOptionButtons();
  }
})
.controller('PostDetailCtrl', function($scope, $state, $stateParams, LoadingService, getPostDetail, $ionicHistory, AuthService, InterviewIconService, $ionicActionSheet, $ionicSlideBoxDelegate, $http, $ionicModal, $ionicScrollDelegate, LocationService) {
  $scope.$on('$ionicView.enter', function() {
      //$scope.init();
      //if($stateParams.filter=='change')
      {
        $ionicHistory.clearCache();
      }
  });
  $scope.$on('$ionicView.afterLeave', function() {
      //$scope.init();
      //if($stateParams.filter=='change')
      {
        $ionicHistory.clearCache();
      }
  });
  $scope.goHome = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.postJobMain");
  };
  $scope.goBack = function(){
    $ionicHistory.goBack();
  };
  $scope.getPrevCache = function(){
    $ionicHistory.goBack();
  };
  $scope.gotoMessage = function() {
    $state.go('app.systemMessage');
  };
  $scope.goSetting = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.setting");
  };
  $scope.init = function() {
    var data = getPostDetail;
    $scope.post = data.post[0];
    $scope.language = data.language;
    $scope.language.english = false;
    $scope.language.french = false;
    $scope.language.korean = false;
    $scope.language.chinese = false;
    for (var i = 0; i < data.language.length; i++) {
      if(data.language[i].language =='9001') {
        $scope.language.english = true;
      }else if(data.language[i].language =='9002') {
        $scope.language.korean = true;
      }else if(data.language[i].language =='9003') {
        $scope.language.chinese = true;
      }else if(data.language[i].language =='9004') {
        $scope.language.french = true;
      }
    }
    $scope.tag = data.tag;
    $scope.interviews = data.interviews;
    $scope.countWorkPhotos = data.countWorkPhotos;
    if(Array.isArray(data.userstatus)){
      $scope.userstatus = data.userstatus[0];
    }else{
      $scope.userstatus = {"isapplicant":'N', "isposter":'N'};
    }

    $scope.isapplicant = ($scope.userstatus.isapplicant =='Y')?true:false;
    $scope.isposter = ($scope.userstatus.isposter =='Y')?true:false;
    //$scope.notapplied = (!$scope.isposter && !$scope.isapplicant)?true:false;
    if($scope.post.filetype=='3003'){
      var block = $scope.post.content.split(";");
      var dataType = block[0].split(":")[1];// In this case "application/pdf"
      var realData = block[1].split(",")[1];// In this case "JVBERi0xLjcKCjE...."
      var blob = new Blob([base64ToUint8Array(realData)], { type: dataType });
      $scope.pdfUrl = URL.createObjectURL(blob);
    }
    $scope.interviewTLData = {};
    $scope.interviewTLData.dataTable = new google.visualization.DataTable();
    $scope.interviewTLData.dataTable.addColumn({ type: 'string', id: 'seq' })
    $scope.interviewTLData.dataTable.addColumn({ type: 'date', id: 'Start' })
    $scope.interviewTLData.dataTable.addColumn({ type: 'date', id: 'End' })
    for (var i = 0; i < $scope.interviews.length; i++) {
      if (i == 0){
        //var startdate = new Date();
        var startdate = new Date(Number($scope.post.applicationdeadline));
        var enddate = new Date(Number($scope.interviews[i].decisionby));
        if(enddate < startdate){
          startdate = enddate;
        }
        $scope.interviewTLData.dataTable.addRow( [$scope.interviews[i].sequence.toString(), startdate, enddate]);
      }else{
        $scope.interviewTLData.dataTable.addRow( [$scope.interviews[i].sequence.toString(), new Date(Number($scope.interviews[i-1].decisionby)), new Date(Number($scope.interviews[i].decisionby))]);
      }
    }
    initMap($scope.post.latitude, $scope.post.longitude);

  }

    function initMap(latitude, longitude){
      var mapOptions = {
        center: new google.maps.LatLng(latitude, longitude),
        zoom: 18,
        streetViewControl: false,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById("mapdetail"), mapOptions);

      var positionMarker = new google.maps.Marker({
        position: new google.maps.LatLng(latitude, longitude),
        map: map,
        //draggable: true,
        title: $scope.post.name
      });
      $scope.positionMarker = positionMarker;
      var myMarker = new GeolocationMarker();
      myMarker.setCircleOptions({fillColor: '#808080'});
      /*google.maps.event.addListenerOnce(myMarker, 'position_changed', function() {
        map.setCenter(this.getPosition());
        map.fitBounds(this.getBounds());
      });*/

      myMarker.setMap(map);
      /*
      var myMarker = new GeolocationMarker(map,{
        position: new google.maps.LatLng
          (window.global.gps.lat, window.global.gps.long),
        //map: map,
        //draggable: true,
        title: 'My Location'
      });
      */
      $scope.myMarker = myMarker;
      $scope.map = map;

      //map.setCenter(new google.maps.LatLng(latitude, longitude));
    }
    $scope.centerOnPost = function() {
       if(!$scope.map) {
         return;
       }
       $scope.currentLocUsed = true;

         {
           $scope.map.setCenter(new google.maps.LatLng
             ($scope.post.latitude, $scope.post.longitude));
         }
     };

    $scope.centerOnMe = function() {
       if(!$scope.map) {
         return;
       }
       $scope.currentLocUsed = true;
       LocationService.getCurrentLocation().then(function(gps){
         window.global.gps= gps;
         if(window.global.gps.lat && window.global.gps.long){
           $scope.map.setCenter(new google.maps.LatLng
             (window.global.gps.lat, window.global.gps.long));
         }
       });
     };

  $scope.applicantApply = function(){
    //alert(post_id + " not yet implemented!");
    if($scope.me.isguest)
    {
      $state.go("app.applyJobStepOne", {'post':$scope.post});
    }else if($scope.post.cvrequired=='Y'){
      $state.go("app.applyJobStepTwo", {'post':$scope.post});
    }else{
      //in case of sns user applying for no cv
      ApplyService.apply($scope.post.post_id, null, null).then(function(response){
        console.log(JSON.stringify(response));
        console.log("submitApplication post.post_id="+$scope.post.post_id );
        var browsing = BrowsingModeService.getBrowsingMode();
        if(browsing && browsing.mode==='list'){
          $state.go("app.myJobSearchList");
        }else{
          $state.go("app.myJobSearchMap");
        }
      }, function(error){
          //there was an error fetching from the server
          console.log(JSON.stringify(error));
          });
    }
  }
  $scope.posterContinue = function(){
    alert($scope.post.post_id + " not yet implemented!");
  }
  $scope.applicantContinue = function(){
    //alert(post_id + " not yet implemented!");
    //get the applicant's next action
    if($scope.userstatus.userstatus == '1106'){ //InIdle  ==> check for timeslot and within valid timeslot open interview method
      var type = InterviewIconService.getType($scope.interviews[$scope.userstatus.interviewstage-1].icon);
      if(type == '5001'){  //APP
        $state.go("app.answerApp", {'post':$scope.post, 'interview':$scope.interviews[$scope.userstatus.interviewstage-1]});
      } else if (type == '5002'){ //ARS

      } else if (type == '5003'){  //CALL

      } else if (type == '5004'){  //CHAT

      } else if (type == '5005'){  //VIDEO

      } else if (type == '5006'){  //PERSON

      }
    }
  }

  $scope.actionForApplicant = function(interview){
    var actions = [];
    /*if($scope.userstatus.interviewstage > interview.sequence){
      actions.push({text:'Review Interview'});
    }else*/
    {
      actions.push({text:'Open Interview'});
    }

    $scope.hideSheet = $ionicActionSheet.show({
      buttons: actions,
      titleText: 'Interview Detail for ' + $scope.post.title + ' - ' + interview.name,
      cancelText: 'Cancel',
      buttonClicked: function(index) {
        $scope.hideSheet();
        if(actions[index].text === 'Open Interview'){
          $state.go("app.moduleInterviewDetailApplicant", {'post':$scope.post, 'interviews':$scope.interviews, 'interview_sequence':interview.sequence});
        }/*else if(actions[index].text === 'Review Interview'){
          $state.go("app.reviewInterview", {'post':$scope.post, 'interview_':interview});
        }*/
      }
    });
  }
  $scope.actionForPoster = function(interview){
    var actions = [];
    /*if($scope.userstatus.interviewstage > interview.sequence){
      actions.push({text:'Review Interview'});
    }else*/
    {
      actions.push({text:'Open Interview'});
    }

    $scope.hideSheet = $ionicActionSheet.show({
      buttons: actions,
      titleText: 'Interview Detail for ' + $scope.post.title + ' - ' + interview.name,
      cancelText: 'Cancel',
      buttonClicked: function(index) {
        $scope.hideSheet();
        if(actions[index].text === 'Open Interview'){
          $state.go("app.moduleInterviewDetailPoster", {'post':$scope.post, 'interviews':$scope.interviews, 'interview_sequence':interview.sequence});
        }/*else if(actions[index].text === 'Review Interview'){
          $state.go("app.reviewInterview", {'post':$scope.post, 'interview_':interview});
        }*/
      }
    });
  }

  function base64ToUint8Array(base64) {
    var raw = atob(base64);
    var uint8Array = new Uint8Array(raw.length);
    for (var i = 0; i < raw.length; i++) {
      uint8Array[i] = raw.charCodeAt(i);
    }
    return uint8Array;
  }

    $scope.zoomMin = 1;
    $scope.screenHeight =  window.innerHeight;
    /*
    $scope.openCompanyPhoto = function(companyprofile_id) {
        //$scope.activeSlide = index;
        //get company photo

        $scope.showModal('views/app/zoom.html');
    };*/
    $scope.getCompanyPhoto = function(){
      LoadingService.showLoading();
      var url='/mobile/get_companyphoto';
      $http({
        url: window.global.baseurl+url,
        method: "GET",
        params: {'my_key': window.global.my_key, 'api_key': window.global.api_key, 'user_id' : $scope.me.user_id, 'post_id' : $scope.post.post_id},
      }).then(function (response) {
        //console.log("responded -->" +JSON.stringify(response.data));
        if(response.data.status==true){

        }else{
          //alert("Error -->" +JSON.stringify(response.data.msg));
          if(response.data.msg=="Invalid mobile key used"){
            AuthService.getApiKey($scope.me.user_id).then(function (result) {
            });
          }
        }
          $scope.company = response.data;

          if($scope.company.workphotos == undefined){
            $scope.company.workphotos = [];
          }

          LoadingService.hideLoading();
          $scope.activeSlide = 0;
          $scope.showModal('views/app/zoom.html');
        }, function(error){
            LoadingService.hideLoading();
            //there was an error fetching from the server
            alert(JSON.stringify(error));
            });
    }
    $scope.slideChanged = function () {
      $ionicSlideBoxDelegate.update();
    };
    $scope.getAdditionalInfoPDF = function(){
      $scope.showModal('views/app/zoom2.html');
    }
    $scope.getAdditionalInfoIMG = function(){
      $scope.showModal('views/app/zoom3.html');
    }
    $scope.getAdditionalInfoTXT = function(){
      $scope.showModal('views/app/zoom4.html');
    }
    $scope.showModal = function(templateUrl) {
        $ionicModal.fromTemplateUrl(templateUrl, {
          scope: $scope
        }).then(function(modal) {
          $scope.modal = modal;
          $scope.modal.show();
        });
    }

    $scope.closeModal = function() {
        $scope.modal.hide();
        $scope.modal.remove();
    };

    $scope.updateSlideStatus = function(slide) {
      //if(slide)
      {
        var zoomFactor = $ionicScrollDelegate.$getByHandle('scrollHandle' + slide).getScrollPosition().zoom;

        if (zoomFactor == $scope.zoomMin)
          $ionicSlideBoxDelegate.enableSlide(true);
        else
          $ionicSlideBoxDelegate.enableSlide(false);
        $ionicSlideBoxDelegate.update();
      }

    };
})
.controller('PostContractSigReviewCtrl', function($scope, $state, $stateParams, LoadingService, getPostDetailContract, $ionicHistory, AuthService, InterviewIconService, $ionicActionSheet, $ionicSlideBoxDelegate, $http, $ionicModal, $ionicScrollDelegate, LocationService, $cordovaDialogs, ApplyService) {
  $scope.$on('$ionicView.enter', function() {
      //$scope.init();
      //if($stateParams.filter=='change')
      {
        $ionicHistory.clearCache();
      }
  });
  $scope.$on('$ionicView.afterLeave', function() {
      //$scope.init();
      //if($stateParams.filter=='change')
      {
        $ionicHistory.clearCache();
      }
  });
  $scope.goHome = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.postJobMain");
  };
  $scope.goBack = function(){
    $ionicHistory.goBack();
  };
  $scope.gotoMessage = function() {
    $state.go('app.systemMessage');
  };
  $scope.goSetting = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.setting");
  };
  $scope.init = function() {
    var data = getPostDetailContract;
    $scope.post = data.post[0];
    $scope.opponent = $stateParams.opponent;

    $scope.data = data.signatures; //applicantsignature, applicantsigned, postersignature, postersigned
    if($scope.data==undefined){
        $scope.data = {};
    }
    $scope.language = data.language;
    $scope.language.english = false;
    $scope.language.french = false;
    $scope.language.korean = false;
    $scope.language.chinese = false;
    for (var i = 0; i < data.language.length; i++) {
      if(data.language[i].language =='9001') {
        $scope.language.english = true;
      }else if(data.language[i].language =='9002') {
        $scope.language.korean = true;
      }else if(data.language[i].language =='9003') {
        $scope.language.chinese = true;
      }else if(data.language[i].language =='9004') {
        $scope.language.french = true;
      }
    }
    $scope.tag = data.tag;
    $scope.interviews = data.interviews;
    $scope.countWorkPhotos = data.countWorkPhotos;
    if(Array.isArray(data.userstatus)){
      $scope.userstatus = data.userstatus[0];
    }else{
      $scope.userstatus = {"isapplicant":'N', "isposter":'N'};
    }

    $scope.isapplicant = ($scope.userstatus.isapplicant =='Y')?true:false;
    $scope.isposter = ($scope.userstatus.isposter =='Y')?true:false;

    if($scope.post.filetype=='3003'){
      var block = $scope.post.content.split(";");
      var dataType = block[0].split(":")[1];// In this case "application/pdf"
      var realData = block[1].split(",")[1];// In this case "JVBERi0xLjcKCjE...."
      var blob = new Blob([base64ToUint8Array(realData)], { type: dataType });
      $scope.pdfUrl = URL.createObjectURL(blob);
    }
  }

  function base64ToUint8Array(base64) {
    var raw = atob(base64);
    var uint8Array = new Uint8Array(raw.length);
    for (var i = 0; i < raw.length; i++) {
      uint8Array[i] = raw.charCodeAt(i);
    }
    return uint8Array;
  }

})
.controller('PostContractSigCtrl', function($scope, $state, $stateParams, LoadingService, getPostDetailContract, $ionicHistory, AuthService, InterviewIconService, $ionicActionSheet, $ionicSlideBoxDelegate, $http, $ionicModal, $ionicScrollDelegate, LocationService, $cordovaDialogs, ApplyService) {
  $scope.$on('$ionicView.enter', function() {
      //$scope.init();
      //if($stateParams.filter=='change')
      {
        $ionicHistory.clearCache();
      }
  });
  $scope.$on('$ionicView.afterLeave', function() {
      //$scope.init();
      //if($stateParams.filter=='change')
      {
        $ionicHistory.clearCache();
      }
  });
  $scope.goHome = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.postJobMain");
  };
  $scope.goBack = function(){
    $ionicHistory.goBack();
  };
  $scope.gotoMessage = function() {
    $state.go('app.systemMessage');
  };
  $scope.goSetting = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.setting");
  };
  $scope.init = function() {
    var data = getPostDetailContract;
    $scope.post = data.post[0];
    $scope.opponent = $stateParams.opponent;

    $scope.data = data.signatures; //applicantsignature, applicantsigned, postersignature, postersigned
    if($scope.data==undefined){
        $scope.data = {};
    }
    $scope.language = data.language;
    $scope.language.english = false;
    $scope.language.french = false;
    $scope.language.korean = false;
    $scope.language.chinese = false;
    for (var i = 0; i < data.language.length; i++) {
      if(data.language[i].language =='9001') {
        $scope.language.english = true;
      }else if(data.language[i].language =='9002') {
        $scope.language.korean = true;
      }else if(data.language[i].language =='9003') {
        $scope.language.chinese = true;
      }else if(data.language[i].language =='9004') {
        $scope.language.french = true;
      }
    }
    $scope.tag = data.tag;
    $scope.interviews = data.interviews;
    $scope.countWorkPhotos = data.countWorkPhotos;
    if(Array.isArray(data.userstatus)){
      $scope.userstatus = data.userstatus[0];
    }else{
      $scope.userstatus = {"isapplicant":'N', "isposter":'N'};
    }

    $scope.isapplicant = ($scope.userstatus.isapplicant =='Y')?true:false;
    $scope.isposter = ($scope.userstatus.isposter =='Y')?true:false;

    if($scope.post.filetype=='3003'){
      var block = $scope.post.content.split(";");
      var dataType = block[0].split(":")[1];// In this case "application/pdf"
      var realData = block[1].split(",")[1];// In this case "JVBERi0xLjcKCjE...."
      var blob = new Blob([base64ToUint8Array(realData)], { type: dataType });
      $scope.pdfUrl = URL.createObjectURL(blob);
    }
  }

  function base64ToUint8Array(base64) {
    var raw = atob(base64);
    var uint8Array = new Uint8Array(raw.length);
    for (var i = 0; i < raw.length; i++) {
      uint8Array[i] = raw.charCodeAt(i);
    }
    return uint8Array;
  }
  /*var canvas = document.getElementById('signatureCanvas');
  var signaturePad = new SignaturePad(canvas);

  $scope.clearCanvas = function() {
      signaturePad.clear();
  }*/
  $scope.submitSignatureApplicant = function() {
    $cordovaDialogs.confirm('Submit signature for '+$scope.post.title +'?', 'Confirm to Submit', ['Yes','No'])
    .then(function(buttonIndex) {
      // no button = 0, 'OK' = 1, 'Cancel' = 2
      if(buttonIndex==1){
        ApplyService.respondToJobOffer($scope.post.post_id, true, $scope.data.applicantsignature).then(function(response){
          console.log(JSON.stringify(response));
          {
            $state.go("app.postJobMain");
            //$state.go($state.current, {}, {reload: true});
          }
        }, function(error){

            //there was an error fetching from the server
            console.log(JSON.stringify(error));
            });
      }

    }, function(error) {
      alert("Error -> " + error);
    });
    }
  $scope.submitSignaturePoster = function() {
      //var sigImg = signaturePad.toDataURL();
      //$scope.signature = sigImg;
      //submit a signature
      var messaget = 'Leave an message to applicant '+$scope.opponent.name +' for Job Offer?';
      var title = 'Message for Job Offer';
      $cordovaDialogs.prompt(messaget, title, ['Yes','No'])
      .then(function(result) {
        var message = result.input1;
        // no button = 0, 'OK' = 1, 'Cancel' = 2
        var btnIndex = result.buttonIndex;

        if(btnIndex==1){
          {
            //To do with job offer
            ApplyService.notifyApplicantJobOffer($scope.post.post_id, $scope.opponent.user_id, $scope.interviews[$scope.post.interviewcount-1].interview_id, $scope.data.postersignature, message).then(function(response){
              console.log(JSON.stringify(response));
              {
                $state.go("app.applicants");
              }
            }, function(error){

                //there was an error fetching from the server
                console.log(JSON.stringify(error));
                });
          }

        }

      }, function(error) {
        alert("Error -> " + error);
      });

  }
})
.controller('PostJobEmployCtrl', function($scope) {

})
.controller('PostJobSearchCtrl', function($scope, $ionicPopover, $location) {

  //    var confirmPopup = $ionicPopup.confirm({
  //         title: 'Improve location accuracy?',
  //         template: 'This app wants to change \n your device setting'
  //       });
  //       confirmPopup.then(function(res) {
  //         if(res) {
  //           //$location.path('/app/myJobSearch');
  //         } else {
  //           //console.log('You are not sure');
  //         }
  //    });
  $scope.gotoBack = function() {
    $location.path('/app/postJobMain');
  };
  $scope.gotoFilter = function() {
    $location.path('/app/listViewFilter');
  };

  $scope.viewSelect = function($event) {
    $ionicPopover.fromTemplateUrl('views/app/listView.html', {
      scope: $scope
    }).then(function(popover) {
      $scope.popover = popover;
      $scope.popover.show($event);
    });
    $scope.closePopover = function() {
      $scope.popover.hide();
    };
    $scope.$on('$destroy', function() {
      $scope.popover.remove();//remember to remove this
    });
  };

  $scope.openPopover = function($event) {
    $ionicPopover.fromTemplateUrl('views/app/distance.html', {
      scope: $scope
    }).then(function(popover) {
      $scope.popover = popover;
      $scope.popover.show($event);
    });
    $scope.closePopover = function() {
      $scope.popover.hide();
    };
    $scope.$on('$destroy', function() {
      $scope.popover.remove();//remember to remove this
    });
  };
})
.controller('PostJobMapSearchCtrl', function($scope, $ionicPopover, $location) {

  $scope.gotoBack = function() {
    $location.path('/app/postJobMain');
  };

  $scope.gotoFilter = function() {
    $location.path('/app/mapViewFilter');
  };

  $scope.viewSelect = function($event) {
    $ionicPopover.fromTemplateUrl('views/app/mapView.html', {
      scope: $scope
    }).then(function(popover) {
      $scope.popover = popover;
      $scope.popover.show($event);
    });
    $scope.closePopover = function() {
      $scope.popover.hide();
    };
    $scope.$on('$destroy', function() {
      $scope.popover.remove();//remember to remove this
    });
  };
})
.controller('MyJobSearchMapCtrl', function($scope, $rootScope, $http, $state, $ionicHistory, $cordovaDialogs, $ionicListDelegate, $ionicPopover, FilterService, MatchedService, $stateParams, LoadingService, LocationService, $compile, SearchService, BrowsingModeService, AuthService) {
  $scope.$on('$ionicView.enter', function() {
      //$scope.init();
    /*$timeout(function() {
      $scope.map.control.refresh({latitude: location.latitude, longitude: location.longitude});
    });*/
    //google.maps.event.trigger($scope.map, 'resize' );
  });
  $scope.$on("$ionicView.afterLeave", function () {
       //$ionicHistory.clearCache();
  });
  $scope.goHome = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.postJobMain");
  };
  $scope.goBack = function(){
    $ionicHistory.goBack();
  };
  $scope.gotoMessage = function() {
    $state.go('app.systemMessage');
  };
  $scope.goSetting = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.setting");
  };
  $scope.changeMode = function(){
    var externModel = [];
    for (var i = 0; i < $scope.filter.searchValue.length; i++) {
      externModel.push({
         id: i+1,
         name:$scope.filter.searchValue[i],
         view:$scope.filter.searchValue[i]
      });
    }
    var browsing ={};
    browsing.mode = 'list';
    BrowsingModeService.storeBrowsingMode(browsing);
    $state.go("app.myJobSearchList", {filter:'change', keywords:externModel});
  };
  $scope.cancelButtonClickedMethod = function (callback) {
    $scope.doSearch();
  }

  $scope.sortingByParam = function(param){
    if(param =='postingdate'){
      $scope.filter.sortByParam = "-post.postingdate";
    }else if(param =='applicationdeadline'){
      $scope.filter.sortByParam = "post.applicationdeadline";
    }else if(param =='distance'){
      $scope.filter.sortByParam = "distance";
    }else if(param =='bookmark'){
      $scope.filter.sortByParam = "-post.bookmark";
    }
    window.localStorage.setItem("sortByParam", $scope.filter.sortByParam);
    //$scope.safeApply();
    $scope.closePopover();

    //$scope.refreshData();
  };

 $scope.modelToItemMethod = function (modelValue) {

     // get the full model item from the model value and return it. You need to implement the `getModelItem` method by yourself
     // as this is just a sample. The method needs to retrieve the whole item (like the `items-method`) from just the model value.
     //var modelItem = getModelItem(modelValue);
     return modelValue;
 }

 $scope.getSkillTags = function(query) {
  if (query) {
     var url='/mobile/get_keyword_tags';
     var items = $http({
       url: window.global.baseurl+url,
       method: "GET",
       params: {'my_key': window.global.my_key, 'api_key':window.global.api_key, user_id:$scope.me.user_id, query:query}
     }).then(function mySucces(response) {
       if(response.data.status == true){

       }else{
         //alert("Error -->" +JSON.stringify(response.data.msg));
         if(response.data.msg=="Invalid mobile key used"){
           AuthService.getApiKey($scope.me.user_id).then(function (result) {
           });
         }
       }
       if(!Array.isArray(response.data.items)){
         response.data.items = [];
       }

       return response.data;
     });

     return items;
   }
return {items: []};
};

    $scope.viewSelect = function($event) {
      $ionicPopover.fromTemplateUrl('views/app/listView.html', {
        scope: $scope
      }).then(function(popover) {
        $scope.popover = popover;
        $scope.popover.show($event);
      });
      $scope.closePopover = function() {
        $scope.popover.hide();
      };
      $scope.$on('$destroy', function() {
        $scope.popover.remove();//remember to remove this
      });
    };

    $scope.openPopover = function($event) {
      $ionicPopover.fromTemplateUrl('views/app/distance.html', {
        scope: $scope
      }).then(function(popover) {
        $scope.popover = popover;
        $scope.popover.show($event);
      });
      $scope.closePopover = function() {
        $scope.popover.hide();
      };
      $scope.$on('$destroy', function() {
        $scope.popover.remove();//remember to remove this
      });
    };
  $scope.openFilter = function() {
    var externModel = [];
    for (var i = 0; i < $scope.filter.searchValue.length; i++) {
      externModel.push({
         id: i+1,
         name:$scope.filter.searchValue[i],
         view:$scope.filter.searchValue[i]
      });
    }

    //$ionicHistory.clearCache().then(function(){ $state.go("app.listViewFilter", {keywords:externModel, viewMode:"map", viewId:this.$id}).then(function() { $ionicHistory.clearCache() }); });
    //$ionicHistory.clearCache();
    $ionicHistory.nextViewOptions({
        disableBack: true
      });
    $state.go("app.listViewFilter", {keywords:externModel, viewMode:"map", viewId:this.$id});
   //alert("not yet implemented!!");
 };
  $scope.clearSearch = function() {
   $scope.filter.searchValue = [];
   $scope.externalModel = [];
   $scope.cancelButtonClickedMethod();
 };
 function clearMap(){
   //clear_infowindow();
   if (markerCluster) {
     markerCluster.clearMarkers();
   }

 }
  function clear_infowindow() {
    for (var i = 0; i < _infowindow.length; i++) {
      if (_infowindow[i]) {
        //markers[i].setMap(null);
        _infowindow[i] = null;
      }
    }
    //markers = [];
    _infowindow = [];
  }
  //var places;
  var _infowindow = [];
  var infowindow = new google.maps.InfoWindow();
  var markerCluster = null;
  var directionsService = null;
  var directionsDisplay = null;
  var routeResponse = null;
  var countries = {
  'au': {
    center: {lat: -25.3, lng: 133.8},
    zoom: 4
  },
  'br': {
    center: {lat: -14.2, lng: -51.9},
    zoom: 3
  },
  'ca': {
    center: {lat: 62, lng: -110.0},
    zoom: 3
  },
  'fr': {
    center: {lat: 46.2, lng: 2.2},
    zoom: 5
  },
  'de': {
    center: {lat: 51.2, lng: 10.4},
    zoom: 5
  },
  'mx': {
    center: {lat: 23.6, lng: -102.5},
    zoom: 4
  },
  'nz': {
    center: {lat: -40.9, lng: 174.9},
    zoom: 5
  },
  'it': {
    center: {lat: 41.9, lng: 12.6},
    zoom: 5
  },
  'za': {
    center: {lat: -30.6, lng: 22.9},
    zoom: 5
  },
  'es': {
    center: {lat: 40.5, lng: -3.7},
    zoom: 5
  },
  'pt': {
    center: {lat: 39.4, lng: -8.2},
    zoom: 6
  },
  'us': {
    center: {lat: 37.1, lng: -95.7},
    zoom: 3
  },
  'uk': {
    center: {lat: 54.8, lng: -4.6},
    zoom: 5
  }
};

  //var MARKER_PATH = 'https://maps.gstatic.com/intl/en_us/mapfiles/marker_green';
  var MARKER_PATH = "http://maps.google.com/intl/en_us/mapfiles/ms/micons/green";
  //var MARKER_PATH_HIGHLIGHT = 'https://maps.gstatic.com/intl/en_us/mapfiles/marker';
  var MARKER_PATH_HIGHLIGHT = "http://maps.google.com/intl/en_us/mapfiles/ms/micons/red";
  $scope.selectLocation = function() {
    var pos = $scope.myMarker.getPosition();
    var newLat = pos.lat();
    var newLng = pos.lng();
    console.log("lat="+newLat + ", lng="+ newLng);
  };
  $scope.mapReset = function() {
    $scope.map.setZoom(10);
    $scope.map.setCenter(new google.maps.LatLng($scope.filter.latitude, $scope.filter.longitude));
  };
  $scope.openPost = function(post_id, isposter){
    var visposter = (isposter=='Y')?true:false;
    $state.go("app.postDetail", {'post_id':post_id, 'isposter': visposter});
  };
  $scope.centerOnMe = function() {
     if(!$scope.map) {
       return;
     }

     //LoadingService.showLoading();

     //LocationService.getCurrentLocation();
     LocationService.getCurrentLocation().then(function(gps){
       window.global.gps= gps;
       if(window.global.gps.lat && window.global.gps.long){
         $scope.map.setCenter(new google.maps.LatLng(window.global.gps.lat, window.global.gps.long));
       }
     });

     //LoadingService.hideLoading();

   };
   function createMarker(latlng, contentString, markerIcon, markerLabel) {
     var marker = new MarkerWithLabel({
       map: $scope.map,
       draggable: true,
       animation: google.maps.Animation.DROP,
       position: latlng,
       icon: markerIcon,
       labelContent: markerLabel,
       labelAnchor: new google.maps.Point(0, 0),
       labelClass: "my-custom-class-for-label",
       labelInBackground: true
     });


     /*var marker = new google.maps.Marker({
       position: latlng,
       animation: google.maps.Animation.DROP,
       draggable: true,
       icon: markerIcon,
       label: {
         text: markerLabel,
         color: "#eb3a44",
         fontSize: "16px",
         fontWeight: "bold"
       }
       //,icon: pinSymbol(markerIcon)
     });*/

     contentString = "<div>" + contentString;

     contentString = contentString + "</div>";
     var compiled = $compile(contentString)($scope);
     google.maps.event.addListener(marker, 'click', function() {
       infowindow.close();
       infowindow.setContent(compiled[0]);
       infowindow.open($scope.map, marker);
     });
     markerCluster.addMarker(marker);
     return marker;
   }

  $scope.doSearch = function(){
    var results;
    var markers = [];

    SearchService.getResult($scope.filter).then(function (response) {
      results = response;
      $scope.resultCnt = results.length;
      clearMap();

        //var gmarkers = [];
        var clusteroptions = {
            imagePath: 'img/m'
            ,zoomOnClick: true,
            gridSize: 20, maxZoom: 15
        };

        markerCluster = new MarkerClusterer($scope.map, [], clusteroptions);

      for (var i = 0; i < results.length; i++) {
        //var markerLetter = String.fromCharCode('A'.charCodeAt(0) + i);
        var markerLetter = "";
        var markerIconUrl = MARKER_PATH + markerLetter + '.png';
        if(results[i].post.isapplicant=='Y' || results[i].post.isposter=='Y'){
          markerIconUrl = MARKER_PATH_HIGHLIGHT + markerLetter + '.png';
        }
        var markerIcon = {
          url: markerIconUrl,
          origin: new google.maps.Point(0, 0),
          //anchor: new google.maps.Point(32,65),
          labelOrigin: new google.maps.Point(0,0)
        };
        /*var markerIcon = 'green';
        if(results[i].post.isapplicant=='Y' || results[i].post.isposter=='Y'){
          markerIcon = 'red';
        }*/
        var contentString = "<a ng-click='openPost("+results[i].post.post_id+", "+ results[i].post.isposter +")'>" + results[i].post.title + "-"+ results[i].post.name +"</a>";

        markers[i] = createMarker(new google.maps.LatLng(results[i].post.latitude, results[i].post.longitude), contentString, markerIcon, (i+1)+"");
        // If the user clicks a hotel marker, show the details of that hotel
        // in an info window.
        markers[i].placeResult = results[i];
        markers[i].contentString = contentString;
      }

    }, function(error){
      console.log(JSON.stringify(error));
      results = undefined;
    });
  };
  function clearClusters(e) {
    e.preventDefault();
    e.stopPropagation();
    clearMap();
  }
  function dropMarker(marker) {
    return function() {
      marker.setMap($scope.map);
    };
  }
  function showInfoWindow() {
    var marker = this;

    marker.infoWindow.open($scope.map, marker);

  }
  //google.maps.event.addDomListener(window, 'load', initialize);
  //ionic.Platform.ready(initialize);
  function initialize(){
  //$scope.init = function(){
    //LocationService.getCurrentLocation();
    /*if(($stateParams.filter == 'apply')||($stateParams.filter == 'change'))
    {
      $scope.filter = FilterService.getData();
    }*/
    if($stateParams.filter == 'save'){
      $scope.filter = MatchedService.getMatchedFilter();
    }else{
      $scope.filter = FilterService.getData();
      if($scope.filter == undefined) {
        $scope.filter = MatchedService.getMatchedFilter();
      }
    }

    if($scope.filter == undefined) {
      $scope.filter = {};
      $scope.filter.distance = 0;
      $scope.filter.searchValue = [];
      $scope.filter.sortByParam = "-post.postingdate";
      $scope.filter.experiencedonly = false;
      $scope.filter.nowhiringonly = false;
      $scope.filter.gorillaadonly = false;
      $scope.filter.englishselected = false;
      $scope.filter.frenchselected = false;
      $scope.filter.koreanselected = false;
      $scope.filter.chineseselected = false;
      $scope.filter.useCurrentLoc = false;
      $scope.filter.city = window.global.gps.citytag;
      $scope.filter.longitude = window.global.gps.long;
      $scope.filter.latitude = window.global.gps.lat;
    }
    $scope.externalModel = [];
    for (var i = 0; i < $scope.filter.searchValue.length; i++) {
      $scope.externalModel.push({
         id: i+1,
         name:$scope.filter.searchValue[i],
         view:$scope.filter.searchValue[i]
      });
    }

    if($stateParams.keywords){
      $scope.filter.searchValue = [];
      //if($scope.externalModel.length != $stateParams.keywords.length)
      {
        $scope.externalModel = $stateParams.keywords;
        for (var i = 0; i < $scope.externalModel.length; i++) {
          $scope.filter.searchValue.push(
            $scope.externalModel[i].view
          );
        }
      }
    }

    if($stateParams.googleMap){
      //$scope.filter.searchValue = [];
      //if($scope.externalModel.length != $stateParams.keywords.length)
      {
        $scope.map = $stateParams.googleMap;
        //$scope.doSearch();
        //return;
      }
    }

/*
    var mapOptions = {
      center: new google.maps.LatLng($scope.filter.latitude, $scope.filter.longitude),
      zoom: 10,
      streetViewControl: false,
      zoomControl: true,
      zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_BOTTOM
      },
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    //document.getElementById("map").innerHTML = '';
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);


    var myContentString = "<div><a ng-click='selectLocation()'>Select Location</a></div>";
    var myCompiled = $compile(myContentString)($scope);

    var myInfowindow = new google.maps.InfoWindow({
      content: myCompiled[0]
    });

    var myMarker = new google.maps.Marker({
      position: new google.maps.LatLng(window.global.gps.lat, window.global.gps.long),
      map: map,
      draggable: true,
      title: 'Select Location'
    });
    myMarker.addListener('drag', handleEvent);
    myMarker.addListener('dragend', handleEvent);
    google.maps.event.addListener(myMarker, 'click', function() {
      myInfowindow.open(map, myMarker);
    });*/

      var mapOptions = {
        center: new google.maps.LatLng($scope.filter.latitude, $scope.filter.longitude),
        zoom: 10,
        streetViewControl: false,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById("map"), mapOptions);

      var myMarker = new GeolocationMarker();
      myMarker.setCircleOptions({fillColor: '#808080'});

      myMarker.setMap(map);

      google.maps.event.addListener(map, "center_changed", function() {
       console.log("center_changed to "+map.getCenter().toUrlValue());
     });

    $scope.myMarker = myMarker;
    $scope.map = map;

    directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap(map);

    //map.setCenter(new google.maps.LatLng($scope.filter.latitude, $scope.filter.longitude));
    $scope.doSearch();
  }
  function addRoute(origin, destination, waypts, optimizeWaypts) {
    routeResponse = null;
    if (typeof google !== "undefined") {
      var routeRequest = {
        origin : origin,
        destination : destination,
        waypoints: waypts,
        optimizeWaypoints: optimizeWaypts,
        travelMode : google.maps.TravelMode.DRIVING
      };

      directionsService.route(routeRequest, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
          google.maps.event.trigger(map, 'resize');
          // Save the response so we access it from controller
          routeResponse = response;
          // Broadcast event so controller can process the route response
          $rootScope.$broadcast('googleRouteCallbackComplete');
        }
      });
    }
  }

  function removeRoute() {
    if (typeof google !== "undefined" && typeof directionsDisplay !== "undefined") {
      directionsDisplay.setMap(null);
      directionsDisplay = null;
      directionsDisplay = new google.maps.DirectionsRenderer();
      directionsDisplay.setMap(map);
    }
  }
  function handleEvent(event) {
    console.log("lat="+ event.latLng.lat());
    console.log("lng="+ event.latLng.lng());
  }
  initialize();
  //$scope.doSearch();
// Active INK Effect
  //ionic.material.ink.displayEffect();
})
.controller('MyJobSearchListCtrl', function($scope, $rootScope, $http, $state, $ionicHistory, $cordovaDialogs, $ionicListDelegate, $ionicPopover, FilterService, MatchedService, $stateParams, LoadingService, LocationService, SearchService, BrowsingModeService, AuthService, ApplyService) {
  $scope.$on('$ionicView.enter', function() {
      if($stateParams.filter=='change'){
        $ionicHistory.clearCache();
      }
  });
  $scope.$on("$ionicView.afterLeave", function () {
    $ionicHistory.clearCache();
  });
  $scope.goHome = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.postJobMain");
  };
  $scope.goBack = function(){
    $ionicHistory.goBack();
  };
  $scope.gotoMessage = function() {
    $state.go('app.systemMessage');
  };
  $scope.goSetting = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.setting");
  };
  $scope.changeMode = function(){
    var externModel = [];
    for (var i = 0; i < $scope.filter.searchValue.length; i++) {
      externModel.push({
         id: i+1,
         name:$scope.filter.searchValue[i],
         view:$scope.filter.searchValue[i]
      });
    }
    var browsing ={};
    browsing.mode = 'map';
    BrowsingModeService.storeBrowsingMode(browsing);
    $state.go("app.myJobSearchMap", {filter:'change', keywords:externModel});
  };
  $scope.externalModel = [];
/*  window.global.gps = {};
  window.global.gps.lat = 43.6695009;
  window.global.gps.long = -79.4074781;
  window.global.gps.citytag = 'Toronto ON';*/
  $scope.cancelButtonClickedMethod = function (callback) {
    $scope.doSearch();
  }

  $scope.sortingByParam = function(param){
    if(param =='postingdate'){
      $scope.filter.sortByParam = "-post.postingdate";
    }else if(param =='applicationdeadline'){
      $scope.filter.sortByParam = "post.applicationdeadline";
    }else if(param =='distance'){
      $scope.filter.sortByParam = "distance";
    }else if(param =='bookmark'){
      $scope.filter.sortByParam = "-post.bookmark";
    }
    //$scope.safeApply();
    window.localStorage.setItem("sortByParam", $scope.filter.sortByParam);
    $scope.closePopover();

    //$scope.refreshData();
  };
  $scope.safeApply = function(fn) {
    var phase = this.$root.$$phase;
    if(phase == '$apply' || phase == '$digest')
      this.$eval(fn);
    else
      this.$apply(fn);
  };
  $scope.doSearch2 = function() {
   alert("not yet implemented!!");
   document.activeElement.blur();
 };
 $scope.modelToItemMethod = function (modelValue) {

     // get the full model item from the model value and return it. You need to implement the `getModelItem` method by yourself
     // as this is just a sample. The method needs to retrieve the whole item (like the `items-method`) from just the model value.
     //var modelItem = getModelItem(modelValue);
     return modelValue;
 }

 $scope.getSkillTags = function(query) {
   /*if (query) {
       return {
           items: [
               {id: "1", name: query, view: query }]
       };
   }
   return {items: []};*/
 /*
   if($scope.isnomore || (query.length < 3)){
     var items = [];
     items.push({
        id: 1,
        name:query,
        view:query
     });
     return items;
   }
*/
if (query) {
   var url='/mobile/get_keyword_tags';
   var items = $http({
     url: window.global.baseurl+url,
     method: "GET",
     params: {'my_key': window.global.my_key, 'api_key':window.global.api_key, user_id:$scope.me.user_id, query:query}
   }).then(function mySucces(response) {
     if(response.data.status == true){

     }else{
       //alert("Error -->" +JSON.stringify(response.data.msg));
       if(response.data.msg=="Invalid mobile key used"){
         AuthService.getApiKey($scope.me.user_id).then(function (result) {
         });
       }
     }
     if(!Array.isArray(response.data.items)){
       response.data.items = [];
     }

     return response.data;
   });

   return items;
 }
return {items: []};
};

    $scope.viewSelect = function($event) {
      $ionicPopover.fromTemplateUrl('views/app/listView.html', {
        scope: $scope
      }).then(function(popover) {
        $scope.popover = popover;
        $scope.popover.show($event);
      });
      $scope.closePopover = function() {
        $scope.popover.hide();
      };
      $scope.$on('$destroy', function() {
        $scope.popover.remove();//remember to remove this
      });
    };

    $scope.openPopover = function($event) {
      $ionicPopover.fromTemplateUrl('views/app/distance.html', {
        scope: $scope
      }).then(function(popover) {
        $scope.popover = popover;
        $scope.popover.show($event);
      });
      $scope.closePopover = function() {
        $scope.popover.hide();
      };
      $scope.$on('$destroy', function() {
        $scope.popover.remove();//remember to remove this
      });
    };
  $scope.openFilter = function() {
    var externModel = [];
    for (var i = 0; i < $scope.filter.searchValue.length; i++) {
      externModel.push({
         id: i+1,
         name:$scope.filter.searchValue[i],
         view:$scope.filter.searchValue[i]
      });
    }
    $ionicHistory.nextViewOptions({
      disableBack: true
    });
    $state.go("app.listViewFilter", {keywords:externModel, viewMode:"list" });
   //alert("not yet implemented!!");
 };
  $scope.clearSearch = function() {
   $scope.filter.searchValue = [];
   $scope.externalModel = [];
   $scope.cancelButtonClickedMethod();
 };
   $scope.doSearch = function() {
     SearchService.getResult($scope.filter).then(function (response) {
       $scope.searches = response;

     }, function(error){
         console.log(JSON.stringify(error));
         $scope.searches = undefined;
         });
   }

  $scope.applyJob = function(post){
    //alert(post_id + " not yet implemented!");
    if($scope.me.isguest)
    {
      $state.go("app.applyJobStepOne", {'post':post});
    }else if(post.cvrequired=='Y'){
      $state.go("app.applyJobStepTwo", {'post':post});
    }else{
      //in case of sns user applying for no cv
      ApplyService.apply(post.post_id, null, null).then(function(response){
        console.log(JSON.stringify(response));
        console.log("submitApplication post.post_id="+post.post_id);
        var browsing = BrowsingModeService.getBrowsingMode();
        if(browsing && browsing.mode==='list'){
          $state.go("app.myJobSearchList");
        }else{
          $state.go("app.myJobSearchMap");
        }
      }, function(error){
          //there was an error fetching from the server
          console.log(JSON.stringify(error));
          });
    }
    $ionicListDelegate.closeOptionButtons();
  }
  $scope.openPost = function(post){
    var visposter = (post.user_id==$scope.me.user_id)?true:false;
    $state.go("app.postDetail", {'post_id':post.post_id, 'isposter': visposter});
    $ionicListDelegate.closeOptionButtons();
  }
  /*
  $scope.getCurrentLocation = function() {
    var options = {timeout: 10000, maximumAge: 0, enableHighAccuracy: true};
    $cordovaGeolocation.getCurrentPosition(options).then(function(position){
      window.global.gps = {};
      window.global.gps.long = position.coords.longitude;
      window.global.gps.lat = position.coords.latitude;
      $scope.getCitytag(window.global.gps.lat, window.global.gps.long)
      .then(function (citytag) {
           window.global.gps.citytag = citytag;

        }, function (err) {
           console.error('Uh oh! An error occurred!', err);
        });
    }, function(error){
      console.log("Could not get location");
    });

  };
  $scope.getCitytag = function(lat, lng) {
         var deferred = $q.defer(),
             geocoder = new google.maps.Geocoder(),
             latlng = new google.maps.LatLng(lat, lng);
         geocoder.geocode({'latLng': latlng}, function(results, status) {
           var state ={};
           var city = {};
           if (status == google.maps.GeocoderStatus.OK) {
             if (results[1]) {
              //formatted address
              //alert(results[0].formatted_address)
             //find country name
                  for (var i=0; i<results[0].address_components.length; i++) {
                 for (var b=0;b<results[0].address_components[i].types.length;b++) {

                 //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
                     if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
                         //this is the object you are looking for
                         state= results[0].address_components[i];
                         //alert("state=" + JSON.stringify(state));
                     }else if (results[0].address_components[i].types[b] == "locality") {
                         //this is the object you are looking for
                         city= results[0].address_components[i];
                         //alert("city=" + JSON.stringify(city));
                     }
                 }
             }

             }
             deferred.resolve(city.long_name + " " + state.short_name);
           }else{
             deferred.reject(status);
           }


      });

      return deferred.promise;
 };*/
  $scope.init = function(){
    /*if(($stateParams.filter == 'apply')||($stateParams.filter == 'change'))
    {
      $scope.filter = FilterService.getData();
    }*/
    if($stateParams.filter == 'save'){
      $scope.filter = MatchedService.getMatchedFilter();
    }else{
      $scope.filter = FilterService.getData();
      if($scope.filter == undefined) {
        $scope.filter = MatchedService.getMatchedFilter();
      }
    }

    if($scope.filter == undefined) {
      $scope.filter = {};
      $scope.filter.distance = 0;
      $scope.filter.searchValue = [];
      var mySortParam = window.localStorage.getItem("sortByParam");
      if(mySortParam){
        $scope.filter.sortByParam = mySortParam;
      }else{
        $scope.filter.sortByParam = "-post.postingdate";
      }
      $scope.filter.experiencedonly = false;
      $scope.filter.nowhiringonly = false;
      $scope.filter.gorillaadonly = false;
      $scope.filter.englishselected = false;
      $scope.filter.frenchselected = false;
      $scope.filter.koreanselected = false;
      $scope.filter.chineseselected = false;
      $scope.filter.useCurrentLoc = false;
      $scope.filter.city = window.global.gps.citytag;
      $scope.filter.longitude = window.global.gps.long;
      $scope.filter.latitude = window.global.gps.lat;
    }

    $scope.externalModel = [];
    for (var i = 0; i < $scope.filter.searchValue.length; i++) {
      $scope.externalModel.push({
         id: i+1,
         name:$scope.filter.searchValue[i],
         view:$scope.filter.searchValue[i]
      });
    }

    if($stateParams.keywords){
      {
        $scope.filter.searchValue = [];
        $scope.externalModel = $stateParams.keywords;
        for (var i = 0; i < $scope.externalModel.length; i++) {
          $scope.filter.searchValue.push(
            $scope.externalModel[i].view
          );
        }
      }
    }

    $scope.doSearch();
  }

})
.controller('MyJobAppliedCtrl', function($scope, $rootScope, $http, $state, $ionicHistory, $cordovaDialogs, $ionicListDelegate, $ionicPopover, FilterService, MatchedService, $stateParams, LoadingService, LocationService, SearchService, BrowsingModeService, AuthService, ApplyService, $ionicActionSheet, InterviewIconService) {
  $scope.$on('$ionicView.enter', function() {

  });
  $scope.$on("$ionicView.afterLeave", function () {

  });
  $scope.goHome = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.postJobMain");
  };
  $scope.goBack = function(){
    $ionicHistory.goBack();
  };
  $scope.gotoMessage = function() {
    $state.go('app.systemMessage');
  };
  $scope.goSetting = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.setting");
  };
  $scope.sortingByParam = function(param){
    if(param =='postingdate'){
      $scope.sortByParam = "-post.postingdate";
    }else if(param =='applicationdeadline'){
      $scope.sortByParam = "post.applicationdeadline";
    }else if(param =='distance'){
      $scope.sortByParam = "distance";
    }else if(param =='bookmark'){
      $scope.sortByParam = "-post.bookmark";
    }

    window.localStorage.setItem("sortByParam", $scope.sortByParam);

    $scope.closePopover();
  };

    $scope.viewSelect = function($event) {
      $ionicPopover.fromTemplateUrl('views/app/listView.html', {
        scope: $scope
      }).then(function(popover) {
        $scope.popover = popover;
        $scope.popover.show($event);
      });
      $scope.closePopover = function() {
        $scope.popover.hide();
      };
      $scope.$on('$destroy', function() {
        $scope.popover.remove();//remember to remove this
      });
    };

    $scope.openPopover = function($event) {
      $ionicPopover.fromTemplateUrl('views/app/distance.html', {
        scope: $scope
      }).then(function(popover) {
        $scope.popover = popover;
        $scope.popover.show($event);
      });
      $scope.closePopover = function() {
        $scope.popover.hide();
      };
      $scope.$on('$destroy', function() {
        $scope.popover.remove();//remember to remove this
      });
    };

   $scope.doSearch = function() {
     SearchService.getApplied().then(function (response) {
       $scope.searches = response;

     }, function(error){
         console.log(JSON.stringify(error));
         $scope.searches = undefined;
         });
   }
   $scope.actionToApplicant = function(search){
     //alert("Not yet implemented! " + applicant.name);
     var actions = [];
     if((search.post.status != '8004') && (search.post.userstatus=='1106')){
       actions.push({text:'Continue'});
     }else if((search.post.status != '8004') && (search.post.userstatus=='1107')){
        actions.push({text:'Arrange Schedule'});
     }else if((search.post.status != '8004') && (search.post.userstatus=='1201')){
       actions.push({text:'Accept Job Offer'});
       actions.push({text:'Reject Job Offer'});
     }else if(search.post.userstatus=='1104'){
       actions.push({text:'Review Contract'});
     }
     actions.push({text:'Open Post'});
     actions.push({text:'Q&A'});
     //actions.push({text:'Call a Poster'});

     $scope.hideSheet = $ionicActionSheet.show({
       buttons: actions,
       titleText: 'Applicant Options for ' + search.post.title,
       cancelText: 'Cancel',
       buttonClicked: function(index) {
         $scope.hideSheet();
         if(actions[index].text === 'Continue'){
           //if($scope.userstatus.userstatus == '1106')
           { //InIdle  ==> check for timeslot and within valid timeslot open interview method
             var type = InterviewIconService.getType(search.interview[search.interviewstage.interviewstage-1].icon);
             if(type == '5001'){  //APP
               $state.go("app.answerApp", {'post':search.post, 'interview':search.interview[search.interviewstage.interviewstage-1]});
             } else if (type == '5002'){ //ARS

             } else if (type == '5003'){  //CALL
               //Call phone on the scheduled time
               alert('Call not yet implemented!');
             } else if (type == '5004'){  //CHAT

             } else if (type == '5005'){  //VIDEO

             } else if (type == '5006'){  //PERSON
               //direction
             }
           }

         }else if(actions[index].text === 'Open Post'){
           var visposter = (search.post.user_id==$scope.me.user_id)?true:false;
           $state.go("app.postDetail", {'post_id':search.post.post_id, 'isposter' : visposter});
         }else if(actions[index].text === 'Accept Job Offer'){
           var poster = {'user_id':search.post.user_id, 'name':search.post.name};
           $state.go("app.postingContractSig", {'post_id':search.post.post_id, 'opponent':poster});

         }else if(actions[index].text === 'Reject Job Offer'){
           ApplyService.respondToJobOffer(search.post.post_id, false).then(function(response){
             console.log(JSON.stringify(response));
             {
               $state.go("app.postJobMain");
               //$state.go($state.current, {}, {reload: true});
             }
           }, function(error){

               //there was an error fetching from the server
               console.log(JSON.stringify(error));
               });

         }else if(actions[index].text === 'Q&A'){
           //Chat page
           var poster = {'user_id':search.post.user_id, 'name':search.post.name};
           $state.go("app.PostDetailMessage", {'post':search.post, 'opponent':poster});
         }else if(actions[index].text === 'Review Contract'){
           var poster = {'user_id':search.post.user_id, 'name':search.post.name};
           $state.go("app.postingContractSigReview", {'post':search.post, 'opponent':poster});
         }else if(actions[index].text === 'Call a Poster'){
           //Chat page tel:{{applicant.phone}}
           //var poster = {user_id:search.post.user_id, name:search.post.name};
         }else if(actions[index].text === 'Arrange Schedule'){
           { //InIdle  ==> check for timeslot and within valid timeslot open interview method
             var type = InterviewIconService.getType(search.interview[search.interviewstage.interviewstage-1].icon);
             if(type == '5001'){  //APP
               //$state.go("app.answerApp", {'post':search.post, 'interview':search.interview[search.interviewstage.interviewstage-1]});
               //No such state
             } else if (type == '5002'){ //ARS
               //No such state
             } else if (type == '5003'){  //CALL
                $state.go("app.scheduleNegoInterview", {'post':search.post, 'interview':search.interview[search.interviewstage.interviewstage-1]});
             } else if (type == '5004'){  //CHAT

             } else if (type == '5005'){  //VIDEO

             } else if (type == '5006'){  //PERSON
               $state.go("app.scheduleNegoInterview", {'post':search.post, 'interview':search.interview[search.interviewstage.interviewstage-1]});
             }
           }
         }
       }
     });
   };
  $scope.openPost = function(post){
    var visposter = (post.user_id==$scope.me.user_id)?true:false;
    $state.go("app.postDetail", {'post_id':post.post_id, 'isposter' : visposter});
  }

  $scope.init = function(){
    var mySortParam = window.localStorage.getItem("sortByParam");
    if(mySortParam){
      $scope.sortByParam = mySortParam;
    }else{
      $scope.sortByParam = "-post.postingdate";
    }
    $scope.doSearch();
  }

})
.controller('ListViewFilterCtrl', function($scope, $http, $state, FilterService, MatchedService, $stateParams, LoadingService, LocationService, $ionicHistory, AuthService) {
  $scope.address = {};

  $scope.externalModel = [];
  $scope.$on('$ionicView.enter', function() {
      //$scope.init();
      if($scope.viewMode == 'map'){
        $ionicHistory.clearCache();
      }
  });
  $scope.$on("$ionicView.afterLeave", function () {
       //$ionicHistory.clearCache();
  });
  $scope.goHome = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.postJobMain");
  };
  $scope.goBack = function(){
  $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go('app.myJobSearchList');
  };
  $scope.gotoMessage = function() {
    $state.go('app.systemMessage');
  };
  $scope.goSetting = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.setting");
  };
  $scope.init = function() {
    $scope.filter = MatchedService.getMatchedFilter();
    if($scope.filter == undefined) {
      $scope.filter = {};
      $scope.filter.searchValue = [];
      $scope.filter.distance = 0;
      $scope.filter.sortByParam = "-post.postingdate";
      $scope.filter.experiencedonly = false;
      $scope.filter.nowhiringonly = false;
      $scope.filter.gorillaadonly = false;
      $scope.filter.englishselected = false;
      $scope.filter.frenchselected = false;
      $scope.filter.koreanselected = false;
      $scope.filter.chineseselected = false;
      $scope.filter.useCurrentLoc = false;
      $scope.filter.city = window.global.gps.citytag;
      $scope.filter.longitude = window.global.gps.long;
      $scope.filter.latitude = window.global.gps.lat;
    }
    if($stateParams.keywords){
      //$scope.filter.searchValue = [];
      //if($scope.externalModel.length != $stateParams.keywords.length)
      {
        $scope.externalModel = $stateParams.keywords;
      }
    }
    if($stateParams.viewMode){
      {
        $scope.viewMode = $stateParams.viewMode;
      }
    }
    if($stateParams.googleMap){
      {
        $scope.googleMap = $stateParams.googleMap;
      }
    }
    if($stateParams.viewId){
      {
        $scope.viewId = $stateParams.viewId;
        //$ionicHistory.clearCache($scope.viewId);
      }
    }
    $scope.address.citymodel = $scope.filter.city;
    $scope.filter.distanceoptions =  [
      {value:5, description:'5km'},
      {value:10, description:'10km'},
      {value:20, description:'20km'},
      {value:50, description:'50km'},
    ];
  };
  $scope.saveMatched = function() {
    if($scope.address.city)
    {
      if($scope.address.state){
        $scope.filter.city = $scope.address.city + " " + $scope.address.state;
      }else{
        $scope.filter.city = $scope.address.city;
      }
      $scope.filter.latitude = $scope.address.latitude;
      $scope.filter.longitude = $scope.address.longitude;
    }

    MatchedService.storeMatchedFilter($scope.filter);
    var externModel = [];
    for (var i = 0; i < $scope.filter.searchValue.length; i++) {
      externModel.push({
         id: i+1,
         name:$scope.filter.searchValue[i],
         view:$scope.filter.searchValue[i]
      });
    }
    if($scope.viewMode == 'list'){
      $state.go('app.myJobSearchList', {filter:'save', keywords:externModel});
    }else{
      $ionicHistory.clearCache();
      //$ionicHistory.goBack().then(function(){ $state.go($state.current, {filter:'save', keywords:externModel, googleMap:$scope.googleMap}, {reload: true});});
      $state.go('app.myJobSearchMap', {filter:'save', keywords:externModel, googleMap:$scope.googleMap});
    }
  };
  $scope.applyFilter = function() {
    if($scope.address.city)
    {
      if($scope.address.state){
        $scope.filter.city = $scope.address.city + " " + $scope.address.state;
      }else{
        $scope.filter.city = $scope.address.city;
      }
      $scope.filter.latitude = $scope.address.latitude;
      $scope.filter.longitude = $scope.address.longitude;
    }
    FilterService.setData($scope.filter.city, $scope.filter.distance, $scope.filter.searchValue
      , $scope.filter.experiencedonly, $scope.filter.nowhiringonly, $scope.filter.gorillaadonly
      , $scope.filter.englishselected, $scope.filter.frenchselected, $scope.filter.koreanselected, $scope.filter.chineseselected
      , $scope.filter.useCurrentLoc, $scope.filter.longitude, $scope.filter.latitude);
      var externModel = [];
      for (var i = 0; i < $scope.filter.searchValue.length; i++) {
        externModel.push({
           id: i+1,
           name:$scope.filter.searchValue[i],
           view:$scope.filter.searchValue[i]
        });
      }
      if($scope.viewMode == 'list'){
        $state.go('app.myJobSearchList', {filter:'apply', keywords:externModel});
      }else{
        //$ionicHistory.goBack().then(function(){ $state.go($state.current, {filter:'apply', keywords:externModel, googleMap:$scope.googleMap}, {reload: true});});
        $state.go('app.myJobSearchMap', {filter:'apply', keywords:externModel, googleMap:$scope.googleMap});
      }
  };
  $scope.resetCache = function() {

  };
  $scope.clearCache = function() {
    $scope.filter.searchValue = [];
    $scope.externalModel = [];
  };
  $scope.getCityLocation = function() {
    $scope.filter.useCurrentLoc = false;
  };
  $scope.getCurrentLocation2 = function(){
    $scope.filter.useCurrentLoc = true;
    LocationService.getCurrentLocation().then(function(gps){
      $scope.filter.longitude = gps.long;
      $scope.filter.latitude = gps.lat;
      $scope.filter.city = gps.citytag;
    });
  };
  $scope.postingChanged = function() {

  };
  $scope.modelToItemMethod = function (modelValue) {

      // get the full model item from the model value and return it. You need to implement the `getModelItem` method by yourself
      // as this is just a sample. The method needs to retrieve the whole item (like the `items-method`) from just the model value.
      //var modelItem = getModelItem(modelValue);
      return modelValue;
  }

  $scope.getSkillTags = function(query) {
   if (query) {
      var url='/mobile/get_keyword_tags';
      var items = $http({
        url: window.global.baseurl+url,
        method: "GET",
        params: {'my_key': window.global.my_key, 'api_key':window.global.api_key, user_id:$scope.me.user_id, query:query}
      }).then(function mySucces(response) {
        if(response.data.status==true){

        }else{
          //alert("Error -->" +JSON.stringify(response.data.msg));
          if(response.data.msg=="Invalid mobile key used"){
            AuthService.getApiKey($scope.me.user_id).then(function (result) {
            });
          }
        }
        if(!Array.isArray(response.data.items)){
          response.data.items = [];
        }

        return response.data;
      }, function(error){
          //there was an error fetching from the server
          alert(JSON.stringify(error));
          });

      return items;
    }
 return {items: []};
 };
  $scope.disableTap = function(event) {

      var input = event.target;

      // Get the predictions element
      var container = document.getElementsByClassName('pac-container');
      container = angular.element(container);

      // Apply css to ensure the container overlays the other elements, and
      // events occur on the element not behind it
      container.css('z-index', '5000');
      container.css('pointer-events', 'auto');

      // Disable ionic data tap
      container.attr('data-tap-disabled', 'true');

      // Leave the input field if a prediction is chosen
      container.on('click', function(){
          input.blur();
      });
  };
})
.controller('MapViewFilterCtrl', function($scope) {

})
.controller('evalInterviewCtrl', function($scope, $http, $timeout, $state, $ionicSlideBoxDelegate, $ionicActionSheet, $cordovaCamera, PostingService, $ionicModal, $ionicHistory, $stateParams, LoadingService, ApplyService, BrowsingModeService, AuthService, $cordovaDialogs, InterviewIconService) {
    $scope.init  = function() {
      $scope.post = $stateParams.post;
      $scope.applicant = $stateParams.applicant;
      $scope.interview = $stateParams.interview;
      $scope.nextinterview = $stateParams.nextinterview;
      $scope.eval = {};
      $scope.carouselReady = false;
      $scope.interview.type = InterviewIconService.getType($scope.interview.icon);
      $scope.getInterviewResult();
      /*if( $scope.interview.type == '5001'){
        $scope.getInterviewResult();
      }else if(( $scope.interview.type == '5003') || ( $scope.interview.type == '5006')){
        $scope.getInterviewSchedule();
      }*/

    }

    $scope.getInterviewResult = function(){
      LoadingService.showLoading();

      if( $scope.interview.type == '5001'){
        var url='/mobile/get_interview_answer_result';
      }else if(( $scope.interview.type == '5003') || ( $scope.interview.type == '5006')){
        var url='/mobile/get_interview_result';
      }
      $http({
        url: window.global.baseurl+url,
        method: "GET",
        params: {'my_key': window.global.my_key, 'api_key': window.global.api_key, 'user_id' : $scope.me.user_id, 'post_id' : $scope.post.post_id, 'interview_id' : $scope.interview.interview_id, 'applicant_id' : $scope.applicant.user_id},
      }).then(function (response) {
        LoadingService.hideLoading();
        console.log("responded -->" +JSON.stringify(response.data));
        if(response.data.status==true){
          $scope.endtime = {};
          $scope.starttime = {};
          $scope.answers = [];
          $scope.eval = {};
          if(Array.isArray(response.data.answers)){
            $scope.answers = response.data.answers;
          }
          if(Array.isArray(response.data.result)){
            $scope.starttime = response.data.result[0].starttime;
            $scope.endtime = response.data.result[0].endtime;
            {
              $scope.items = [
                { number: 1},
                { number: 2},
                { number: 3},
                { number: 4},
                { number: 5},
                { number: 6},
                { number: 7},
                { number: 8},
                { number: 9},
                { number: 10}
              ];
              //$scope.eval.score = $scope.items[5];
              $scope.eval.score = $scope.items[response.data.result[0].score-1];
              $scope.eval.note = response.data.result[0].note;

              $scope.carouselReady = true;
            }
          }

        }
        }, function(error){
            LoadingService.hideLoading();
            //there was an error fetching from the server
            alert(JSON.stringify(error));
            });

    };

  $scope.resetCache = function() {
    $scope.eval = {};
  };

  $scope.writeEvaluation = function(){
    $cordovaDialogs.confirm('Write an evaluation for applicant '+$scope.applicant.name +'?', 'Confirm to Write', ['Yes','No'])
    .then(function(buttonIndex) {
      // no button = 0, 'OK' = 1, 'Cancel' = 2
      if(buttonIndex==1){
        //update t_postuser
        ApplyService.writeApplicantEvaluation($scope.post.post_id, $scope.applicant.user_id, $scope.interview.interview_id, $scope.eval).then(function(response){
          console.log(JSON.stringify(response));
          {
            $state.go("app.applicants");
          }
        }, function(error){

            //there was an error fetching from the server
            console.log(JSON.stringify(error));
            });
      }

    }, function(error) {
      alert("Error -> " + error);
    });

  };

    $scope.notifyApplicant = function(){
      if($scope.nextinterview){
        var messaget = 'Leave an message to applicant '+$scope.applicant.name +' for Pass?';
        var title = 'Message for Pass';

              $cordovaDialogs.prompt(messaget, title, ['Yes','No'])
              .then(function(result) {
                var message = result.input1;
                // no button = 0, 'OK' = 1, 'Cancel' = 2
                var btnIndex = result.buttonIndex;

                if(btnIndex==1){
                  {
                    ApplyService.notifyApplicantPass($scope.post.post_id, $scope.applicant.user_id, $scope.nextinterview.interview_id, $scope.interview.interview_id, message).then(function(response){
                      console.log(JSON.stringify(response));
                      {
                        $state.go("app.applicants");
                      }
                    }, function(error){

                        //there was an error fetching from the server
                        console.log(JSON.stringify(error));
                        });
                  }

                }

              }, function(error) {
                alert("Error -> " + error);
              });
      }else{
        //var message = 'Leave an message to applicant '+$scope.applicant.name +' for Job Offer?';
        //var title = 'Message for Job Offer';
        $state.go("app.postingContractSig", {'post_id':$scope.post.post_id, 'opponent':$scope.applicant});
      }
    };
  $scope.dropApplicant = function(){
    $cordovaDialogs.prompt('Drop applicant '+$scope.applicant.name +'?', 'Confirm to Drop', ['Yes','No'])
    .then(function(result) {
      var message = result.input1;
      // no button = 0, 'OK' = 1, 'Cancel' = 2
      var btnIndex = result.buttonIndex;

      if(btnIndex==1){
        ApplyService.dropApplicant($scope.post.post_id, $scope.applicant.user_id, $scope.interview.interview_id, message).then(function(response){
          console.log(JSON.stringify(response));
          {
            $state.go("app.applicants");
          }
        }, function(error){

            //there was an error fetching from the server
            console.log(JSON.stringify(error));
            });
      }

    /*
    $cordovaDialogs.confirm('Drop applicant '+$scope.applicant.name +'?', 'Confirm to Drop', ['Yes','No'])
    .then(function(buttonIndex) {
      // no button = 0, 'OK' = 1, 'Cancel' = 2
      if(buttonIndex==1){
        //update t_postuser
        ApplyService.dropApplicant($scope.post.post_id, $scope.applicant.user_id, $scope.interview.interview_id, message).then(function(response){
          console.log(JSON.stringify(response));
          {
            $state.go("app.applicants");
          }
        }, function(error){

            //there was an error fetching from the server
            console.log(JSON.stringify(error));
            });
      }
*/
    }, function(error) {
      alert("Error -> " + error);
    });
  };
  $scope.goHome = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.postJobMain");
  };
  $scope.goBack = function(){
    $ionicHistory.goBack();
  };
  $scope.gotoMessage = function() {
    $state.go('app.systemMessage');
  };
  $scope.goSetting = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.setting");
  };

  $scope.getStyle = function(status){
    if(status =='8004'){
      return "lightyellow"
    }else{
      return "lightcyan"
    }
  };

  $scope.openPost = function(post){
    var visposter = (post.user_id==$scope.me.user_id)?true:false;
    $state.go("app.postDetail", {'post_id':post.post_id, 'isposter': visposter});
  };

})

.controller('scheduleNegoInterviewCtrl', function($scope, $http, $timeout, $state, $ionicSlideBoxDelegate, $ionicActionSheet, $cordovaCamera, PostingService, $ionicModal, $ionicHistory, $stateParams, LoadingService, ApplyService, BrowsingModeService, AuthService, $cordovaDialogs, $ionicListDelegate) {
    $scope.init  = function() {
      $scope.post = $stateParams.post;
      $scope.interview = $stateParams.interview;
      $scope.timeslot = {};
      if($stateParams.interview.closing){
        $scope.timeslot.closing = new Date(Number($stateParams.interview.closing));
      }
      /*else{
        $scope.timeslot.closing = new Date();
      }*/
      $scope.selectedtimeslot = {};

      $scope.schedules = [];
      $scope.getInterviewScheduleOffered();
    }
    $scope.getInterviewScheduleOffered = function(){
      LoadingService.showLoading();
      var url='/mobile/get_interview_schedule_offered';
      $http({
        url: window.global.baseurl+url,
        method: "GET",
        params: {'my_key': window.global.my_key, 'api_key': window.global.api_key, 'user_id' : $scope.me.user_id, 'post_id' : $scope.post.post_id, 'interview_id' : $scope.interview.interview_id},
      }).then(function (response) {
        LoadingService.hideLoading();
        console.log("responded -->" +JSON.stringify(response.data));
        if(response.data.status==true){
          $scope.schedules = response.data.schedules;
          for (var i = 0; i < $scope.schedules.length; i++) {
            $scope.schedules[i].starttime= new Date(Number($scope.schedules[i].starttime));
            $scope.schedules[i].endtime= new Date(Number($scope.schedules[i].endtime));

          }
        }
        }, function(error){
            LoadingService.hideLoading();
            //there was an error fetching from the server
            alert(JSON.stringify(error));
            });

    };

  $scope.resetCache = function() {
    //$scope.option.newtimeslot = {};
  };
  $scope.timeslotChange = function(schedule) {
    $scope.selectedtimeslot = schedule;
    console.log("Selected selectedtimeslot, id:", schedule.schedule_id, ",  start:", schedule.starttime, ", endtime:", schedule.endtime);
  };

  $scope.rejectSchedule = function(){
    $cordovaDialogs.confirm('Do you reject all schedule?', 'Confirm to Reject', ['Yes','No'])
    .then(function(buttonIndex) {
      // no button = 0, 'OK' = 1, 'Cancel' = 2
      if(buttonIndex==1){

        ApplyService.rejectSchedule($scope.post.post_id, $scope.interview.interview_id).then(function(response){
          console.log(JSON.stringify(response));
          {
            if(response.status==true){
              $state.go("app.myJobApplied");
            }else{
              alert('Error - ' +response.msg);
              $ionicHistory.goBack();
            }

          }
        }, function(error){

            //there was an error fetching from the server
            console.log(JSON.stringify(error));
            });
      }

          }, function(error) {
            alert("Error -> " + error);
          });

  };
  $scope.acceptSchedule = function(){
    $cordovaDialogs.confirm('Do you accept '+$scope.selectedtimeslot.starttime +' for incoming schedule?', 'Confirm to Accept', ['Yes','No'])
    .then(function(buttonIndex) {
      // no button = 0, 'OK' = 1, 'Cancel' = 2
      if(buttonIndex==1){
        if ($scope.selectedtimeslot.schedule_id == undefined){
          alert("Error - Time has not been selected!");
          return;
        }
        ApplyService.acceptSchedule($scope.post.post_id, $scope.interview.interview_id, $scope.selectedtimeslot).then(function(response){
          console.log(JSON.stringify(response));
          {
            if(response.status==true){
              $state.go("app.myJobApplied");
            }else{
              alert('Error - ' +response.msg);
              $ionicHistory.goBack();
            }

          }
        }, function(error){

            //there was an error fetching from the server
            console.log(JSON.stringify(error));
            });
      }

          }, function(error) {
            alert("Error -> " + error);
          });

  };
  $scope.goHome = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.postJobMain");
  };
  $scope.goBack = function(){
    $ionicHistory.goBack();
  };
  $scope.gotoMessage = function() {
    $state.go('app.systemMessage');
  };
  $scope.goSetting = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.setting");
  };

  $scope.getStyle = function(schedule){
    if(schedule.applicant != null){
      return "lightcyan"
    }else{
      return "lightyellow"
    }
  };

})
.controller('scheduleInterviewCtrl', function($scope, $http, $timeout, $state, $ionicSlideBoxDelegate, $ionicActionSheet, $cordovaCamera, PostingService, $ionicModal, $ionicHistory, $stateParams, LoadingService, ApplyService, BrowsingModeService, AuthService, $cordovaDialogs, $ionicListDelegate, InterviewIconService, NotificationService) {
    $scope.init  = function() {
      $scope.post = $stateParams.post;
      $scope.applicant = $stateParams.applicant;
      $scope.interview = $stateParams.interview;
      $scope.timeslot = {};
      if($stateParams.interview.closing){
        $scope.timeslot.closing = new Date(Number($stateParams.interview.closing));
      }
      /*else{
        $scope.timeslot.closing = new Date();
      }*/
      $scope.option = {};
      $scope.option.newtimeslot = new Date();
      $scope.option.newtimeslot.setHours($scope.option.newtimeslot.getHours() + 1, 0);
      $scope.option.length = '30';
      $scope.option.lengthoptions =  [
        {value:'10', description:'10 Minutes'},
        {value:'20', description:'20 Minutes'},
        {value:'30', description:'30 Minutes'},
        {value:'60', description:'60 Minutes'},
      ];
      $scope.schedules = [];
      $scope.getInterviewSchedule();
    }
    $scope.getInterviewSchedule = function(){
      LoadingService.showLoading();
      var url='/mobile/get_interview_schedule';
      $http({
        url: window.global.baseurl+url,
        method: "GET",
        params: {'my_key': window.global.my_key, 'api_key': window.global.api_key, 'user_id' : $scope.me.user_id, 'post_id' : $scope.post.post_id, 'interview_id' : $scope.interview.interview_id},
      }).then(function (response) {
        LoadingService.hideLoading();
        console.log("responded -->" +JSON.stringify(response.data));
        if(response.data.status==true){
          $scope.schedules = response.data.schedules;
          for (var i = 0; i < $scope.schedules.length; i++) {
            $scope.schedules[i].starttime= new Date(Number($scope.schedules[i].starttime));
            $scope.schedules[i].endtime= new Date(Number($scope.schedules[i].endtime));
            if(i==0){
              $scope.option.newtimeslot = $scope.schedules[i].endtime;
            }
          }
        }
        }, function(error){
            LoadingService.hideLoading();
            //there was an error fetching from the server
            alert(JSON.stringify(error));
            });

    };
    $scope.addNewSchedule = function() {
      ApplyService.addNewSchedule($scope.post.post_id, $scope.applicant.user_id, $scope.interview.interview_id, $scope.option.newtimeslot, $scope.option.length).then(function(response){
        console.log(JSON.stringify(response));
        {
          $scope.getInterviewSchedule();
          //$state.go($state.current, {}, {reload: true});
        }
      }, function(error){

          //there was an error fetching from the server
          console.log(JSON.stringify(error));
          });

    };
    $scope.deleteTimeSlot = function(schedule, index){
      $cordovaDialogs.confirm('Are you sure?', 'Confirm to Delete', ['Yes','No'])
      .then(function(buttonIndex) {
        if(buttonIndex==1){
          var url='/mobile/delete_interview_schedule';
          var data = {
            my_key: window.global.my_key,
            api_key: window.global.api_key,
            schedule_id: schedule.schedule_id,
            user_id: $scope.me.user_id
          };
          $http({
            method: 'POST',
            url: window.global.baseurl+url,
            data: data,
            dataType: 'json',
            headers:
            {'Content-Type': 'application/x-www-form-urlencoded'}
          }).then(function mySucces(response) {
            alert("responded -->" +(response.data.status));
            if(response.data.status==true){
              //$scope.resumes = response.data.resumes;
              $scope.schedules.splice(index, 1);
              //$state.go($state.current, {}, {reload: true});
            }else{
              alert("Error -->" +JSON.stringify(response.data.msg));
              //alert("Error -->" +JSON.stringify(response.data.msg));
              if(response.data.msg=="Invalid mobile key used"){
                AuthService.getApiKey($scope.me.user_id).then(function (result) {
                });
              }
            }
          }, function(error){
              //LoadingService.hideLoading();
              //there was an error fetching from the server
              alert(JSON.stringify(error));
              });
        }else{
          return false;
        }
      }, function(error) {
        alert("Error -> " + error);
      });
      $ionicListDelegate.closeOptionButtons();
    }
  $scope.resetCache = function() {
    //$scope.option.newtimeslot = {};
  };

  $scope.notifyApplicant = function(){
    $cordovaDialogs.confirm('Notify applicant '+$scope.applicant.name +' for incoming schedule?', 'Confirm to Schedule', ['Yes','No'])
    .then(function(buttonIndex) {
      // no button = 0, 'OK' = 1, 'Cancel' = 2
      if(buttonIndex==1){
        var timeslots = [];
        for (var i = 0; i < $scope.schedules.length; i++) {
          if($scope.schedules[i].checked==true){
            timeslots.push($scope.schedules[i]);
          }
        }
        if(timeslots.length == 0){
          alert("Error - No slots checked!!");
          return;
        }
        ApplyService.notifyApplicantSchedule($scope.post.post_id, $scope.applicant.user_id, $scope.interview.interview_id, timeslots, true).then(function(response){
          console.log(JSON.stringify(response));
          {
            var body = 'Dear '+$scope.applicant.name + ', Your imminent response is required';
            var title = 'Schedule Confirmation for '+ $scope.post.title;

            /*var notiactions = [
                { "icon": "emailGuests", "title": "EMAIL GUESTS", "callback": "app.emailGuests", "foreground": true},
                { "icon": "snooze", "title": "SNOOZE", "callback": "app.snooze", "foreground": false},
            ];*/
            { //InIdle  ==> check for timeslot and within valid timeslot open interview method
              var type = InterviewIconService.getType($scope.post.interviews[$scope.applicant.interviewstage-1].icon);
              if(type == '5001'){  //APP
                //var state = "app.answerApp";
                //var param = {'post':$scope.post, 'interview':$scope.post.interviews[$scope.applicant.interviewstage-1]};
              } else if (type == '5002'){ //ARS
                //No such state
              } else if (type == '5003'){  //CALL
                var state = "app.scheduleNegoInterview";
                var param = {'post':$scope.post, 'interview':$scope.post.interviews[$scope.applicant.interviewstage-1]};
              } else if (type == '5004'){  //CHAT

              } else if (type == '5005'){  //VIDEO

              } else if (type == '5006'){  //PERSON
                var state = "app.scheduleNegoInterview";
                var param = {'post':$scope.post, 'interview':$scope.post.interviews[$scope.applicant.interviewstage-1]};
              }
              NotificationService.sendTo($scope.post.post_id, $scope.interview.interview_id, $scope.applicant.user_id, body, title, state, param, 'send_notification').then(function (response) {
                console.log("responded -->" +JSON.stringify(response));

              }, function(error){
                  console.log(JSON.stringify(error));
                  });
            }
            $state.go("app.applicants");
          }
        }, function(error){

            //there was an error fetching from the server
            console.log(JSON.stringify(error));
            });


      }

          }, function(error) {
            alert("Error -> " + error);
          });

  };
  $scope.goHome = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.postJobMain");
  };
  $scope.goBack = function(){
    $ionicHistory.goBack();
  };
  $scope.gotoMessage = function() {
    $state.go('app.systemMessage');
  };
  $scope.goSetting = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.setting");
  };

  $scope.getStyle = function(schedule){
    if(schedule.applicant != null){
      return "lightcyan"
    }else{
      return "lightyellow"
    }
  };

})
.controller('scheduleAppCtrl', function($scope, $http, $timeout, $state, $ionicSlideBoxDelegate, $ionicActionSheet, $cordovaCamera, PostingService, $ionicModal, $ionicHistory, $stateParams, LoadingService, ApplyService, BrowsingModeService, AuthService, $cordovaDialogs, InterviewIconService, NotificationService) {
    $scope.init  = function() {
      $scope.post = $stateParams.post;
      $scope.applicant = $stateParams.applicant;
      $scope.interview = $stateParams.interview;
      $scope.timeslot = {};
      if($stateParams.interview.closing){
        $scope.timeslot.closing = new Date(Number($stateParams.interview.closing));
      }else{
        $scope.timeslot.closing = new Date();
      }
      $scope.questions = [];
      $scope.getInterviewQuestion();
    }
    $scope.getInterviewQuestion = function(){
      LoadingService.showLoading();
      var url='/mobile/get_interview_question';
      $http({
        url: window.global.baseurl+url,
        method: "GET",
        params: {'my_key': window.global.my_key, 'api_key': window.global.api_key, 'user_id' : $scope.me.user_id, 'post_id' : $scope.post.post_id, 'interview_id' : $scope.interview.interview_id},
      }).then(function (response) {
        LoadingService.hideLoading();
        console.log("responded -->" +JSON.stringify(response.data));
        if(response.data.status==true){
          $scope.questions = response.data.questions;
          //$state.go($state.current, {}, {reload: true});
          //$scope.$broadcast('scroll.refreshComplete');
        }
        }, function(error){
            LoadingService.hideLoading();
            //there was an error fetching from the server
            alert(JSON.stringify(error));
            });

    };
  $scope.resetCache = function() {
    $scope.timeslot = {};
  };

  $scope.notifyApplicant = function(){
    $cordovaDialogs.confirm('Notify applicant '+$scope.applicant.name +' for incoming schedule?', 'Confirm to Schedule', ['Yes','No'])
    .then(function(buttonIndex) {
      // no button = 0, 'OK' = 1, 'Cancel' = 2
      if(buttonIndex==1){
        //update t_postuser
        ApplyService.notifyApplicantSchedule($scope.post.post_id, $scope.applicant.user_id, $scope.interview.interview_id, $scope.timeslot, false).then(function(response){
          console.log(JSON.stringify(response));
          {
            var body = 'Dear '+$scope.applicant.name + ', Your imminent response is required';
            var title = 'Schedule Confirmation for '+ $scope.post.title;
            /*var notiactions = [
                { "icon": "emailGuests", "title": "EMAIL GUESTS", "callback": "app.emailGuests", "foreground": true},
                { "icon": "snooze", "title": "SNOOZE", "callback": "app.snooze", "foreground": false},
            ];*/
            { //InIdle  ==> check for timeslot and within valid timeslot open interview method
              var type = InterviewIconService.getType($scope.post.interviews[$scope.applicant.interviewstage-1].icon);
              if(type == '5001'){  //APP
                var state = "app.answerApp";
                var param = {'post':$scope.post, 'interview':$scope.post.interviews[$scope.applicant.interviewstage-1]};
              } else if (type == '5002'){ //ARS
                //No such state
              } else if (type == '5003'){  //CALL

              } else if (type == '5004'){  //CHAT

              } else if (type == '5005'){  //VIDEO

              } else if (type == '5006'){  //PERSON
                //var state = "app.scheduleNegoPerson";
                //var param = {'post':$scope.post, 'interview':$scope.post.interviews[$scope.applicant.interviewstage-1]};
              }
              NotificationService.sendTo($scope.post.post_id, $scope.interview.interview_id, $scope.applicant.user_id, body, title, state, param, 'send_notification').then(function (response) {
                console.log("responded -->" +JSON.stringify(response));

              }, function(error){
                  console.log(JSON.stringify(error));
                  });
            }
            $state.go("app.applicants");
          }
        }, function(error){

            //there was an error fetching from the server
            console.log(JSON.stringify(error));
            });
      }

          }, function(error) {
            alert("Error -> " + error);
          });

  };
  $scope.goHome = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.postJobMain");
  };
  $scope.goBack = function(){
    $ionicHistory.goBack();
  };
  $scope.gotoMessage = function() {
    $state.go('app.systemMessage');
  };
  $scope.goSetting = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.setting");
  };

  $scope.getStyle = function(status){
    if(status =='8004'){
      return "lightyellow"
    }else{
      return "lightcyan"
    }
  };

})

.controller('moduleInterviewWrapUpCtrl', function($scope, $http, $timeout, $state, $ionicSlideBoxDelegate, $ionicActionSheet, $cordovaCamera, PostingService, $ionicModal, $ionicHistory, $stateParams, LoadingService, ApplyService, BrowsingModeService, AuthService, $cordovaDialogs, InterviewIconService) {
    $scope.init  = function() {
      $scope.post = $stateParams.post;
      $scope.interviews = $stateParams.interviews;
      $scope.interview_sequence = $stateParams.interview_sequence;
      $scope.getInterviewSnapshot();
    }
    $scope.getInterviewSnapshot = function(){
      LoadingService.showLoading();
      var url='/mobile/get_interview_snapshot';
      $http({
        url: window.global.baseurl+url,
        method: "GET",
        params: {'my_key': window.global.my_key, 'api_key': window.global.api_key, 'user_id' : $scope.me.user_id, 'post_id' : $scope.post.post_id},
      }).then(function (response) {
        LoadingService.hideLoading();
        console.log("responded -->" +JSON.stringify(response.data));
        if(response.data.status==true){
          for(var i=0; i<$scope.interviews.length; i++){
            for(var j=0; j<response.data.interviews.length; j++){
              if($scope.interviews[i].interview_id == response.data.interviews[j].interview_id){
                $scope.interviews[i].result = response.data.interviews[j].result;
                if($scope.interviews[i].result == undefined){
                  $scope.interviews[i].result = [];
                }
                for(var k=0; k<$scope.interviews[i].result.length; k++){
                  $scope.interviews[i].result[k].checked = false;
                }
                var interviewtype = InterviewIconService.getType($scope.interviews[i].icon);
                $scope.interviews[i].type = interviewtype;
                if(interviewtype == '5006'){
                  $scope.interviews[i].unit = response.data.interviews[j].unit;
                  $scope.interviews[i].fulladdress = response.data.interviews[j].fulladdress;
                  $scope.interviews[i].longitude = response.data.interviews[j].longitude;
                  $scope.interviews[i].latitude = response.data.interviews[j].latitude;
                  $scope.interviews[i].postal = response.data.interviews[j].postal;
                  $scope.interviews[i].citytag = response.data.interviews[j].citytag;
                }
                break;
              }
            }
          }
          $ionicSlideBoxDelegate.update();
          $scope.activeSlide = $scope.interview_sequence-1;
          //$timeout(slideBox, 500);
        }
        }, function(error){
            LoadingService.hideLoading();
            //there was an error fetching from the server
            alert(JSON.stringify(error));
            });

    };

    /*var slideBox = function() {
      for(var i=1; i<$scope.interview_sequence; i++){
        $ionicSlideBoxDelegate.next();
      }
    }*/
        $scope.sendOK = function(){
          if($scope.post.interviewstage < $scope.post.interviewcount){
            var messaget = 'Leave an message to applicants for Pass?';
            var title = 'Message for Pass';
          }else{
            var messaget = 'Leave an message to applicants for Job Offer?';
            var title = 'Message for Job Offer';
          }

          $cordovaDialogs.prompt(messaget, title, ['Yes','No'])
          .then(function(result) {
            var message = result.input1;
            // no button = 0, 'OK' = 1, 'Cancel' = 2
            var btnIndex = result.buttonIndex;

            if(btnIndex==1){
              var applicants = [];

              for(var i=0; i<$scope.interviews[$scope.post.interviewstage-1].result.length; i++){
                if($scope.interviews[$scope.post.interviewstage-1].result[i].checked){
                  applicants.push($scope.interviews[$scope.post.interviewstage-1].result[i].user_id);
                }
              }
              if(applicants.length <= 0){
                $cordovaDialogs.confirm('No applicants selected, continue to wrap-up interview?', 'Confirm to WrapUp', ['Yes','No'])
                .then(function(buttonIndex) {
                  // no button = 0, 'OK' = 1, 'Cancel' = 2
                  if(buttonIndex==1){
                    var nextinterview_id = $scope.interviews[$scope.post.interviewstage].interview_id;
                    var interview_id = $scope.interviews[$scope.post.interviewstage-1].interview_id;
                    if($scope.post.interviewstage < $scope.post.interviewcount){
                      ApplyService.notifyApplicantsPassForWrapUp($scope.post.post_id, applicants, nextinterview_id, interview_id, message).then(function(response){
                        console.log(JSON.stringify(response));
                        {
                          $state.go("app.applicants");
                        }
                      }, function(error){

                          //there was an error fetching from the server
                          console.log(JSON.stringify(error));
                          });
                    }else{
                      //To do with job offer
                      //contract signature offer multiple required
                      alert('To do for job offer for multiple applicants');
                    }
                  }

                      }, function(error) {
                        alert("Error -> " + error);
                      });

              }else{
                var nextinterview_id = $scope.interviews[$scope.post.interviewstage].interview_id;
                var interview_id = $scope.interviews[$scope.post.interviewstage-1].interview_id;
                if($scope.post.interviewstage < $scope.post.interviewcount){
                  ApplyService.notifyApplicantsPassForWrapUp($scope.post.post_id, applicants, nextinterview_id, interview_id, message).then(function(response){
                    console.log(JSON.stringify(response));
                    {
                      $state.go("app.applicants");
                    }
                  }, function(error){

                      //there was an error fetching from the server
                      console.log(JSON.stringify(error));
                      });
                }else{
                  //To do with job offer
                  alert('To do for job offer for multiple applicants');
                }
              }
            }

          }, function(error) {
            alert("Error -> " + error);
          });

        };
    $scope.slideChanged = function () {
        $ionicSlideBoxDelegate.update();
    };
    $scope.goHome = function(){
      $ionicHistory.nextViewOptions({ disableBack: true });
      $state.go("app.postJobMain");
    };
    $scope.goBack = function(){
      $ionicHistory.goBack();
    };
    $scope.gotoMessage = function() {
      $state.go('app.systemMessage');
    };
    $scope.goSetting = function(){
      $ionicHistory.nextViewOptions({ disableBack: true });
      $state.go("app.setting");
    };

  $scope.getStyle = function(status){
    if(status =='8004'){
      return "lightyellow"
    }else{
      return "lightcyan"
    }
  };

})
.controller('moduleInterviewDetailPosterCtrl', function($scope, $http, $timeout, $state, $ionicSlideBoxDelegate, $ionicActionSheet, $cordovaCamera, PostingService, $ionicModal, $ionicHistory, $stateParams, LoadingService, ApplyService, BrowsingModeService, AuthService, $cordovaDialogs) {
    $scope.init  = function() {
      $scope.post = $stateParams.post;
      $scope.interviews = $stateParams.interviews;
      $scope.interview_sequence = $stateParams.interview_sequence;
      $scope.getInterviewSnapshot();
    }
    $scope.getInterviewSnapshot = function(){
      LoadingService.showLoading();
      var url='/mobile/get_interview_snapshot';
      $http({
        url: window.global.baseurl+url,
        method: "GET",
        params: {'my_key': window.global.my_key, 'api_key': window.global.api_key, 'user_id' : $scope.me.user_id, 'post_id' : $scope.post.post_id},
      }).then(function (response) {
        LoadingService.hideLoading();
        console.log("responded -->" +JSON.stringify(response.data));
        if(response.data.status==true){
          for(var i=0; i<$scope.interviews.length; i++){
            for(var j=0; j<response.data.interviews.length; j++){
              if($scope.interviews[i].interview_id == response.data.interviews[j].interview_id){
                $scope.interviews[i].result = response.data.interviews[j].result;
                break;
              }
            }
          }
          $ionicSlideBoxDelegate.update();
          $scope.activeSlide = $scope.interview_sequence-1;
          //$timeout(slideBox, 500);
        }
        }, function(error){
            LoadingService.hideLoading();
            //there was an error fetching from the server
            alert(JSON.stringify(error));
            });

    };

    /*var slideBox = function() {
      for(var i=1; i<$scope.interview_sequence; i++){
        $ionicSlideBoxDelegate.next();
      }
    }*/

    $scope.slideChanged = function () {
        $ionicSlideBoxDelegate.update();
    };
    $scope.goHome = function(){
      $ionicHistory.nextViewOptions({ disableBack: true });
      $state.go("app.postJobMain");
    };
    $scope.goBack = function(){
      $ionicHistory.goBack();
    };
    $scope.gotoMessage = function() {
      $state.go('app.systemMessage');
    };
    $scope.goSetting = function(){
      $ionicHistory.nextViewOptions({ disableBack: true });
      $state.go("app.setting");
    };

  $scope.getStyle = function(status){
    if(status =='8004'){
      return "lightyellow"
    }else{
      return "lightcyan"
    }
  };

})
.controller('moduleInterviewDetailApplicantCtrl', function($scope, $http, $timeout, $state, $ionicSlideBoxDelegate, $ionicActionSheet, $cordovaCamera, PostingService, $ionicModal, $ionicHistory, $stateParams, LoadingService, ApplyService, BrowsingModeService, AuthService, $cordovaDialogs) {
    $scope.init  = function() {
      $scope.post = $stateParams.post;
      $scope.interviews = $stateParams.interviews;
      $scope.interview_sequence = $stateParams.interview_sequence;

      $scope.activeSlide = $scope.interview_sequence-1;
      //$timeout(slideBox, 500);
    }

    /*var slideBox = function() {
      for(var i=1; i<$scope.interview_sequence; i++){
        $ionicSlideBoxDelegate.next();
      }
    }*/

    $scope.slideChanged = function () {
        $ionicSlideBoxDelegate.update();
    };
    $scope.goHome = function(){
      $ionicHistory.nextViewOptions({ disableBack: true });
      $state.go("app.postJobMain");
    };
    $scope.goBack = function(){
      $ionicHistory.goBack();
    };
    $scope.gotoMessage = function() {
      $state.go('app.systemMessage');
    };
    $scope.goSetting = function(){
      $ionicHistory.nextViewOptions({ disableBack: true });
      $state.go("app.setting");
    };

  $scope.getStyle = function(status){
    if(status =='8004'){
      return "lightyellow"
    }else{
      return "lightcyan"
    }
  };

})
.controller('answerAppCtrl', function($scope, $http, $timeout, $state, $ionicSlideBoxDelegate, $ionicActionSheet, $cordovaCamera, PostingService, $ionicModal, $ionicHistory, $stateParams, LoadingService, ApplyService, BrowsingModeService, AuthService, $cordovaDialogs, InterviewIconService, NotificationService) {
    $scope.init  = function() {
      $scope.post = $stateParams.post;
      $scope.interview = $stateParams.interview;
      $scope.timeslot = {};

      $scope.questions = [];
      $scope.getInterviewQuestion();
    }
    $scope.getInterviewQuestion = function(){
      LoadingService.showLoading();
      var url='/mobile/get_interview_question_closing';
      $http({
        url: window.global.baseurl+url,
        method: "GET",
        params: {'my_key': window.global.my_key, 'api_key': window.global.api_key, 'user_id' : $scope.me.user_id, 'post_id' : $scope.post.post_id, 'interview_id' : $scope.interview.interview_id},
      }).then(function (response) {
        LoadingService.hideLoading();
        console.log("responded -->" +JSON.stringify(response.data));
        if(response.data.status==true){
          $scope.timeslot = {};
          $scope.questions = [];
          if(Array.isArray(response.data.questions)){
            $scope.questions = response.data.questions;
          }
          if(Array.isArray(response.data.timeslot)){
            $scope.timeslot = response.data.timeslot[0];
          }
        }
        }, function(error){
            LoadingService.hideLoading();
            //there was an error fetching from the server
            alert(JSON.stringify(error));
            });

    };
  $scope.resetCache = function() {
    $scope.timeslot = {};
  };
  function validateAnswers(){

    for (var i = 0; i < $scope.questions.length; i++) {
      if($scope.questions[i].answer==undefined || $scope.questions[i].answer.length<3){
        return false;
      }
    }
    return true;
  }
  $scope.submitAnswer = function(){
    $cordovaDialogs.confirm('Submit your answer?', 'Confirm to Submit', ['Yes','No'])
    .then(function(buttonIndex) {
      // no button = 0, 'OK' = 1, 'Cancel' = 2
      if(buttonIndex==1){

        if(validateAnswers()){
          ApplyService.answerAppInterview($scope.post.post_id, $scope.interview.interview_id, $scope.questions).then(function(response){
            console.log(JSON.stringify(response));
            if(response.status==true){
              $state.go("app.myJobApplied");
            }else{
              alert('Error - ' +response.msg);
              $ionicHistory.goBack();
            }
          }, function(error){

              alert(JSON.stringify(error));
            });
        }
      }

          }, function(error) {
            alert("Error -> " + error);
          });

  };

  $scope.goHome = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.postJobMain");
  };
  $scope.goBack = function(){
    $ionicHistory.goBack();
  };
  $scope.gotoMessage = function() {
    $state.go('app.systemMessage');
  };
  $scope.goSetting = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.setting");
  };

  $scope.getStyle = function(status){
    if(status =='8004'){
      return "lightyellow"
    }else{
      return "lightcyan"
    }
  };

})
.controller('EvalResumeCtrl', function($scope, $http, $timeout, $state, $ionicSlideBoxDelegate, $ionicActionSheet, $cordovaCamera, PostingService, $ionicModal, $ionicHistory, $stateParams, LoadingService, ApplyService, BrowsingModeService, AuthService, $cordovaDialogs) {
    $scope.init  = function() {
      $scope.post = $stateParams.post;
      $scope.applicant = $stateParams.applicant;
      $scope.nextinterview = $stateParams.nextinterview;
      $scope.resume = {};
      $scope.eval = {};
      $scope.items = [
        { number: 1},
        { number: 2},
        { number: 3},
        { number: 4},
        { number: 5},
        { number: 6},
        { number: 7},
        { number: 8},
        { number: 9},
        { number: 10}
      ];
      $scope.eval.score = $scope.items[5];

      $scope.getApplicantResume();
    }
    function base64ToUint8Array(base64) {
      var raw = atob(base64);
      var uint8Array = new Uint8Array(raw.length);
      for (var i = 0; i < raw.length; i++) {
        uint8Array[i] = raw.charCodeAt(i);
      }
      return uint8Array;
    }

  function getcodefromfiletype(filetype){
    var cvfiletype = '3001';
    if(filetype == 'MS Word')
      cvfiletype = '3002';
    else if(filetype == 'PDF')
      cvfiletype = '3003';
    else if(filetype == 'Text')
      cvfiletype = '3004';
    return cvfiletype;
  }

  $scope.resetCache = function() {
    $scope.ispdf= undefined;
    $scope.istxt = undefined;
    $scope.isimg = undefined;
    $scope.pdfUrl = undefined;
    $scope.eval = {};
    $scope.resume.filetype = undefined;
    $scope.resume.content = undefined;

  };
  $scope.getApplicantResume = function(){
    LoadingService.showLoading();
    var url='/mobile/get_applicant_resume';
    $http({
      url: window.global.baseurl+url,
      method: "GET",
      params: {'my_key': window.global.my_key, 'api_key': window.global.api_key, 'user_id' : $scope.me.user_id, 'post_id' : $scope.post.post_id, 'applicant_id' : $scope.applicant.user_id},
    }).then(function (response) {
      LoadingService.hideLoading();
      console.log("responded -->" +JSON.stringify(response.data));
      if(response.data.status==true){
        if(response.data.cvtype == '3003')
        {
          //$scope.file.resume = response.data.resume.fileblob;
          var myBaseString = response.data.cvblob;
          alert("myBaseString size-->" +myBaseString.length);

          var block = myBaseString.split(";");
          var dataType = block[0].split(":")[1];// In this case "application/pdf"
          var realData = block[1].split(",")[1];// In this case "JVBERi0xLjcKCjE...."
          var blob = new Blob([base64ToUint8Array(realData)], { type: dataType });
          $scope.pdfUrl = URL.createObjectURL(blob);
          //$scope.pdfUrl = $scope.pdfUrl1;
          //$scope.input.tempcontent = myBaseString;

          //$scope.input.tempfiletype="3003";
          //$scope.ispdf = true;
          //$scope.pdfUrl1 = $scope.pdfUrl;
          //$scope.resume.pdfUrl = $scope.pdfUrl1;
          //$scope.resume.content = myBaseString;
          //$scope.resume.filetype = "3003";
          $scope.ispdf = true;
          $scope.istxt = false;
          $scope.isimg = false;

        }else if(response.data.cvtype == '3001'){

          //$scope.input.tempcontent=response.data.resume.fileblob;
          //$scope.input.tempfiletype="3001";
          //$scope.isimg = true;
          $scope.ispdf = false;
          $scope.istxt = false;
          $scope.isimg = true;
          $scope.resume.content = response.data.cvblob;
          $scope.resume.filetype = "3001";
        }
      }else{
        $scope.postings = undefined;
        //alert("Error -->" +JSON.stringify(response.data.msg));
        if(response.data.msg=="Invalid mobile key used"){
          AuthService.getApiKey($scope.me.user_id).then(function (result) {
          });
        }
      }
      //$state.go($state.current, {}, {reload: true});
      //$scope.$broadcast('scroll.refreshComplete');
      }, function(error){
          LoadingService.hideLoading();
          //there was an error fetching from the server
          alert(JSON.stringify(error));
          });

  };

  $scope.notifyApplicant = function(){
    $cordovaDialogs.confirm('Notify applicant '+$scope.applicant.name +' for Pass?', 'Confirm to Notify', ['Yes','No'])
    .then(function(buttonIndex) {
      // no button = 0, 'OK' = 1, 'Cancel' = 2
      if(buttonIndex==1){
        //update t_postuser
        ApplyService.notifyApplicantPass($scope.post.post_id, $scope.applicant.user_id, $scope.nextinterview.interview_id).then(function(response){
          console.log(JSON.stringify(response));
          {
            $state.go("app.applicants");
          }
        }, function(error){

            //there was an error fetching from the server
            console.log(JSON.stringify(error));
            });
      }

    }, function(error) {
      alert("Error -> " + error);
    });
  };
  $scope.dropApplicant = function(){
    $cordovaDialogs.confirm('Drop applicant '+$scope.applicant.name +'?', 'Confirm to Drop', ['Yes','No'])
    .then(function(buttonIndex) {
      // no button = 0, 'OK' = 1, 'Cancel' = 2
      if(buttonIndex==1){
        //update t_postuser
        ApplyService.dropApplicant($scope.post.post_id, $scope.applicant.user_id).then(function(response){
          console.log(JSON.stringify(response));
          {
            $state.go("app.applicants");
          }
        }, function(error){

            //there was an error fetching from the server
            console.log(JSON.stringify(error));
            });
      }

    }, function(error) {
      alert("Error -> " + error);
    });
  };
  $scope.goHome = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.postJobMain");
  };
  $scope.goBack = function(){
    $ionicHistory.goBack();
  };
  $scope.gotoMessage = function() {
    $state.go('app.systemMessage');
  };
  $scope.goSetting = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.setting");
  };

  $scope.getStyle = function(status){
    if(status =='8004'){
      return "lightyellow"
    }else{
      return "lightcyan"
    }
  };

  $scope.openPost = function(post){
    var visposter = (post.user_id==$scope.me.user_id)?true:false;
    $state.go("app.postDetail", {'post_id':post.post_id, 'isposter': visposter});
  };

})

.controller('PostDetailMessageCtrl', function($scope, $state, $stateParams, LoadingService, $ionicHistory, AuthService, InterviewIconService, $ionicActionSheet, $ionicSlideBoxDelegate, $http, $ionicModal, $ionicScrollDelegate, $rootScope,  MockService, $ionicPopup, $timeout, $interval,  $filter,  LocationService, PostingManageService, $cordovaCamera, $cordovaClipboard) {

  var messageCheckTimer;

  var viewScroll = $ionicScrollDelegate.$getByHandle('userMessageScroll');
  var footerBar; // gets set in $ionicView.enter
  var scroller;
  var txtInput; // ^^^

  $scope.$on('$ionicView.enter', function () {
    $ionicHistory.clearCache();
    //getMessages();
    $scope.getQnA();

    $timeout(function () {
      footerBar = document.body.querySelector('.homeView .bar-footer');
      scroller = document.body.querySelector('.homeView .scroll-content');
      txtInput = angular.element(footerBar.querySelector('textarea'));
    }, 0);

    messageCheckTimer = $interval(function () {
      // here you could check for new messages if your app doesn't use push notifications or user disabled them
    }, 20000);
  });

  $scope.$on('$ionicView.leave', function () {
    $ionicHistory.clearCache();
    // Make sure that the interval is destroyed
    if (angular.isDefined(messageCheckTimer)) {
      $interval.cancel(messageCheckTimer);
      messageCheckTimer = undefined;
    }
  });

  $scope.$on('$ionicView.beforeLeave', function () {
    if (!$scope.input.message || $scope.input.message === '') {
      localStorage.removeItem('userMessage-' + $scope.toUser._id);
    }
  });

  function getMessages() {
    // the service is mock but you would probably pass the toUser's GUID here
    MockService.getUserMessages({
      toUserId: $scope.toUser._id
    }).then(function (data) {
      $scope.doneLoading = true;
      $scope.messages = data.messages;
    });
  }
  $scope.getQnALatest = function(){
    PostingManageService.getPostQnALatest($scope.post.post_id, $scope.opponent.user_id).then(function (data) {
      $scope.doneLoading = true;

      if(Array.isArray(data.messages)){
        for(var i=0; i<data.messages.length; i++){
          if(data.messages[i].type == '1401'){  //image
            $scope.messages.push({
                userId: data.messages[i].from_id,
                date: new Date(Number(data.messages[i].created)),
                photo: data.messages[i].content
            });
          }else if(data.messages[i].type == '1402'){  //text
            $scope.messages.push({
                userId: data.messages[i].from_id,
                date:  new Date(Number(data.messages[i].created)),
                text: data.messages[i].content
            });
          }
        }
      }
    });
  }
  function convertingPhonelinkable(phone){
    if(phone.charAt(phone.length-5) != '-'){
      var position = phone.length-4;
      phone = [phone.slice(0, position), '-', phone.slice(position)].join('');
    }
     return phone;
  }
  $scope.getQnA = function(){
    PostingManageService.getPostQnA($scope.post.post_id, $scope.opponent.user_id).then(function (data) {
      $scope.doneLoading = true;
      $scope.messages = [];
      if($scope.post.name){
        $scope.messages.push({
            userId: $scope.me.user_id,
            date: new Date(),
            text: 'Title : ' + $scope.post.title + ' - ' + $scope.post.name + '\nLocation : ' + $scope.post.fulladdress + '\nPhone : ' + convertingPhonelinkable($scope.post.phone)
        });
      }else{
        $scope.messages.push({
            userId: $scope.me.user_id,
            date: new Date(),
            text: 'Title : ' + $scope.post.title + ' - ' + $scope.opponent.name
        });
      }

      if(Array.isArray(data.messages)){
        for(var i=0; i<data.messages.length; i++){
          if(data.messages[i].type == '1401'){  //image
            $scope.messages.push({
                userId: data.messages[i].from_id,
                date: new Date(Number(data.messages[i].created)),
                photo: data.messages[i].content
            });
          }else if(data.messages[i].type == '1402'){  //text
            $scope.messages.push({
                userId: data.messages[i].from_id,
                date:  new Date(Number(data.messages[i].created)),
                text: data.messages[i].content
            });
          }
        }
      }
    });
  }
  $scope.$watch('input.message', function (newValue, oldValue) {
    console.log('input.message $watch, newValue ' + newValue);
    if (!newValue) newValue = '';
    localStorage['userMessage-' + $scope.toUser._id] = newValue;
  });

  var addMessage = function (message) {
    message._id = new Date().getTime(); // :~)
    message.date = new Date();
    message.username = $scope.user.username;
    message.userId = $scope.user._id;
    message.pic = $scope.user.picture;
    $scope.messages.push(message);
  };

  //var lastPhoto = 'img/donut.png';

  $scope.sendPhoto = function () {
    $ionicActionSheet.show({
      buttons: [
        { text: 'Take Photo' },
        { text: 'Photo from Library' }
      ],
      titleText: 'Upload image',
      cancelText: 'Cancel',
      buttonClicked: function(index) {

        if(index==0){
          var options = {
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 500,
            targetHeight: 500,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false,
            quality: 80,
            correctOrientation:true
          };

          $cordovaCamera.getPicture(options).then(function(imageData) {
            var message = {
              toId: $scope.toUser._id,
              photo: "data:image/jpeg;base64,"+imageData
            };
            addMessage(message);
            var state = "app.PostDetailMessage";
            var sender = {'user_id':$scope.me.user_id, 'name':$scope.me.name};
            var param = {'post':$scope.post, 'opponent':sender};
            var type = '1401'; //image
            PostingManageService.writePostQnA($scope.post.post_id, $scope.opponent.user_id, type, "data:image/jpeg;base64,"+imageData, state, param) .then(function (data) {
              if(data){

              }
            });
          });

        }else if(index==1){
          var options = {
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 500,
            targetHeight: 500,
            popoverOptions: CameraPopoverOptions,
            quality: 80,
            correctOrientation:true
          };

          $cordovaCamera.getPicture(options).then(function(imageData) {
            var message = {
              toId: $scope.toUser._id,
              photo: "data:image/jpeg;base64,"+imageData
            };
            addMessage(message);
            var state = "app.PostDetailMessage";
            var sender = {'user_id':$scope.me.user_id, 'name':$scope.me.name};
            var param = {'post':$scope.post, 'opponent':sender};
            var type = '1401'; //image
            PostingManageService.writePostQnA($scope.post.post_id, $scope.opponent.user_id, type, "data:image/jpeg;base64,"+imageData, state, param) .then(function (data) {
              if(data){

              }
            });
          });
        }
        return true;
      }

      /*
      buttonClicked: function (index) {

        var message = {
          toId: $scope.toUser._id,
          photo: lastPhoto
        };
        lastPhoto = lastPhoto === 'img/donut.png' ? 'img/woho.png' : 'img/donut.png';
        addMessage(message);

        var type = '1401'; //image
        PostingManageService.writePostQnA($scope.post.post_id, $scope.opponent.user_id, type, lastPhoto) .then(function (data) {
          if(data){

          }
        });
        return true;
      }*/
    });
  };
  $scope.sendPhoto2 = function () {
    $ionicActionSheet.show({
      buttons: [
        { text: 'Take Photo' },
        { text: 'Photo from Library' }
      ],
      titleText: 'Upload image',
      cancelText: 'Cancel',
      buttonClicked: function (index) {

        var message = {
          toId: $scope.toUser._id,
          photo: lastPhoto
        };
        lastPhoto = lastPhoto === 'img/donut.png' ? 'img/woho.png' : 'img/donut.png';
        addMessage(message);

        $timeout(function () {
          var message = MockService.getMockMessage();
          message.date = new Date();
          $scope.messages.push(message);
        }, 2000);
        return true;
      }
    });
  };
  $scope.sendMessage = function (sendMessageForm) {
    var state = "app.PostDetailMessage";
    var sender = {'user_id':$scope.me.user_id, 'name':$scope.me.name};
    var param = {'post':$scope.post, 'opponent':sender};
    var type = '1402'; //text
    PostingManageService.writePostQnA($scope.post.post_id, $scope.opponent.user_id, type, $scope.input.message, state, param) .then(function (data) {
      if(data){
        var message = {
          toId: $scope.toUser._id,
          text: $scope.input.message
        };

        // if you do a web service call this will be needed as well as before the viewScroll calls
        // you can't see the effect of this in the browser it needs to be used on a real device
        // for some reason the one time blur event is not firing in the browser but does on devices
        keepKeyboardOpen();

        //MockService.sendMessage(message).then(function(data) {
        $scope.input.message = '';

        addMessage(message);
        $timeout(function () {
          keepKeyboardOpen();
        }, 0);
      }
    });


    //});
  };
  $scope.sendMessage2 = function (sendMessageForm) {
    var message = {
      toId: $scope.toUser._id,
      text: $scope.input.message
    };

    // if you do a web service call this will be needed as well as before the viewScroll calls
    // you can't see the effect of this in the browser it needs to be used on a real device
    // for some reason the one time blur event is not firing in the browser but does on devices
    keepKeyboardOpen();

    //MockService.sendMessage(message).then(function(data) {
    $scope.input.message = '';

    addMessage(message);
    $timeout(function () {
      keepKeyboardOpen();
    }, 0);

    $timeout(function () {
      var message = MockService.getMockMessage();
      message.date = new Date();
      $scope.messages.push(message);
      keepKeyboardOpen();
    }, 2000);
    //});
  };

  // this keeps the keyboard open on a device only after sending a message, it is non obtrusive
  function keepKeyboardOpen() {
    console.log('keepKeyboardOpen');
    txtInput.one('blur', function () {
      console.log('textarea blur, focus back on it');
      txtInput[0].focus();
    });
  }
  $scope.refreshScroll = function (scrollBottom, timeout) {
    $timeout(function () {
      scrollBottom = scrollBottom || $scope.scrollDown;
      viewScroll.resize();
      if (scrollBottom) {
        viewScroll.scrollBottom(true);
      }
      $scope.checkScroll();
    }, timeout || 1000);
  };
  $scope.scrollDown = true;
  $scope.checkScroll = function () {
    $timeout(function () {
      var currentTop = viewScroll.getScrollPosition().top;
      var maxScrollableDistanceFromTop = viewScroll.getScrollView().__maxScrollTop;
      $scope.scrollDown = (currentTop >= maxScrollableDistanceFromTop);
      $scope.$apply();
    }, 0);
    return true;
  };

  var openModal = function (templateUrl) {
    return $ionicModal.fromTemplateUrl(templateUrl, {
      scope: $scope,
      animation: 'slide-in-up',
      backdropClickToClose: false
    }).then(function (modal) {
      modal.show();
      $scope.modal = modal;
    });
  };

  $scope.photoBrowser = function (message) {
    var messages = $filter('orderBy')($filter('filter')($scope.messages, { photo: '' }), 'date');
    $scope.activeSlide = messages.indexOf(message);
    $scope.allImages = messages.map(function (message) {
      return message.photo;
    });

    openModal('views/app/fullscreenImages.html');
  };

  $scope.closeModal = function () {
    $scope.modal.remove();
  };

  $scope.onMessageHold = function (e, itemIndex, message) {
    console.log('onMessageHold');
    console.log('message: ' + JSON.stringify(message, null, 2));
    $ionicActionSheet.show({
      buttons: [{
        text: 'Copy Text'
      }/*, {
          text: 'Delete Message'
        }*/],
      buttonClicked: function (index) {
        switch (index) {
          case 0: // Copy Text
            $cordovaClipboard.copy(message.text).then(function() {
                // success
            }, function() {
                // error
            });
            break;
          case 1: // Delete
            // no server side secrets here :~)
            $scope.messages.splice(itemIndex, 1);
            $timeout(function () {
              viewScroll.resize();
            }, 0);

            break;
        }

        return true;
      }
    });
  };

  // this prob seems weird here but I have reasons for this in my app, secret!
  $scope.viewProfile = function (msg) {
    if (msg.userId === $scope.user._id) {
      // go to your profile
    } else {
      // go to other users profile
    }
  };

  $scope.$on('elastic:resize', function (event, element, oldHeight, newHeight) {
    if (!footerBar) return;

    var newFooterHeight = newHeight + 10;
    newFooterHeight = (newFooterHeight > 44) ? newFooterHeight : 44;

    footerBar.style.height = newFooterHeight + 'px';
    scroller.style.bottom = newFooterHeight + 'px';
  });

  $scope.goHome = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.postJobMain");
  };
  $scope.goBack = function(){
    $ionicHistory.goBack();
  };
  $scope.init = function() {
    $scope.post = $stateParams.post;
    $scope.opponent = $stateParams.opponent;
    $scope.title = "Q&A for "+ $scope.post.title;
      // mock acquiring data via $stateParams
      $scope.toUser = {
        _id: $scope.opponent.user_id,
        pic: 'img/person.png',
        username: $scope.opponent.name
      }
      $scope.user = {
        _id: $scope.me.user_id,
        pic: 'img/person.png',
        username: $scope.me.name
      };
      // this could be on $rootScope rather than in $stateParams
      if($scope.me.picture){
        $scope.user = {
          _id: $scope.me.user_id,
          pic: $scope.me.picture,
          username: $scope.me.name
        };
      }

      $scope.input = {
        message: localStorage['userMessage-' + $scope.toUser._id] || ''
      };
  }
})
.controller('ApplicantsCtrl', function($scope, $ionicHistory, $state, LoadingService, $http, AuthService, $ionicActionSheet, InterviewIconService, NotificationService, ApplyService, $cordovaDialogs) {
  $scope.postings = [];
  $scope.getApplicantsList = function(){
    /*$scope.postings = [
      {post_id:152, applicants:[{post_id:152, user_id:},{}], title:'Convenience Cashier Wanted @North York', postingdate:'2017-02-06 05:26:54', status:'8005', cvrequired:'Y', applicantcount:5, interviews:[{sequence:1, icon:'ion-ios-people', applicantcount:4}, {sequence:2, icon:'ion-ios-people', applicantcount:0},{sequence:3, icon:'ion-ios-people', applicantcount:0}]}
      ,{post_id:153, title:'Convenience Cashier Wanted @North York', postingdate:'2016-02-06 05:26:54', status:'8004', cvrequired:'Y', applicantcount:15, interviews:[{sequence:2, icon:'ion-ios-people', applicantcount:5}, {sequence:1, icon:'ion-ios-people', applicantcount:10}]}
    ];*/
    LoadingService.showLoading();
    var url='/mobile/get_my_applicants';
    $http({
      url: window.global.baseurl+url,
      method: "GET",
      params: {'my_key': window.global.my_key, 'api_key': window.global.api_key, 'user_id' : $scope.me.user_id},
    }).then(function (response) {
      LoadingService.hideLoading();
      console.log("responded -->" +JSON.stringify(response.data));
      if(response.data.status==true){
        var count;
        var post_id;
        var postings = [];
        var ii = 0;
        var j=0;
        for (var i = 0, len = response.data.postings.length; i < len; i++) {
          if(response.data.postings[i].post_id != post_id){
            post_id = response.data.postings[i].post_id;
            count = response.data.postings[i].interviewcount;
            postings[j] = {};
            postings[j].post_id = response.data.postings[i].post_id;
            postings[j].title = response.data.postings[i].title;
            if(response.data.postings[i].postingdate){
              postings[j].postingdate = response.data.postings[i].postingdate;
            }
            postings[j].applicants = response.data.postings[i].applicants;
            postings[j].status = response.data.postings[i].status;
            postings[j].interviewstage = response.data.postings[i].interviewstage;
            postings[j].interviewcount = response.data.postings[i].interviewcount;
            postings[j].cvrequired = response.data.postings[i].cvrequired;
            postings[j].hiringtype = response.data.postings[i].hiringtype;
            postings[j].applicantcount = response.data.postings[i].applicantcount;
            if(response.data.postings[i].applicationdeadline){
                postings[j].applicationdeadline = new Date(Number(response.data.postings[i].applicationdeadline));
            }
            postings[j].interviews = [];
            ii = 0;
          }
          if(count != 0){
            postings[j].interviews[ii]={};
            postings[j].interviews[ii].sequence = response.data.postings[i].sequence;
            postings[j].interviews[ii].interview_id = response.data.postings[i].interview_id;
            postings[j].interviews[ii].closing = response.data.postings[i].closing;
            postings[j].interviews[ii].name = response.data.postings[i].name;
            //postings[j].interviews[ii].decisionby = response.data.postings[i].decisionby;
            postings[j].interviews[ii].icon = response.data.postings[i].icon;
            postings[j].interviews[ii].applicantcount = response.data.postings[i].applicantcount2;
            ii++;
            count--;
          }
          if(count == 0){
            //ii = 0;
            j++;
          }
        }
        console.log("postings -->" +JSON.stringify(postings));
        //$scope.postings = postings;
        for (var i = 0; i < postings.length; i++) {
          var found = false;
          for (var j = 0; j < $scope.postings.length; j++) {
            if($scope.postings[j].post_id == postings[i].post_id){
              found = true;
              break;
            }
          }
          if(!found){
            $scope.postings.push(postings[i]);
          }
        }
      }else{
        $scope.postings = undefined;
        //alert("Error -->" +JSON.stringify(response.data.msg));
        if(response.data.msg=="Invalid mobile key used"){
          AuthService.getApiKey($scope.me.user_id).then(function (result) {
          });
        }
      }
      //$scope.$broadcast('scroll.refreshComplete');
      }, function(error){
          LoadingService.hideLoading();
          //there was an error fetching from the server
          alert(JSON.stringify(error));
          });

  };
  $scope.goHome = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.postJobMain");
  };
  $scope.goBack = function(){
    $ionicHistory.goBack();
  };
  $scope.gotoMessage = function() {
    $state.go('app.systemMessage');
  };
  $scope.goSetting = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.setting");
  };
  $scope.openResume = function(post, applicant){
    //alert("Not yet implemented! " + applicant.cvtype);
    $state.go("app.evalResume", {'post':post, 'applicant':applicant});
  };
  $scope.hireApplicant = function(post, applicant){
    $cordovaDialogs.confirm('Do you want to hire ' + applicant.name +'?', 'Confirm to Hire', ['Yes','No'])
    .then(function(buttonIndex) {
      if(buttonIndex==1){

        ApplyService.finalizeToJobOffer(post.post_id, applicant).then(function(response){
          console.log(JSON.stringify(response));
          {
            $state.go("app.postJobMain");
            //$state.go($state.current, {}, {reload: true});
          }
        }, function(error){

            //there was an error fetching from the server
            console.log(JSON.stringify(error));
            });

      }
    }, function(error) {
      alert("Error -> " + error);
    });

  }
  $scope.actionToApplicant = function(post, applicant){
    //alert("Not yet implemented! " + applicant.name);
    if(applicant.interviewstage > 0){
      var interviewtype = InterviewIconService.getType(post.interviews[applicant.interviewstage-1].icon);
    }
    var actions = [];
    if((post.status != '8004') && (applicant.userstatus == undefined || applicant.userstatus=='1102' || ( applicant.userstatus=='1106' &&  interviewtype!='5001'))){
      actions.push({text:'Evaluate'});
    }else if((post.status != '8004') && (applicant.userstatus=='1101') && (applicant.interviewstage > 0)){
      actions.push({text:'Schedule'});
    }else if((post.status != '8004') && ((applicant.userstatus=='1202')||(applicant.userstatus=='1203'))){
      actions.push({text:'Finalize'});
    }else if((post.status != '8004') && ((applicant.userstatus=='1201'))){
      actions.push({text:'Hire Now'});
    }else if(applicant.userstatus=='1104'){
      actions.push({text:'Review Contract'});
    }
    actions.push({text:'Recap'});
    actions.push({text:'Send Test Notification'});
    actions.push({text:'Q&A'});

    $scope.hideSheet = $ionicActionSheet.show({
      buttons: actions,
      titleText: 'Managing Applicant ' + applicant.name,
      cancelText: 'Cancel',
      buttonClicked: function(index) {
        $scope.hideSheet();
        if(actions[index].text === 'Evaluate'){
          if(applicant.interviewstage == 0){
            if(post.cvrequired == 'Y'){
              //Evaluate a resume
              $state.go("app.evalResume", {'post':post, 'applicant':applicant, 'nextinterview':post.interviews[applicant.interviewstage]});
            }else{
              //Schedule for 1st interview
              //applicant.interviewstage++
            }
          }else{
            //Evaluate nth interview
            //var interviewtype = InterviewIconService.getType(post.interviews[applicant.interviewstage-1].icon);
            if(interviewtype == '5001'){  //APP
              if(post.interviewcount > applicant.interviewstage){
                $state.go("app.evalInterview", {'post':post, 'applicant':applicant, 'interview':post.interviews[applicant.interviewstage-1], 'nextinterview':post.interviews[applicant.interviewstage]});
              }else{
                $state.go("app.evalInterview", {'post':post, 'applicant':applicant, 'interview':post.interviews[applicant.interviewstage-1], 'nextinterview':null});
              }

            } else if (interviewtype == '5002'){ //ARS

            } else if (interviewtype == '5003'){  //CALL
              if(post.interviewcount > applicant.interviewstage){
                $state.go("app.evalInterview", {'post':post, 'applicant':applicant, 'interview':post.interviews[applicant.interviewstage-1], 'nextinterview':post.interviews[applicant.interviewstage]});
              }else{
                $state.go("app.evalInterview", {'post':post, 'applicant':applicant, 'interview':post.interviews[applicant.interviewstage-1], 'nextinterview':null});
              }
            } else if (interviewtype == '5004'){  //CHAT

            } else if (interviewtype == '5005'){  //VIDEO

            } else if (interviewtype == '5006'){  //PERSON
              if(post.interviewcount > applicant.interviewstage){
                $state.go("app.evalInterview", {'post':post, 'applicant':applicant, 'interview':post.interviews[applicant.interviewstage-1], 'nextinterview':post.interviews[applicant.interviewstage]});
              }else{
                $state.go("app.evalInterview", {'post':post, 'applicant':applicant, 'interview':post.interviews[applicant.interviewstage-1], 'nextinterview':null});
              }
            }
          }
        }else if(actions[index].text === 'Schedule'){
          //Schedule for applicant.interviewstage interview
          //var type = InterviewIconService.getType(post.interviews[applicant.interviewstage-1].icon);
          if(interviewtype == '5001'){  //APP
            $state.go("app.scheduleApp", {'post':post, 'applicant':applicant, 'interview':post.interviews[applicant.interviewstage-1]});
          } else if (interviewtype == '5002'){ //ARS

          } else if (interviewtype == '5003'){  //CALL
            $state.go("app.scheduleInterview", {'post':post, 'applicant':applicant, 'interview':post.interviews[applicant.interviewstage-1]});
          } else if (interviewtype == '5004'){  //CHAT

          } else if (interviewtype == '5005'){  //VIDEO

          } else if (interviewtype == '5006'){  //PERSON
            $state.go("app.scheduleInterview", {'post':post, 'applicant':applicant, 'interview':post.interviews[applicant.interviewstage-1]});
          }
        }else if(actions[index].text === 'Recap'){
          //Recap page
          alert("Not yet implemented!");
        }else if(actions[index].text === 'Finalize'){
          //Recap page
          ApplyService.finalizeToJobOffer(post.post_id, applicant).then(function(response){
            console.log(JSON.stringify(response));
            {
              $state.go("app.postJobMain");
              //$state.go($state.current, {}, {reload: true});
            }
          }, function(error){

              //there was an error fetching from the server
              console.log(JSON.stringify(error));
              });

        }else if(actions[index].text === 'Q&A'){
          //Chat page
          $state.go("app.PostDetailMessage", {'post':post, 'opponent':applicant});
        }else if(actions[index].text === 'Hire Now'){
          $scope.hireApplicant(post, applicant);
        }else if(actions[index].text === 'Review Contract'){
          $state.go("app.postingContractSigReview", {'post':post, 'opponent':applicant});
        }else if(actions[index].text === 'Send Test Notification'){
          var body = 'Dear '+applicant.name + ', Your response required';
          var title = 'Test Notification for '+ post.title;
              var state = "app.postDetail";
              var paramTest =  {'post_id':post.post_id, 'applicant':applicant};

            NotificationService.sendTo(post.post_id, null, applicant.user_id, body, title, state, paramTest, 'send_test_notification').then(function (response) {
              console.log("responded -->" +JSON.stringify(response));

            }, function(error){
                console.log(JSON.stringify(error));
                });

        }
      }
    });
  };
  $scope.getStyle = function(status){
    if(status =='8004'){
      return "lightyellow"
    }else{
      return "lightcyan"
    }
  };

$scope.actionToPost = function(post){
  //alert("Not yet implemented! " + applicant.name);

  //var interviewtype = InterviewIconService.getType(post.interviews[post.interviewstage-1].icon);
  var actions = [];
  {
    actions.push({text:'Open Post'});
  }
  //if((post.status != '8005') && (post.status != '8004') && (post.interviewstage>0))
  if((post.status != '8005') && (post.status != '8004'))
  {
    actions.push({text:'WrapUp Evaluation'});
  }

  $scope.hideSheet = $ionicActionSheet.show({
    buttons: actions,
    titleText: 'Managing Post',
    cancelText: 'Cancel',
    buttonClicked: function(index) {
      $scope.hideSheet();
      if(actions[index].text == 'WrapUp Evaluation'){
        /*if(post.interviewstage == 0){
          $state.go("app.wrapUpResume", {'post':post});
        }else*/
        /*if(post.interviewcount == post.interviewstage){
          $state.go("app.finalizePost", {'post':post});
        }else*/
        {
          $state.go("app.moduleInterviewWrapUp", {'post':post, 'interviews':post.interviews, 'interview_sequence':post.interviewstage});
          /*var interviewtype = InterviewIconService.getType(post.interviews[post.interviewstage-1].icon);
          if(interviewtype == '5001'){  //APP

          } else if (interviewtype == '5002'){ //ARS

          } else if (interviewtype == '5003'){  //CALL

          } else if (interviewtype == '5004'){  //CHAT

          } else if (interviewtype == '5005'){  //VIDEO

          } else if (interviewtype == '5006'){  //PERSON

          }*/
        }
      }else if(actions[index].text === 'Open Post'){
        //var visposter = (post.user_id==$scope.me.user_id)?true:false;
        $state.go("app.postDetail", {'post_id':post.post_id, 'isposter' : true});
      }
    }
  });
};
  $scope.openPost = function(post){
    //var visposter = (post.user_id==$scope.me.user_id)?true:false;
    $state.go("app.postDetail", {'post_id':post.post_id, 'isposter' : true});
  };

  //$scope.getApplicantsList();
})
.controller('ShareAppCtrl', function($scope, $ionicHistory, $state, $cordovaSocialSharing) {
  $scope.goHome = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.postJobMain");
  };
  $scope.goBack = function(){
    $ionicHistory.goBack();
  };
  $scope.gotoMessage = function() {
    $state.go('app.systemMessage');
  };
  $scope.goSetting = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.setting");
  };
  $scope.whatsappShare=function(){
   window.plugins.socialsharing.shareViaWhatsApp('Gorilla - All about local jobs', null /* img */, "https://play.google.com/store/apps/details?id=com.prantikv.digitalsignaturemaker" /* url */, null, function(errormsg){alert("Error: Cannot Share")});
 }
  $scope.twitterShare=function(){
   window.plugins.socialsharing.shareViaTwitter('Gorilla - All about local jobs', null /* img */, 'https://play.google.com/store/apps/details?id=com.prantikv.digitalsignaturemaker', null, function(errormsg){alert("Error: Cannot Share")});
 }
  $scope.OtherShare=function(){
    window.plugins.socialsharing.share('Gorilla - All about local jobs', null, null, 'https://play.google.com/store/apps/details?id=com.prantikv.digitalsignaturemaker');
 }
 $scope.facebookShare=function(){
   var message = 'Gorilla - All about local jobs';
   var image = null;
   var link = null;
   $cordovaSocialSharing
     .shareViaFacebook(message, image, link)
     .then(function(result) {
       // Success!
     }, function(err) {
       // An error occurred. Show a message to the user
     });
}
$scope.smsShare=function(number){
  var message = 'Gorilla - All about local jobs';
  // access multiple numbers in a string like: '0612345678,0687654321'
  $cordovaSocialSharing
    .shareViaSMS(message, number)
    .then(function(result) {
      // Success!
    }, function(err) {
      // An error occurred. Show a message to the user
    });
  }

})
.controller('RecentlyCtrl', function($scope, $ionicPopover) {

  $ionicPopover.fromTemplateUrl('views/app/distance.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });

  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };

  $scope.closePopover = function() {
    $scope.popover.hide();
  };

  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });

  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });

  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });
})
.controller('ApplyCtrl', function($scope, $ionicPopover) {
  $ionicPopover.fromTemplateUrl('views/app/distance.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });

  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };

  $scope.closePopover = function() {
    $scope.popover.hide();
  };

  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });

  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });

  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });
})
.controller('BookmarkCtrl', function($scope, $ionicPopover) {
  $ionicPopover.fromTemplateUrl('views/app/distance.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });

  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };

  $scope.closePopover = function() {
    $scope.popover.hide();
  };

  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });

  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });

  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });
})
.controller('MatchedCtrl', function($scope, $ionicPopover) {
  $ionicPopover.fromTemplateUrl('views/app/distance.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });

  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };

  $scope.closePopover = function() {
    $scope.popover.hide();
  };

  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });

  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });

  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });
})

.controller('EmployInfoCtrl', function ($scope) {

})
.controller('LiveChatCtrl', function($scope, $timeout, $ionicScrollDelegate) {

  $scope.hideTime = true;

  var alternate,
  isIOS = ionic.Platform.isWebView() && ionic.Platform.isIOS();

  $scope.sendMessage = function() {
    alternate = !alternate;

    var d = new Date();
    d = d.toLocaleTimeString().replace(/:\d+ /, ' ');

    $scope.messages.push({
      userId: alternate ? '12345' : '54321',
      text: $scope.data.message,
      time: d
    });

    delete $scope.data.message;
    $ionicScrollDelegate.scrollBottom(true);

  };


  $scope.inputUp = function() {
    if (isIOS) $scope.data.keyboardHeight = 216;
    $timeout(function() {
      $ionicScrollDelegate.scrollBottom(true);
    }, 300);
  };

  $scope.inputDown = function() {
    if (isIOS) $scope.data.keyboardHeight = 0;
    $ionicScrollDelegate.resize();
  };

  $scope.closeKeyboard = function() {
    // cordova.plugins.Keyboard.close();
  };


  $scope.data = {};
  $scope.myId = '12345';
  $scope.messages = [];

})
.controller('AppInterviewCtrl', function($scope) {

})
.controller('ArsInterviewCtrl', function($scope) {

})
.controller('PhoneInterviewCtrl', function($scope) {

})
.controller('PersonInterviewCtrl', function($scope) {

})
.controller('LivechatInterviewCtrl', function($scope) {

})
.controller('VideoInterviewCtrl', function($scope) {

})
.controller('PostingCtrl', function($scope) {

})
.controller('SideMenuCtrl', function($scope, $ionicSideMenuDelegate, $state, $cordovaDialogs, $ionicHistory, $location, $timeout, AuthService, LoadingService) {
  $scope.islogged = false;
  $scope.isguest = false;
  $scope.file ={};
  {
    $scope.me = AuthService.getSession();
    $scope.islogged = $scope.me.islogged;
    $scope.isguest = $scope.me.isguest;
  }
  //$timeout(checkSession, 1000);

  function checkSession(){
    AuthService.getSyncCompleted().then(function (response) {
      if(response){
        $scope.islogged = false;
        $scope.isguest = false;
        $scope.file ={};
        {
          $scope.me = AuthService.getSession();
          $scope.islogged = $scope.me.islogged;
          $scope.isguest = $scope.me.isguest;
        }
      }
    });

  }
  //alert("SideMenuCtrl baseurl="+$scope.baseurl + " islogged=" +$scope.islogged +" isguest=" +$scope.isguest +" user->"+JSON.parse(user).sns  );

  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
  $scope.closeAccount = function(group) {
    alert("Not yet implemented");
  };
  $scope.settingImg = function() {
    $state.go('app.setting');
    $ionicSideMenuDelegate.toggleLeft();
  };
  $scope.profileImg = function() {
    $state.go('app.profile');
    $ionicSideMenuDelegate.toggleLeft();
  };
  $scope.snsLog = function() {
    snsloginconnecting = true;
    $state.go('snslogin');
    $ionicSideMenuDelegate.toggleLeft();
  };

  $scope.gotoMessage = function() {
    $state.go('app.systemMessage');
    $ionicSideMenuDelegate.toggleLeft();
  };
  $scope.gotoResume = function() {
    $state.go('app.manageResume');
    $ionicSideMenuDelegate.toggleLeft();
  };
  $scope.gotoSchedule = function() {
    $state.go('app.mySchedule');
    $ionicSideMenuDelegate.toggleLeft();
  };
  $scope.gotoShareApp = function() {
    $state.go('app.shareApp');
    $ionicSideMenuDelegate.toggleLeft();
  };
  $scope.aboutGorilla = function() {
    $state.go('app.aboutGorilla');
    $ionicSideMenuDelegate.toggleLeft();
  }
  $scope.rateApp = function(){
    AppRate.preferences = {
  openStoreInApp: true,
  displayAppName: 'Gorilla - All about local jobs',
  usesUntilPrompt: 5,
  promptAgainForEachNewVersion: false,
  useLanguage: 'en',
  storeAppURL: {
    ios: '<my_app_id>',
    android: 'market://details?id=<package_name>',
    windows: 'ms-windows-store://pdp/?ProductId=<the apps Store ID>',
    blackberry: 'appworld://content/[App Id]/',
    windows8: 'ms-windows-store:Review?name=<the Package Family Name of the application>'
  },
  customLocale: {
    title: "Rate Gorilla - All about local jobs",
    message: "Thanks for your support!",
    cancelButtonLabel: "No, Thanks",
    laterButtonLabel: "Remind Me Later",
    rateButtonLabel: "Rate It Now"
  }
};

AppRate.promptForRating();
  }
$scope.logout = function(){
  $cordovaDialogs.confirm('Do you want to logout?', 'Confirm to Logout', ['Yes','No'])
  .then(function(buttonIndex) {
    // no button = 0, 'OK' = 1, 'Cancel' = 2
    if(buttonIndex==1){
      AuthService.destroySession();
      $ionicHistory.clearCache();
      $ionicHistory.nextViewOptions({ disableBack: true });
      $location.path('/');

      //$state.go("login");
    }else{
      return false;
    }

  }, function(error) {
    alert("Error -> " + error);
  });
};
})
.controller('SettingCtrl', function($scope, $ionicHistory) {
  $scope.$on('$ionicView.enter', function() {
      //if($stateParams.filter=='change')
      {
        $ionicHistory.clearCache();

      }
  });
})
.controller('SystemMessageCtrl', function($scope, $state, $ionicHistory, SystemMessageService, $ionicListDelegate, $cordovaDialogs, LoadingService, $http) {
  $scope.getMessagesLatest = function(){
    SystemMessageService.getSystemMessagesLatest().then(function (data) {
      if(Array.isArray(data.messages)){
        for(var i=0; i<data.messages.length; i++){
          var jsonmsg = JSON.parse(data.messages[i].message || '{}');
          $scope.messages.push({
              id: data.messages[i].id,
              created: new Date(Number(data.messages[i].created)),
              status: data.messages[i].status,
              token: data.messages[i].token,
              title: jsonmsg.title,
              message: jsonmsg.message,
              state: jsonmsg.state,
              param: jsonmsg.param
          });
        }
      }
    });
  }

  $scope.getMessages = function(){
    SystemMessageService.getSystemMessages().then(function (data) {
      if(Array.isArray(data.messages)){
        for(var i=0; i<data.messages.length; i++){
          var jsonmsg = JSON.parse(data.messages[i].message || '{}');
          $scope.messages.push({
              id: data.messages[i].id,
              created: new Date(Number(data.messages[i].created)),
              status: data.messages[i].status,
              token: data.messages[i].token,
              title: jsonmsg.title,
              message: jsonmsg.message,
              state: jsonmsg.state,
              param: jsonmsg.param
          });
        }
      }
    });
  }
  $scope.goHome = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.postJobMain");
  };
  $scope.goBack = function(){
    $ionicHistory.goBack();
  };
  $scope.gotoMessage = function() {
    $state.go('app.systemMessage');
  };
  $scope.goSetting = function(){
    $ionicHistory.nextViewOptions({ disableBack: true });
    $state.go("app.setting");
  };
  $scope.openMessage = function(message){
    if(message.token == undefined){
      alert('You already took an action for this message!');
      $ionicListDelegate.closeOptionButtons();
      return;
    }
    $cordovaDialogs.confirm('Do you want to respond to message '+message.title +'?', 'Respond to a Message', ['Yes','No'])
    .then(function(buttonIndex) {
      // no button = 0, 'OK' = 1, 'Cancel' = 2
      if(buttonIndex==1){
        {
          $state.go(message.state, message.param);
        }
      }
    }, function(error) {
      alert("Error -> " + error);
    });
    $ionicListDelegate.closeOptionButtons();
  }
  $scope.deleteMessage = function(message, index){
    $cordovaDialogs.confirm('Are you sure?', 'Confirm to Delete', ['Yes','No'])
    .then(function(buttonIndex) {
      if(buttonIndex==1){
        LoadingService.showLoading();
        var url='/mobile/delete_systemlog';

        var data = {
          my_key: window.global.my_key,
          api_key: window.global.api_key,
          user_id: $scope.me.user_id,
          log_id: message.id
        };
        $http({
          method: 'POST',
          url: window.global.baseurl+url,
          data: data,
          dataType: 'json',
          headers:
          {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function mySucces(response) {
          LoadingService.hideLoading();
          alert("responded -->" +(response.data.status));
          if(response.data.status==true){
            $scope.messages.splice(index, 1);
          }else{
            alert("Error -->" +JSON.stringify(response.data.msg));
            //alert("Error -->" +JSON.stringify(response.data.msg));
            if(response.data.msg=="Invalid mobile key used"){
              AuthService.getApiKey($scope.me.user_id).then(function (result) {
              });
            }
          }
        });
      }else{
        return false;
      }
    }, function(error){
        LoadingService.hideLoading();
        //there was an error fetching from the server
        alert(JSON.stringify(error));
        });
    $ionicListDelegate.closeOptionButtons();
  }
  $scope.init = function(){
    $scope.messages = [];
    $scope.getMessages();
  }
})
.controller('PostingDataCtrl5', function($scope, $http, $state, $ionicHistory, PostingService, LoadingService, AuthService) {
  $scope.init = function() {
    $scope.posting = PostingService.getData();

    $scope.posting.stepfive = {};
    if($scope.posting.stepthree.filetype=='3003'){
      $scope.pdfUrl = $scope.posting.stepthree.pdfUrl;
    }
    $scope.chartOn = ($scope.posting.steptwo.hiringtype!='6001' && $scope.posting.stepfour.interviews.length>0);
    $scope.interviewTLData = {};
    $scope.interviewTLData.dataTable = new google.visualization.DataTable();
    $scope.interviewTLData.dataTable.addColumn({ type: 'string', id: 'seq' })
    $scope.interviewTLData.dataTable.addColumn({ type: 'date', id: 'Start' })
    $scope.interviewTLData.dataTable.addColumn({ type: 'date', id: 'End' })
    for (var i = 0; i < $scope.posting.stepfour.interviews.length; i++) {
      if (i == 0){
        //var startdate = new Date();
        var startdate = new Date(($scope.posting.steptwo.applicationdeadline));
        var enddate = new Date(($scope.posting.stepfour.interviews[i].decisionby));
        if(enddate < startdate){
          startdate = enddate;
        }
        $scope.interviewTLData.dataTable.addRow( [$scope.posting.stepfour.interviews[i].sequence.toString(), startdate, enddate]);
      }else{
        $scope.interviewTLData.dataTable.addRow( [$scope.posting.stepfour.interviews[i].sequence.toString(), new Date(($scope.posting.stepfour.interviews[i-1].decisionby)), new Date(($scope.posting.stepfour.interviews[i].decisionby))]);
      }
    }
  }
      $scope.goHome = function(){
         $ionicHistory.nextViewOptions({ disableBack: true });
         $state.go("app.postJobMain");
      };
      $scope.goBack = function(){
        $ionicHistory.goBack();
      };
      $scope.getPrevCache = function(){
         $ionicHistory.nextViewOptions({ disableBack: true });
         $state.go("app.postJob");
      };
  $scope.onError = function(error) {
    // handle the error
    console.log(error);
  }
  $scope.loadPdf = function(){

  }
  $scope.openMapLoc = function(latitude, longitude) {
    alert("not yet implemented!!");
  };

  $scope.postJob = function() {
    {
      //alert("call post");
      LoadingService.showLoading();
      var data = {};
      var url='/mobile/save_posting_post';
      //$scope.posting.stepfour.post_id = $scope.posting.stepfour.post_id;
      $scope.posting.stepfive.status = '8002';  //opened
      if($scope.posting.steptwo.hiringtype == "6001"){  //Always Hiring
        $scope.posting.stepfive.status = '8005';  //Always
      }
      //alert("post_id -->" +$scope.posting.stepone.post_id);
      {
        data = {
          my_key: window.global.my_key,
          api_key: window.global.api_key,
          user_id : $scope.me.user_id,
          post_id : $scope.posting.stepone.post_id,
          step: '5',
          inputdata: $scope.posting.stepfive
        };
      }

      $http({
        method: 'POST',
        url: window.global.baseurl+url,
        data: data,
        dataType: 'json',
        headers:
        {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(function (response) {
        LoadingService.hideLoading();
        alert("responded -->" +JSON.stringify(response.data));
        if(response.data.status==true){
          {
            //$scope.posting.stepfive.jobdescription_id = response.data.jobdescription_id;
            //alert("jobdescription_id -->" +$scope.posting.stepfive.jobdescription_id);
            //PostingService.setData('5', $scope.posting.stepfive);
            PostingService.clearData();
            //$scope.posting = PostingService.getData();
            $ionicHistory.clearCache();
            $ionicHistory.nextViewOptions({ disableBack: true });
            $state.go("app.postJob", {}, {reload: true});
          }

        }else{
          alert("Error -->" +JSON.stringify(response.data.msg));
          //alert("Error -->" +JSON.stringify(response.data.msg));
          if(response.data.msg=="Invalid mobile key used"){
            AuthService.getApiKey($scope.me.user_id).then(function (result) {
            });
          }
        }
      }, function(error){
          LoadingService.hideLoading();
          //there was an error fetching from the server
          alert(JSON.stringify(error));
          });
    }

  };
})
.controller('PostingDataCtrl4', function($scope, $http, $timeout, $state, $ionicSlideBoxDelegate, $ionicActionSheet, $cordovaCamera, PostingService, $ionicModal, $cordovaDialogs, $ionicHistory, $ionicListDelegate, LoadingService, AuthService, InterviewIconService) {
  var pdc4 = this;

  pdc4.init  = function() {
    $scope.shouldShowReorder = false;
    $scope.listCanSwipe = true;
    $scope.isperson = false;
    $scope.isphone = false;
    $scope.isupdatable = false;
    $scope.new_sequence= 1001;
    $scope.new_no= 1001;

    $scope.posting = PostingService.getData();
    $scope.getInterview();

  }
    $scope.goHome = function(){
       $ionicHistory.nextViewOptions({ disableBack: true });
       $state.go("app.postJobMain");
    };
    $scope.goBack = function(){
      $ionicHistory.goBack();
    };
    $scope.getPrevCache = function(){
       $ionicHistory.nextViewOptions({ disableBack: true });
       $state.go("app.postJob");
    };
  $scope.getInterview = function (){
    LoadingService.showLoading();
    var url='/mobile/get_latest_interview';
    $http({
      url: window.global.baseurl+url,
      method: "GET",
      params: {'my_key': window.global.my_key, 'api_key': window.global.api_key, 'user_id' : window.global.user_session},
    }).then(function (response) {
      //console.log("responded -->" +JSON.stringify(response.data));
      LoadingService.hideLoading();
      if(response.data.status==true){

      }else{
        //alert("Error -->" +JSON.stringify(response.data.msg));
        if(response.data.msg=="Invalid mobile key used"){
          AuthService.getApiKey($scope.me.user_id).then(function (result) {
          });
        }
      }
        $scope.posting.stepfour = response.data.data;

        /*
        $scope.interviewTLData = {};
        $scope.interviewTLData.dataTable = new google.visualization.DataTable();
        $scope.interviewTLData.dataTable.addColumn({ type: 'string', id: 'seq' });
        $scope.interviewTLData.dataTable.addColumn({ type: 'date', id: 'Start' });
        $scope.interviewTLData.dataTable.addColumn({ type: 'date', id: 'End' });
        */
        if($scope.posting.stepfour.interviews == undefined){
          $scope.posting.stepfour.interviews = [];
        }
        if($scope.posting.stepfour.interview_location == undefined){
          $scope.posting.stepfour.interview_location = [];
        }
        if($scope.posting.stepfour.interview_question == undefined){
          $scope.posting.stepfour.interview_question = [];
        }
        if($scope.posting.steptwo.hiringtype == "6001"){  //Always Hiring
          for (var i = 0, len = $scope.posting.stepfour.interviews.length; i < len; i++) {
            {
              $scope.posting.stepfour.interviews[i].closing = undefined;
            }
            {
              $scope.posting.stepfour.interviews[i].decisionby = undefined;
            }
          }
        }else{
          for (var i = 0, len = $scope.posting.stepfour.interviews.length; i < len; i++) {
            if($scope.posting.stepfour.interviews[i].closing){
              $scope.posting.stepfour.interviews[i].closing = new Date(Number($scope.posting.stepfour.interviews[i].closing));
            }
            if($scope.posting.stepfour.interviews[i].decisionby){
              $scope.posting.stepfour.interviews[i].decisionby = new Date(Number($scope.posting.stepfour.interviews[i].decisionby));
            }
            /*
              if (i == 0){
                //var startdate = new Date();
                var startdate = new Date($scope.posting.steptwo.applicationdeadline);
                var enddate = new Date(Number($scope.posting.stepfour.interviews[i].decisionby));
                if(enddate < startdate){
                  startdate = enddate;
                }
                $scope.interviewTLData.dataTable.addRow( [$scope.posting.stepfour.interviews[i].sequence.toString(), startdate, enddate]);
              }else{
                $scope.interviewTLData.dataTable.addRow( [$scope.posting.stepfour.interviews[i].sequence.toString(), new Date(Number($scope.posting.stepfour.interviews[i-1].decisionby)), new Date(Number($scope.posting.stepfour.interviews[i].decisionby))]);
              }
              */
          }
        }


        $scope.posting.stepfour.ismodified = true;
        $scope.posting.stepfour.fulladdress = $scope.posting.stepone.fulladdress;
        $scope.posting.stepfour.unit = $scope.posting.stepone.unit;
        $scope.posting.stepfour.postal = $scope.posting.stepone.postal;
        $scope.posting.stepfour.latitude = $scope.posting.stepone.latitude;
        $scope.posting.stepfour.longitude = $scope.posting.stepone.longitude;
        $scope.posting.stepfour.citytag = $scope.posting.stepone.citytag;

        $scope.posting.stepfour.questions = [];
        $scope.posting.stepfour.decisionwithinoptions=[{description:'Sameday', value:'0'}, {description:'1 Day', value:'1'}, {description:'3 Days', value:'3'}, {description:'7 Days', value:'7'}];
        //$scope.chartOn = ($scope.posting.steptwo.hiringtype!='6001' && $scope.posting.stepfour.interviews.length>0);

      }, function(error){
          LoadingService.hideLoading();
          //there was an error fetching from the server
          alert(JSON.stringify(error));
          });
  }
//);
$ionicModal.fromTemplateUrl('views/app/modalInterview.html', {
      scope: $scope,
      animation: 'slide-in-up',
  }).then(function (modal) {
      pdc4.modalinterview = modal;
  });

$scope.$on('$destroy', function () {
    pdc4.modalinterview.remove();
    /*pdc4.modalpdf.remove();
    pdc4.modaltxt.remove();*/
});
pdc4.disableTap2 = function(){
  var container = document.getElementsByClassName('pac-container');
  // disable ionic data tab
  angular.element(container).attr('data-tap-disabled', 'true');
  // leave input field if google-address-entry is selected
  angular.element(container).on("click", function(){
      document.getElementById('address').blur();
  });
};
pdc4.disableTap = function(event) {

    var input = event.target;

    // Get the predictions element
    var container = document.getElementsByClassName('pac-container');
    container = angular.element(container);

    // Apply css to ensure the container overlays the other elements, and
    // events occur on the element not behind it
    container.css('z-index', '5000');
    container.css('pointer-events', 'auto');

    // Disable ionic data tap
    container.attr('data-tap-disabled', 'true');

    // Leave the input field if a prediction is chosen
    container.on('click', function(){
        input.blur();
    });
};
/*
function updateChartData(){
  var interviewlength = 0;
  if($scope.isnew){
    interviewlength = $scope.posting.stepfour.interviews.length-1;
  }else{
    interviewlength = $scope.posting.stepfour.interviews.length;
  }
  if( interviewlength > 0){
    $scope.interviewTLData.dataTable.removeRows(0, interviewlength);
  }

  for (var i = 0; i < $scope.posting.stepfour.interviews.length; i++) {
    if (i == 0){
      //var startdate = new Date();
      var startdate = new Date($scope.posting.steptwo.applicationdeadline);
      var enddate = new Date(($scope.posting.stepfour.interviews[i].decisionby));
      if(enddate < startdate){
        startdate = enddate;
      }
      $scope.interviewTLData.dataTable.addRow( [$scope.posting.stepfour.interviews[i].sequence.toString(), startdate, enddate]);
    }else{
      $scope.interviewTLData.dataTable.addRow( [$scope.posting.stepfour.interviews[i].sequence.toString(), new Date(($scope.posting.stepfour.interviews[i-1].decisionby)), new Date(($scope.posting.stepfour.interviews[i].decisionby))]);
    }
  }
}*/
pdc4.acceptInterview = function(){
  pdc4.updateDetails();

  pdc4.modalinterview.hide();
  $state.go($state.current, {}, {reload: true});
};
function clearLocalVariable(){
  //clean model
  $scope.isperson = false;
  $scope.isphone = false;
  $scope.isapp = false;
  $scope.isnew = false;
  $scope.isupdatable = false;
  $scope.interview = undefined;
}
pdc4.dismissInterview = function(){
  clearLocalVariable();
  pdc4.modalinterview.hide();
};
pdc4.clearCache = function() {
  //$scope.posting.stepfour = {};
  $scope.posting.stepfour.ismodified = true;
  $scope.posting.stepfour.interviews = [];
  $scope.posting.stepfour.fulladdress = $scope.posting.stepone.fulladdress;
  $scope.posting.stepfour.unit = $scope.posting.stepone.unit;
  $scope.posting.stepfour.citytag = $scope.posting.stepone.citytag;
  $scope.posting.stepfour.latitude = $scope.posting.stepone.latitude;
  $scope.posting.stepfour.longitude = $scope.posting.stepone.longitude;
  $scope.posting.stepfour.postal = $scope.posting.stepone.postal;
  $scope.posting.stepfour.questions = [];
  $scope.posting.stepfour.cvrequired = undefined;
  $scope.posting.stepfour.decisionwithinoptions=[{description:'Sameday', value:'0'}, {description:'1 Day', value:'1'}, {description:'3 Days', value:'3'}, {description:'7 Days', value:'7'}];
  $scope.posting.stepfour.interview_location = [];
  $scope.posting.stepfour.interview_question = [];
  //$state.go($state.current, {}, {reload: true});
};
pdc4.reorderItem = function(interview, fromIndex, toIndex){
    $scope.posting.stepfour.interviews.splice(fromIndex, 1);
    $scope.posting.stepfour.interviews.splice(toIndex, 0, interview);

  alert("$scope.posting.stepfour.interviews="+JSON.stringify($scope.posting.stepfour.interviews));
}
pdc4.addInterview = function(){
  $scope.title = "Select the interview type";
  $scope.isnew = true;
  pdc4.modalinterview.show();
};
pdc4.postingChanged = function() {
  $scope.posting.stepfour.ismodified = true;
};
pdc4.enableInputWindow = function(type) {
  $scope.isapp=false;
  $scope.isperson=false;
  $scope.isphone=false;
  if(type == '5001'){  //APP
    $scope.isapp=true;
    $scope.posting.stepfour.questions = [];
  } else if (type == '5002'){ //ARS

  } else if (type == '5003'){  //CALL
    $scope.isphone=true;
  } else if (type == '5004'){  //CHAT

  } else if (type == '5005'){  //VIDEO

  } else if (type == '5006'){  //PERSON
    $scope.isperson=true;
    $scope.posting.stepfour.fulladdress = $scope.posting.stepone.fulladdress;
    $scope.posting.stepfour.unit = $scope.posting.stepone.unit;
    $scope.posting.stepfour.citytag = $scope.posting.stepone.citytag;
    $scope.posting.stepfour.latitude = $scope.posting.stepone.latitude;
    $scope.posting.stepfour.longitude = $scope.posting.stepone.longitude;
    $scope.posting.stepfour.postal = $scope.posting.stepone.postal;
  }
  $scope.isupdatable=true;
};
pdc4.addAppQuestion = function(interview) {
  $scope.posting.stepfour.questions.push(
    {no:$scope.new_no++, question:undefined}
  );
}
/*function getInterviewIcon(type){
  if(type == '5001'){  //APP
    return 'ion-android-phone-portrait';
  } else if (type == '5002'){ //ARS
    return 'ion-ios-recording';
  } else if (type == '5003'){  //CALL
    return 'ion-ios-telephone';
  } else if (type == '5004'){  //CHAT
    return 'ion-ios-chatboxes';
  } else if (type == '5005'){  //VIDEO
    return 'ion-videocamera';
  } else if (type == '5006'){  //PERSON
    return 'ion-ios-people';
  }
}*/
function validiateInterview(){
  for (var i = 0, len = $scope.posting.stepfour.interviews.length; i < len; i++) {
    var type = $scope.posting.stepfour.interviews[i].type;
    var sequence = $scope.posting.stepfour.interviews[i].sequence;
    if(type == '5001'){  //APP
      var found = false;
      for (var j = 0, len1 = $scope.posting.stepfour.interview_question.length; j < len1; j++) {
        if($scope.posting.stepfour.interview_question[j].sequence == sequence){
          found = true;
          break;
        }
      }
      if(!found){
        return false;
      }
    } else if (type == '5002'){ //ARS

    } else if (type == '5003'){  //CALL

    } else if (type == '5004'){  //CHAT

    } else if (type == '5005'){  //VIDEO

    } else if (type == '5006'){  //PERSON

      var found = false;
      for (var j = 0, len1 = $scope.posting.stepfour.interview_location.length; j < len1; j++) {
        if($scope.posting.stepfour.interview_location[j].sequence == sequence){
          found = true;
          break;
        }
      }
      if(!found){
        return false;
      }
    }
    if($scope.posting.steptwo.hiringtype != "6001"){  //Now Hiring
      if (($scope.posting.stepfour.interviews[i].closing == undefined) ||($scope.posting.stepfour.interviews[i].decisionby == undefined)){
        return false;
      }
    }
  }
  return true;
}
function checkRequiredField(){
  //To be implemented
  return true;
}
pdc4.openInterview = function(interview){
  if(interview.type == '5001'){  //APP
    $scope.isapp = true;
    //update model
    for (var i = 0, len = $scope.posting.stepfour.interviews.length; i < len; i++) {
      if($scope.posting.stepfour.interviews[i].sequence == interview.sequence){
        if($scope.posting.steptwo.hiringtype != "6001"){  //Now Hiring
          $scope.posting.stepfour.closing = $scope.posting.stepfour.interviews[i].closing;
          var decisionwithin = ($scope.posting.stepfour.interviews[i].decisionby - $scope.posting.stepfour.interviews[i].closing)/(24*60*60*1000);;
          $scope.posting.stepfour.decisionwithin = decisionwithin.toString();
        }
        for (var j = 0, len1 = $scope.posting.stepfour.interview_question.length; j < len1; j++) {
          if($scope.posting.stepfour.interview_question[j].sequence == interview.sequence){
            $scope.posting.stepfour.questions = $scope.posting.stepfour.interview_question[j].questions;
            if($scope.posting.stepfour.questions == undefined){
              $scope.posting.stepfour.questions = [];
            }
            //[{sequence:, questions:[{'1':, '2':}]}]
            break;
          }
        }
      }
    }
  } else if (interview.type == '5002'){ //ARS

  } else if (interview.type == '5003'){  //CALL
    $scope.isphone=true;
    //update model
    for (var i = 0, len = $scope.posting.stepfour.interviews.length; i < len; i++) {
      if($scope.posting.stepfour.interviews[i].sequence == interview.sequence){
        if($scope.posting.steptwo.hiringtype != "6001"){  //Now Hiring
          $scope.posting.stepfour.closing = $scope.posting.stepfour.interviews[i].closing;
          var decisionwithin = ($scope.posting.stepfour.interviews[i].decisionby - $scope.posting.stepfour.interviews[i].closing)/(24*60*60*1000);;
          $scope.posting.stepfour.decisionwithin = decisionwithin.toString();
        }
      }
    }
  } else if (interview.type == '5004'){  //CHAT

  } else if (interview.type == '5005'){  //VIDEO

  } else if (interview.type == '5006'){  //PERSON
    $scope.isperson = true;
    //update model
    for (var i = 0, len = $scope.posting.stepfour.interviews.length; i < len; i++) {
      if($scope.posting.stepfour.interviews[i].sequence == interview.sequence){
        if($scope.posting.steptwo.hiringtype != "6001"){  //Now Hiring
          $scope.posting.stepfour.closing = $scope.posting.stepfour.interviews[i].closing;
          var decisionwithin = ($scope.posting.stepfour.interviews[i].decisionby - $scope.posting.stepfour.interviews[i].closing)/(24*60*60*1000);;
          $scope.posting.stepfour.decisionwithin = decisionwithin.toString();
        }
        for (var j = 0, len1 = $scope.posting.stepfour.interview_location.length; j < len1; j++) {
          if($scope.posting.stepfour.interview_location[j].sequence == interview.sequence){
            $scope.posting.stepfour.fulladdress = $scope.posting.stepfour.interview_location[j].fulladdress;
            $scope.posting.stepfour.unit = $scope.posting.stepfour.interview_location[j].unit;
            $scope.posting.stepfour.citytag = $scope.posting.stepfour.interview_location[j].citytag;
            $scope.posting.stepfour.postal = $scope.posting.stepfour.interview_location[j].postal;
            $scope.posting.stepfour.latitude = $scope.posting.stepfour.interview_location[j].latitude;
            $scope.posting.stepfour.longitude = $scope.posting.stepfour.interview_location[j].longitude;
            break;
          }
        }
      }
    }
  }

  $scope.title = "Modify Interview "+interview.name;
  $scope.isnew = false;
  $scope.isupdatable = true;
  $scope.interview = interview;
  pdc4.modalinterview.show();
  $ionicListDelegate.closeOptionButtons();
}
pdc4.editInterview = function(interview){
  $cordovaDialogs.prompt('Enter new name', 'Changing file name', ['OK','Cancel'], interview.name)
  .then(function(result) {
    var input = result.input1;
    // no button = 0, 'OK' = 1, 'Cancel' = 2
    var btnIndex = result.buttonIndex;

    if(btnIndex==1){

      if(interview.name == input || input.length ==0){
        alert('Error --> Not valid name');
        return;
      }
      interview.name = input;
    }else{
      return false;
    }
  }, function(error) {
    alert("Error -> " + error);
  });
  $ionicListDelegate.closeOptionButtons();
}
pdc4.deleteInterview = function(interview, index){
  $cordovaDialogs.confirm('Are you sure?', 'Confirm to Delete', ['Yes','No'])
  .then(function(buttonIndex) {
    if(buttonIndex==1){

      /*if($scope.posting.stepfour.interviews.length > 0){
        $scope.interviewTLData.dataTable.removeRows(0, $scope.posting.stepfour.interviews.length);
      }*/
      $scope.posting.stepfour.interviews.splice(index, 1);

      //delete from other arrays
      if(interview.type == '5001'){  //APP
        //interview_question
        for (var j = 0, len1 = $scope.posting.stepfour.interview_question.length; j < len1; j++) {
          if($scope.posting.stepfour.interview_question[j].sequence == interview.sequence){
            $scope.posting.stepfour.interview_question.splice(j, 1);
            break;
          }
        }
      } else if (interview.type == '5002'){ //ARS

      } else if (interview.type == '5003'){  //CALL

      } else if (interview.type == '5004'){  //CHAT

      } else if (interview.type == '5005'){  //VIDEO

      } else if (interview.type == '5006'){  //PERSON
        //interview_location
        for (var j = 0, len1 = $scope.posting.stepfour.interview_location.length; j < len1; j++) {
          if($scope.posting.stepfour.interview_location[j].sequence == interview.sequence){
            $scope.posting.stepfour.interview_location.splice(j, 1);
            break;
          }
        }
      }

      /*
      for (var i = 0; i < $scope.posting.stepfour.interviews.length; i++) {
        if (i == 0){
          //var startdate = new Date();
          var startdate = new Date($scope.posting.steptwo.applicationdeadline);
          var enddate = new Date(($scope.posting.stepfour.interviews[i].decisionby));
          if(enddate < startdate){
            startdate = enddate;
          }
          $scope.interviewTLData.dataTable.addRow( [$scope.posting.stepfour.interviews[i].sequence.toString(), startdate, enddate]);
        }else{
          $scope.interviewTLData.dataTable.addRow( [$scope.posting.stepfour.interviews[i].sequence.toString(), new Date(($scope.posting.stepfour.interviews[i-1].decisionby)), new Date(($scope.posting.stepfour.interviews[i].decisionby))]);
        }
      }*/

      //$state.go($state.current, {}, {reload: true});
    }else{
      return false;
    }
  }, function(error) {
    alert("Error -> " + error);
  });
}
pdc4.updateDetails = function() {
  if($scope.isnew){
    {
      if($scope.isperson){
        pdc4.addInterviewDetail('5006');
      }else if($scope.isphone){
        pdc4.addInterviewDetail('5003');
      }else if($scope.isapp){
        pdc4.addInterviewDetail('5001');
      }
    }
  }else{
    pdc4.updateInterviewDetail($scope.interview);
    //updateChartData();
    clearLocalVariable();
  }
}

pdc4.updateInterviewDetail = function(interview) {
  if(checkRequiredField()==false)
  {
    alert("Error : Required fields are not filled")
    return;
  }
  if($scope.posting.steptwo.hiringtype != "6001"){  //Now Hiring
    $scope.posting.stepfour.ismodified = true;
    var closing = undefined;
    var decisionby = undefined;
    if($scope.posting.stepfour.closing){
      closing=$scope.posting.stepfour.closing;
    }
    if($scope.posting.stepfour.decisionwithin){
      decisionby = new Date(Date.parse($scope.posting.stepfour.closing) + 24*60*60*1000*$scope.posting.stepfour.decisionwithin);
    }
    for (var i = 0, len = $scope.posting.stepfour.interviews.length; i < len; i++) {
      if($scope.posting.stepfour.interviews[i].sequence == interview.sequence){
        $scope.posting.stepfour.interviews[i].closing = closing;
        $scope.posting.stepfour.interviews[i].decisionby = decisionby;
        break;
      }
    }
  }
  if(interview.type == '5001'){  //APP
    var found = false;
    if($scope.posting.stepfour.questions){
      // finalizing question no
      for (var i = 0, len = $scope.posting.stepfour.questions.length; i < len; i++) {
        $scope.posting.stepfour.questions[i].no = i+1;
      }
      for (var i = 0, len = $scope.posting.stepfour.interview_question.length; i < len; i++) {
        if($scope.posting.stepfour.interview_question[i].sequence == interview.sequence){
          $scope.posting.stepfour.interview_question[i].questions = $scope.posting.stepfour.questions;
          found = true;
          break;
        }
      }
      if(!found){
        $scope.posting.stepfour.interview_question.push(
          {sequence:interview.sequence, questions:$scope.posting.stepfour.questions}
        );
      }else{
        found = false;
      }
    }
  } else if (interview.type == '5002'){ //ARS

  } else if (interview.type == '5003'){  //CALL

  } else if (interview.type == '5004'){  //CHAT

  } else if (interview.type == '5005'){  //VIDEO

  } else if (interview.type == '5006'){  //PERSON
    var found = false;
    if($scope.posting.stepfour.fulladdress){
      for (var i = 0, len = $scope.posting.stepfour.interview_location.length; i < len; i++) {
        if($scope.posting.stepfour.interview_location[i].sequence == interview.sequence){
          $scope.posting.stepfour.interview_location[i].fulladdress = $scope.posting.stepfour.fulladdress;
          $scope.posting.stepfour.interview_location[i].unit = $scope.posting.stepfour.unit;
          $scope.posting.stepfour.interview_location[i].citytag = $scope.posting.stepfour.citytag;
          $scope.posting.stepfour.interview_location[i].postal = $scope.posting.stepfour.postal;
          $scope.posting.stepfour.interview_location[i].latitude = $scope.posting.stepfour.latitude;
          $scope.posting.stepfour.interview_location[i].longitude = $scope.posting.stepfour.longitude;

          found = true;
          break;
        }
      }
      if(!found){
        $scope.posting.stepfour.interview_location.push(
          {sequence:interview.sequence, unit:$scope.posting.stepfour.unit, fulladdress:$scope.posting.stepfour.fulladdress, citytag:$scope.posting.stepfour.citytag, postal:$scope.posting.stepfour.postal, latitude:$scope.posting.stepfour.latitude, longitude:$scope.posting.stepfour.longitude}
        );
      }else{
        found = false;
      }
    }
  }
  //pdc4.modalinterview.hide();
  alert("$scope.posting.stepfour.interviews="+JSON.stringify($scope.posting.stepfour.interviews));
};
pdc4.addInterviewDetail = function(type) {
  if(checkRequiredField()==false)
  {
    alert("Error : Required fields are not filled")
    return;
  }

  $scope.posting.stepfour.ismodified = true;
  $cordovaDialogs.prompt('Enter name', 'Adding new interview', ['OK','Cancel'])
  .then(function(result) {
    var input = result.input1;
    // no button = 0, 'OK' = 1, 'Cancel' = 2
    var btnIndex = result.buttonIndex;
    var interviewIcon = InterviewIconService.getIcon(type);
    //var interviewIcon = getInterviewIcon(type);

    if(btnIndex==1){
      var closing = undefined;
      var decisionby = undefined;
      if($scope.posting.steptwo.hiringtype != "6001"){  //Now Hiring

        if($scope.posting.stepfour.closing){
          closing=$scope.posting.stepfour.closing;
        }
        if($scope.posting.stepfour.decisionwithin){
          decisionby = new Date(Date.parse($scope.posting.stepfour.closing) + 24*60*60*1000*$scope.posting.stepfour.decisionwithin);
        }

      }
      $scope.posting.stepfour.interviews.push(
        {sequence:$scope.new_sequence, name:input, icon:interviewIcon, type:type, closing:closing, decisionby:decisionby}
      );
      if(type == '5001'){  //APP
        var found = false;
        if($scope.posting.stepfour.questions){
          // finalizing question no
          for (var i = 0, len = $scope.posting.stepfour.questions.length; i < len; i++) {
            $scope.posting.stepfour.questions[i].no = i+1;
          }
          $scope.posting.stepfour.interview_question.push(
            {sequence:$scope.new_sequence, questions:$scope.posting.stepfour.questions}
          );
        }
      } else if (type == '5002'){ //ARS

      } else if (type == '5003'){  //CALL

      } else if (type == '5004'){  //CHAT

      } else if (type == '5005'){  //VIDEO

      } else if (type == '5006'){  //PERSON
        if($scope.posting.stepfour.fulladdress){
          $scope.posting.stepfour.interview_location.push(
              {sequence:$scope.new_sequence, unit:$scope.posting.stepfour.unit, fulladdress:$scope.posting.stepfour.fulladdress, citytag:$scope.posting.stepfour.citytag, postal:$scope.posting.stepfour.postal, latitude:$scope.posting.stepfour.latitude, longitude:$scope.posting.stepfour.longitude}
          );
        }
      }
      //updateChartData();
      clearLocalVariable();
      $scope.new_sequence++;

      //pdc4.modalinterview.hide();
      //alert("$scope.posting.stepfour="+JSON.stringify($scope.posting.stepfour));
    }else{
      return false;
    }
  }, function(error) {
    alert("Error -> " + error);
  });
};

pdc4.saveStep = function() {
  LoadingService.showLoading();
  if(!$scope.posting.stepfour.ismodified){
    PostingService.setData('4', $scope.posting.stepfour);
    //alert("call next");
    $state.go("app.postJobStepFive");
    LoadingService.hideLoading();
  }else{
    if(validiateInterview()==false){
      LoadingService.hideLoading();
      alert("Error : Interview validation Failed!!, Check interviews and confirm it");
      return;
    }
    //alert("call next");
    var data = {};
    var url='/mobile/save_posting_post';

    //finalize interview sequence
    for (var i = 0, len = $scope.posting.stepfour.interviews.length; i < len; i++) {
      $scope.posting.stepfour.interviews[i].finalsequence = i+1;
    }

    $scope.posting.stepfour.interviewcount = $scope.posting.stepfour.interviews.length;
    //t_post params end
    {
      data = {
        my_key: window.global.my_key,
        api_key: window.global.api_key,
        user_id : $scope.me.user_id,
        post_id : $scope.posting.stepone.post_id,
        step: '4',
        inputdata: $scope.posting.stepfour
      };
    }

    $http({
      method: 'POST',
      url: window.global.baseurl+url,
      data: data,
      dataType: 'json',
      headers:
      {'Content-Type': 'application/x-www-form-urlencoded'}
    }).then(function mySucces(response) {
      LoadingService.hideLoading();
      alert("responded -->" +JSON.stringify(response.data));
      //alert("registering device= " + response.data.status + " user_id= " + response.data.user_id);
      if(response.data.status==true){
        {
          //$scope.posting.stepfour.post_id = response.data.post_id;
          //alert("post_id -->" +$scope.posting.stepfour.post_id);
          $scope.posting.stepfour.ismodified = false;
          PostingService.setData('4', $scope.posting.stepfour);
          $ionicHistory.clearCache();
          $state.go("app.postJobStepFive");
        }

      }else{
        alert("Error -->" +JSON.stringify(response.data.msg));
        if(response.data.msg=="Invalid mobile key used"){
          AuthService.getApiKey($scope.me.user_id).then(function (result) {
          });
        }
      }
    }, function(error){
        LoadingService.hideLoading();
        //there was an error fetching from the server
        alert(JSON.stringify(error));
        });
  }

};
return pdc4;
})
.controller('PostingDataCtrl3', function($scope, $http, $timeout, $state, $ionicSlideBoxDelegate, $ionicActionSheet, $cordovaCamera, PostingService, $ionicModal, $ionicHistory, LoadingService, AuthService) {
  var pdc3 = this;
  pdc3.init  = function() {
    //$scope.file = {};
    $scope.input = {};
    $scope.posting = PostingService.getData();
    $scope.getJobdescadd();
  }
  function base64ToUint8Array(base64) {
    var raw = atob(base64);
    var uint8Array = new Uint8Array(raw.length);
    for (var i = 0; i < raw.length; i++) {
      uint8Array[i] = raw.charCodeAt(i);
    }
    return uint8Array;
  }
    $scope.goHome = function(){
       $ionicHistory.nextViewOptions({ disableBack: true });
       $state.go("app.postJobMain");
    };
    $scope.goBack = function(){
      $ionicHistory.goBack();
    };
    $scope.getPrevCache = function(){
       $ionicHistory.nextViewOptions({ disableBack: true });
       $state.go("app.postJob");
    };
  $scope.getJobdescadd = function(){
    LoadingService.showLoading();
    var url='/mobile/get_latest_jobdescadd';
    $http({
      url: window.global.baseurl+url,
      method: "GET",
      params: {'my_key': window.global.my_key, 'api_key': window.global.api_key, 'user_id' : $scope.me.user_id},
    }).then(function (response) {
        LoadingService.hideLoading();
        if(response.data.status==true){

        }else{
          //alert("Error -->" +JSON.stringify(response.data.msg));
          if(response.data.msg=="Invalid mobile key used"){
            AuthService.getApiKey($scope.me.user_id).then(function (result) {
            });
          }
        }
      //console.log("responded -->" +JSON.stringify(response.data));
        $scope.posting.stepthree = response.data.data;
        $scope.posting.stepthree.ismodified = true;

        //alert(JSON.stringify($scope.posting.stepthree));
        if($scope.posting.stepthree.filetype=='3003'){
          var block = $scope.posting.stepthree.content.split(";");
          var dataType = block[0].split(":")[1];// In this case "application/pdf"
          var realData = block[1].split(",")[1];// In this case "JVBERi0xLjcKCjE...."
          var blob = new Blob([base64ToUint8Array(realData)], { type: dataType });
          $scope.pdfUrl = URL.createObjectURL(blob);
          $scope.pdfUrl1 = $scope.pdfUrl;
          $scope.posting.stepthree.pdfUrl = $scope.pdfUrl;
          $scope.ispdf1 = true;
          $scope.istxt1 = false;
          $scope.isimg1 = false;
        }else if($scope.posting.stepthree.filetype=='3001'){
          $scope.ispdf1 = false;
          $scope.istxt1 = false;
          $scope.isimg1 = true;
        }else if($scope.posting.stepthree.filetype=='3004'){
          $scope.ispdf1 = false;
          $scope.istxt1 = true;
          $scope.isimg1 = false;
        }
    }, function(error){
        LoadingService.hideLoading();
        //there was an error fetching from the server
        alert(JSON.stringify(error));
        });
  }
//);
$ionicModal.fromTemplateUrl('views/app/modalImgPdc3.html', {
      scope: $scope,
      animation: 'slide-in-up',
  }).then(function (modal) {
      pdc3.modalimg = modal;
  });
  $ionicModal.fromTemplateUrl('views/app/modalPdfPdc3.html', {
        scope: $scope,
        animation: 'slide-in-up',
    }).then(function (modal) {
        pdc3.modalpdf = modal;
    });
    $ionicModal.fromTemplateUrl('views/app/modalTextPdc3.html', {
          scope: $scope,
          animation: 'slide-in-up',
      }).then(function (modal) {
          pdc3.modaltxt = modal;
      });
$scope.$on('$destroy', function () {
    pdc3.modalimg.remove();
    pdc3.modalpdf.remove();
    pdc3.modaltxt.remove();
});
$scope.$watch('files', function() {
  $scope.selectPdf($scope.files);
});
$scope.scroll = 0;
$scope.loading = 'loading';

pdc3.getNavStyle = function(scroll) {
  if(scroll > 100) return 'pdf-controls fixed';
  else return 'pdf-controls';
}
function base64ToUint8Array(base64) {
  var raw = atob(base64);
  var uint8Array = new Uint8Array(raw.length);
  for (var i = 0; i < raw.length; i++) {
    uint8Array[i] = raw.charCodeAt(i);
  }
  return uint8Array;
};
$scope.selectPdf = function(files){
  if (files && files.length) {
    //  alert(files[0].name);
    var fileToLoad = files[0];
    if(fileToLoad.type != 'application/pdf'){
      alert('Error --> File is not in pdf format!!');
      //$scope.file.pdfverified = false;
      return;
    }
    //$scope.file.pdfverified = true;
    //$scope.file.name = files[0].name;
    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent)
    {
      //console.log(fileLoadedEvent.target.result);
      //$scope.posting.stepthree.content = fileLoadedEvent.target.result;
      var myBaseString = fileLoadedEvent.target.result;
      var block = myBaseString.split(";");
      var dataType = block[0].split(":")[1];// In this case "application/pdf"
      var realData = block[1].split(",")[1];// In this case "JVBERi0xLjcKCjE...."
      var blob = new Blob([base64ToUint8Array(realData)], { type: dataType });
      $scope.input.tempcontent = myBaseString;
      $scope.pdfUrl = URL.createObjectURL(blob);
      $scope.title = files[0].name;

      $scope.ispdf = true;
      $state.go($state.current, {}, {reload: true});
      // Display the modal view
      //pdc3.modalpdf.show();
    };
    fileReader.readAsDataURL(fileToLoad);
  }
};
pdc3.acceptPdf = function(){
  //$scope.content = response.data.resumes;
  //$scope.posting.stepthree.content = $scope.file.pdfbase64;

  $scope.pdfUrl1 = $scope.pdfUrl;
  $scope.posting.stepthree.pdfUrl = $scope.pdfUrl;
  $scope.posting.stepthree.content = $scope.input.tempcontent;
  $scope.posting.stepthree.filetype = $scope.input.tempfiletype;
  $scope.ispdf1 = true;
  $scope.istxt1 = false;
  $scope.isimg1 = false;
  /*$scope.file = {};
  $scope.file.pdfverified = false;*/
  pdc3.modalpdf.hide();
};
pdc3.dismissPdf = function(){
  //$scope.content = response.data.resumes;
  //$scope.posting.stepthree.content = undefined;
  /*$scope.file = {};
  $scope.file.pdfverified = false;*/

  //$scope.ispdf1 = false;
  pdc3.modalpdf.hide();
};
pdc3.acceptImg = function(){
  $scope.ispdf1 = false;
  $scope.istxt1 = false;
  $scope.isimg1 = true;
  $scope.posting.stepthree.content = $scope.input.tempcontent;
  $scope.posting.stepthree.filetype = $scope.input.tempfiletype;
  pdc3.modalimg.hide();
};
pdc3.dismissImg = function(){
  //$scope.posting.stepthree.content = undefined;
  //$scope.isimg1 = false;
  pdc3.modalimg.hide();
};
pdc3.acceptTxt = function(){
  $scope.ispdf1 = false;
  $scope.istxt1 = true;
  $scope.isimg1 = false;
  $scope.posting.stepthree.content = $scope.input.tempcontent;
  $scope.posting.stepthree.filetype = $scope.input.tempfiletype;
  pdc3.modaltxt.hide();
};
pdc3.dismissTxt = function(){
  //$scope.posting.stepthree.content = undefined;
  //$scope.istxt1 = false;
  pdc3.modaltxt.hide();
};

pdc3.gatheringAdd = function(){
  $scope.hideSheet = $ionicActionSheet.show({
    buttons: [
      { text: 'Taking photo' },
      { text: 'PDF' },
      { text: 'Image' },
      { text: 'Typing Text' }
    ],
    titleText: 'Adding additional info by',
    cancelText: 'Cancel',
    buttonClicked: function(index) {
      $scope.hideSheet();

      if(index==0){
        var options = {
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.CAMERA,
          //allowEdit: true,
          encodingType: Camera.EncodingType.JPEG,
          //targetWidth: 500,
          //targetHeight: 500,
          popoverOptions: CameraPopoverOptions,
          saveToPhotoAlbum: false,
          quality: 80,
          correctOrientation:true
        };
        $cordovaCamera.getPicture(options).then(function(imageData) {
          $scope.input.tempcontent="data:image/jpeg;base64,"+imageData;
          $scope.input.tempfiletype="3001";
          //$scope.file.imgverified = true;
          //$scope.title = resume.filename;
          //$scope.isimg1 = true;
          //$scope.ispdf = false;
          $scope.isimg = true;
          pdc3.modalimg.show();
        });

      }else if(index==1){
        $scope.input.tempfiletype="3003";
        pdc3.modalpdf.show();

      }else if(index==2){
        var options = {
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
          //allowEdit: true,
          encodingType: Camera.EncodingType.JPEG,
          //targetWidth: 500,
          popoverOptions: CameraPopoverOptions,
          quality: 80,
          correctOrientation:true
        };

        $cordovaCamera.getPicture(options).then(function(imageData) {
          $scope.input.tempcontent="data:image/jpeg;base64,"+imageData;
          $scope.input.tempfiletype="3001";
          //$scope.file.imgverified = true;
          //$scope.title = resume.filename;
          //$scope.isimg1 = true;
          //$scope.ispdf = false;
          //$scope.ispdf1 = false;
          //$scope.istxt1 = false;
          $scope.isimg = true;
          pdc3.modalimg.show();
        });
      }else{
        $scope.input.tempfiletype="3004";
        //$scope.title = resume.filename;
        //$scope.isimg1 = false;
        //$scope.ispdf = false;
        //$scope.ispdf1 = false;
        //$scope.istxt1 = true;
        pdc3.modaltxt.show();
      }
    }
  });
};
pdc3.postingChanged = function() {
  $scope.posting.stepthree.ismodified = true;
};
pdc3.clearCache = function() {
  //$scope.posting.stepthree = {};
  $scope.ispdf1 = undefined;
  $scope.istxt1 = undefined;
  $scope.isimg1 = undefined;
  $scope.pdfUrl = undefined;
  $scope.pdfUrl1 = undefined;
  $scope.isimg = undefined;
  $scope.ispdf = undefined;
  $scope.title = undefined;
  $scope.input = {};
  $scope.posting.stepthree.pdfUrl = undefined;
  $scope.posting.stepthree.filetype = undefined; //Text
  $scope.posting.stepthree.content = undefined;
  $scope.posting.stepthree.ismodified = true;
  //$state.go($state.current, {}, {reload: true});
};

pdc3.saveStep = function() {
  LoadingService.showLoading();
  if(!$scope.posting.stepthree.ismodified){
    PostingService.setData('3', $scope.posting.stepthree);
    //alert("call next");
    $state.go("app.postJobStepFour");
    LoadingService.hideLoading();
  /*}else if($scope.posting.stepthree.content == undefined){
    //Todo update post descadd id to null
    PostingService.setData('3', $scope.posting.stepthree);
    $state.go("app.postJobStepFour");*/
  }else{
    //alert("call next");
    var data = {};
    var url='/mobile/save_posting_post';
    //alert(".filetype -->" +$scope.posting.stepthree.filetype);
    {
      data = {
        my_key: window.global.my_key,
        api_key: window.global.api_key,
        user_id : $scope.me.user_id,
        post_id : $scope.posting.stepone.post_id,
        step: '3',
        inputdata: $scope.posting.stepthree

      };
    }

    $http({
      method: 'POST',
      url: window.global.baseurl+url,
      data: data,
      dataType: 'json',
      headers:
      {'Content-Type': 'application/x-www-form-urlencoded'}
    }).then(function mySucces(response) {
      LoadingService.hideLoading();
      alert("responded -->" +(response.data.status));
      //alert("registering device= " + response.data.status + " user_id= " + response.data.user_id);
      if(response.data.status==true){
        {
          $scope.posting.stepthree.jobdescriptionadd_id = response.data.jobdescriptionadd_id;
          alert("jobdescriptionadd_id -->" +$scope.posting.stepthree.jobdescriptionadd_id);
          $scope.posting.stepthree.ismodified = false;
          PostingService.setData('3', $scope.posting.stepthree);
          $ionicHistory.clearCache();
          $state.go("app.postJobStepFour");
        }

      }else{
        alert("Error -->" +JSON.stringify(response.data.msg));
        //alert("Error -->" +JSON.stringify(response.data.msg));
        if(response.data.msg=="Invalid mobile key used"){
          AuthService.getApiKey($scope.me.user_id).then(function (result) {
          });
        }
      }
    }, function(error){
        LoadingService.hideLoading();
        //there was an error fetching from the server
        alert(JSON.stringify(error));
        });
  }

};
return pdc3;
})
.controller('PostingDataCtrl2', function($scope, $http, $state, PostingService, $ionicHistory, $stateParams, LoadingService, AuthService) {
//alert("$stateParams.post_id=" +$stateParams.post_id);
  $scope.init  = function() {
    $scope.posting = PostingService.getData();
    $scope.getJobdesc();
    $scope.isnomore = false;
  }
  $scope.modelToItemMethod = function (modelValue) {

      // get the full model item from the model value and return it. You need to implement the `getModelItem` method by yourself
      // as this is just a sample. The method needs to retrieve the whole item (like the `items-method`) from just the model value.
      //var modelItem = getModelItem(modelValue);
      return modelValue;
  }
  $scope.goHome = function(){
     $ionicHistory.nextViewOptions({ disableBack: true });
     $state.go("app.postJobMain");
  };
  $scope.goBack = function(){
    $ionicHistory.goBack();
  };
  $scope.getPrevCache = function(){
     $ionicHistory.nextViewOptions({ disableBack: true });
     $state.go("app.postJob");
  };
  $scope.getJobdesc = function(){
    LoadingService.showLoading();
    var url='/mobile/get_latest_jobdesc';
    $http({
      url: window.global.baseurl+url,
      method: "GET",
      params: {'my_key': window.global.my_key, 'api_key': window.global.api_key, 'user_id' : $scope.me.user_id},
    }).then(function (response) {
        LoadingService.hideLoading();
        if(response.data.status==true){

        }else{
          //alert("Error -->" +JSON.stringify(response.data.msg));
          if(response.data.msg=="Invalid mobile key used"){
            AuthService.getApiKey($scope.me.user_id).then(function (result) {
            });
          }
        }
        //console.log("responded -->" +JSON.stringify(response.data));
        $scope.posting.steptwo = response.data.data;
        if($scope.posting.steptwo.applicationdeadline){
          $scope.posting.steptwo.applicationdeadline = new Date(Number($scope.posting.steptwo.applicationdeadline));
        }
        $scope.posting.steptwo.ismodified = true;
        $scope.posting.steptwo.postingtype = "7001"; //Gorilla internal
        $scope.externalModel = response.data.data.data.items;

    }, function(error){
        LoadingService.hideLoading();
        //there was an error fetching from the server
        alert(JSON.stringify(error));
        });
  }

  $scope.getSkillTags = function(query) {

    if (query) {
        var url='/mobile/get_skill_tags';
        var items = $http({
          url: window.global.baseurl+url,
          method: "GET",
          params: {'my_key': window.global.my_key, 'api_key':window.global.api_key, user_id:$scope.me.user_id, query:query}
        }).then(function mySucces(response) {
          if(response.data.status==true){

          }else{
            //alert("Error -->" +JSON.stringify(response.data.msg));
            if(response.data.msg=="Invalid mobile key used"){
              AuthService.getApiKey($scope.me.user_id).then(function (result) {
              });
            }
          }
          if(!Array.isArray(response.data.items)){
            response.data.items = [];
          }
          response.data.items.push({
             id: response.data.items.length +1,
             name:query,
             view:query
          });
          return response.data;
        }, function(error){
            //there was an error fetching from the server
            alert(JSON.stringify(error));
            });

        return items;
      }
    return {items: []};
};
  $scope.postingChanged = function() {
    $scope.posting.steptwo.ismodified = true;
  };
  $scope.clearCache = function() {
    //$scope.posting.steptwo = {};
    $scope.posting.steptwo.ismodified = true;
    $scope.posting.steptwo.title = undefined;
    $scope.posting.steptwo.experienced = false;
    $scope.posting.steptwo.applicationdeadline = undefined;
    $scope.posting.steptwo.postingtype = "7001"; //Gorilla internal
    $scope.posting.steptwo.hiringtype = undefined; //Always hiring
    $scope.posting.steptwo.tags = undefined;
    $scope.posting.steptwo.english = false;
    $scope.posting.steptwo.french = false;
    $scope.posting.steptwo.korean = false;
    $scope.posting.steptwo.chinese = false;
    $scope.externalModel = [];
    //$state.go($state.current, {}, {reload: true});
  };
  $scope.$watch('posting.steptwo.hiringtype', function(newValue){
    if(newValue == "6001"){
      $scope.posting.steptwo.applicationdeadline = undefined;
    }
  });
  $scope.saveStep = function() {
    LoadingService.showLoading();
    if(!$scope.posting.steptwo.ismodified){
      PostingService.setData('2', $scope.posting.steptwo);
      //alert("call next");
      $state.go("app.postJobStepThree");
      LoadingService.hideLoading();
    }else{
      if($scope.posting.steptwo.hiringtype == "6002" && $scope.posting.steptwo.applicationdeadline==undefined){
        LoadingService.hideLoading();
        alert("Error : Application deadline required");
        return;
      }
      //alert("call next");
      var data = {};
      var url='/mobile/save_posting_post';
      //alert("title -->" +$scope.posting.steptwo.title);
      {
        data = {
          my_key: window.global.my_key,
          api_key: window.global.api_key,
          user_id : $scope.me.user_id,
          post_id : $scope.posting.stepone.post_id,
          step: '2',
          inputdata: $scope.posting.steptwo
        };
      }

      $http({
        method: 'POST',
        url: window.global.baseurl+url,
        data: data,
        dataType: 'json',
        headers:
        {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(function (response) {
        //alert("responded -->" +JSON.stringify(response.data));
        LoadingService.hideLoading();
        if(response.data.status==true){
          {
            $scope.posting.steptwo.jobdescription_id = response.data.jobdescription_id;
            alert("jobdescription_id -->" +$scope.posting.steptwo.jobdescription_id);
            $scope.posting.steptwo.ismodified = false;
            PostingService.setData('2', $scope.posting.steptwo);
            $ionicHistory.clearCache();
            $state.go("app.postJobStepThree");
          }

        }else{
          alert("Error -->" +JSON.stringify(response.data.msg));
          //alert("Error -->" +JSON.stringify(response.data.msg));
          if(response.data.msg=="Invalid mobile key used"){
            AuthService.getApiKey($scope.me.user_id).then(function (result) {
            });
          }
        }
      }, function(error){
          LoadingService.hideLoading();
          //there was an error fetching from the server
          alert(JSON.stringify(error));
          });
    }

  };
})
.controller('PostingDataCtrl1', function($scope, $http, $timeout,
  $state, $ionicSlideBoxDelegate, $ionicScrollDelegate, $ionicActionSheet, $cordovaCamera,
  PostingService, $ionicModal, $ionicHistory, $stateParams, LoadingService,
  AuthService, LocationService) {
  var pdc1 = this;

  pdc1.init  = function() {
    $scope.goHome = function(){
        $ionicHistory.nextViewOptions({ disableBack: true });
        $state.go("app.postJobMain");
    };
    $scope.getPrevCache = function(){
      $ionicHistory.goBack();
    };
    $scope.posting = {};
    pdc1.getCompanyprofile();
    $scope.autoaddress = {};
    $scope.currentLocUsed = false;
    //$ionicSlideBoxDelegate.$getByHandle('modal').enableSlide(false);
  }

pdc1.disableTap = function(event){
        var input = event.target;

        // Get the predictions element
        var container = document.getElementsByClassName('pac-container');
        container = angular.element(container);

        // Apply css to ensure the container overlays the other elements, and
        // events occur on the element not behind it
        container.css('z-index', '5000');
        container.css('pointer-events', 'auto');

        // Disable ionic data tap
        container.attr('data-tap-disabled', 'true');

        // Leave the input field if a prediction is chosen
        container.on('click', function(){
            input.blur();
        });
};
pdc1.getCompanyprofile = function(){
  LoadingService.showLoading();
  var url='/mobile/get_latest_companyprofile';
  $http({
    url: window.global.baseurl+url,
    method: "GET",
    params: {'my_key': window.global.my_key, 'api_key': window.global.api_key, 'user_id' : $scope.me.user_id},
  }).then(function (response) {
    //console.log("responded -->" +JSON.stringify(response.data));
    if(response.data.status==true){

    }else{
      //alert("Error -->" +JSON.stringify(response.data.msg));
      if(response.data.msg=="Invalid mobile key used"){
        AuthService.getApiKey($scope.me.user_id).then(function (result) {
        });
      }
    }
      $scope.posting.stepone = response.data.data;
      $scope.posting.stepone.ismodified = true;
      if($scope.posting.stepone.workphotos == undefined){
        $scope.posting.stepone.workphotos = [];
      }
      pdc1.slideChanged();
      LoadingService.hideLoading();
      initMap($scope.posting.stepone.latitude, $scope.posting.stepone.longitude);
    }, function(error){
        LoadingService.hideLoading();
        //there was an error fetching from the server
        alert(JSON.stringify(error));
        });
}
function initMap(latitude, longitude){
  var mapOptions = {
    center: new google.maps.LatLng(latitude, longitude),
    zoom: 18,
    streetViewControl: false,
    zoomControl: true,
    zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_BOTTOM
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  var myMarker = new google.maps.Marker({
    position: new google.maps.LatLng(latitude, longitude),
    map: map,
    //draggable: true,
    title: 'Select Location'
  });
  //myMarker.addListener('drag', handleEvent);
  //myMarker.addListener('dragend', handleEvent);
  google.maps.event.addListener(myMarker, "position_changed", function() {
    if($scope.currentLocUsed){
      var position = myMarker.getPosition();
      //var latlng = new google.maps.LatLng(lat, lng);
      geocoder.geocode({'latLng': position}, function(results, status)
      {
          if (status == google.maps.GeocoderStatus.OK)
          {
              if (results[0])
              {
                  $scope.posting.stepone.fulladdress = results[0].formatted_address.substring(0, 20);;
                  $scope.locationSelected();
              }
              else
              {
                  alert("No results found");
              }
          }
          else
          {
              alert("Geocoder failed due to: " + status);
          }
      });
      $scope.currentLocUsed = false;
    }
  });
  $scope.myMarker = myMarker;
  $scope.map = map;
  geocoder = new google.maps.Geocoder();
}
$scope.$watch('autoaddress.lat', function(newValue){
  if(newValue){
    $scope.map.setCenter(new google.maps.LatLng
      ($scope.autoaddress.lat, $scope.autoaddress.long));
    $scope.myMarker.setPosition(new google.maps.LatLng
      ($scope.autoaddress.lat, $scope.autoaddress.long));
  }
});
var geocoder;
function handleEvent(event) {
  //console.log("lat="+ event.latLng.lat());
  //console.log("lng="+ event.latLng.lng());
  //reverse geocoding
  //var latlng = new google.maps.LatLng(lat, lng);
  geocoder.geocode({'latLng': event.latLng}, function(results, status)
  {
      if (status == google.maps.GeocoderStatus.OK)
      {
          if (results[0])
          {
              $scope.posting.stepone.fulladdress = results[0].formatted_address;
              $scope.locationSelected();
          }
          else
          {
              alert("No results found");
          }
      }
      else
      {
          alert("Geocoder failed due to: " + status);
      }
  });
}
$scope.locationSelected = function () {
    /* stuff here to add a new item... */
    $scope.$broadcast('locationSelected');
};
pdc1.centerOnMe = function() {
   if(!$scope.map) {
     return;
   }
   $scope.currentLocUsed = true;
   LocationService.getCurrentLocation().then(function(gps){
     window.global.gps= gps;
     if(window.global.gps.lat && window.global.gps.long){
       $scope.map.setCenter(new google.maps.LatLng
         (window.global.gps.lat, window.global.gps.long));
       $scope.myMarker.setPosition(new google.maps.LatLng
         (window.global.gps.lat, window.global.gps.long));
     }
   });
 };
 pdc1.showModal = function(templateUrl) {
     $ionicModal.fromTemplateUrl(templateUrl, {
       scope: $scope
     }).then(function(modal) {
       $scope.modal = modal;
       $scope.modal.show();
     });
 }

 pdc1.closeModal = function() {
     $scope.modal.hide();
     $scope.modal.remove();
 };

 pdc1.updateSlideStatus = function(slide) {
   /*if(slide){
     var zoomFactor = $ionicScrollDelegate.$getByHandle('scrollHandle' + slide).getScrollPosition().zoom;

     if (zoomFactor == $scope.zoomMin)
       $ionicSlideBoxDelegate.enableSlide(true);
     else
       $ionicSlideBoxDelegate.enableSlide(false);
     $ionicSlideBoxDelegate.update();
   }*/
 };

/*
$ionicModal.fromTemplateUrl('views/app/modalImgViewer.html', {
      scope: $scope,
      animation: 'slide-in-up',
  }).then(function (modal) {
      pdc1.modalimg = modal;
  });
$scope.$on('$destroy', function () {
    pdc1.modalimg.remove();
});*/

pdc1.postingChanged = function() {
  $scope.posting.stepone.ismodified = true;
};
pdc1.clearCache = function() {
  $scope.posting.stepone = {};
  $scope.posting.stepone.ismodified = true;
  $scope.posting.stepone.workphotos = [];
  $scope.autoaddress = {};
};
$scope.zoomMin = 1;
$scope.screenHeight =  window.innerHeight;
pdc1.openImage = function(image){
  $scope.image = image;
  pdc1.showModal('views/app/zoom1.html');
}

pdc1.saveStep = function() {
  LoadingService.showLoading();
  if(!$scope.posting.stepone.ismodified){
    PostingService.setData('1', $scope.posting.stepone);
    $state.go("app.postJobStepTwo");
    LoadingService.hideLoading();
  }else{
    if($scope.autoaddress.lat && $scope.autoaddress.long){
      $scope.posting.stepone.postal = $scope.autoaddress.postal;
      $scope.posting.stepone.latitude = $scope.autoaddress.lat;
      $scope.posting.stepone.longitude = $scope.autoaddress.long;
      if($scope.autoaddress.state){
        $scope.posting.stepone.citytag = $scope.autoaddress.city +" "+ $scope.autoaddress.state;
      }else{
        $scope.posting.stepone.citytag = $scope.autoaddress.city;
      }
    }

    var data = {};
    var url='/mobile/save_posting_post';
    alert("name -->" +$scope.posting.stepone.name);
    {
      data = {
        my_key: window.global.my_key,
        api_key: window.global.api_key,
        user_id : $scope.me.user_id,
        post_id : $stateParams.post_id,
        step: '1',
        inputdata: $scope.posting.stepone
        /*name : $scope.posting.stepone.name,
        phone : $scope.posting.stepone.phone,
        address1 : $scope.posting.stepone.address1,
        address2 : $scope.posting.stepone.address2,
        postal: $scope.posting.stepone.postal,
        workphotos : $scope.posting.stepone.workphotos*/
      };
    }

    $http({
      method: 'POST',
      url: window.global.baseurl+url,
      data: data,
      dataType: 'json',
      headers:
      {'Content-Type': 'application/x-www-form-urlencoded'}
    }).then(function mySucces(response) {
      LoadingService.hideLoading();
      //alert("responded -->" +(response.data.status));
      //alert("registering device= " + response.data.status + " user_id= " + response.data.user_id);
      if(response.data.status==true){
        {
          $scope.posting.stepone.companyprofile_id = response.data.companyprofile_id;
          $scope.posting.stepone.post_id = response.data.post_id;
          alert("post_id -->" +$scope.posting.stepone.post_id);
          $scope.posting.stepone.ismodified = false;
          PostingService.setData('1', $scope.posting.stepone);
          $ionicHistory.clearCache();
          $state.go("app.postJobStepTwo");
        }

      }else{
        alert("Error -->" +JSON.stringify(response.data.msg));
        //alert("Error -->" +JSON.stringify(response.data.msg));
        if(response.data.msg=="Invalid mobile key used"){
          AuthService.getApiKey($scope.me.user_id).then(function (result) {
          });
        }
      }

    }, function(error){
        LoadingService.hideLoading();
        //there was an error fetching from the server
        alert(JSON.stringify(error));
        });
  }

};
pdc1.deletePhoto = function(index) {
  $scope.posting.stepone.ismodified = true;
  $scope.posting.stepone.workphotos.splice(index, 1);

  $ionicSlideBoxDelegate.$getByHandle('main')._instances[0].kill();
  $ionicSlideBoxDelegate.$getByHandle('main').update();
  //$ionicSlideBoxDelegate.$getByHandle('modal')._instances[0].kill();
  //$ionicSlideBoxDelegate.$getByHandle('modal').update();
  alert("workphotos.length=" + $scope.posting.stepone.workphotos.length);
};
  pdc1.slideChanged = function () {
      $ionicSlideBoxDelegate.$getByHandle('main').update();
  };
  pdc1.addCompanyPhoto = function () {
    $scope.hideSheet = $ionicActionSheet.show({
      buttons: [
        { text: 'Take photo' },
        { text: 'Photo from library' }
      ],
      titleText: 'Adding company photo by',
      cancelText: 'Cancel',
      buttonClicked: function(index) {
        $scope.hideSheet();

        if(index==0){
          var options = {
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            //allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            //targetWidth: 300,
            //targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false,
            quality: 80,
            correctOrientation:true
          };

          $cordovaCamera.getPicture(options).then(function(imageData) {
            //adding to the workphotos
            $scope.posting.stepone.workphotos.push({
               image: "data:image/jpeg;base64,"+imageData
               //"data:image/jpeg;base64,"+imageData
            }
          );
            $scope.posting.stepone.ismodified = true;
            $ionicSlideBoxDelegate.$getByHandle('main').update();
            //$ionicSlideBoxDelegate.$getByHandle('modal').update();
            alert("workphotos.length=" + $scope.posting.stepone.workphotos.length);
          });

        }else{
          var options = {
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            //allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            //targetWidth: 300,
            //targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            quality: 80,
            correctOrientation:true
          };

          $cordovaCamera.getPicture(options).then(function(imageData) {
            //adding to the workphotos
            $scope.posting.stepone.workphotos.push({
               image: "data:image/jpeg;base64,"+imageData
               //"data:image/jpeg;base64,"+imageData
            }
          );
            $scope.posting.stepone.ismodified = true;
            $ionicSlideBoxDelegate.$getByHandle('main').update();
            //$ionicSlideBoxDelegate.$getByHandle('modal').update();
            alert("workphotos.length=" + $scope.posting.stepone.workphotos.length);
          });
        }
      }
    });
  };
  return pdc1;
})
.controller('PushCtrl', function($scope) {

})
.controller('ApplyingDataCtrl2', function($scope, $http, $timeout, $state, $ionicSlideBoxDelegate, $ionicActionSheet, $cordovaCamera, PostingService, $ionicModal, $ionicHistory, $stateParams, LoadingService, ApplyService, BrowsingModeService, AuthService) {
  var adc2 = this;
  adc2.init  = function() {
    $scope.input = {};
    $scope.applying = {};
    $scope.post = $stateParams.post;
    //$scope.posting = PostingService.getData();
    //$scope.getJobdescadd();

  }
  function base64ToUint8Array(base64) {
    var raw = atob(base64);
    var uint8Array = new Uint8Array(raw.length);
    for (var i = 0; i < raw.length; i++) {
      uint8Array[i] = raw.charCodeAt(i);
    }
    return uint8Array;
  }

$ionicModal.fromTemplateUrl('views/app/modalCloudResume.html', {
      scope: $scope,
      animation: 'slide-in-up',
  }).then(function (modal) {
      adc2.modalcloud = modal;
  });
  $scope.$on('$destroy', function () {
      adc2.modalcloud.remove();
  });
$scope.$watch('files', function() {
  adc2.selectFromLocal($scope.files);
});

adc2.selectFromCamera = function(files){
  var options = {
    destinationType: Camera.DestinationType.DATA_URL,
    sourceType: Camera.PictureSourceType.CAMERA,
    //allowEdit: true,
    encodingType: Camera.EncodingType.JPEG,
    //targetWidth: 500,
    //targetHeight: 500,
    popoverOptions: CameraPopoverOptions,
    saveToPhotoAlbum: false,
    quality: 80,
    correctOrientation:true
  };

  $cordovaCamera.getPicture(options).then(function(imageData) {
    $scope.input.tempcontent="data:image/jpeg;base64,"+imageData;
    $scope.input.tempfiletype="3001";
    $scope.isimg = true;
    adc2.acceptImg();
  });
}
adc2.selectFromLocal = function(files){
  if (files && files.length) {
    var fileToLoad = files[0];
    /*if(fileToLoad.type != 'application/pdf'){

    }else if(fileToLoad.type == 'application/pdf')*/
    {
      var fileReader = new FileReader();
      fileReader.onload = function(fileLoadedEvent)
      {
        var myBaseString = fileLoadedEvent.target.result;
        var block = myBaseString.split(";");
        var dataType = block[0].split(":")[1];// In this case "application/pdf"
        var realData = block[1].split(",")[1];// In this case "JVBERi0xLjcKCjE...."

        if(fileToLoad.type == 'application/pdf'){
          var blob = new Blob([base64ToUint8Array(realData)], { type: dataType });
          $scope.input.tempcontent = myBaseString;
          $scope.pdfUrl = URL.createObjectURL(blob);
          $scope.title = files[0].name;
          $scope.input.tempfiletype="3003";
          $scope.ispdf = true;
          adc2.acceptPdf();
        }else if((fileToLoad.type == 'image/png') || (fileToLoad.type == 'image/gif') || (fileToLoad.type == 'image/jpeg') ){
          $scope.title = files[0].name;
          //var blob = new Blob([base64ToUint8Array(realData)], { type: dataType });
          $scope.input.tempcontent=myBaseString;
          $scope.input.tempfiletype="3001";
          $scope.isimg = true;
          adc2.acceptImg();
        }else if(fileToLoad.type == 'text/plain'){
          $scope.input.tempfiletype="3004";
          $scope.input.tempcontent=myBaseString;
          adc2.acceptTxt();
        }
        $state.go($state.current, {}, {reload: true});
      };
      fileReader.readAsDataURL(fileToLoad);
    }
  }
};
adc2.acceptPdf = function(){
  $scope.pdfUrl1 = $scope.pdfUrl;
  $scope.applying.pdfUrl = $scope.pdfUrl;
  $scope.applying.content = $scope.input.tempcontent;
  $scope.applying.filetype = $scope.input.tempfiletype;
  $scope.ispdf1 = true;
  $scope.istxt1 = false;
  $scope.isimg1 = false;
};

adc2.acceptImg = function(){
  $scope.ispdf1 = false;
  $scope.istxt1 = false;
  $scope.isimg1 = true;
  $scope.applying.content = $scope.input.tempcontent;
  $scope.applying.filetype = $scope.input.tempfiletype;
};

adc2.acceptTxt = function(){
  $scope.ispdf1 = false;
  $scope.istxt1 = true;
  $scope.isimg1 = false;
  $scope.applying.content = $scope.input.tempcontent;
  $scope.applying.filetype = $scope.input.tempfiletype;
};
adc2.closeModal = function(){
  adc2.modalcloud.hide();
};
adc2.selectFromCloud = function() {
  LoadingService.showLoading();
  var url='/mobile/get_userCVList';
  $http({
    url: window.global.baseurl+url,
    method: "GET",
    params: {'my_key': window.global.my_key, 'api_key': window.global.api_key, 'user_id': $scope.me.user_id},
  }).then(function mySucces(response) {
    LoadingService.hideLoading();
    if(response.data.status==true){
      $scope.resumes = response.data.resumes;
      adc2.modalcloud.show();
    }else{
      //alert("Error -->" +JSON.stringify(response.data.msg));
      if(response.data.msg=="Invalid mobile key used"){
        AuthService.getApiKey($scope.me.user_id).then(function (result) {
        });
      }
    }
  }, function(error){
      LoadingService.hideLoading();
      //there was an error fetching from the server
      alert(JSON.stringify(error));
      });
  //$scope.$broadcast('scroll.refreshComplete');
}
function getcodefromfiletype(filetype){
  var cvfiletype = '3001';
  if(filetype == 'MS Word')
    cvfiletype = '3002';
  else if(filetype == 'PDF')
    cvfiletype = '3003';
  else if(filetype == 'Text')
    cvfiletype = '3004';
  return cvfiletype;
}
adc2.selectResumeFromCloud = function(resume) {
  {
    LoadingService.showLoading();
    var url='/mobile/manage_usercv';
    var operation = 'open';
    var data = {
      my_key: window.global.my_key,
      api_key: window.global.api_key,
      cvname: resume.filename,
      user_id: $scope.me.user_id,
      operation: operation,
      filetype: getcodefromfiletype(resume.filetype)
    };
    $http({
      method: 'POST',
      url: window.global.baseurl+url,
      data: data,
      dataType: 'json',
      headers:
      {'Content-Type': 'application/x-www-form-urlencoded'}
    }).then(function mySucces(response) {
      LoadingService.hideLoading();
      alert("responded -->"  +(response.data.status));
      if(response.data.status==true){
        if(resume.filetype == 'PDF')
        {
          //$scope.file.resume = response.data.resume.fileblob;
          var myBaseString = response.data.resume.fileblob;
          alert("myBaseString size-->" +myBaseString.length);

          var block = myBaseString.split(";");
          var dataType = block[0].split(":")[1];// In this case "application/pdf"
          var realData = block[1].split(",")[1];// In this case "JVBERi0xLjcKCjE...."
          var blob = new Blob([base64ToUint8Array(realData)], { type: dataType });
          $scope.pdfUrl = URL.createObjectURL(blob);

          $scope.title = resume.filename;
          $scope.input.tempcontent = myBaseString;

          $scope.input.tempfiletype="3003";
          $scope.ispdf = true;
          adc2.acceptPdf();

        }else if(resume.filetype == 'Image'){
          //$scope.file.resume=response.data.resume.fileblob;
          //alert("img size-->" +$scope.file.resume.length);
          //console.log($scope.file.resume);
          $scope.title = resume.filename;
          $scope.input.tempcontent=response.data.resume.fileblob;
          $scope.input.tempfiletype="3001";
          $scope.isimg = true;
          adc2.acceptImg();
        }
        adc2.closeModal();
      }else{
        alert("Error -->" +JSON.stringify(response.data.msg));
        //alert("Error -->" +JSON.stringify(response.data.msg));
        if(response.data.msg=="Invalid mobile key used"){
          AuthService.getApiKey($scope.me.user_id).then(function (result) {
          });
        }
      }
    }, function(error){
        LoadingService.hideLoading();
        //there was an error fetching from the server
        alert(JSON.stringify(error));
        });
  }
};
adc2.resetCache = function() {
  //$scope.applying = {};
  $scope.ispdf1 = undefined;
  $scope.istxt1 = undefined;
  $scope.isimg1 = undefined;
  $scope.pdfUrl = undefined;
  $scope.pdfUrl1 = undefined;
  $scope.isimg = undefined;
  $scope.ispdf = undefined;
  $scope.title = undefined;
  $scope.input = {};
  $scope.applying.pdfUrl = undefined;
  $scope.applying.filetype = undefined; //Text
  $scope.applying.content = undefined;
  $scope.applying.ismodified = true;
  //$state.go($state.current, {}, {reload: true});
};

adc2.submitApplication = function() {
  ApplyService.apply($scope.post.post_id, $scope.applying.filetype, $scope.applying.content).then(function(response){
    console.log(JSON.stringify(response));
    console.log("submitApplication $scope.post.post_id="+$scope.post.post_id + " " + $scope.applying.filetype);
    var browsing = BrowsingModeService.getBrowsingMode();
    if(browsing && browsing.mode==='list'){
      $state.go("app.myJobSearchList");
    }else{
      $state.go("app.myJobSearchMap");
    }
  }, function(error){

      //there was an error fetching from the server
      console.log(JSON.stringify(error));
      });

};
return adc2;
})
.controller('ApplyingDataCtrl1', function($scope, $http, $timeout, $state, $ionicSlideBoxDelegate, $ionicActionSheet, $cordovaCamera, PostingService, $ionicModal, $ionicHistory, $stateParams, LoadingService, AuthService, ApplyService) {
  $scope.init  = function() {
    $scope.post = $stateParams.post;
    $scope.applying = {};
    $scope.applying.name = $scope.me.name;
    $scope.applying.email = $scope.me.email;
    $scope.applying.phone = $scope.me.phone;
  }
$scope.saveStep = function() {
  if (!$scope.applying.name || !$scope.applying.email || !$scope.applying.phone) {
      alert('Invalid info!');
      return;
  }
  LoadingService.showLoading();
  var url='/mobile/update_profile_post';
  var data = {
    my_key: window.global.my_key,
    api_key: window.global.api_key,
    user_id : $scope.me.user_id,
    name : $scope.applying.name,
    email : $scope.applying.email,
    phone : $scope.applying.phone
  };
  $http({
    method: 'POST',
    url: window.global.baseurl+url,
    data: data,
    dataType: 'json',
    headers:
    {'Content-Type': 'application/x-www-form-urlencoded'}
  }).then(function mySucces(response) {
    LoadingService.hideLoading();
    alert("responded -->" +(response.data.status));
    //alert("registering device= " + response.data.status + " user_id= " + response.data.user_id);
    if(response.data.status==true){
      $scope.me.name = $scope.applying.name;
      $scope.me.email = $scope.applying.email;
      $scope.me.phone = $scope.applying.phone;
      AuthService.storeLoginProfile($scope.me);

      if($scope.post.cvrequired=='Y'){
        $state.go("app.applyJobStepTwo", {'post':$scope.post});
      }else{
        //in case of sns user applying for no cv
        ApplyService.apply($scope.post.post_id, null, null).then(function(response){
          console.log(JSON.stringify(response));
          console.log("submitApplication $scope.post.post_id="+$scope.post.post_id + " " + $scope.applying.filetype);
          var browsing = BrowsingModeService.getBrowsingMode();
          if(browsing && browsing.mode==='list'){
            $state.go("app.myJobSearchList");
          }else{
            $state.go("app.myJobSearchMap");
          }

        }, function(error){

            //there was an error fetching from the server
            console.log(JSON.stringify(error));
            });
      }
    }else{
      alert("Error -->" +JSON.stringify(response.data.msg));
      //alert("Error -->" +JSON.stringify(response.data.msg));
      if(response.data.msg=="Invalid mobile key used"){
        AuthService.getApiKey($scope.me.user_id).then(function (result) {
        });
      }
    }
  }, function(error){
      LoadingService.hideLoading();
      //there was an error fetching from the server
      alert(JSON.stringify(error));
      });
}

$scope.resetCache = function() {
  $scope.applying = {};
  $scope.applying.name = $scope.me.name;
  $scope.applying.email = $scope.me.email;
  $scope.applying.phone = $scope.me.phone;
};

});
