window.onload = () =>{
  const orders = [
    {name:"Fidget Spinner", price:"4.99", supplier:"supplier 1", stock:"6"},
    {name:"Zippo", price:"14.99", supplier:"supplier 1", stock:"3"},
    {name:"Earbuds", price:"49.99", supplier:"supplier 1", stock:"5"},
    {name:"Computer Mouse", price:"9.99", supplier:"supplier 1", stock:"7"},
    {name:"Handbag", price:"69.99", supplier:"supplier 1", stock:"2"},

    {name:"Baby Seat", price:"69.99", supplier:"supplier 2", stock:"2"},
    {name:"Car wheels", price:"399.99", supplier:"supplier 2", stock:"2"},
    {name:"Car floor covers", price:"6.99", supplier:"supplier 2", stock:"4"},
    {name:"Car RGB strips", price:"29.99", supplier:"supplier 2", stock:"10"},
    {name:"Car refreshener", price:"2.99", supplier:"supplier 2", stock:"7"},

    {name:"Motherboard", price:"199.99", supplier:"supplier 3", stock:"5"},
    {name:"Cpu Cooler", price:"89.99", supplier:"supplier 3", stock:"3"},
    {name:"Cpu", price:"269.99", supplier:"supplier 3", stock:"2"},
    {name:"Ram", price:"49.99", supplier:"supplier 3", stock:"8"},
    {name:"Graphics Card", price:"349.99", supplier:"supplier 3", stock:"1"}];

  const orderSelect = document.getElementById("js--orderSelect");
  //generate select options
  for (let i = 0; i < orders.length; i++) {
    let option = document.createElement("option");
    option.innerHTML = orders[i].name;
    option.setAttribute("value", orders[i].name);

    orderSelect.appendChild(option);
  }

  const orderTemplate = document.getElementById("js--orderTemplate").cloneNode(true);
  const addOrderButton = document.getElementById("js--addOrderButton");
  const orderContainer = document.getElementById("js--orderContainer");

  const resetButton = document.getElementById("js--resetButton");
  const confirmButton = document.getElementById("js--confirmButton");

  let orderAantalArray = document.getElementsByClassName("js--orderAantal");
  let orderNaamArray = document.getElementsByClassName("js--orderNaam");
  let orderSupplierArray = document.getElementsByClassName("js--orderSupplier");
  let orderStockArray = document.getElementsByClassName("js--orderStock");

  const refreshOnchangePrice = () =>{
    //calculate price when switching order quantity
    for (let i = 0; i < orderAantalArray.length; i++) {
      orderAantalArray[i].onchange = (event) =>{
        let price = orderAantalArray[i].parentNode.parentNode.childNodes[5].childNodes[3];

        for (let j = 0; j < orders.length; j++) {
          if (orders[j].name === orderNaamArray[i].value) {
            price.value = "€ " + (orders[j].price * orderAantalArray[i].value).toFixed(2);
          }
        }
      }
    }

    //get correct price upon switching product
    for (let i = 0; i < orderNaamArray.length; i++) {
      orderNaamArray[i].onchange = () =>{
        let price = orderAantalArray[i].parentNode.parentNode.childNodes[5].childNodes[3];
        for (let j = 0; j < orders.length; j++) {
          if (orders[j].name === orderNaamArray[i].value) {
            price.value = "€ " + (orders[j].price * orderAantalArray[i].value).toFixed(2);

            orderSupplierArray[i].value = orders[j].supplier;
            orderStockArray[i].value = orders[j].stock;
            orderAantalArray[i].max = orders[j].stock;
          }
        }
      }
    }
  }
  refreshOnchangePrice();

  addOrderButton.onclick = (event) =>{
    orderContainer.appendChild(orderTemplate.cloneNode(true));
    orderAantalArray = document.getElementsByClassName("js--orderAantal");
    orderNaamArray = document.getElementsByClassName("js--orderNaam");
    orderSupplierArray = document.getElementsByClassName("js--orderSupplier");
    orderStockArray = document.getElementsByClassName("js--orderStock");
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
    let orderSupplier = document.getElementsByClassName("js--orderSupplier");
    let orderStock = document.getElementsByClassName("js--orderStock");
    
    if(orderNamen.length < 1){
      window.alert("Je order is leeg, voeg een leuk item toe om deze te bestellen!");
      return
    }

    let alertString = "SEND ORDER:\n"

    for (let i = 0; i < orderNamen.length; i++) {
      if(orderAantal[i].value > orderStock[i].value){
        window.alert("Van item " + orderNamen[i].value + "kan je maximaal " + orderStock[i].value + " stuks bestellen");
        return;
      }
      alertString += orderNamen[i].value + " - " + orderAantal[i].value + "x - " + orderPrijs[i].value + " - " + orderSupplier[i].value + "\n"
    }
    window.alert(alertString);
  }
}
