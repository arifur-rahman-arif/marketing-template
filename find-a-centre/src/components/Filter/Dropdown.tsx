import Checkbox from '@/components/Checkbox';
import React, { useState } from 'react';
import { useOnclickOutside } from '@/hooks';

interface Props {
    title: string;
    onClick: () => void;
    isOpen: boolean;

    options: {
        label: string;
        value: string;
        active: boolean;
    }[];

    onChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
    type: string;
    closeDropdown: () => void;
}

const Dropdown = ({ title, onClick, isOpen, options, onChange, type, closeDropdown }: Props) => {
    const outsideRef = useOnclickOutside(() => {
        if (window.innerWidth >= 1024) {
            closeDropdown();
        }
    });

    return (
        <div className="relative grid w-[16.5rem]" ref={outsideRef}>
            <button
                type="button"
                onClick={onClick}
                className="flex items-center justify-between gap-4 rounded-round border border-solid border-gray-20 bg-white px-5 py-[0.9rem]"
            >
                <span className="text-sm leading-6">{title}</span>
                <img
                    src="/assets/images/icons/icon-arrow-down.svg"
                    width={14}
                    height={14}
                    alt=""
                    className={`transition-all duration-500 ${isOpen ? '-rotate-180' : 'rotate-0'}`}
                />
            </button>
            {/* Items */}
            <div
                className={`absolute left-0 top-full z-[3] mt-2 w-full overflow-hidden bg-white transition-all duration-700 ${isOpen ? 'max-h-[20rem]' : 'max-h-0'}`}
            >
                <div className="grid gap-2 rounded-small border border-solid border-gray-20 px-4 py-2">
                    {options.map((option, index) => (
                        <Checkbox
                            key={index}
                            checked={option.active}
                            onChange={e => onChange(e, index)}
                            id={`${option.value}_${type}`}
                            label={option.label}
                            className="py-2 [&_label]:text-sm"
                            value={option.value}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
