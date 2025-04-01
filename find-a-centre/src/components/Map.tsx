import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { state } from '@/store';
import { useSnapshot } from 'valtio';

// Fix default marker icon issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: '/assets/images/icons/icon-map-dark.svg',
    iconUrl: '/assets/images/icons/icon-map-dark.svg',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
    // iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    // iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    // shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
});

// Define a function to create an SVG marker with a customizable color
const createSvgIcon = (id: string) => {
    return L.divIcon({
        className: id,
        html: `
           <svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_39365_31346)">
                    <path d="M6.82994 10.9701C9.92056 5.34931 14.8295 2.69258 21.1702 2.41431C21.9796 2.49183 22.8097 2.52645 23.6247 2.65658C28.2786 3.40002 32.0317 5.65111 34.6137 9.59952C37.2747 13.6656 38.019 18.0155 36.0204 22.6298C34.8008 25.4471 33.1765 28.025 31.3956 30.51C28.9813 33.8742 26.3009 37.021 23.5069 40.0723C22.2276 41.4706 19.9755 41.4567 18.7101 40.0086C16.8322 37.86 14.946 35.7169 13.1512 33.5004C10.6496 30.4076 8.36555 27.1583 6.65947 23.5435C5.96234 22.0691 5.37193 20.5504 5.20008 18.9168C4.90626 16.1036 5.48004 13.4261 6.82994 10.9701ZM21.1563 25.353C24.9732 25.3475 28.1095 22.1605 28.1054 18.291C28.0998 14.4713 24.9662 11.3591 21.1328 11.3674C17.2854 11.3757 14.1629 14.5253 14.1629 18.3976C14.1643 22.2311 17.3076 25.3585 21.1563 25.353Z" fill="#595959"/>
                    <path d="M17.0221 18.3782C17.011 20.6376 18.8349 22.4858 21.0898 22.4997C23.3988 22.5121 25.242 20.6875 25.2448 18.3865C25.2476 16.152 23.4001 14.2886 21.1591 14.2651C18.9222 14.2415 17.0346 16.1188 17.0221 18.3782Z" fill="#595959"/>
                </g>
                <defs>
                    <clipPath id="clip0_39365_31346">
                    <rect width="41" height="41" fill="white" transform="translate(0 0.706055)"/>
                    </clipPath>
                </defs>
            </svg>
        `,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40]
    });
};

const Map = () => {
    const mapRef = useRef<any>();
    const snap = useSnapshot(state);

    const preloadTiles = (lat: number, lon: number, zoom: number) => {
        const tileLayer = mapRef.current._layers[0]; // Access the tile layer
        const bounds = mapRef.current.getBounds();
        const tileSize = tileLayer.options.tileSize;

        // Calculate the tiles to preload in the area around the new position
        const topLeft = mapRef.current.project([lat, lon], zoom).subtract([tileSize / 2, tileSize / 2]);
        const bottomRight = mapRef.current.project([lat, lon], zoom).add([tileSize / 2, tileSize / 2]);

        const topLeftTile = mapRef.current.unproject(topLeft, zoom);
        const bottomRightTile = mapRef.current.unproject(bottomRight, zoom);

        // Preload tiles within the new bounds
        for (let x = topLeftTile.lng; x <= bottomRightTile.lng; x++) {
            for (let y = topLeftTile.lat; y <= bottomRightTile.lat; y++) {
                const tileUrl = tileLayer.getTileUrl({ x, y, z: zoom });
                const img = new Image();
                img.src = tileUrl;
            }
        }
    };

    const changeMapPosition = (lat: number, lon: number) => {
        const map = mapRef.current;
        if (map) {
            // Reduce or disable zoom animation when zooming in or out
            map.flyTo([lat, lon], 15, {
                animate: true, // Smooth animation
                duration: 0.3 // Animation duration in seconds
            });
        }
    };

    const setDefaultMapView = () => {
        if (mapRef.current) {
            const map = mapRef.current;
            map.setView([averageLatitude, averageLongitude], 12, {
                animate: false,
                duration: 0.5
            });
        }
    };

    const averageLatitude =
        snap.filteredCentres.reduce((acc, centre) => acc + Number(centre.latitude), 0) / snap.filteredCentres.length;
    const averageLongitude =
        snap.filteredCentres.reduce((acc, centre) => acc + Number(centre.longitude), 0) / snap.filteredCentres.length;

    useEffect(() => {
        state.changeMapPosition = changeMapPosition;
        state.setDefaultMapView = setDefaultMapView;
    }, []);

    useEffect(() => {
        setDefaultMapView();
    }, [snap.filteredCentres]);

    // Function to handle the click event on a marker
    const handleMarkerClick = (lat: number, lon: number, id: number) => {
        changeMapPosition(lat, lon);

        // Set the centre scroll into view with provided id
        const centreElement = document.getElementById(`centre-${id}`);
        if (centreElement) {
            centreElement.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling
                block: 'center', // Scroll the item to the center of the view,
                inline: 'nearest' // Ensure no horizontal scroll, just vertical centering
            });
            document.querySelectorAll('.centre-item').forEach(el => el.classList.remove('bg-secondary-lightGrayBeige'));
            centreElement.classList.add('bg-secondary-lightGrayBeige');
        }
    };

    return (
        <div className="relative z-40 hidden w-full place-items-center lg:grid">
            <MapContainer
                center={[averageLatitude, averageLongitude]}
                zoom={12}
                style={{ height: '657.59px', width: '671.92px' }}
                minZoom={12}
                maxZoom={18}
                scrollWheelZoom={false}
                ref={mapRef}
            >
                <TileLayer url="https://www.onemap.gov.sg/maps/tiles/Grey/{z}/{x}/{y}.png" crossOrigin="anonymous" />
                {snap.filteredCentres?.map((centre, index) => (
                    <Marker
                        key={index}
                        position={[Number(centre.latitude), Number(centre.longitude)]}
                        // icon={customIcon}
                        icon={createSvgIcon(`pin_${index + 1}`)}
                        eventHandlers={{
                            click: () => handleMarkerClick(Number(centre.latitude), Number(centre.longitude), index + 1) // Handle the click event
                        }}
                    >
                        <Popup>{centre.title}</Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default Map;
