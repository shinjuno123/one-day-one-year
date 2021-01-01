const progress_bar1 = document.getElementsByClassName("progress-bar1")[0];
const progress_bar2 = document.getElementsByClassName("progress-bar2")[0];
// setProperty('--width',(input percentage here after getting the value from django))




function animation_progress_bar1() {
    let bar1 = getComputedStyle(progress_bar1);
    const bar1_width = parseFloat(bar1.getPropertyValue('--width')) || 0;
    if (bar1_width == 70) {
        return;
    }
    console.log("graph1");
    progress_bar1.style.setProperty('--width', bar1_width + .1);
}

setInterval(animation_progress_bar1, 2);

setInterval(() => {
    let bar2 = getComputedStyle(progress_bar2);
    const bar2_width = parseFloat(bar2.getPropertyValue('--width')) || 0;
    if (bar2_width == 40) {
        return;
    }
    console.log("graph2");
    progress_bar2.style.setProperty('--width', bar2_width + .1);
}, 2)


//Draw Graph
const graph1 = document.getElementById("myChart1").getContext('2d');

const myChart1 = new Chart(graph1, {
    type: 'doughnut',
    data: {
        labels: ["여자", "남자"],
        datasets: [{
            label: '참가자(%):',
            data: [45, 55],
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
            display: true,
            text: '남,녀 참가자 비율',
            fontSize: 20,
            fontColor: 'rgba(46,49,49,1)'
        },
    }


});

const graph2 = document.getElementById("myChart2").getContext('2d');
const myChart2 = new Chart(graph2, {
    type: 'bar',
    data: {
        labels: ["여자", "남자"],
        datasets: [{
            label: '남,녀 평균 기대수명',
            fillColor: "rgba(150,200,250,0.5)",
            data: [85, 74],
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
            display: true,
            text: '남,녀 평균 기대수명',
            fontSize: 20,
            fontColor: 'rgba(46,49,49,1)'
        },
        scales: {
            xAxes: [{
                ticks: {
                    fontColor: 'rgba(40,40,40,1)'
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontColor: 'rgba(40,40,40,1)'

                }
            }]
        }
    }



});


//setBackGround
let imagesArray = new Array('jan.jpg');
let body = document.querySelector("body");
let imageUrl = "url('/static/odoyApp/images/" + imagesArray[0] + "') no-repeat center fixed";
body.style.background = imageUrl;


//share-section
let share_button = document.getElementById("share-button");
let share_box = document.getElementById("share-box");
let clickTime = 0;
share_button.addEventListener("click", function () {

    if (clickTime % 2 == 0) {
        clickTime += 1;
        let interval = setInterval(() => {
            let height = getClipHeight() +3;
            let str = "rect(0px, 250px, " + height + "px, 0px)";
            share_box.style.clip = str;
            if (height >= 250) {
                clearInterval(interval);
            }
        }, 0.3);
    } else {
        clickTime += 1;
        let interval1 = setInterval(() => {
            let height = getClipHeight() -3;
            let str = "rect(0px, 250px, " + height + "px, 0px)";
            share_box.style.clip = str;
            if (height < 0) {
                clearInterval(interval1);
            }
        }, 0.05);
    }


});
function getClipHeight(){
    let style = getComputedStyle(share_box);
    let clip_size = style.getPropertyValue("clip");
    clip_size = clip_size.substring(5).substring(0, clip_size.length - 3);
    let arr_size = clip_size.split("px, ");
    return parseInt(arr_size[2]);
}