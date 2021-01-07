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
            let height = getClipHeight() + 3;
            let str = "rect(0px, 250px, " + height + "px, 0px)";
            share_box.style.clip = str;
            if (height >= 250) {
                clearInterval(interval);
            }
            sns1.style.border = "none";
            sns2.style.border = "none";
            sns3.style.border = "none";
            sns4.style.border = "none";
            facebook = false;
            tweeter = false;
            kakaostory = false;
            telegram = false;
        }, 0.3);
    } else {
        clickTime += 1;
        let interval1 = setInterval(() => {
            let height = getClipHeight() - 3;
            let str = "rect(0px, 250px, " + height + "px, 0px)";
            share_box.style.clip = str;
            if (height < 0) {
                clearInterval(interval1);
            }
        }, 0.05);
    }


});
function getClipHeight() {
    let style = getComputedStyle(share_box);
    let clip_size = style.getPropertyValue("clip");
    clip_size = clip_size.substring(5).substring(0, clip_size.length - 3);
    let arr_size = clip_size.split("px, ");
    return parseInt(arr_size[2]);
}

function shareAct(str) {

    var cUrl = "현재페이지 주소";

    switch (str) {

        case "tweeter":
            //트위터
            cUrl = 'https://twitter.com/intent/tweet?text=페이지제목:&url=' + cUrl;
            break;

        case "telegram":
            //텔레그램
            cUrl = 'https://telegram.me/share/url?url=' + cUrl;
            break;

        case "facebook":
            //페이스북
            cUrl = 'http://www.facebook.com/sharer/sharer.php?u=' + cUrl;
            break;

        case "kakaostory":
            //카카오스토리
            cUrl = 'https://story.kakao.com/share?url=' + cUrl;
            break;

        case "":
            //empty
            cUrl = '';
            alert("공유할 SNS를 선택하세요!");
            break;

    }

    if (cUrl != '') {
        window.open(cUrl, '', 'width=600,height=300,top=100,left=100,scrollbars=yes');
    }
}



// when share buttons are clicked
let sns1 = document.getElementById('sns1');
let sns2 = document.getElementById('sns2');
let sns3 = document.getElementById('sns3');
let sns4 = document.getElementById('sns4');
let share = document.getElementById('share');
let facebook = false;
let tweeter = false;
let kakaostory = false;
let telegram = false;
sns1.addEventListener("click", function () {
    facebook = true;
    tweeter = false;
    kakaostory = false;
    telegram = false;
    console.log("클릭1");
    sns1.style.border = "4px solid #2bae66";
    sns2.style.border = "none";
    sns3.style.border = "none";
    sns4.style.border = "none";
});

sns2.addEventListener("click", function () {
    facebook = false;
    tweeter = true;
    kakaostory = false;
    telegram = false;
    console.log("클릭2");

    sns1.style.border = "none";
    sns2.style.border = "4px solid #2bae66";
    sns3.style.border = "none";
    sns4.style.border = "none";
});


sns3.addEventListener("click", function () {
    facebook = false;
    tweeter = false;
    kakaostory = true;
    telegram = false;
    console.log("클릭3");
    sns1.style.border = "none";
    sns2.style.border = "none";
    sns3.style.border = "4px solid #2bae66";
    sns4.style.border = "none";
});


sns4.addEventListener("click", function () {
    facebook = false;
    tweeter = false;
    kakaostory = false;
    telegram = true;
    console.log("클릭4");
    sns1.style.border = "none";
    sns2.style.border = "none";
    sns3.style.border = "none";
    sns4.style.border = "4px solid #2bae66";
});


share.addEventListener("click", function () {
    let str = "";
    if (facebook) {
        str = "facebook";
    }
    else if (tweeter) {
        str = "tweeter";
    }
    else if (kakaostory) {
        str = "kakaostory";
    }
    else if (telegram) {
        str = "telegram";
    }
    shareAct(str);
});

