import {FunctionComponent} from "react";
import items, {Item} from "./items";
import classNames from "classnames";
import {NavLink} from "react-router-dom";
import styles from './style.module.css';

const Sidebar: FunctionComponent = () => {

	return (
		<div className={'flex fixed w-52 h-full bg-slate-900'}>
			<div className={'flex flex-col mx-auto space-y-2'}>
				{items.map((item) => (
					<NavLink to={item.path} className={({ isActive }) => classNames(styles.item, isActive ? 'bg-slate-700' : 'bg-transparent')} end>
						{item.icon}{item.title}
					</NavLink>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
