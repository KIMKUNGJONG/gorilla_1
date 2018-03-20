angular.module('gorilla.filters', [])

.filter('nl2br', function(){
  return function(data) {
      if (!data) return data;
      return data.replace(/\n\r?/g, '<br />');
  };
})
.filter('rawHtml', function($sce){
  return function(val) {
    return $sce.trustAsHtml(val);
  };
})
.filter('parseDate', function() {
  return function(value) {
      return Date.parse(value);
  };
})

;
