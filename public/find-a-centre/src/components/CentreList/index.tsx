import Centre from '@/components/CentreList/Centre';
import React from 'react';
import { state } from '@/store';
import { useSnapshot } from 'valtio';
import { useOnclickOutside } from '@/hooks';

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
                {/* Item */}
                <Centre
                    image="/assets/images/section-images/centre-image.png"
                    isCertified
                    title="Blk 343 Ang Mo Kio"
                    address="Ave 10, #01-2336 Singapore 560343"
                    distance="±0.3KM AWAY"
                    link="#"
                    largeChildCareCentre
                    language={['Malay', 'Tamil']}
                    id="centre-1"
                    onClick={e => {
                        snap.changeMapPosition(1.2834, 103.8607);
                        document
                            .querySelectorAll('.centre-item')
                            .forEach(el => el.classList.remove('bg-secondary-lightGrayBeige'));
                        e.currentTarget.classList.add('bg-secondary-lightGrayBeige');

                        // Make the pin active
                        document.querySelectorAll('.leaflet-marker-icon').forEach(el => el.classList.remove('active'));
                        document.querySelector('.pin_1')?.classList.add('active');
                    }}
                    onMouseOver={() => {
                        // Make the pin active
                        document.querySelectorAll('.leaflet-marker-icon').forEach(el => el.classList.remove('active'));
                        document.querySelector('.pin_1')?.classList.add('active');
                    }}
                />

                <Centre
                    image="/assets/images/section-images/centre-image.png"
                    title="Blk 343 Ang Mo Kio"
                    address="Ave 10, #01-2336 Singapore 560343"
                    distance="±0.3KM AWAY"
                    link="#"
                    language={['Malay', 'Tamil']}
                    id="centre-2"
                    onClick={e => {
                        snap.changeMapPosition(1.2494, 103.8303);
                        document
                            .querySelectorAll('.centre-item')
                            .forEach(el => el.classList.remove('bg-secondary-lightGrayBeige'));
                        e.currentTarget.classList.add('bg-secondary-lightGrayBeige');

                        // Make the pin active
                        document.querySelectorAll('.leaflet-marker-icon').forEach(el => el.classList.remove('active'));
                        document.querySelector('.pin_2')?.classList.add('active');
                    }}
                    onMouseOver={() => {
                        // Make the pin active
                        document.querySelectorAll('.leaflet-marker-icon').forEach(el => el.classList.remove('active'));
                        document.querySelector('.pin_2')?.classList.add('active');
                    }}
                />

                <Centre
                    image="/assets/images/section-images/centre-image.png"
                    isCertified
                    title="Blk 343 Ang Mo Kio"
                    address="Ave 10, #01-2336 Singapore 560343"
                    distance="±0.3KM AWAY"
                    link="#"
                    largeChildCareCentre
                    language={['Malay', 'Tamil', 'English', 'French', 'Hindi']}
                    id="centre-3"
                    onClick={e => {
                        snap.changeMapPosition(1.2816, 103.8636);
                        document
                            .querySelectorAll('.centre-item')
                            .forEach(el => el.classList.remove('bg-secondary-lightGrayBeige'));
                        e.currentTarget.classList.add('bg-secondary-lightGrayBeige');

                        // Make the pin active
                        document.querySelectorAll('.leaflet-marker-icon').forEach(el => el.classList.remove('active'));
                        document.querySelector('.pin_3')?.classList.add('active');
                    }}
                    onMouseOver={() => {
                        // Make the pin active
                        document.querySelectorAll('.leaflet-marker-icon').forEach(el => el.classList.remove('active'));
                        document.querySelector('.pin_3')?.classList.add('active');
                    }}
                />

                <Centre
                    image="/assets/images/section-images/centre-image.png"
                    title="Blk 343 Ang Mo Kio"
                    address="Ave 10, #01-2336 Singapore 560343"
                    distance="±0.3KM AWAY"
                    link="#"
                    language={['Malay', 'Tamil']}
                    id="centre-4"
                    onClick={e => {
                        snap.changeMapPosition(1.3051, 103.8318);
                        document
                            .querySelectorAll('.centre-item')
                            .forEach(el => el.classList.remove('bg-secondary-lightGrayBeige'));
                        e.currentTarget.classList.add('bg-secondary-lightGrayBeige');

                        // Make the pin active
                        document.querySelectorAll('.leaflet-marker-icon').forEach(el => el.classList.remove('active'));
                        document.querySelector('.pin_4')?.classList.add('active');
                    }}
                    onMouseOver={() => {
                        // Make the pin active
                        document.querySelectorAll('.leaflet-marker-icon').forEach(el => el.classList.remove('active'));
                        document.querySelector('.pin_4')?.classList.add('active');
                    }}
                />
            </div>
        </div>
    );
};

export default CentreList;
