$( "document" ).ready(function() {
$("#button").click(function(){
 var latinInput = $(".input").val();
 var str = latinInput;
 var n = str.search(/[aeiouAEIOU]/);
 var end = str.slice(n);
 var beg = str.slice(0, n);
 $("p").append(end + beg + "ay");

});
});