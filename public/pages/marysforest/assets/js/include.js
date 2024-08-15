// include 불러오는 함수 
// <div data-include-path="/include/header.html"></div>

window.addEventListener('load', function () {

 //include
 var allElements = document.getElementsByTagName('*');
 Array.prototype.forEach.call(allElements, function (el) {
     var includePath = el.dataset.includePath;
     if (includePath) {
         var xhttp = new XMLHttpRequest();
         xhttp.onreadystatechange = function () {
             if (this.readyState == 4 && this.status == 200) {
                 el.outerHTML = this.responseText;
             }
         };
         xhttp.open('GET', includePath, true);
         xhttp.send();
     }
     
 });
});





   
   

