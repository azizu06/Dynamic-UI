import './styles.css';
import { drop } from './dropdown.js';
import { circleNav, slider, slideRight } from './carousel.js';

const dropdown = document.querySelector('.menu');
const items = document.querySelector('.items');

drop(dropdown, items);
circleNav();
slider();
setInterval(slideRight, 2500);
