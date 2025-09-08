import { Router } from 'express';
import userRoutes from '../module/user/user.route';
import authRoutes from '../module/auth/auth.route';
import serviceRoutes from '../module/services/service.route';
import reviewRoutes from '../module/review/review.route';
import adminRoutes from '../module/admin/admin.route';
import categoryRoutes from '../module/category/category.route';


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
  {
    path: '/admin',
    route: adminRoutes,
  },
  {
    path: '/category',
    route: categoryRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;