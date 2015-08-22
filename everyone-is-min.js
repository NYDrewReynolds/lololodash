var _ = require('lodash');

var worker = function (collection) {
  var hot_cities  = [];
  var warm_cities = [];

  function isHot (collection) {
    return collection > 19;
  }

  _.forEach(collection, function (city, name) {
    if (_.every(city, isHot)) {
      hot_cities.push(name);
    } else if (_.some(city, isHot)) {
      warm_cities.push(name);
    }
  });

  return { hot: hot_cities, warm: warm_cities};
};

module.exports = worker;
