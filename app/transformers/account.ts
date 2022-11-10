import { AccountTransformer } from "@interfaces";

export default (data: any): AccountTransformer => {
    return {
        id: data._id,
        email: data.email,
        username: data.username,
        discordId: data.discordId,
        meta: { discriminator: data.meta.discriminator }
    };
};