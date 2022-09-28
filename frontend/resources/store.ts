import {action, Action, createStore} from "easy-peasy";

export interface Store {
	data?: Data;
	setData: Action<Store, Data>;
}

export interface Data {
	id: number;
	email: string;
	username: string;
	discordId: string;
	meta: { discriminator: string; };
}

export default createStore<Store>({
	data: undefined,
	setData: action((state, payload) => {
		state.data = payload;
	})
});
