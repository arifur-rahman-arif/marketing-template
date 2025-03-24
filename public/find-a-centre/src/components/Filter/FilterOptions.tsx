import { state } from '@/store';
import { useSnapshot } from 'valtio';
import { useState } from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import styles from './Input.module.scss';

const FilterOptions = () => {
    const snap = useSnapshot(state);

    return (
        <div className={`grid gap-6 ${styles.styles}`}>
            {/* Range Slider */}
            <div className="grid gap-2">
                <span className="text-lg font-bold">Distance</span>

                <RangeSlider
                    min={snap.formData.distance.min}
                    max={snap.formData.distance.max}
                    value={snap.formData.distance.value}
                    onInput={value => (state.formData.distance.value = value)}
                />
            </div>
        </div>
    );
};

export default FilterOptions;
