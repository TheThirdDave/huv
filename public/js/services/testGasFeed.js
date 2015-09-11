(function() {
    'use strict';
    var testGasFeed = function() {

        var getNearbyGasStationsByPrice = function() {
            return {"status":{"error":"NO","code":200,"description":"none","message":"Request ok"},"geoLocation":{"country_short":"US","address":"Mason Place Northeast","lat":"47.6605176","lng":"-122.3031784","country_long":"United States","region_short":"WA","region_long":"WA","city_long":"Seattle"},"stations":[{"country":"United States","zip":"98105","reg_price":"3.14","mid_price":"3.26","pre_price":"3.38","diesel_price":"N\/A","reg_date":"1 day ago","mid_date":"1 day ago","pre_date":"1 day ago","diesel_date":"1 day ago","address":"101 Ne 50th St","diesel":"1","id":"103507","lat":"47.665020","lng":"-122.327988","station":"7-Eleven","region":"Washington","city":"Seattle","distance":"1.2 miles"},{"country":"United States","zip":"98103","reg_price":"3.15","mid_price":"3.49","pre_price":"3.59","diesel_price":"3.59","reg_date":"23 hours ago","mid_date":"23 hours ago","pre_date":"23 hours ago","diesel_date":"23 hours ago","address":"1420 N 45th St","diesel":"1","id":"103592","lat":"47.661381","lng":"-122.339951","station":"Chevron","region":"Washington","city":"Seattle","distance":"1.7 miles"},{"country":"United States","zip":"98105","reg_price":"3.15","mid_price":"3.25","pre_price":"3.39","diesel_price":"3.29","reg_date":"1 day ago","mid_date":"1 day ago","pre_date":"1 day ago","diesel_date":"1 day ago","address":"4557 Brooklyn Ave Ne","diesel":"1","id":"103511","lat":"47.662800","lng":"-122.314232","station":"76","region":"Washington","city":"Seattle","distance":"0.5 miles"},{"country":"United States","zip":"98105","reg_price":"3.15","mid_price":"3.25","pre_price":"3.35","diesel_price":"N\/A","reg_date":"1 day ago","mid_date":"1 day ago","pre_date":"1 day ago","diesel_date":"1 day ago","address":"4359 Roosevelt Way Ne","diesel":"1","id":"103510","lat":"47.660961","lng":"-122.317749","station":"76","region":"Washington","city":"Seattle","distance":"0.7 miles"},{"country":"United States","zip":"98103","reg_price":"3.16","mid_price":"3.28","pre_price":"3.40","diesel_price":"N\/A","reg_date":"24 hours ago","mid_date":"24 hours ago","pre_date":"24 hours ago","diesel_date":"24 hours ago","address":"3939 Stone Way N","diesel":"1","id":"103593","lat":"47.654911","lng":"-122.342468","station":"7-Eleven","region":"Washington","city":"Seattle","distance":"1.9 miles"},{"country":"United States","zip":"98115","reg_price":"3.17","mid_price":"3.29","pre_price":"3.39","diesel_price":"3.39","reg_date":"24 hours ago","mid_date":"24 hours ago","pre_date":"24 hours ago","diesel_date":"24 hours ago","address":"2424 Ne 65th St","diesel":"1","id":"103620","lat":"47.675781","lng":"-122.301430","station":"Chevron","region":"Washington","city":"Seattle","distance":"1.1 miles"},{"country":"United States","zip":"98115","reg_price":"3.17","mid_price":"3.29","pre_price":"3.39","diesel_price":"N\/A","reg_date":"24 hours ago","mid_date":"24 hours ago","pre_date":"24 hours ago","diesel_date":"24 hours ago","address":"2501 Ne 75th St","diesel":"1","id":"103631","lat":"47.683071","lng":"-122.300072","station":"Shell","region":"Washington","city":"Seattle","distance":"1.6 miles"},{"country":"United States","zip":"98115","reg_price":"3.19","mid_price":"3.39","pre_price":"3.49","diesel_price":"3.49","reg_date":"23 hours ago","mid_date":"23 hours ago","pre_date":"23 hours ago","diesel_date":"23 hours ago","address":"7501 Roosevelt Way Ne","diesel":"1","id":"103623","lat":"47.683529","lng":"-122.317520","station":"Shell","region":"Washington","city":"Seattle","distance":"1.7 miles"},{"country":"United States","zip":"98115","reg_price":"3.19","mid_price":"3.29","pre_price":"3.39","diesel_price":"3.39","reg_date":"23 hours ago","mid_date":"23 hours ago","pre_date":"23 hours ago","diesel_date":"23 hours ago","address":"812 Ne 65th St","diesel":"1","id":"103629","lat":"47.675850","lng":"-122.319153","station":"Shell","region":"Washington","city":"Seattle","distance":"1.3 miles"},{"country":"United States","zip":"98115","reg_price":"3.19","mid_price":"3.35","pre_price":"3.45","diesel_price":"N\/A","reg_date":"24 hours ago","mid_date":"24 hours ago","pre_date":"24 hours ago","diesel_date":"24 hours ago","address":"7300 35th Ave Ne","diesel":"1","id":"103602","lat":"47.681549","lng":"-122.290443","station":"Chevron","region":"Washington","city":"Seattle","distance":"1.6 miles"},{"country":"United States","zip":"98105","reg_price":"3.19","mid_price":"3.29","pre_price":"3.39","diesel_price":"3.39","reg_date":"1 day ago","mid_date":"1 day ago","pre_date":"1 day ago","diesel_date":"1 day ago","address":"210 Ne 45th St","diesel":"1","id":"103513","lat":"47.661339","lng":"-122.327042","station":"Shell","region":"Washington","city":"Seattle","distance":"1.1 miles"},{"country":"United States","zip":"98105","reg_price":"3.19","mid_price":"3.39","pre_price":"3.49","diesel_price":"N\/A","reg_date":"2 days ago","mid_date":"2 days ago","pre_date":"2 days ago","diesel_date":"2 days ago","address":"5100 25th Ave Ne","diesel":"1","id":"103509","lat":"47.666901","lng":"-122.300629","station":"Circle K","region":"Washington","city":"Seattle","distance":"0.5 miles"},{"country":"United States","zip":"98105","reg_price":"3.19","mid_price":"3.29","pre_price":"3.39","diesel_price":"3.29","reg_date":"24 hours ago","mid_date":"24 hours ago","pre_date":"24 hours ago","diesel_date":"24 hours ago","address":"4700 Brooklyn Ave Ne","diesel":"1","id":"103508","lat":"47.663559","lng":"-122.314209","station":"Chevron","region":"Washington","city":"Seattle","distance":"0.6 miles"},{"country":"United States","zip":"98105","reg_price":"3.19","mid_price":"3.29","pre_price":"3.39","diesel_price":"3.29","reg_date":"24 hours ago","mid_date":"24 hours ago","pre_date":"24 hours ago","diesel_date":"24 hours ago","address":"1013 Ne 45th St","diesel":"1","id":"103506","lat":"47.661320","lng":"-122.316887","station":"Shell","region":"Washington","city":"Seattle","distance":"0.6 miles"},{"country":"United States","zip":"98112","reg_price":"3.24","mid_price":"3.38","pre_price":"3.49","diesel_price":"N\/A","reg_date":"24 hours ago","mid_date":"24 hours ago","pre_date":"24 hours ago","diesel_date":"24 hours ago","address":"2625 E Montlake Pl E","diesel":"1","id":"103491","lat":"47.643673","lng":"-122.303749","station":"76","region":"Washington","city":"Seattle","distance":"1.2 miles"},{"country":"United States","zip":"98105","reg_price":"3.29","mid_price":"3.44","pre_price":"3.59","diesel_price":"N\/A","reg_date":"1 day ago","mid_date":"1 day ago","pre_date":"1 day ago","diesel_date":"1 day ago","address":"5450 Sand Point Way Ne","diesel":"1","id":"103512","lat":"47.668282","lng":"-122.274086","station":"76","region":"Washington","city":"Seattle","distance":"1.5 miles"},{"country":"United States","zip":"98105","reg_price":"3.95","mid_price":"N\/A","pre_price":"N\/A","diesel_price":"N\/A","reg_date":"11 months ago","mid_date":"11 months ago","pre_date":"11 months ago","diesel_date":"11 months ago","address":"4550 Union Bay Pl Ne","diesel":"1","id":"103514","lat":"47.661854","lng":"-122.293365","station":"Unbranded","region":"Washington","city":"Seattle","distance":"0.5 miles"}]};
        };

        var getNearbyGasStationsByDistance = function() {
            return {"status":{"error":"NO","code":200,"description":"none","message":"Request ok"},"geoLocation":{"country_short":"US","address":"Mason Place Northeast","lat":"47.6605176","lng":"-122.3031784","country_long":"United States","region_short":"WA","region_long":"WA","city_long":"Seattle"},"stations":[{"country":"United States","zip":"98105","reg_price":"3.19","mid_price":"3.39","pre_price":"3.49","diesel_price":"N\/A","reg_date":"2 days ago","mid_date":"2 days ago","pre_date":"2 days ago","diesel_date":"2 days ago","address":"5100 25th Ave Ne","diesel":"1","id":"103509","lat":"47.666901","lng":"-122.300629","station":"Circle K","region":"Washington","city":"Seattle","distance":"0.5 miles"},{"country":"United States","zip":"98105","reg_price":"3.95","mid_price":"N\/A","pre_price":"N\/A","diesel_price":"N\/A","reg_date":"11 months ago","mid_date":"11 months ago","pre_date":"11 months ago","diesel_date":"11 months ago","address":"4550 Union Bay Pl Ne","diesel":"1","id":"103514","lat":"47.661854","lng":"-122.293365","station":"Unbranded","region":"Washington","city":"Seattle","distance":"0.5 miles"},{"country":"United States","zip":"98105","reg_price":"3.15","mid_price":"3.25","pre_price":"3.39","diesel_price":"3.29","reg_date":"1 day ago","mid_date":"1 day ago","pre_date":"1 day ago","diesel_date":"1 day ago","address":"4557 Brooklyn Ave Ne","diesel":"1","id":"103511","lat":"47.662800","lng":"-122.314232","station":"76","region":"Washington","city":"Seattle","distance":"0.5 miles"},{"country":"United States","zip":"98105","reg_price":"3.19","mid_price":"3.29","pre_price":"3.39","diesel_price":"3.29","reg_date":"1 day ago","mid_date":"1 day ago","pre_date":"1 day ago","diesel_date":"1 day ago","address":"4700 Brooklyn Ave Ne","diesel":"1","id":"103508","lat":"47.663559","lng":"-122.314209","station":"Chevron","region":"Washington","city":"Seattle","distance":"0.6 miles"},{"country":"United States","zip":"98105","reg_price":"3.19","mid_price":"3.29","pre_price":"3.39","diesel_price":"3.29","reg_date":"1 day ago","mid_date":"1 day ago","pre_date":"1 day ago","diesel_date":"1 day ago","address":"1013 Ne 45th St","diesel":"1","id":"103506","lat":"47.661320","lng":"-122.316887","station":"Shell","region":"Washington","city":"Seattle","distance":"0.6 miles"},{"country":"United States","zip":"98105","reg_price":"3.15","mid_price":"3.25","pre_price":"3.35","diesel_price":"N\/A","reg_date":"1 day ago","mid_date":"1 day ago","pre_date":"1 day ago","diesel_date":"1 day ago","address":"4359 Roosevelt Way Ne","diesel":"1","id":"103510","lat":"47.660961","lng":"-122.317749","station":"76","region":"Washington","city":"Seattle","distance":"0.7 miles"},{"country":"United States","zip":"98115","reg_price":"3.17","mid_price":"3.29","pre_price":"3.39","diesel_price":"3.39","reg_date":"1 day ago","mid_date":"1 day ago","pre_date":"1 day ago","diesel_date":"1 day ago","address":"2424 Ne 65th St","diesel":"1","id":"103620","lat":"47.675781","lng":"-122.301430","station":"Chevron","region":"Washington","city":"Seattle","distance":"1.1 miles"},{"country":"United States","zip":"98105","reg_price":"3.19","mid_price":"3.29","pre_price":"3.39","diesel_price":"3.39","reg_date":"1 day ago","mid_date":"1 day ago","pre_date":"1 day ago","diesel_date":"1 day ago","address":"210 Ne 45th St","diesel":"1","id":"103513","lat":"47.661339","lng":"-122.327042","station":"Shell","region":"Washington","city":"Seattle","distance":"1.1 miles"},{"country":"United States","zip":"98112","reg_price":"3.24","mid_price":"3.38","pre_price":"3.49","diesel_price":"N\/A","reg_date":"1 day ago","mid_date":"1 day ago","pre_date":"1 day ago","diesel_date":"1 day ago","address":"2625 E Montlake Pl E","diesel":"1","id":"103491","lat":"47.643673","lng":"-122.303749","station":"76","region":"Washington","city":"Seattle","distance":"1.2 miles"},{"country":"United States","zip":"98105","reg_price":"3.14","mid_price":"3.26","pre_price":"3.38","diesel_price":"N\/A","reg_date":"1 day ago","mid_date":"1 day ago","pre_date":"1 day ago","diesel_date":"1 day ago","address":"101 Ne 50th St","diesel":"1","id":"103507","lat":"47.665020","lng":"-122.327988","station":"7-Eleven","region":"Washington","city":"Seattle","distance":"1.2 miles"},{"country":"United States","zip":"98115","reg_price":"3.19","mid_price":"3.29","pre_price":"3.39","diesel_price":"3.39","reg_date":"23 hours ago","mid_date":"23 hours ago","pre_date":"23 hours ago","diesel_date":"23 hours ago","address":"812 Ne 65th St","diesel":"1","id":"103629","lat":"47.675850","lng":"-122.319153","station":"Shell","region":"Washington","city":"Seattle","distance":"1.3 miles"},{"country":"United States","zip":"98105","reg_price":"3.29","mid_price":"3.44","pre_price":"3.59","diesel_price":"N\/A","reg_date":"1 day ago","mid_date":"1 day ago","pre_date":"1 day ago","diesel_date":"1 day ago","address":"5450 Sand Point Way Ne","diesel":"1","id":"103512","lat":"47.668282","lng":"-122.274086","station":"76","region":"Washington","city":"Seattle","distance":"1.5 miles"},{"country":"United States","zip":"98115","reg_price":"3.17","mid_price":"3.29","pre_price":"3.39","diesel_price":"N\/A","reg_date":"1 day ago","mid_date":"1 day ago","pre_date":"1 day ago","diesel_date":"1 day ago","address":"2501 Ne 75th St","diesel":"1","id":"103631","lat":"47.683071","lng":"-122.300072","station":"Shell","region":"Washington","city":"Seattle","distance":"1.6 miles"},{"country":"United States","zip":"98115","reg_price":"3.19","mid_price":"3.35","pre_price":"3.45","diesel_price":"N\/A","reg_date":"1 day ago","mid_date":"1 day ago","pre_date":"1 day ago","diesel_date":"1 day ago","address":"7300 35th Ave Ne","diesel":"1","id":"103602","lat":"47.681549","lng":"-122.290443","station":"Chevron","region":"Washington","city":"Seattle","distance":"1.6 miles"},{"country":"United States","zip":"98103","reg_price":"3.15","mid_price":"3.49","pre_price":"3.59","diesel_price":"3.59","reg_date":"23 hours ago","mid_date":"23 hours ago","pre_date":"23 hours ago","diesel_date":"23 hours ago","address":"1420 N 45th St","diesel":"1","id":"103592","lat":"47.661381","lng":"-122.339951","station":"Chevron","region":"Washington","city":"Seattle","distance":"1.7 miles"},{"country":"United States","zip":"98115","reg_price":"3.19","mid_price":"3.39","pre_price":"3.49","diesel_price":"3.49","reg_date":"23 hours ago","mid_date":"23 hours ago","pre_date":"23 hours ago","diesel_date":"23 hours ago","address":"7501 Roosevelt Way Ne","diesel":"1","id":"103623","lat":"47.683529","lng":"-122.317520","station":"Shell","region":"Washington","city":"Seattle","distance":"1.7 miles"},{"country":"United States","zip":"98103","reg_price":"3.16","mid_price":"3.28","pre_price":"3.40","diesel_price":"N\/A","reg_date":"1 day ago","mid_date":"1 day ago","pre_date":"1 day ago","diesel_date":"1 day ago","address":"3939 Stone Way N","diesel":"1","id":"103593","lat":"47.654911","lng":"-122.342468","station":"7-Eleven","region":"Washington","city":"Seattle","distance":"1.9 miles"}]};
        };

        return {
            getNearbyGasStationsByPrice: getNearbyGasStationsByPrice,
            getNearbyGasStationsByDistance: getNearbyGasStationsByDistance
        };
    };

    var module = angular.module("vroomApp");
    module.factory("testGasFeed", testGasFeed);
})();
