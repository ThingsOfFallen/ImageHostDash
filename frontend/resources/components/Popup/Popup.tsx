import { Dialog } from "@headlessui/react";
import {FunctionComponent, PropsWithChildren, useState} from "react";
import styles from './style.module.css'
import classNames from "classnames";
import Button from "@/components/Button";
import {HiOutlineCheckCircle, HiX} from "react-icons/all";

interface Props {
	open: boolean;
	title?: string;
	onClose: () => void;
}

const Popup: FunctionComponent<PropsWithChildren<Props>> = ({ open, title, onClose, children }) => {
	return (
		<Dialog static open={open} onClose={onClose}>
			<Dialog.Panel className={styles.panel}>
				{title && <Dialog.Title>{title}</Dialog.Title>}
				{children}
			</Dialog.Panel>
		</Dialog>
	);
};

export const TextPopup: FunctionComponent<PropsWithChildren<Props>> = ({ open, onClose, children }) => (
	<Dialog open={open} onClose={onClose}>
		<Dialog.Panel className={classNames(styles.panel, 'top-1/2 inset-x-0 -translate-y-1/2 my-auto mx-auto w-80')}>
			<Dialog.Description>
				{children}
			</Dialog.Description>
		</Dialog.Panel>
	</Dialog>
);

export const SuccessPopup: FunctionComponent<PropsWithChildren<Props>> = ({ open, onClose, children }) => (
	<Dialog open={open} onClose={onClose}>
		<Dialog.Panel className={classNames(styles.panel, 'flex flex-col bottom-6 right-6 w-[22rem] border-2 border-green-600')}>
			<Dialog.Title className={'flex items-center'}>
				<HiOutlineCheckCircle className={'mr-2 text-green-600'} size={24}/>
				<span className={'text-lg'}>Success</span>
				<div className={'absolute top-2.5 right-2.5 p-0.5 bg-slate-500 rounded cursor-pointer group'} onClick={onClose}>
					<HiX className={'group-hover:rotate-90 transition-transform duration-200'} size={20}/>
				</div>
			</Dialog.Title>
			<div className={'my-2 border-2 border-green-600 rounded-xl'}/>
			<Dialog.Description>
				{children}
			</Dialog.Description>
		</Dialog.Panel>
	</Dialog>
);

const _Popup = Object.assign(Popup, {
	Text: TextPopup,
	Success: SuccessPopup
});

export default _Popup;
