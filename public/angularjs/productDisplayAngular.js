var productDisplayAngular= angular.module("productDisplayAngular",[]);
productDisplayAngular.controller("ProductDisplayAngular",['$scope','$http','sendProductId',function($scope,$http,sendProductId)
    {
        $scope.isLoggedIn = false;
            $http({

                method: "POST",
                url: '/getProductDetails',
                data: {
                    "productId": sendProductId
                }

            }).then(function (res) {
                $scope.displayProductDetails = res.data.productDetails;
                $scope.farmerName=res.data.farmerName;
            });

            $http({

                method: "POST",
                url: '/getLoggedInUserDetails',
                data: {
                }

            }).then(function (res) {
                    $scope.firstName = res.data.firstName;
                    $scope.lastName = res.data.lastName;
                    $scope.email = res.data.email;
                    $scope.city = res.data.city;
                    $scope.userId = res.data.userId;
                    if(res.data.firstName)
                    {
                        $scope.isLoggedIn = true;
                    }
            });

    }
]);

productDisplayAngular.controller("LoggedInUserDetails",['$scope','$http',function($scope,$http)
    {
            

    }
]);