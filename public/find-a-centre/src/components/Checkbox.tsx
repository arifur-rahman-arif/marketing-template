import React from 'react';

type CheckboxProps = {
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    id: string;
    label: string;
    value: string;
    className?: string; // Added optional className prop for future enhancements.
};

const Checkbox = ({ checked, onChange, id, label, value, className }: CheckboxProps) => {
    return (
        <div className={`form-input form-input--checkbox ${className}`}>
            <label htmlFor={id} className="cursor-pointer">
                <input
                    id={id}
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    className="form-input"
                    value={value}
                />
                <span className="checkbox">
                    <svg
                        className="h-3 w-3"
                        width="16"
                        height="16"
                        viewBox="0 0 14 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.3334 1L5.00002 8.33333L1.66669 5"
                            stroke="#fff"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
                {label}
            </label>
        </div>
    );
};

export default Checkbox;
