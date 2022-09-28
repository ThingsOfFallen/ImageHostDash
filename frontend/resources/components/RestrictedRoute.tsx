import {FunctionComponent, PropsWithChildren} from "react";
import {useStoreState} from "easy-peasy";
import {Store} from "../store";
import {Navigate} from 'react-router-dom';
import Loader from "./Loader";
import cookie from "js-cookie";

const RestrictedRoute: FunctionComponent<PropsWithChildren<{ loaded: boolean }>> = ({ loaded, children }) => {
	const isAuthenticated = useStoreState((state: Store) => !!state.data?.id);
	if (!cookie.get('token')) loaded = true;

	if (!loaded) return <Loader/>;
	if (loaded && !isAuthenticated) return <Navigate to={'/'}/>;

	return (<>{children}</>);
};

export default RestrictedRoute;
