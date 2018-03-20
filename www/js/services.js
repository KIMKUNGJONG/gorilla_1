angular.module('gorilla.services', [])

.service('InterviewIconService', function() {
  function getInterviewIcon(type){
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
  }

  function getInterviewType(icon){
    if(icon == 'ion-android-phone-portrait'){  //APP
      return '5001';
    } else if (icon == 'ion-ios-recording'){ //ARS
      return '5002';
    } else if (icon == 'ion-ios-telephone'){  //CALL
      return '5003';
    } else if (icon == 'ion-ios-chatboxes'){  //CHAT
      return '5004';
    } else if (icon == 'ion-videocamera'){  //VIDEO
      return '5005';
    } else if (icon == 'ion-ios-people'){  //PERSON
      return '5006';
    }
  }
  return {
    getIcon: getInterviewIcon,
    getType: getInterviewType
  };
})
.service('NotificationService', function($http, $q, LoadingService, AuthService) {
/*  var setupPush = function() {
    //LoadingService.showLoading();
    var deferred = $q.defer();
    var pushNotification = window.plugins.pushNotification;
    pushNotification.register(successHandler, errorHandler, {"senderID":window.global.GCM_SENDER_ID,"ecb":"onNotificationGCM"});

    successHandler: function(result) {
        alert('Callback Success! Result = '+result)
    },
    errorHandler:function(error) {
        alert(error);
    },
    onNotificationGCM: function(e) {
      //LoadingService.hideLoading();
      deferred.resolve(e);
          switch( e.event )
          {
              case 'registered':
                  if ( e.regid.length > 0 )
                  {
                      console.log("Regid " + e.regid);
                      alert('registration id = '+e.regid);
                  }
              break;

              case 'message':
                // this is the actual push notification. its format depends on the data model from the push server
                alert('message = '+e.message+' msgcnt = '+e.msgcnt);
              break;

              case 'error':
                alert('GCM error = '+e.msg);
              break;

              default:
                alert('An unknown GCM event has occurred');
                break;
          }
      }
      return deferred.promise;
  }
  var setupPush1 = function() {
    var push = PushNotification.init({
        "android": {
            "senderID": window.global.GCM_SENDER_ID
        },
        "ios": {
          "sound": true,
          "alert": true,
          "badge": true
        },
        "windows": {}
    });

    push.on('registration', function(data) {
        console.log("registration event: " + data.registrationId);
        var oldRegId = localStorage.getItem('registrationId');
        if (oldRegId !== data.registrationId) {
            // Save new registration ID
            localStorage.setItem('registrationId', data.registrationId);
            // Post registrationId to your app server as the value has changed
        }
    });

    push.on('error', function(e) {
        console.log("push error = " + e.message);
    });
}*/
  var getNotificationId = function(){
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

    });
  };
  var sendTo = function(post_id, interview_id, receiver_id, body, title, state, param, method) {
    LoadingService.showLoading();
    var deferred = $q.defer();
    var url='/mobile/' + method;

    $http({
      url: window.global.baseurl+url,
      method: "GET",
      params: {'my_key': window.global.my_key, 'api_key': window.global.api_key, 'user_id' : window.global.user_session, 'post_id' : post_id, 'interview_id' : interview_id, 'receiver_id' : receiver_id, 'body' : body, 'title' : title, 'state' : state, 'param' : param },
    }).then(function (response) {
      //console.log("responded -->" +JSON.stringify(response.data));
      if(response.data.status==true){

      }else{
        if(response.data.msg=="Invalid mobile key used"){
          AuthService.getApiKey(window.global.user_session).then(function (result) {
          });
        }
      }
        LoadingService.hideLoading();
        deferred.resolve(response.data);
        //$scope.$broadcast('scroll.refreshComplete');
        }, function(error){
            LoadingService.hideLoading();
            //there was an error fetching from the server
            //alert(JSON.stringify(error));
            deferred.reject(error);
            });
      return deferred.promise;
  };
  return {
    sendTo: sendTo//,
    //getNotificationId: getNotificationId
    //setupPush: setupPush
  };
})
.service('UserService', function() {
  // For the purpose of this example I will store user data on ionic local storage but you should save it on a database
  var setUser = function(user_data) {
    window.localStorage.usersession = JSON.stringify(user_data);
  };

  var getUser = function(){
    return JSON.parse(window.localStorage.usersession || '{}');
  };

  return {
    getUser: getUser,
    setUser: setUser
  };
})
.service('SearchService', function($http, $q, LoadingService, AuthService) {
  function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1);
    var a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    return d;
  }

  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }
  var getResult = function(filter) {
    LoadingService.showLoading();
    var deferred = $q.defer();
    var url='/mobile/get_my_search';
    var param = {};
    var searches =[];
    param.citytag = filter.city;
    if(filter.useCurrentLoc){
      param.distance = filter.distance;
      if((param.distance != 0))
      {
        param.distance = param.distance / 1.60934;
      }
      param.longitude = filter.longitude;
      param.latitude = filter.latitude;
    }
    if(filter.searchValue.length > 0){
      param.keywordtag = filter.searchValue;
    }
    if(filter.experiencedonly){
      param.experiencedonly = filter.experiencedonly;
    }
    if(filter.nowhiringonly){
      param.nowhiringonly = filter.nowhiringonly;
    }
    if(filter.gorillaadonly){
      param.gorillaadonly = filter.gorillaadonly;
    }
    if(filter.englishselected){
      param.englishselected = filter.englishselected;
    }
    if(filter.frenchselected){
      param.frenchselected = filter.frenchselected;
    }
    if(filter.koreanselected){
      param.koreanselected = filter.koreanselected;
    }
    if(filter.chineseselected){
      param.chineseselected = filter.chineseselected;
    }
    $http({
      url: window.global.baseurl+url,
      method: "GET",
      params: {'my_key': window.global.my_key, 'api_key': window.global.api_key, 'user_id' : window.global.user_session, 'filter' : param},
    }).then(function (response) {
      LoadingService.hideLoading();
      console.log("responded -->" +JSON.stringify(response.data));
      if(response.data.status==true){

        console.log("postings -->" +JSON.stringify(response.data.search));
        searches = response.data.search;

        for (var i = 0; i < searches.length; i++) {
          for( var j = 0; j < searches[i].language.length; j++) {
            if(searches[i].language[j].language =='9001') {
              searches[i].english = true;
            }else if(searches[i].language[j].language =='9002') {
              searches[i].korean = true;
            }else if(searches[i].language[j].language =='9003') {
              searches[i].chinese = true;
            }else if(searches[i].language[j].language =='9004') {
              searches[i].french = true;
            }
          }
          var distance = getDistanceFromLatLonInKm(window.global.gps.lat, window.global.gps.long, searches[i].post.latitude, searches[i].post.longitude);
          searches[i].distance = parseFloat(distance.toFixed(2));
          var timeDiff = Math.abs(new Date().getTime() - new Date(Number(searches[i].post.postingdate)).getTime());
          var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
          searches[i].daysago = diffDays;
          timeDiff = Math.abs(new Date().getTime() - new Date(Number(searches[i].post.applicationdeadline)).getTime());
          diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
          searches[i].daysleft = diffDays;

          if(Array.isArray(response.data.mystatus)){
            for (var k = 0, len2 = response.data.mystatus.length; k < len2; k++) {
              if(searches[i].post.post_id == response.data.mystatus[k].post_id){
                searches[i].post.isbookmarked=response.data.mystatus[k].isbookmarked;
                searches[i].post.isapplicant=response.data.mystatus[k].isapplicant;
                searches[i].post.isposter=response.data.mystatus[k].isposter;
                searches[i].post.isfalsead=response.data.mystatus[k].isfalsead;
                searches[i].post.userstatus=response.data.mystatus[k].userstatus;
                break;
              }
            }
          }
        }
      }else{
        //alert("Error -->" +JSON.stringify(response.data.msg));
        if(response.data.msg=="Invalid mobile key used"){
          AuthService.getApiKey(window.global.user_session).then(function (result) {
          });
        }
      }
      deferred.resolve(searches);
      //$scope.$broadcast('scroll.refreshComplete');
      }, function(error){
          LoadingService.hideLoading();
          //there was an error fetching from the server
          //alert(JSON.stringify(error));
          deferred.reject(error);
          });

    return deferred.promise;
  };
  var getApplied = function() {
    LoadingService.showLoading();
    var deferred = $q.defer();
    var url='/mobile/get_my_applied';
    var searches =[];

    $http({
      url: window.global.baseurl+url,
      method: "GET",
      params: {'my_key': window.global.my_key, 'api_key': window.global.api_key, 'user_id' : window.global.user_session},
    }).then(function (response) {
      LoadingService.hideLoading();
      console.log("responded -->" +JSON.stringify(response.data));
      if(response.data.status==true){

        console.log("postings -->" +JSON.stringify(response.data.search));
        searches = response.data.search;

        for (var i = 0; i < searches.length; i++) {
          for( var j = 0; j < searches[i].language.length; j++) {
            if(searches[i].language[j].language =='9001') {
              searches[i].english = true;
            }else if(searches[i].language[j].language =='9002') {
              searches[i].korean = true;
            }else if(searches[i].language[j].language =='9003') {
              searches[i].chinese = true;
            }else if(searches[i].language[j].language =='9004') {
              searches[i].french = true;
            }
          }
          var distance = getDistanceFromLatLonInKm(window.global.gps.lat, window.global.gps.long, searches[i].post.latitude, searches[i].post.longitude);
          searches[i].distance = parseFloat(distance.toFixed(2));
          var timeDiff = Math.abs(new Date().getTime() - new Date(Number(searches[i].post.postingdate)).getTime());
          var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
          searches[i].daysago = diffDays;
          timeDiff = Math.abs(new Date().getTime() - new Date(Number(searches[i].post.applicationdeadline)).getTime());
          diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
          searches[i].daysleft = diffDays;
          if(Array.isArray(response.data.mystatus)){
            for (var k = 0, len2 = response.data.mystatus.length; k < len2; k++) {
              if(searches[i].post.post_id == response.data.mystatus[k].post_id){
                searches[i].post.isbookmarked=response.data.mystatus[k].isbookmarked;
                searches[i].post.isapplicant=response.data.mystatus[k].isapplicant;
                searches[i].post.isposter=response.data.mystatus[k].isposter;
                searches[i].post.isfalsead=response.data.mystatus[k].isfalsead;
                searches[i].post.userstatus=response.data.mystatus[k].userstatus;
                break;
              }
            }
          }
        }

      }else{
        //alert("Error -->" +JSON.stringify(response.data.msg));
        if(response.data.msg=="Invalid mobile key used"){
          AuthService.getApiKey(window.global.user_session).then(function (result) {
          });
        }
      }
      deferred.resolve(searches);
      //$scope.$broadcast('scroll.refreshComplete');
      }, function(error){
          LoadingService.hideLoading();
          //there was an error fetching from the server
          //alert(JSON.stringify(error));
          deferred.reject(error);
          });

    return deferred.promise;
  };
  return {
    getResult: getResult,
    getApplied: getApplied
  };
})
.service('GeoService2', function($ionicPlatform, $cordovaGeolocation) {

  var options = {timeout: 10000, maximumAge: 0, enableHighAccuracy: true};

  return {
    getPosition: function() {
      return $ionicPlatform.ready()
        .then(function() {
          return $cordovaGeolocation.getCurrentPosition(options);
        })
    }
  };

})
.service('LocationService', function(GeoService2, $q, LoadingService) {
  var getCurrentLocation = function()
  {
    var deferred = $q.defer();
    var gps = {};
    gps.lat = 43.6695009;
    gps.long = -79.4074781;
    gps.citytag = 'Toronto ON';
    LoadingService.showLoading();
    GeoService2.getPosition().then(function(position)
    {
      gps.lat = position.coords.latitude;
      gps.long = position.coords.longitude;
      getCitytag(position.coords.latitude, position.coords.longitude)
      .then(function (citytag) {
           gps.citytag = citytag;
           console.log("GPS acquired!!");
           LoadingService.hideLoading();
           deferred.resolve(gps);
        }, function (err) {
           console.error('Error!', err);
           LoadingService.hideLoading();
           deferred.resolve(gps);
           //deferred.reject(err);
        });
    }, function(error){
      console.error('Error!', error);
      LoadingService.hideLoading();
      deferred.resolve(gps);
      //deferred.reject(error);
    });
    return deferred.promise;
  };
  function getCitytag (lat, lng) {
         var deferred = $q.defer(),
             geocoder = new google.maps.Geocoder(),
             latlng = new google.maps.LatLng(lat, lng);
         geocoder.geocode({'latLng': latlng}, function(results, status) {
           var state ={};
           var city = {};
           if (status == google.maps.GeocoderStatus.OK) {
             if (results[1]) {
               //console.log("full="+ JSON.stringify(results[0]));
                for (var i=0; i<results[0].address_components.length; i++) {
                 for (var b=0;b<results[0].address_components[i].types.length;b++) {

                 //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
                     if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
                         //this is the object you are looking for
                         state= results[0].address_components[i];
                         console.log("state=" + JSON.stringify(state));
                     }else if (results[0].address_components[i].types[b] == "locality") {
                         //this is the object you are looking for
                         city= results[0].address_components[i];
                         console.log("city=" + JSON.stringify(city));
                     }
                 }
             }

             }
             if(state.short_name){
               deferred.resolve(city.long_name + " " + state.short_name);
             }else{
               deferred.resolve(city.long_name);
             }

           }else{
             deferred.reject(status);
           }


      });

      return deferred.promise;
 };

  return {
    getCurrentLocation: getCurrentLocation
  };
})
.service('LocationService2', function($cordovaGeolocation, $q, LoadingService) {
  var getCurrentLocation = function()
  {
    //LoadingService.showLoading();
    var options = {timeout: 10000, maximumAge: 0, enableHighAccuracy: true};
    $cordovaGeolocation.getCurrentPosition(options).then(function(position){
      window.global.gps = {};
      window.global.gps.long = position.coords.longitude;
      window.global.gps.lat = position.coords.latitude;
      getCitytag(window.global.gps.lat, window.global.gps.long)
      .then(function (citytag) {
           window.global.gps.citytag = citytag;
           alert("GPS acquired!!");
           //LoadingService.hideLoading();
        }, function (err) {
           console.error('Uh oh! An error occurred!', err);
           //LoadingService.hideLoading();
        });
    }, function(error){
      console.log("Could not get location");
      //LoadingService.hideLoading();
    });

  };
  function getCitytag (lat, lng) {
         var deferred = $q.defer(),
             geocoder = new google.maps.Geocoder(),
             latlng = new google.maps.LatLng(lat, lng);
         geocoder.geocode({'latLng': latlng}, function(results, status) {
           var state ={};
           var city = {};
           if (status == google.maps.GeocoderStatus.OK) {
             if (results[1]) {
               //console.log("full="+ JSON.stringify(results[0]));
                for (var i=0; i<results[0].address_components.length; i++) {
                 for (var b=0;b<results[0].address_components[i].types.length;b++) {

                 //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
                     if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
                         //this is the object you are looking for
                         state= results[0].address_components[i];
                         console.log("state=" + JSON.stringify(state));
                     }else if (results[0].address_components[i].types[b] == "locality") {
                         //this is the object you are looking for
                         city= results[0].address_components[i];
                         console.log("city=" + JSON.stringify(city));
                     }
                 }
             }

             }
             if(state.short_name){
               deferred.resolve(city.long_name + " " + state.short_name);
             }else{
               deferred.resolve(city.long_name);
             }

           }else{
             deferred.reject(status);
           }


      });

      return deferred.promise;
 };

  return {
    getCurrentLocation: getCurrentLocation
  };
})
.service('FilterService', function() {
  var data = undefined;
  // For the purpose of this example I will store user data on ionic local storage but you should save it on a database
  var setData = function(city, distance, searchValue, experiencedonly, nowhiringonly, gorillaadonly
    , englishselected, frenchselected, koreanselected, chineseselected, useCurrentLoc, longitude, latitude) {
    data = {};
    data.city = city;
    data.distance = distance;
    data.searchValue = searchValue;
    data.experiencedonly = experiencedonly;
    data.nowhiringonly = nowhiringonly;
    data.gorillaadonly = gorillaadonly;
    data.englishselected = englishselected;
    data.frenchselected = frenchselected;
    data.koreanselected = koreanselected;
    data.chineseselected = chineseselected;
    data.useCurrentLoc = useCurrentLoc;
    data.longitude = longitude;
    data.latitude = latitude;
  };

  var getData = function(){
    return data;
  };

  return {
    setData: setData,
    getData: getData
  };
})
.service('MatchedService', function() {
  var LOCAL_MATCHED_KEY = 'matched-profile';
  var matched_profile;

  function getMatchedFilter() {
    //if(syncCompleted)
    {
      matched_profile = JSON.parse(window.localStorage.getItem(LOCAL_MATCHED_KEY));
      return matched_profile;
    }
  }

  function storeMatchedFilter(token) {
    window.localStorage.setItem(LOCAL_MATCHED_KEY, JSON.stringify(token));
  }

  function destroyMatchedFilter() {
    window.localStorage.removeItem(LOCAL_MATCHED_KEY);
  }

  return {
    destroyMatchedFilter: function () {
        destroyMatchedFilter();
    },
    storeMatchedFilter: function (token) {
        storeMatchedFilter(token);
    },
    getMatchedFilter: function () {
        return getMatchedFilter();
      }
  };
})
.service('BrowsingModeService', function() {
  var LOCAL_BROWSING_KEY = 'browsing-profile';
  var browsing_profile;

  function getBrowsingMode() {
    //if(syncCompleted)
    {
      browsing_profile = JSON.parse(window.localStorage.getItem(LOCAL_BROWSING_KEY));
      return browsing_profile;
    }
  }

  function storeBrowsingMode(token) {
    window.localStorage.setItem(LOCAL_BROWSING_KEY, JSON.stringify(token));
  }

  function destroyBrowsingMode() {
    window.localStorage.removeItem(LOCAL_BROWSING_KEY);
  }

  return {
    destroyBrowsingMode: function () {
        destroyBrowsingMode();
    },
    storeBrowsingMode: function (token) {
        storeBrowsingMode(token);
    },
    getBrowsingMode: function () {
        return getBrowsingMode();
      }
  };
})
.service('ApplyService', function($q, $http, LoadingService, AuthService) {
  var apply = function(post_id, filetype, fileblob) {
    LoadingService.showLoading();
    var deferred = $q.defer();
    var url='/mobile/apply_job';
    {
      data = {
        my_key: window.global.my_key,
        api_key: window.global.api_key,
        user_id: window.global.user_session,
        post_id: post_id,
        cvtype: filetype,
        cvblob: fileblob
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
      if(response.data.status==true){

      }else{
        //alert("Error -->" +JSON.stringify(response.data.msg));
        if(response.data.msg=="Invalid mobile key used"){
          AuthService.getApiKey(window.global.user_session).then(function (result) {
          });
        }
      }
      //alert("responded -->" +JSON.stringify(response.data));
        {
          deferred.resolve(response.data.status);
        }
    }, function(error){
        LoadingService.hideLoading();
        deferred.reject(error);
        });

    return deferred.promise;
  };
  var dropApplicant = function(post_id, applicant_id, currentinterview_id=null, message=null) {
    LoadingService.showLoading();
    var deferred = $q.defer();
    var url='/mobile/drop_applicant';
    {
      data = {
        my_key: window.global.my_key,
        api_key: window.global.api_key,
        user_id: window.global.user_session,
        post_id: post_id,
        applicant_id: applicant_id,
        currentinterview_id: currentinterview_id,
        message: message
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
      if(response.data.status==true){

      }else{
        //alert("Error -->" +JSON.stringify(response.data.msg));
        if(response.data.msg=="Invalid mobile key used"){
          AuthService.getApiKey(window.global.user_session).then(function (result) {
          });
        }
      }
      //alert("responded -->" +JSON.stringify(response.data));
        {
          deferred.resolve(response.data.status);
        }
    }, function(error){
        LoadingService.hideLoading();
        deferred.reject(error);
        });

    return deferred.promise;
  };
  var notifyApplicantsPassForWrapUp = function(post_id, applicants, nextinterview_id, currentinterview_id, message=null) {
    LoadingService.showLoading();
    var deferred = $q.defer();
    var url='/mobile/notify_applicants_pass_and_move';
    {
      data = {
        my_key: window.global.my_key,
        api_key: window.global.api_key,
        user_id: window.global.user_session,
        post_id: post_id,
        applicants: applicants,
        nextinterview_id: nextinterview_id,
        currentinterview_id: currentinterview_id,
        message: message
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
      if(response.data.status==true){

      }else{
        //alert("Error -->" +JSON.stringify(response.data.msg));
        if(response.data.msg=="Invalid mobile key used"){
          AuthService.getApiKey(window.global.user_session).then(function (result) {
          });
        }
      }
      //alert("responded -->" +JSON.stringify(response.data));
        {
          deferred.resolve(response.data.status);
        }
    }, function(error){
        LoadingService.hideLoading();
        deferred.reject(error);
        });

    return deferred.promise;
  };
  var notifyApplicantPass = function(post_id, applicant_id, nextinterview_id, currentinterview_id, message=null) {
    LoadingService.showLoading();
    var deferred = $q.defer();
    var url='/mobile/notify_applicant_pass';
    {
      data = {
        my_key: window.global.my_key,
        api_key: window.global.api_key,
        user_id: window.global.user_session,
        post_id: post_id,
        applicant_id: applicant_id,
        nextinterview_id: nextinterview_id,
        currentinterview_id: currentinterview_id,
        message: message
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
      if(response.data.status==true){

      }else{
        //alert("Error -->" +JSON.stringify(response.data.msg));
        if(response.data.msg=="Invalid mobile key used"){
          AuthService.getApiKey(window.global.user_session).then(function (result) {
          });
        }
      }
      //alert("responded -->" +JSON.stringify(response.data));
        {
          deferred.resolve(response.data.status);
        }
    }, function(error){
        LoadingService.hideLoading();
        deferred.reject(error);
        });

    return deferred.promise;
  };
  var notifyApplicantJobOffer = function(post_id, applicant_id, currentinterview_id, signature, message=null) {
    LoadingService.showLoading();
    var deferred = $q.defer();
    var url='/mobile/notify_applicant_joboffer';
    {
      data = {
        my_key: window.global.my_key,
        api_key: window.global.api_key,
        user_id: window.global.user_session,
        post_id: post_id,
        applicant_id: applicant_id,
        currentinterview_id: currentinterview_id,
        signature: signature,
        message: message
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
      if(response.data.status==true){

      }else{
        //alert("Error -->" +JSON.stringify(response.data.msg));
        if(response.data.msg=="Invalid mobile key used"){
          AuthService.getApiKey(window.global.user_session).then(function (result) {
          });
        }
      }
      //alert("responded -->" +JSON.stringify(response.data));
        {
          deferred.resolve(response.data.status);
        }
    }, function(error){
        LoadingService.hideLoading();
        deferred.reject(error);
        });

    return deferred.promise;
  };
  var respondToJobOffer = function(post_id, accept, signature=null) {
    LoadingService.showLoading();
    var deferred = $q.defer();
    var url='/mobile/respond_to_joboffer';
    {
      data = {
        my_key: window.global.my_key,
        api_key: window.global.api_key,
        user_id: window.global.user_session,
        post_id: post_id,
        accept: accept,
        signature: signature
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
      if(response.data.status==true){

      }else{
        //alert("Error -->" +JSON.stringify(response.data.msg));
        if(response.data.msg=="Invalid mobile key used"){
          AuthService.getApiKey(window.global.user_session).then(function (result) {
          });
        }
      }
      //alert("responded -->" +JSON.stringify(response.data));
        {
          deferred.resolve(response.data);
        }
    }, function(error){
        LoadingService.hideLoading();
        deferred.reject(error);
        });

    return deferred.promise;
  };
  var finalizeToJobOffer = function(post_id, applicant) {
    LoadingService.showLoading();
    var deferred = $q.defer();
    var url='/mobile/finalize_to_joboffer';
    {
      data = {
        my_key: window.global.my_key,
        api_key: window.global.api_key,
        user_id: window.global.user_session,
        post_id: post_id,
        userstatus: applicant.userstatus,
        applicant_id: applicant.user_id
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
      if(response.data.status==true){

      }else{
        //alert("Error -->" +JSON.stringify(response.data.msg));
        if(response.data.msg=="Invalid mobile key used"){
          AuthService.getApiKey(window.global.user_session).then(function (result) {
          });
        }
      }
      //alert("responded -->" +JSON.stringify(response.data));
        {
          deferred.resolve(response.data);
        }
    }, function(error){
        LoadingService.hideLoading();
        deferred.reject(error);
        });

    return deferred.promise;
  };
  var acceptSchedule = function(post_id, interview_id, timeslot) {
    LoadingService.showLoading();
    var deferred = $q.defer();
    var url='/mobile/accept_interview_schedule';
    {
      data = {
        my_key: window.global.my_key,
        api_key: window.global.api_key,
        user_id: window.global.user_session,
        post_id: post_id,
        interview_id: interview_id,
        timeslot: timeslot
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
      if(response.data.status==true){

      }else{
        //alert("Error -->" +JSON.stringify(response.data.msg));
        if(response.data.msg=="Invalid mobile key used"){
          AuthService.getApiKey(window.global.user_session).then(function (result) {
          });
        }
      }
      //alert("responded -->" +JSON.stringify(response.data));
        {
          deferred.resolve(response.data);
        }
    }, function(error){
        LoadingService.hideLoading();
        deferred.reject(error);
        });

    return deferred.promise;
  };
  var rejectSchedule = function(post_id, interview_id) {
    LoadingService.showLoading();
    var deferred = $q.defer();
    var url='/mobile/reject_interview_schedule';
    {
      data = {
        my_key: window.global.my_key,
        api_key: window.global.api_key,
        user_id: window.global.user_session,
        post_id: post_id,
        interview_id: interview_id
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
      if(response.data.status==true){

      }else{
        //alert("Error -->" +JSON.stringify(response.data.msg));
        if(response.data.msg=="Invalid mobile key used"){
          AuthService.getApiKey(window.global.user_session).then(function (result) {
          });
        }
      }
      //alert("responded -->" +JSON.stringify(response.data));
        {
          deferred.resolve(response.data);
        }
    }, function(error){
        LoadingService.hideLoading();
        deferred.reject(error);
        });

    return deferred.promise;
  };
  var notifyApplicantSchedule = function(post_id, applicant_id, interview_id, timeslot, isarray) {
    LoadingService.showLoading();
    var deferred = $q.defer();
    var url='/mobile/notify_applicant_schedule';
    {
      data = {
        my_key: window.global.my_key,
        api_key: window.global.api_key,
        user_id: window.global.user_session,
        post_id: post_id,
        applicant_id: applicant_id,
        interview_id: interview_id,
        timeslot: timeslot,
        isarray: isarray
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
      if(response.data.status==true){

      }else{
        //alert("Error -->" +JSON.stringify(response.data.msg));
        if(response.data.msg=="Invalid mobile key used"){
          AuthService.getApiKey(window.global.user_session).then(function (result) {
          });
        }
      }
      //alert("responded -->" +JSON.stringify(response.data));
        {
          deferred.resolve(response.data.status);
        }
    }, function(error){
        LoadingService.hideLoading();
        deferred.reject(error);
        });

    return deferred.promise;
  };
    var addNewSchedule = function(post_id, applicant_id, interview_id, newtimeslot, length) {
      LoadingService.showLoading();
      var deferred = $q.defer();
      var url='/mobile/add_new_interview_schedule';
      {
        data = {
          my_key: window.global.my_key,
          api_key: window.global.api_key,
          user_id: window.global.user_session,
          post_id: post_id,
          applicant_id: applicant_id,
          interview_id: interview_id,
          newtimeslot: newtimeslot,
          length: length
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
        if(response.data.status==true){

        }else{
          //alert("Error -->" +JSON.stringify(response.data.msg));
          if(response.data.msg=="Invalid mobile key used"){
            AuthService.getApiKey(window.global.user_session).then(function (result) {
            });
          }
        }
        //alert("responded -->" +JSON.stringify(response.data));
          {
            deferred.resolve(response.data.status);
          }
      }, function(error){
          LoadingService.hideLoading();
          deferred.reject(error);
          });

      return deferred.promise;
    };
  var answerAppInterview = function(post_id, interview_id, answers) {
    LoadingService.showLoading();
    var deferred = $q.defer();
    var url='/mobile/answer_app_interview';
    {
      data = {
        my_key: window.global.my_key,
        api_key: window.global.api_key,
        user_id: window.global.user_session,
        post_id: post_id,
        interview_id: interview_id,
        answers: answers
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
      if(response.data.status==true){

      }else{
        //alert("Error -->" +JSON.stringify(response.data.msg));
        if(response.data.msg=="Invalid mobile key used"){
          AuthService.getApiKey(window.global.user_session).then(function (result) {
          });
        }
      }
      //alert("responded -->" +JSON.stringify(response.data));
        {
          deferred.resolve(response.data);
        }
    }, function(error){
        LoadingService.hideLoading();
        deferred.reject(error);
        });

    return deferred.promise;
  };
    var writeApplicantEvaluation = function(post_id, applicant_id, interview_id, eval) {
      LoadingService.showLoading();
      var deferred = $q.defer();
      var url='/mobile/write_applicant_eval';
      {
        data = {
          my_key: window.global.my_key,
          api_key: window.global.api_key,
          user_id: window.global.user_session,
          post_id: post_id,
          applicant_id: applicant_id,
          interview_id: interview_id,
          eval: eval
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
        if(response.data.status==true){

        }else{
          //alert("Error -->" +JSON.stringify(response.data.msg));
          if(response.data.msg=="Invalid mobile key used"){
            AuthService.getApiKey(window.global.user_session).then(function (result) {
            });
          }
        }
        //alert("responded -->" +JSON.stringify(response.data));
          {
            deferred.resolve(response.data.status);
          }
      }, function(error){
          LoadingService.hideLoading();
          deferred.reject(error);
          });

      return deferred.promise;
    };
  return {
    apply: apply,
    dropApplicant: dropApplicant,
    finalizeToJobOffer: finalizeToJobOffer,
    respondToJobOffer: respondToJobOffer,
    notifyApplicantJobOffer: notifyApplicantJobOffer,
    notifyApplicantsPassForWrapUp: notifyApplicantsPassForWrapUp,
    notifyApplicantPass: notifyApplicantPass,
    notifyApplicantSchedule: notifyApplicantSchedule,
    answerAppInterview: answerAppInterview,
    writeApplicantEvaluation: writeApplicantEvaluation,
    addNewSchedule: addNewSchedule,
    acceptSchedule: acceptSchedule,
    rejectSchedule: rejectSchedule
  };
})

.service('SystemMessageService', function($q, $http, LoadingService, AuthService) {

  var getSystemMessages = function() {
    LoadingService.showLoading();
    var deferred = $q.defer();
    var url='/mobile/get_my_system_messages';
    $http({
      url: window.global.baseurl+url,
      method: "GET",
      params: {'my_key': window.global.my_key, 'api_key': window.global.api_key, 'user_id' : window.global.user_session},
    }).then(function (response) {
      LoadingService.hideLoading();
      console.log("responded -->" +JSON.stringify(response.data));
      var returnVal = {};
      if(response.data.status==true){
        returnVal.messages = response.data.messages;
      }else{
        //alert("Error -->" +JSON.stringify(response.data.msg));
        if(response.data.msg=="Invalid mobile key used"){
          AuthService.getApiKey(window.global.user_session).then(function (result) {
          });
        }
      }
      deferred.resolve(returnVal);
      //$scope.$broadcast('scroll.refreshComplete');
      }, function(error){
          LoadingService.hideLoading();
          //there was an error fetching from the server
          //alert(JSON.stringify(error));
          deferred.reject(error);
          });

    return deferred.promise;
  };
  var getSystemMessagesLatest = function() {
    LoadingService.showLoading();
    var deferred = $q.defer();
    var url='/mobile/get_my_system_messages_latest';
    $http({
      url: window.global.baseurl+url,
      method: "GET",
      params: {'my_key': window.global.my_key, 'api_key': window.global.api_key, 'user_id' : window.global.user_session},
    }).then(function (response) {
      LoadingService.hideLoading();
      console.log("responded -->" +JSON.stringify(response.data));
      var returnVal = {};
      if(response.data.status==true){
        returnVal.messages = response.data.messages;
      }else{
        //alert("Error -->" +JSON.stringify(response.data.msg));
        if(response.data.msg=="Invalid mobile key used"){
          AuthService.getApiKey(window.global.user_session).then(function (result) {
          });
        }
      }
      deferred.resolve(returnVal);
      //$scope.$broadcast('scroll.refreshComplete');
      }, function(error){
          LoadingService.hideLoading();
          //there was an error fetching from the server
          //alert(JSON.stringify(error));
          deferred.reject(error);
          });

    return deferred.promise;
  };
  return {
    getSystemMessagesLatest: getSystemMessagesLatest,
    getSystemMessages: getSystemMessages
  };
})
.service('PostingManageService', function($q, $http, LoadingService, AuthService) {
  var getPostDetailContract = function(post_id, opponent_id) {
    LoadingService.showLoading();
    var deferred = $q.defer();
    var url='/mobile/get_post_details_contract';
    $http({
      url: window.global.baseurl+url,
      method: "GET",
      params: {'my_key': window.global.my_key, 'api_key': window.global.api_key, 'user_id' : window.global.user_session, 'post_id' : post_id, 'opponent_id': opponent_id},
    }).then(function (response) {
      LoadingService.hideLoading();
      console.log("responded -->" +JSON.stringify(response.data));
      var returnVal = {};
      if(response.data.status==true){
        returnVal.post = response.data.post;
        returnVal.signatures = response.data.signatures;
        returnVal.language = response.data.language;
        returnVal.tag = response.data.tag;
        returnVal.interviews = response.data.interviews;
        returnVal.userstatus = response.data.userstatus;
        returnVal.countWorkPhotos = response.data.countWorkPhotos;
      }else{
        //alert("Error -->" +JSON.stringify(response.data.msg));
        if(response.data.msg=="Invalid mobile key used"){
          AuthService.getApiKey(window.global.user_session).then(function (result) {
          });
        }
      }
      deferred.resolve(returnVal);
      //$scope.$broadcast('scroll.refreshComplete');
      }, function(error){
          LoadingService.hideLoading();
          //there was an error fetching from the server
          //alert(JSON.stringify(error));
          deferred.reject(error);
          });

    return deferred.promise;
  };
  var getPostDetail = function(post_id, isposter=true) {
    LoadingService.showLoading();
    var deferred = $q.defer();
    var url='/mobile/get_post_details';
    if(!isposter){
      url='/mobile/get_post_details_applicant';
    }
    $http({
      url: window.global.baseurl+url,
      method: "GET",
      params: {'my_key': window.global.my_key, 'api_key': window.global.api_key, 'user_id' : window.global.user_session, 'post_id' : post_id},
    }).then(function (response) {
      LoadingService.hideLoading();
      console.log("responded -->" +JSON.stringify(response.data));
      var returnVal = {};
      if(response.data.status==true){
        returnVal.post = response.data.post;
        returnVal.language = response.data.language;
        returnVal.tag = response.data.tag;
        returnVal.interviews = response.data.interviews;
        returnVal.userstatus = response.data.userstatus;
        returnVal.countWorkPhotos = response.data.countWorkPhotos;
      }else{
        //alert("Error -->" +JSON.stringify(response.data.msg));
        if(response.data.msg=="Invalid mobile key used"){
          AuthService.getApiKey(window.global.user_session).then(function (result) {
          });
        }
      }
      deferred.resolve(returnVal);
      //$scope.$broadcast('scroll.refreshComplete');
      }, function(error){
          LoadingService.hideLoading();
          //there was an error fetching from the server
          //alert(JSON.stringify(error));
          deferred.reject(error);
          });

    return deferred.promise;
  };
  var getPostQnA = function(post_id, opponent_id) {
    LoadingService.showLoading();
    var deferred = $q.defer();
    var url='/mobile/get_post_qna';
    $http({
      url: window.global.baseurl+url,
      method: "GET",
      params: {'my_key': window.global.my_key, 'api_key': window.global.api_key, 'user_id' : window.global.user_session, 'post_id' : post_id, 'opponent_id' : opponent_id},
    }).then(function (response) {
      LoadingService.hideLoading();
      console.log("responded -->" +JSON.stringify(response.data));
      var returnVal = {};
      if(response.data.status==true){
        returnVal.messages = response.data.messages;
      }else{
        //alert("Error -->" +JSON.stringify(response.data.msg));
        if(response.data.msg=="Invalid mobile key used"){
          AuthService.getApiKey(window.global.user_session).then(function (result) {
          });
        }
      }
      deferred.resolve(returnVal);
      //$scope.$broadcast('scroll.refreshComplete');
      }, function(error){
          LoadingService.hideLoading();
          //there was an error fetching from the server
          //alert(JSON.stringify(error));
          deferred.reject(error);
          });

    return deferred.promise;
  };
  var getPostQnALatest = function(post_id, opponent_id) {
    LoadingService.showLoading();
    var deferred = $q.defer();
    var url='/mobile/get_post_qna_latest';
    $http({
      url: window.global.baseurl+url,
      method: "GET",
      params: {'my_key': window.global.my_key, 'api_key': window.global.api_key, 'user_id' : window.global.user_session, 'post_id' : post_id, 'opponent_id' : opponent_id},
    }).then(function (response) {
      LoadingService.hideLoading();
      console.log("responded -->" +JSON.stringify(response.data));
      var returnVal = {};
      if(response.data.status==true){
        returnVal.messages = response.data.messages;
      }else{
        //alert("Error -->" +JSON.stringify(response.data.msg));
        if(response.data.msg=="Invalid mobile key used"){
          AuthService.getApiKey(window.global.user_session).then(function (result) {
          });
        }
      }
      deferred.resolve(returnVal);
      //$scope.$broadcast('scroll.refreshComplete');
      }, function(error){
          LoadingService.hideLoading();
          //there was an error fetching from the server
          //alert(JSON.stringify(error));
          deferred.reject(error);
          });

    return deferred.promise;
  };
  //post
  var writePostQnA = function(post_id, to_userid, type, content, state, param) {
    LoadingService.showLoading();
    var deferred = $q.defer();
    var url='/mobile/write_post_qna2';
    {
      data = {
        my_key: window.global.my_key,
        api_key: window.global.api_key,
        user_id: window.global.user_session,
        post_id: post_id,
        to_userid: to_userid,
        type: type,
        content: content,
        state: state,
        param: param
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
      console.log("responded -->" +JSON.stringify(response.data));

      if(response.data.status==true){

      }else{
        //alert("Error -->" +JSON.stringify(response.data.msg));
        if(response.data.msg=="Invalid mobile key used"){
          AuthService.getApiKey(window.global.user_session).then(function (result) {
          });
        }
      }
      deferred.resolve(response.data.status);
      //$scope.$broadcast('scroll.refreshComplete');
      }, function(error){
          LoadingService.hideLoading();
          //there was an error fetching from the server
          //alert(JSON.stringify(error));
          deferred.reject(error);
          });

    return deferred.promise;
  };
  return {
    getPostDetailContract: getPostDetailContract,
    getPostDetail: getPostDetail,
    getPostQnA: getPostQnA,
    getPostQnALatest: getPostQnALatest,
    writePostQnA: writePostQnA
  };
})
.service('PostingDetailService', function() {
  var data = {};

  // For the purpose of this example I will store user data on ionic local storage but you should save it on a database
  var setData = function(postin, languagein, tagin, interviewsin, userstatusin) {
    data.post = postin;
    data.language = languagein;
    data.tag = tagin;
    data.interviews = interviewsin;
    data.userstatus = userstatusin;
  };

  var getData = function(){
    return data;
  };

  return {
    setData: setData,
    getData: getData
  };
})
.service('PostingService', function() {
  var posting = {};
  // For the purpose of this example I will store user data on ionic local storage but you should save it on a database
  var setData = function(step, data) {
    if(step == '1'){
      posting.stepone = data;
    }else if(step == '2'){
      posting.steptwo = data;
    }else if(step == '3'){
      posting.stepthree = data;
    }else if(step == '4'){
      posting.stepfour = data;
    }else if(step == '5'){
      posting.stepfive = data;
    }
  };

  var getData = function(){
    return posting;
  };
  var clearData = function(){
    posting = {};
  };
  return {
    setData: setData,
    getData: getData,
    clearData: clearData
  };
})
.service('AuthService', function($q, $http, $timeout, $ionicLoading, LoadingService) {
  var LOCAL_TOKEN_KEY = 'login-profile';
  var LOCAL_USER_KEY = 'session_id';

  var login_profile;
  var session_id;
  var islogged;
  var isguest;

  var getApiKey = function(userid){
    var deferred = $q.defer();
    var url='/mobile/get_apikey2';
    $http({
      url: window.global.baseurl+url,
      method: "GET",
      params: {'user_id':userid},
    }).then(function mySucces(response) {
      window.global.api_key = response.data.api_key;
      deferred.resolve(true);
    }, function(error){
        //there was an error fetching from the server
        alert(JSON.stringify(error));
        deferred.reject(error);
      });
      return deferred.promise;
  }
  var syncCompleted = function() {
    var deferred = $q.defer();

      login_profile = JSON.parse(window.localStorage.getItem(LOCAL_TOKEN_KEY));
      console.log("login_profile -->" +JSON.stringify(login_profile));
      if (login_profile){
        session_id = window.localStorage.getItem(LOCAL_USER_KEY);

        if(login_profile.sns === 'guest'){
          isguest = true;
        }else{
          isguest = false;
        }
        this.getApiKey(session_id).then(function (result) {


                  LoadingService.showLoading();
                  {
                    var url='/mobile/get_profile_byuserid2';
                    $http({
                      url: window.global.baseurl+url,
                      method: "GET",
                      params: {'my_key': window.global.my_key, 'api_key':window.global.api_key, 'user_id':session_id},
                    }).then(function mySucces(response) {

                      LoadingService.hideLoading();
                      {
                        login_profile.name = response.data.name;
                        login_profile.phone = response.data.phone;
                        login_profile.picture = response.data.picture;

                        window.localStorage.setItem(LOCAL_TOKEN_KEY, JSON.stringify(login_profile));
                        deferred.resolve(true);
                        /*
                        var url='/mobile/get_apikey2';
                        $http({
                          url: window.global.baseurl+url,
                          method: "GET",
                          params: {'user_id':session_id},
                        }).then(function mySucces(response) {
                          window.global.api_key = response.data.api_key;
                          deferred.resolve(true);
                        }, function(error){
                            LoadingService.hideLoading();
                            //there was an error fetching from the server
                            alert(JSON.stringify(error));
                            deferred.reject(error);
                          });*/
                      }
                    }, function(error){
                        LoadingService.hideLoading();
                        //there was an error fetching from the server
                        alert(JSON.stringify(error));
                        deferred.reject(error);
                        });
                  }
        });

      }else{
        deferred.resolve(true);
      }
      return deferred.promise;
  }

  function getSession() {
    {
      login_profile = JSON.parse(window.localStorage.getItem(LOCAL_TOKEN_KEY));
      if(login_profile){
        session_id = window.localStorage.getItem(LOCAL_USER_KEY);
        window.global.user_session = session_id;
        //console.log("session_id -->" +session_id);
        islogged = true;
        if(login_profile.sns === 'guest'){
          isguest = true;
        }else{
          isguest = false;
        }
        var returnVal = login_profile;
        returnVal.user_id = session_id;
        returnVal.islogged = islogged;
        returnVal.isguest = isguest;
        return returnVal;
      }else{
        return undefined;
      }
    }
  }

  function storeLoginProfile(token) {
    window.localStorage.setItem(LOCAL_TOKEN_KEY, JSON.stringify(token));
  }
  function storeUserId(token) {
    window.localStorage.setItem(LOCAL_USER_KEY, token);
  }

  function destroySession() {
    login_profile = undefined;
    session_id = undefined;
    window.global.user_session = session_id;
    window.global.api_key = undefined;
    islogged = undefined;
    isguest = undefined;
    window.localStorage.removeItem(LOCAL_TOKEN_KEY);
    window.localStorage.removeItem(LOCAL_USER_KEY);
  }

  return {
    getSyncCompleted: syncCompleted,
    getApiKey: getApiKey,
    init: function () {
        initializeAppInfo();
    },
    destroySession: function () {
        destroySession();
    },
    getSession: function () {
        return getSession();
    },
    storeLoginProfile: function (token) {
        storeLoginProfile(token);
    },
    storeUserId: function (token) {
        storeUserId(token);
      }
  };
})
