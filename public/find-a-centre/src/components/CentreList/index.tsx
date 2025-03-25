import Centre from '@/components/CentreList/Centre';
import React from 'react';

const CentreList = () => {
    return (
        <div className="grid bg-secondary-lightCream lg:max-w-[31.13rem] lg:py-10 lg:pr-5">
            <div
                id="centre-list"
                className="grid gap-6 overflow-y-auto overflow-x-hidden rounded-large p-5 max-lg:h-full max-lg:max-h-[50rem] sm:grid-cols-2 lg:max-h-[36.1rem] lg:grid-cols-1 lg:py-0"
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
                />

                <Centre
                    image="/assets/images/section-images/centre-image.png"
                    title="Blk 343 Ang Mo Kio"
                    address="Ave 10, #01-2336 Singapore 560343"
                    distance="±0.3KM AWAY"
                    link="#"
                    language={['Malay', 'Tamil']}
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
                />
            </div>
        </div>
    );
};

export default CentreList;
