$('p').removeClass('myClass noClass').addClass('yourClass');

$(['p', 't']).text('hello');

const tag = $('ul li').addClass((index) => {
  return 'item-' + index;
});

$(tag).html((i: number) => {
  console.log(this);
  return $(this).data('name') + '입니다';
});
