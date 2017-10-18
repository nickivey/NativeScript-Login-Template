'use strict';
var menuItems,
    observable = require('data/observable'),
    navigationViewModel = new observable.Observable();

menuItems = [{"title":"Home View","moduleName":"components/homeView/homeView","icon":""},{"title":"Master Detail","moduleName":"components/masterDetailView/masterDetailView","icon":""},{"title":"Sign Out","moduleName":"components/homeView/homeView","icon":"","context":{"logout":true}}];

navigationViewModel.set('menuItems', menuItems);
navigationViewModel.set('backButtonHidden', true);

module.exports = navigationViewModel;