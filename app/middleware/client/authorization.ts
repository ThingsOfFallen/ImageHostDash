import { FastifyReply, FastifyRequest } from "fastify";
import { unauthorized } from "@responces";
import { verify, decode } from 'jsonwebtoken';
import { User } from "@models";

export default async (req: FastifyRequest, res: FastifyReply) => {
    if (!req.headers.authorization) return unauthorized(res, 'ERR.AUTHORIZATION.UNDEFINED', 'The authorization header was not provided.');
    const authHeader = req.headers.authorization.replace('Bearer ', '');
    const userId = decode(authHeader) as string;
    if (!userId) return unauthorized(res, 'ERR.AUTHORIZATION.INVALID', 'The provided authorization token is invalid.');
    const userData = await User.findOne({ id: parseInt(userId) });
    if (!userData) return unauthorized(res, 'ERR.AUTHORIZATION.INVALID', 'The provided authorization token is invalid.');
    verify(authHeader, userData?.tokenId!, (err, _decoded) => {
        if (err) return unauthorized(res, 'ERR.AUTHORIZATION.INVALID', 'The provided authorization token is invalid.');
    });
};