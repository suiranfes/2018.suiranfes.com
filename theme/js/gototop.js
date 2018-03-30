var $ = require('jquery');
function register_go2top(){
    $('.trigger-gototop').off('click')
    $('.trigger-gototop').on('click', function(){
        $('html,body').animate({scrollTop:0},200);
    })
}
$(register_go2top)
$(document).on('pjax:ready', register_go2top);