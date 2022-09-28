import http from "./http";

export default (): Promise<string> => {
	return new Promise((resolve, reject) => {
		http.get('/login').then((data) => resolve(data.data.data)).catch(reject);
	});
};
