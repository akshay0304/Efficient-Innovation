(function($) {
  "use strict"
  
  //circular switch
  var elem1 = Array.prototype.slice.call($('.js-switch-1'));
  elem1.forEach(html => {
    new Switchery(html, {
      color: '#00ab00',
      secondaryColor: '#00ab00'
    });
  });

  //square switch
  var elem2 = Array.prototype.slice.call($('.js-switch-2'));
  elem2.forEach(html => {
    new Switchery(html, {
      color: '#F62D51', 
      secondaryColor: '#F62D51'
    });
  });
    

})(jQuery);