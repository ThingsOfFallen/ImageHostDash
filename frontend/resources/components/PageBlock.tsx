import {FunctionComponent, PropsWithChildren, useEffect, useState} from "react";
import NavigationBar from "./NavigationBar";
import Sidebar from "@/components/Sidebar";
import classNames from "classnames";

interface Props {
	title?: string;
	className?: string;
}

const PageBlock: FunctionComponent<PropsWithChildren<Props>> = ({ title, className, children }) => {
	const [dash, setDash] = useState(false);

	useEffect(() => {
		if (title) document.title = title;
		if (window.location.pathname.startsWith('/dash')) setDash(true);
	}, [ title ]);

	return (
		<>
			<NavigationBar/>
			{dash && (<Sidebar/>)}
			<div className={classNames('relative ml-52', className)}>
				{children}
			</div>
		</>
	);
};

export default PageBlock;
