const date = document.querySelector('.date');
const chartFact = document.querySelectorAll('.chart__fact');
const allDate = document.querySelectorAll('.date__week');
const chartProcent = document.querySelectorAll('.chart__procent');
const chartPlan = document.querySelectorAll('.chart__plan');
const shipmentInfo = document.querySelector('.shipment__info');

async function getResponse() {
    let response = await fetch('../server.json');
    let content = await response.json();
    chartFact[0].innerText = content[0].weeklyshipmentfact;
    chartFact[1].innerText = content[0].monthlyshipmentfact;
    chartPlan[0].innerText = `План: ${content[0].weeklyshipmentplan}`;
    chartPlan[1].innerText = `План: ${content[0].monthlyshipmentplan}`;
    shipmentInfo.innerHTML = content[0].dailyshipmentfact;
};

getResponse();