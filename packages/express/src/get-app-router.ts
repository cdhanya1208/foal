import { App, HttpResponse, HttpResponseOK, HttpResponseRedirect, Route } from '@foal/core';
import { Router } from 'express';

import { getExpressMiddleware } from './get-express-middleware';

export function getAppRouter(app: App, stateDef: { req: string, ctx: string }[] = []) {
  const router = Router();
  for (const controller of app.controllers) {
    for (const route of controller.getRoutes()) {
      const path = route.path || '/';
      switch (route.httpMethod) {
        case 'DELETE':
          router.delete(path, getExpressMiddleware(route, app.services, stateDef));
          break;
        case 'GET':
          router.get(path, getExpressMiddleware(route, app.services, stateDef));
          break;
        case 'PATCH':
          router.patch(path, getExpressMiddleware(route, app.services, stateDef));
          break;
        case 'POST':
          router.post(path, getExpressMiddleware(route, app.services, stateDef));
          break;
        case 'PUT':
          router.put(path, getExpressMiddleware(route, app.services, stateDef));
          break;
      }
    }
  }
  return router;
}
