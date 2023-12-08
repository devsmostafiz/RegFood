// ========= Nav Bar Area Here ===========
var navbar = document.querySelector(".navbar");
var navbarSupportedContent = document.querySelector("#navbarSupportedContent");

window.onscroll = function(){
  if( window.scrollY >= navbarSupportedContent.offsetTop){
    navbar.classList.add("sticky");
  }
  else{
    navbar.classList.remove("sticky");
  }

}


// ========= Daily Offer Area Here ===========
$('.offer_item_wrapper').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true,
    prevArrow: '.offer_arrow_prv',
    nextArrow: '.offer_arrow_next',
    autoplay:true,
    responsive: [
      {
        breakpoint: 1209,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // ========= Food Manu Area Here ===========

  $(function(){
   var containerEl = document.querySelector(".mixit_main");
    var mixer = mixitup(containerEl, {
        animation: {
          duration: 1000
        }
    });
  })
// ========= Team  Offer Area Here ===========
  $('.team_mrmber_wrapper').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:true,
    prevArrow: '.clck_arrow_prv',
    nextArrow: '.clck_arrow_next',
    autoplay:true,
    responsive: [
      {
        breakpoint: 1209,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // ========= Easy Order Area Here ===========

  $('.easy_item_wrapper').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1209,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // ========= Testimonial Area Here ===========

  $('.testimonial_wrapper').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows:true,
    prevArrow: '.testimonial_arrow_prv',
    nextArrow: '.testimonial_arrow_next',
    autoplay:true,
    responsive: [
      {
        breakpoint: 1209,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // ======== Counter Area Here =======

  $(function(){
      $('.counter').counterUp({
        delay: 10,
        time: 5000
      });
  })

  // ===== News And Blog Area Here =======
  
  $('.blog_news_item_wrapper').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true,
    prevArrow: '.News_arrow_prv',
    nextArrow: '.News_arrow_next',
    autoplay:true,
    responsive: [
      {
        breakpoint: 1209,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  //========= scroll btn start ==========
  
  $(function() {
    $("#scroll_btn").click(function(){
      $("body,html").animate({scrollTop:0});
    })

    $(window).scroll(function(){
      var scrolling = $(this).scrollTop();
      if(scrolling > 300){
        $("#scroll_btn").addClass("active_scroll");
      }
      else{
        $("#scroll_btn").removeClass("active_scroll");
      }
    })
  })