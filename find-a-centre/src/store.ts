import { proxy } from 'valtio';
import { devtools } from 'valtio/utils';
import { cloneDeep } from 'lodash';
import Fuse from 'fuse.js';

export interface CentreData {
    title: string;
    link: string;
    centreCode?: string;
    centreType: 'early-years-centre' | 'large-childcare-centre';
    centreProgrammes: Array<{
        label: string;
        value: string;
    }>;
    distance: number;
    isCertified: boolean;
    motherTongue: Array<{
        label: string;
        value: string;
    }>;
    latitude: string;
    longitude: string;
    postalCode: string;
    centreAddress: string;
    imageUrl: string;
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
    filteredCentres: CentreData[] | [];
    formSubmitted: boolean;
    modalOpen: boolean;

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
    userCurrentLocation: {
        lat: number;
        lon: number;
        countryCode: string;
    };
    handleFormSubmit: () => void;
    handleReset: () => void;
    handleFilterClick: () => void;
    changeMapPosition: (lat: number, lon: number) => void;
    setDefaultMapView: () => void;
    calculateDistance: (lat1: number, lon1: number, lat2: number, lon2: number) => number;
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
            value: 'k1-programme',
            active: false
        },
        {
            label: 'Kindergarten 2',
            value: 'k2-programme',
            active: false
        }
    ],
    distance: {
        min: 0,
        max: 40,
        value: [5, 30]
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

export const state: StoreInterface = proxy<any>({
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
    filteredCentres: [],
    userCurrentLocation: {
        // lat: 1.3667, // Test value for Singapore
        // lon: 103.8, // Test value for Singapore,
        // countryCode: 'SG'
        lat: 0,
        lon: 0,
        countryCode: ''
    },
    handleReset: () => {
        state.formData = cloneDeep(defaultFormData);
        state.filteredCentres = state.centres;
        state.setDefaultMapView();

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

        state.filteredCentres = (() => {
            const { centreTypes, programmeTypes, distance, certifications, motherTongue, search } = state.activeFilters;

            let filteredCentres = state.centres.filter(centre => {
                let isMatch = true;

                // Centre Type Filtering
                if (!(centreTypes.includes('all') || centreTypes.includes(centre.centreType))) {
                    isMatch = false;
                }

                // Programme Types Filtering
                if (
                    !(
                        programmeTypes.includes('all') ||
                        centre.centreProgrammes.some(prog => programmeTypes.includes(prog.value))
                    )
                ) {
                    isMatch = false;
                }

                // Certification Filtering
                if (certifications.includes('certified-centres') && !centre.isCertified) {
                    isMatch = false;
                }

                // Mother Tongue Filtering
                if (
                    !(
                        motherTongue.includes('all') ||
                        centre.motherTongue.some(lang => motherTongue.includes(lang.value))
                    )
                ) {
                    isMatch = false;
                }

                // Distance Filtering
                // Enable this when user is in Singapore location
                if (
                    state.userCurrentLocation.countryCode === 'SG' &&
                    state.userCurrentLocation.lat &&
                    state.userCurrentLocation.lon
                ) {
                    if (centre.distance < distance.min || centre.distance > distance.max) {
                        isMatch = false;
                    }
                }

                return isMatch;
            });

            // **Fuzzy Search with Fuse.js**
            if (search.trim()) {
                const fuse = new Fuse(filteredCentres, {
                    keys: ['title', 'centreType', 'postalCode', 'centreProgrammes.label', 'motherTongue.label'],
                    threshold: 0.3, // Adjusts fuzziness (lower = stricter match, higher = looser match)
                    findAllMatches: true,
                    ignoreLocation: true
                });

                filteredCentres = fuse.search(search.trim()).map(result => result.item);
            }

            return filteredCentres;
        })();
    },
    /**
     * Calculates the distance between two points on the surface of the Earth.
     * @param lat1 The latitude of the first point.
     * @param lon1 The longitude of the first point.
     * @param lat2 The latitude of the second point.
     * @param lon2 The longitude of the second point.
     * @returns The distance between the two points in kilometers.
     */
    calculateDistance: (lat1: number, lon1: number, lat2: number, lon2: number) => {
        const toRad = (value: number) => (value * Math.PI) / 180;
        const R = 6371; // Earth's radius in KM

        const dLat = toRad(lat2 - lat1);
        const dLon = toRad(lon2 - lon1);

        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return parseFloat((R * c).toFixed(2));
    }
} as StoreInterface);

// devtools(state, { name: 'Centre Search', enabled: true });
