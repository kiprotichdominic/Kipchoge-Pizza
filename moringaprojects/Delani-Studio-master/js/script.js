// jquery for image toggle
$(document).ready(function() {
  $("#whatText").hide();
  $("#whatText2").hide();
  $("#whatText3").hide();
  $(".imgtoggle01, .imgtoggle1").click(function() {
    $("#whatText").toggle();
    $(".imgtoggle01").toggle();
  });
  $(".imgtoggle02, .imgtoggle2").click(function() {
    $("#whatText2").toggle();
    $(".imgtoggle02").toggle();
  });
  $(".imgtoggle03, .imgtoggle3").click(function() {
    $("#whatText3").toggle();
    $(".imgtoggle03").toggle();
  });
});
//hover effect on the portfolio section
$(document).ready(function() {
  $(".myportfolio").hover(
    function() {
      $(this)
        .find(".myproject")
        .show();
    },
    function() {
      $(this)
        .find(".myproject")
        .hide();
    }
  );
});

//poup on submission
//form submissio
$(document).ready(function() {
  document.getElementById("form").addEventListener("submit", popUp);
  function popUp() {
    alert("Thanks Your message has been received.");
  }
});
