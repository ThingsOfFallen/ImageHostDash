export default interface Account {
    id: number;
    email: string;
    username: string;
    discordId: string;
    meta: { discriminator: string };
};