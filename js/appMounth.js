const date = document.querySelector('.date');
const chartFact = document.querySelectorAll('.chart__fact');
const allDate = document.querySelectorAll('.date__week');
const chartProcent = document.querySelectorAll('.chart__procent');
const chartPlan = document.querySelectorAll('.chart__plan');
const shipmentInfo = document.querySelector('.shipment__info');
const weekChart = document.querySelectorAll('.week__chart');
const chart = document.querySelector('.chart');
const chartMounth = document.querySelector('.chart__mounth')
async function getResponse() {
    let response = await fetch('../server.json');
    let content = await response.json();
    chartFact[0].innerText = content[0].weeklyshipmentfact;
    chartFact[1].innerText = content[0].monthlyshipmentfact;
    chartPlan[0].innerText = `План: ${content[0].weeklyshipmentplan}`;
    chartPlan[1].innerText = `План: ${content[0].monthlyshipmentplan}`;
    shipmentInfo.innerHTML = content[0].dailyshipmentfact;
    let weekProcent = (content[0].weeklyshipmentfact * 100) / content[0].weeklyshipmentplan;
    let monthProcent = (content[0].monthlyshipmentfact * 100) / content[0].monthlyshipmentplan;
    if (weekProcent > 100){
        chartProcent[0].innerText = `+ ${weekProcent.toFixed(1) - 100} %`
    } else if (weekProcent <= 100) {
        chartProcent[0].innerText = `- ${100 - weekProcent.toFixed(1)} %`
    };
    if (monthProcent > 100){
        chartProcent[1].innerText = `+ ${monthProcent.toFixed(1) - 100} %`
    } else if (weekProcent <= 100) {
        chartProcent[1].innerText = `- ${100 - monthProcent.toFixed(1)} %`
    };
    let millisecondsDate = content[0].date * 1000;
    let millisecondsWeekStart = content[0].weekstart * 1000;
    let millisecondsWeekEnd = content[0].weekend * 1000;
    date.innerText = `${new Date(millisecondsDate).getDate()}.${new Date(millisecondsDate).getMonth()}.${new Date(millisecondsDate).getFullYear()} г.`;
    allDate[0].innerText = `${new Date(millisecondsWeekStart).getDate()}.${new Date(millisecondsWeekStart).getMonth()}-${new Date(millisecondsWeekEnd).getDate()}.${new Date(millisecondsWeekEnd).getMonth()}`
    allDate[1].innerText = `${new Date(millisecondsDate).getMonth()}.${new Date(millisecondsDate).getFullYear()} г.`
    
    let heightWeek = weekChart[0].offsetHeight;
    let heightMounth = weekChart[1].offsetHeight;
    let topWeek, topMounth;
    if(weekProcent == 0){
        topWeek = 1;
    } else {
        topWeek = (heightWeek * weekProcent) / 100;
    }
    if(monthProcent == 0){
        topMounth = 1;
    } else {
        topMounth = (heightMounth * weekProcent) / 100;
    }
    chart.style.top = topWeek.toFixed() + 'px'
    chartMounth.style.top = topMounth.toFixed() + 'px'
};

getResponse();