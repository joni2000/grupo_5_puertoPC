window.addEventListener('load', ()=> {
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.dotsss',
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        },
        responsive: [
          {
            // primer quiebre 550px
            breakpoint: 550,
            settings: {
              // Set to `auto` and provide item width to adjust to viewport
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },{
            // segundo quiebre 810px
            breakpoint: 810,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          }
          ,{
            // tercer quiebre 810px
            breakpoint: 1070,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
          }
        ]
      });

    new Glider(document.querySelector('.glider2'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.dotsss',
        arrows: {
          prev: '.glider-prev2',
          next: '.glider-next2'
        },
        responsive: [
          {
            // primer quiebre 550px
            breakpoint: 550,
            settings: {
              // Set to `auto` and provide item width to adjust to viewport
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },{
            // segundo quiebre 810px
            breakpoint: 810,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          }
          ,{
            // tercer quiebre 810px
            breakpoint: 1070,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
          }
        ]
      });
})