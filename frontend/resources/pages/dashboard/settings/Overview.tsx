import PageBlock from "@/components/PageBlock";
import {Settings} from "@/components/SubNavigation";
import TitledBox from "@/components/TitledBox";
import {faKey, faSliders} from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/Button";
import Popup from "@/components/Popup/Popup";
import {useState} from "react";

const Overview = () => {
	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);

	const regenerate = () => {
		setLoading(true);
		setTimeout(() => {
			setOpen(true);
		}, 1000)
	};

	return (
		<PageBlock className={'p-4'}>
			<Popup.Success open={open} onClose={() => setOpen(false)}>
				Your API Key has been successfully reset. You will need to re-download all of your configurations to use the new key.
			</Popup.Success>
			<Settings/>
			<div className={'flex space-x-4'}>
				<TitledBox title={'Configurations'} icon={faSliders} className={'mt-4 w-1/2 h-64'}>
					input
				</TitledBox>
				<TitledBox title={'API Access'} icon={faKey} className={'mt-4 w-1/2 h-64'}>
					<h3 className={'mt-0 mb-3'}>Your API Key:</h3>
					<input type={'text'} className={'w-full focus:outline-slate-400'} readOnly/>
					<div className={'absolute bottom-4 right-4'} onClick={regenerate}>
						<Button.Red loading={loading}>Regenerate</Button.Red>
					</div>
				</TitledBox>
			</div>
		</PageBlock>
	);
};

export default Overview;
