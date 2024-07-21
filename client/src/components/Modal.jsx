import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { useTabs } from "./TabsProvider";

// eslint-disable-next-line react/prop-types
export function ModalComp({ openModal, setOpenModal }) {
    const [tab, settab] = useState('');
    const [tabUrl, setTabUrl] = useState('');
    const [urlError, setUrlError] = useState('');
    const { addTab } = useTabs();

    function isValidUrl(url) {
        const regex = /^(https?:\/\/[^\s$.?#].[^\s]*)$/i;
        return regex.test(url);
    }

    function onCloseModal() {
        setOpenModal(false);
        settab('');
        setTabUrl('');
    }

    function handleAddTab() {
        if (tab && tabUrl) {
            if (!isValidUrl(tabUrl)) {
                setUrlError('Please enter a valid URL.');
                return;
            }
            const newTab = { tab, tabUrl };
            addTab(newTab);
            onCloseModal();
        }
    }

    return (
        <Modal show={openModal} size="xl" onClose={onCloseModal} popup className="bg-teal-500/30">
            <Modal.Header />
            <Modal.Body onClick={(e) => e.stopPropagation()}>
                <h3 className="text-xl font-medium text-gray-900 mb-4">Add Your Tab!</h3>
                <div className="flex flex-col gap-2 pb-3">
                    <div>
                        <Label htmlFor="tab" value="Your tab Name" />
                        <TextInput
                            placeholder="Your Tab Name"
                            value={tab}
                            onChange={(e) => settab(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <Label htmlFor="tabUrl" value="Your Tab Url" />
                        <TextInput
                            placeholder="https://example.com"
                            value={tabUrl}
                            type="text"
                            onChange={(e) => setTabUrl(e.target.value)}
                            required
                        />
                        {urlError && <p className="text-red-500 text-sm mt-1">{urlError}</p>}
                    </div>
                    <Button onClick={handleAddTab} className="w-full py-[0px] bg-teal-500">Create Tab</Button>
                </div>
            </Modal.Body>
        </Modal>
    );
}
