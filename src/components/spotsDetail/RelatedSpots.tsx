import React from 'react';
import type { Spot } from '@/lib/dummyData';

// UI
import Card from '@/components/spotsDetail/Card';

type Props = {
  relatedSpots: Spot[];
};

const RelatedSpots = ({ relatedSpots }: Props) => {
  return (
    <div className="w-full">
      <h2 className="text-xl md:text-2xl font-bold mb-3">Related News</h2>
      <ul className="flex flex-col md:flex-row md:justify-between">
        {relatedSpots.map((spot, _) => (
          <li key={spot.id} className="max-w-[30%]">
            <Card
              title={spot.title}
              userName={spot.userName}
              addr={`${spot.prefecture}${spot.city}`}
              createdAt={spot.createdAt}
              figure={spot.imageUrl}
              link={`/spots/${spot.id}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedSpots;
