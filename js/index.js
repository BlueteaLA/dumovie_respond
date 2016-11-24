$(function(){
    /* banner 设置轮播图的图片src 与 url */
    var t=null;
    function setanimate(){
        clearInterval(t);
        t=setInterval(tinySlider,3000);
    };
    function clearanimate(){
        clearInterval(t);
    };
    function tinySlider() {
        i++;
        i=i<($slideBtn.length)?i:0;
        $slideBtn.removeClass("active").eq(i).addClass("active");
        imgs.css({zIndex:0,opacity:0}).eq(i).css({zIndex:1,opacity:1});
    };
    var imgs=$(".banner-imgs a");
    var $slideBtnBox=$(".slide-btn-box");
    for(var i=0;i<imgs.length;i++){
        var $btns=$("<div>");
        $btns.addClass("slide-btn").css({width:100/imgs.length+"%"}).appendTo($slideBtnBox);
    };
    var $slideBtn=$(".slide-btn");
    var i=0;
    $slideBtn.removeClass("active").eq(i).addClass("active");
    imgs.css({zIndex:0,opacity:0}).eq(i).css({zIndex:1,opacity:1});
    $("#banner").mouseover(function () {
        clearanimate();
    }).mouseout(function () {
        setanimate();
    });
    setanimate();
    $slideBtn.click(function(e){
        e.stopPropagation();
        $slideBtn.removeClass("active");
        $(this).addClass("active");
        i=$(this).index();
        imgs.css({zIndex:0,opacity:0}).eq(i).css({zIndex:1,opacity:1});
        clearanimate();
    });
});



