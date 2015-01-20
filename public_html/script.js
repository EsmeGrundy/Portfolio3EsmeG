

$("document").ready(function() {
    $(".class1").css("color", "orange");//changes the text labeled with class1 to orange
    $("div p:last-child").css("background-color", "yellow");//makes the last p in each div have a yellow background
    $("#chelsea").css({"width": "400px", "height": "auto"});//changes the size of the image
    $("#slide").css({"position": "relative", "height": "200px", "width": "200px"});//positions and sizes the slideshow of pictures
    $("#slide div").css({"position": "absolute", "z-index": "0"});
    $("#slide div.prev").css({"z-index": "1"});
    $("#slide div.active").css({"z-index": "2"});

    $("#alertButton").bind("click", alertButtonClick);//binds the alertButtonClick function to a button when the user clicks
    $("#chelsea").bind("mouseover", mouseOverMe)//binds hover functions to an image
            .bind("mouseout", mouseOutMe)
            .bind("click", mouseClick);//binds a click function to an image

    $("#replaceHTML").bind("click", replaceHTML);//replaces text when a user clicks a button
    $("#addPara").bind("click", addPara);//adds a paragraph tag when a user clicks a button
    $("#removePara").bind("click", removePara);//removes a paragraph tag when a user clicks a button

    $("#hideLogo").bind("click", hideLogo);//hides an image when a user clicks a button
    $("#showLogo").bind("click", showLogo);//displays a logo when a user clicks a button
    $("#highLogo").bind("click", highLogo);//highlights a logo when a user clicks a button
    
   $("#essay").accordion({header: "h4"});//makes an accordion out of the div identified as "essay" using jquery ui
   setInterval("slide()", 2000);
        

});

function alertButtonClick() {
    alert("There was a button clicked");//creates an alert when a button is clicked
}

function mouseOverMe()
{
    $("#first").html("You put your cursor on my logo");//changes text when a user hovers over an image
}

function mouseOutMe()
{
    $("#first").html("You left my logo");//changes text when a user leaves an image
}

function mouseClick(){
    $("#first").html("<h1>Click!</h1>")//changes text when a user clicks on an image
        }

function replaceHTML() {
    $("#h3Tag").html("<h1>New H1 Tag!!!!!</h1>");//replaces an h3 tag with an h1 tag when clicked
}

function addPara() {
    $("#randPara").append("<p>Another Paragraph</p>");//adds a p tag when clicked
}

function removePara() {
    $("#randPara p:last-child").remove();//removes the last p tag when clicked
}

function hideLogo() {
    $("#chelsea").hide("puff", {}, 2500);//hides an image with an animation (from jquery ui) when clicked
}

function showLogo() {
    $("#chelsea").show("fold", {}, 2500);//shows an image with a jquery ui animation when clicked
}

function highLogo() {
    $("#logo").effect("highlight", {color: "purple"}, 500);//highliights an image with a jquery ui animation when clicked
}

function slide(){
    var current = $("#slide div.active");//creates new variable that is the element labeled active
    var next = current.next();
    if(next.length === 0){
        next = $("#slide div:first");//if the length is equal to 0, the next variable is assigned to the element labeled with the class "first"
    }
    current.removeClass("active").addClass("prev");//removes the active class and assigns the prev class to whatever was current
    next.css({opacity: 0.0}).addClass("active").animate({opacity: 1.0}, 2000, function(){
        current.removeClass("prev");
    });//animates to the next picture
}



