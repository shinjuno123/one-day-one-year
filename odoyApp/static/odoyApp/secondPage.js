const progress_bar1 = document.getElementsByClassName("progress-bar1")[0];
const progress_bar2 = document.getElementsByClassName("progress-bar2")[0];
progress_bar1.style.setProperty('--width', 70);
progress_bar2.style.setProperty('--width', 40);

//console.log("안녕")
// setProperty('--width',(input percentage here getting the value from django))

//Draw Graph
const graph1 = document.getElementById("myChart1").getContext('2d');

const myChart1 = new Chart(graph1,{
    type: 'doughnut',
    data:{
        labels: [ "여자", "남자"],
        datasets: [{
            label: '참가자(%):',
            data: [45,55],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',

            ],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: true, // default value. false일 경우 포함된 div의 크기에 맞춰서 그려짐.
        title: {
            display : true,
            text: '남,녀 참가자 비율',
            fontSize : 30,
            fontColor:'rgba(46,49,49,1)'
        },
    }
    

});

const graph2 = document.getElementById("myChart2").getContext('2d');
const myChart2 = new Chart(graph2,{
    type: 'bar',
    data:{
        labels: [ "여자", "남자"],
        datasets: [{
            label:'남,녀 평균 기대수명',
            fillColor : "rgba(150,200,250,0.5)",
            //yAxisID : '나이',
            data: [85,74],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',

            ],
            borderWidth: 1,
        }]
    },
    options: {
        maintainAspectRatio: true, // default value. false일 경우 포함된 div의 크기에 맞춰서 그려짐.
        title: {
            display : true,
            text: '남,녀 기대수명',
            fontSize : 30,
            fontColor:'rgba(46,49,49,1)'
        },
        scales: {
            xAxes: [{
                ticks: {
                    fontColor:'rgba(40,40,40,1)'
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontColor:'rgba(40,40,40,1)'

                }
            }]
        }
    }
    
    

});