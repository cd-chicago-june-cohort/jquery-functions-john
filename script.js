$(document).ready(function() {

    $("body").hide().delay(500).fadeIn(1400);

    $("ul").hide();
    $("h2").click(function() {
        $("ul").slideToggle("slow");
    });

    $("#quote").hide();
    $("#gates").click(function() {
        $("#quote").show("slow");
    });

    $("#tog").click(function() {
        $(".amazon").toggle("slow");
        $("#tog").append("<p>I can't believe they bought Whole Foods.</p>");
    });

    $("img").click(function() {
        $("img").slideUp();
    });

    $("em").fadeOut(9000);

    $("li").click(function() {
        $("li").addClass("blueText");
        $("li").before("<li>You turned this text blue.</li>");
        $("li").after("<li>Look what you've done.</li>")
    });

    $("h1").click(function() {
        $("h1").html('<h1> technically it is Dr. Richard P. Feynman');
    });

    $("img").attr("alt", "Picture of Richard Feynman.");

    $( "body" ).data( "First", "Richard" );
    $( "body" ).data( "Last", "Feynman");
    $( "body" ).data("profession", "Physicicst");
    $( "body" ).data();

    $("input").keyup(function() {
        var val = $("input").val();
        var myText = val + " eh?  Ask me if I care.";
        $("#inputResponse").text(myText);
        var myData = $("body").data().First;
        $("ul").text(myData);
    });


    

});