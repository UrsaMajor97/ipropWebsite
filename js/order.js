window.onload = () =>{
  const orderTemplate = document.getElementById("js--orderTemplate").cloneNode(true);
  const addOrderButton = document.getElementById("js--addOrderButton");
  const orderContainer = document.getElementById("js--orderContainer");

  const resetButton = document.getElementById("js--resetButton");
  const confirmButton = document.getElementById("js--confirmButton");

  let orderAantalArray = document.getElementsByClassName("js--orderAantal");

  const refreshOnchangePrice = () =>{
    for (let i = 0; i < orderAantalArray.length; i++) {
      orderAantalArray[i].onchange = (event) =>{
        let price = orderAantalArray[i].parentNode.parentNode.childNodes[5].childNodes[3];
        price.value = "€ " + Math.floor(Math.random()*100)*orderAantalArray[i].value;
      }
    }
  }
  refreshOnchangePrice();

  addOrderButton.onclick = (event) =>{
    orderContainer.appendChild(orderTemplate.cloneNode(true));
    orderAantalArray = document.getElementsByClassName("js--orderAantal");
    refreshOnchangePrice();
  }

  resetButton.onclick = (event) =>{
    let orders = document.getElementsByClassName("order");
    for (let i = 0; i < orders.length; i++) {
      orders[i].remove();
    }
  }

  confirmButton.onclick = (event) =>{
    let orderNamen = document.getElementsByClassName("js--orderNaam");
    let orderAantal = document.getElementsByClassName("js--orderAantal");
    let orderPrijs = document.getElementsByClassName("js--orderPrijs");

    let alertString = "SEND ORDER:\n"

    for (let i = 0; i < orderNamen.length; i++) {
      alertString += orderNamen[i].value + " - " + orderAantal[i].value + "x - " + orderPrijs[i].value + "\n"
    }
    window.alert(alertString);
  }
}
