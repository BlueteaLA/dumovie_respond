;(function($, document, undefined) {
    $(function() {
       /* 启动瀑布流 */
        lazy();
    });
})(window.jQuery || $, document);


function waterfall(){
    $('.information-list').imagesLoaded(function(){
        $('.information-list').masonry({
            itemSelector: '.item',
            columnWidth: 250,
            isAnimated: true,
            gutter: 30
        });
    });
};

function lazy(){
    waterfall();
    $(".information-list img.lazyload").lazyload({
		effect:"fadeIn",
		failurelimit:10,
        threshold : 100,
		load:waterfall
	});
};