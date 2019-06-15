import '@babel/polyfill';
import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'bootstrap';
// import '../libs/fancybox/jquery.fancybox.js';
// import 'fancybox';

import './vendor/fontawesome';

// import './vendor/jquery.fancybox';

svg4everybody();

window.$ = $;
window.jQuery = $;

require('ninelines-ua-parser');

