function throtle(func, delay) {
  let shouldCall = true;
  return function () {
    if (!shouldCall) return;
    func();
    shouldCall = false;

    setTimeout(() => {
      shouldCall = true;
    }, delay);
  };
}

// ClickHandler
let clickHandler = () => console.log('Button Clicked');

// AddEventListner
let btn = document.querySelector('#btn');
btn.addEventListener('click', throtle(clickHandler, 1000));
