import {FunctionComponent, PropsWithChildren} from "react";

const Container: FunctionComponent<PropsWithChildren> = ({ children }) => (
	<div className={'w-full my-0 mx-auto px-6'}>
		{children}
	</div>
);

export default Container;
