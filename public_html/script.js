/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function() {
    $(".class1").css("color", "orange");
    $("div p:last-child").css("background-color", "yellow");
    $("#chelsea").css({"width": "400px", "height": "auto"});
    $("#slide").css({"position": "relative", "height": "200px", "width": "200px"});
    $("#slide div").css({"position": "absolute", "z-index": "0"});
    $("#slide div.prev").css({"z-index": "1"});
    4("#slide div.active").css({"z-index": "2"});

    $("#alertButton").bind("click", alertButtonClick);
    $("#chelsea").bind("mouseover", mouseOverMe)
            .bind("mouseout", mouseOutMe)
            .bind("click", mouseClick);

    $("#replaceHTML").bind("click", replaceHTML);
    $("#addPara").bind("click", addPara);
    $("#removePara").bind("click", removePara);

    $("#hideLogo").bind("click", hideLogo);
    $("#showLogo").bind("click", showLogo);
    $("#highLogo").bind("click", highLogo);
    
   $("#essay").accordion({header: "h4"});
   setInterval("slide()", 2000);

});

function alertButtonClick() {
    alert("There was a button clicked");
}

function mouseOverMe()
{
    $("#first").html("You put your cursor on my logo");
}

function mouseOutMe()
{
    $("#first").html("You left my logo");
}

function mouseClick(){
    $("#first").html("<h1>Click!</h1>")
        }

function replaceHTML() {
    $("#h3Tag").html("<h1>New H1 Tag!!!!!</h1>");
}

function addPara() {
    $("#randPara").append("<p>Another Paragraph</p>");
}

function removePara() {
    $("#randPara p:last-child").remove();
}

function hideLogo() {
    $("#chelsea").hide("puff", {}, 2500);
}

function showLogo() {
    $("#chelsea").show("fold", {}, 2500);
}

function highLogo() {
    $("#logo").effect("highlight", {color: "purple"}, 500);
}

function slide(){
    var current = $("#slide div.active");
    var next = current.next();
    if(next.length === 0){
        next = $("#slide div:first");
    }
    current.removeClass("active").addClass("prev");
    next.css({opacity: 0.0}).addClass("active").animate({opacity: 1.0}, 2000, function(){
        current.removeClass("prev");
    });
}

