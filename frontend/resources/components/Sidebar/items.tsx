import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faCamera, faCog, faUser} from "@fortawesome/free-solid-svg-icons";

const items: Item[] = [
	{
		title: 'Home',
		icon: <FontAwesomeIcon icon={faHome} fixedWidth/>,
		path: '/dash'
	},
	{
		title: 'Images',
		icon: <FontAwesomeIcon icon={faCamera} fixedWidth/>,
		path: '/dash/images'
	},
	{
		title: 'Profile',
		icon: <FontAwesomeIcon icon={faUser} fixedWidth/>,
		path: '/dash/profile'
	},
	{
		title: 'Settings',
		icon: <FontAwesomeIcon icon={faCog} fixedWidth/>,
		path: '/dash/settings'
	}
];

export interface Item {
	title: string;
	icon: JSX.Element;
	path: string;
}

export default items;
