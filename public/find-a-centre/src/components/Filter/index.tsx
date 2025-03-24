import { state } from '@/store';
import { useSnapshot } from 'valtio';

const Filter = () => {
    const snap = useSnapshot(state);

    return (
        <div className="grid gap-8">
            <div className="form-input relative">
                <input
                    type="text"
                    value={snap.formData?.search}
                    onChange={e => (state.formData.search = e.target.value)}
                    className="!pr-12"
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
                className="flex items-center justify-between gap-4 pb-4"
                style={{ borderBottom: '1px solid var(--Gray-80)' }}
            >
                <button
                    type="button"
                    className="flex items-center justify-start gap-4 text-lg font-700"
                    onClick={() => (state.modalOpen = !snap.modalOpen)}
                >
                    <img src="/public/assets/images/icons/icon-filter.svg" alt="" width={24} height={24} />
                    Filters (9)
                </button>

                <button
                    type="button"
                    className="text-sm font-700 underline decoration-gray-80 decoration-2 underline-offset-[5px]"
                    onClick={snap.handleReset}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Filter;
