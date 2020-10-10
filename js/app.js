const ctx = document.getElementById('ChartWeek').getContext('2d');

let dataElem = [10, 10, 20, 10];
var mixedChart = new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Фактическая',
            data: dataElem,
             backgroundColor: [
                '#F4B802',
                '#F4B802',
                '#F4B802',
                '#F4B802',
                '#F4B802',
            ],
            order: 1
            }, {
            label: 'План',
            data: [45,45,45],
            type: 'line',
            strokeColor: 'black',
            pointColor: 'black',
            backgroundColor: [
                'rgba(0,0,0,0)'
            ],
            borderColor: [
                '#4279BC'
            ],
            order: 2
        }],
        labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Cб', 'Вс']
    },
    options: {}
});
