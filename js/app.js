(function(){
'use strict';
  angular.module('mdlApp',[])

  .controller('mdlController',function($scope){
    $scope.check = function(){
      if($scope.dishesText == undefined || $scope.dishesText ==""){
        alert("Please enter data first");
      }else{
        var str = $scope.dishesText;
        var array = str.split(',');
  //      for(var i = 0;i<array.length;i++ ){
          if(array.length <= 3){
            alert("Enjoy!");
          //  break;
          }else{
            alert("Too much!");
          //  break;
          }
      //  }
      }
    }

  });

})();
