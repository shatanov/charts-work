const date = document.querySelector('.date');
const chartFact = document.querySelectorAll('.chart__fact');
const allDate = document.querySelectorAll('.date__week');
const chartProcent = document.querySelectorAll('.chart__procent');
const chartPlan = document.querySelectorAll('.chart__plan');
const shipmentInfo = document.querySelector('.shipment__info');
const weekChart = document.querySelectorAll('.week__chart');
const chart = document.querySelector('.chart');
const chartMounth = document.querySelector('.chart__mounth');
const plan = document.querySelectorAll('.plan')
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
    let heightWeek = weekChart[0].offsetHeight;
    let heightMounth = weekChart[1].offsetHeight;
    let heigthChart = chart.offsetHeight;
    let topWeek, topMounth;
    topMounth = heightMounth - (heightMounth * monthProcent) / 100;
    topWeek = heightWeek - (heightWeek * weekProcent) / 100;
    let minusWeek = heightWeek - topWeek.toFixed();
    let minusMounth = heightMounth - topMounth.toFixed();

    if (weekProcent.toFixed() > 100){
        chartProcent[0].innerText = `+ ${weekProcent.toFixed() - 100} %`;
        chartPlan[0].style.color = '#3B3B45';
        plan[0].style.background = 'linear-gradient(0deg, rgba(255,255,255,1) 33%, rgba(35,235,8,1) 92%)';
        chart.style.height = 0 + 'px';
    } else if (weekProcent.toFixed() < 98 && weekProcent.toFixed()  > 1) {
        chartProcent[0].innerText = `- ${100 - weekProcent.toFixed()} %`
        chart.style.height = (heigthChart - minusWeek) + 'px';
    } else if(weekProcent.toFixed() == 99 || weekProcent.toFixed() == 100){
        chartProcent[0].innerText = `- ${100 - weekProcent.toFixed()} %`
        chart.style.height = 0 + 'px';
    } else if(weekProcent.toFixed() <= 0){
        chartProcent[0].innerText = `- ${100 - weekProcent.toFixed()} %`;
        chart.style.height = 0 + 'px';
        weekChart[0].style.backgroundColor = '#3B3B45';
    }
    else if(weekProcent.toFixed() == 0){
        chartProcent[0].innerText = `- ${100 - monthProcent.toFixed()} %`
        chartMounth.style.height = 0 + 'px';
        weekChart[0].style.background = '#3B3B45';
    };

    if (monthProcent.toFixed() > 100){
        chartProcent[1].innerText = `+ ${monthProcent.toFixed() - 100} %`
        chartPlan[1].style.color = '#3B3B45';
        plan[1].style.background = 'linear-gradient(0deg, rgba(255,255,255,1) 33%, rgba(35,235,8,1) 92%)';
        chartMounth.style.height = 0 + 'px';
    } else if (monthProcent.toFixed() < 98 && monthProcent.toFixed() > 1){
        chartProcent[1].innerText = `- ${100 - monthProcent.toFixed()} %`
        chartMounth.style.height = (heightMounth - minusMounth) + 'px';
    } else if(monthProcent.toFixed() == 99 || monthProcent.toFixed() == 100){
        chartProcent[1].innerText = `- ${100 - monthProcent.toFixed()} %`
        chartMounth.style.height = 0 + 'px';
    } else if(monthProcent.toFixed() == 0){
        chartProcent[1].innerText = `- ${100 - monthProcent.toFixed()} %`
        chartMounth.style.height = 0 + 'px';
        weekChart[1].style.background = '#3B3B45';
    };
    let millisecondsDate = content[0].date * 1000;
    let millisecondsWeekStart = content[0].weekstart * 1000;
    let millisecondsWeekEnd = content[0].weekend * 1000;
    date.innerText = `${new Date(millisecondsDate).getDate()}.${new Date(millisecondsDate).getMonth()}.${new Date(millisecondsDate).getFullYear()} г.`;
    allDate[0].innerText = `${new Date(millisecondsWeekStart).getDate()}.${new Date(millisecondsWeekStart).getMonth()}-${new Date(millisecondsWeekEnd).getDate()}.${new Date(millisecondsWeekEnd).getMonth()}`
    allDate[1].innerText = `${new Date(millisecondsDate).getMonth()}.${new Date(millisecondsDate).getFullYear()} г.`
};
getResponse();