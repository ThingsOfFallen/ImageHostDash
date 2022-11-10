import { Request } from "@interfaces";
import { LoginCallbackRequest } from "@router";
import { badRequest, serverError, success } from "@responces";
import axios from "axios";
import { User } from "@models";
import gen from "@/utilities/gen";
import { sign } from "jsonwebtoken";

export const login: Request = (app, req, res) => {
    return success(res, `https://discord.com/api/oauth2/authorize?client_id=${process.env.DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent(`${process.env.APP_URL}/callback`)}&response_type=code&scope=identify%20email%20guilds%20guilds.join`);
};

export const callback: Request = async (app, req: LoginCallbackRequest, res) => {
    if (!req.query || !req.query.code || req.query.code === null) return badRequest(res, 'ERR.CODE.UNDEFINED', 'The callback query code was not provided.');

    const codeBody = new URLSearchParams();
    codeBody.append('client_secret', process.env.DISCORD_CLIENT_SECRET as string);
    codeBody.append('redirect_uri', `${process.env.APP_URL as string}/callback`);
    codeBody.append('client_id', process.env.DISCORD_CLIENT_ID as string);
    codeBody.append('grant_type', 'authorization_code');
    codeBody.append('code', req.query.code as string);

    const code = await axios.post('https://discord.com/api/v10/oauth2/token', codeBody);
    if (code.status !== 200) return serverError(res, 'ERR.DISCORD_API', 'The Discord API provided an invalid response.');
    const userInfo = (await axios.get('https://discord.com/api/v10/users/@me', { headers: { Authorization: `Bearer ${code.data.access_token}` } })).data;
    
    const user = await User.findOne({ discordId: userInfo.id });

    if (user) {
        const userToken = sign(user?.id, user?.tokenId!);
        return success(res, 'Successfully logged in.', { key: 'token', value: userToken });
    } else {
        const userId = gen('id', 8);
        const userKey = gen('str', 48);
        const userTokenId = gen('str', 32);
        const userToken = sign(userId, userTokenId);

        await User.create({
            _id: userId,
            key: userKey,
            tokenId: userTokenId,
            email: userInfo.email,
            discordId: userInfo.id,
            username: userInfo.username,
            meta: { discriminator: userInfo.discriminator }
        });

        return success(res, 'Successfully registered.', { key: 'token', value: userToken });
    };
};