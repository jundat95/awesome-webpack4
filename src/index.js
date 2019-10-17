import _ from 'lodash';
import './style.css';
import icon from './pig.jpg';

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // add images
  const myIcon = new Image();
  myIcon.src = icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());