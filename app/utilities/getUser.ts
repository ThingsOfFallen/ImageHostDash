import { FastifyRequest } from "fastify";
import { User } from "@models";
import { decode } from "jsonwebtoken";

export default async (req: FastifyRequest) => {
    const authHeader = req.headers.authorization!.replace('Bearer ', '');
    const userId = decode(authHeader) as string;
    const user = await User.findOne({ id: parseInt(userId) });
    return user;
};