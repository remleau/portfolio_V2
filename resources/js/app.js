// LARAVEL
require('./bootstrap');

// JS BY PAGES
import { global } from './global';
import { home } from './pages/home';

document.addEventListener("DOMContentLoaded", function () {

	global();
	home();

});