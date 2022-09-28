import { FastifyReply, FastifyRequest, FastifyInstance, FastifyPluginOptions, HookHandlerDoneFunction } from "fastify";
import clientAuth from '@/middleware/client/authorization';

import * as account from '@/controllers/Account';
import * as auth from '@/controllers/Authentication';

export default async (route: FastifyInstance, options: FastifyPluginOptions) => {
    // Authentication Routes
    route.get('/login', (req, res) => { return auth.login(route, req, res) });
    route.post('/login/callback', { preValidation: loginCallbackPreValidation }, (req, res) => { return auth.callback(route, req, res) });

    // Account Routes
    route.get('/account', { preHandler: clientAuth }, (req, res) => { return account.data(route, req, res) });
};

export type LoginCallbackRequest = FastifyRequest<{ Querystring?: { code?: string; } }>;
const loginCallbackPreValidation = (req: LoginCallbackRequest, res: FastifyReply, next: HookHandlerDoneFunction) => next();