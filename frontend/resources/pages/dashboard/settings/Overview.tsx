import PageBlock from "@/components/PageBlock";
import {Settings} from "@/components/SubNavigation";
import TitledBox from "@/components/TitledBox";
import {faKey, faSliders} from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/Button";
import Popup from "@/components/Popup/Popup";
import {useEffect, useState} from "react";
import {getKey} from "@/api/user";
import CopyOnClick from "@/components/CopyOnClick";

const Overview = () => {
	const [key, setKey] = useState('');
	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getKey().then((data) => {
			if (data.code !== 'SUCCESS') return;
			setKey(data.data);
		})
	});

	const regenerate = () => {
		setLoading(true);
		setTimeout(() => {
			setOpen(true);
		}, 1000)
	};

	return (
		<PageBlock className={'p-4'}>
			<Settings/>
			<Popup.Success open={open} onClose={() => setOpen(false)}>
				Your Access Key has been successfully reset. You will need to re-download all of your configurations to use the new key.
			</Popup.Success>
			<div className={'flex space-x-4'}>
				<TitledBox title={'Configurations'} icon={faSliders} className={'mt-4 w-1/2 h-64'}>
					input
				</TitledBox>
				<TitledBox title={'Upload Access'} icon={faKey} className={'mt-4 w-1/2 h-64'}>
					<h3 className={'mt-0 mb-3'}>Your Access Key:</h3>
					<CopyOnClick text={key}>
						<textarea placeholder={key} className={'w-full blur-sm hover:blur-none'} readOnly/>
					</CopyOnClick>
					<div className={'absolute bottom-4 right-4'} onClick={regenerate}>
						<Button.Red loading={loading}>Regenerate</Button.Red>
					</div>
				</TitledBox>
			</div>
		</PageBlock>
	);
};

export default Overview;
