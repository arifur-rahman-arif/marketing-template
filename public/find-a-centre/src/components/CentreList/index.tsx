import Centre from '@/components/CentreList/Centre';
import React from 'react';
import { state } from '@/store';
import { useOnclickOutside } from '@/hooks';
import { useSnapshot } from 'valtio';

const CentreList = () => {
    const snap = useSnapshot(state);

    const outsideRef = useOnclickOutside(() => {
        document.querySelectorAll('.centre-item').forEach(el => el.classList.remove('bg-secondary-lightGrayBeige'));
        document.querySelectorAll('.leaflet-marker-icon').forEach(el => el.classList.remove('active'));
    });

    return (
        <div className="grid w-full bg-secondary-lightCream lg:max-w-[31.13rem] lg:py-6 lg:pr-6">
            <div
                ref={outsideRef}
                id="centre-list"
                className="grid gap-6 overflow-y-auto overflow-x-hidden rounded-large p-5 !pb-1 max-lg:h-full max-lg:max-h-[50rem] sm:grid-cols-2 lg:max-h-[38.1rem] lg:grid-cols-1 lg:py-0 lg:pr-2"
            >
                {snap.filteredCentres?.map((centre, index) => (
                    <Centre
                        key={index}
                        image={centre.imageUrl}
                        isCertified={centre.isCertified}
                        title={centre.title}
                        address={centre.centreAddress}
                        distance={centre.distance || 0}
                        link={centre.link}
                        largeChildCareCentre={centre.centreType === 'large-childcare-centre'}
                        language={centre.motherTongue.map(item => item.label)}
                        id={`centre-${index + 1}`}
                        onClick={e => {
                            snap.changeMapPosition(Number(centre.latitude), Number(centre.longitude));
                            document
                                .querySelectorAll('.centre-item')
                                .forEach(el => el.classList.remove('bg-secondary-lightGrayBeige'));
                            e.currentTarget.classList.add('bg-secondary-lightGrayBeige');

                            // Make the pin active
                            document
                                .querySelectorAll('.leaflet-marker-icon')
                                .forEach(el => el.classList.remove('active'));
                            document.querySelector(`.pin_${index + 1}`)?.classList.add('active');
                        }}
                        onMouseOver={() => {
                            // Make the pin active
                            document
                                .querySelectorAll('.leaflet-marker-icon')
                                .forEach(el => el.classList.remove('active'));
                            document.querySelector(`.pin_${index + 1}`)?.classList.add('active');
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default CentreList;
