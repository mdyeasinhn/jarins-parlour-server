import { Router } from 'express';
import userRoutes from '../module/user/user.route';
import authRoutes from '../module/auth/auth.route';
import serviceRoutes from '../module/services/service.route';
import reviewRoutes from '../module/review/review.route';


const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/service',
    route: serviceRoutes,
  },
  {
    path: '/review',
    route: reviewRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;