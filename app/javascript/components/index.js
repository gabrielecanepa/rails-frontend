import { initUpdateNavbarOnScroll } from './navbar';
import { loadDynamicBannerText } from './banner';

initUpdateNavbarOnScroll();

document.addEventListener('turbolinks:load', () => {
  loadDynamicBannerText();
});
