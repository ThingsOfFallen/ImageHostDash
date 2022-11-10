import { model, Schema, SchemaTypes } from "mongoose";
import { UserSchema } from "@interfaces";

const UserSchema = new Schema<UserSchema>({
    _id: SchemaTypes.Number,
    key: { type: SchemaTypes.String, required: true },
    email: { type: SchemaTypes.String, required: true },
    tokenId: { type: SchemaTypes.String, required: true },
    username: { type: SchemaTypes.String, required: true },
    discordId: { type: SchemaTypes.String, required: true },
    meta: {
        discriminator: { type: SchemaTypes.String, required: true }
    },

}, { timestamps: true });

export default model<UserSchema>('users', UserSchema);