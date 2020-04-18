// get points from first page
let getPoints = localStorage.getItem('points');
// console.log(getPoints);

// function for button for opening question and answare mini page and animation -
    // - thirth div elements
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

// function for button for go back
const backStage = function(e) {
    let btn = document.querySelector('#btnNazad');
    btn.addEventListener('click',function(){
        window.document.location = './index.html';
    });
};
document.addEventListener('DOMContentLoaded',function(){
    backStage();
});

// jquery function
jQuery(document).ready(function($){

    // added 4 boxes true or false answare
    let secondDiv = $("#secondDiv");
    secondDiv.append('<div class="boxOne"><div class="backOne">' +
    ' <span style="font-size:40px;">&#10008;</span></div><div class="frontOne"></div></div>' + 
    '<div class="boxTwo"><div class="backTwo">' +
    ' <span style="font-size:40px;">&#10008;</span></div><div class="frontTwo"></div></div>' +
    '<div class="boxThree"><div class="backThree">' +
    ' <span style="font-size:40px;">&#10008;</span></div><div class="frontThree"></div></div>' +
    '<div class="boxFour"><div class="backFour">' +
    ' <span style="font-size:40px;">&#10004;</span></div><div class="frontFour"></div></div>');
    
    // Take boxes
    let boxesOne = $(".boxOne");
    let boxesTwo = $(".boxTwo");
    let boxesThree = $(".boxThree");
    let boxesFour = $(".boxFour");

    // function for click boxes and open them
    
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

let firstDiv = $("#firstDiv");
let errorRadioMessage = $("#secondDiv");
let points = $(".pointsNum"); 
points.text(getPoints); // set points in new paragraph
    let clickRadio = $("#btnOne"); 

    // function for check radio button and for opening answare boxes 
    clickRadio.click(function(){
        if($("#slavko").is(":checked")){
            $(boxesOne).find(".frontOne").css("transform","perspective(900px) rotateY(180deg)");
            $(boxesOne).find(".backOne").css("transform","perspective(900px) rotateY(0deg)"); 
            $(boxesFour).find(".frontFour").css({"transform":"perspective(900px) rotateY(180deg)",
                "transition-delay":" 1s"});
            $(boxesFour).find(".backFour").css({"transform":"perspective(900px) rotateY(0deg)",
                "transition-delay":" 1s"});           
        }
        
        else if($("#tigar").is(":checked")){
            $(boxesTwo).find(".frontTwo").css("transform","perspective(900px) rotateY(180deg)");
            $(boxesTwo).find(".backFour").css("transform","perspective(900px) rotateY(0deg)"); 

            $(boxesFour).find(".frontFour").css({"transform":"perspective(900px) rotateY(180deg)",
                "transition-delay":" 1s"});
            $(boxesFour).find(".backFour").css({"transform":"perspective(900px) rotateY(0deg)",
                "transition-delay":" 1s"});
            
        }
        else if($("#tom").is(":checked")){
            $(boxesThree).find(".frontThree").css("transform","perspective(900px) rotateY(180deg)");
            $(boxesThree).find(".backThree").css("transform","perspective(900px) rotateY(0deg)"); 
            $(boxesFour).find(".frontFour").css({"transform":"perspective(900px) rotateY(180deg)",
                "transition-delay":" 1s"});
            $(boxesFour).find(".backFour").css({"transform":"perspective(900px) rotateY(0deg)",
                "transition-delay":" 1s"});         
        }
        else if($("#lav").is(":checked")){
            $(boxesFour).find(".frontFour").css("transform","perspective(900px) rotateY(180deg)");
            $(boxesFour).find(".backFour").css("transform","perspective(900px) rotateY(0deg)"); 
            // added change points
            if(getPoints == "- 0 - "){
                $(points).text("- 3 - ");
            }
            else{
                 $(points).text("- 6 -");
            }
           
        }
        else{
            errorRadioMessage.append('<p class="errorMessageOne">ТРЕБА ДА ГО ' + 
                'ОДБЕРЕТЕ ПРВО ВАШИОТ ОДГОВОР НА ПРАШАЊЕТО</p>'); // error message
            firstDiv.css({"background-color":"red","background-image": "none" }); // error change color if dont choise any answare
        }
        
    });
    
}); 

