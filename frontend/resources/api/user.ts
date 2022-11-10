import http, {ApiResponse} from "./http";

export interface ApiKey extends ApiResponse {
	data: string;
}

export interface User extends ApiResponse {
	data: {
		id: number;
		email: string;
		username: string;
		discordId: string;
		meta: { discriminator: string; };
	};
}

export const getUser = (): Promise<User> => {
	return new Promise((resolve, reject) => {
		http.get('user').then((data) => resolve(data.data)).catch(reject);
	});
};

export const getKey = (): Promise<ApiKey> => {
	return new Promise((resolve, reject) => {
		http.get('/user/key').then((data) => resolve(data.data)).catch(reject);
	});
};
