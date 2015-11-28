var itemApp = angular.module('itemApp', []);

itemApp.controller('PanierListCtrl', function ($scope) {
  $scope.items = [
    {'name': 'Moisonneuse Batteuse',
     'description': 'blabla moisonneuse.'},
    {'name': 'Costume',
     'description': 'Pour passer la moisonneuse avec classe.'},
    {'name': 'Shamppoing™',
     'description': 'Le foin ca salit les cheveux.'}
  ];
});