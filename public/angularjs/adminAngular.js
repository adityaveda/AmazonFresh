var adminNgApp = angular.module("adminNgApp", ['ngRoute']);

adminNgApp.config(['$routeProvider', function($routeProvider) {
   $routeProvider.

   when('/apprReqCustomer', {
      templateUrl: 'apprReqCustomer', controller: 'ApprReqCustomer'
   }).
   when('/apprReqFarmer', {
      templateUrl: 'apprReqFarmer', controller: 'ApprReqFarmer'
   }).
   when('/apprReqProduct', {
      templateUrl: 'apprReqProduct', controller: 'ApprReqProduct'
   }).
   when('/',{
      templateUrl: 'apprReqCustomer', controller: 'ApprReqCustomer'
   })

}]);

adminNgApp.controller('ApprReqCustomer', function($scope,$http) {

        $scope.showPendingCustReq = function(){
          console.log("ApprReqCustomer");
           $http({

            method:"POST",
            url:'/doShowPendingCustAprroval'

        }).success(function(data)
        {
            
            if(data.statusCode==200)
            {
              
                $scope.pendingCustomers = data.results
            }
        }).error(function(error) {
                $scope.unexpectedError = false;
                $scope.invalidLogin = true;
            });
      }
      $scope.showPendingCustReq();

        $scope.approveCustomer = function(customer_id){
          console.log("approveCustomer"+customer_id);
          $http({

            method:"POST",
            url:'/doApproveCustomer',
            data : {"customer_id" : customer_id}

        }).success(function(data)
        {
            
            if(data.statusCode==200)
            {
               
                $scope.showPendingCustReq();
            }
        }).error(function(error) {
                $scope.unexpectedError = false;
                $scope.invalidLogin = true;
            });
        }

        $scope.rejectCustomer = function(customer_id){
        
          console.log("RejectCustomer"+customer_id);
          $http({

            method:"POST",
            url:'/doRejectCustomer',
            data : {"customer_id" : customer_id}

        }).success(function(data)
        {
            
            if(data.statusCode==200)
            {
               
                $scope.showPendingCustReq();
            }
        }).error(function(error) {
                $scope.unexpectedError = false;
                $scope.invalidLogin = true;
            });
        }
      

});

adminNgApp.controller('ApprReqFarmer', function($scope,$http) {

   
          console.log("ApprReqFarmer");
           $http({

            method:"POST",
            url:'/doShowPendingFarmerAprroval'

        }).success(function(data)
        {
            
            if(data.statusCode==200)
            {
              
                $scope.pendingFarmers = data.results
            }
        }).error(function(error) {
                $scope.unexpectedError = false;
                $scope.invalidLogin = true;
            });
     
        $scope.approveFarmer = function(customer_id){
          console.log("approveFarmer"+customer_id);
          $http({

            method:"POST",
            url:'/doApproveFarmer',
            data : {"customer_id" : customer_id}

        }).success(function(data)
        {
            
            if(data.statusCode==200)
            {
               
                $scope.showPendingFarmerReq();
            }
        }).error(function(error) {
                $scope.unexpectedError = false;
                $scope.invalidLogin = true;
            });
        }

        $scope.rejectFarmer = function(customer_id){
        
          console.log("RejectFarmer"+customer_id);
          $http({

            method:"POST",
            url:'/doRejectFarmer',
            data : {"customer_id" : customer_id}

        }).success(function(data)
        {
            
            if(data.statusCode==200)
            {
               
                $scope.showPendingFarmerReq();
            }
        }).error(function(error) {
                $scope.unexpectedError = false;
                $scope.invalidLogin = true;
            });
        }

});

adminNgApp.controller('ApprReqProduct', function($scope) {

$scope.showPendingProductReq = function(){
          console.log("showPendingProductReq");
           $http({

            method:"POST",
            url:'/doShowPendingProductAprroval'

        }).success(function(data)
        {
            
            if(data.statusCode==200)
            {
              
                $scope.pendingProducts = data.results
            }
        }).error(function(error) {
                $scope.unexpectedError = false;
                $scope.invalidLogin = true;
            });
      }
      $scope.showPendingProductReq();

        $scope.approveProduct = function(product_id){
          console.log("approveProduct"+product_id);
          $http({

            method:"POST",
            url:'/doApproveProduct',
            data : {"product_id" : product_id}

        }).success(function(data)
        {
            
            if(data.statusCode==200)
            {
               
                $scope.showPendingProductReq();
            }
        }).error(function(error) {
                $scope.unexpectedError = false;
                $scope.invalidLogin = true;
            });
        }

        $scope.rejectProduct = function(product_id){
        
          console.log("rejectProduct"+product_id);
          $http({

            method:"POST",
            url:'/doRejectProduct',
            data : {"product_id" : product_id}

        }).success(function(data)
        {
            
            if(data.statusCode==200)
            {
               
                $scope.showPendingProductReq();
            }
        }).error(function(error) {
                $scope.unexpectedError = false;
                $scope.invalidLogin = true;
            });
        }
});

adminNgApp.controller('AdminPageCtrl', function($scope){
  $scope.activeCustomer = "active";
  $scope.activeFarmer = "";
  $scope.activeProduct = "";

  $scope.activateMe = function(option){
    if(option == 1){
      $scope.activeCustomer = "active";
      $scope.activeFarmer = "";
      $scope.activeProduct = "";
    }else if(option == 2){
      $scope.activeCustomer = "";
      $scope.activeFarmer = "active";
      $scope.activeProduct = "";
    }else if(option == 3){
      $scope.activeCustomer = "";
      $scope.activeFarmer = "";
      $scope.activeProduct = "active";
    }
  }
});