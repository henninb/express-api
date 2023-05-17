  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://bh-express.netlify.app/api/cookie', true);
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var response = xhr.responseText;
        console.log(response);
      } else {
        // Handle error response
      }
    }
  };
  xhr.send();
