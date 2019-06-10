import '@babel/polyfill';
import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'bootstrap';
import './vendor/fontawesome';

svg4everybody();

window.$ = $;
window.jQuery = $;

require('ninelines-ua-parser');

