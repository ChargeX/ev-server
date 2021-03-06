import express, { NextFunction, Request, Response } from 'express';

import RouterUtils from '../RouterUtils';
import { ServerAction } from '../../../../types/Server';
import TenantService from '../../service/TenantService';
import sanitize from 'mongo-sanitize';

export const tenantRouter = express.Router();

tenantRouter.get('/tenants', async (req: Request, res: Response, next: NextFunction) => {
  await RouterUtils.handleServerAction(TenantService.handleGetTenants.bind(this), ServerAction.TENANTS, req, res, next);
});

tenantRouter.get('/tenants/:id', async (req: Request, res: Response, next: NextFunction) => {
  req.query.ID = sanitize(req.params.id);
  await RouterUtils.handleServerAction(TenantService.handleGetTenant.bind(this), ServerAction.TENANT, req, res, next);
});

