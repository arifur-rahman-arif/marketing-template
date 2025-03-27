import { proxy } from 'valtio';
import { devtools } from 'valtio/utils';
import { cloneDeep } from 'lodash';

export interface CentreData {
    centreType: string;
    programmeType: string[];
    distance: number;
    isCertified: boolean;
    motherTongue: string[];
}

export interface CentreSearchProps {
    openCentreTypeMenu: boolean;
    centreTypes: Array<{
        label: string;
        value: string;
        active: boolean;
    }>;
    programmeTypes: Array<{
        label: string;
        value: string;
        active: boolean;
    }>;
    openProgrammeMenu: boolean;
    distance: {
        min: number;
        max: number;
        value: number[];
    };
    latitude: number;
    longitude: number;
    certificationMenuOpen: boolean;
    certifications: Array<{
        label: string;
        value: string;
        active: boolean;
    }>;
    openMotherTongueMenu: boolean;
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
    handleFilterClick: () => void;
    activeFilters: {
        search: string;
        centreTypes: string[];
        programmeTypes: string[];
        distance: {
            min: number;
            max: number;
        };
        latitude: number;
        longitude: number;
        certifications: string[];
        motherTongue: string[];
    };
    changeMapPosition: (lat: number, lon: number) => void;
}

const defaultFormData: CentreSearchProps = {
    openCentreTypeMenu: false,
    centreTypes: [
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
    openProgrammeMenu: false,
    programmeTypes: [
        {
            label: 'All',
            value: 'all',
            active: true
        },
        {
            label: 'Infant Care',
            value: 'infant-care',
            active: false
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
        max: 20,
        value: [5, 15]
    },
    openMotherTongueMenu: false,
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
    certificationMenuOpen: false,
    certifications: [
        {
            label: 'Certified Centres',
            value: 'certified-centres',
            active: false
        }
    ],
    search: '',
    latitude: 0,
    longitude: 0
};

export const state: StoreInterface = proxy<StoreInterface>({
    formData: cloneDeep(defaultFormData),
    modalOpen: false,
    activeFilters: {
        search: '',
        centreTypes: ['all'],
        programmeTypes: ['all'],
        distance: {
            min: 5,
            max: 15
        },
        latitude: 0,
        longitude: 0,
        certifications: ['certified-centres'],
        motherTongue: ['all']
    },
    handleReset: () => {
        state.formData = cloneDeep(defaultFormData);
    },
    handleFilterClick: () => {
        state.activeFilters = {
            search: state.formData.search,
            centreTypes: state.formData.centreTypes.filter(item => item.active).map(item => item.value),
            programmeTypes: state.formData.programmeTypes.filter(item => item.active).map(item => item.value),
            distance: {
                min: state.formData.distance.value[0],
                max: state.formData.distance.value[1]
            },
            latitude: state.formData.latitude,
            longitude: state.formData.longitude,
            certifications: state.formData.certifications.filter(item => item.active).map(item => item.value),
            motherTongue: state.formData.motherTongue.filter(item => item.active).map(item => item.value)
        };
    }
} as StoreInterface);

devtools(state, { name: 'Centre Search', enabled: true });
