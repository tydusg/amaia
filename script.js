(function () {
  'use strict';

  const select = (el, all = false) => {
    // select(el) or select(el, true)
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)]; // shorthand of writing document.querySelectorAll(el)
    } else {
      return document.querySelector(el); // shorthand of writing document.querySelector(el)
    }
  };

  const typed = select('.typed');
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
  }

  $('.smooth-goto').on('click', function () {
    $('html, body').animate(
      { scrollTop: $(this.hash).offset().top - 50 },
      1000
    );
    return false;
  });
})();
