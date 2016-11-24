;(function($, document, undefined) {
    $(function() {
        /* 返回顶部 */
        var $backtop=$('.backtop');
        $(window).scroll(function(){
            var scrollTop=$(document).scrollTop();
            if(scrollTop>800){
                $backtop.css({display:'block'});
            }else{
                $backtop.css({display:'none'});
            };
        });
        $backtop.click(function(){
            $('html,body').animate({scrollTop:0},1000);
        });
        /* 懒加载 */
        $("img.lazyload.first").lazyload({
            effect:"fadeIn",
            failurelimit:10,
            threshold:100
        });
    });
})(window.jQuery || $, document);