import './styles/main.scss';
import 'animate.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import jQuery from 'jquery';
import FooterAccordion from './scripts/footer-accordion';
import StartDateForm from './scripts/start-date-form';
import MFS_Tab from './scripts/mfs-tab';
import SwiperSetup from './scripts/swiper-scripts';
import Accordion from './scripts/accordion';
import VideoPlayer from './scripts/video-player';
import './scripts/swiper-scripts';

window.$ = jQuery.noConflict();

// Instantiate the FooterAccordion class
new FooterAccordion();
new StartDateForm();
new MFS_Tab();
new SwiperSetup();
new Accordion();
new VideoPlayer();
