import React from 'react';

interface Props {
    image: string;
    isCertified?: boolean;
    title: string;
    address: string;
    distance: string;
    language: string[];
    link: string;
    largeChildCareCentre?: boolean;
    id: string;
    onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onMouseOver: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Centre = ({
    image,
    isCertified,
    title,
    address,
    distance,
    language,
    link,
    largeChildCareCentre,
    id,
    onClick,
    onMouseOver
}: Props) => {
    return (
        <div
            className="centre-item grid cursor-pointer content-start gap-2 rounded-large p-2.5 transition-all duration-500 hover:bg-secondary-lightGrayBeige lg:max-w-[27.125rem] lg:grid-cols-[auto_1fr] lg:gap-4"
            id={id}
            onClick={onClick}
            onMouseOver={onMouseOver}
        >
            <div className="relative">
                <img
                    src={image}
                    width={228}
                    height={228}
                    alt=""
                    className="w-full rounded-medium lg:h-[14.25rem] lg:max-w-[14.25rem] lg:object-cover"
                />

                {/* Centre type */}
                {largeChildCareCentre ? (
                    <span className="absolute left-2 top-2 rounded-large bg-primary-100 px-2 py-1 text-xs font-700">
                        Large Childcare Centre
                    </span>
                ) : null}
            </div>

            <div className="flex flex-col gap-2">
                {isCertified ? <img src="/assets/images/logos/spark-logo.png" width={46} height={44} alt="" /> : null}
                {/* Is certified */}

                {/* Title */}
                <span className="text-sm font-700">{title}</span>

                {/* Address */}
                <p className="text-sm">{address}</p>

                {/* Distance */}
                <span className="text-xs font-700 leading-5 text-primary-100">{distance}</span>

                {/* Curriculum */}
                <div className="mt-2 grid lg:mt-auto">
                    <span className="text-xs font-700 uppercase leading-5">CURRICULUM OFFERED</span>

                    <div className="flex flex-wrap items-center justify-start gap-x-2 gap-y-0">
                        {language?.map((item, index) => (
                            <React.Fragment key={item}>
                                <span className="text-xs leading-5">{item}</span>
                                {language.length - 1 !== index && (
                                    <span className="block h-0.5 w-0.5 rounded-full bg-gray-80"></span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

            {/* Details button */}
            <a
                className="mfs-button mfs-button--secondary mfs-button--small lg:col-span-full lg:!text-base"
                href={link}
            >
                Centre details
            </a>
        </div>
    );
};

export default Centre;
