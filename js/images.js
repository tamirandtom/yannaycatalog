$(document).ready(function() { 
$( ".mediumimage" ).on( "click", function() {
  $(this).parent().find('span').toggleClass('hidden');
});

});