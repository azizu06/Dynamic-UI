import './styles.css';
import { drop } from './dropdown.js';

const dropdown = document.querySelector('.menu');
const items = document.querySelector('.items');

drop(dropdown, items);
