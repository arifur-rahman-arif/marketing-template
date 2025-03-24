import React from 'react';
import { state } from '@/store';
import { useSnapshot } from 'valtio';
import styles from './Input.module.scss';
import Slider from '@mui/material/Slider';

import Checkbox from '@/components/Checkbox';

const FilterOptions = () => {
    const snap = useSnapshot(state);

    return (
        <div className={`grid gap-6 ${styles.styles}`}>
            {/* Range Slider */}
            <div className="grid gap-4">
                <span className="text-lg font-bold">Distance</span>

                <Slider
                    getAriaLabel={() => 'Distance'}
                    value={snap.formData.distance.value}
                    onChange={(_, value) => (state.formData.distance.value = value as number[])}
                    valueLabelDisplay="on"
                    min={snap.formData.distance.min}
                    max={snap.formData.distance.max}
                />

                <div className="flex items-center justify-between gap-4">
                    <span className="text-sm">
                        {snap.formData.distance.min}km
                        <br />
                        <span className="text-xs">Minimum</span>
                    </span>

                    <span className="text-right text-sm">
                        {snap.formData.distance.max}km
                        <br />
                        <span className="text-right text-xs">Minimum</span>
                    </span>
                </div>
            </div>

            {/* Divider */}
            <div className="h-[1px] w-full bg-gray-20"></div>

            {/* Certified Centre */}
            <Checkbox
                checked={snap.formData.isCertified}
                onChange={e => (state.formData.isCertified = e.target.checked)}
                id="certified"
                label="Certified Centres"
            />

            {/* Divider */}
            <div className="h-[1px] w-full bg-gray-20"></div>

            {/* Programme type */}
            <div className="grid">
                <button
                    type="button"
                    onClick={() => (state.formData.openProgrammeMenu = !snap.formData.openProgrammeMenu)}
                    className="flex items-center justify-between gap-4"
                >
                    <span className="font-700">Programme type</span>
                    <img
                        src="/assets/images/icons/icon-arrow-down.svg"
                        width={20}
                        height={20}
                        alt=""
                        className={`transition-all duration-500 ${snap.formData.openProgrammeMenu ? 'rotate-0' : '-rotate-180'}`}
                    />
                </button>
                {/* Items */}
                <div
                    className={`overflow-hidden transition-all duration-700 ${snap.formData.openProgrammeMenu ? 'max-h-[20rem]' : 'max-h-0'}`}
                >
                    <div className="mt-2 grid gap-2">
                        {snap.formData.programmeTypes.map((type, index) => (
                            <Checkbox
                                key={index}
                                checked={type.active}
                                onChange={e => (state.formData.programmeTypes[index].active = e.target.checked)}
                                id={type.value}
                                label={type.label}
                                className="py-2"
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="h-[1px] w-full bg-gray-20"></div>
        </div>
    );
};

export default FilterOptions;
