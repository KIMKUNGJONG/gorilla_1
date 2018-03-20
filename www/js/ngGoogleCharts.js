"use strict";

var googleChart = googleChart || angular.module("google-chart", []);

googleChart.directive("googleChart", function () {
    return {
        restrict: "A",
        link: function ($scope, $elem, $attr) {
            var dt = $scope[$attr.ngModel].dataTable;

            var options = {};
            if ($scope[$attr.ngModel].title)
                options.title = $scope[$attr.ngModel].title;
            console.log($scope[$attr.ngModel] + ' \t envirName= ', $attr.googleChart + ' Ele \t ' + $elem[0]);
            var googleChart = new google.visualization[$attr.googleChart]($elem[0]);
            googleChart.draw(dt, options)
        }
    }
});