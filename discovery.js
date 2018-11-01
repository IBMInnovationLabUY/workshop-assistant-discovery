function consultaDiscovery(query) {
  return new Promise(function(resolve, reject) {


 var DiscoveryV1 = require('watson-developer-cloud/discovery/v1');

var discovery = new DiscoveryV1({
    version: '2017-06-25',
    iam_apikey: '',
    url: ''
  });


    var environment_id = '';
    var collection_id = '';


    discovery.query({
      environment_id: environment_id,
      collection_id: collection_id,
      natural_language_query: query //Consulta a realizar
    }, function(error, data) {
        if (error) {
          reject(error);
        } else {
          //console.log(JSON.stringify(data, null, 2));
          resolve(JSON.stringify(data, null, 2));
        }
    });
  });
}

module.exports = consultaDiscovery;