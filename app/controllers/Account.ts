import account from "@/transformers/account";
import getUser from "@/utilities/getUser";
import { Request } from "@interfaces";
import { success } from "@responces";

export const data: Request = async (app, req, res) => {
    const user = await getUser(req);
    const accountData = account(user!);
    return success(res, accountData);
};