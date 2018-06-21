//  render searchbox component to forcast app 
angular.module('forecastTravelApp')
    .component('searchboxComponent', {
        controller: function () {
            this.label = 'searchbox component'
        },
        templateUrl: 'src/components/firstcomponent/index.html'
    })