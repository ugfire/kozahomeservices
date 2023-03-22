$(function() {
    var Page = (function() {
      var $container = $('#slicebox-container'),
        $items = $container.children(),
        itemsCount = $items.length,
        current = 0,
        animating = false,
        slicebox = $container.slicebox({
          onReady: function() {
            // show the image after the Slicebox is ready
            $('#showpopup').show();
          },
          orientation: 'h',
          cuboidsRandom: true,
          disperseFactor: 30
        }),
  
        init = function() {
          // hide the image initially
          $('#showpopup').hide();
  
          // handle click events on the Slicebox
          $container.find('a.slicebox-link').on('click', function(e) {
            e.preventDefault();
            if (animating) {
              return false;
            }
            animating = true;
  
            // navigate to the next item
            slicebox.next();
  
            return false;
          });
  
          // start the Slicebox autoplay
          slicebox.play();
  
          // show the first image
          showImage(0);
        },
  
        showImage = function(index) {
          // show the image at the given index
          current = index;
          $('#showpopup').attr('src', $items.eq(index).find('img').attr('src'));
        };
  
      return {
        init: init,
        showImage: showImage
      };
  
    })();
  
    Page.init();
  });
  