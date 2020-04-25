  document.addEventListener('DOMContentLoaded', function () {
      M.AutoInit();
  });

  document.getElementById('userinput').addEventListener("keyup", function () {
      var inputtext = document.getElementById('userinput').value;
      if (inputtext) {
          document.getElementById('lengthres').innerHTML = inputtext.length;
          document.getElementById('encoderes').innerHTML = encodeURIComponent(inputtext);
          document.getElementById('decoderes').innerHTML = decodeURIComponent(inputtext);
      } else
          document.getElementById('lengthres').innerHTML = 'Please enter the text';
  })