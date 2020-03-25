window.onload= function() {
  supplier1card = document.getElementById('supplier1card');
  supplier2card = document.getElementById('supplier2card');
  supplier3card = document.getElementById('supplier3card');

  supplier1card.onclick = function() {
    location.href = "supplier1.html";
  }
  supplier2card.onclick = function() {
    location.href = "supplier2.html";
  }
  supplier3card.onclick = function() {
    location.href = "supplier3.html";
  }
}
