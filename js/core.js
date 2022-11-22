$(document).ready(function(){
    tabControl(".tabUI li input[type='button']");
    tabControl(".orderBox div input[type='button']");
    gnbPanel();
    accControl("#faq ul li");
    accControl("input[value='wishPick']");
    listSideControl();
    orActive(".orderContainer fieldset div input[type='button']");
    setToday("input[type='date']");
    reloadSlider(".factorySlide");
    customSlider(".slideBox",3,1,500,false,false);
    customSlider(".detailSlider",1,1,860,false,false);
    respSearch();
    popupControl("input[value='Delete']",".delete input");
});

function accControl(target){
    var toggleStatus = false;
    $(target).click(function(){
        toggleStatus = !toggleStatus;
        if(toggleStatus == true){
            $(this).addClass("active");
        }else{
            $(this).removeClass("active");
        }
    });
}
function setToday(target){
    var now = new Date();
    var month = (now.getMonth() + 1);               
    var day = now.getDate();
    if (month < 10) 
        month = "0" + month;
    if (day < 10) 
        day = "0" + day;
    var today = now.getFullYear() + '-' + month + '-' + day;
    $(target).val(today);
}

function tabControl(btn){
    var currentTab = null;
    $(btn).click(function(){
        currentTab = "#" + $(this).attr('data-tabName');
        $(".tabPanel").removeClass("active");
        $(currentTab).addClass("active");
        $(btn).removeClass("active");
        $(this).addClass("active");
    });
}
function gnbPanel(){
    var toggleStatus = false;
    $("[data-panelName='gnbPanel']").click(function(){
        $("#gnbPanel").toggleClass("active");
        toggleStatus = !toggleStatus;
        if(toggleStatus == false){
            $(this).text("menu");
        }else{
            $(this).text("close");
        }
    });
}
function orActive(target){
    $(target).click(function(){
        $(target).removeClass("active");
        $(this).addClass("active");
    });
}
function listSideControl(){
    $(".toggle_box").click(function(){
        var currentBox = "#" + $(this).attr("data-boxname");
        if($(this).val() == "x"){
            $(this).val("+");
        }else{
            $(this).val("x");
        }
        $(currentBox).toggleClass("active");
    });
}
function customSlider(target,maxCount,minCount,slideW,autoBoolean,conVal){
    $(target).bxSlider({
        maxSlides: maxCount,
        minSlides: minCount,
        slideWidth: slideW,
        auto: autoBoolean,
        controls: conVal
    });
}
function reloadSlider(target){
    var reSlideTarget = $(target).bxSlider({
        maxSlides: 3,
        minSlides: 1,
        slideWidth: 600,
        controls: false
    });
    $(".tabUI li input[type='button']").click(function(){
        reSlideTarget.reloadSlider();
    });
}

function respSearch(){
    if (window.matchMedia("(max-width: 1279px)").matches) {
        $("input[value='search'].mui").click(function(){
            $(this).toggleClass("active");
            $("header > div:first-of-type div span").toggleClass("active");
        });
      }
}

function popupControl(openBtn,closeBtn){
    var currentPop = null;
    $(openBtn).click(function(){
       currentPop =  "#" + $(this).attr("data-popname");
       $(currentPop).addClass("active");
    })
    $(closeBtn).click(function(){
        currentPop.removeClass("active");
    });
}