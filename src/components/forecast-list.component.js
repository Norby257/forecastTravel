//  register forecastList, with controller and template 
//  current temperature and chance of rain 
angular.module('forecastTravelApp').component('forecastList', {
    template:
    '<ul>' +
    '<li ng-repeat="forecast in $ctrl.forecast"> ' + 
    '<span>{{}}</span>' +
    '<p>{{}}</span>' +
    '</li>' +
    '</ul>',
    controller: function forecastListController() {
        this.forecast = [
            {

            }
        ]
    }

});
