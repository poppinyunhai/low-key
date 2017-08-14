$(document).ready(function() {
  var b = $("tspan");
  var amount = $("tspan").text();
  b.text("你猜? 就不给你看!!");
  var txt2=$("<input type=hidden id=chrome_amount>").val(amount);
  $(".ui.very.relaxed.horizontal.link.list").after(txt2)
});
