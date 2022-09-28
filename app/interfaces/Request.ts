import { FastifyReply, FastifyRequest, FastifyInstance } from "fastify";

export default interface Request {
    (app: FastifyInstance, req: Req, res: FastifyReply): void
};

type Req = FastifyRequest<ReqInteface>;

interface ReqInteface {
    Body?: any;
    Params?: any;
    Querystring?: any;
};