import {FunctionComponent} from "react";
import styles from './style.module.css';

const Loader: FunctionComponent = () => (
	<div className={'flex justify-center h-full w-full fixed'}>
		<span className={styles.loader}/>
	</div>
);

export default Loader;
