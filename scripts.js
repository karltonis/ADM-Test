$(document).ready(function(){
  var e=$("input[type='checkbox']"),t=$(".done");t.attr("disabled",!0),e.click(function(){
    e.is(":checked")?(t.addClass("active"),t.attr("disabled",!1)):(t.removeClass("active"),t.attr("disabled",!0))})
    ,$(":checkbox").on("click",function(){$(this).parent().parent().toggleClass("selected")})});
