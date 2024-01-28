import { Router } from './router/router.min.js';

import Dashboard from '../../pages/dashboard/dashboard.min.js';
import BlogPosts from '../../pages/blog-posts/blog-posts.min.js';

const router = new Router();

router.addRoute({
  path: '/',
  component: Dashboard,
});

router.addRoute({
  path: '/blog-posts',
  component: BlogPosts,
});

router.start();