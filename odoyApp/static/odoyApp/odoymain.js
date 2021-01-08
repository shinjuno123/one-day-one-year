const clock = document.getElementById("timelbl")

// 현재시간을 출력하는 함수
function printClock() {
    var currentTime = new Date();
    var calendar = currentTime.getFullYear() + "-" + addZeros((currentTime.getMonth()+1),2) + "-" + addZeros(currentTime.getDate(),2) + " ";
    var currentHours = addZeros(currentTime.getHours(),2);
    var currentMinutes = addZeros(currentTime.getMinutes(),2);
    var currentSeconds = addZeros(currentTime.getSeconds(),2);

    clock.innerHTML = calendar + currentHours + ":" + currentMinutes + ":" + currentSeconds;
    
    setTimeout("printClock()",1000);
}

window.onload = function() {
    printClock();
}

// 시간이 1의 자리일 때 0을 추가하여 두자리 수로 보이게 하기 위함
function addZeros(num, digit) {
    var zero ="";
    num = num.toString();
    if(num.length < digit) {
        for(i = 0; i<digit-num.length; i++){
            zero += '0';
        }
    }
    return zero+num;
}

function result_btn() {
        alert("내용을 모두 입력해주세요.");
}

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
            sns1.style.width = "50px";
            sns1.style.height = "50px";
            sns2.style.width = "50px";
            sns2.style.height = "50px";
            sns3.style.width = "50px";
            sns3.style.height = "50px";
            sns4.style.width = "50px";
            sns4.style.height = "50px";
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
    sns1.style.width = "41px";
    sns1.style.height = "41px";
    sns2.style.width = "50px";
    sns2.style.height = "50px";
    sns3.style.width = "50px";
    sns3.style.height = "50px";
    sns4.style.width = "50px";
    sns4.style.height = "50px";
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
    sns1.style.width = "50px";
    sns1.style.height = "50px";
    sns2.style.width = "41px";
    sns2.style.height = "41px";
    sns3.style.width = "50px";
    sns3.style.height = "50px";
    sns4.style.width = "50px";
    sns4.style.height = "50px";
    

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
    sns1.style.width = "50px";
    sns1.style.height = "50px";
    sns2.style.width = "50px";
    sns2.style.height = "50px";
    sns3.style.width = "41px";
    sns3.style.height = "41px";
    sns4.style.width = "50px";
    sns4.style.height = "50px";
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
    sns1.style.width = "50px";
    sns1.style.height = "50px";
    sns2.style.width = "50px";
    sns2.style.height = "50px";
    sns3.style.width = "50px";
    sns3.style.height = "50px";
    sns4.style.width = "41px";
    sns4.style.height = "41px";
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

