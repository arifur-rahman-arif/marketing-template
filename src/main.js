import './styles/main.scss';
import 'animate.css';
import jQuery from 'jquery';
import FooterAccordion from './scripts/footer-accordion';
import StartDateForm from './scripts/start-date-form';
import MFS_Tab from './scripts/mfs-tab';

window.$ = jQuery.noConflict();

// Instantiate the FooterAccordion class
new FooterAccordion();
new StartDateForm();
new MFS_Tab();
