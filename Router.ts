import { FastifyReply, FastifyRequest, FastifyInstance, FastifyPluginOptions, HookHandlerDoneFunction } from "fastify";
import clientAuth from '@/middleware/client/authorization';

import * as user from '@/controllers/User';
import * as auth from '@/controllers/Authentication';

export default async (route: FastifyInstance, options: FastifyPluginOptions) => {
    // Authentication Routes
    route.get('/login', (req, res) => { return auth.login(route, req, res) });
    route.post('/login/callback', { preValidation: loginCallbackPreValidation }, (req, res) => { return auth.callback(route, req, res) });

    // User Routes
    route.get('/user', { preHandler: clientAuth }, (req, res) => { return user.data(route, req, res) });
    route.get('/user/key', { preHandler: clientAuth }, (req, res) => user.key(route, req, res));

    route.post('/user/key', { preHandler: clientAuth }, (req, res) => user.regenKey(route, req, res));
};

export type LoginCallbackRequest = FastifyRequest<{ Querystring?: { code?: string; } }>;
const loginCallbackPreValidation = (req: LoginCallbackRequest, res: FastifyReply, next: HookHandlerDoneFunction) => next();