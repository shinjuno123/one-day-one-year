const progress_bar1 = document.getElementsByClassName("progress-bar1")[0];
const progress_bar2 = document.getElementsByClassName("progress-bar2")[0];
progress_bar1.style.setProperty('--width', 50);
progress_bar2.style.setProperty('--width', 40);

// setProperty('--width',(input percentage here getting the value from django))


// $(document).ready(function(){
        
//     //모든 서브 메뉴 감추기
//     $(".sub").css({display:"none"}); 
//     //$(".sub").hide(); //위코드와 동일 

//     $(".title").click(function(){
//         //일단 서브메뉴 다 가립니다.
//         //$(".sub").css({display:"none"});
        
//         //열린 서브메뉴에 대해서만 가립니다.
//         $(".sub").each(function(){
//             console.log($(this).css("display"));
//             if($(this).css("display")=="block") {
//                 //$(".sub").css({display:"none"});
//                 //$(this).hide();
//                 $(this).slideUp("fast");
//             }
//         });

//         //현재 요소의 다음 요소를 보이게 합니다.
//         //$(this).next("ul").css({display:"block"});
//         //$(this).next("ul").show();
//         $(this).next("ul").slideDown("fast");


//     })
// });