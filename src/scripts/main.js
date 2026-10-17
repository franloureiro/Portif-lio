import { config } from '../data/config.js';
import { projects } from '../data/projects.js';
import { initProjects } from './components/projects.js';
import { initContacts } from './components/contacts.js';
import { initProjectPage } from './pages/project.js';
import { initPersonalDetails } from './features/personal-details.js';
import { initNavigation } from './features/navigation.js';
import { initProjectImages } from './features/images.js';
import { initAnimations } from './features/animations.js';

function init() {
  if (location.pathname.endsWith('projeto.html')) {
    initProjectPage(projects);
  } else {
    initProjects(projects);
    initContacts(config);
  }
  initProjectImages();
  initPersonalDetails(config);
  initNavigation();
  void initAnimations();
}

init();
