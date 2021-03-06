var $ = require('jquery/dist/jquery.slim');

$(window).on('pjax:load',function(){
  if(window.gtag) gtag('event', 'page_view');
  if(window.DISQUS){
    // DISQUSでresetを送信します。
    // disqus_configはページ内に別に定義されています。
    DISQUS.reset({
      reload: true,
      config: disqus_config
    })
  }
  $('.carousel').carousel()
})

$(window).on('pjax:unload',function(){
  $('script[src$="disqus.com/embed.js"]').remove()
})