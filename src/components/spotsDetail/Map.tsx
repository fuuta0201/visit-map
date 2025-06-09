import React from 'react';
import Link from 'next/link';

type Props = {
  latitude: number;
  longitude: number;
  apiKey: string;
  pref: string;
  city: string;
};

const Map = ({ latitude, longitude, apiKey, pref, city }: Props) => {
  return (
    <div className="w-full mb-12">
      <Link
        href={`https://maps.google.com/maps?ll=${latitude},${longitude}`}
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100"
        target="blank"
        rel="noopener noreferrer"
      >
        <iframe
          src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${latitude},${longitude}`}
          width="520"
          height="320"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full rounded-l-lg h-80"
        ></iframe>
        <div className="flex flex-col justify-between p-4 leading-normal w-full md:w-[40%]">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
            Google Mapで場所を確認する
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{`${pref}${city}`}</p>
        </div>
      </Link>
    </div>
  );
};

export default Map;
