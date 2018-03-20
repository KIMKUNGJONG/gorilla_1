angular.module('gorilla.directives', [])

.directive('img', function($parse) {
	function endsWith(url, path) {
			var index = url.length - path.length;
			return url.indexOf(path, index) !== -1;
	}

	return {
			restrict: 'E',
			link: function (scope, element, attributes) {

					element.on('error', function (ev) {
							var src = this.src;
							var fn = attributes.ngError && $parse(attributes.ngError);
							// If theres an ng-error callback then call it
							if (fn) {
									scope.$apply(function () {
											fn(scope, { $event: ev, $src: src });
									});
							}

							// If theres an ng-error-src then set it
							if (attributes.ngErrorSrc && !endsWith(src, attributes.ngErrorSrc)) {
									element.attr('src', attributes.ngErrorSrc);
							}
					});

					element.on('load', function (ev) {
							var fn = attributes.ngSuccess && $parse(attributes.ngSuccess);
							if (fn) {
									scope.$apply(function () {
											fn(scope, { $event: ev });
									});
							}
					});
			}
		}
})
.directive('tnfDblBackExit', function ($ionicPlatform, $timeout) {
	return {
		scope: {},
		restrict: 'E',
		template: '<div class="double-press-exit-label"><span class="label">Press Again To Exit</span></div>',
		replace: true,
		transclude: true,
		link: function($scope, iElm, iAttrs, controller) {
			var exitApp = 0;

			var backButtonHandler = $ionicPlatform.registerBackButtonAction(function (e) {
				e.preventDefault();

				if (exitApp === 1) {
					$scope.hide();
					ionic.Platform.exitApp();
				} else {
					$scope.show();
					exitApp++;
				}
			}, 100);

			$scope.$on('$destroy', function () {
				backButtonHandler();
			});

			$scope.show = function () {
				iElm.addClass('show');
				$timeout(function(){
					exitApp = 0;
					$scope.hide();
				}, 1500);
			};

			$scope.hide = function () {
				iElm.removeClass('show');
			};

			$scope.hide();
		}
	};
})
.directive('tnfSignaturePad', function ($ionicModal) {
var canvas = null,
	ratio = 0.5;

return {
	scope: {
		signature: '=ngModel'
	},
	link: function ($scope, $element, $attrs, $controller) {
		$scope.signaturePadModel = {};

		$ionicModal.fromTemplateUrl('views/app/modalSignature.html', {
			animation: 'slide-in-up',
			scope: $scope,
		}).then(function(modal) {
			$scope.signatureModal = modal;
		});

		$scope.$on('$destroy', function () {
			$scope.signatureModal.remove();
		});

		$scope.openSignatureModal = function () {
			$scope.signatureModal.show();
			canvas = angular.element($scope.signatureModal.modalEl).find('canvas')[0];

			$scope.signaturePad = new SignaturePad(canvas, {
				backgroundColor: '#FFF',
				minWidth: 1,
				maxWidth: 1.5,
				dotSize: 3,
				penColor: 'rgb(66, 133, 244)',
				onEnd: function () {
					$scope.signature = $scope.signaturePad.toDataURL();
				}
			});

			if ($scope.signature) {
				$scope.signaturePad.fromDataURL($scope.signature);
			}
			$scope.resizeCanvas();
		};

		$scope.resizeCanvas = function () {
			var ratio = 0.45;
			canvas.width = canvas.offsetWidth * ratio;
			canvas.height = canvas.offsetHeight * ratio;
			canvas.getContext('2d').scale(ratio, ratio);
		};

		$scope.clear = function () {
			$scope.signaturePadModel.signatureConfirm = false;
			$scope.signaturePad.clear();
			$scope.signature = null;
		};

		$scope.save = function () {
			$scope.signaturePadModel = {};
			$scope.signatureModal.hide();
		};
	},
	require: 'ngModel',
	replace: true,
	restrict: 'EA',
	templateUrl: 'views/app/signatureButton.html'
};
})
.directive('autolinker', function($timeout) {
	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
				$timeout(function () {
						var eleHtml = element.html();

						if (eleHtml === '') {
								return false;
						}

						var text = Autolinker.link(eleHtml, {
								className: 'autolinker',
								newWindow: false
						});

						element.html(text);

						var autolinks = element[0].getElementsByClassName('autolinker');

						for (var i = 0; i < autolinks.length; i++) {
								angular.element(autolinks[i]).bind('click', function (e) {
										var href = e.target.href;
										if (href) {
												//window.open(href, '_system');
												if(e.target.protocol == "tel:"){
													window.open(href, '_system');
												}else{
													window.open(href, '_blank');
												}
										}
										e.preventDefault();
										return false;
								});
						}
				}, 0);
		}
}
})
.directive('myTabs', function() {
	return {
		restrict: 'E',
		transclude: true,
		scope: {},
		controller: function($scope) {
			var tabs = $scope.tabs = [];

			$scope.select = function(tab) {
				angular.forEach(tabs, function(tab) {
					tab.selected = false;
				});
				tab.selected = true;
				$scope.$emit('my-tabs-changed', tab);
			};

			this.addTab = function(tab) {
				if (tabs.length === 0) {
					$scope.select(tab);
				}
				tabs.push(tab);
			};
		},
		templateUrl: 'views/common/my-tabs.html'
	};
})

.directive('validPin', function($http) {
	return {
		require: 'ngModel',
		link: function(scope, ele, attrs, c) {
			scope.$watch(attrs.ngModel, function(pinValue) {
				// $http({
				// 	method: 'POST',
				// 	url: '/api/check/' + attrs.validPin,
				// 	data: {'pin': attrs.validPin}
				// }).success(function(data, status, headers, cfg) {
				// 	c.$setValidity('valid-pin', data.isValid);
				// }).error(function(data, status, headers, cfg) {
				// 	c.$setValidity('valid-pin', false);
				// });
				if(pinValue=="12345")
				{
					c.$setValidity('valid-pin', true);
				}
				else
				{
					c.$setValidity('valid-pin', false);
				}
			});
		}
	};
})


.directive('showHideContainer', function(){
	return {
		scope: {
		},
		controller: function($scope, $element, $attrs) {
			$scope.show = false;

			$scope.toggleType = function($event){
				$event.stopPropagation();
				$event.preventDefault();

				$scope.show = !$scope.show;

				// Emit event
				$scope.$broadcast("toggle-type", $scope.show);
			};
		},
		templateUrl: 'views/common/show-hide-password.html',
		restrict: 'A',
		replace: false,
		transclude: true
	};
})


.directive('showHideInput', function(){
	return {
		scope: {
		},
		link: function(scope, element, attrs) {
			// listen to event
			scope.$on("toggle-type", function(event, show){
				var password_input = element[0],
						input_type = password_input.getAttribute('type');

				if(!show)
				{
					password_input.setAttribute('type', 'password');
				}

				if(show)
				{
					password_input.setAttribute('type', 'text');
				}
			});
		},
		require: '^showHideContainer',
		restrict: 'A',
		replace: false,
		transclude: false
	};
})


.directive('biggerText', function($ionicGesture) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			$ionicGesture.on('touch', function(event){
				event.stopPropagation();
				event.preventDefault();

				var text_element = document.querySelector(attrs.biggerText),
						root_element = document.querySelector(".menu-content"),
						current_size_str = window.getComputedStyle(text_element, null).getPropertyValue('font-size'),
						current_size = parseFloat(current_size_str),
						new_size = Math.min((current_size+2), 24),
						new_size_str = new_size + 'px';

				root_element.classList.remove("post-size-"+current_size_str);
				root_element.classList.add("post-size-"+new_size_str);
			}, element);
		}
	};
})

.directive('smallerText', function($ionicGesture) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			$ionicGesture.on('touch', function(event){
				event.stopPropagation();
				event.preventDefault();

				var text_element = document.querySelector(attrs.smallerText),
				root_element = document.querySelector(".menu-content"),
				current_size_str = window.getComputedStyle(text_element, null).getPropertyValue('font-size'),
				current_size = parseFloat(current_size_str),
				new_size = Math.max((current_size-2), 12),
				new_size_str = new_size + 'px';

				root_element.classList.remove("post-size-"+current_size_str);
				root_element.classList.add("post-size-"+new_size_str);
			}, element);
		}
	};
})

.directive('ionicYoutubeVideo', function($timeout, $ionicPlatform, youtubeEmbedUtils) {
	return {
		restrict: 'E',
		scope: {
			videoId: '@'
		},
		controller: function($scope, $element, $attrs) {
			$scope.playerVars = {
				rel: 0,
				showinfo: 0
			};
			$ionicPlatform.on("pause", function(){
				var yt_ready = youtubeEmbedUtils.ready;
				if(yt_ready)
				{
					$scope.yt_video.stopVideo();
				}
		  });
		},
		templateUrl: 'views/common/ionic-youtube-video.html',
		replace: false
	};
})

.directive('postContent', function($timeout, _, $compile) {
	return {
		restrict: 'A',
		scope: {},
		link: function(scope, element, attrs) {
			/**
			 * JavaScript function to match (and return) the video Id
			 * of any valid Youtube Url, given as input string.
			 * @author: Stephan Schmitz <eyecatchup@gmail.com>
			 * @url: http://stackoverflow.com/a/10315969/624466
			 */
			//  Ver: https://regex101.com/r/tY9jN6/1
			function ytVidId(url) {
			  var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11,})(?:\S+)?$/gmi;
			  return (url.match(p)) ? RegExp.$1 : false;
			}

			$timeout(function(){
				var iframes = element.find('iframe');
				if(iframes.length > 0)
				{
					angular.forEach(iframes, function(i) {

						var iframe = angular.element(i),
								youtube_video_id = ((iframe.length > 0) && (!_.isUndefined(iframe[0].src))) ? ytVidId(iframe[0].src) : false;
						if(youtube_video_id !== false)
						{
							// Then it's a youtube video, compile our custom directive
							var ionic_yt_video = $compile("<ionic-youtube-video video-id='"+youtube_video_id+"'></ionic-youtube-video>")(scope);
        			iframe.parent().append(ionic_yt_video);
							iframe.remove();
						}
					});
				}
			}, 10);
		}
	};
})

//Use this directive to open external links using inAppBrowser cordova plugin
.directive('dynamicAnchorFix', function($ionicGesture, $timeout, $cordovaInAppBrowser) {
	return {
		scope: {},
		link: function(scope, element, attrs) {
			$timeout(function(){
				var anchors = element.find('a');
				if(anchors.length > 0)
				{
					angular.forEach(anchors, function(a) {

						var anchor = angular.element(a);

						anchor.bind('click', function (event) {
							event.preventDefault();
							event.stopPropagation();

							var href = event.currentTarget.href;
							var	options = {};

							//inAppBrowser see documentation here: http://ngcordova.com/docs/plugins/inAppBrowser/

							$cordovaInAppBrowser.open(href, '_blank', options)
								.then(function(e) {
									// success
								})
								.catch(function(e) {
									// error
								});
						});

					});
				}
			}, 10);
		},
		restrict: 'A',
		replace: false,
		transclude: false
	};
})


.directive('multiBg', function(_){
	return {
		scope: {
			multiBg: '=',
			interval: '=',
			helperClass: '@'
		},
		controller: function($scope, $element, $attrs) {
			$scope.loaded = false;
			var utils = this;

			this.animateBg = function(){
				// Think i have to use apply because this function is not called from this controller ($scope)
				$scope.$apply(function () {
					$scope.loaded = true;
					$element.css({'background-image': 'url(' + $scope.bg_img + ')'});
				});
			};

			this.setBackground = function(bg) {
				$scope.bg_img = bg;
			};

			if(!_.isUndefined($scope.multiBg))
			{
				if(_.isArray($scope.multiBg) && ($scope.multiBg.length > 1) && !_.isUndefined($scope.interval) && _.isNumber($scope.interval))
				{
					// Then we need to loop through the bg images
					utils.setBackground($scope.multiBg[0]);
				}
				else
				{
					// Then just set the multiBg image as background image
					utils.setBackground($scope.multiBg[0]);
				}
			}
		},
		templateUrl: 'views/common/multi-bg.html',
		restrict: 'A',
		replace: true,
		transclude: true
	};
})


.directive('bg', function() {
	return {
		restrict: 'A',
		require: '^multiBg',
		scope: {
			ngSrc: '@'
		},
		link: function(scope, element, attr, multiBgController) {
			element.on('load', function() {
				multiBgController.animateBg();
		  });
		}
	};
})

.directive('preImg', function() {
	return {
		restrict: 'E',
		transclude: true,
		scope: {
			ratio:'@',
			helperClass: '@'
		},
		controller: function($scope) {
			$scope.loaded = false;

			this.hideSpinner = function(){
				// Think i have to use apply because this function is not called from this controller ($scope)
				$scope.$apply(function () {
					$scope.loaded = true;
				});
			};
		},
		templateUrl: 'views/common/pre-img.html'
	};
})

.directive('spinnerOnLoad', function() {
	return {
		restrict: 'A',
		require: '^preImg',
		scope: {
			ngSrc: '@'
		},
		link: function(scope, element, attr, preImgController) {
			element.on('load', function() {
				preImgController.hideSpinner();
		  });
		}
	};
})
.directive('selectOnClick', ['$window', function ($window) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.on('click', function () {
                if (!$window.getSelection().toString()) {
                    // Required for mobile Safari
                    this.setSelectionRange(0, this.value.length)
                }
            });
        }
    };
}])
.directive('numbersOnly', function () {

    return {
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, element, attrs, modelCtrl) {
            modelCtrl.$parsers.push(function (inputValue) {
                if (inputValue == undefined)
                    return '';
                var transformedInput = inputValue.replace(/[^0-9]/g, '');
                if (transformedInput !== inputValue) {
                    modelCtrl.$setViewValue(transformedInput);
                    modelCtrl.$render();
                }
                return transformedInput;
            });
        }
    };
})
.directive('focusOn', function() {
   return function(scope, elem, attr) {
      scope.$on(attr.focusOn, function(e) {
          elem[0].focus();
      });
   };
})
.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});
