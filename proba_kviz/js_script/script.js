

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
let btnNapred = document.querySelector('#btnNapred');
//(button) Go to Second Stage function
const secondStage = function(e) {
    
    btnNapred.addEventListener('click',function(){
        window.document.location = './stageTwo.html';
    });
};

document.addEventListener('DOMContentLoaded',function(){
        secondStage();
    });

// jquery function
jQuery(document).ready(function($){
    let secondDiv = $("#secondDiv");

    // added 4 boxes true or false answare
    secondDiv.append('<div class="boxOne"><div class="backOne">' +
    ' <span style="font-size:40px;">&#10008;</span></div><div class="frontOne"></div></div>' + 
    '<div class="boxTwo"><div class="backTwo">' +
    ' <span style="font-size:40px;">&#10004;</span></div><div class="frontTwo"></div></div>' +
    '<div class="boxThree"><div class="backThree">' +
    ' <span style="font-size:40px;">&#10008;</span></div><div class="frontThree"></div></div>' +
    '<div class="boxFour"><div class="backFour">' +
    ' <span style="font-size:40px;">&#10008;</span></div><div class="frontFour"></div></div>');
    
    // initialization boxes
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

    let clickRadio = $("#btnOne");

    // function for check radio button and for opening answare boxes
    clickRadio.click(function(){
        if($("#slavko").is(":checked")){
            $(boxesOne).find(".frontOne").css("transform","perspective(900px) rotateY(180deg)");
            $(boxesOne).find(".backOne").css("transform","perspective(900px) rotateY(0deg)"); 
            $(boxesTwo).find(".frontTwo").css({"transform":"perspective(900px) rotateY(180deg)",
                "transition-delay":" 1s"});
            $(boxesTwo).find(".backTwo").css({"transform":"perspective(900px) rotateY(0deg)",
                "transition-delay":" 1s"});   
            $("#btnNapred").removeAttr('disabled');  //enable button after choise some answare     
        }
        
        else if($("#grigor").is(":checked")){
            $(boxesTwo).find(".frontTwo").css("transform","perspective(900px) rotateY(180deg)");
            $(boxesTwo).find(".backTwo").css("transform","perspective(900px) rotateY(0deg)"); 
            $(points).text("- 3 - ");
            localStorage.setItem('points','- 3 - '); // if point is 3 transfer 3
            $("#btnNapred").removeAttr('disabled'); //enable button after choise some answare
        }
        else if($("#tom").is(":checked")){
            $(boxesThree).find(".frontThree").css("transform","perspective(900px) rotateY(180deg)");
            $(boxesThree).find(".backThree").css("transform","perspective(900px) rotateY(0deg)"); 
            $(boxesTwo).find(".frontTwo").css({"transform":"perspective(900px) rotateY(180deg)",
                "transition-delay":" 1s"});
            $(boxesTwo).find(".backTwo").css({"transform":"perspective(900px) rotateY(0deg)",
                "transition-delay":" 1s"});         
            $("#btnNapred").removeAttr('disabled'); //enable button after choise some answare
        }
        else if($("#ibe").is(":checked")){
            $(boxesFour).find(".frontFour").css("transform","perspective(900px) rotateY(180deg)");
            $(boxesFour).find(".backFour").css("transform","perspective(900px) rotateY(0deg)"); 
            $(boxesTwo).find(".frontTwo").css({"transform":"perspective(900px) rotateY(180deg)",
                "transition-delay":" 1s"});
            $(boxesTwo).find(".backTwo").css({"transform":"perspective(900px) rotateY(0deg)",
                "transition-delay":" 1s"});        
            $("#btnNapred").removeAttr('disabled'); //enable button after choise some answare
        }
        else{
            errorRadioMessage.append('<p class="errorMessageOne">' +
                'ТРЕБА ДА ГО ОДБЕРЕТЕ ПРВО ВАШИОТ ОДГОВОР НА ПРАШАЊЕТО</p>');   // Error message
            $("#btnNapred").attr('disabled',true);  // disable button before choise some answare
            firstDiv.css({"background-color":"red","background-image": "none" }); // error change color if dont choise any answare            
        }
        
    });
    
        localStorage.setItem('points','- 0 - ');// if point is 0 transfer 0
    
        
}); 


