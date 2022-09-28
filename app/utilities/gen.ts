export default (type: 'id' | 'str', length?: number) => {
	let result: any;
	switch (type) {
		case 'id':
			let num: number = Math.random() * (99999999 - 10000000) + 10000000;
			result = Math.round(num);
			break;

		case 'str':
			if (!length) return;
			let newResult = '';
			const chars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
			for (let i = 0; i < length; i++) {
				newResult += chars.charAt(Math.floor(Math.random() * chars.length));
			};
			result = newResult;
			break;
	}
	return result;
};