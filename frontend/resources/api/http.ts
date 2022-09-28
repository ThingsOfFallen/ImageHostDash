import axios from "axios";
import cookie from 'js-cookie';

const instance = axios.create({
	baseURL: 'https://image.fallenspirit.dev/api',
	headers: { 'Authorization': `Bearer ${cookie.get('token')}` }
});

export interface ApiResponse {
	error: boolean;
	code: string;
}

export default instance;
