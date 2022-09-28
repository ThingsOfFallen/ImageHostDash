import { FastifyReply } from "fastify";

export default (res: FastifyReply, code: string, data: any) => {
    return res.status(400).send({ error: true, code, data });
};