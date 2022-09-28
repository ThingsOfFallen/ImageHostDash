import {FunctionComponent, PropsWithChildren} from "react";
import classNames from "classnames";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface Props {
	title: string;
	icon?: IconProp;
	className?: string;
}

const TitledBox: FunctionComponent<PropsWithChildren<Props>> = ({ icon, title, className, children }) => {
	return (
		<div className={classNames('flex flex-col relative bg-slate-700 rounded-lg', className)}>
			<div className={'inline-flex items-center h-12 bg-slate-900 rounded-t-lg'}>
				{icon && <FontAwesomeIcon icon={icon} className={'mx-2'} fixedWidth/>}
				<span className={'text-xl'}>{title}</span>
			</div>
			<div className={'pt-3 px-4 pb-4'}>
				{children}
			</div>
		</div>
	);
};

export default TitledBox;
