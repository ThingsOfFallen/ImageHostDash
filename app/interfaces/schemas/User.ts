export default interface User {
    _id: number;
    key: string;
    email: string;
    tokenId: string;
    username: string;
    discordId: string;
    meta: {
        discriminator: string;
    };
};