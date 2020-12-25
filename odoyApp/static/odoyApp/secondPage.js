const progress_bar1 = document.getElementsByClassName("progress-bar1")[0];
const progress_bar2 = document.getElementsByClassName("progress-bar2")[0];
progress_bar1.style.setProperty('--width', 70);
progress_bar2.style.setProperty('--width', 40);

//console.log("안녕")
// setProperty('--width',(input percentage here getting the value from django))

//Draw Graph
const ctx = document.getElementById("myChart").getContext('2d');

const myChart = new Chart(ctx,{
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
    }
    

});

//Button action for opening and closing menu 
const navi = document.getElementById('navi');


const hideornotButton = document.getElementById("hideornot-button");
hideornotButton.addEventListener("click",function(){
    if(navi.style.display == 'none')
    {
        navi.style.display  = 'inline';
        console.log("보임");
    }
    else{
        navi.style.display  = 'none';
        console.log("안보임");
    }
});

