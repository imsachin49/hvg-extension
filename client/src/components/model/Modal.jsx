import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { TabTypeSelector } from "./TabTypeSelector";
import { TabForm } from "./TabForm";
import { useTabs } from "../TabsProvider";

const tabTypes = [
    { id: 'regular', name: 'Regular Tab' },
    { id: 'google-slide', name: 'Google Slide' },
];

// eslint-disable-next-line react/prop-types
export default function ModalComp({ openModal, setOpenModal }) {
    const [tab, setTab] = useState('');
    const [tabUrl, setTabUrl] = useState('');
    const [tabType, setTabType] = useState(tabTypes[0]);
    const [urlError, setUrlError] = useState('');
    const [step, setStep] = useState(1);
    const { addTab,addGoogleTab} = useTabs();

    function isValidUrl(url) {
        const regex = /^(https?:\/\/[^\s$.?#].[^\s]*)$/i;
        return regex.test(url);
    }

    function onCloseModal() {
        setOpenModal(false);
        setTab('');
        setTabUrl('');
        setTabType(tabTypes[0]);
        setStep(1);
        setUrlError(''); // Clear the error when closing the modal
    }

    function handleNextStep() {
        if (!tabType) {
            setUrlError('Please select a tab type.');
            return;
        }
        setStep(2);
        setUrlError(''); // Clear the error when moving to the next step
    }

    function handleBackStep() {
        setStep(1);
        setUrlError(''); // Clear the error when going back a step
    }

    function handleAddTab() {
        if ((tabType.id === 'regular' && (!tab || !tabUrl)) || (tabType.id === 'google-slide' && !tabUrl)) {
            setUrlError('Please fill in all fields.');
            return;
        }
        if (!isValidUrl(tabUrl)) {
            setUrlError('Please enter a valid URL.');
            return;
        }
        const newTab = { tab, tabUrl, type: tabType.id };
        if(tabType.id === 'google-slide'){
            addGoogleTab(newTab);
        }
        else{
            addTab(newTab);
        }
        onCloseModal();
    }

    function handleUrlChange(event) {
        setTabUrl(event.target.value);
        setUrlError(''); // Clear the error when the URL changes
    }

    return (
        <Modal show={openModal} size="xl" onClose={onCloseModal} popup className="bg-teal-500/30">
            <Modal.Header />
            <Modal.Body onClick={(e) => e.stopPropagation()}>
                <h3 className="text-xl font-medium text-gray-900 mb-4">Add Your Tab!</h3>
                {step === 1 && (
                    <div className="flex flex-col gap-2 pb-3">
                        <TabTypeSelector tabType={tabType} setTabType={setTabType} />
                        {urlError && <p className="text-red-500 text-sm mt-1">{urlError}</p>}
                        <Button onClick={handleNextStep} className="w-full py-[0px] my-2 bg-teal-500">Next</Button>
                    </div>
                )}
                {step === 2 && (
                    <div className="flex flex-col gap-2 pb-3">
                        <TabForm tabType={tabType} tab={tab} setTab={setTab} tabUrl={tabUrl} handleUrlChange={handleUrlChange} urlError={urlError} />
                        <div className="flex gap-2">
                            <Button onClick={handleBackStep} className="w-full py-[0px] bg-gray-500">Back</Button>
                            <Button onClick={handleAddTab} className="w-full py-[0px] bg-teal-500">Create Tab</Button>
                        </div>
                    </div>
                )}
            </Modal.Body>
        </Modal>
    );
}
