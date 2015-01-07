/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function() {
    $(".class1").css("color", "orange");
    $("div p:last-child").css("background-color", "yellow");
    $("#chelsea").css({"width": "400px", "height": "auto"});

    $("#alertButton").bind("click", alertButtonClick);
    $("#chelsea").bind("mouseover", mouseOverMe)
            .bind("mouseout", mouseOutMe);
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
