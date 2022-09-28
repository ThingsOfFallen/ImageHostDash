import http, {ApiResponse} from "./http";

export interface Account extends ApiResponse {
	data: {
		id: number;
		email: string;
		username: string;
		discordId: string;
		meta: { discriminator: string; };
	};
}

export const getAccount = (): Promise<Account> => {
	return new Promise((resolve, reject) => {
		http.get('/account').then((data) => resolve(data.data)).catch(reject);
	});
};
