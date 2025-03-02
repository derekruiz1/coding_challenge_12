//Task 1 - Business Dashboard - DOM Element Selection and Creation
document.addEventListener("DOMContentLoaded", function () {
    let dashboard1 = document.getElementById("dashboard");
    let dashboard2 = document.querySelector("#dashboard");

    // Making the Revenue Metric Card
    let revenueCard = document.createElement("div");
    revenueCard.setAttribute("class", "metric-card");
    revenueCard.setAttribute("id", "revenueCard");
    revenueCard.innerHTML = "<h2>Revenue</h2><p>$0</p>";

    // Adding the metric card to the dashboard
    dashboard1.appendChild(revenueCard);
});

//Task 2 - Updating Dashboard Metrics - Working with NodeLists and Arrays 
document.addEventListener("DOMContentLoaded", function () {
    let metricCards = document.querySelectorAll(".metric-card");
    let metricArray = Array.from(metricCards);

    // Updating Metric Card
    metricArray.forEach(card => {
        card.style.backgroundColor = "#d0ffba";
        card.innerHTML += "Updated";
    });
});

//Task 3 - Dynamic Inventory Management – Adding and Removing Items
function addInventoryItem(productName) {
    let inventoryList = document.getElementById("inventoryList");

    let listItem = document.createElement("li");
    listItem.setAttribute("class", "product-item");
    listItem.textContent = productName;

    // Remove item when clicked
    listItem.addEventListener("click", function () {
        inventoryList.removeChild(listItem);
    });

    inventoryList.appendChild(listItem);
}

// Task 4: Customer Section with Event Bubbling
let customerSection = document.getElementById("customerSection");

let customers = ["Alice", "Bob", "Charlie"];
customers.forEach(name => {
    let customerCard = document.createElement("div");
    customerCard.setAttribute("class", "customer-card");
    customerCard.textContent = name;

    customerCard.addEventListener("click", function (event) {
        console.log("Customer card clicked: " + name);
        event.stopPropagation(); 
    });

    customerSection.appendChild(customerCard);
});

customerSection.addEventListener("click", function () {
    console.log("Customer section clicked");
});