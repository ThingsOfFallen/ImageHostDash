import {
	Children,
	cloneElement,
	FunctionComponent,
	isValidElement,
	PropsWithChildren,
	ReactNode,
	useEffect,
	useState
} from "react";
import classNames from "classnames";
import copy from "copy-to-clipboard";
import {Dialog} from "@headlessui/react";
import styles from "@/components/Popup/style.module.css";
import {HiOutlineCheckCircle, HiX} from "react-icons/all";

const CopyOnClick: FunctionComponent<PropsWithChildren<{ text: string }>> = ({ text, children }) => {
	const [open, setOpen] = useState(false);
	if (!isValidElement(children)) throw new Error('Component passed to <CopyOnClick/> must be a valid React element.');

	useEffect(() => {
		if (!open) return;

		const timeout = setInterval(() => {
			setOpen(false);
		}, 5000);

		return () => clearTimeout(timeout);
	}, [open]);

	const onClick = () => {
		copy(text);
		setOpen(true);
	};

	return (
		<>
			<Dialog open={open} onClose={() => {}}>
				<Dialog.Panel className={classNames(styles.panel, 'flex flex-col bottom-6 right-6 w-64')}>
					<Dialog.Title className={'flex items-center'}>
						<span className={'text-lg'}>Copied to clipboard.</span>
						<div className={'absolute top-2.5 right-2.5 p-0.5 bg-slate-500 rounded cursor-pointer group'} onClick={() => setOpen(false)}>
							<HiX className={'group-hover:rotate-90 transition-transform duration-200'} size={20}/>
						</div>
					</Dialog.Title>
				</Dialog.Panel>
			</Dialog>
			<div className={'cursor-pointer'} onClick={onClick}>
				{children}
			</div>
		</>
	);
};

export default CopyOnClick;
