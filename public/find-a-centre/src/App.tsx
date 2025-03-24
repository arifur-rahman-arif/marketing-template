import CentreList from '@/components/CentreList';
import Filter from '@/components/Filter';
import Map from '@/components/Map';
import { state } from '@/store';
import { cloneDeep } from 'lodash';
import useSWR from 'swr';

/**
 * Quote form react component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const App = () => {
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
        const res = await fetch(url, {
            headers: {
                'X-WP-NONCE': globalVariables.nonce // Include the nonce in the request headers
            }
        });
        return await res.json();
    };

    const url = '';

    const { data } = useSWR(url, getData);

    if (!data?.success) {
        // state.formData = cloneDeep(data?.data);
        // https://stgmfs5.wpenginepowered.com/wp-json/wp/v2/centre/?per_page=100&_fields=id,title,acf

        return (
            <form className="grid gap-8 md:gap-10">
                <Filter />
                <CentreList />
                <Map />
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
