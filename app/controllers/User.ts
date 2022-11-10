import account from "@/transformers/account";
import gen from "@/utilities/gen";
import getUser from "@/utilities/getUser";
import { Request } from "@interfaces";
import { success } from "@responces";

export const data: Request = async (app, req, res) => {
    const user = await getUser(req);
    const accountData = account(user!);
    return success(res, accountData);
};

export const key: Request = async (app, req, res) => {
    const user = await getUser(req);
    return success(res, user!.key);
};

export const regenKey: Request = async (app, req, res) => {
    const user = await getUser(req);
    const key = gen('str', 48);
    await user!.updateOne({ key: key });
    return success(res, user!.key);
};