import { randomBytes, randomInt } from "crypto";

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz';

export default (type: 'id' | 'str', length?: number) => {
	let result: any;
	switch (type) {
		case 'id':
			result = randomInt(0o0, 99999999);
			break;

		case 'str':
			if (!length) return;
			result = randomBytes(length).toString('base64');
			break;
	}
	return result;
};