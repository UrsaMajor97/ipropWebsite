window.onload = function()
{
    var details = document.querySelector("#js--details");
    var timer = "";

    document.querySelector("#js--products").addEventListener("click", showDetails)
    document.querySelector("#js--detailsCancel").addEventListener("click", hideDetails)
    document.querySelector("#js--detailsBackground").addEventListener("click", hideDetails)
}

function showDetails(event)
{
    if(event.target.dataset.id)
    {
        console.log(event.target.dataset.name);

        document.querySelector("#js--detailsName").innerText = event.target.dataset.name;
        document.querySelector("#js--detailsImage").src = "img/products/" + event.target.dataset.img + ".png";
        document.querySelector("#js--detailsDescription").innerText = event.target.dataset.description;
        document.querySelector("#js--detailsPrice").innerText = "€" + event.target.dataset.price;
        document.querySelector("#js--detailsStock").innerText = "Stock: " + event.target.dataset.stock;

        document.querySelector("#js--details").classList.add("is-visible");
    }
}

function hideDetails()
{
    document.querySelector("#js--details").classList.remove("is-visible");
}