const clock = document.getElementById("timelbl")

// 현재시간을 출력하는 함수
function printClock() {
    var currentTime = new Date();
    var calendar = currentTime.getFullYear() + "-" + (currentTime.getMonth()+1) + "-" + currentTime.getDate() + " ";
    var currentHours = addZeros(currentTime.getHours(),2);
    var currentMinutes = addZeros(currentTime.getMinutes(),2);
    var currentSeconds = addZeros(currentTime.getSeconds(),2);

    clock.innerHTML = calendar + currentHours + ":" + currentMinutes + ":" + currentSeconds;
    
    setTimeout("printClock()",1000);
}

// 시간에 맞게 배경 이미지 변경할 예정
// function changeBackground() {
//     var hour = new Date();
//     var currentHour = hour.getHours();
//     var urls = "";

//     if((currentHour >= 20 && currentHour <= 24)||(currentHour >= 0 && currentHour <= 4)){
//         document.body.style.backgroundImage = "url('images/morning.png')";
//     }else if(currentHour >= 4 && currentHour <= 12) {
        
//     }else if(currentHour >= 12 && currentHour <= 20){
        
//     }


//     setTimeout("changeBackground()", 3600000);
// }

window.onload = function() {
    printClock();
    // changeBackground();
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