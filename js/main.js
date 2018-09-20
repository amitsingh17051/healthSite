

  window.sr = ScrollReveal();

		
      sr.reveal('nav', { duration: 1000 } );
      sr.reveal('.banner', { duration: 1000 });
      sr.reveal('.ser', { duration: 1000 });
      sr.reveal('.about', { duration: 1000 });

      $('body').on('load', function(e){ 

      		e.preventDefault();

            $('body').animate({ scrollTop: 0 }, 400);
            return false; 
});


