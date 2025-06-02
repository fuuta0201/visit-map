// lib/dummyData.ts

export interface Post {
  id: number;
  userId: string;
  userName: string;
  title: string;
  message: string;
  imageUrl: string;
  rating: number;
  latitude: number;
  longitude: number;
  prefecture: string;
  city: string;
  createdAt: string;
  updatedAt: string;
}

export const dummyPosts: Post[] = [
  {
    id: 1,
    userId: '123',
    userName: 'たかし',
    title: 'Cozy Cabin Retreat',
    message:
      "Nestled in the heart of Mountain View, this cozy cabin offers a tranquil escape from the city bustle. With its rustic charm and modern amenities, it's the perfect spot for a weekend getaway or a longer retreat. Enjoy the warmth of the fireplace, the comfort of the plush furnishings, and the serene views of the surrounding landscape. Whether you're looking to relax by the fire, explore the nearby trails, or simply unwind in a peaceful setting, this cabin provides an idyllic backdrop for your stay.",
    imageUrl: '/images/dummy-image.png',
    rating: 4,
    latitude: 35.681382,
    longitude: 139.76608399999998,
    prefecture: '東京都',
    city: '千代田区',
    createdAt: '2025-05-20T10:00:00Z',
    updatedAt: '2025-05-20T10:00:00Z',
  },
  {
    id: 2,
    userId: '231',
    userName: 'たかし',
    title: 'Cozy Cabin Retreat',
    message:
      "Nestled in the heart of Mountain View, this cozy cabin offers a tranquil escape from the city bustle. With its rustic charm and modern amenities, it's the perfect spot for a weekend getaway or a longer retreat. Enjoy the warmth of the fireplace, the comfort of the plush furnishings, and the serene views of the surrounding landscape. Whether you're looking to relax by the fire, explore the nearby trails, or simply unwind in a peaceful setting, this cabin provides an idyllic backdrop for your stay.",
    imageUrl: '/images/dummy-image.png',
    rating: 4,
    latitude: 35.681382,
    longitude: 139.76608399999998,
    prefecture: '東京都',
    city: '千代田区',
    createdAt: '2025-05-14T10:00:00Z',
    updatedAt: '2025-05-19T10:00:00Z',
  },
  {
    id: 3,
    userId: '308',
    userName: 'たかし',
    title: 'Cozy Cabin Retreat',
    message:
      "Nestled in the heart of Mountain View, this cozy cabin offers a tranquil escape from the city bustle. With its rustic charm and modern amenities, it's the perfect spot for a weekend getaway or a longer retreat. Enjoy the warmth of the fireplace, the comfort of the plush furnishings, and the serene views of the surrounding landscape. Whether you're looking to relax by the fire, explore the nearby trails, or simply unwind in a peaceful setting, this cabin provides an idyllic backdrop for your stay.",
    imageUrl: '/images/dummy-image.png',
    rating: 4,
    latitude: 35.681382,
    longitude: 139.76608399999998,
    prefecture: '東京都',
    city: '千代田区',
    createdAt: '2025-04-20T10:00:00Z',
    updatedAt: '2025-04-22T10:00:00Z',
  },
];

export const getPostById = async (id: number): Promise<Post | undefined> => {
  return dummyPosts.find((post) => post.id === id);
};
