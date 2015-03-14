function shadesOfGrey(n) {
  var shades = [];
  for (var i = 0; i <= Math.min(n, 256); i++) {
    var grey = ('0' + i.toString(16)).slice(-2);
    shades.push('#' + grey + grey + grey);
  }
  return {
    firstColor : function(){
      return shades[0];
    },
    lastColor : function(){
      return shades[shades.length-1];
    }
  };
}


var rangeSliderValue = $('.shades-input').val();

var greyShades = shadesOfGrey(rangeSliderValue);
$('.shades-counter').html(rangeSliderValue);

$(".shades-input").mousemove( function(e){
    
   var newValue = $(this).val();
    
    var newGreyShades = shadesOfGrey(newValue);
    
    $('.shades-counter').html(newValue);
    
    $('.main').css({ 'background': '-webkit-gradient(linear,left top,left bottom,from(' + newGreyShades.firstColor() + '),to(' + newGreyShades.lastColor() + '))' });
});

$('.main').css({ 'background': '-webkit-gradient(linear,left top,left bottom,from(' + greyShades.firstColor() + '),to(' + greyShades.lastColor() + '))' });
