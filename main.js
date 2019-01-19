
performGetRequest1();
performGetRequest2();

function performGetRequest1(){
  var axios = require('axios');
  axios.get('https://api.fda.gov/drug/event.json?search=patient.drug.openfda.pharm_class_epc:"nonsteroidal+anti-inflammatory+drug"&count=patient.reaction.reactionmeddrapt.exact')
    .then(function (response) {
      Success(response.data.results);
    })
    .catch(function (error) {
      ErrorHTML(error);
    });
}

function performGetRequest2(){
  todoId = process.argv[2];
  var axios = require('axios');
 
  axios.get('https://api.fda.gov/food/event.json', {
    params: {
      search: "products.industry_code."+todoId
    }
  })
    .then(function (response) {
      Success(response.data.results);
    })
    .catch(function (error) {
      ErrorHTML(error);
    });
}

function Success(response) {
    console.log(  '<h4>Result:</h4>' +
    '<pre>' + JSON.stringify(response, null, '\t') + '</pre>');
  }
  
  function ErrorHTML(error) {
    console.log(  '<h4>Result:</h4>' +
            '<h5>Message:</h5>' +
            '<pre>' + error.message + '</pre>' +
            '<h5>Status:</h5>' +
            '<pre>' + error.response.status + ' ' + error.response.statusText + '</pre>' +
            '<h5>Headers:</h5>' +
            '<pre>' + JSON.stringify(error.response.headers, null, '\t') + '</pre>' +
            '<h5>Data:</h5>' +
            '<pre>' + JSON.stringify(error.response.data, null, '\t') + '</pre>');
  }