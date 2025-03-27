import FilterOptions from './FilterOptions';
import { state } from '@/store';
import { useSnapshot } from 'valtio';
import React, { useEffect } from 'react';
import DesktopFilterOptions from '@/components/Filter/DesktopFilterOptions';

const Filter = () => {
    const snap = useSnapshot(state);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1024) {
                state.formData.openCentreTypeMenu = true;
                state.formData.openProgrammeMenu = true;
                state.formData.openMotherTongueMenu = true;
                state.formData.certificationMenuOpen = true;
            } else {
                state.formData.openCentreTypeMenu = false;
                state.formData.openProgrammeMenu = false;
                state.formData.openMotherTongueMenu = false;
                state.formData.certificationMenuOpen = false;
            }
        };

        if (window.innerWidth <= 1024) {
            state.formData.openCentreTypeMenu = true;
            state.formData.openProgrammeMenu = true;
            state.formData.openMotherTongueMenu = true;
            state.formData.certificationMenuOpen = true;
        } else {
            state.formData.openCentreTypeMenu = false;
            state.formData.openProgrammeMenu = false;
            state.formData.openMotherTongueMenu = false;
            state.formData.certificationMenuOpen = false;
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getSelectedFilters = () => {
        const centreCount = snap.formData.centreTypes.filter(item => item.active === true).length;
        const programmeCount = snap.formData.programmeTypes.filter(item => item.active === true).length;
        const languageCount = snap.formData.motherTongue.filter(item => item.active === true).length;
        const certifiedCount = snap.formData.certifications.filter(item => item.active === true).length;

        return 1 + centreCount + programmeCount + languageCount + certifiedCount;
    };

    return (
        <div className="grid gap-8">
            <DesktopFilterOptions />

            {/* Mobile search */}
            <div className="form-input relative lg:!hidden">
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

            {/* Mobile Filter */}
            <div
                className="flex items-center justify-between gap-4 pb-4 lg:hidden"
                style={{ borderBottom: '1px solid var(--Gray-80)' }}
            >
                <button
                    type="button"
                    className="flex items-center justify-start gap-4 text-lg font-700"
                    onClick={() => (state.modalOpen = !snap.modalOpen)}
                >
                    <img src="/public/assets/images/icons/icon-filter.svg" alt="" width={24} height={24} />
                    Filters ({getSelectedFilters()})
                </button>

                <button
                    type="button"
                    className="text-sm font-700 underline decoration-gray-80 decoration-2 underline-offset-[5px]"
                    onClick={snap.handleReset}
                >
                    Reset
                </button>
            </div>

            {/* Modal for mobile and medium devices*/}
            <div
                className={`container fixed left-0 top-0 z-20 h-full w-full overflow-y-auto overflow-x-hidden bg-white transition-all duration-700 lg:hidden ${snap.modalOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-full opacity-0'}`}
            >
                <div className="grid gap-6 pb-24 pt-10">
                    {/* Header */}
                    <div className="flex items-center justify-between gap-4">
                        <button type="button" onClick={() => (state.modalOpen = false)}>
                            <img src="/assets/images/icons/icon-cross.svg" alt="" width={24} height={24} />
                        </button>

                        <span className="text-lg font-700">Filters</span>

                        <button
                            type="button"
                            className="text-base font-700 underline decoration-gray-80 decoration-2 underline-offset-[10px]"
                            onClick={snap.handleReset}
                        >
                            Reset
                        </button>
                    </div>

                    {/* Filter Options */}
                    <FilterOptions />
                </div>
            </div>
        </div>
    );
};

export default Filter;
