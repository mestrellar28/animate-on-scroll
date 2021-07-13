import './main.scss';

// select all the elements to animate
let elements = document.querySelectorAll('.animate');

// intersecion observer options
let options = {
   rootMargin: '-30%',
   treshold: 0.9,
};

// intersection observer
let observer = new IntersectionObserver(showEl, options);

// add active class when every element is in the viewport
function showEl(entries) {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         entry.target.classList.add('active');
      }
   });
}

// observe every element
elements.forEach((el) => {
   observer.observe(el);
});

// Force to refresh page on top
if (history.scrollRestoration) {
   history.scrollRestoration = 'manual';
} else {
   window.onbeforeunload = function () {
      window.scrollTo(0, 0);
   };
}

window.onbeforeunload = function () {
   window.scrollTo(0, 0);
};
