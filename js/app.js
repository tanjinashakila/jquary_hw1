$(function(){
    // preloader
    let preLoader = $('.preLoader')
    $(window).on('load',function(){
        preLoader.fadeOut(200)
    })
//  faq
    let faq = $('.faq');
    
  faq.click(function() {

        if($(this).hasClass('active')){
            $(this).removeClass('active')
        }
        else{

            faq.removeClass('active')
            $(this).addClass('active')
        }
    });
// hide and show
let hide = $('.hide')
let show = $('.show')
let toggle=$('.toggle')
let hideCnt =$('.hideCnt')

hide.click( function(){
    hideCnt.hide(300)
    
})
show.click( function(){
    hideCnt.show(300)
})
toggle.click( function(){
    hideCnt.toggle(300)
})
    // navbar
    let navbar = $('.navbar');

    $(window).scroll(function(){
    let scrollTop = $(window).scrollTop();

    if(scrollTop > 500){
     navbar.addClass('fixed')
    }
    else{
       navbar.removeClass('fixed')
    }
    })

})
