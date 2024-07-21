/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Listbox } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Label } from 'flowbite-react';

const tabTypes = [
    { id: 'regular', name: 'Regular Tab' },
    { id: 'google-slide', name: 'Google Tab' },
];

export function TabTypeSelector({ tabType, setTabType }) {
    return (
        <div>
            <Label className="block text-sm font-medium leading-6 text-white">Select Tab Type</Label>
            <Listbox value={tabType} onChange={setTabType}>
                <div className="relative mt-2">
                    <Listbox.Button className="relative w-full cursor-default rounded-md bg-light-teal py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 sm:text-sm sm:leading-6">
                        <span className="block truncate text-white">{tabType.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </span>
                    </Listbox.Button>
                    <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-[#243737] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {tabTypes.map((type) => (
                            <Listbox.Option
                                key={type.id}
                                value={type}
                                className={({ active, selected }) =>
                                    `relative cursor-default select-none py-2 pl-3 pr-9 ${active ? 'bg-teal-400 ' : 'text-white'
                                    }`
                                }
                            >
                                {({ selected }) => (
                                    <>
                                        <span
                                            className={`block truncate ${selected ? 'font-semibold' : 'font-normal'}`}
                                        >
                                            {type.name}
                                        </span>
                                        {selected && (
                                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-teal-600">
                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                        )}
                                    </>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </div>
            </Listbox>
        </div>
    );
}
