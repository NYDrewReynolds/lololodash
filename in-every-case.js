var _ = require("lodash");

var worker = function(collection) {
  return _.forEach(collection, function(city){
    if(city.population >= 1) {
      city.size = 'big';
    } else if (city.population < 0.5) {
      city.size = 'small';
    } else {
      city.size = 'med';
    }
  });
};

module.exports = worker;
