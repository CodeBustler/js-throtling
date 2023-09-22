// JS Throtling | another way
function throtling(func, delay) {
  let lastCall = 0;
  return function () {
    let now = new Date().getTime();
    if (now - lastCall < delay) return;
    lastCall = now;
    func();
  };
}

let clickHandler = () => console.log('CLICKED');

let btn = document.querySelector('#btn');
btn.addEventListener('click', throtling(clickHandler, 2000));
