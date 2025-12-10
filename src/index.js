import './styles.css';
import { drop } from './dropdown.js';
import { circleNav, slider } from './carousel.js';

const dropdown = document.querySelector('.menu');
const items = document.querySelector('.items');

drop(dropdown, items);
slider();
circleNav();
