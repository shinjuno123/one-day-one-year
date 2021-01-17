const clock = document.getElementById('currentTimelbl')
const bodyBg = document.getElementById('body')
const remainTime = document.getElementById('remainTimelbl')
const lastTime = document.getElementById('lastTimelbl')
const sexbox = document.getElementById('sexBox')
const birthdaybox = document.getElementById('birthdayBox')
const wantagebox = document.getElementById('wantageBox')
const btnresult = document.getElementById('btnSub')


// 현재시간에 맞게 배경 이미지를 바꾸는 함수(낮, 밤)
function changeBg() {
    let imgsrc = ""
    let now = new Date();
    let todayHour = now.getHours();
    if(todayHour>=7&&todayHour<=17){
        imgsrc="../static/odoyApp/images/morning.jpg";
        bodyBg.style.backgroundImage="url('" + imgsrc + "')";
        bodyBg.style.backgroundSize="cover";
        bodyBg.style.backgroundAttachment="fixed";
        sexbox.style.backgroundImage = "linear-gradient(-300deg, #16a085 0%, #f4d03f 100%)"
        birthdaybox.style.backgroundImage = "linear-gradient(-300deg, #16a085 0%, #f4d03f 100%)"
        wantagebox.style.backgroundImage = "linear-gradient(-300deg, #16a085 0%, #f4d03f 100%)"
        btnresult.style.backgroundColor = "#34bd7b"
    }else{
        imgsrc="../static/odoyApp/images/night.jpg";
        bodyBg.style.backgroundImage="url('" + imgsrc + "')";
        bodyBg.style.backgroundSize="cover";
        bodyBg.style.backgroundAttachment="fixed";
        sexbox.style.backgroundImage = "linear-gradient(-60deg, #ff5858 0%, #f09819 100%)"
        birthdaybox.style.backgroundImage = "linear-gradient(-60deg, #ff5858 0%, #f09819 100%)"
        wantagebox.style.backgroundImage = "linear-gradient(-60deg, #ff5858 0%, #f09819 100%)"
        btnresult.style.backgroundColor = "#f9683a"
    }
}

// Result Button Mouseover, Mouseout Event
function btnchangeBg() {
    btnresult.style.backgroundColor="black"
    btnresult.style.transition = "0.3s"
}
function btnnormalBg() {
    let btnnow = new Date();
    let btntodayHour = btnnow.getHours();
    if(btntodayHour>=7&&btntodayHour<=17){
        btnresult.style.backgroundColor="#34bd7b"
        btnresult.style.transition = "0.3s"
    }else{
        btnresult.style.backgroundColor="#f9683a"
        btnresult.style.transition = "0.3s"
    }
}

// 올 해 남은 시간과 현재시간을 출력하는 함수
function printClock() {
    let now = new Date();
    
    // 지난 시간 다루는 부분
    let startYear = new Date(now.getFullYear(), 0, 1);
    let last_timegap = now.getTime() - startYear.getTime();
    
    let resultLDates = Math.floor(last_timegap/(1000 * 60 * 60 * 24));
    last_timegap -= resultLDates * (1000*60*60*24);
    let resultLHours = Math.floor(last_timegap/(1000*60*60));
    last_timegap -= resultLHours * (1000*60*60);
    let resultLMinutes = Math.floor(last_timegap/(1000*60));
    last_timegap -= resultLMinutes *(1000*60);
    let resultLSecond = Math.floor(last_timegap/1000);
    
    // 현재 시간 다루는 부분
    let calendar = now.getFullYear() + "-" + addZeros((now.getMonth()+1),2) + "-" + addZeros(now.getDate(),2) + " ";
    let currentHours = addZeros(now.getHours(),2);
    let currentMinutes = addZeros(now.getMinutes(),2);
    let currentSeconds = addZeros(now.getSeconds(),2);

    // 남은 시간 다루는 부분
    let endYear = new Date(now.getFullYear(), 11, 32) ;
    let remain_timegap = endYear.getTime() - now.getTime();

    let resultRDates = Math.floor(remain_timegap/(1000 * 60 * 60 * 24));
    remain_timegap -= resultRDates * (1000*60*60*24);
    let resultRHours = Math.floor(remain_timegap/(1000*60*60));
    remain_timegap -= resultRHours * (1000*60*60);
    let resultRMinutes = Math.floor(remain_timegap/(1000*60));
    remain_timegap -= resultRMinutes *(1000*60);
    let resultRSecond = Math.floor(remain_timegap/1000);


    // 지난 시간
    lastTime.innerHTML = resultLDates + "일 " + resultLHours + "시 " + resultLMinutes + "분 " + resultLSecond + "초 ";
    // 현재 시간
    clock.innerHTML = calendar + currentHours + ":" + currentMinutes + ":" + currentSeconds;
    // 남은 시간
    remainTime.innerHTML = resultRDates + "일 " + resultRHours + "시 " + resultRMinutes + "분 " + resultRSecond + "초 ";

    setTimeout("printClock()",1000);
}

// Max Date
function maxDate(){ 
    let date = new Date();
    let year = date.getFullYear() + "-" + addZeros((date.getMonth()+1),2) + "-" + addZeros(date.getDate(),2);

    document.getElementById("birthId").max = year;

}

window.onload = function() {
    printClock();
    changeBg();
    maxDate();
}

// 시간이 1의 자리일 때 0을 추가하여 두자리 수로 보이게 하기 위함
function addZeros(num, digit) {
    let zero ="";
    num = num.toString();
    if(num.length < digit) {
        for(i = 0; i<digit-num.length; i++){
            zero += '0';
        }
    }
    return zero+num;
}

// 결과보기 버튼 이벤트
function result_btn() {
    let nickname = document.getElementById('nicknameid').value;
    let gender = document.getElementsByName('gender')
    let genisCheck = gender.checked;
    let birthday = document.getElementById('birthId').value;
    let life = document.getElementById('wantage').value


    //-------------Gender 관련---------------
    if(gender.length==null){
        genisCheck = gender.checked;
    }else{
        for(i=0; i<gender.length; i++){
            if(gender[i].checked){
                genisCheck = true;
                break;
            }
        }
    }
// --------------------------------------------------------------------여기 작업------------------------------------------------------------------------
    // if(nickname==""){
    //     // alert("닉네임을 입력해주세요");
    //     blankString += "닉네임"
    // }if(!genisCheck){
    //     // alert("성별을 입력해주세요");
    //     blankString += "성별"
    // }if(birthday==""){
    //     // alert("생년월일을 입력해주세요");
    //     blankString += "생년월일"
    // }if(life==""){
    //     // alert("수명을 입력해주세요");
    //     blankString += "수명"
    // }
    
    if(nickname==""||!genisCheck||birthday==""||life==""){
        alert("내용을 옳바르게 입력하였는지 확인해주세요.");
    }else{
        alert("결과를 확인하세요.");
        document.getElementById('formId').submit();
    }

    // blankBox.innerText = blankString + "을 입력해주세요."
}
// --------------------------------------------------------------------여기 작업------------------------------------------------------------------------
// Life 자릿수 지정
function numberMaxLength(e){
    if(e.value.length > e.maxLength){
        e.value = e.value.slice(0, e.maxLength);
    }
}
// 공유버튼 이벤트
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

// 공유버튼 사이트 주소
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

