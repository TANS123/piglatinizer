$( "document" ).ready(function() {
$("#button").click(function(){
 var latinInput = $(".input").val();
 var str = latinInput;
 var results = ''
 var wrds = str.split(' ')
 wrds.forEach(function(letter) {
     var n = letter.search(/[aeiouAEIOU]/);
     if (n == -1) {
         n = 0
     }
    var end = letter.slice(n);
    var beg = letter.slice(0, n);
    var pig = end + beg + "ay"
    results = results + pig + ' ';
 });
 $("p").text(results);




});
});