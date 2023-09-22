let headingText = document.querySelector('#heading');

function throttle(func, delay) {
  let lastCall = 0;
  return function () {
    let now = new Date().getTime();
    if (now - lastCall < delay) return;
    lastCall = now;
    func();
  };
}

function windowResize(event) {
  const width = window.outerWidth;
  const height = window.outerHeight;
  const text = `Width is ${width}px and Height is ${height}px`;
  headingText.innerHTML = text;
}
window.addEventListener('resize', throttle(windowResize, 1000));

// window.addEventListener('resize', windowResize);
