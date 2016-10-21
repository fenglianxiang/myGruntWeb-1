/**
 * Created by Administrator on 2016/10/20.
 */
/*怎么将controller和route分到两个文件里呢，我草迷茫了。到底是他妈哪里错了。
* */

angular.module("myApp",["ngRoute"])
.controller("MyController",function($scope,$location){
    $scope.$on("$viewContentLoaded",function(){
        console.log("ng-view content loaded!");
    });

    $scope.$on("$routeChangeStart",function(event,next,current){
        //event.preventDefault(); //cancel url change
        console.log("route change start!");
    });

    $scope.progress = function(){
        NProgress.start();
        setTimeout(NProgress.done,3500)
    };
})
.controller("loginController",function($scope){
    $scope.login = function(){

    }
})
.controller("totleController",function($scope){

    $scope.tot = {
        name:"jili",
        class:'yaogan',
        en:"50",
        cn:'60',
        math:'80'
    }

})
    .config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/home',{
                templateUrl:"../temp/ng-home.html"
            })
            .when('/login',{
                templateUrl:"../temp/ng-login.html",
                //controller:'loginController'
            }).when('/total',{
            templateUrl:"../temp/ng-totle.html",
            //controller:'totleController'
        }).otherwise({
            redirectTo:'/home'
        })
    }]);

