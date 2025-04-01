import CentreList from '@/components/CentreList';
import Filter from '@/components/Filter';
import Map from '@/components/Map';
import { state } from '@/store';
import { cloneDeep } from 'lodash';
import React, { useEffect } from 'react';
import useSWR from 'swr';
import { useSnapshot } from 'valtio';

const NoResult = ({ type }: { type?: string }) => {
    const snap = useSnapshot(state);

    return (
        <div className="grid justify-items-center gap-4 py-10">
            <h2 className="text-center">
                Oops!
                <br />
                No results found
            </h2>

            {type != 'initRequest' ? (
                <>
                    <p>Try refining your search or exploring other filters.</p>
                    <button onClick={snap.handleReset} className="mfs-button">
                        Start new search
                    </button>
                </>
            ) : null}
        </div>
    );
};

/**
 * Quote form react component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const App = () => {
    const snap = useSnapshot(state);

    /**
     * Sends data to a specified URL using a POST request.
     *
     * @param {string} url - The URL to send the data to.
     * @param {object} payload - The payload object containing the data to be sent.
     * @param {any} payload.arg - The argument to be included in the payload.
     *
     * @returns {Promise<any>} - A promise that resolves to the JSON response from the server.
     */
    const getData = async (url: string) => {
        const res = await fetch(url);
        return await res.json();
    };

    const url = 'https://stgmfs5.wpenginepowered.com/wp-json/mfs/get-centres';

    const { data, error } = useSWR(url, getData);

    useEffect(() => {
        async function detect() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    async position => {
                        const { latitude, longitude } = position.coords;

                        state.userCurrentLocation.lat = latitude;
                        state.userCurrentLocation.lon = longitude;

                        const response = await fetch(
                            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
                        );
                        const data = await response.json();

                        state.userCurrentLocation.countryCode = data.countryCode;
                    },
                    error => {
                        console.error('Error retrieving location:', error);
                    }
                );
            }
        }
        detect();
    }, []);

    useEffect(() => {
        if (data?.status === 'success') {
            const { lat: userLat, lon: userLon, countryCode } = state.userCurrentLocation;

            state.centres = cloneDeep(data.data);

            // Set the distance value for each of the centre based on current user location
            if (countryCode === 'SG' && userLat && userLon) {
                state.centres = state.centres.map(centre => {
                    const calculatedDistance = snap.calculateDistance(
                        userLat,
                        userLon,
                        Number(centre.latitude),
                        Number(centre.longitude)
                    );

                    return {
                        ...centre,
                        distance: calculatedDistance
                    };
                });
            }

            state.filteredCentres = state.centres.sort((a, b) => {
                const priorityOrder = {
                    'large-childcare-centre': 1, // Highest priority (appears first)
                    'early-years-centre': 2 // Lower priority (appears later)
                };

                return priorityOrder[a.centreType] - priorityOrder[b.centreType];
            });
        }
    }, [data]);

    if (error) {
        console.log(error);

        return (
            <form className="grid gap-8 md:gap-10">
                <Filter />

                {/* Spacer */}
                <div className="h-[1px] w-full bg-gray-80 max-lg:hidden"></div>

                <p>
                    <b>0 centre(s)</b> found near your place
                </p>

                {/* No results component */}
                <NoResult type="initRequest" />
            </form>
        );
    }

    if (data?.status === 'success') {
        return (
            <form
                className="grid gap-8 md:gap-10"
                onSubmit={snap.handleFilterClick}
                onKeyDown={e => {
                    if (e.key === 'Enter') {
                        snap.handleFilterClick();
                    }
                }}
            >
                <Filter />

                {/* Spacer */}
                <div className="h-[1px] w-full bg-gray-80 max-lg:hidden"></div>

                <p>
                    <b>{snap.filteredCentres?.length} centre(s)</b> found near your place
                </p>

                {snap.filteredCentres?.length ? (
                    <div className="grid overflow-hidden rounded-large lg:max-h-[41.125rem] lg:grid-cols-[31.13rem_1fr]">
                        <CentreList />
                        <Map />
                    </div>
                ) : (
                    <NoResult />
                )}
            </form>
        );
    } else {
        return (
            <div className="rounded-radius2 bg-color15 grid min-h-[30rem] place-items-center md:min-h-[40rem]">
                <img alt="Loading" width="60" height="60" className="" src="/assets/images/icons/spinner-dark.svg" />
            </div>
        );
    }
};

export default App;
