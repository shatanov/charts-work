const ctxx = document.getElementById('ChartMonth').getContext('2d');
let dataElemt = [150000, 130000, 255000, 200000];
const ChartMounth = new Chart(ctxx, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Фактическая',
            data: dataElemt,
             backgroundColor: [
                '#F4B802',
                '#F4B802',
                '#F4B802',
                '#F4B802',
            ],
            order: 1
            }, {
            label: 'План',
            data: [250000, 250000, 250000, 250000],
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
        labels: [1,2,3,4]
    },
    options: {}
});
