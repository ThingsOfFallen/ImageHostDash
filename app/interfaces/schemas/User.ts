export default interface User {
    id: number;
    email: string;
    tokenId: string;
    username: string;
    discordId: string;
    meta: {
        discriminator: string;
    };
};