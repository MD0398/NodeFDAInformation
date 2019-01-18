function performGetRequest1(){
  var resultElement = document.getElementById('getResult1');
  resultElement.innerHTML = '';

  axios.get('https://api.fda.gov/drug/event.json?search=patient.drug.openfda.pharm_class_epc:"nonsteroidal+anti-inflammatory+drug"&count=patient.reaction.reactionmeddrapt.exact')
    .then(function (response) {
      resultElement.innerHTML = Success(response.data.results);
    })
    .catch(function (error) {
      resultElement.innerHTML = ErrorHTML(error);
    });
}

function performGetRequest2(){
  var resultElement = document.getElementById('getResult2');
  var todoId = document.getElementById('todoId').value;
  resultElement.innerHTML = '';

  axios.get('https://api.fda.gov/food/event.json', {
    params: {
      search: "products.industry_code."+todoId
    }
  })
    .then(function (response) {
      resultElement.innerHTML = Success(response.data.results);
    })
    .catch(function (error) {
      resultElement.innerHTML = ErrorHTML(error);
    });
}

function clearOutput() {
    var resultElement = document.getElementById('getResult1');
    resultElement.innerHTML = '';
    var resultElement = document.getElementById('getResult2');
    resultElement.innerHTML = '';
}


function Success(response) {
    return   '<h4>Result:</h4>' +
    '<pre>' + JSON.stringify(response, null, '\t') + '</pre>';
  }
  
  function ErrorHTML(error) {
    return  '<h4>Result:</h4>' +
            '<h5>Message:</h5>' +
            '<pre>' + error.message + '</pre>' +
            '<h5>Status:</h5>' +
            '<pre>' + error.response.status + ' ' + error.response.statusText + '</pre>' +
            '<h5>Headers:</h5>' +
            '<pre>' + JSON.stringify(error.response.headers, null, '\t') + '</pre>' +
            '<h5>Data:</h5>' +
            '<pre>' + JSON.stringify(error.response.data, null, '\t') + '</pre>';
  }