angular.module('gorilla.config', [])
.constant('WORDPRESS_API_URL', 'https://wordpress.startapplabs.com/blog/api/')
.constant('GCM_SENDER_ID', '574597432927')
;
var snsloginconnecting = false;
var googlemaploaded = false;
var initialgpslocked = false;
