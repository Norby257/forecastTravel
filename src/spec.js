describe('ForecastController', function() {
    beforeEach(module('forecastTravelApp'));

    it('should create a `forecast` model with today and five day forecast', inject(function($controller){
        var scope = {};
        var ctrl = $controller('ForecastController', {$scope: scope});

        expect(scope.forecast.length).toBe(6);
    }));
});