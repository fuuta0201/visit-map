import React from 'react';
import { getSpotById, getRelatedSpots } from '@/lib/dummyData';
import Image from 'next/image';

// UI
import RelatedSpots from '@/components/spotsDetail/RelatedSpots';

interface PostPageProps {
  params: {
    id: string;
  };
}

const page = async ({ params }: PostPageProps) => {
  // Get Spot
  const { id } = await params;
  const spot = await getSpotById(parseInt(id, 10));

  if (!spot) {
    return <p>投稿データが見つかりませんでした。</p>;
  }

  // Date Format
  const createdAtDate = new Date(spot.createdAt);
  const formattedCreatedAt = createdAtDate.toLocaleString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  // Get Related Spots
  const relatedSpots = await getRelatedSpots(spot.prefecture);
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 lg:px-20">
        <figure className="w-full mb-7">
          <Image
            src={spot.imageUrl}
            width={930}
            height={320}
            sizes="100%"
            className="w-full h-auto rounded-md"
            alt=""
          />
        </figure>
        <h1 className="text-2xl lg:text-3xl font-bold mb-3">{spot.title}</h1>
        <dl className="text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-2">
            <dt>所在地：</dt>
            <dd>{`${spot.prefecture}${spot.city}`}</dd>
          </div>
          <div className="flex items-center gap-2">
            <dt>投稿日：</dt>
            <dd>{formattedCreatedAt}</dd>
          </div>
          <div className="flex items-center gap-2">
            <dt>投稿者：</dt>
            <dd>{spot.userName}</dd>
          </div>
        </dl>
        <div className="mb-8">
          <p>{spot.message}</p>
        </div>
        {relatedSpots && <RelatedSpots relatedSpots={relatedSpots} />}
      </div>
    </div>
  );
};

export default page;
