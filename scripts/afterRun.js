
module.exports = function(context) {
  var Q = context.requireCordovaModule('q');
  var deferred = Q.defer();
  var count = 0;
  console.log("--- start run ---");

  var waitConsole = function() {
    setTimeout( function() {
      console.log("--- now count = " + count + " ---");
      count += 1;
      if (count<10) {
        waitConsole();
      } else {
        deferred.resolve();
      }
    }, 1000);
  }
  waitConsole();

  return deferred.promise;
};
