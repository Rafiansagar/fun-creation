
(function($) {
    "use strict";
    // Preloder
    $(window).load(function() {
        $("#loader").delay(2500).fadeOut(500);
    }) 
    // Parallax Stuff
    if ($("#stuff").length) {
        var stuff = $('#stuff').get(0);
        var parallaxInstance = new Parallax(stuff);
    }

    // particle
    var canvasDiv = document.getElementById('particle-canvas');
    var options = {
      particleColor: '#ebedef',
      background: '#000',
      interactive: true,
      speed: 'medium',
      density: 'low'
    };
    var particleCanvas = new ParticleNetwork(canvasDiv, options);
    
})(jQuery);