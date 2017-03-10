var sampleApp = angular.module('sampleApp', ['ui.router']);

sampleApp.config(function ($stateProvider, $urlRouterProvider) {
    //    $routeProvider
    //        .when('/viewListing', {
    //            controller: 'listingContr',
    //            templateUrl: '/partials/listItems.html'
    //        })
    //        .when('/itemDetails/:id', {
    //            controller: 'detailsContr',
    //            templateUrl: 'partials/itemDetails.html'
    //        })
    //        .otherwise({
    //            redirectTo: 'viewListing'
    //        });
    $stateProvider.state("details", {
        url: '/itemDetails/:id',
        templateUrl: 'partials/itemDetails.html',
        controller: 'detailsContr',
        resolve: {
            fetchData: function ($stateParams) {
                return $stateParams.id;
            }
        }
    });
    $stateProvider.state("listing", {
        url: '/viewListing',
        templateUrl: '/partials/listItems.html',
        controller: 'listingContr'
    });

    $urlRouterProvider.otherwise('/viewListing');
});



var factories = {};
var controllers = {};

factories.listFactory = function () {
    var factory = {};
    var items = [
        {
            name: 'Item1',
            id: 1,
            price: 100
        },
        {
            name: 'Item2',
            id: 2,
            price: 100
        },
        {
            name: 'Item3',
            id: 3,
            price: 100
        },
        {
            name: 'Item4',
            id: 4,
            price: 100
        },
        {
            name: 'Item5',
            id: 5,
            price: 100
        },
        {
            name: 'Item6',
            id: 6,
            price: 100
        },
        {
            name: 'Item7',
            id: 7,
            price: 100
        },
        {
            name: 'Item8',
            id: 8,
            price: 100
        },
        {
            name: 'Item9',
            id: 9,
            price: 100
        },
        {
            name: 'Item10',
            id: 10,
            price: 100
        },
        {
            name: 'Item11',
            id: 11,
            price: 100
        },
        {
            name: 'Item12',
            id: 12,
            price: 100
        }
    ];

    factory.getItems = function () {
        return items;
    };

    return factory;
};



//factories.detailsFactory = function (id, listFactory) {
//    var items = listFactory.getItems();
//    var result = {};
//    var factory = {};
//    factory.getDetails = function (id) {
//        //        for item in items {
//        //            if (item.id = id) {
//        //                result = item;
//        //                return result;
//        //            }
//        //        }
//        result = items[0];
//        return result;
//    }
//    return factory;
//};

controllers.listingContr = function ($scope, listFactory, $location) {
    $scope.items = {};
    $scope.items = listFactory.getItems();

    $scope.showDetails = function (id) {
        $location.path("#!/itemDetails/" + id);
    };
};

//
//controllers.detailsContr = function ($scope, details, detailsFactory) {
//    $scope.item = detailsFactory.getDetails(details);
//};

sampleApp.factory(factories);

sampleApp.controller(controllers);

sampleApp.factory('detailsFactory', ['id', function (id) {

    var factory = {};
    factory.getDetails = function () {
        return id;
    }
    return factory;
}]);

sampleApp.controller("detailsContr", ['$scope', '$stateParams', function ($scope, $stateParams) {
        $scope.item = $stateParams.id;
}
                                    ]);
