import { FastifyReply } from "fastify";

export default (res: FastifyReply, code: string, data: any) => {
    return res.status(401).send({ error: true, code, data });
};