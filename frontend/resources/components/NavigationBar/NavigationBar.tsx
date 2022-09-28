import {FunctionComponent, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Container from '@/components/Container';
import Button from "../Button";
import { Menu } from "@headlessui/react";
import {ReactTag} from "@headlessui/react/dist/types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faCamera, faChevronDown, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import styles from './style.module.css';
import {useStoreState} from "easy-peasy";
import {Store} from "@/store";
import apiLogin from '@/api/login';
import classNames from "classnames";

const NavigationBar: FunctionComponent = () => {
	const user = useStoreState((state: Store) => state.data!);
	const icon = { className: 'mr-1.5', fixedWidth: true };
	const item: { as: ReactTag; className: string; } = { as: 'div', className: styles.menuItem }
	const [userShowing, setUserShowing] = useState(false);
	const [dash, setDash] = useState(false);

	useEffect(() => {
		if (user?.id) setUserShowing(true);
		if (window.location.pathname.startsWith('/dash')) setDash(true);
	});

	const login = () => {
		apiLogin().then((data) => window.location.href = data);
	};

	return (
		<div className={classNames('flex h-16 items-center', dash ? 'bg-slate-900' : 'bg-transparent')}>
			<Container>
				<div className={'flex items-center justify-between text-white z-10'}>
					<Link to={'/'}>
						<span className={'text-white text-3xl no-underline my-auto'}>Micro.Host</span>
					</Link>
					<div className={'inline-flex'}>
						{userShowing ? (
							<Menu as={'div'} className={'relative inline-block text-left'}>
								<Menu.Button className={styles.menuButton}>{user.username}<FontAwesomeIcon icon={faChevronDown} className={styles.menuButtonIcon}/></Menu.Button>
								<Menu.Items className={styles.menuItems}>
									<Menu.Item {...item}><FontAwesomeIcon icon={faUser} {...icon}/>Account</Menu.Item>
									<Menu.Item {...item}><FontAwesomeIcon icon={faCamera} {...icon}/>Images</Menu.Item>
									<div className={'border m-2 border-gray-700'}/>
									<Menu.Item {...item}><FontAwesomeIcon icon={faArrowRightFromBracket} {...icon}/>Logout</Menu.Item>
								</Menu.Items>
							</Menu>)
							:
							(<div onClick={login} className={'text-base cursor-pointer'}>Login</div>)
						}
					</div>
				</div>
			</Container>
		</div>
	);
};

export default NavigationBar;
