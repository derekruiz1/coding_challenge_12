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