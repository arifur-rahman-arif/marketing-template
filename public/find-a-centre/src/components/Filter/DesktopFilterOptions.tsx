import React, { useState } from 'react';
import { state } from '@/store';
import { useSnapshot } from 'valtio';
import Checkbox from '@/components/Checkbox';
import Dropdown from '@/components/Filter/Dropdown';
import Slider from '@mui/material/Slider';
import styles from './Input.module.scss';
import { useOnclickOutside } from '@/hooks';

const DesktopFilterOptions = () => {
    const snap = useSnapshot(state);
    const [otherMenuOpen, setOtherMenuOpen] = useState(false);
    const outsideRef = useOnclickOutside(() => setOtherMenuOpen(false));

    return (
        <div className="grid gap-10 max-lg:hidden">
            <div className="grid gap-6">
                {/* Search */}
                <div className="flex items-center justify-start gap-6">
                    <label className="text-base font-700">Search:</label>
                    <div className="form-input relative w-full">
                        <input
                            type="text"
                            value={snap.formData?.search}
                            onChange={e => (state.formData.search = e.target.value)}
                            className="!pr-12"
                            placeholder="Enter area name or postal code"
                        />
                        <img
                            src="/public/assets/images/icons/icon-search.svg"
                            alt=""
                            width={24}
                            height={24}
                            className="absolute right-4 top-1/2 z-[3] -translate-y-1/2"
                        />
                    </div>
                </div>

                {/* Filters */}
                <div className="grid grid-cols-[auto_auto_auto] items-center justify-start gap-4">
                    <label className="text-base font-700">Filter by:</label>

                    {/* Filter options options */}
                    <div className="flex w-full items-center justify-start gap-4">
                        {/* Centre type*/}
                        <Dropdown
                            title="Centre type"
                            isOpen={snap.formData.openCentreTypeMenu}
                            options={snap.formData.centreTypes}
                            onClick={() => (state.formData.openCentreTypeMenu = !snap.formData.openCentreTypeMenu)}
                            closeDropdown={() => (state.formData.openCentreTypeMenu = false)}
                            type="centreType"
                            onChange={(e, index) => {
                                if (e.target.value === 'all') {
                                    state.formData.centreTypes.forEach(item => {
                                        item.active = item.value === 'all';
                                    });
                                } else {
                                    state.formData.centreTypes[0].active = false;
                                    state.formData.centreTypes[index].active = e.target.checked;
                                }
                            }}
                        />

                        {/* Programme type */}
                        <Dropdown
                            title="Programme type"
                            isOpen={snap.formData.openProgrammeMenu}
                            options={snap.formData.programmeTypes}
                            onClick={() => (state.formData.openProgrammeMenu = !snap.formData.openProgrammeMenu)}
                            closeDropdown={() => (state.formData.openProgrammeMenu = false)}
                            type="programmeType"
                            onChange={(e, index) => {
                                if (e.target.value === 'all') {
                                    state.formData.programmeTypes.forEach(item => {
                                        item.active = item.value === 'all';
                                    });
                                } else {
                                    state.formData.programmeTypes[0].active = false;
                                    state.formData.programmeTypes[index].active = e.target.checked;
                                }
                            }}
                        />

                        {/*  Others */}
                        <div className="relative grid w-full max-w-[13.5rem]" ref={outsideRef}>
                            <button
                                type="button"
                                onClick={() => setOtherMenuOpen(!otherMenuOpen)}
                                className="flex items-center justify-between gap-4 rounded-round border border-solid border-gray-20 bg-white px-5 py-[0.9rem]"
                            >
                                <span className="text-sm leading-6">Others</span>
                                <img
                                    src="/assets/images/icons/icon-arrow-down.svg"
                                    width={14}
                                    height={14}
                                    alt=""
                                    className={`transition-all duration-500 ${otherMenuOpen ? '-rotate-180' : 'rotate-0'}`}
                                />
                            </button>

                            {/* Dropdown menu */}
                            <div
                                className={`absolute ${styles.styles} left-0 top-full z-[3] mt-2 w-full overflow-hidden bg-white transition-all duration-1000 ${otherMenuOpen ? 'max-h-[32rem]' : 'max-h-0'}`}
                            >
                                <div className="grid gap-4 rounded-small border border-solid border-gray-20 px-4 py-2">
                                    {/* Range Slider */}
                                    <div className="grid gap-4">
                                        <span className="font-700">Distance</span>

                                        <Slider
                                            getAriaLabel={() => 'Distance'}
                                            value={snap.formData.distance.value}
                                            onChange={(_, value) => (state.formData.distance.value = value as number[])}
                                            valueLabelDisplay="auto"
                                            min={snap.formData.distance.min}
                                            max={snap.formData.distance.max}
                                        />

                                        <div className="-mt-1 flex items-center justify-between gap-4">
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

                                    {/* Certifications */}
                                    <div className="grid gap-2">
                                        <span className="font-700">SPARK certification</span>
                                        <div className="grid gap-2">
                                            {snap.formData.certifications.map((type, index) => (
                                                <Checkbox
                                                    key={index}
                                                    checked={type.active}
                                                    onChange={e => {
                                                        if (e.target.value === 'all') {
                                                            state.formData.certifications.forEach(item => {
                                                                item.active = item.value === 'all';
                                                            });
                                                        } else {
                                                            state.formData.certifications[0].active = false;
                                                            state.formData.certifications[index].active =
                                                                e.target.checked;
                                                        }
                                                    }}
                                                    id={type.value}
                                                    label={type.label}
                                                    className="py-2 [&_label]:text-sm"
                                                    value={type.value}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Mother tongue */}
                                    <div className="grid gap-2">
                                        <span className="font-700">Mother tongue</span>
                                        <div className="grid gap-2">
                                            {snap.formData.motherTongue.map((type, index) => (
                                                <Checkbox
                                                    key={index}
                                                    checked={type.active}
                                                    onChange={e => {
                                                        if (e.target.value === 'all') {
                                                            state.formData.motherTongue.forEach(item => {
                                                                item.active = item.value === 'all';
                                                            });
                                                        } else {
                                                            state.formData.motherTongue[0].active = false;
                                                            state.formData.motherTongue[index].active =
                                                                e.target.checked;
                                                        }
                                                    }}
                                                    id={`${type.value}__motherTongueDesktop`}
                                                    label={type.label}
                                                    className="py-2 [&_label]:text-sm"
                                                    value={type.value}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Apply filters */}
                    <div className="flex items-center justify-start gap-2 justify-self-start">
                        <button
                            onClick={() => snap.handleFilterClick()}
                            type="button"
                            className="mfs-button mfs-button--small w-[10.87rem]"
                        >
                            Apply filters
                        </button>

                        <button
                            type="button"
                            className="text-sm font-700 underline decoration-gray-80 decoration-2 underline-offset-[5px] transition-all duration-500 hover:text-primary-100 hover:decoration-primary-100"
                            onClick={snap.handleReset}
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesktopFilterOptions;
