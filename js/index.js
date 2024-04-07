    $(document).ready(function() {
      $('.owl-carousel').owlCarousel({
        items: 1,
        loop:true,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 6000, // Delay between slides (in milliseconds)
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'], // Use custom icons for navigation arrows
        animateOut: 'fadeOut', // Use fadeOut animation when transitioning to the next slide
        animateIn: 'fadeIn', // Use fadeIn animation when transitioning to the current slide
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          992: {
            items: 3
          }
        }
      });
    });
