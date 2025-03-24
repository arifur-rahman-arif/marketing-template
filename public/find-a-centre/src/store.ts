import { proxy } from 'valtio';
import { devtools } from 'valtio/utils';

export interface CentreData {
    centreType: string;
    programmeType: string[];
    distance: number;
    isCertified: boolean;
    motherTongue: string[];
}

export interface CentreSearchProps {
    centreType: Array<{
        label: string;
        value: string;
        active: boolean;
    }>;
    programmeType: Array<{
        label: string;
        value: string;
        active: boolean;
    }>;
    distance: {
        min: number;
        max: number;
    };
    latitude: number;
    longitude: number;
    isCertified: boolean;
    motherTongue: Array<{
        label: string;
        value: string;
        active: boolean;
    }>;
    search: string;
}

interface StoreInterface {
    formData: CentreSearchProps;
    centres: CentreData[];
    formSubmitted: boolean;
    modalOpen: boolean;
    isMutating: boolean;
    formError: string;
    handleFormSubmit: () => void;
    handleReset: () => void;
}

const defaultFormData: CentreSearchProps = {
    centreType: [
        {
            label: 'All',
            value: 'all',
            active: true
        },
        {
            label: 'Early Years Centre',
            value: 'early-years-centre',
            active: false
        },
        {
            label: 'Large Childcare Centre',
            value: 'large-childcare-centre',
            active: false
        }
    ],
    programmeType: [
        {
            label: 'Infant Care',
            value: 'infant-care',
            active: true
        },
        {
            label: 'Playgroup',
            value: 'playgroup',
            active: false
        },
        {
            label: 'Nursery 1',
            value: 'nursery-1',
            active: false
        },
        {
            label: 'Nursery 2',
            value: 'nursery-2',
            active: false
        },
        {
            label: 'Kindergarten 1',
            value: 'kindergarten-1',
            active: false
        },
        {
            label: 'Kindergarten 2',
            value: 'kindergarten-2',
            active: false
        }
    ],
    distance: {
        min: 0,
        max: 20
    },
    motherTongue: [
        {
            label: 'All',
            value: 'all',
            active: true
        },
        {
            label: 'Malay',
            value: 'malay',
            active: false
        },
        {
            label: 'Chinese',
            value: 'chinese',
            active: false
        },
        {
            label: 'Tamil',
            value: 'tamil',
            active: false
        }
    ],
    isCertified: false,
    search: '',
    latitude: 0,
    longitude: 0
};

export const state: StoreInterface = proxy<StoreInterface>({
    formData: { ...defaultFormData },
    modalOpen: false,
    handleReset: () => {
        state.formData = { ...defaultFormData };
    }
} as StoreInterface);

devtools(state, { name: 'Centre Search', enabled: true });
