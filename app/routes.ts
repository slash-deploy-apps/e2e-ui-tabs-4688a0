import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('env', 'routes/env.tsx'),
  route('health', 'routes/health.tsx'),
] satisfies RouteConfig;
