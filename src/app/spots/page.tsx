import React from 'react';
import { getSpots } from '@/lib/dummyData';

// UI
import SpotsDisplay from '@/components/spots/SpotsDisplay';

const page = async () => {
  const spots = await getSpots();

  if (!spots) {
    return;
  }

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 lg:px-20">
        <SpotsDisplay spotsProp={spots} />
      </div>
    </div>
  );
};

export default page;
