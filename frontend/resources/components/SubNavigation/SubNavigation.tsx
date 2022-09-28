import {FunctionComponent, PropsWithChildren} from "react";
import {NavLink, NavLinkProps} from "react-router-dom";
import classNames from "classnames";
import {inspect} from "util";
import styles from './style.module.css';

const SubNavigation: FunctionComponent<PropsWithChildren<{ className?: string }>> = ({ className, children }) => {
	return (
		<div className={classNames('flex items-center justify-between space-x-4 h-10', className)}>
			{children}
		</div>
	);
};

export const Settings: FunctionComponent = () => {
	const nav: { className: NavLinkProps['className'], end: boolean } = { className: ({ isActive }) => classNames(styles.settingsNav, isActive ? 'bg-slate-700': 'bg-slate-900'), end: true }

	return (
		<SubNavigation>
			<NavLink to={'/dash/settings'} {...nav}>Overview</NavLink>
			<NavLink to={'/dash/settings/domains'} {...nav}>Domains</NavLink>
			<NavLink to={'/dash/settings/embed'} {...nav}>Embed</NavLink>
		</SubNavigation>
	);
};
