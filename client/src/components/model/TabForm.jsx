/* eslint-disable react/prop-types */
import { Label, TextInput } from "flowbite-react";

export function TabForm({ tabType, tab, setTab, tabUrl, handleUrlChange, urlError }) {
    return (
        <div className="flex flex-col gap-2 pb-3">
            {tabType.id === 'regular' && (
                <>
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="tab" value="Your Tab Name" />
                        <TextInput
                            placeholder="My Gmail Tab"
                            value={tab}
                            onChange={(e) => setTab(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="tabUrl" value="Your Tab URL" />
                        <TextInput
                            placeholder="https://mail.google.com/mail/u/0"
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
                    <Label htmlFor="slideUrl" value="Google Slide URL" />
                    <TextInput
                        placeholder="https://docs.google.com/presentation/d/..."
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
