var log_ut = angular.module('log_ut', []);

function mainController($scope, $http) {
    $scope.formData = {};
    $scope.filters = { };

    // when landing on the page, get all todos and show them
    $http.get('/api/items')
        .success(function(data) {
            $scope.tab = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $http.get('/api/categories')
            .success(function(data) {
                $scope.tab_cat = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });

    // when submitting the add form, send the text to the node API
    /*$scope.createReservation = function() {
        $http.post('/api/reservation', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // delete a todo after checking it
    $scope.deleteTodo = function(id) {
        $http.delete('/api/todos/' + id)
            .success(function(data) {
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
    */
}
