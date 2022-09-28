import { model, Schema, SchemaTypes } from "mongoose";
import { UserSchema } from "@interfaces";

const UserSchema = new Schema<UserSchema>({
    id: { type: SchemaTypes.Number, required: true },
    email: { type: SchemaTypes.String, required: true },
    tokenId: { type: SchemaTypes.String, required: true },
    username: { type: SchemaTypes.String, required: true },
    discordId: { type: SchemaTypes.String, required: true },
    meta: {
        discriminator: { type: SchemaTypes.String, required: true }
    }
});

export default model<UserSchema>('users', UserSchema);