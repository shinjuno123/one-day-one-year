const progress_bar1 = document.getElementsByClassName("progress-bar1")[0];
const progress_bar2 = document.getElementsByClassName("progress-bar2")[0];
let background_changes = new Array(100);
let background_changes_count = 0;
let background_changes_sub_count = 300;
// setProperty('--width',(input percentage here after getting the value from django))
//var timeyearjson = JSON.parse('{{timeyearjson|escapejs}}');
//const bar1_percentage = timeyearjson['timeper']; // 여기에다 시간 progress bar의 퍼센트를 넣어주세요 !!!
//const bar2_percentage = timeyearjson['yearper']; // 여기에다 월(달) progress bar의 퍼센트를 넣어주세요 !!!

//const bar1_percentage = 80; // 여기에다 시간 progress bar의 퍼센트를 넣어주세요 !!!
//const bar2_percentage = 88;
const time = ['mor', 'nig'];
const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
//setBackGround
let body = document.querySelector("body");


function animation_progress_bar1() {
    let bar1 = getComputedStyle(progress_bar1);
    const bar1_width = parseFloat(bar1.getPropertyValue('--width')) || 0;
    if (bar1_width == bar1_percentage) {
        return;
    }

    if (bar1_width <= 50) {
        background_changes[background_changes_count] = months[0] + '_' + time[0];
    } else if (bar1_width > 50) {
        background_changes[background_changes_count] = months[0] + '_' + time[1];
    }
    background_changes_count += 1;
    console.log("graph1");
    progress_bar1.style.setProperty('--width', bar1_width + .1);
}



function animation_progress_bar2() {
    let bar2 = getComputedStyle(progress_bar2);
    const bar2_width = parseFloat(bar2.getPropertyValue('--width')) || 0;
    if (bar2_width == bar2_percentage) {
        return;
    }
    if (0 < bar2_width && bar2_width <= 8.5) {
        if (bar1_percentage <= 50) {
            background_changes[background_changes_count] = months[0] + '_' + time[0];
        }
        else if (bar1_percentage > 50) {
            background_changes[background_changes_count] = months[0] + '_' + time[1];
        }
    } else if (8.5 < bar2_width && bar2_width <= 17) {
        if (bar1_percentage <= 50) {
            background_changes[background_changes_count] = months[1] + '_' + time[0];
        }
        else if (bar1_percentage > 50) {
            background_changes[background_changes_count] = months[1] + '_' + time[1];
        }
    } else if (17 < bar2_width && bar2_width <= 25.5) {
        if (bar1_percentage <= 50) {
            background_changes[background_changes_count] = months[2] + '_' + time[0];
        }
        else if (bar1_percentage > 50) {
            background_changes[background_changes_count] = months[2] + '_' + time[1];
        }
    } else if (25.5 < bar2_width && bar2_width <= 34) {
        if (bar1_percentage <= 50) {
            background_changes[background_changes_count] = months[3] + '_' + time[0];
        }
        else if (bar1_percentage > 50) {
            background_changes[background_changes_count] = months[3] + '_' + time[1];
        }
    } else if (34 < bar2_width && bar2_width <= 42.5) {
        if (bar1_percentage <= 50) {
            background_changes[background_changes_count] = months[4] + '_' + time[0];
        }
        else if (bar1_percentage > 50) {
            background_changes[background_changes_count] = months[4] + '_' + time[1];
        }
    } else if (42.5 < bar2_width && bar2_width <= 51) {
        if (bar1_percentage <= 50) {
            background_changes[background_changes_count] = months[5] + '_' + time[0];
        }
        else if (bar1_percentage > 50) {
            background_changes[background_changes_count] = months[5] + '_' + time[1];
        }
    } else if (51 < bar2_width && bar2_width <= 59.5) {
        if (bar1_percentage <= 50) {
            background_changes[background_changes_count] = months[6] + '_' + time[0];
        }
        else if (bar1_percentage > 50) {
            background_changes[background_changes_count] = months[6] + '_' + time[1];
        }
    } else if (59.5 < bar2_width && bar2_width <= 68) {
        if (bar1_percentage <= 50) {
            background_changes[background_changes_count] = months[7] + '_' + time[0];
        }
        else if (bar1_percentage > 50) {
            background_changes[background_changes_count] = months[7] + '_' + time[1];
        }
    } else if (68 < bar2_width && bar2_width <= 76.5) {
        if (bar1_percentage <= 50) {
            background_changes[background_changes_count] = months[8] + '_' + time[0];
        }
        else if (bar1_percentage > 50) {
            background_changes[background_changes_count] = months[8] + '_' + time[1];
        }
    } else if (76.5 < bar2_width && bar2_width <= 85) {
        if (bar1_percentage <= 50) {
            background_changes[background_changes_count] = months[9] + '_' + time[0];
        }
        else if (bar1_percentage > 50) {
            background_changes[background_changes_count] = months[9] + '_' + time[1];
        }
    } else if (85 < bar2_width && bar2_width <= 93.5) {
        if (bar1_percentage <= 50) {
            background_changes[background_changes_count] = months[10] + '_' + time[0];
        }
        else if (bar1_percentage > 50) {
            background_changes[background_changes_count] = months[10] + '_' + time[1];
        }
    } else if (93.5 < bar2_width && bar2_width <= 100) {
        if (bar1_percentage <= 50) {
            background_changes[background_changes_count] = months[11] + '_' + time[0];
        }
        else if (bar1_percentage > 50) {
            background_changes[background_changes_count] = months[11] + '_' + time[1];
        }
    }

    background_changes_count += 1;

    console.log("graph2");
    progress_bar2.style.setProperty('--width', bar2_width + .1);
}


function execute_changing_backgrounds_slowly() {
    const background = setInterval(function () {
        let imageUrl = "url('/static/odoyApp/images/wallpapers/" + background_changes[background_changes_sub_count] + ".jpg') no-repeat center fixed";
        if (imageUrl == "url('/static/odoyApp/images/wallpapers/undefined.jpg') no-repeat center fixed") {
            console.log("경로 못찾음");
            background_changes_sub_count += 1;
        }
        else{
            body.style.background = imageUrl;
            body.style.backgroundSize = "cover";
            background_changes_sub_count += 1;
        }
        if (background_changes_count <= background_changes_sub_count) {
            clearInterval(background);
        }
    }, 30);
}

function execute_bar_animation1() {

    const bar1 = setInterval(animation_progress_bar1, 2);
}

function execute_bar_animation2() {
    const bar2 = setInterval(animation_progress_bar2, 4);
}
execute_bar_animation1();
setTimeout(execute_bar_animation2, bar1_percentage * 43);
setTimeout(execute_changing_backgrounds_slowly, bar1_percentage * 80);


//Draw Graph
const graph1 = document.getElementById("myChart1").getContext('2d');

const myChart1 = new Chart(graph1, {
    type: 'doughnut',
    data: {
        labels: ["여자", "남자"],
        datasets: [{
            label: '참가자(%):',
            data: [female, male],//이 배열 안에다가 남녀 참가자 비율을 여,남 순으로 넣어주세요!!!
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
            data: [female_life, male_life], //이 배열 안에다가 남녀 평균기대수명을 여,남 순으로 넣어주세요!!!
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

