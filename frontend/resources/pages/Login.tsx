import {useSearchParams} from "react-router-dom";
import http from "../api/http";
import Loader from "@/components/Loader";

const Login = () => {
	const [params, _setParams] = useSearchParams();
	const code = params.get('code');

	http.post(`/login/callback?code=${code}`).then((data) => {
		if (data.data.error) alert('error'); else window.location.href = '/';
	});

	return <Loader/>;
};

export default Login;
