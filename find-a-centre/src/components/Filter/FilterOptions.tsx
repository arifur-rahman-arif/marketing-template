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
            {snap.userCurrentLocation.countryCode === 'SG' &&
            snap.userCurrentLocation.lat &&
            snap.userCurrentLocation.lon ? (
                <>
                    <div className="grid gap-4">
                        <span className="text-lg font-bold">Distance</span>

                        <Slider
                            getAriaLabel={() => 'Distance'}
                            value={snap.formData.distance.value}
                            onChange={(_, value) => (state.formData.distance.value = value as number[])}
                            valueLabelDisplay="auto"
                            min={snap.formData.distance.min}
                            max={snap.formData.distance.max}
                        />

                        <div className="flex items-center justify-between gap-4">
                            <span className="text-sm">
                                {snap.formData.distance.value[0]}km
                                <br />
                                <span className="text-xs">Minimum</span>
                            </span>

                            <span className="text-right text-sm">
                                {snap.formData.distance.value[1]}km
                                <br />
                                <span className="text-right text-xs">Maximum</span>
                            </span>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-[1px] w-full bg-gray-20"></div>
                </>
            ) : null}

            {/* Certified Centre */}
            <div className="grid">
                <button
                    type="button"
                    onClick={() => (state.formData.certificationMenuOpen = !snap.formData.certificationMenuOpen)}
                    className="flex items-center justify-between gap-4"
                >
                    <span className="font-700">SPARK certification</span>
                    <img
                        src="https://marketing-template-pi.vercel.app/assets/images/icons/icon-arrow-down.svg"
                        width={20}
                        height={20}
                        alt=""
                        className={`transition-all duration-500 ${snap.formData.certificationMenuOpen ? '-rotate-180' : 'rotate-0'}`}
                    />
                </button>
                {/* Items */}
                <div
                    className={`overflow-hidden transition-all duration-700 ${snap.formData.certificationMenuOpen ? 'max-h-[20rem]' : 'max-h-0'}`}
                >
                    <div className="mt-2 grid gap-2">
                        {snap.formData.certifications.map((type, index) => (
                            <Checkbox
                                key={index}
                                checked={type.active}
                                value={type.value}
                                onChange={e => {
                                    if (e.target.value === 'all') {
                                        state.formData.certifications.forEach(item => {
                                            item.active = item.value === 'all';
                                        });
                                    } else {
                                        state.formData.certifications[0].active = false;
                                        state.formData.certifications[index].active = e.target.checked;
                                    }
                                }}
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

            {/* Programme type */}
            <div className="grid">
                <button
                    type="button"
                    onClick={() => (state.formData.openProgrammeMenu = !snap.formData.openProgrammeMenu)}
                    className="flex items-center justify-between gap-4"
                >
                    <span className="font-700">Programme type</span>
                    <img
                        src="https://marketing-template-pi.vercel.app/assets/images/icons/icon-arrow-down.svg"
                        width={20}
                        height={20}
                        alt=""
                        className={`transition-all duration-500 ${snap.formData.openProgrammeMenu ? '-rotate-180' : 'rotate-0'}`}
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
                                value={type.value}
                                onChange={e => {
                                    if (e.target.value === 'all') {
                                        state.formData.programmeTypes.forEach(item => {
                                            item.active = item.value === 'all';
                                        });
                                    } else {
                                        state.formData.programmeTypes[0].active = false;
                                        state.formData.programmeTypes[index].active = e.target.checked;
                                    }
                                }}
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

            {/* Mother tongue */}
            <div className="grid">
                <button
                    type="button"
                    onClick={() => (state.formData.openMotherTongueMenu = !snap.formData.openMotherTongueMenu)}
                    className="flex items-center justify-between gap-4"
                >
                    <span className="font-700">Mother tongue</span>
                    <img
                        src="https://marketing-template-pi.vercel.app/assets/images/icons/icon-arrow-down.svg"
                        width={20}
                        height={20}
                        alt=""
                        className={`transition-all duration-500 ${snap.formData.openMotherTongueMenu ? '-rotate-180' : 'rotate-0'}`}
                    />
                </button>
                {/* Items */}
                <div
                    className={`overflow-hidden transition-all duration-700 ${snap.formData.openMotherTongueMenu ? 'max-h-[20rem]' : 'max-h-0'}`}
                >
                    <div className="mt-2 grid gap-2">
                        {snap.formData.motherTongue.map((type, index) => (
                            <Checkbox
                                key={index}
                                checked={type.active}
                                value={type.value}
                                onChange={e => {
                                    if (e.target.value === 'all') {
                                        state.formData.motherTongue.forEach(item => {
                                            item.active = item.value === 'all';
                                        });
                                    } else {
                                        state.formData.motherTongue[0].active = false;
                                        state.formData.motherTongue[index].active = e.target.checked;
                                    }
                                }}
                                id={`${type.value}_motherTongue`}
                                label={type.label}
                                className="py-2"
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="h-[1px] w-full bg-gray-20"></div>

            {/* Centre type*/}
            <div className="grid">
                <button
                    type="button"
                    onClick={() => (state.formData.openCentreTypeMenu = !snap.formData.openCentreTypeMenu)}
                    className="flex items-center justify-between gap-4"
                >
                    <span className="font-700">Centre type</span>
                    <img
                        src="https://marketing-template-pi.vercel.app/assets/images/icons/icon-arrow-down.svg"
                        width={20}
                        height={20}
                        alt=""
                        className={`transition-all duration-500 ${snap.formData.openCentreTypeMenu ? '-rotate-180' : 'rotate-0'}`}
                    />
                </button>
                {/* Items */}
                <div
                    className={`overflow-hidden transition-all duration-700 ${snap.formData.openCentreTypeMenu ? 'max-h-[20rem]' : 'max-h-0'}`}
                >
                    <div className="mt-2 grid gap-2">
                        {snap.formData.centreTypes.map((type, index) => (
                            <Checkbox
                                key={index}
                                checked={type.active}
                                value={type.value}
                                onChange={e => {
                                    if (e.target.value === 'all') {
                                        state.formData.centreTypes.forEach(item => {
                                            item.active = item.value === 'all';
                                        });
                                    } else {
                                        state.formData.centreTypes[0].active = false;
                                        state.formData.centreTypes[index].active = e.target.checked;
                                    }
                                }}
                                id={`${type.value}_centreType`}
                                label={type.label}
                                className="py-2"
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="h-[1px] w-full bg-gray-20"></div>

            <button
                type="button"
                className="mfs-button"
                onClick={() => {
                    state.modalOpen = false;
                    snap.handleFilterClick();
                }}
            >
                Apply filters
            </button>
        </div>
    );
};

export default FilterOptions;
