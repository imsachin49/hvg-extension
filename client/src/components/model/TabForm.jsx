/* eslint-disable react/prop-types */
import { Label, TextInput } from "flowbite-react";

export function TabForm({ tabType, tab, setTab, tabUrl, handleUrlChange, urlError }) {
    return (
        <div className="flex flex-col gap-2 pb-3">
            {tabType.id === 'regular' && (
                <>
                    <div className="flex flex-col gap-1 ">
                        <Label htmlFor="tab" value="Your Tab Name" className="text-white" />
                        <TextInput
                            placeholder="My Example Tab"
                            value={tab}
                            onChange={(e) => setTab(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="tabUrl" value="Your Tab URL" className="text-white" />
                        <TextInput
                            placeholder="https://example.com"
                            value={tabUrl}
                            type="text"
                            onChange={handleUrlChange}
                            required
                        />
                    </div>
                </>
            )}
            {tabType.id === 'google-slide' && (
                <div className="flex flex-col gap-1">
                    <Label htmlFor="slideUrl" value="Google Slide URL" className="text-white" />
                    <TextInput
                        placeholder="https://docs.google.com/document/d/XXXXXXXYYYYZZZ"
                        value={tabUrl}
                        type="text"
                        onChange={handleUrlChange}
                        required
                    />
                </div>
            )}
            {urlError && <p className="text-red-500 text-sm mt-1">{urlError}</p>}
        </div>
    );
}
