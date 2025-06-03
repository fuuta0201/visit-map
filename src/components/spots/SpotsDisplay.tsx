'use client';
import React, { useState, useEffect } from 'react';
import type { Spot } from '@/lib/dummyData';
import Link from 'next/link';

// UI
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Card from '@/components/common/Card';

type Props = {
  spotsProp: Spot[];
};

const SpotsDisplay = ({ spotsProp }: Props) => {
  const [spots, setSpots] = useState<Spot[] | undefined>([]);

  useEffect(() => {
    if (spotsProp) {
      setSpots([...spotsProp]);
    }
  }, []);

  if (!spots) {
    return <p>投稿データが見つかりませんでした。</p>;
  }

  const handleSortChange = (type: string) => {
    let sortedSpots: Spot[] = spots;

    if (type === 'post') {
      sortedSpots = spots.sort((a: Spot, b: Spot) => {
        return Date.parse(b.createdAt) - Date.parse(a.createdAt);
      });
    } else if (type === 'rate') {
      sortedSpots = spots.sort((a: Spot, b: Spot) => {
        return b.rating - a.rating;
      });
    }

    setSpots([...sortedSpots]);
  };
  return (
    <>
      <ul className="flex flex-col md:grid md:grid-cols-3 gap-3 w-full md:w-96 mb-10">
        <li className="w-full flex flex-col justify-start gap-2">
          <Label htmlFor="prefecture">都道府県</Label>
          <Input name="prefecture" placeholder="東京都" />
        </li>
        <li className="w-full flex flex-col justify-start gap-2">
          <Label htmlFor="city">市区町村</Label>
          <Input name="city" placeholder="新宿区" />
        </li>
        <li>
          <Label htmlFor="sort">並び替え</Label>
          <Select name="sort" defaultValue="post" onValueChange={(type) => handleSortChange(type)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="post">投稿日順</SelectItem>
              <SelectItem value="rate">評価順</SelectItem>
            </SelectContent>
          </Select>
        </li>
      </ul>
      <ul className="flex flex-col gap-6 md:grid md:grid-cols-3 md:justify-between md:gap-x-3 md:gap-y-6">
        {spots.map((spot, _) => (
          <li key={spot.id}>
            <Card
              title={spot.title}
              userName={spot.userName}
              addr={`${spot.prefecture}${spot.city}`}
              createdAt={spot.createdAt}
              figure={spot.imageUrl}
              link={`/spots/${spot.id}`}
              rate={spot.rating}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default SpotsDisplay;
