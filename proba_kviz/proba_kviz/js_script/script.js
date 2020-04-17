
function doAnimation(){
    let targetAnimationSix = document.getElementById("divDivSix");
    targetAnimationSix.className = "animSix";
    let targetAnimationFour = document.getElementById("divDivFour");
    targetAnimationFour.className = "animFour";
    let targetAnimationTwo = document.getElementById("divDivTwo");
    targetAnimationTwo.className = "animTwo";
    let targetAnimationOne = document.getElementById("divDivOne");
    targetAnimationOne.className = "animOne";
    let secondDiv = document.getElementById("thirthDiv");
    secondDiv.className = "animThirthDiv";

    let btnDiv = document.getElementById("divDivFive");
    btnDiv.style.display = "none";

    let divQusetion = document.getElementById("divDivThree");
    divQusetion.style.display = "none";
 
}
// Go to Second Stage
const secondStage = function(e) {
    let btn = document.querySelector('#btnNapred');
    btn.addEventListener('click',function(){
        window.document.location = './stageTwo.html';
    });
};

    document.addEventListener('DOMContentLoaded',function(){
        secondStage();
    });


let a = jQuery(document).ready(function($){
    let secondDiv = $("#secondDiv");
    secondDiv.append('<div class="boxOne"><div class="backOne">' +
    ' <span style="font-size:40px;">&#10008;</span></div><div class="frontOne"></div></div>' + 
    '<div class="boxTwo"><div class="backTwo">' +
    ' <span style="font-size:40px;">&#10004;</span></div><div class="frontTwo"></div></div>' +
    '<div class="boxThree"><div class="backThree">' +
    ' <span style="font-size:40px;">&#10008;</span></div><div class="frontThree"></div></div>' +
    '<div class="boxFour"><div class="backFour">' +
    ' <span style="font-size:40px;">&#10008;</span></div><div class="frontFour"></div></div>');
    
    let boxesOne = $(".boxOne");
    let boxesTwo = $(".boxTwo");
    let boxesThree = $(".boxThree");
    let boxesFour = $(".boxFour");

//     boxesOne.click(function() {       
//         $(this).find(".frontOne").css("transform","perspective(900px) rotateY(180deg)");
//         $(this).find(".backOne").css("transform","perspective(900px) rotateY(0deg)");      
//     });
//     boxesTwo.click(function() {              
//         $(this).find(".frontTwo").css("transform","perspective(900px) rotateY(180deg)");
//         $(this).find(".backTwo").css("transform","perspective(900px) rotateY(0deg)");     
//    });
//    boxesThree.click(function() {  
//         $(this).find(".frontThree").css("transform","perspective(900px) rotateY(180deg)");
//         $(this).find(".backThree").css("transform","perspective(900px) rotateY(0deg)");
//     });
//     boxesFour.click(function() {
//         $(this).find(".frontFour").css("transform","perspective(900px) rotateY(180deg)");
//         $(this).find(".backFour").css("transform","perspective(900px) rotateY(0deg)");     
//     });

let errorRadioMessage = $("#secondDiv");
let points = $(".pointsNum");

    let clickRadio = $("#btnOne");
    clickRadio.click(function(){
        if($("#slavko").is(":checked")){
            $(boxesOne).find(".frontOne").css("transform","perspective(900px) rotateY(180deg)");
            $(boxesOne).find(".backOne").css("transform","perspective(900px) rotateY(0deg)"); 
            $(boxesTwo).find(".frontTwo").css({"transform":"perspective(900px) rotateY(180deg)",
                "transition-delay":" 1s"});
            $(boxesTwo).find(".backTwo").css({"transform":"perspective(900px) rotateY(0deg)",
                "transition-delay":" 1s"});           
        }
        
        else if($("#grigor").is(":checked")){
            $(boxesTwo).find(".frontTwo").css("transform","perspective(900px) rotateY(180deg)");
            $(boxesTwo).find(".backTwo").css("transform","perspective(900px) rotateY(0deg)"); 
            $(points).text("- 3 - ");
        }
        else if($("#tom").is(":checked")){
            $(boxesThree).find(".frontThree").css("transform","perspective(900px) rotateY(180deg)");
            $(boxesThree).find(".backThree").css("transform","perspective(900px) rotateY(0deg)"); 
            $(boxesTwo).find(".frontTwo").css({"transform":"perspective(900px) rotateY(180deg)",
                "transition-delay":" 1s"});
            $(boxesTwo).find(".backTwo").css({"transform":"perspective(900px) rotateY(0deg)",
                "transition-delay":" 1s"});         
        }
        else if($("#ibe").is(":checked")){
            $(boxesFour).find(".frontFour").css("transform","perspective(900px) rotateY(180deg)");
            $(boxesFour).find(".backFour").css("transform","perspective(900px) rotateY(0deg)"); 
            $(boxesTwo).find(".frontTwo").css({"transform":"perspective(900px) rotateY(180deg)",
                "transition-delay":" 1s"});
            $(boxesTwo).find(".backTwo").css({"transform":"perspective(900px) rotateY(0deg)",
                "transition-delay":" 1s"});        
        }
        else{
            errorRadioMessage.append('<p class="errorMessageOne">ТРЕБА ДА ГО ОДБЕРЕТЕ ПРВО ВАШИОТ ОДГОВОР НА ПРАШАЊЕТО</p>');
        }
        
    });
    
}); 

