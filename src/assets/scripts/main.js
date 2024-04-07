import { Router } from './router/router.min.js';

import Dashboard from '../../pages/dashboard/dashboard.min.js';
import AboutMe from '../../pages/about-me/about-me.min.js';
import Lebenslauf from '../../pages/lebenslauf/lebenslauf.min.js';

const router = new Router();

router.addRoute({
  path: '/',
  component: Dashboard,
});

router.addRoute({
  path: '/about-me',
  component: AboutMe,
});

router.addRoute({
  path: '/lebenslauf',
  component: Lebenslauf,
});

router.start();