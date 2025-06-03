"use strict";
var _this = this;
$('p').removeClass('myClass noClass').addClass('yourClass');
$(['p', 't']).text('hello');
var tag = $('ul li').addClass(function (index) {
    return 'item-' + index;
});
$(tag).html(function (i) {
    console.log(_this);
    return $(_this).data('name') + '입니다';
});
