$('p').removeClass('myClass noClass').addClass('yourClass');

$(['p', 't']).text('hello');

const tag = $('ul li').addClass(function (index) {
  return 'item-' + index;
});

$(tag).html(function (i: number) {
  console.log(this);
  return $(this).data('name') + '입니다';
});

// ? test
const b: Element = tag; // ! error
const c: ArrayLike<Element> = tag;
