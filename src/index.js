import _ from 'lodash';
import Print from './print';

import './style.css';
import Icon from './pig.jpg';

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  // add button
  const btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = Print;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());