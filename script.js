var c=0;
$("#change").click(function() {
  if (c == 1) {
  acerto();
}
  $("#change").html("<a onclick='acerto()'>BORA</a>");
  $("#move").show();
  c=1;
});

$("#move").hover(function() {
  change();
});

$("#no").hover(function() {
  change();
});

function acerto() {
  alert("Marcado então!!!S2");
}

function change()
{
    var i = Math.floor(Math.random()*300)+1;
    var j = Math.floor(Math.random()*400)+1;
    $("#move").css({top: j+'px',left: i+'px'});
}
