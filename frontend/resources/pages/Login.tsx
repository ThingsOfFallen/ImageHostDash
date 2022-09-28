import {useSearchParams} from "react-router-dom";
import http from "../api/http";

const Login = () => {
	const [params, setParams] = useSearchParams();
	const code = params.get('code');

	http.post(`/login/callback?code=${code}`).then((data) => {
		if (data.data.error) alert('error'); else window.location.href = '/';
	});

	return (
		<div>
			<h1>Logging in...</h1>
		</div>
	);
};

export default Login;
