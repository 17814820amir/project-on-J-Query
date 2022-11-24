$(document).ready(function() {
    $("p").click(function() {
        $(this).hide();
    });
});
$(document).ready(function() {
    $("#dec").click(function() {
        $("p").toggle();
    });
});
$(document).ready(function() {
    $("ol").click(function() {
        $("li").toggle();
    });
});
$(document).ready(function() {
    $("#grg").click(function() {
        $("#amir").bdlclick();
    });
});

$(document).ready(function() {
    $("#mous").mouseenter(function() {
        alert("you entered Zero waste Reduction!");


    });
});
$(document).ready(function() {
    $("#mous").mouseleave(function() {
        alert("Thank You For Visiting,Hope You enjoy Reading it!");
    });
});
$(document).ready(function() {
    $("input").focus(function() {
        $(this).css("background-color", "red ");
    });
    $("input").blur(function() {
        $(this).css("background-color", "yellow");
    });
});
$("input").focus(function() {
    $(this).css("background-color", "black");
});
$(document).ready(function() {
    $("#show").click(function() {
        $("img").show();

    });
    $("#hide").click(function() {
        $("img").hide();
    });
});
$(document).ready(function() {
    $("#hello").click(function() {
        $("#little").hide(25000);
    });
});
$(document).ready(function() {
    $("#in").click(function() {
        $("#png").fadeIn();
        $("#zero").fadeIn("slow");
    });
    $("#out").click(function() {
        $("#png").fadeOut();
        $("#zero").fadeOut(3000);
    });
});
$(document).ready(function() {
    $("#color").on({
        mouseenter: function() {
            $(this).css("background-Color", "white")
        },
        mouseleave: function() {
            $(this).css("background-color", "Grey")
        },
        click: function() {
            $(this).css("background-color", "Green")
        },
    });
});
$(document).ready(function() {
    $("#slide").click(function() {
        $("#panel").slideUp("slow");
    });
});
$(document).ready(function() {
    $("#down").click(function() {
        $("#slidedown").slideToggle("slow");
    });
    $("#png").click(function() {
        $("#slidedown").stop();
    });
});
$(document).ready(function() {
    $("#click").click(function() {
        $("#ani").animate({
            left: '250px',
            height: '100 px',
            width: '100 px',
            opacity: '.5 ',

        });
    });
});
$(document).ready(function() {
    $("#imi").click(function() {
        $("#umi").animate({
            height: 'toggle'
        });
    });
});
$(document).ready(function() {
    $("#gnp").click(function() {
        var waste = $("#waste");
        waste.animate({
            height: '400px',
            opacity: '1.0'
        }, "slow");
        waste.animate({ width: '400px', opacity: '1.5' }, "slow")
        waste.animate({ height: '100px', opacity: '.5' }, "slow")
        waste.animate({ width: '100px', opacity: '0.1' }, "slow")
    });
});
$(document).ready(function() {
    $("#gnp").click(function() {
        var isi = $("#isi");
        isi.animate({ left: '100px' }, "slow");
        isi.animate({ fontsize: '.5em' }, "slow");
    });
});
$(document).ready(function() {
    $("#gun").click(function() {
        $("#rose").hide("slow", function() {
            alert("The paragraph is now hidden");
        });
    });
});
$(document).ready(function() {
    $("#mi").click(function() {
        $("#mom").css("color", "yellow").slideUp(1000).slideDown(1000);
    });
});
$(document).ready(function() {
    $("#dog").click(function() {
        alert("Text: " + $("#test").text());
    });
    $("#cat").click(function() {
        alert("HTML: " + $("#test").html());
    });
});
$(document).ready(function() {
    $("#mir").click(function() {
        alert("Value: " + $("#mi").val());
    });
});
$(document).ready(function() {
    $("#abc").click(function() {
        $("#cap").text("Amir Gurung");
    });
    $("#abcd").click(function() {
        $("#jap").html("<b>Email!</b>");
    });
    $("#abcde").click(function() {
        $("#goom").val("John");
    });
});
$(document).ready(function() {
    $("#crow1").click(function() {
        $("#pre").prepend("<b>Classifying</b>");
    });
    $("#crow2").click(function() {
        $("ol").prepend("<li>Semi-solid waste.</li>");
    });
});
$(document).ready(function() {
    $("button").click(function() {
        $("#div1").remove();
    });
});
$(document).ready(function() {
    $("button").click(function() {
        $("#horm, rohm, moh").addClass("yellow");
        $("div").addClass("important");
    });
});
$(document).ready(function() {
    $("#emm").click(function() {
        alert("Background color = " + $("h5").css("background-color"));
    });
});
$(document).ready(function() {
    $("#dim").click(function() {
        var txt = "";
        txt += "Width of div: " + $("#div1").width() + "</br>";
        txt += "Height of div: " + $("#div1").height() + "</br>";
        txt += "Inner width of div: " + $("#div1").innerWidth() + "</br>";
        txt += "Inner height of div: " + $("#div1").innerHeight();
        $("#div1").html(txt);
    });
});